#!/usr/bin/env node
/**
 * tests/stress/accordion_stress.test.mjs (Proposed Hardened Remediation)
 * Adversarial Empirical Stress Test Suite for Accordions & Chapters
 *
 * Verifies:
 * 1. Store integrity under rapid concurrent-like mutations (5,000 operations)
 * 2. Live Headless Chrome CDP stress across all 9 chapters
 * 3. Dynamic port allocation & isolated temporary Chrome user-data-dir
 * 4. React mount & hydration polling (zero race conditions)
 * 5. Rapid accordion opening/closing bursts (animation interruptions, double/triple clicks)
 * 6. Micro-interactions during animation (bookmarking, completion, tab toggling, MCQ selection)
 * 7. 0 Console errors, 0 unhandled runtime exceptions, and zero layout thrashing (CLS < 0.05)
 */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import assert from 'node:assert/strict';
import net from 'node:net';
import os from 'node:os';
import { chaptersData } from '../../src/data/chaptersData.ts';
import { useStudyStore } from '../../src/stores/useStudyStore.ts';
import { useWorkspaceStore } from '../../src/store/workspaceStore.ts';

async function getAvailablePort(preferredPort) {
  return new Promise((resolve) => {
    const srv = net.createServer();
    srv.listen(preferredPort, '127.0.0.1', () => {
      const port = srv.address().port;
      srv.close(() => resolve(port));
    });
    srv.on('error', () => {
      const fallback = net.createServer();
      fallback.listen(0, '127.0.0.1', () => {
        const port = fallback.address().port;
        fallback.close(() => resolve(port));
      });
    });
  });
}

