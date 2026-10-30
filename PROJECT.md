# Project: Itihas Swadhay (Class 10 Maharashtra Board History & Political Science)

## Architecture

### System Architecture Overview
The application is an elite, high-performance, animated educational cockpit and study workspace built with React 19, TypeScript 5.8+, Vite 8, Tailwind CSS v4, Motion (Framer Motion v14), Three.js, Zustand 5, Lenis, and GSAP ScrollTrigger.

```
+---------------------------------------------------------------------------------------+
|                                    Browser Main Thread                                |
|                                                                                       |
|  +--------------------------+  +---------------------------------------------------+  |
|  |     Zustand Store        |  |               React 19 UI Hierarchy               |  |
|  | - Hardware Tier (0/1/2)  |  | - NavigationBar (Trinity Tokens, Pill Search CTA) |  |
|  | - Curriculum Database    |  | - HeroSection (3-Layer Motion Parallax, Fallback) |  |
|  | - Active Chapter / Filter|  | - DeepStudyWorkspace (9 Chapters, Accordions)     |  |
|  | - Bookmarks / Progress   |  | - TelemetrySpecCells (32px Metrics, Machined Tags)|  |
|  | - Search Modal (Ctrl+K)  |  | - ConceptDiagramPanels & Historical Figures       |  |
|  +------------+-------------+  +-------------------------+-------------------------+  |
|               |                                          |                            |
|  +------------v------------------------------------------v-------------------------+  |
|  |                Unified Master Ticker (Lenis + GSAP ScrollTrigger)               |  |
|  |  - lenis.raf(time * 1000) driven by gsap.ticker with lagSmoothing(0)            |  |
|  |  - Zero-drift scroll interpolation for buttery 60 FPS transitions               |  |
|  +---------------------------------------+-----------------------------------------+  |
|                                          | postMessage / Transferable                 |
+------------------------------------------|--------------------------------------------+
                                           |
+------------------------------------------v--------------------------------------------+
|                          Dedicated Web Worker (heroRender.worker.ts)                  |
|                                                                                       |
|  +---------------------------------------------------------------------------------+  |
|  |                     OffscreenCanvas 3D Render Pipeline                          |  |
|  |  - devicePixelRatio clamped to 1.0 on Tier 1 hardware (@pmndrs/detect-gpu)      |  |
|  |  - Three.js WebGPU / WebGL 2 Fallback Renderer (r171+)                          |  |
|  |  - Atmospheric Deccan Twilight Sky + Sanskrit/Modi Scroll Particles             |  |
|  |  - Memory-safe disposal, zero main-thread blocking, zero layout thrashing       |  |
|  +---------------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------------+
```

### Key Architectural Pillars
1. **Execution Isolation (2026 Standards)**: Heavy 3D rendering and math execute exclusively in `src/workers/heroRender.worker.ts` via `HTMLCanvasElement.transferControlToOffscreen()`. The main thread remains 100% unblocked for instantaneous DOM event handling and scrolling.
2. **Predictive Hardware Tiering & DPR Clamping**: Hardware capability is classified on initial boot using `@pmndrs/detect-gpu` and cached in `localStorage`. Tier 1 (Intel integrated GPUs, ≤4GB RAM) clamps `devicePixelRatio` strictly to 1.0, disables MSAA, and uses optimized geometry to protect unified memory bandwidth.
3. **Unified Animation Synchronization**: Lenis virtual smooth scrolling runs with `autoRaf: false` and is driven on the exact same tick as GSAP ScrollTrigger and worker render dispatch via `gsap.ticker.add()`, eliminating 1-frame jitter.
4. **Trinity Visual Prestige**: Strict enforcement of `#faf9f5` warm cream floor, `#141413` deep ink, `#cc785c` Claude coral, 4px 3-stop micro-stripe (`#cc785c` -> `#e8a55a` -> `#5db8a6`), Apple 17px body standard, BMW machined tracking (+1.5px, Latin only), binary geometry (0px/8px rectangular or 9999px pill), and the Zero-Shadow Law (`box-shadow: none` on standard UI cards and buttons).
5. **Anti-Slop Authenticity**: Absolute ban on em dashes (`—`), elimination of generic SaaS clichés, and 100% authentic Marathi academic copy directly derived from the official Maharashtra Board Class 10 textbook curriculum.

---

