# E2E Test Infrastructure Specification: Itihas Swadhay

## 1. Overview & Architectural Principles

This document specifies the end-to-end (E2E) opaque-box test infrastructure for **Itihas Swadhay (Class 10 Maharashtra Board History & Political Science)**. The test architecture enforces a strict 4-Tier testing pyramid designed to validate visual prestige, curriculum authenticity, state management, and student workflow execution without relying on brittle DOM implementation coupling or main-thread blocking bloat.

### Core Testing Pillars
1. **Opaque-Box Verification**: Tests validate observable contracts, user interactions, accessibility, state transitions, visual token adherence, and authentic Marathi curriculum output as specified in `PROJECT.md` and `ORIGINAL_REQUEST.md`.
2. **Zero-Dependency Native Execution**: Powered by Node.js v24 native ES Modules, `node:test`, and `node:assert/strict`. No flaky headless browser overhead or network dependencies required for deterministic sub-second CI/CD execution.
3. **Progressive Testability & Determinism**: All test tiers are self-contained, isolated, and idempotent. Global stores and browser mocks are cleanly initialized and reset between test suites.
4. **Authoritative Ground Truth**: Expected outputs for all 9 chapters (6 History, 3 Political Science) are strictly derived from official Maharashtra State Board curriculum standards, the Trinity Design System tokens (`DESIGN_TRINITY.md`), and anti-slop rules.

---

## 2. Test Suite Tier Architecture

The test suite is organized into four distinct tiers located in `tests/e2e/`:

```
workspace/
├── tests/
│   ├── e2e/
│   │   ├── runner.js                      # Central test orchestrator & CLI runner
│   │   ├── tier1_feature_tests.test.js    # Tier 1: Core feature verification (50+ tests)
│   │   ├── tier2_boundary_tests.test.js   # Tier 2: Boundary & corner cases (18+ tests)
│   │   ├── tier3_combination_tests.test.js# Tier 3: Cross-feature interactions (16+ tests)
│   │   └── tier4_application_tests.test.js# Tier 4: Real-world student study scenarios (10+ tests)
├── TEST_INFRA.md                          # Test infrastructure specification
└── TEST_READY.md                          # Publication signal & test execution summary
```

### Tier 1: Feature Coverage (≥5 Tests per Core Feature)
Verifies discrete functional requirements across all core feature domains:
- **Navigation Bar**: Trinity branding, sticky positioning, back navigation ("परत जा"), responsive subject filter triggers, search trigger pill.
- **3D Hero & SVG Fallback**: Layer 1 (Twilight Sky & Horizon Sun), Layer 2 (Sahyadri Ridges & Fort Ramparts), Layer 3 (Rocky Summit, Contemplative Scholar at Scroll, Ancient Manuscript, Modi/Sanskrit lines), tactile cockpit CTAs.
- **Chapter Switching & Gallery**: 9-chapter grid rendering, subject card badges, chapter number sequencing, active chapter selection, study view transitions.
- **Question Taxonomy & Subject Filtering**: 3-state filter (`all`, `history`, `political_science`), accurate chapter counts (9, 6, 3), active pill transitions.
- **Question Accordions**: Smooth height-based expansion, question type badges (`qType`), structured point-by-point Marathi answers, answer copy functionality.
- **Instant Bilingual Search (Ctrl+K)**: Modal open/close via keyboard shortcut and click, query indexing across Marathi Devanagari and English terms, empty state prompt, live highlight matching.
- **Bookmarking & Persistence**: Bookmark toggle on individual questions, visual indicator state, bookmark counter in header, unbookmarking idempotency.
- **Telemetry Spec-Cells**: Cockpit display metrics (32px typography, machined tracking, board weightage, key figures, foundational methods).
- **4px Micro-Stripe**: Three-stop signature accent (`#cc785c` terracotta, `#e8a55a` amber, `#5db8a6` teal) crowning header, footer, and cards.
- **Zero-Shadow Discipline & Trinity Tokens**: Strict enforcement of `box-shadow: none` on standard cards, warm canvas floor `#faf9f5`, deep ink `#141413`, Claude coral `#cc785c`, 17px body standard.

