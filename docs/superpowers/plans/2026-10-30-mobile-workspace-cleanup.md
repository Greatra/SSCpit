# Mobile Workspace Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the mobile header clipping, remove Neuro Lab from the application, remove lesson board-marks/study-time metrics, and add tasteful creator provenance.

**Architecture:** Keep the existing responsive flex header, with fixed brand/actions and a shrinkable scrollable center navigation. Reduce `ViewTab` to the remaining Chapters and Board Papers views, remove the Neuro Lab render path and navigation, simplify the first lesson ledger column without changing lesson data, and place the creator credit in the existing footer.

**Tech Stack:** React 19, TypeScript, Zustand, Tailwind CSS v4, Vite, Node test runner, oxlint.

**Spec:** `docs/superpowers/specs/2026-10-30-mobile-cleanup-design.md`

## Global Constraints

- Keep the mobile header compact and usable within the viewport.
- Remove Neuro Lab from navigation, view state, and rendering paths.
- Remove only the board-marks and study-duration metrics from every lesson.
- Preserve question structure, key figures, timeline, and progress information.
- Add the exact provenance text: “Created by Greatra / Shriram Shinde”.
- Do not add a fake GitHub link.
- Do not change lesson data, question marks, board-paper marks, or study logic.

## Review Focus

- A narrow phone viewport must not show clipped or unreachable header tabs; test the fixed brand/actions plus scrollable center row in `HeaderNav`.
- A persisted or stale `neuro_lab` value must not remain a valid view; test the reduced `ViewTab` union and absence of the App render branch.
- Lesson data may still contain telemetry fields for compatibility; test that the ledger no longer renders either unwanted metric.
- The footer credit must remain readable at mobile width and use the intended editorial typography; test exact copy and responsive class presence.
- Existing Chapters and Board Papers navigation must remain available after Neuro Lab removal; test both tabs and their App branches.

---

### Task 1: Lock regression coverage for the requested removals

**Files:**
- Modify: `tests/e2e/tier2_boundary_tests.test.js`
- Modify: `tests/board_papers_cockpit.test.mjs`
- Modify: `tests/stress/board_integration_shadow_stress.test.mjs`
- Test: existing repository tests above

**Interfaces:**
- Consumes: current source-string test helpers and existing component/store assertions.
- Produces: failing regression assertions that define the new navigation, ledger, and attribution contract.

- [ ] **Step 1: Write the failing tests**

  Add assertions that:
  - `HeaderNav.tsx` contains no Neuro Lab label or `neuro_lab` tab.
  - `App.tsx` contains no `NeuroLabCockpit` import or `activeViewTab === 'neuro_lab'` branch.
  - `useStudyStore.ts` defines `ViewTab` as only `'chapters' | 'board_papers'`.
  - `ArchivalChapterLedger.tsx` contains neither the board-marks label/value rendering nor the study-duration label/value rendering.
  - `Footer.tsx` contains `Created by Greatra / Shriram Shinde` and an editorial font class.
  - Existing Chapters and Board Papers assertions remain valid.

- [ ] **Step 2: Run the focused tests to verify they fail for the expected reason**

  Run:

  ```powershell
  node --test tests/e2e/tier2_boundary_tests.test.js tests/board_papers_cockpit.test.mjs tests/stress/board_integration_shadow_stress.test.mjs
  ```

  Expected: failures identify the still-present Neuro Lab surface, ledger metrics, and missing creator credit; do not modify production code to hide a test setup error.

- [ ] **Step 3: Commit the red tests**

  ```powershell
  git add tests/e2e/tier2_boundary_tests.test.js tests/board_papers_cockpit.test.mjs tests/stress/board_integration_shadow_stress.test.mjs
  git commit -m "test: define mobile workspace cleanup behavior"
  ```

### Task 2: Remove Neuro Lab from live navigation, state, and rendering

**Files:**
- Modify: `src/components/HeaderNav.tsx`
- Modify: `src/App.tsx`
- Modify: `src/stores/useStudyStore.ts`
- Delete only orphaned Neuro Lab files after reference search: `src/components/neuroscience/**` and related Neuro Lab-only utilities/data.
- Modify: tests updated in Task 1 as needed for the final source shape.

