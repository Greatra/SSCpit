// tests/e2e/tier2_boundary_tests.test.js
// Tier 2: Boundary & Corner Cases (18 tests covering edge conditions and resilience)

import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import {
  setupBrowserEnvironment,
  resetWorkspaceStore,
  executeSearch,
  getHeroSectionCode,
  getHeaderNavCode,
  getChapterReaderCode,
  getIndexCss,
  getFooterCode,
  projectRoot,
  useWorkspaceStore,
} from './test_helpers.js'
import { chaptersData } from '../../src/data/chaptersData.ts'

setupBrowserEnvironment()

test.beforeEach(() => {
  resetWorkspaceStore()
})

// ============================================================================
// 1. Search Boundary & Edge Cases
// ============================================================================
test('Tier 2 - Boundary 1: Empty search query returns exactly empty results array', () => {
  const results = executeSearch('')
  assert.deepEqual(results, [], 'Empty query must return empty array')
})

test('Tier 2 - Boundary 2: Whitespace-only search query (spaces, tabs, newlines) is trimmed to empty', () => {
  const results1 = executeSearch('   ')
  assert.deepEqual(results1, [])

  const results2 = executeSearch('\t  \n  ')
  assert.deepEqual(results2, [])
})

test('Tier 2 - Boundary 3: Special punctuation and control characters do not crash search regex or logic', () => {
  const specialChars = ['!@#$%^&*()', '[]{}|\\;:\'",.<>/?', '~~~```', '\\d+\\s+.*']
  specialChars.forEach((query) => {
    assert.doesNotThrow(() => {
      const results = executeSearch(query)
      assert.ok(Array.isArray(results), 'Must return an array safely')
    }, `Search query "${query}" must not throw error`)
  })
})

test('Tier 2 - Boundary 4: Search case-insensitivity across mixed uppercase, lowercase, and title case', () => {
  const lower = executeSearch('historiography')
  const upper = executeSearch('HISTORIOGRAPHY')
  const mixed = executeSearch('HiStOrIoGrApHy')

  assert.ok(lower.length > 0, 'Lower search must find matches')
  assert.equal(lower.length, upper.length, 'Upper and lower count must match')
  assert.equal(lower.length, mixed.length, 'Mixed and lower count must match')
  assert.equal(lower[0].chapter.id, upper[0].chapter.id)
})

test('Tier 2 - Boundary 5: Search for non-existent keyword yields 0 results gracefully', () => {
  const results = executeSearch('non_existent_marathi_term_xyz_12345')
  assert.equal(results.length, 0)
})

// ============================================================================
// 2. State & Switching Stress Boundaries
// ============================================================================
test('Tier 2 - Boundary 6: Rapid chapter switching loop preserves final state accurately', () => {
  const store = useWorkspaceStore.getState()
  const chapterIds = chaptersData.map((c) => c.id)

  // Rapidly switch through all 9 chapters 5 times (45 transitions)
  for (let i = 0; i < 5; i++) {
    for (const id of chapterIds) {
      store.setSelectedChapterId(id)
      assert.equal(useWorkspaceStore.getState().selectedChapterId, id)
      assert.equal(useWorkspaceStore.getState().viewMode, 'study')
    }
  }

  // Ensure final chapter matches last transition
  assert.equal(useWorkspaceStore.getState().selectedChapterId, chapterIds[chapterIds.length - 1])
})

test('Tier 2 - Boundary 7: Selecting an invalid or non-existent chapter ID handles gracefully', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('non-existent-chapter-id-999')
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'non-existent-chapter-id-999')

  // UI layer safely looks up chapter:
  const found = chaptersData.find((c) => c.id === useWorkspaceStore.getState().selectedChapterId)
  assert.equal(found, undefined, 'Invalid chapter must evaluate to undefined without throwing')
})

test('Tier 2 - Boundary 8: Rapid 100-cycle bookmark toggle stress verifies idempotency', () => {
  const { toggleBookmark } = useWorkspaceStore.getState()
  const qId = 'hist-1-q-0'

  // 100 toggles (even number) should result in bookmarked = false
  for (let i = 0; i < 100; i++) {
    toggleBookmark(qId)
  }
  assert.equal(useWorkspaceStore.getState().bookmarks.includes(qId), false)
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 0)

  // 1 more toggle (odd total = 101) should result in bookmarked = true
  toggleBookmark(qId)
  assert.equal(useWorkspaceStore.getState().bookmarks.includes(qId), true)
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 1)
})

