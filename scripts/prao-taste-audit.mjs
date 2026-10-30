// scripts/prao-taste-audit.mjs
// Single-Agent PRAO Chrome DevTools Verification Harness
// Adhering strictly to TR-2026-PRAO-001 and Requirement 4

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PROFILE_DIR = 'C:\\Users\\Admin\\AppData\\Local\\Temp\\itihas-taste-cdp-profile';
const TARGET_URL = 'http://127.0.0.1:5173/';
const CDP_PORT = 9222;

const auditReport = {
  timestamp: new Date().toISOString(),
  environment: {
    browser: '',
    v8: '',
    viewportDesktop: { width: 1440, height: 900 },
    viewportMobile: { width: 393, height: 852 },
    port: CDP_PORT,
  },
  cycles: {},
  summary: {
    passed: 0,
    failed: 0,
    status: 'INCOMPLETE',
  },
};

class CdpClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.msgId = 0;
    this.pending = new Map();
    this.eventListeners = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.pending.has(msg.id)) {
          const { resolve, reject } = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          if (msg.error) reject(new Error(msg.error.message));
          else resolve(msg.result);
        } else if (msg.method) {
          const listeners = this.eventListeners.get(msg.method) || [];
          for (const fn of listeners) fn(msg.params);
        }
      };
    });
  }

  send(method, params = {}) {
    const id = ++this.msgId;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  on(event, fn) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, []);
    }
    this.eventListeners.get(event).push(fn);
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.exceptionDetails) {
      throw new Error('Evaluation exception: ' + JSON.stringify(res.exceptionDetails));
    }
    return res.result?.value;
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('='.repeat(80));
  console.log('  ITIHAS SWADHAY — SINGLE-AGENT PRAO CHROME DEVTOOLS AUDIT');
  console.log('  Specification: TR-2026-PRAO-001 | Port: 9222 (Zero Multi-Agent Contention)');
  console.log('='.repeat(80));

  // Clean / prepare profile directory
  if (!fs.existsSync(PROFILE_DIR)) {
    fs.mkdirSync(PROFILE_DIR, { recursive: true });
  }

  const chromeArgs = [
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${PROFILE_DIR}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--headless=new',
    '--disable-extensions',
    '--disable-search-engine-choice-screen',
    '--window-size=1440,900',
    'about:blank',
  ];

  console.log('\n[LAUNCH] Spawning isolated Chrome CDP instance...');
  const chromeProc = spawn(CHROME_PATH, chromeArgs, { stdio: 'ignore' });

  let cdp = null;

  try {
    // Wait for CDP port to open
    let connected = false;
    let target = null;
    for (let i = 0; i < 20; i++) {
      await sleep(300);
      try {
        const vRes = await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`);
        const vData = await vRes.json();
        auditReport.environment.browser = vData.Browser;
        auditReport.environment.v8 = vData['V8-Version'];

        const tRes = await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`);
        const targets = await tRes.json();
        target = targets.find((t) => t.type === 'page');
        if (target) {
          connected = true;
          break;
        }
      } catch (e) {
        // Retry
      }
    }

    if (!connected || !target) {
      throw new Error('Failed to connect to Chrome CDP on port ' + CDP_PORT);
    }

    console.log(`[CDP CONNECTED] Target: ${target.webSocketDebuggerUrl}`);
    console.log(`[BROWSER INFO] ${auditReport.environment.browser} | V8: ${auditReport.environment.v8}`);

    cdp = new CdpClient(target.webSocketDebuggerUrl);
    await cdp.connect();

    await cdp.send('Page.enable');
    await cdp.send('DOM.enable');
    await cdp.send('CSS.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Performance.enable');

    // Emulate standard 1440x900 desktop viewport
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1.0,
      mobile: false,
    });

    console.log(`[NAVIGATE] Loading ${TARGET_URL}...`);
    const navPromise = new Promise((resolve) => {
      cdp.on('Page.loadEventFired', resolve);
    });
    await cdp.send('Page.navigate', { url: TARGET_URL });
    await navPromise;

    // Allow hydration and initial worker setup
    await sleep(2000);

    // ========================================================================
    // CYCLE 1: Desktop Landing Shell Audit
    // ========================================================================
    console.log('\n' + '-'.repeat(80));
    console.log('▶ CYCLE 1: Desktop Landing Shell Audit');
    console.log('-'.repeat(80));

    // Perceive: DOM nodes and computed styles
    const c1Perceive = await cdp.eval(`(() => {
      const telemetryTag = document.querySelector('.trinity-telemetry-tag') || document.querySelector('.machined-label');
      const machinedLabel = document.querySelector('.machined-label');
      const startPracticeBtn = Array.from(document.querySelectorAll('button')).find(b => /START PRACTICE/i.test(b.innerText));
      const chaptersIndexBtn = Array.from(document.querySelectorAll('button')).find(b => /9 CHAPTERS INDEX/i.test(b.innerText));
      const searchPill = document.querySelector('button[title*="Search"]') || Array.from(document.querySelectorAll('button')).find(b => /Search/i.test(b.innerText));
      const allButtons = Array.from(document.querySelectorAll('button'));
      const allCards = Array.from(document.querySelectorAll('.card, .ui-card, .accordion-card, article'));
      const marathiHeadline = document.querySelector('h1.trinity-heading-display, #swadhay-workspace h1, .devanagari, :lang(mr)');

      const getStyles = (el) => {
        if (!el) return null;
        const cs = window.getComputedStyle(el);
        return {
          boxShadow: cs.boxShadow,
          letterSpacing: cs.letterSpacing,
          textTransform: cs.textTransform,
          fontFamily: cs.fontFamily,
          borderRadius: cs.borderRadius,
        };
      };

      const shadows = allButtons.concat(allCards).map(el => {
        const cs = window.getComputedStyle(el);
        return { tag: el.tagName, className: el.className.slice(0, 30), boxShadow: cs.boxShadow };
      }).filter(s => s.boxShadow !== 'none' && s.boxShadow !== '');

      return {
        telemetryTagText: telemetryTag?.innerText?.trim(),
        machinedLabelStyles: getStyles(machinedLabel),
        startPracticeText: startPracticeBtn?.innerText?.trim(),
        startPracticeStyles: getStyles(startPracticeBtn),
        chaptersIndexText: chaptersIndexBtn?.innerText?.trim(),
        chaptersIndexStyles: getStyles(chaptersIndexBtn),
        searchPillText: searchPill?.innerText?.trim(),
        searchPillStyles: getStyles(searchPill),
        marathiHeadlineStyles: getStyles(marathiHeadline),
        nonZeroShadowCount: shadows.length,
        nonZeroShadows: shadows,
      };
    })()`);

    console.log('  [PERCEIVE]');
    console.log(`   - Telemetry Tag: "${c1Perceive.telemetryTagText}"`);
    console.log(`   - Start Practice CTA: "${c1Perceive.startPracticeText}" | Box-Shadow: ${c1Perceive.startPracticeStyles?.boxShadow}`);
    console.log(`   - 9 Chapters CTA: "${c1Perceive.chaptersIndexText}" | Box-Shadow: ${c1Perceive.chaptersIndexStyles?.boxShadow}`);
    console.log(`   - Search Trigger: "${c1Perceive.searchPillText}" | Box-Shadow: ${c1Perceive.searchPillStyles?.boxShadow}`);
    console.log(`   - Machined Tracking (Latin): ${c1Perceive.machinedLabelStyles?.letterSpacing}`);
    console.log(`   - Marathi Text Tracking (Devanagari): ${c1Perceive.marathiHeadlineStyles?.letterSpacing}`);
    console.log(`   - Non-Zero Box Shadows Detected: ${c1Perceive.nonZeroShadowCount}`);

    // Reason: Validate against constraints
    const c1Reason = {
      editorialShellValid:
        /CLASS 10 \/\/ MAHARASHTRA STATE BOARD/i.test(c1Perceive.telemetryTagText) &&
        /START PRACTICE/i.test(c1Perceive.startPracticeText) &&
        /9 CHAPTERS INDEX/i.test(c1Perceive.chaptersIndexText) &&
        /Search Syllabus/i.test(c1Perceive.searchPillText),
      zeroShadowCompliant: c1Perceive.nonZeroShadowCount === 0,
      latinTrackingCompliant: c1Perceive.machinedLabelStyles?.letterSpacing === '1.5px',
      devanagariTrackingCompliant:
        c1Perceive.marathiHeadlineStyles?.letterSpacing === '0px' ||
        c1Perceive.marathiHeadlineStyles?.letterSpacing === 'normal',
    };

    console.log('  [REASON]');
    console.log(`   - Editorial English UI Shell Check: ${c1Reason.editorialShellValid ? 'PASS' : 'FAIL'}`);
    console.log(`   - Zero-Shadow Law Compliance: ${c1Reason.zeroShadowCompliant ? 'PASS' : 'FAIL'}`);
    console.log(`   - Latin Telemetry +1.5px Tracking Check: ${c1Reason.latinTrackingCompliant ? 'PASS' : 'FAIL'}`);
    console.log(`   - Devanagari 0px Headline Tracking Check: ${c1Reason.devanagariTrackingCompliant ? 'PASS' : 'FAIL'}`);

    // Act: Scroll / navigate to #chapters-grid and measure CLS
    console.log('  [ACT] Navigating / scrolling to #chapters-grid...');
    await cdp.eval(`(() => {
      window.__clsScore = 0;
      try {
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
              window.__clsScore += entry.value;
            }
          }
        });
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {}

      const btn = Array.from(document.querySelectorAll('button')).find(b => /9 CHAPTERS INDEX/i.test(b.innerText));
      if (btn) btn.click();
      else {
        const target = document.getElementById('chapters-grid') || document.getElementById('swadhay-workspace');
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    })()`);

    await sleep(1200);

    // Observe: Measure scroll and CLS
    const c1Observe = await cdp.eval(`(() => {
      const scrollY = window.scrollY;
      const target = document.getElementById('chapters-grid') || document.getElementById('swadhay-workspace');
      const rect = target ? target.getBoundingClientRect() : null;
      return {
        scrollY,
        targetFound: Boolean(target),
        targetTop: rect ? rect.top : null,
        cls: window.__clsScore || 0,
      };
    })()`);

    console.log('  [OBSERVE]');
    console.log(`   - Target Scroll Position (Y): ${c1Observe.scrollY}px (Target Top: ${c1Observe.targetTop}px)`);
    console.log(`   - Cumulative Layout Shift (CLS): ${c1Observe.cls}`);

    const c1Pass =
      c1Reason.editorialShellValid &&
      c1Reason.zeroShadowCompliant &&
      c1Reason.latinTrackingCompliant &&
      c1Reason.devanagariTrackingCompliant &&
      c1Observe.cls < 0.01;

    auditReport.cycles.cycle1_desktop_shell = {
      perceive: c1Perceive,
      reason: c1Reason,
      observe: c1Observe,
      status: c1Pass ? 'PASSED' : 'FAILED',
    };

    // ========================================================================
    // CYCLE 2: 3D Sahyadri Horizon Continuous 60 FPS Audit
    // ========================================================================
    console.log('\n' + '-'.repeat(80));
    console.log('▶ CYCLE 2: 3D Sahyadri Horizon Continuous 60 FPS Audit');
    console.log('-'.repeat(80));

    // Scroll back to top for hero canvas inspection
    await cdp.eval(`window.scrollTo({ top: 0, behavior: 'instant' })`);
    await sleep(500);

    // Perceive: Start frame metrics recording across 5000ms
    console.log('  [PERCEIVE] Sampling continuous animation frames across 5-second window...');
    await cdp.eval(`(() => {
      window.__frameSamples = [];
      window.__canvasMutations = 0;
      window.__initialCanvas = document.querySelector('canvas');

      const observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === 'childList') {
            for (const node of m.removedNodes) {
              if (node.tagName === 'CANVAS') window.__canvasMutations++;
            }
          }
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });

      let lastTime = performance.now();
      const sample = (t) => {
        const delta = t - lastTime;
        lastTime = t;
        window.__frameSamples.push({ timestamp: t, delta });
        if (window.__recordingFrames) {
          requestAnimationFrame(sample);
        }
      };
      window.__recordingFrames = true;
      requestAnimationFrame(sample);
    })()`);

    // Act: Dispatch cursor movement across the canvas in parallel
    console.log('  [ACT] Dispatching pointer movement across 3D canvas coordinates...');
    const startTime = Date.now();
    let moveCount = 0;
    while (Date.now() - startTime < 5000) {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / 5000;
      const x = 300 + Math.sin(progress * Math.PI * 4) * 250;
      const y = 200 + Math.cos(progress * Math.PI * 4) * 120;
      await cdp.send('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: Math.round(x),
        y: Math.round(y),
      });
      moveCount++;
      await sleep(60);
    }

    // Stop recording and retrieve metrics
    const c2Metrics = await cdp.eval(`(() => {
      window.__recordingFrames = false;
      const samples = window.__frameSamples || [];
      const deltas = samples.slice(1).map(s => s.delta);
      const totalDuration = samples.length > 1 ? (samples[samples.length - 1].timestamp - samples[0].timestamp) : 0;
      const avgFps = totalDuration > 0 ? (samples.length / (totalDuration / 1000)) : 0;

      const sum = deltas.reduce((a, b) => a + b, 0);
      const mean = sum / deltas.length;
      const variance = deltas.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / deltas.length;
      const stdDev = Math.sqrt(variance);

      const canvasPresent = Boolean(document.querySelector('canvas'));
      const sameCanvas = document.querySelector('canvas') === window.__initialCanvas;

      return {
        frameCount: samples.length,
        durationMs: totalDuration,
        averageFps: Number(avgFps.toFixed(2)),
        meanDeltaMs: Number(mean.toFixed(2)),
        stdDevDeltaMs: Number(stdDev.toFixed(2)),
        canvasPresent,
        sameCanvas,
        canvasUnmountCount: window.__canvasMutations,
      };
    })()`);

    console.log('  [OBSERVE]');
    console.log(`   - Sampled Frames: ${c2Metrics.frameCount} over ${c2Metrics.durationMs.toFixed(0)}ms`);
    console.log(`   - Average Frame Rate: ${c2Metrics.averageFps} FPS (Target: ~60 FPS)`);
    console.log(`   - Mean Delta: ${c2Metrics.meanDeltaMs}ms | StdDev: ${c2Metrics.stdDevDeltaMs}ms`);
    console.log(`   - Cursor Dispatch Cycles: ${moveCount}`);
    console.log(`   - Canvas Unmounts / Resets Detected: ${c2Metrics.canvasUnmountCount}`);
    console.log(`   - Continuous Canvas Instance Preserved: ${c2Metrics.sameCanvas ? 'YES' : 'NO'}`);

    const c2Reason = {
      steadyFpsValid: c2Metrics.averageFps >= 55.0,
      zeroCanvasUnmounts: c2Metrics.canvasUnmountCount === 0 && c2Metrics.sameCanvas,
      smoothJitterBound: c2Metrics.stdDevDeltaMs <= 6.0,
    };

    console.log('  [REASON]');
    console.log(`   - 60 FPS Continuity Check: ${c2Reason.steadyFpsValid ? 'PASS' : 'FAIL'}`);
    console.log(`   - Zero Canvas Resets / Worker Restarts: ${c2Reason.zeroCanvasUnmounts ? 'PASS' : 'FAIL'}`);
    console.log(`   - Frame Jitter Variance Bound Check: ${c2Reason.smoothJitterBound ? 'PASS' : 'FAIL'}`);

    const c2Pass = c2Reason.steadyFpsValid && c2Reason.zeroCanvasUnmounts && c2Reason.smoothJitterBound;

    auditReport.cycles.cycle2_fps_continuous = {
      metrics: c2Metrics,
      reason: c2Reason,
      status: c2Pass ? 'PASSED' : 'FAILED',
    };

    // ========================================================================
    // CYCLE 3: Chapter Study & Question Accordion Audit
    // ========================================================================
    console.log('\n' + '-'.repeat(80));
    console.log('▶ CYCLE 3: Chapter Study & Question Accordion Audit');
    console.log('-'.repeat(80));

    // Scroll to #swadhay-workspace
    await cdp.eval(`(() => {
      const el = document.getElementById('swadhay-workspace');
      el?.scrollIntoView({ behavior: 'instant' });
    })()`);
    await sleep(500);

    // Perceive: Chapter 1 study view & Awwwards semantic icon palette
    const c3Perceive = await cdp.eval(`(() => {
      const workspace = document.getElementById('swadhay-workspace');
      const chapterHeading = workspace?.querySelector('h1')?.innerText?.trim();
      const chapterSubtitle = workspace?.querySelector('p.font-mono')?.innerText?.trim();
      const firstAccordionHeader = document.querySelector('[id^="question-header-"]');
      const questionTitle = firstAccordionHeader?.querySelector('h3')?.innerText?.trim();
      const badgeSpan = firstAccordionHeader?.querySelector('span.rounded-full.border');

      // Check corporate boilerplate in entire workspace
      const rawText = document.body.innerText;
      const corporateMatches = (rawText.match(/Copyright|Trademark|©|All Rights Reserved|Terms of Service/gi) || []);

      // Extract semantic palette variables from computed style of root
      const rootStyle = window.getComputedStyle(document.documentElement);
      const palette = {
        terracotta: rootStyle.getPropertyValue('--color-archival-terracotta').trim(),
        ochre: rootStyle.getPropertyValue('--color-archival-ochre').trim(),
        cobalt: rootStyle.getPropertyValue('--color-archival-cobalt').trim(),
        sage: rootStyle.getPropertyValue('--color-archival-sage').trim(),
        crimson: rootStyle.getPropertyValue('--color-archival-crimson').trim(),
      };

      const badgeComputed = badgeSpan ? {
        text: badgeSpan.innerText.trim(),
        color: window.getComputedStyle(badgeSpan).color,
        border: window.getComputedStyle(badgeSpan).borderColor,
      } : null;

      return {
        chapterHeading,
        chapterSubtitle,
        questionTitle,
        corporateMatches,
        palette,
        badgeComputed,
      };
    })()`);

    console.log('  [PERCEIVE]');
    console.log(`   - Chapter Heading (Marathi): "${c3Perceive.chapterHeading}"`);
    console.log(`   - Chapter Subtitle (English): "${c3Perceive.chapterSubtitle}"`);
    console.log(`   - Question 1 Text: "${c3Perceive.questionTitle?.slice(0, 50)}..."`);
    console.log(`   - Question Badge: "${c3Perceive.badgeComputed?.text}" (Color: ${c3Perceive.badgeComputed?.color})`);
    console.log(`   - Corporate Cliché Matches: ${c3Perceive.corporateMatches.length}`);
    console.log(`   - Archival Palette Tokens: Terracotta(${c3Perceive.palette.terracotta}), Ochre(${c3Perceive.palette.ochre}), Cobalt(${c3Perceive.palette.cobalt}), Sage(${c3Perceive.palette.sage}), Crimson(${c3Perceive.palette.crimson})`);

    // Reason: Verify authentic Marathi provenance & Awwwards palette
    const c3Reason = {
      authenticMarathi:
        /इतिहासलेखन/i.test(c3Perceive.chapterHeading) &&
        /आधुनिक|इतिहासलेखन|जोडी|विचारवंत/i.test(c3Perceive.questionTitle),
      zeroCorporateSlop: c3Perceive.corporateMatches.length === 0,
      paletteTokensPresent:
        c3Perceive.palette.terracotta === '#c14e0b' &&
        c3Perceive.palette.ochre === '#c98a2c' &&
        c3Perceive.palette.cobalt === '#1d5b79' &&
        c3Perceive.palette.sage === '#2e6f5e' &&
        c3Perceive.palette.crimson === '#9e2a2b',
    };

    console.log('  [REASON]');
    console.log(`   - Authentic Marathi Curriculum Provenance: ${c3Reason.authenticMarathi ? 'PASS' : 'FAIL'}`);
    console.log(`   - Zero Corporate Boilerplate Slop: ${c3Reason.zeroCorporateSlop ? 'PASS' : 'FAIL'}`);
    console.log(`   - Awwwards Semantic Palette Tokens Valid: ${c3Reason.paletteTokensPresent ? 'PASS' : 'FAIL'}`);

    // Act: Click accordion item to expand and observe spring height transition
    console.log('  [ACT] Expanding Question 2 accordion...');
    const c3Act = await cdp.eval(`(() => {
      const headers = Array.from(document.querySelectorAll('[id^="question-header-"]'));
      // Pick second accordion to toggle
      const targetHeader = headers[1] || headers[0];
      targetHeader.click();
      return { id: targetHeader.id };
    })()`);

    // Sample height expansion over 400ms
    const heightSamples = [];
    const hStart = Date.now();
    while (Date.now() - hStart < 450) {
      const h = await cdp.eval(`(() => {
        const content = document.querySelector('[id^="question-content-"]');
        return content ? content.getBoundingClientRect().height : 0;
      })()`);
      heightSamples.push({ elapsed: Date.now() - hStart, height: h });
      await sleep(50);
    }

    // Observe: Verify smooth height transition, zero matra clipping, and zero shadow
    const c3Observe = await cdp.eval(`(() => {
      const content = document.querySelector('[id^="question-content-"]');
      const cs = content ? window.getComputedStyle(content) : null;
      const mask = document.querySelector('.motion-matra-safe-mask');
      const maskCs = mask ? window.getComputedStyle(mask) : null;

      return {
        finalHeight: content ? content.getBoundingClientRect().height : 0,
        overflow: cs?.overflow,
        boxShadow: cs?.boxShadow,
        matraMaskPresent: Boolean(mask),
        matraMaskPaddingTop: maskCs?.paddingTop,
        matraMaskPaddingBottom: maskCs?.paddingBottom,
      };
    })()`);

    console.log('  [OBSERVE]');
    console.log(`   - Accordion Expanded Height: ${c3Observe.finalHeight.toFixed(1)}px (over ${heightSamples.length} samples)`);
    console.log(`   - Spring Transition Trajectory: ${heightSamples.map(s => Math.round(s.height)).join('px -> ')}px`);
    console.log(`   - Matra Safe Mask Present: ${c3Observe.matraMaskPresent ? 'YES' : 'NO'} (PadTop: ${c3Observe.matraMaskPaddingTop}, PadBottom: ${c3Observe.matraMaskPaddingBottom})`);
    console.log(`   - Accordion Box Shadow: ${c3Observe.boxShadow}`);

    const c3Pass =
      c3Reason.authenticMarathi &&
      c3Reason.zeroCorporateSlop &&
      c3Reason.paletteTokensPresent &&
      c3Observe.finalHeight > 50 &&
      c3Observe.matraMaskPresent &&
      (c3Observe.boxShadow === 'none' || c3Observe.boxShadow === '');

    auditReport.cycles.cycle3_chapter_study = {
      perceive: c3Perceive,
      reason: c3Reason,
      observe: c3Observe,
      status: c3Pass ? 'PASSED' : 'FAILED',
    };

    // ========================================================================
    // CYCLE 4: Mobile Viewport WebGL Audit
    // ========================================================================
    console.log('\n' + '-'.repeat(80));
    console.log('▶ CYCLE 4: Mobile Viewport WebGL Audit');
    console.log('-'.repeat(80));

    // Emulate Mobile Viewport: 393 x 852 (iPhone 14 / modern flagship)
    console.log('  [ACT] Emulating mobile viewport (393 x 852, touch enabled)...');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 393,
      height: 852,
      deviceScaleFactor: 2.0,
      mobile: true,
      hasTouch: true,
    });

    // Scroll to top of mobile page
    await cdp.eval(`window.scrollTo({ top: 0, behavior: 'instant' })`);
    await sleep(1000);

    // Perceive: Check 3D Canvas in mobile layout
    const c4Perceive = await cdp.eval(`(() => {
      const canvas = document.querySelector('canvas');
      const svgFallback = document.querySelector('.scholar-silhouette-svg');
      const specBar = Array.from(document.querySelectorAll('span')).find(s => /TIER/i.test(s.innerText));

      const scrollW = document.documentElement.scrollWidth;
      const clientW = document.documentElement.clientWidth;

      return {
        canvasFound: Boolean(canvas),
        canvasWidth: canvas?.clientWidth,
        canvasHeight: canvas?.clientHeight,
        svgFallbackActive: Boolean(svgFallback),
        specBarText: specBar?.innerText?.trim(),
        hasHorizontalOverflow: scrollW > clientW,
        scrollWidth: scrollW,
        clientWidth: clientW,
      };
    })()`);

    console.log('  [PERCEIVE]');
    console.log(`   - 3D Canvas Element Active: ${c4Perceive.canvasFound ? 'YES' : 'NO'} (${c4Perceive.canvasWidth}x${c4Perceive.canvasHeight}px)`);
    console.log(`   - Tier 0 SVG Fallback Replaced/Inactive: ${!c4Perceive.svgFallbackActive ? 'YES (WebGL Active)' : 'NO (Fell back to SVG)'}`);
    console.log(`   - Diagnostic Spec Cell Text: "${c4Perceive.specBarText}"`);
    console.log(`   - Viewport Dimensions: ${c4Perceive.clientWidth}px | Document Scroll Width: ${c4Perceive.scrollWidth}px`);

    // Reason: Confirm mobile WebGL is active without fallback
    const c4Reason = {
      webglActiveOnMobile: c4Perceive.canvasFound && !c4Perceive.svgFallbackActive,
      dprClampedOrTier1: /TIER 1/i.test(c4Perceive.specBarText) && /DPR 1\.0/i.test(c4Perceive.specBarText),
      zeroOverflowInitial: !c4Perceive.hasHorizontalOverflow,
    };

    console.log('  [REASON]');
    console.log(`   - Mobile WebGL Active (No premature SVG downgrade): ${c4Reason.webglActiveOnMobile ? 'PASS' : 'FAIL'}`);
    console.log(`   - DPR Clamped to 1.0 Guardrail Check: ${c4Reason.dprClampedOrTier1 ? 'PASS' : 'FAIL'}`);
    console.log(`   - Zero Horizontal Overflow Check: ${c4Reason.zeroOverflowInitial ? 'PASS' : 'FAIL'}`);

    // Act: Tap chapter filter pill in ChapterSelector
    console.log('  [ACT] Tapping Chapter 2 filter pill...');
    const c4Act = await cdp.eval(`(() => {
      const pills = Array.from(document.querySelectorAll('nav#chapters-grid button, [aria-label="Chapter Selector"] button'));
      const ch2Pill = pills[1] || pills[0];
      if (ch2Pill) {
        ch2Pill.click();
        return { clickedText: ch2Pill.innerText.trim() };
      }
      return { clickedText: null };
    })()`);

    await sleep(600);

    // Observe: Check active state transition and final horizontal overflow
    const c4Observe = await cdp.eval(`(() => {
      const workspace = document.getElementById('swadhay-workspace');
      const activeHeading = workspace?.querySelector('h1')?.innerText?.trim();
      const scrollW = document.documentElement.scrollWidth;
      const clientW = document.documentElement.clientWidth;

      return {
        activeChapterHeading: activeHeading,
        hasHorizontalOverflow: scrollW > clientW,
        scrollWidth: scrollW,
        clientWidth: clientW,
      };
    })()`);

    console.log('  [OBSERVE]');
    console.log(`   - Active Chapter After Tap: "${c4Observe.activeChapterHeading}"`);
    console.log(`   - Zero Horizontal Overflow Post-Tap: ${!c4Observe.hasHorizontalOverflow ? 'PASS' : 'FAIL'} (${c4Observe.scrollWidth}px <= ${c4Observe.clientWidth}px)`);

    const c4Pass =
      c4Reason.webglActiveOnMobile &&
      c4Reason.dprClampedOrTier1 &&
      !c4Observe.hasHorizontalOverflow;

    auditReport.cycles.cycle4_mobile_webgl = {
      perceive: c4Perceive,
      reason: c4Reason,
      observe: c4Observe,
      status: c4Pass ? 'PASSED' : 'FAILED',
    };

    // ========================================================================
    // FINAL AUDIT SUMMARY
    // ========================================================================
    const allPassed = c1Pass && c2Pass && c3Pass && c4Pass;
    auditReport.summary.passed = [c1Pass, c2Pass, c3Pass, c4Pass].filter(Boolean).length;
    auditReport.summary.failed = 4 - auditReport.summary.passed;
    auditReport.summary.status = allPassed ? 'PASSED' : 'FAILED';

    console.log('\n' + '='.repeat(80));
    console.log('  PRAO VERIFICATION AUDIT COMPLETE');
    console.log(`  Verdict: ${allPassed ? '✅ 100% ALL 4 CYCLES PASSED' : '❌ SOME CYCLES FAILED'}`);
    console.log(`  Passed: ${auditReport.summary.passed}/4 | Failed: ${auditReport.summary.failed}/4`);
    console.log('='.repeat(80));

    // Save JSON results to agent directory
    const outPath = path.resolve(
      'D:\\Google Antigravity 2.0 conversations\\elite animated website for ithihas swadhay\\workspace\\.agents\\teamwork\\teamwork_preview_taste_agent_m6_1\\prao_audit_results.json'
    );
    fs.writeFileSync(outPath, JSON.stringify(auditReport, null, 2), 'utf8');
    console.log(`\n[SAVED] Full PRAO audit results saved to: ${outPath}\n`);

  } finally {
    if (cdp) cdp.close();
    try {
      chromeProc.kill();
    } catch (e) {}
  }
}

main().catch((err) => {
  console.error('\n🚨 PRAO AUDIT HARNESS ERROR:\n', err);
  process.exit(1);
});