**Interfaces:**
- Consumes: `ViewTab`, `activeViewTab`, `setActiveViewTab`, Chapters view, and Board Papers view.
- Produces: a two-view application contract with no reachable Neuro Lab state or UI.

- [ ] **Step 1: Remove the Neuro Lab tab from `HeaderNav`**

  Remove the Brain icon import and Neuro Lab button. Preserve Chapters, Board Papers, search, bookmarks, and the existing compact mobile flex behavior.

- [ ] **Step 2: Remove the Neuro Lab branch from `App.tsx`**

  Remove the `NeuroLabCockpit` import and render branch. Keep Board Papers as the first conditional branch and Chapters as the fallback.

- [ ] **Step 3: Narrow the store view types**

  Change `ViewTab` to `'chapters' | 'board_papers'`; remove only Neuro Lab-specific view/tab state and actions that become unused, while preserving unrelated study, bookmark, board-paper, and chapter state.

- [ ] **Step 4: Remove orphaned Neuro Lab implementation files**

  Search all `src` and test imports first. Delete only files that are exclusively part of the removed Neuro Lab feature; do not delete shared curriculum, question, or board-paper utilities.

- [ ] **Step 5: Run the focused regression tests**

  Run:

  ```powershell
  node --test tests/e2e/tier2_boundary_tests.test.js tests/board_papers_cockpit.test.mjs tests/stress/board_integration_shadow_stress.test.mjs
  ```

  Expected: all updated navigation/removal assertions pass.

### Task 3: Remove the two unwanted lesson metrics

**Files:**
- Modify: `src/components/swadhay/ArchivalChapterLedger.tsx`
- Modify: `tests/e2e/tier2_boundary_tests.test.js`

**Interfaces:**
- Consumes: existing `Chapter` data and the remaining ledger metrics.
- Produces: a lesson ledger that retains question distribution, thinkers/timeline, and progress while omitting board marks and study duration.

- [ ] **Step 1: Remove the first ledger metrics block**

  Remove the JSX that displays `chapter.telemetry.boardWeightageMarks`, the Marathi board-weightage label, the marks label, the explanatory paragraph, and `chapter.telemetry.recommendedStudyMinutes` with its study-duration label. Keep the remaining three ledger sections and their responsive grid.

- [ ] **Step 2: Run the ledger regression test**

  Run:

  ```powershell
  node --test tests/e2e/tier2_boundary_tests.test.js
  ```

  Expected: the unwanted labels/fields are absent while the remaining ledger structure assertions pass.

### Task 4: Add creator provenance without fake links

**Files:**
- Modify: `src/components/Footer.tsx`
- Modify: `tests/e2e/tier2_boundary_tests.test.js`

**Interfaces:**
- Consumes: existing footer bottom-bar layout and typography utilities.
- Produces: visible, non-promotional creator attribution with exact copy and no URL.

- [ ] **Step 1: Add the attribution line**

  Add `Created by Greatra / Shriram Shinde` to the footer bottom bar using the existing editorial/serif font utility and a restrained muted/accent color treatment. Do not wrap it in an anchor until a real repository URL exists.

- [ ] **Step 2: Run the attribution regression test**

  Run:

  ```powershell
  node --test tests/e2e/tier2_boundary_tests.test.js
  ```

  Expected: exact copy and typography assertions pass.

### Task 5: Validate the complete change

**Files:**
- No new source files.

**Interfaces:**
- Consumes: completed Tasks 1–4.
- Produces: verified build, lint, focused tests, and a clean diff limited to the approved scope.

- [ ] **Step 1: Run TypeScript and production build**

  ```powershell
  npm run build
  ```

  Expected: TypeScript and Vite build complete successfully.

- [ ] **Step 2: Run lint**

  ```powershell
  npm run lint
  ```

  Expected: exit code 0; report pre-existing warnings separately if present.

- [ ] **Step 3: Run the project test command**

  ```powershell
  npm test
  ```

  Expected: all available suites pass, or any unrelated pre-existing blocker is reported with its exact error.

- [ ] **Step 4: Inspect the final diff**

  ```powershell
  git --no-pager diff --stat
  git --no-pager diff -- src/components/HeaderNav.tsx src/App.tsx src/stores/useStudyStore.ts src/components/swadhay/ArchivalChapterLedger.tsx src/components/Footer.tsx
  ```

  Confirm no unrelated source or data changes were introduced.
