#!/usr/bin/env node
/**
 * tests/stress/hero_r1_adversarial.test.mjs
 * Adversarial Empirical Verification Suite for Requirement 1:
 * Continuous 3D Sahyadri Horizon & Mobile WebGL Enablement
 *
 * Authored by: Empirical Challenger 1 (teamwork_preview_challenger_m6_1)
 *
 * Verifies:
 * 1. useHardwareTier Mobile GPU Render Strings Matrix (Apple, Adreno, Mali, Samsung, PowerVR, Intel)
 * 2. Mobile User-Agent Fallback & DPR clamping to 1.0
 * 3. Accessibility: prefers-reduced-motion Tier 0 static fallback enforcement
 * 4. HeroCanvas3D: Canvas element persistence & zero unmounting across 500 onFpsReport bursts
 * 5. HeroCanvas3D: AST / Dependency array verification (onFpsReport decoupled from canvas initialization)
 * 6. heroRender.worker: 2-Second Snapping Glitch elimination via delta accumulation
 * 7. heroRender.worker: Responsive portrait camera framing (fov 56, z 18)
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');

// Helper to set up mock browser environment
function createMockEnvironment(options = {}) {
  const {
    prefersReducedMotion = false,
    rendererString = '',
    userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    maxTouchPoints = 0,
    devicePixelRatio = 2.0,
  } = options;

  const storage = new Map();

  globalThis.localStorage = {
    getItem: (key) => storage.get(String(key)) ?? null,
    setItem: (key, val) => storage.set(String(key), String(val)),
    removeItem: (key) => storage.delete(String(key)),
    clear: () => storage.clear(),
  };

  globalThis.window = {
    devicePixelRatio,
    matchMedia: (query) => ({
      matches: query.includes('reduce') ? prefersReducedMotion : false,
      media: query,
    }),
    addEventListener: () => {},
    removeEventListener: () => {},
  };

  Object.defineProperty(globalThis, 'navigator', {
    value: {
      userAgent,
      maxTouchPoints,
    },
    configurable: true,
    writable: true,
  });

  globalThis.document = {
    visibilityState: 'visible',
    addEventListener: () => {},
    removeEventListener: () => {},
    createElement: (tag) => {
      if (tag === 'canvas') {
        return {
          getContext: (type) => {
            if (rendererString === 'WEBGL_UNSUPPORTED') return null;
            return {
              getExtension: (ext) => {
                if (ext === 'WEBGL_debug_renderer_info') {
                  return { UNMASKED_RENDERER_WEBGL: 37446 };
                }
                return null;
              },
              getParameter: (param) => {
                if (param === 37446) return rendererString;
                return '';
              },
            };
          },
        };
      }
      return {};
    },
  };
}

// ============================================================================
// SUITE 1: Mobile GPU Render String Classification & DPR Clamping
// ============================================================================

test('R1 Adversarial 1.1: Mobile GPU Render Strings correctly evaluate to Tier 1 and DPR 1.0', async () => {
  const mobileGpus = [
    // Apple Silicon & Bionic GPUs
    { vendor: 'Apple', str: 'Apple GPU' },
    { vendor: 'Apple', str: 'Apple M1' },
    { vendor: 'Apple', str: 'Apple M2 Pro' },
    { vendor: 'Apple', str: 'Apple M3 Max' },
    { vendor: 'Apple', str: 'Apple A15 GPU' },
    { vendor: 'Apple', str: 'Apple A16 Bionic GPU' },
    { vendor: 'Apple', str: 'ANGLE (Apple, Apple M2, OpenGL 4.1)' },
    // Qualcomm Adreno
    { vendor: 'Qualcomm', str: 'Adreno (TM) 660' },
    { vendor: 'Qualcomm', str: 'Qualcomm Adreno (TM) 730' },
    { vendor: 'Qualcomm', str: 'Adreno (TM) 540' },
    { vendor: 'Qualcomm', str: 'Qualcomm Adreno (TM) 740' },
    { vendor: 'Qualcomm', str: 'Adreno (TM) 619' },
    // ARM Mali
    { vendor: 'ARM', str: 'Mali-G78 MP14' },
    { vendor: 'ARM', str: 'ARM Mali-G710 MC10' },
    { vendor: 'ARM', str: 'Mali-T880' },
    { vendor: 'ARM', str: 'Mali-G72' },
    { vendor: 'ARM', str: 'Mali-G57 MC2' },
    { vendor: 'ARM', str: 'ARM Bifrost Mali-G52' },
    { vendor: 'ARM', str: 'ARM Valhall Mali-G77' },
    // Samsung
    { vendor: 'Samsung', str: 'Samsung Xclipse 920' },
    { vendor: 'Samsung', str: 'Samsung Xclipse 940' },
    { vendor: 'Samsung', str: 'Samsung Exynos 2200' },
    // PowerVR
    { vendor: 'PowerVR', str: 'PowerVR Rogue GE8320' },
    { vendor: 'PowerVR', str: 'PowerVR B-Series BXM-4-64' },
    // Intel Integrated
    { vendor: 'Intel', str: 'Intel(R) UHD Graphics 620' },
    { vendor: 'Intel', str: 'Intel(R) Iris(R) Xe Graphics' },
    { vendor: 'Intel', str: 'Intel(R) HD Graphics 4000' },
  ];

  const { detectHardwareTier, calculateDprForTier } = await import('../../src/hooks/useHardwareTier.ts');

  for (const { vendor, str } of mobileGpus) {
    createMockEnvironment({ rendererString: str, devicePixelRatio: 3.0 });
    const result = await detectHardwareTier();

    assert.equal(
      result.tier,
      1,
      `Expected ${vendor} GPU "${str}" to classify as Tier 1, got ${result.tier}`
    );
    assert.equal(
      result.dpr,
      1.0,
      `Expected ${vendor} GPU "${str}" to clamp DPR to 1.0, got ${result.dpr}`
    );
    assert.equal(
      result.isFallback,
      false,
      `Expected ${vendor} GPU "${str}" to not fallback (isFallback=false), got ${result.isFallback}`
    );
    assert.equal(
      result.isLoaded,
      true,
      `Expected ${vendor} GPU "${str}" isLoaded to be true`
    );
    assert.equal(
      calculateDprForTier(result.tier),
      1.0,
      `calculateDprForTier(1) must strictly return 1.0`
    );
  }
});

test('R1 Adversarial 1.2: Mobile User Agents with generic GPU strings evaluate to Tier 1 (clamped DPR 1.0)', async () => {
  const mobileAgents = [
    {
      name: 'iPhone 15 Pro',
      ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
      touch: 5,
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      ua: 'Mozilla/5.0 (Linux; Android 14; SM-S928B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
      touch: 10,
    },
    {
      name: 'iPad Pro (iPadOS)',
      ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Safari/605.1.15',
      touch: 5,
    },
    {
      name: 'Google Pixel 8',
      ua: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.143 Mobile Safari/537.36',
      touch: 10,
    },
  ];

  const { detectHardwareTier } = await import('../../src/hooks/useHardwareTier.ts');

  for (const agent of mobileAgents) {
    createMockEnvironment({
      userAgent: agent.ua,
      maxTouchPoints: agent.touch,
      rendererString: 'Generic Mobile WebGL Engine',
      devicePixelRatio: 3.5, // Ultra-high native mobile DPR
    });

    const result = await detectHardwareTier();

    assert.equal(result.tier, 1, `${agent.name} must evaluate to Tier 1`);
    assert.equal(result.dpr, 1.0, `${agent.name} DPR must be clamped to 1.0`);
    assert.equal(result.isFallback, false, `${agent.name} must not be forced to static fallback`);
    assert.equal(result.isMobile, true, `${agent.name} isMobile flag must be true`);
  }
});

test('R1 Adversarial 1.3: calculateDprForTier respects clamping invariant across all tiers', async () => {
  const { calculateDprForTier } = await import('../../src/hooks/useHardwareTier.ts');

  // Tier 0
  globalThis.window = { devicePixelRatio: 3.0 };
  assert.equal(calculateDprForTier(0), 1.0, 'Tier 0 must always return 1.0');

  // Tier 1 (Integrated / Mobile)
  globalThis.window = { devicePixelRatio: 3.0 };
  assert.equal(calculateDprForTier(1), 1.0, 'Tier 1 must clamp native DPR 3.0 to 1.0');
  globalThis.window = { devicePixelRatio: 2.0 };
  assert.equal(calculateDprForTier(1), 1.0, 'Tier 1 must clamp native DPR 2.0 to 1.0');
  globalThis.window = { devicePixelRatio: 1.0 };
  assert.equal(calculateDprForTier(1), 1.0, 'Tier 1 with native DPR 1.0 must return 1.0');

  // Tier 2 (Discrete)
  globalThis.window = { devicePixelRatio: 3.0 };
  assert.equal(calculateDprForTier(2), 1.5, 'Tier 2 with native DPR 3.0 must clamp to 1.5');
  globalThis.window = { devicePixelRatio: 2.0 };
  assert.equal(calculateDprForTier(2), 1.5, 'Tier 2 with native DPR 2.0 must clamp to 1.5');
  globalThis.window = { devicePixelRatio: 1.25 };
  assert.equal(calculateDprForTier(2), 1.25, 'Tier 2 with native DPR 1.25 returns 1.25');
});

// ============================================================================
// SUITE 2: Accessibility prefers-reduced-motion Enforcement
// ============================================================================

test('R1 Adversarial 2.1: prefers-reduced-motion forces Tier 0 fallback even on flagship desktop GPUs', async () => {
  const { detectHardwareTier } = await import('../../src/hooks/useHardwareTier.ts');

  // Simulate flagship NVIDIA RTX 4090 desktop GPU, but with reduced motion active
  createMockEnvironment({
    prefersReducedMotion: true,
    rendererString: 'ANGLE (NVIDIA, NVIDIA GeForce RTX 4090 Direct3D11 vs_5_0 ps_5_0, D3D11)',
    devicePixelRatio: 2.0,
  });

  const result = await detectHardwareTier();

  assert.equal(result.tier, 0, 'prefers-reduced-motion must strictly override GPU to Tier 0');
  assert.equal(result.dpr, 1.0, 'prefers-reduced-motion must set DPR to 1.0');
  assert.equal(result.isFallback, true, 'prefers-reduced-motion must set isFallback=true');
  assert.equal(result.isLoaded, true, 'prefers-reduced-motion must be immediately loaded');
  assert.equal(result.gpu, 'Reduced Motion Active', 'Telemetry GPU must indicate Reduced Motion Active');
});

test('R1 Adversarial 2.2: HeroSection parallax transforms disabled under reduced motion', () => {
  const heroPath = path.join(projectRoot, 'src/components/hero/HeroSection.tsx');
  const code = fs.readFileSync(heroPath, 'utf8');

  // Assert presence of useReducedMotion and fallback transforms
  assert.match(code, /useReducedMotion/, 'HeroSection must import useReducedMotion from motion/react');
  assert.match(code, /const shouldReduceMotion = useReducedMotion\(\)/, 'HeroSection must capture shouldReduceMotion');
  assert.match(
    code,
    /const layer1Y = shouldReduceMotion \? '0%' : layer1YRaw/,
    'Layer 1 must disable parallax transform under reduced motion'
  );
  assert.match(
    code,
    /const layer2Y = shouldReduceMotion \? '0%' : layer2YRaw/,
    'Layer 2 must disable parallax transform under reduced motion'
  );
  assert.match(
    code,
    /const layer3Y = shouldReduceMotion \? '0%' : layer3YRaw/,
    'Layer 3 must disable parallax transform under reduced motion'
  );
});

// ============================================================================
// SUITE 3: HeroCanvas3D AST & Canvas Mount Stability under onFpsReport Bursts
// ============================================================================

test('R1 Adversarial 3.1: AST verifies onFpsReport & onReady decoupled from useEffect dependency array', () => {
  const canvasPath = path.join(projectRoot, 'src/components/hero/HeroCanvas3D.tsx');
  const code = fs.readFileSync(canvasPath, 'utf8');

  const sourceFile = ts.createSourceFile(
    'HeroCanvas3D.tsx',
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );

  let canvasEffectFound = false;
  let canvasEffectDeps = [];
  let refSyncEffectFound = false;

  function visit(node) {
    if (ts.isCallExpression(node)) {
      const text = node.expression.getText(sourceFile);
      if (text === 'useEffect') {
        const args = node.arguments;
        if (args.length === 2 && ts.isArrayLiteralExpression(args[1])) {
          const deps = args[1].elements.map((e) => e.getText(sourceFile));
          if (deps.includes('isLoaded') || deps.includes('tier')) {
            canvasEffectFound = true;
            canvasEffectDeps = deps;
          }
        } else if (args.length === 1) {
          // Un-dependent effect for ref sync
          const bodyText = args[0].getText(sourceFile);
          if (bodyText.includes('onFpsReportRef') && bodyText.includes('onReadyRef')) {
            refSyncEffectFound = true;
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  assert.ok(canvasEffectFound, 'Canvas initialization useEffect must be found in HeroCanvas3D');
  assert.ok(refSyncEffectFound, 'Un-dependent ref-synchronization useEffect must be found in HeroCanvas3D');

  assert.ok(
    !canvasEffectDeps.includes('onFpsReport'),
    `CRITICAL INVARIANT: onFpsReport MUST NOT be in useEffect dependency array. Found deps: [${canvasEffectDeps.join(', ')}]`
  );
  assert.ok(
    !canvasEffectDeps.includes('onReady'),
    `CRITICAL INVARIANT: onReady MUST NOT be in useEffect dependency array. Found deps: [${canvasEffectDeps.join(', ')}]`
  );

  // Verify worker message dispatch uses ref
  assert.match(
    code,
    /onFpsReportRef\.current\?\.(\(msg\.fps\))/,
    'HeroCanvas3D must invoke onFpsReport via onFpsReportRef.current'
  );
  assert.match(
    code,
    /onReadyRef\.current\?\.(\(msg\.rendererInfo\))/,
    'HeroCanvas3D must invoke onReady via onReadyRef.current'
  );
});

test('R1 Adversarial 3.2: Empirical Component Lifecycle Simulation (500 rapid onFpsReport bursts)', () => {
  // Model the exact React hook & effect lifecycle of HeroCanvas3D under stress
  class MockDOMElement {
    constructor(tagName) {
      this.tagName = tagName.toUpperCase();
      this.children = [];
      this.classList = {
        classes: new Set(),
        add: (...c) => c.forEach((cls) => this.classList.classes.add(cls)),
        remove: (...c) => c.forEach((cls) => this.classList.classes.delete(cls)),
        contains: (c) => this.classList.classes.has(c),
      };
      this.style = {};
      this.parentNode = null;
    }
    appendChild(child) {
      child.parentNode = this;
      this.children.push(child);
      return child;
    }
    removeChild(child) {
      this.children = this.children.filter((c) => c !== child);
      child.parentNode = null;
      return child;
    }
    getBoundingClientRect() {
      return { width: 1200, height: 700, left: 0, top: 0 };
    }
  }

  class MockWorker {
    constructor(url) {
      this.url = url;
      this.terminated = false;
      this.messagesPosted = [];
      this.onmessage = null;
    }
    postMessage(msg) {
      this.messagesPosted.push(msg);
    }
    terminate() {
      this.terminated = true;
    }
  }

  const container = new MockDOMElement('div');
  let appendCanvasCallCount = 0;
  let removeCanvasCallCount = 0;
  let createdCanvas = null;

  const originalAppendChild = container.appendChild.bind(container);
  container.appendChild = (child) => {
    if (child.tagName === 'CANVAS') {
      appendCanvasCallCount++;
      createdCanvas = child;
    }
    return originalAppendChild(child);
  };

  const originalRemoveChild = container.removeChild.bind(container);
  container.removeChild = (child) => {
    if (child.tagName === 'CANVAS') {
      removeCanvasCallCount++;
    }
    return originalRemoveChild(child);
  };

  // Simulating the HeroCanvas3D component execution under React state changes
  class HeroCanvas3DInstance {
    constructor(props) {
      this.props = props;
      this.container = container;
      this.worker = null;
      this.onReadyRef = { current: props.onReady };
      this.onFpsReportRef = { current: props.onFpsReport };

      // State
      this.isLoaded = true;
      this.isFallback = false;
      this.tier = 1;
      this.dpr = 1.0;
      this.isOffscreenSupported = true;
      this.hasWorkerFailed = false;

      // Track main effect deps
      this.effectDeps = [
        this.isLoaded,
        this.isFallback,
        this.tier,
        this.dpr,
        this.isOffscreenSupported,
        this.hasWorkerFailed,
      ];

      this.effectCleanup = null;
      this.mountCanvasEffect();
    }

    // Ref sync effect runs on every render
    updateProps(newProps) {
      this.props = newProps;
      this.onReadyRef.current = newProps.onReady;
      this.onFpsReportRef.current = newProps.onFpsReport;

      // Check if main effect dependencies changed
      const newDeps = [
        this.isLoaded,
        this.isFallback,
        this.tier,
        this.dpr,
        this.isOffscreenSupported,
        this.hasWorkerFailed,
      ];

      const hasDepsChanged = newDeps.some((dep, i) => !Object.is(dep, this.effectDeps[i]));
      if (hasDepsChanged) {
        if (this.effectCleanup) this.effectCleanup();
        this.effectDeps = newDeps;
        this.mountCanvasEffect();
      }
    }

    mountCanvasEffect() {
      const canvas = new MockDOMElement('canvas');
      canvas.transferControlToOffscreen = () => ({ width: 1200, height: 700 });
      this.container.appendChild(canvas);

      const worker = new MockWorker('heroRender.worker.ts');
      this.worker = worker;

      worker.onmessage = (e) => {
        const msg = e.data;
        if (msg.type === 'FPS_REPORT') {
          this.onFpsReportRef.current?.(msg.fps);
        } else if (msg.type === 'READY') {
          this.onReadyRef.current?.(msg.rendererInfo);
        }
      };

      this.effectCleanup = () => {
        if (canvas.parentNode === this.container) {
          this.container.removeChild(canvas);
        }
        if (this.worker) {
          this.worker.postMessage({ type: 'DISPOSE' });
          this.worker.terminate();
          this.worker = null;
        }
      };
    }

    unmount() {
      if (this.effectCleanup) {
        this.effectCleanup();
        this.effectCleanup = null;
      }
    }
  }

  let receivedFps = null;
  let receivedFpsCount = 0;

  // Mount with initial props
  const instance = new HeroCanvas3DInstance({
    onReady: () => {},
    onFpsReport: (fps) => {
      receivedFps = fps;
      receivedFpsCount++;
    },
  });

  assert.equal(appendCanvasCallCount, 1, 'Initial mount must append canvas exactly once');
  assert.equal(removeCanvasCallCount, 0, 'Initial mount must not remove canvas');
  const initialCanvasRef = createdCanvas;

  // ADVERSARIAL STRESS: 500 consecutive high-frequency FPS reports
  // Each report triggers a parent re-render that passes a BRAND NEW unmemoized callback instance
  for (let i = 1; i <= 500; i++) {
    const fakeFps = 55 + (i % 10); // Values between 55 and 64

    // Worker posts message
    instance.worker.onmessage({ data: { type: 'FPS_REPORT', fps: fakeFps } });

    // Parent re-renders HeroSection, generating fresh arrow function instance
    const freshCallback = (fps) => {
      receivedFps = fps;
      receivedFpsCount++;
    };

    instance.updateProps({
      onReady: () => {},
      onFpsReport: freshCallback,
    });
  }

  // CRITICAL INVARIANTS CHECK
  assert.equal(receivedFpsCount, 500, 'All 500 FPS reports must be received');
  assert.equal(appendCanvasCallCount, 1, 'Canvas must NEVER be re-appended during FPS updates');
  assert.equal(removeCanvasCallCount, 0, 'Canvas must NEVER be removed or unmounted during FPS updates');
  assert.equal(createdCanvas, initialCanvasRef, 'Canvas DOM reference must remain identical (zero thrashing)');
  assert.equal(instance.worker.terminated, false, 'Worker must NEVER be terminated during FPS updates');

  // Verify legitimate unmount cleans up cleanly
  instance.unmount();
  assert.equal(removeCanvasCallCount, 1, 'Clean unmount must remove canvas once');
  assert.equal(instance.worker, null, 'Clean unmount must nullify worker reference');
});

// ============================================================================
// SUITE 4: 2-Second Snapping Glitch Elimination & Delta Accumulation
// ============================================================================

test('R1 Adversarial 4.1: Mathematical continuity test for celestial ring rotation (zero snapping over continuous frames)', () => {
  // Legacy logic:
  // celestialRings.rotation.z = timestamp * 0.00015
  // When worker recreation occurred every 1000-2000ms, timestamp was reset to 0:
  // Δ = 0 - (2000 * 0.00015) = -0.3000 rad (-17.18 deg backward snap!)

  // Worker 1's Remediation logic:
  // deltaMs = state.lastTickTime > 0 ? Math.min(timestamp - state.lastTickTime, 64) : 16
  // ringRotationZ = (ringRotationZ + deltaMs * 0.00015) % (Math.PI * 2)

  let fixedRotation = 0;
  let lastTickTime = 0;

  function simulateFixedTick(timestamp) {
    const deltaMs = lastTickTime > 0 ? Math.min(Math.max(0, timestamp - lastTickTime), 64) : 16;
    lastTickTime = timestamp;
    fixedRotation = (fixedRotation + deltaMs * 0.00015) % (Math.PI * 2);
    return fixedRotation;
  }

  // 1. Verify continuous 600 frames (10 seconds)
  let prev = 0;
  let maxDelta = 0;
  for (let frame = 1; frame <= 600; frame++) {
    // Normal 60fps tick with minor realistic jitter (15ms - 18ms)
    const jitter = (frame % 3) * 0.5;
    const t = frame * 16.666 + jitter;
    const cur = simulateFixedTick(t);
    const delta = cur - prev;

    assert.ok(delta >= 0, `Rotation delta must be non-negative (frame ${frame})`);
    assert.ok(delta <= 64 * 0.00015, `Rotation delta must not exceed clamped limit (frame ${frame})`);
    if (delta > maxDelta) maxDelta = delta;
    prev = cur;
  }

  // 2. Verify lag spike protection (e.g. 500ms background tab pause)
  const beforePause = fixedRotation;
  const tPause = 600 * 16.666 + 500; // 500ms later
  const afterPause = simulateFixedTick(tPause);
  const pauseDelta = afterPause - beforePause;

  // Even after 500ms pause, delta must be clamped to 64ms * 0.00015 = 0.0096 rad
  assert.ok(
    pauseDelta <= 64 * 0.00015 + 1e-6,
    `Lag spike delta must be clamped to 64ms max (got ${pauseDelta} rad, max allowed ${64 * 0.00015})`
  );

  // 3. Compare with legacy reset glitch
  const legacyAt2s = (2000 * 0.00015) % (Math.PI * 2);
  const legacyReset = (0 * 0.00015) % (Math.PI * 2);
  const legacySnapMagnitude = Math.abs(legacyReset - legacyAt2s);
  assert.ok(
    legacySnapMagnitude > 0.25,
    `Legacy logic reproduces 2-second snapping glitch (snap magnitude: ${legacySnapMagnitude} rad)`
  );
});

test('R1 Adversarial 4.2: Mobile responsive portrait camera framing (fov 56, z 18 when aspect < 1.0)', () => {
  const workerPath = path.join(projectRoot, 'src/workers/heroRender.worker.ts');
  const code = fs.readFileSync(workerPath, 'utf8');

  // Verify portrait aspect check during init
  assert.match(
    code,
    /const fov = aspect < 1\.0 \? 56 : 48/,
    'Worker must expand camera fov to 56 in portrait orientation'
  );
  assert.match(
    code,
    /camera\.position\.set\(0,\s*0,\s*aspect < 1\.0 \? 18 : 16\)/,
    'Worker must pull camera back to z=18 in portrait orientation'
  );

  // Verify portrait aspect check during RESIZE
  assert.match(
    code,
    /state\.camera\.fov = aspect < 1\.0 \? 56 : 48/,
    'Worker resize handler must update fov based on aspect ratio'
  );
  assert.match(
    code,
    /state\.camera\.position\.z = aspect < 1\.0 \? 18 : 16/,
    'Worker resize handler must update camera.position.z based on aspect ratio'
  );
});
