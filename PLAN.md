# Itihas Swadhay (इतिहास स्वाध्याय) — Architectural Elevation Plan

## Executive Vision & System Overview

The **Itihas Swadhay (इतिहास स्वाध्याय)** platform is an elite, animated educational workspace engineered specifically for Maharashtra State Board (MSBSHSE) Class 10 History and Political Science students. Designed at the intersection of 2026 3D Web Architecture, the Trinity Design System, and Adolescent Cognitive Neuroscience, the platform transforms rote memorization into a high-retention, multimodal scholarly experience.

This document establishes the comprehensive multi-milestone elevation blueprint for:
1. Complete 14-Chapter Curriculum Ingestion (9 History + 5 Political Science) with authentic MSBSHSE tripartite rubrics (`प्रस्तावना`, `मुख्य मुद्दे`, `निष्कर्ष`).
2. 10-Year SSC Board Question Papers Archive Cockpit (2016–2025) spanning 5 curriculum eras with empirical recurrence telemetry.
3. Adolescent Cognitive Neuroscience Engine grounded in Sweller's Cognitive Load Theory, Baddeley's Working Memory Model, Paivio's Dual Coding Theory, and Kornell & Bjork's Interleaving Effect.
4. Dark AMOLED Obsidian/Basalt Visual Craftsmanship ("Gold Valley") with the Royal Shivmudra Octagonal Archival Seal (`शिवमुद्रा अष्टकोन`) and strict Zero-Shadow discipline.

---

## Multi-Milestone Elevation Roadmap

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ M1: Architectural Baseline & Persistent Logs (COMPLETE)                     │
│ ├─ Argon Gate Zero-Shadow fix in HeroSection.tsx                            │
│ ├─ Trinity CSS token parity in index.css (:root)                            │
│ ├─ Canonical Marathi SR branding in HeaderNav.tsx                           │
│ ├─ Canonical Board Papers type system (src/types/boardPapers.ts)             │
│ └─ Persistent Workspace Logs (PLAN.md, CURRICULUM_AUDIT.md, BOARD_PAPERS_STATUS.md)│
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ M2: Full Curriculum Ingestion (14 Chapters)                                 │
│ ├─ Ingest History Ch 7 (खेळ आणि इतिहास) — 7 questions + rubrics              │
│ ├─ Ingest History Ch 8 (पर्यटन आणि इतिहास) — 7 questions + rubrics           │
│ ├─ Ingest History Ch 9 (ऐतिहासिक ठेव्यांचे जतन) — 7 questions + rubrics      │
│ ├─ Ingest Political Science Ch 4 (सामाजिक व राजकीय चळवळी) — 7 questions      │
│ ├─ Ingest Political Science Ch 5 (भारतीय लोकशाहीसमोरील आव्हाने) — 7 questions│
│ ├─ Synchronize ChapterSelector track, Hero badges, and Footer               │
│ └─ Expand master Devanagari cloze regex & vocabulary for 14 chapters        │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ M3: 10-Year SSC Board Question Papers Cockpit (2016–2025)                   │
│ ├─ Ingest 10-year official MSBSHSE papers into src/data/boardPapersData.ts  │
│ ├─ Discriminated schema for 5 Curriculum Eras (Old Course, 2019, 2020-25)   │
│ ├─ Dedicated CovidResolutionView for 2021 GR & 50:30:20 formula             │
│ ├─ Build BoardPapersCockpit, BoardYearTabs, BoardQuestionCard, BoardRubricDrawer│
│ └─ Integrate view navigation tab toggle in HeaderNav.tsx                    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ M4: Adolescent Cognitive Neuroscience Engine & Visual Polish                │
│ ├─ 2-Stage Devanagari Grapheme Cluster Cloze Engine (Intl.Segmenter + regex) │
│ ├─ Cognitive Interleaving Studio (Dynamic shuffle across question tiers)    │
│ ├─ Allan Paivio Dual Coding Flowcharts & Spatial Concept Webs               │
│ └─ Royal Shivmudra Octagonal Archival Seal integration & AMOLED contrast    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ M5: Full Verification, Argon Gate Certification & Production Build          │
│ ├─ Modernize E2E Test Suite (tests/e2e/runner.js) for 14 chapters           │
│ ├─ Argon Gate 0-violation run (node scripts/argon-gate.mjs)                 │
│ ├─ Clean production compilation (tsc -b && vite build)                      │
│ └─ Forensic Integrity Audit independent verification                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Milestone Scope & Specifications