## Feature Inventory

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Trinity Design System Foundation | Design tokens (`#faf9f5`, `#141413`, `#cc785c`, `#e8a55a`, `#5db8a6`, `#efe9de`), Tailwind v4 setup, zero-shadow law, 4px 3-stop micro-stripe, and 17px typography. | M1 | DESIGN_TRINITY.md |
| 2 | Hardware Tiering & DPR Guardrail | `@pmndrs/detect-gpu` detection, DPR clamped to 1.0 for Tier 1, localStorage tier pinning, reduced-motion compliance. | M1 | 2026 3D Research §2 |
| 3 | Core State Management & Schemas | Zustand store for chapters, active filters, bookmarks, reading progress, search query, and complete TypeScript types (`curriculum.ts`, `search.ts`). | M1 | Explorer 3 Hand-off |
| 4 | Build & Worker Tooling Configuration | Vite 8 ES worker bundling (`worker: { format: 'es' }`), COOP/COEP headers, and build script setup. | M1 | 2026 3D Research §2 |
| 5 | OffscreenCanvas Web Worker Isolation | `heroRender.worker.ts` with Three.js WebGPU/WebGL2 render loop, handling messages for resize, scroll, and mouse interaction. | M2 | 2026 3D Research §2-3 |
| 6 | 3-Layer Parallax & Twilight Atmosphere | Multi-layer depth parallax driven by Motion spring dynamics, atmospheric Deccan twilight sky, and interactive tactile controls. | M2 | ORIGINAL_REQUEST §R3 |
| 7 | Unified Frame Timing & Scroll Synchronization | Master `gsap.ticker` driving Lenis (`autoRaf: false`) and GSAP ScrollTrigger without frame drops or jitter. | M2 | 2026 3D Research §3 |
| 8 | Tier 0 Robust SVG Silhouette Fallback | High-fidelity inline SVG fallback of the Scholar at the Scroll for environments without WebGL/OffscreenCanvas. | M2 | Explorer 1 Hand-off |
| 9 | Tactile Cockpit Spring Dynamics | Motion physics (`stiffness: 300, damping: 25`, `whileTap: { scale: 0.97 }`) on all buttons, tabs, and interactive elements. | M2 | Motion Repo Examples |
| 10 | Complete 9-Chapter Curriculum Database | All 6 History and 3 Political Science chapters with authentic Marathi questions, structured point-by-point answers, and explanations. | M3 | the ithihas swadhay and details |
| 11 | Question Taxonomy & Interactive Filtering | 7 Question categories (MCQ, wrong pairs, concept maps, short notes, give reasons, true/false with reasons, detailed answers) with instant filtering. | M3 | Explorer 3 Hand-off |
| 12 | Collapsible Q&A Accordions | Smooth `AnimatePresence` height:auto collapsible accordions for studying questions without layout thrashing. | M3 | Motion Repo Examples |
| 13 | Telemetry Spec-Cells & Concept Diagrams | 32px telemetry metrics (exam weightage, marks, chapter index) and visual concept maps/timelines for historical milestones. | M3 | DESIGN_TRINITY.md |
| 14 | Instant Bilingual Search (Ctrl+K) | High-speed client-side search indexing Marathi Devanagari and English terms with modal dialog, keyboard navigation, and chapter jumping. | M3 | ORIGINAL_REQUEST §R4 |
| 15 | Bookmarking & Local Study Persistence | Bookmark toggle per question, chapter completion status, and study session recovery via localStorage. | M3 | ORIGINAL_REQUEST §R4 |
| 16 | Anti-Slop Audit Compliance | Ban on em dashes (`—`), elimination of placeholder copy, authentic Marathi terminology throughout all views. | M3 | anti-slop rules |
| 17 | E2E Test Harness & Opaque-Box Suite | Comprehensive 4-Tier test suite (Tier 1: Feature, Tier 2: Boundary, Tier 3: Combinatorial, Tier 4: Real-World) publishing `TEST_READY.md`. | E2E Track | Project Pattern |
| 18 | 100% E2E Test Suite Pass (Tiers 1-4) | Execution and passing of all automated tests across navigation, filtering, search, bookmarking, and rendering fallbacks. | M4 | Project Pattern §Final |
| 19 | Adversarial Coverage Hardening (Tier 5) | Challenger-led white-box stress testing, memory leak profiling, zero layout thrashing verification, and Forensic Audit pass. | M4 | Project Pattern §Phase 2 |
| 20 | Zero-Error Production Build Verification | Strict TypeScript compile check, `npm run build` bundling verification with zero warnings. | M4 | ORIGINAL_REQUEST §Acceptance |