### Tier 2: Boundary & Corner Cases
Tests system resilience under adverse, extreme, or edge-case conditions:
- Empty and whitespace-only search queries.
- Unmatched or non-existent search keywords (handling zero results gracefully without crashing).
- Rapid chapter switching and high-frequency state updates.
- Repeated rapid bookmark toggling (checking race conditions and Set deduplication).
- Boundary filter toggling (rapidly switching between `all`, `history`, and `political_science`).
- Extreme text wrapping and long Marathi compound words (Devanagari ligature integrity).
- Storage edge cases (handling empty, uninitialized, or read-only storage states).
- Keyboard accessibility edge cases (rapid Escape key presses, non-alphanumeric input).
- Extreme viewport scaling constraints (mobile 320px vs ultra-wide 3840px layouts).

### Tier 3: Cross-Feature Combinations
Validates pairwise and complex multi-feature interactions:
- Search result selection -> automatically switches chapter -> opens study view -> preserves search query state.
- Subject filter applied -> search modal opened -> chapter selected -> navigate back -> subject filter state maintained.
- Question accordion expanded -> question bookmarked -> chapter switched -> return to chapter -> bookmark persists and accordion state is consistent.
- Prev/Next chapter navigation across subject boundaries (e.g., from History Chapter 6 to Political Science Chapter 1).
- Multi-chapter bookmarking workflow with header counter aggregation and telemetry synchronization.
- Search term matching both a concept and a question -> verifying multi-target navigation integrity.

### Tier 4: Real-World Application Scenarios
Simulates realistic student study sessions from start to finish:
- **Scenario 1**: Chapter 1 (Historiography: Western Tradition) deep dive — reviewing Hegel's dialectics, Leopold von Ranke, Karl Marx, Voltaire, solving all 5 questions, bookmarking dialectics.
- **Scenario 2**: Chapter 2 (Historiography: Indian Tradition) deep dive — studying Bakhar literature, Nationalist historiography, Subaltern history, V.K. Rajwade's methodology.
- **Scenario 3**: Chapter 3 (Applied History) deep dive — public history concepts, UNESCO world heritage sites, tangible vs intangible heritage, Kas Plateau.
- **Scenario 4**: Chapter 4 (History of Indian Arts) deep dive — visual arts, performing arts, Maratha style painting, folk arts.
- **Scenario 5**: Chapter 5 (Mass Media and History) deep dive — printing press, Darpan newspaper, Balshastri Jambhekar, Akashvani radio.
- **Scenario 6**: Chapter 6 (Entertainment Media and History) deep dive — puppet theatre, Dashavatara, Marathi theatre, Raja Harishchandra cinema.
- **Scenario 7**: Political Science Chapter 1 (Working of the Constitution) deep dive — democracy, social justice, RTI 2005, women's empowerment.
- **Scenario 8**: Political Science Chapter 2 (The Electoral Process) deep dive — Election Commission, Article 324, Sukumar Sen, model code of conduct.
- **Scenario 9**: Political Science Chapter 3 (Political Parties) deep dive — national vs regional parties, coalition politics, recognition criteria.
- **Scenario 10**: End-to-End Board Exam Revision Workflow — student searches high-weightage topics using Ctrl+K, studies key concepts across subjects, bookmarks critical questions, and verifies complete study readiness.

---

## 3. Test Runner Specification (`tests/e2e/runner.js`)

The test runner provides a unified execution interface with rich terminal reporting:

### Invocation
```bash
node tests/e2e/runner.js
```

### Key Capabilities
- **Modular Test Suite Discovery**: Sequentially runs Tier 1, Tier 2, Tier 3, and Tier 4 suites.
- **Real-Time Progress & Timing**: Measures exact millisecond duration for each test tier and individual assertions.
- **Detailed Assertion Diagnostics**: Logs pass/fail status, test names, and comprehensive failure traces.
- **Clean Exit Code Contract**: Exits with code `0` if all tests pass; exits with code `1` if any test fails.

---

## 4. Quality Guardrails & Anti-Slop Enforcement
- **Anti-Slop Audit**: Verifies that no em dashes (`—`) are used in running copy, no generic placeholder Latin (`Lorem ipsum`), and all terminology represents authentic Maharashtra State Board Marathi curriculum.
- **Visual Token Audit**: Validates that all container elements strictly adhere to the Zero-Shadow Law (`box-shadow: none`), Trinity color palette variables, and binary geometry.
