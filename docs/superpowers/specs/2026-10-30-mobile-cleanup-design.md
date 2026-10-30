# Mobile Workspace Cleanup & Creator Attribution

## Intent

Make the phone layout feel deliberate and unclipped, remove the Neuro Lab
surface completely, simplify every lesson ledger, and credit the creator
without making the free project feel like a product advertisement.

## Goals

- Keep the mobile header compact and usable within the viewport.
- Remove Neuro Lab from navigation, view state, and rendering paths.
- Remove only the board-marks and study-duration metrics from every lesson.
- Preserve question structure, key figures, timeline, and progress information.
- Add a polished footer provenance line: “Created by Greatra / Shriram Shinde”.
- Use the existing editorial/serif visual language; do not add a fake link.

## Non-goals

- No redesign of the desktop header.
- No changes to lesson data, question marks, board-paper marks, or study logic.
- No new account, About page, or GitHub integration.

## Approach

Use the existing responsive flex layout in `HeaderNav`:
brand and actions remain fixed, while the central navigation remains
shrinkable and horizontally scrollable on narrow screens. Remove the
`neuro_lab` tab and its application/store routing so stale state cannot reopen
the feature. In `ArchivalChapterLedger`, remove only the first metrics block
for board weightage and recommended study minutes while keeping the remaining
ledger columns intact. Add creator provenance to the footer with a restrained
editorial font treatment.

## Validation

- Add focused regression assertions for the removed Neuro Lab surface and
  lesson metrics.
- Run the project build and lint checks.
- Run the relevant existing tests and report any pre-existing blockers.
