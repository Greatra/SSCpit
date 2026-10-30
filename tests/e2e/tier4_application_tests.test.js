// tests/e2e/tier4_application_tests.test.js
// Tier 4: Real-World Application Scenarios (10 end-to-end student study workflows)

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

// ============================================================================
// SCENARIO 1: Chapter 1 Western Historiography Study Workflow
// ============================================================================
test('Tier 4 - Scenario 1: Realistic Student Study Workflow — Chapter 1 (पाश्चात्त्य परंपरा)', () => {
  const store = useWorkspaceStore.getState()

  // 1. Student launches study mode for Chapter 1
  store.setSelectedChapterId('hist-1')
  const ch1 = chaptersData.find((c) => c.id === 'hist-1')
  assert.ok(ch1)
  assert.equal(ch1.titleMarathi, 'इतिहासलेखन : पाश्चात्त्य परंपरा')

  // 2. Student reviews telemetry spec-cells
  const thinkers = ch1.telemetry.find((t) => t.label === 'प्रमुख विचारवंत')
  assert.equal(thinkers.value, '४')

  // 3. Student studies dialectics key concept
  const dialectics = ch1.keyConcepts.find((k) => k.title.includes('द्वंद्ववाद'))
  assert.ok(dialectics)
  assert.ok(dialectics.description.includes('जॉर्ज हेगेल'))
  assert.ok(dialectics.description.includes('Thesis') || dialectics.description.includes('सिद्धान्त'))

  // 4. Student solves and studies all questions
  assert.ok(ch1.swadhay.length >= 2)
  ch1.swadhay.forEach((q) => {
    assert.ok(q.points.length >= 2, `Question ${q.question} must contain detailed points`)
    // Anti-slop check: Marathi points must not contain em dashes (—)
    q.points.forEach((pt) => {
      assert.equal(pt.includes('—'), false, 'Running Marathi copy must not contain em dash')
    })
  })

  // 5. Student bookmarks difficult question on dialectics
  store.toggleBookmark('hist-1-q-0')
  assert.ok(useWorkspaceStore.getState().bookmarks.includes('hist-1-q-0'))
})

// ============================================================================
// SCENARIO 2: Chapter 2 Indian Historiography Study Workflow
// ============================================================================
test('Tier 4 - Scenario 2: Realistic Student Study Workflow — Chapter 2 (भारतीय परंपरा)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('hist-2')
  const ch2 = chaptersData.find((c) => c.id === 'hist-2')
  assert.ok(ch2)

  // 1. Verify Bakhar historical literature
  const bakharQuestion = ch2.swadhay.find((q) => q.question.includes('बखर'))
  assert.ok(bakharQuestion)
  assert.ok(bakharQuestion.points.some((p) => p.includes('छत्रपती शिवाजी महाराज') || p.includes('मराठी')))

  // 2. Verify V.K. Rajwade's methodology in questions and nationalist concept
  const rajwadeQuestion = ch2.swadhay.find((q) => q.question.includes('राजवाडे'))
  assert.ok(rajwadeQuestion, 'Rajwade question must be present in Chapter 2')
  assert.ok(rajwadeQuestion.points.some((p) => p.includes('मराठ्यांच्या इतिहासाची साधने') || p.includes('२२ खंड')))

  const nationalistConcept = ch2.keyConcepts.find((k) => k.title.includes('राष्ट्रवादी'))
  assert.ok(nationalistConcept)
  assert.ok(nationalistConcept.description.includes('राजवाडे'))

  // 3. Verify Subaltern history (वंचितांचा इतिहास)
  const subalternQuestion = ch2.swadhay.find((q) => q.question.includes('वंचित'))
  assert.ok(subalternQuestion)
  assert.ok(subalternQuestion.points.some((p) => p.includes('महात्मा फुले') || p.includes('बाबासाहेब आंबेडकर')))

  // 4. Student bookmarks V.K. Rajwade question
  store.toggleBookmark('hist-2-q-0')
  assert.ok(useWorkspaceStore.getState().bookmarks.includes('hist-2-q-0'))
})