---

## Milestones

| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| E2E | E2E Testing Track | Independent opaque-box test harness, test runner, and test suites (Tiers 1–4) derived from user requirements. Publishes `TEST_READY.md`. | none | DONE |
| M1 | Architecture Foundation & Trinity Design Tokens | Dependencies (`three`, `@types/three`, `@pmndrs/detect-gpu`, `lenis`, `gsap`), Vite worker & header config, Tailwind v4 Trinity tokens (`#faf9f5`, `#141413`, `#cc785c`, 4px micro-stripe, zero-shadow law), Zustand study store, TypeScript schemas (`curriculum.ts`, `search.ts`). | none | DONE |
| M2 | Interactive 3D & Parallax Experience (Scholar at the Scroll) | Web Worker `heroRender.worker.ts`, OffscreenCanvas pipeline, DPR clamping to 1.0 on Tier 1, unified ticker (Lenis + GSAP), 3-layer spring parallax, tactile Motion physics, and Tier 0 SVG fallback. | M1 | DONE |
| M3 | Curriculum & Swadhay Deep-Study Workspace | Authentic Marathi dataset for all 9 chapters (`chaptersData.ts`), 7 question categories, collapsible accordions, telemetry spec-cells, Ctrl+K bilingual search, bookmarking, and anti-slop compliance. | M1 | DONE |
| M4 | Final E2E Test Pass & Adversarial Hardening | Phase 1: Pass 100% of E2E test suite (Tiers 1–4) after `TEST_READY.md`. Phase 2: Challenger-led Tier 5 adversarial stress testing, memory leak audit, zero layout thrashing, Forensic Audit pass, and `npm run build` verification. | M2, M3, E2E | DONE |
| M5 | Corporate Boilerplate Purge & Editorial Typography | Complete purge of corporate/legal clichés, integration of scholarly provenance, Awwwards motion bezier curves, and zero drop-shadow verification. | M4 | DONE |
| M6 | Continuous 3D Sahyadri Horizon, Bilingual UI, Awwwards Palette & PRAO Taste Certification | Elimination of 2-second 3D canvas reset loop, mobile WebGL enablement with DPR 1.0, Selective Bilingual Architecture (English UI Shell, 100% authentic Marathi Curriculum), 5 Awwwards semantic icon tokens, and single-agent PRAO Chrome DevTools taste certification on port 9222. | M5 | DONE |

---

## Interface Contracts

### 1. State Store ↔ UI Components (`src/types/curriculum.ts`)
```typescript
export interface Chapter {
  id: string; // e.g. "hist-01"
  subject: 'history' | 'political_science';
  chapterNumber: number;
  titleMarathi: string;
  titleEnglish: string;
  summaryMarathi: string;
  telemetry: {
    boardWeightageMarks: number;
    questionCount: number;
    recommendedStudyMinutes: number;
    difficultyLevel: 'सुलभ' | 'मध्यम' | 'प्रगत';
  };
  keyFigures: Array<{ nameMarathi: string; roleMarathi: string; period: string }>;
  milestones: Array<{ year: string; eventMarathi: string }>;
  conceptDiagrams: Array<{ titleMarathi: string; nodes: string[]; type: 'hierarchy' | 'flow' | 'category' }>;
  questions: SwadhayQuestion[];
}

export type QuestionType =
  | 'mcq'
  | 'wrong_pair'
  | 'concept_map'
  | 'short_notes'
  | 'give_reasons'
  | 'true_false_reasons'
  | 'detailed_answer';

export interface SwadhayQuestion {
  id: string;
  chapterId: string;
  type: QuestionType;
  questionMarathi: string;
  marks: number;
  options?: string[]; // For MCQs
  correctOptionIndex?: number;
  wrongPairData?: { pairs: Array<{ term: string; explanation: string }>; incorrectPair: string; correctedPair: string };
  answerMarathiPoints: string[]; // 2-3 precise bullet points
  answerMarathiDetailed?: string; // Enriched analytical context
}
```