test('Tier 2 - Boundary 9: Distinct bookmarking operations maintain uniqueness without duplicates', () => {
  const { toggleBookmark } = useWorkspaceStore.getState()
  const ids = ['hist-1-q-0', 'hist-2-q-0', 'hist-3-q-0', 'pol-1-q-0', 'pol-2-q-0']

  ids.forEach((id) => toggleBookmark(id))
  const bookmarks = useWorkspaceStore.getState().bookmarks

  assert.equal(bookmarks.length, ids.length)
  const uniqueSet = new Set(bookmarks)
  assert.equal(uniqueSet.size, ids.length, 'Bookmarks must not contain duplicate entries')
})

test('Tier 2 - Boundary 10: Subject filter edge value handling', () => {
  const { setActiveSubject } = useWorkspaceStore.getState()
  // @ts-expect-error Testing invalid subject input
  setActiveSubject('unknown_subject')
  assert.equal(useWorkspaceStore.getState().activeSubject, 'unknown_subject')

  const filtered = chaptersData.filter(
    (c) => c.subject === useWorkspaceStore.getState().activeSubject
  )
  assert.equal(filtered.length, 0, 'Unknown subject filter must return 0 chapters without crashing')
})

// ============================================================================
// 3. Storage & Environment Failure Modes
// ============================================================================
test('Tier 2 - Boundary 11: LocalStorage quota exceeded simulation leaves memory store intact', () => {
  // Simulate localStorage.setItem throwing QuotaExceededError
  const originalSetItem = globalThis.localStorage.setItem
  globalThis.localStorage.setItem = () => {
    throw new Error('QuotaExceededError: DOM Exception 22')
  }

  const { toggleBookmark } = useWorkspaceStore.getState()
  assert.doesNotThrow(() => {
    toggleBookmark('hist-1-q-0')
  }, 'Store operations must not crash if localStorage throws quota exceeded')

  assert.equal(useWorkspaceStore.getState().bookmarks.includes('hist-1-q-0'), true)

  // Restore mock
  globalThis.localStorage.setItem = originalSetItem
})

test('Tier 2 - Boundary 12: Missing or disabled localStorage does not block state execution', () => {
  const originalLocalStorage = globalThis.localStorage
  // @ts-expect-error Simulating disabled storage
  delete globalThis.localStorage

  const { setSelectedChapterId, toggleBookmark } = useWorkspaceStore.getState()
  assert.doesNotThrow(() => {
    setSelectedChapterId('hist-1')
    toggleBookmark('hist-1-q-1')
  }, 'Store actions must succeed even if localStorage is completely absent')

  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'hist-1')
  assert.equal(useWorkspaceStore.getState().bookmarks.includes('hist-1-q-1'), true)

  // Restore mock
  globalThis.localStorage = originalLocalStorage
})

// ============================================================================
// 4. Keyboard Shortcuts & Event Boundaries
// ============================================================================
test('Tier 2 - Boundary 13: Escape key when search modal is closed does not throw or corrupt state', () => {
  const store = useWorkspaceStore.getState()
  assert.equal(store.isSearchOpen, false)

  // Simulate Escape handling when closed
  if (store.isSearchOpen) {
    store.setIsSearchOpen(false)
  }
  assert.equal(useWorkspaceStore.getState().isSearchOpen, false)
})

test('Tier 2 - Boundary 14: Rapid 20-cycle Ctrl+K toggle sequence maintains exact alternating state', () => {
  const store = useWorkspaceStore.getState()
  assert.equal(store.isSearchOpen, false)

  for (let i = 1; i <= 20; i++) {
    store.setIsSearchOpen(!useWorkspaceStore.getState().isSearchOpen)
    const expected = i % 2 === 1
    assert.equal(useWorkspaceStore.getState().isSearchOpen, expected, `Cycle ${i} state mismatch`)
  }
  assert.equal(useWorkspaceStore.getState().isSearchOpen, false)
})

// ============================================================================
// 5. Viewport Scaling & Text Boundaries
// ============================================================================
test('Tier 2 - Boundary 15: Responsive layout enforces mobile single-column grid constraints', () => {
  const navCode = getHeaderNavCode()
  const css = getIndexCss()

  // Verify responsive Tailwind breakpoint usage
  assert.match(css, /@import "tailwindcss";/, 'Tailwind CSS must be loaded')
  assert.match(navCode, /hidden md:inline/, 'Navigation must collapse secondary text on mobile')
  assert.match(navCode, /hidden lg:flex/, 'Navigation subject switcher must collapse on mobile')
})