// ============================================================================
// SCENARIO 3: Chapter 3 Applied History Study Workflow
// ============================================================================
test('Tier 4 - Scenario 3: Realistic Student Study Workflow — Chapter 3 (उपयोजित इतिहास)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('hist-3')
  const ch3 = chaptersData.find((c) => c.id === 'hist-3')
  assert.ok(ch3)

  // 1. Public history definition
  const publicHist = ch3.keyConcepts.find((k) => k.title.includes('Public History'))
  assert.ok(publicHist)
  assert.ok(publicHist.description.includes('मानवी कल्याणासाठी'))

  // 2. Tangible & Intangible Heritage
  const tangible = ch3.keyConcepts.find((k) => k.title.includes('मूर्त'))
  const intangible = ch3.keyConcepts.find((k) => k.title.includes('अमूर्त'))
  assert.ok(tangible)
  assert.ok(intangible)
  assert.ok(intangible.description.includes('कुंभमेळा') || intangible.description.includes('परंपरा'))

  // 3. UNESCO Natural Heritage
  const natural = ch3.keyConcepts.find((k) => k.title.includes('नैसर्गिक'))
  assert.ok(natural)
  assert.ok(natural.description.includes('कास पठार'))

  // 4. Student bookmarks UNESCO question
  store.toggleBookmark('hist-3-q-0')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 1)
})

// ============================================================================
// SCENARIO 4: Chapter 4 History of Indian Arts Study Workflow
// ============================================================================
test('Tier 4 - Scenario 4: Realistic Student Study Workflow — Chapter 4 (भारतीय कलांचा इतिहास)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('hist-4')
  const ch4 = chaptersData.find((c) => c.id === 'hist-4')
  assert.ok(ch4)

  // 1. Visual arts & performing arts
  assert.ok(ch4.subtitle.includes('दृक् कला') || ch4.subtitle.includes('ललित कला') || ch4.subtitle.includes('स्थापत्य'))

  // 2. Key concepts
  const marathaArt = ch4.keyConcepts.find((k) => k.title.includes('मराठा') || k.title.includes('चित्रशैली'))
  const templeArch = ch4.keyConcepts.find((k) => k.title.includes('हेमाडपंती') || k.title.includes('स्थापत्य'))
  assert.ok(marathaArt || templeArch)

  // 3. Questions inspection
  assert.ok(ch4.swadhay.length >= 2)
  store.toggleBookmark('hist-4-q-1')
  assert.ok(useWorkspaceStore.getState().bookmarks.includes('hist-4-q-1'))
})

// ============================================================================
// SCENARIO 5: Chapter 5 Mass Media and History Study Workflow
// ============================================================================
test('Tier 4 - Scenario 5: Realistic Student Study Workflow — Chapter 5 (प्रसारमाध्यमे आणि इतिहास)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('hist-5')
  const ch5 = chaptersData.find((c) => c.id === 'hist-5')
  assert.ok(ch5)

  // 1. Darpan newspaper & Balshastri Jambhekar
  const darpan = ch5.keyConcepts.find((k) => k.title.includes('दर्पण') || k.title.includes('वृत्तपत्र'))
  assert.ok(darpan)
  assert.ok(darpan.description.includes('बाळशास्त्री जांभेकर') || darpan.description.includes('१८३२'))

  // 2. Akashvani & Doordarshan
  const akashvani = ch5.keyConcepts.find((k) => k.title.includes('आकाशवाणी') || k.title.includes('रेडिओ') || k.title.includes('दूरदर्शन'))
  assert.ok(akashvani)

  // 3. Question check
  const mediaQ = ch5.swadhay.find((q) => q.question.includes('प्रसार') || q.question.includes('इतिहास'))
  assert.ok(mediaQ)
})

// ============================================================================
// SCENARIO 6: Chapter 6 Entertainment Media Study Workflow
// ============================================================================
test('Tier 4 - Scenario 6: Realistic Student Study Workflow — Chapter 6 (मनोरंजनाची माध्यमे आणि इतिहास)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('hist-6')
  const ch6 = chaptersData.find((c) => c.id === 'hist-6')
  assert.ok(ch6)

  // 1. Traditional theatre (दशावतार / तमाशा / भारूड)
  const tradTheatre = ch6.keyConcepts.find((k) => k.title.includes('दशावतार') || k.title.includes('रंगभूमी'))
  assert.ok(tradTheatre)

  // 2. Indian Cinema (दादासाहेब फाळके / राजा हरिश्चंद्र १९१३)
  const cinema = ch6.keyConcepts.find((k) => k.title.includes('चित्रपट') || k.title.includes('सिनेमा'))
  assert.ok(cinema)
  assert.ok(cinema.description.includes('दादासाहेब फाळके') || cinema.description.includes('राजा हरिश्चंद्र'))
})