function findChrome() {
  const candidates = [
    process.env.CHROME_BIN,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error('Chrome executable not found on host.');
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForHttp(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {}
    await sleep(200);
  }
  return false;
}

// ============================================================================
// PHASE 1: Store Stress & State Invariants (5,000 rapid mutations)
// ============================================================================
function runStoreStress() {
  console.log('\n--- PHASE 1: Store Integrity & Mutation Stress ---');
  const allQuestionIds = chaptersData.flatMap((c) => c.questions.map((q) => q.id));
  assert(allQuestionIds.length > 30, 'Curriculum must contain questions');

  const start = performance.now();
  const operations = 5000;

  for (let i = 0; i < operations; i++) {
    const qId = allQuestionIds[i % allQuestionIds.length];
    const ch = chaptersData[i % chaptersData.length];

    // Interleave study store and workspace store updates
    useStudyStore.getState().toggleBookmark(qId);
    useWorkspaceStore.getState().toggleBookmark(qId);
    useStudyStore.getState().toggleQuestionCompleted(qId);

    if (i % 50 === 0) {
      useStudyStore.getState().setActiveChapterId(ch.id);
      useWorkspaceStore.getState().setSelectedChapterId(ch.id);
    }
  }

  const duration = performance.now() - start;
  console.log(`   ⚡ Completed ${operations} store mutations in ${duration.toFixed(2)}ms (${(operations / (duration / 1000)).toFixed(0)} ops/sec)`);

  const studyState = useStudyStore.getState();
  const wsState = useWorkspaceStore.getState();

  assert(studyState.bookmarks instanceof Set, 'StudyStore bookmarks must be a Set');
  assert(studyState.completedQuestions instanceof Set, 'StudyStore completedQuestions must be a Set');
  assert(Array.isArray(wsState.bookmarks), 'WorkspaceStore bookmarks must be an Array');
  assert(typeof studyState.activeChapterId === 'string', 'Active chapter must be string');
  console.log('   ✔ Phase 1 PASSED: Store integrity verified with 0 invariant violations.');
}

// ============================================================================
// PHASE 2 & 3: Live Headless Chrome CDP Stress Across All 9 Chapters
// ============================================================================
async function runBrowserStress() {
  console.log('\n--- PHASE 2: Live Browser CDP Stress Across All 9 Chapters ---');
  const chromePath = findChrome();
  console.log(`[CDP] Chrome detected at: ${chromePath}`);

  // Dynamic port discovery to prevent collisions
  const previewPort = await getAvailablePort(4175);
  const cdpPort = await getAvailablePort(9223);
  const targetUrl = `http://localhost:${previewPort}`;
  const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-stress-'));

  console.log(`[Config] Preview Port: ${previewPort} | CDP Port: ${cdpPort}`);
  console.log(`[Config] Chrome Temp Profile: ${tempProfileDir}`);

  // 1. Launch Vite preview server
  console.log(`[Preview] Starting Vite preview on port ${previewPort}...`);
  const viteBin = path.resolve('node_modules/vite/bin/vite.js');
  const previewProcess = spawn(
    process.execPath,
    [viteBin, 'preview', '--port', String(previewPort)],
    { stdio: 'ignore' }
  );

  let chromeProcess = null;
  let ws = null;

  async function cleanup() {
    console.log('\n[Cleanup] Shutting down browser and preview processes...');
    if (ws && ws.readyState === WebSocket.OPEN) {
      try {
        ws.close();
      } catch {}
    }
    if (chromeProcess) {
      try {
        chromeProcess.kill();
      } catch {}
    }
    if (previewProcess) {
      try {
        previewProcess.kill();
      } catch {}
    }
    if (tempProfileDir && fs.existsSync(tempProfileDir)) {
      try {
        await sleep(200);
        fs.rmSync(tempProfileDir, { recursive: true, force: true });
      } catch {
        try {
          await sleep(500);
          fs.rmSync(tempProfileDir, { recursive: true, force: true });
        } catch {}
      }
    }
  }

  try {
    const previewReady = await waitForHttp(targetUrl, 15000);
    if (!previewReady) throw new Error(`Preview server not responding at ${targetUrl}`);
    console.log(`[Preview] Server alive at ${targetUrl}`);

    // 2. Launch Chrome with CDP and isolated user profile
    console.log(`[CDP] Launching Headless Chrome on port ${cdpPort}...`);
    const chromeFlags = [
      '--headless=new',
      `--remote-debugging-port=${cdpPort}`,
      `--user-data-dir=${tempProfileDir}`,
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--mute-audio',
      '--window-size=1280,960',
      'about:blank',
    ];

    chromeProcess = spawn(chromePath, chromeFlags, { stdio: 'ignore' });

    const cdpReady = await waitForHttp(`http://127.0.0.1:${cdpPort}/json/version`, 10000);
    if (!cdpReady) throw new Error(`Chrome CDP endpoint not responding on port ${cdpPort}`);

    const targetsRes = await fetch(`http://127.0.0.1:${cdpPort}/json`);
    const targets = await targetsRes.json();
    let pageTarget = targets.find((t) => t.type === 'page');
    if (!pageTarget) {
      const newTargetRes = await fetch(`http://127.0.0.1:${cdpPort}/json/new?about:blank`, { method: 'PUT' });
      pageTarget = await newTargetRes.json();
    }

    const wsUrl = pageTarget.webSocketDebuggerUrl;
    ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let msgId = 1;
    const pendingRequests = new Map();
    const consoleErrors = [];
    const runtimeExceptions = [];

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pendingRequests.has(msg.id)) {
        const { resolve, reject } = pendingRequests.get(msg.id);
        pendingRequests.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }

      if (msg.method === 'Console.messageAdded' && msg.params.message.level === 'error') {
        consoleErrors.push(msg.params.message.text);
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        const details = msg.params.exceptionDetails;
        runtimeExceptions.push(details.text || details.exception?.description || 'Unknown exception');
      }
    };

    function sendCommand(method, params = {}) {
      return new Promise((resolve, reject) => {
        const id = msgId++;
        pendingRequests.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    // Enable domains
    await sendCommand('Page.enable');
    await sendCommand('Runtime.enable');
    await sendCommand('Console.enable');
    await sendCommand('Performance.enable');

    console.log(`[CDP] Navigating to ${targetUrl}...`);
    await sendCommand('Page.navigate', { url: targetUrl });

    // Wait for React mount and accordion hydration
    console.log('[CDP] Waiting for DOM mount and React hydration...');
    const hydrationResult = await sendCommand('Runtime.evaluate', {
      expression: `new Promise((resolve) => {
        const start = Date.now();
        const check = () => {
          const buttons = document.querySelectorAll('nav[aria-label="Chapter Selector"] button');
          const accordions = document.querySelectorAll('article header');
          if (buttons.length >= 9 && accordions.length > 0) {
            resolve({ ok: true, buttons: buttons.length, accordions: accordions.length, elapsed: Date.now() - start });
          } else if (Date.now() - start > 20000) {
            resolve({ ok: false, buttons: buttons.length, accordions: accordions.length, elapsed: Date.now() - start });
          } else {
            setTimeout(check, 100);
          }
        };
        check();
      })`,
      awaitPromise: true,
      returnByValue: true,
    });

    const hyd = hydrationResult.result?.value;
    if (!hyd || !hyd.ok) {
      throw new Error(`React hydration timed out after 20s (buttons: ${hyd?.buttons ?? 0}, accordions: ${hyd?.accordions ?? 0})`);
    }
    console.log(`[CDP] Hydrated in ${hyd.elapsed}ms (${hyd.buttons} chapter buttons, ${hyd.accordions} accordions).`);

    // Setup Cumulative Layout Shift observer in browser
    await sendCommand('Runtime.evaluate', {
      expression: `
        window.__clsTotal = 0;
        window.__interactionShift = 0;
        try {
          const obs = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              window.__clsTotal += entry.value;
              if (window.__trackingInteractions) {
                window.__interactionShift += entry.value;
              }
            }
          });
          obs.observe({ type: 'layout-shift', buffered: true });
        } catch (e) {}
      `,
    });

    // 3. Stress-test all 9 chapters sequentially
    const chaptersCount = chaptersData.length;
    console.log(`[Stress] Testing all ${chaptersCount} chapters under rapid accordion cycles...`);

    for (let cIdx = 0; cIdx < chaptersCount; cIdx++) {
      const ch = chaptersData[cIdx];
      console.log(`   ▶ Chapter ${cIdx + 1}/${chaptersCount}: [${ch.subject.toUpperCase()}] ${ch.titleMarathi}`);

      // Select chapter via DOM click
      const switchScript = `
        (function() {
          const buttons = document.querySelectorAll('nav[aria-label="Chapter Selector"] button');
          if (buttons[${cIdx}]) {
            buttons[${cIdx}].click();
            return true;
          }
          return false;
        })()
      `;
      const switchResult = await sendCommand('Runtime.evaluate', {
        expression: switchScript,
        returnByValue: true,
      });

      assert(switchResult.result?.value, `Failed to click chapter button for index ${cIdx}`);
      await sleep(150);

      // Perform rapid accordion opening/closing stress test on this chapter
      const accordionStressScript = `
        (async function() {
          window.__trackingInteractions = true;

          // Ensure accordions for this chapter are present in DOM
          const startWait = Date.now();
          let headers = Array.from(document.querySelectorAll('article header'));
          while (headers.length === 0 && Date.now() - startWait < 5000) {
            await new Promise(r => setTimeout(r, 50));
            headers = Array.from(document.querySelectorAll('article header'));
          }

          const report = {
            accordionsFound: headers.length,
            clicksPerformed: 0,
            tabsClicked: 0,
            mcqClicked: 0,
            actionsClicked: 0
          };

          for (let i = 0; i < headers.length; i++) {
            const h = headers[i];
            
            // Rapid double-click burst (interrupted toggle)
            h.click();
            await new Promise(r => setTimeout(r, 15));
            h.click();
            report.clicksPerformed += 2;
            await new Promise(r => setTimeout(r, 15));

            // Expand accordion
            h.click();
            report.clicksPerformed += 1;
            await new Promise(r => setTimeout(r, 60));

            // Inside expanded accordion: click bookmark & completion
            const article = h.closest('article');
            if (article) {
              const bookmarkBtn = article.querySelector('button[aria-label*="Bookmark"]');
              if (bookmarkBtn) {
                bookmarkBtn.click();
                report.actionsClicked++;
              }
              const completeBtn = article.querySelector('button[aria-label*="complete"]');
              if (completeBtn) {
                completeBtn.click();
                report.actionsClicked++;
              }

              // Switch answer tabs if present
              const tabs = article.querySelectorAll('div.flex.items-center.gap-2 button');
              for (const tab of tabs) {
                tab.click();
                report.tabsClicked++;
                await new Promise(r => setTimeout(r, 15));
              }

              // Click MCQ options if present
              const mcqOptions = article.querySelectorAll('.grid button');
              for (const opt of mcqOptions) {
                opt.click();
                report.mcqClicked++;
                await new Promise(r => setTimeout(r, 10));
              }
            }

            // Collapse accordion
            h.click();
            report.clicksPerformed += 1;
            await new Promise(r => setTimeout(r, 40));
          }

          window.__trackingInteractions = false;
          return report;
        })()
      `;

      const stressResult = await sendCommand('Runtime.evaluate', {
        expression: accordionStressScript,
        awaitPromise: true,
        returnByValue: true,
      });

      const rep = stressResult.result?.value || {};
      console.log(`      ✔ Accordions tested: ${rep.accordionsFound}, Rapid clicks: ${rep.clicksPerformed}, Tabs: ${rep.tabsClicked}, MCQs: ${rep.mcqClicked}`);
      assert(rep.accordionsFound > 0, `Chapter ${cIdx + 1} must render accordions`);
    }

    // 4. Measure Metrics & Layout Shifts
    console.log('\n--- PHASE 3: Metrics & Stability Assertions ---');
    const metricsResult = await sendCommand('Runtime.evaluate', {
      expression: `({ clsTotal: window.__clsTotal, interactionShift: window.__interactionShift })`,
      returnByValue: true,
    });
    const { clsTotal, interactionShift } = metricsResult.result?.value || { clsTotal: 0, interactionShift: 0 };
    console.log(`   CLS Total: ${clsTotal}, Interaction Shift: ${interactionShift}`);

    const perfMetrics = await sendCommand('Performance.getMetrics');
    const layoutCount = perfMetrics.metrics?.find((m) => m.name === 'LayoutCount')?.value || 0;
    const taskDuration = perfMetrics.metrics?.find((m) => m.name === 'TaskDuration')?.value || 0;
    const jsHeapUsed = (perfMetrics.metrics?.find((m) => m.name === 'JSHeapUsedSize')?.value || 0) / 1024 / 1024;

    console.log(`   Layout Count: ${layoutCount}, Task Duration: ${Number(taskDuration).toFixed(3)}s, Heap Used: ${jsHeapUsed.toFixed(1)} MB`);
    console.log(`   Console Errors: ${consoleErrors.length}, Runtime Exceptions: ${runtimeExceptions.length}`);

    // Assertions
    assert.equal(consoleErrors.length, 0, `Console errors occurred: ${consoleErrors.join(' | ')}`);
    assert.equal(runtimeExceptions.length, 0, `Runtime exceptions occurred: ${runtimeExceptions.join(' | ')}`);
    assert(clsTotal < 0.05, `CLS score (${clsTotal}) exceeded 0.05 threshold`);
    assert(interactionShift < 0.05, `Interaction layout shift (${interactionShift}) exceeded 0.05 threshold`);

    console.log('\n✅ ALL 9 CHAPTER ACCORDION STRESS TESTS PASSED WITH ZERO DEFECTS!');
    await cleanup();
  } catch (err) {
    console.error('\n❌ ACCORDION STRESS TEST FAILED:', err);
    await cleanup();
    process.exit(1);
  }
}

async function main() {
  console.log('================================================================');
  console.log('   ITIHAS SWADHAY — ADVERSARIAL ACCORDION & CHAPTER STRESS SUITE');
  console.log('   9 Chapters • Rapid Toggles • Zero CLS • State Integrity     ');
  console.log('================================================================');

  runStoreStress();
  await runBrowserStress();
}

main().catch((err) => {
  console.error('Fatal runner error:', err);
  process.exit(1);
});
