// tests/e2e/tier3_combination_tests.test.js
// Tier 3: Cross-Feature Combinations (16 tests covering pairwise and multi-feature interaction flows)

import test from 'node:test'
import assert from 'node:assert/strict'
import {
  setupBrowserEnvironment,
  resetWorkspaceStore,
  executeSearch,
  useWorkspaceStore,
} from './test_helpers.js'
import { chaptersData } from '../../src/data/chaptersData.ts'

setupBrowserEnvironment()

test.beforeEach(() => {
  resetWorkspaceStore()
})

test('Tier 3 - Combo 1: Search result selection opens target chapter and dismisses search modal', () => {
  const store = useWorkspaceStore.getState()
  store.setIsSearchOpen(true)
  assert.equal(useWorkspaceStore.getState().isSearchOpen, true)

  const results = executeSearch('द्वंद्ववाद')
  assert.ok(results.length > 0)
  const targetChapterId = results[0].chapter.id

  // Simulate user selecting the search result
  store.setSelectedChapterId(targetChapterId)
  store.setIsSearchOpen(false)

  const finalState = useWorkspaceStore.getState()
  assert.equal(finalState.selectedChapterId, 'hist-1')
  assert.equal(finalState.viewMode, 'study')
  assert.equal(finalState.isSearchOpen, false)
})

test('Tier 3 - Combo 2: Bookmark toggled in one chapter persists across multiple chapter switches', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('hist-1')
  store.toggleBookmark('hist-1-q-0')
  assert.deepEqual(useWorkspaceStore.getState().bookmarks, ['hist-1-q-0'])

  // Switch to Chapter 2
  store.setSelectedChapterId('hist-2')
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'hist-2')
  assert.deepEqual(useWorkspaceStore.getState().bookmarks, ['hist-1-q-0'])

  // Switch to Chapter 5
  store.setSelectedChapterId('hist-5')
  assert.deepEqual(useWorkspaceStore.getState().bookmarks, ['hist-1-q-0'])

  // Switch back to Chapter 1
  store.setSelectedChapterId('hist-1')
  assert.deepEqual(useWorkspaceStore.getState().bookmarks, ['hist-1-q-0'])
})

test('Tier 3 - Combo 3: Subject filter active state preserved when navigating into chapter and back', () => {
  const store = useWorkspaceStore.getState()
  store.setActiveSubject('political_science')
  assert.equal(useWorkspaceStore.getState().activeSubject, 'political_science')

  // Open Political Science Chapter 2
  store.setSelectedChapterId('pol-2')
  assert.equal(useWorkspaceStore.getState().viewMode, 'study')

  // Back button clicked ("परत जा")
  store.setSelectedChapterId(null)
  assert.equal(useWorkspaceStore.getState().viewMode, 'explore')
  assert.equal(useWorkspaceStore.getState().activeSubject, 'political_science')

  // Ensure filtered list still only contains 3 Political Science chapters
  const filtered = chaptersData.filter(
    (c) => c.subject === useWorkspaceStore.getState().activeSubject
  )
  assert.equal(filtered.length, 3)
})

test('Tier 3 - Combo 4: Search concept match directs reliably to correct chapter', () => {
  const results = executeSearch('Public History')
  assert.ok(results.length > 0)
  assert.equal(results[0].chapter.id, 'hist-3')
  assert.equal(results[0].chapter.titleEnglish, 'Applied History')

  useWorkspaceStore.getState().setSelectedChapterId(results[0].chapter.id)
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'hist-3')
})

test('Tier 3 - Combo 5: Bookmarking in both History and Political Science updates header counter aggregate', () => {
  const store = useWorkspaceStore.getState()
  assert.equal(store.bookmarks.length, 0)

  // Bookmark in History Chapter 1
  store.toggleBookmark('hist-1-q-0')
  // Bookmark in Political Science Chapter 1
  store.toggleBookmark('pol-1-q-0')
  // Bookmark in History Chapter 3
  store.toggleBookmark('hist-3-q-1')

  const bookmarks = useWorkspaceStore.getState().bookmarks
  assert.equal(bookmarks.length, 3)
  assert.ok(bookmarks.includes('hist-1-q-0'))
  assert.ok(bookmarks.includes('pol-1-q-0'))
  assert.ok(bookmarks.includes('hist-3-q-1'))
})

test('Tier 3 - Combo 6: Sequential advance through all 6 History chapters', () => {
  const store = useWorkspaceStore.getState()
  const historyChapters = chaptersData.filter((c) => c.subject === 'history')

  let currentId = historyChapters[0].id
  store.setSelectedChapterId(currentId)

  for (let i = 0; i < historyChapters.length - 1; i++) {
    const nextChapter = historyChapters[i + 1]
    store.setSelectedChapterId(nextChapter.id)
    assert.equal(useWorkspaceStore.getState().selectedChapterId, nextChapter.id)
    assert.equal(useWorkspaceStore.getState().selectedChapterId, `hist-${i + 2}`)
  }
})

test('Tier 3 - Combo 7: Sequential backward navigation through Political Science chapters', () => {
  const store = useWorkspaceStore.getState()
  const polChapters = chaptersData.filter((c) => c.subject === 'political_science')

  // Start at pol-3
  store.setSelectedChapterId(polChapters[2].id)
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'pol-3')

  // Prev to pol-2
  store.setSelectedChapterId(polChapters[1].id)
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'pol-2')

  // Prev to pol-1
  store.setSelectedChapterId(polChapters[0].id)
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'pol-1')
})