### Milestone 1: Architectural Baseline & Persistent Logs
- **Objectives**:
  - Eliminate the `drop-shadow-sm` Argon gate blocker in `src/components/hero/HeroSection.tsx:168`.
  - Harmonize CSS custom property tokens in `src/styles/index.css` by providing Trinity baseline tokens (`--color-accent-terracotta: #cc785c;`, `--color-accent-amber: #e8a55a;`, `--color-accent-teal: #5db8a6;`) alongside the AMOLED palette.
  - Inject accessibility and test harness brand anchor `<span className="sr-only">इतिहास स्वाध्याय इयत्ता १० वी</span>` into `src/components/HeaderNav.tsx`.
  - Establish canonical TypeScript contracts for the 10-year board paper archive in `src/types/boardPapers.ts`.
  - Initialize workspace persistent architectural logs: `PLAN.md`, `CURRICULUM_AUDIT.md`, `BOARD_PAPERS_STATUS.md`.
- **Exit Criteria**: `node scripts/argon-gate.mjs` exits with 0 violations; `npm run build` compiles cleanly.

### Milestone 2: Full Curriculum Ingestion (14 Chapters)
- **Objectives**:
  - Ingest the remaining 5 chapters from `D:\Local Send\saves\इयत्ता_१०वी_इतिहास_व_राज्यशास्त्र-20261028-070156.zip`:
    - History Ch 7: खेळ आणि इतिहास (7 questions)
    - History Ch 8: पर्यटन आणि इतिहास (7 questions)
    - History Ch 9: ऐतिहासिक ठेव्यांचे जतन (7 questions)
    - Political Science Ch 4: सामाजिक व राजकीय चळवळी (7 questions)
    - Political Science Ch 5: भारतीय लोकशाहीसमोरील आव्हाने (7 questions)
  - Ensure every ingested question features complete Marathi answers, context introduction (`प्रस्तावना`), structured points (`मुख्य मुद्दे`), and concluding synthesis (`निष्कर्ष`).
  - Update `ChapterSelector.tsx` with dedicated Lucide icons (`Trophy`, `Compass`, `Castle`, `Flag`, `ShieldCheck`).
  - Expand `MASTER_CURRICULUM_KEYWORDS_REGEX` to cover 14-chapter Devanagari terminology.
- **Exit Criteria**: `chaptersData.length === 14` (9 History, 5 Political Science); all 98 questions present with tripartite rubrics.

### Milestone 3: 10-Year SSC Board Question Papers Cockpit (2016–2025)
- **Objectives**:
  - Ingest all 10 academic examination years from `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/` into `src/data/boardPapersData.ts`:
    - 2016, 2017, 2018 (Old Course Modern World History, 40 marks)
    - 2019 (Transitional New Course, 60 marks)
    - 2020, 2023, 2024, 2025 (Canonical Activity Sheet, 40 marks)
    - 2021 (Official Government Resolution, 50:30:20 evaluation formula)
    - 2022 (Reduced Syllabus, 40 marks)
  - Build UI components in `src/components/board/`:
    - `BoardPapersCockpit.tsx`: Root dashboard with Year Tabs and Exam Filter Bar.
    - `BoardYearTabs.tsx`: Horizontal selector displaying years with era badges.
    - `BoardQuestionCard.tsx`: Interactive question card with 3-mode active recall and MSBSHSE marking rubrics.
    - `CovidResolutionView.tsx`: Dedicated archival folio for Year 2021 GR decrees and interactive 50:30:20 calculator.
    - `BoardRubricDrawer.tsx`: Chief Moderator marking breakdown drawer.
  - Connect view switching in `useStudyStore.ts` (`activeViewTab: 'curriculum' | 'board_papers' | 'neuro_lab'`) and `HeaderNav.tsx`.
- **Exit Criteria**: All 10 years browseable; Year 2021 displays GR decree folio; recurring questions tagged with frequency markers.