### 2. Search Index Contract (`src/types/search.ts`)
```typescript
export interface SearchIndexEntry {
  id: string;
  chapterId: string;
  chapterTitleMarathi: string;
  questionId?: string;
  type: 'chapter' | 'question' | 'figure' | 'concept';
  titleMarathi: string;
  titleEnglish: string;
  contentSnippetMarathi: string;
  keywords: string[];
}
```

### 3. Main Thread ↔ 3D Web Worker Protocol (`src/types/worker.ts`)
```typescript
export type MainToWorkerMessage =
  | { type: 'INIT'; canvas: OffscreenCanvas; width: number; height: number; dpr: number; tier: number }
  | { type: 'RESIZE'; width: number; height: number }
  | { type: 'SCROLL'; scrollY: number; maxScroll: number }
  | { type: 'MOUSE_MOVE'; normalizedX: number; normalizedY: number }
  | { type: 'DISPOSE' };

export type WorkerToMainMessage =
  | { type: 'READY'; rendererInfo: string }
  | { type: 'FPS_REPORT'; fps: number }
  | { type: 'ERROR'; message: string };
```

---

## Code Layout

```
workspace/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                # Static assets, fonts, icons
│   ├── components/
│   │   ├── layout/
│   │   │   ├── NavigationBar.tsx       # Trinity top bar with pill search CTA & theme status
│   │   │   ├── MicroStripe.tsx         # 4px 3-stop signature horizontal accent bar
│   │   │   └── Footer.tsx              # Dignified academic footer with syllabus attribution
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx         # 3-layer parallax container with scroll-to-chapter CTA
│   │   │   ├── HeroCanvas3D.tsx        # OffscreenCanvas bridge to worker + Tier 0 SVG fallback
│   │   │   └── ScholarSilhouetteSVG.tsx# Bespoke high-fidelity SVG scholar at scroll
│   │   ├── swadhay/
│   │   │   ├── ChapterSelector.tsx     # 9-chapter horizontal / grid switcher
│   │   │   ├── TelemetryCard.tsx       # 32px display metrics and machined uppercase spec-cells
│   │   │   ├── QuestionFilterTabs.tsx  # Pill filters for question categories (MCQ, टिपा, सविस्तर...)
│   │   │   ├── QuestionAccordion.tsx   # Motion height:auto collapsible study cards
│   │   │   ├── ConceptDiagramCard.tsx  # Interactive visual concept webs & timelines
│   │   │   └── HistoricalFiguresModal.tsx # Historical scholar & thinker dossiers
│   │   └── search/
│   │       └── SearchModal.tsx         # Instant Ctrl+K bilingual search modal
│   ├── data/
│   │   ├── chaptersData.ts             # Complete authentic dataset for Chapters 1-9
│   │   └── searchIndex.ts              # Pre-indexed search tokens
│   ├── hooks/
│   │   ├── useMasterTicker.ts          # Unified Lenis + GSAP RAF synchronization
│   │   ├── useHardwareTier.ts          # @pmndrs/detect-gpu detection & DPR clamping
│   │   └── useKeyboardShortcuts.ts     # Global Ctrl+K, Escape, and arrow keys
│   ├── stores/
│   │   └── useStudyStore.ts            # Zustand store for active chapter, bookmarks, progress
│   ├── types/
│   │   ├── curriculum.ts               # Core curriculum data models
│   │   ├── search.ts                   # Search query and index types
│   │   └── worker.ts                   # Main thread <-> Worker message definitions
│   ├── workers/
│   │   └── heroRender.worker.ts        # Dedicated 3D Web Worker with Three.js OffscreenCanvas
│   ├── styles/
│   │   └── index.css                   # Tailwind v4 theme bindings & zero-shadow rules
│   ├── App.tsx                         # Root app coordinator
│   └── main.tsx                        # Entry point
├── tests/
│   ├── e2e/
│   │   ├── runner.js                   # Opaque-box E2E test runner
│   │   ├── tier1_feature_tests.test.js # Tier 1: Core feature verification
│   │   ├── tier2_boundary_tests.test.js# Tier 2: Boundary & edge case verification
│   │   ├── tier3_combination_tests.test.js # Tier 3: Combinatorial feature interactions
│   │   └── tier4_application_tests.test.js # Tier 4: Real-world study scenarios
├── TEST_INFRA.md                       # E2E Test infrastructure specification
├── TEST_READY.md                       # E2E Test suite ready publication signal
├── vite.config.ts                      # Worker bundling & COOP/COEP headers
└── package.json                        # Scripts & dependencies
```