test('Tier 3 - Combo 8: Search query change updates filtered results reactively', () => {
  const res1 = executeSearch('कला')
  assert.ok(res1.length > 0)
  const hasArt = res1.some((r) => r.chapter.id === 'hist-4')
  assert.ok(hasArt, 'Search for कला must find Chapter 4 भारतीय कलांचा इतिहास')

  const res2 = executeSearch('दूरदर्शन')
  assert.ok(res2.length > 0)
  const hasMedia = res2.some((r) => r.chapter.id === 'hist-5')
  assert.ok(hasMedia, 'Search for दूरदर्शन must find Chapter 5 प्रसारमाध्यमे आणि इतिहास')
})

test('Tier 3 - Combo 9: History filter strictly excludes all Political Science chapters', () => {
  useWorkspaceStore.getState().setActiveSubject('history')
  const filtered = chaptersData.filter(
    (c) => c.subject === useWorkspaceStore.getState().activeSubject
  )
  assert.equal(filtered.length, 6)
  const hasAnyPol = filtered.some((c) => c.subject === 'political_science')
  assert.equal(hasAnyPol, false, 'History filter must strictly exclude Political Science')
})

test('Tier 3 - Combo 10: Political Science filter strictly excludes all History chapters', () => {
  useWorkspaceStore.getState().setActiveSubject('political_science')
  const filtered = chaptersData.filter(
    (c) => c.subject === useWorkspaceStore.getState().activeSubject
  )
  assert.equal(filtered.length, 3)
  const hasAnyHist = filtered.some((c) => c.subject === 'history')
  assert.equal(hasAnyHist, false, 'Political Science filter must strictly exclude History')
})

test('Tier 3 - Combo 11: Clipboard copy action leaves state and store intact', async () => {
  const ch1 = chaptersData[0]
  const q0 = ch1.swadhay[0]
  const copyContent = `${q0.question}\n\n` + q0.points.map((p) => `• ${p}`).join('\n')

  await globalThis.navigator.clipboard.writeText(copyContent)
  const storedClipboard = await globalThis.navigator.clipboard.readText()

  assert.equal(storedClipboard, copyContent)
  assert.ok(storedClipboard.includes(q0.question))
  assert.equal(useWorkspaceStore.getState().selectedChapterId, null) // store unchanged
})

test('Tier 3 - Combo 12: Multi-filter subject switching retains bookmarks without loss', () => {
  const store = useWorkspaceStore.getState()
  store.toggleBookmark('hist-1-q-0')
  store.toggleBookmark('pol-1-q-0')

  store.setActiveSubject('history')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 2)

  store.setActiveSubject('political_science')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 2)

  store.setActiveSubject('all')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 2)
})

test('Tier 3 - Combo 13: Search for legal act matches Political Science Chapter 1', () => {
  const results = executeSearch('माहितीचा अधिकार')
  assert.ok(results.length > 0)
  const pol1 = results.find((r) => r.chapter.id === 'pol-1')
  assert.ok(pol1, 'Search for माहितीचा अधिकार must return Chapter pol-1')
})

test('Tier 3 - Combo 14: Chapter telemetry aligns with key concepts thematic context', () => {
  const ch3 = chaptersData.find((c) => c.id === 'hist-3')
  assert.ok(ch3)
  const unescoTelemetry = ch3.telemetry.find((t) => t.value === 'UNESCO')
  assert.ok(unescoTelemetry, 'Applied History must reference UNESCO in telemetry')

  const publicHistoryConcept = ch3.keyConcepts.find((c) => c.title.includes('उपयोजित इतिहास'))
  assert.ok(publicHistoryConcept, 'Applied History must define public history concept')
})

test('Tier 3 - Combo 15: De-selecting bookmark updates global counter immediately', () => {
  const store = useWorkspaceStore.getState()
  store.toggleBookmark('hist-4-q-0')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 1)

  store.toggleBookmark('hist-4-q-0')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 0)
})

test('Tier 3 - Combo 16: Complete study loop across gallery, reader, bookmarking, and search', () => {
  const store = useWorkspaceStore.getState()

  // 1. Initial explore view
  assert.equal(store.viewMode, 'explore')

  // 2. Select Chapter 4
  store.setSelectedChapterId('hist-4')
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'hist-4')
  assert.equal(useWorkspaceStore.getState().viewMode, 'study')

  // 3. Bookmark first question
  store.toggleBookmark('hist-4-q-0')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 1)

  // 4. Return to gallery
  store.setSelectedChapterId(null)
  assert.equal(useWorkspaceStore.getState().viewMode, 'explore')

  // 5. Open search and search for Political Science Chapter 2 (निवडणूक)
  store.setIsSearchOpen(true)
  const res = executeSearch('निवडणूक प्रक्रिया')
  assert.ok(res.length > 0)

  // 6. Jump to result
  store.setSelectedChapterId(res[0].chapter.id)
  store.setIsSearchOpen(false)

  // 7. Verify study view and bookmark retained
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'pol-2')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 1)
  assert.ok(useWorkspaceStore.getState().bookmarks.includes('hist-4-q-0'))
})