// ============================================================================
// SCENARIO 7: Political Science Chapter 1 Study Workflow
// ============================================================================
test('Tier 4 - Scenario 7: Realistic Student Study Workflow — Political Science 1 (संविधानाची वाटचाल)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('pol-1')
  const pol1 = chaptersData.find((c) => c.id === 'pol-1')
  assert.ok(pol1)

  // 1. RTI 2005 & Social Justice
  const rti = pol1.keyConcepts.find((k) => k.title.includes('माहितीचा अधिकार') || k.title.includes('RTI'))
  assert.ok(rti)
  assert.ok(rti.description.includes('२००५') || rti.description.includes('पारदर्शकता'))

  // 2. Women empowerment (५०% आरक्षण)
  const womenRes = pol1.telemetry.find((t) => t.label.includes('महिला') || t.value.includes('५०%'))
  assert.ok(womenRes)
})

// ============================================================================
// SCENARIO 8: Political Science Chapter 2 Study Workflow
// ============================================================================
test('Tier 4 - Scenario 8: Realistic Student Study Workflow — Political Science 2 (निवडणूक प्रक्रिया)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('pol-2')
  const pol2 = chaptersData.find((c) => c.id === 'pol-2')
  assert.ok(pol2)

  // 1. Election Commission (कलम ३२४)
  const ecConcept = pol2.keyConcepts.find((k) => k.title.includes('निवडणूक आयोग') || k.title.includes('स्वायत्त'))
  assert.ok(ecConcept)
  assert.ok(ecConcept.description.includes('३२४') || ecConcept.description.includes('आयुक्त'))

  // 2. Sukumar Sen
  const sukumar = pol2.telemetry.find((t) => t.value.includes('सुकुमार सेन'))
  assert.ok(sukumar)
})

// ============================================================================
// SCENARIO 9: Political Science Chapter 3 Study Workflow
// ============================================================================
test('Tier 4 - Scenario 9: Realistic Student Study Workflow — Political Science 3 (राजकीय पक्ष)', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('pol-3')
  const pol3 = chaptersData.find((c) => c.id === 'pol-3')
  assert.ok(pol3)

  // 1. National vs Regional Parties
  const parties = pol3.keyConcepts.find((k) => k.title.includes('राजकीय पक्ष') || k.title.includes('प्रादेशिक'))
  assert.ok(parties)

  // 2. Coalition Politics (आघाडी सरकारांचे युग)
  const coalition = pol3.keyConcepts.find(
    (k) => k.title.includes('आघाडी') || k.description.includes('आघाडी सरकारांचे')
  )
  assert.ok(coalition)
})

// ============================================================================
// SCENARIO 10: Comprehensive Board Exam Revision & Study Readiness
// ============================================================================
test('Tier 4 - Scenario 10: End-to-End Board Exam Revision & Study Readiness Scenario', async () => {
  const store = useWorkspaceStore.getState()

  // 1. Student searches for key board exam topics using Ctrl+K simulation
  const searchResults = executeSearch('द्वंद्ववाद')
  assert.ok(searchResults.length > 0)
  store.setSelectedChapterId(searchResults[0].chapter.id)

  // 2. Bookmark crucial high-weightage question
  store.toggleBookmark('hist-1-q-0')

  // 3. Switch to Political Science to revise Election Commission
  store.setSelectedChapterId('pol-2')
  store.toggleBookmark('pol-2-q-0')

  // 4. Verify bookmarks aggregated in header
  const bookmarks = useWorkspaceStore.getState().bookmarks
  assert.equal(bookmarks.length, 2)

  // 5. Copy answer points for offline revision
  const pol2Question = chaptersData.find((c) => c.id === 'pol-2').swadhay[0]
  const noteText = `${pol2Question.question}\n` + pol2Question.points.map((p) => `• ${p}`).join('\n')
  await globalThis.navigator.clipboard.writeText(noteText)
  const savedNote = await globalThis.navigator.clipboard.readText()
  assert.equal(savedNote, noteText)

  // 6. Return to gallery and verify all 9 chapters are accessible
  store.setSelectedChapterId(null)
  assert.equal(useWorkspaceStore.getState().viewMode, 'explore')
  assert.equal(chaptersData.length, 9)
})