### Milestone 4: Adolescent Cognitive Neuroscience Engine & Visual Polish
- **Objectives**:
  - Implement 2-stage Devanagari grapheme cluster cloze testing using `Intl.Segmenter('mr', { granularity: 'grapheme' })` with regex fallback in `src/utils/devanagariGraphemes.ts`.
  - Build `CognitiveInterleavingStudio.tsx` to dynamically shuffle 1-mark rapid MCQs, 2-mark concept maps, and 3-mark causal reason questions.
  - Integrate Allan Paivio Dual Coding concept maps across abstract historiographical topics (Marx's dialectics, subaltern school, constitutional amendments).
  - Ensure the Royal Shivmudra Octagonal Archival Seal (`ShivmudraEmblem.tsx`) is rendered on board paper headers and cards with high-contrast AMOLED borders.
- **Exit Criteria**: Grapheme segmentation accurately handles Devanagari conjuncts (जोडाक्षरे); Interleaving practice dynamically generates randomized balanced decks.

### Milestone 5: E2E Verification & Production Build Certification
- **Objectives**:
  - Update `tests/e2e/tier1_feature_tests.test.js` to assert the 14-chapter curriculum model.
  - Execute `node scripts/argon-gate.mjs` — ensure 0 cross-file violations.
  - Execute `node tests/e2e/runner.js` — achieve 100% pass across all test tiers.
  - Execute `npm run build` (`tsc -b && vite build`) — compile with 0 errors and 0 warnings.
  - Undergo independent Forensic Auditor inspection confirming authentic logic with zero dummy facades.
- **Exit Criteria**: Full test pass, clean build, and auditor approval.

---

## Adolescent Cognitive Neuroscience Theoretical Framework

| Principle | Cognitive Mechanism | Educational Application in Itihas Swadhay |
| :--- | :--- | :--- |
| **Cognitive Load Theory (Sweller)** | Working memory under exam anxiety is constrained to $4 \pm 1$ information chunks. Monolithic paragraphs cause split-attention and cognitive overload. | **Tripartite Rubric Chunking**: Every question is parsed into Band A: `प्रस्तावना` (Context), Band B: `मुख्य मुद्दे` (Causal Mechanism), and Band C: `निष्कर्ष` (Historical Synthesis). |
| **Testing Effect (Roediger & Karpicke)** | Retrieval effort produces durable long-term synaptic potentiation, outperforming passive re-reading by 300%. | **Active Recall Mode**: Question cards mask key answers, requiring active mental reconstruction before revealing model answers. |
| **Phonological Scaffolding (Baddeley)** | Direct binary unmasking creates an illusion of competence. Providing initial phonological cues activates the working memory phonological loop. | **2-Stage Devanagari Cloze**: Stage 0 displays syllable count (`[ विचारवंत • ५ अक्षरे ]`); Stage 1 reveals the initial akshara (`[ वि-... ]`); Stage 2 reveals full token. |
| **Dual Coding Theory (Paivio)** | Humans possess separate, interconnected cognitive subsystems for verbal text and non-verbal spatial representations. | **Visual Concept Maps**: Abstract historiographical theories are mapped to interactive flowcharts, timelines, and radial concept webs. |
| **Interleaving Effect (Bjork & Taylor)** | Massed (blocked) practice leads to rapid habituation and superficial processing. Interleaving trains discrimination and cognitive flexibility. | **Interleaving Studio**: Shuffles 1-mark rapid recall MCQs, 2-mark concept diagrams, and 3-mark analytical causality questions across disparate chapters. |

---

## Technical Stack & Architectural Rules

- **Frontend Core**: React 19, Vite 8, TypeScript 6, Tailwind CSS v4 (`@theme` and `@layer base`), Zustand v5.
- **Graphics & 3D**: Three.js v0.186, OffscreenCanvas Web Worker, `@pmndrs/detect-gpu`, GSAP v3, Motion v14, Lenis v1.3.
- **Hardware Tier Isolation**: DevicePixelRatio clamped to 1.0; heavy 3D math isolated in `src/workers/heroRender.worker.ts` to keep the main UI thread at 60 FPS.
- **Zero-Shadow Law**: Strictly 0 box-shadows on cards, buttons, dialogs, or inputs (`box-shadow: none !important`). Elevation achieved via tonal stepping (`#070709` floor $\rightarrow$ `#0e0e13` surface $\rightarrow$ `#121218` card $\rightarrow$ `#16161f` spec cell) and 1px hairlines (`rgba(255, 255, 255, 0.08)`).
- **Linguistic Integrity**: UI shell in machined editorial English (`letter-spacing: 1.5px; text-transform: uppercase`); educational curriculum and board question content strictly in authentic, uncorrupted Marathi with zero AI-slop transliteration.