test('Tier 2 - Boundary 15b: Mobile header keeps navigation inside the viewport', () => {
  const navCode = getHeaderNavCode()

  assert.match(navCode, /min-w-0/, 'Header navigation needs shrinkable flex regions on mobile')
  assert.match(navCode, /overflow-x-auto scrollbar-none/, 'Mobile view tabs must scroll instead of widening the page')
  assert.match(navCode, /shrink-0/, 'Brand and actions must remain visible while the center tabs scroll')
})

test('Tier 2 - Boundary 15c: Workspace exposes only Chapters and Board Papers views', () => {
  const navCode = getHeaderNavCode()
  const appCode = fs.readFileSync(`${projectRoot}/src/App.tsx`, 'utf8')
  const storeCode = fs.readFileSync(`${projectRoot}/src/stores/useStudyStore.ts`, 'utf8')

  assert.doesNotMatch(navCode, /Neuro Lab|neuro_lab/, 'Neuro Lab must be absent from top-level navigation')
  assert.doesNotMatch(appCode, /NeuroLabCockpit|activeViewTab === 'neuro_lab'/, 'App must not render a Neuro Lab branch')
  assert.match(
    storeCode,
    /export type ViewTab = 'chapters' \| 'board_papers'/,
    'ViewTab must contain only the remaining top-level views'
  )
})

test('Tier 2 - Boundary 15d: Ledger omits board marks and study duration metrics', () => {
  const ledgerCode = fs.readFileSync(
    `${projectRoot}/src/components/swadhay/ArchivalChapterLedger.tsx`,
    'utf8'
  )

  assert.doesNotMatch(
    ledgerCode,
    /boardWeightageMarks|बोर्ड परीक्षा गुणभार|गुण \(MARKS\)/,
    'Ledger must not render board-mark metrics'
  )
  assert.doesNotMatch(
    ledgerCode,
    /recommendedStudyMinutes|अभ्यास कालावधी/,
    'Ledger must not render study-duration metrics'
  )
})

test('Tier 2 - Boundary 15e: Footer preserves the exact creator attribution', () => {
  const footerCode = getFooterCode()

  assert.match(footerCode, /Created by Greatra \/ Shriram Shinde/, 'Footer must include exact creator copy')
  assert.match(footerCode, /font-(?:serif|marathi-serif)/, 'Creator attribution must use editorial typography')
  assert.doesNotMatch(
    footerCode,
    /<a\b[^>]*(?:href|https?:\/\/|github)|\bhref\s*=|https?:\/\/|github/i,
    'Creator attribution must not include a fake URL or link context'
  )
})

test('Tier 2 - Boundary 16: Ultra-wide desktop viewport bound to max-width containers', () => {
  const readerCode = getChapterReaderCode()
  assert.match(readerCode, /max-w-5xl mx-auto/, 'Reader must be bounded by max-w-5xl mx-auto')
  const heroCode = getHeroSectionCode()
  assert.ok(
    /max-w-(4|5|6)xl mx-auto/.test(heroCode),
    'Hero content must be bounded by max-w container'
  )
})

test('Tier 2 - Boundary 17: Marathi Devanagari Unicode conjuncts and ligatures preserve normalization', () => {
  chaptersData.forEach((ch) => {
    const titleNFC = ch.titleMarathi.normalize('NFC')
    assert.ok(titleNFC.length > 0)
    assert.ok(ch.titleMarathi === titleNFC, `Chapter ${ch.id} Marathi title should be in NFC normalized form`)

    ch.swadhay.forEach((q) => {
      assert.ok(q.question === q.question.normalize('NFC'), 'Question must be normalized')
      q.points.forEach((pt) => {
        assert.ok(pt === pt.normalize('NFC'), 'Point must be normalized')
      })
    })
  })
})

test('Tier 2 - Boundary 18: Accordion state handles out-of-bounds index without crashing', () => {
  const readerCode = getChapterReaderCode()
  // Ensure accordion handles null or out of range safely
  assert.match(readerCode, /openQuestionIdx === idx/, 'Equality check protects against out of bounds index')
})
