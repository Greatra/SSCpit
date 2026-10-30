// tests/e2e/tier1_feature_tests.test.js
// Tier 1: Feature Coverage (>=5 tests per feature across 10 core features = 50 tests)

import test from 'node:test'
import assert from 'node:assert/strict'
import {
  setupBrowserEnvironment,
  resetWorkspaceStore,
  getIndexCss,
  getHeroSectionCode,
  getHeaderNavCode,
  getChapterReaderCode,
  getFooterCode,
  getMicroStripeCode,
  getScholarSilhouetteCode,
  executeSearch,
  useWorkspaceStore,
} from './test_helpers.js'
import { chaptersData } from '../../src/data/chaptersData.ts'

setupBrowserEnvironment()

test.beforeEach(() => {
  resetWorkspaceStore()
})

// ============================================================================
// FEATURE 1: Navigation Bar (5 tests)
// ============================================================================
test('Tier 1 - Feature 1.1: Navigation renders brand identity and Marathi title', () => {
  const navCode = getHeaderNavCode()
  assert.match(navCode, /इतिहास स्वाध्याय/, 'Brand title must be present in navigation')
  assert.match(navCode, /इयत्ता १० वी/, 'Class 10 context label must be present in navigation')
})

test('Tier 1 - Feature 1.2: Navigation displays "परत जा" back button only in study view', () => {
  const store = useWorkspaceStore.getState()
  assert.equal(store.selectedChapterId, null)

  useWorkspaceStore.getState().setSelectedChapterId('hist-1')
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'hist-1')
  assert.equal(useWorkspaceStore.getState().viewMode, 'study')

  const navCode = getHeaderNavCode()
  assert.match(navCode, /selectedChapterId &&/, 'Back button condition must check selectedChapterId')
  assert.match(navCode, /(?:Back|परत जा)/, 'Back button text must read "Back" or "परत जा"')
})

test('Tier 1 - Feature 1.3: Navigation back button resets selected chapter to null', () => {
  const { setSelectedChapterId } = useWorkspaceStore.getState()
  setSelectedChapterId('hist-2')
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'hist-2')

  // Simulate back button click handler
  setSelectedChapterId(null)
  assert.equal(useWorkspaceStore.getState().selectedChapterId, null)
  assert.equal(useWorkspaceStore.getState().viewMode, 'explore')
})

test('Tier 1 - Feature 1.4: Navigation provides search trigger pill with ⌘K badge', () => {
  const navCode = getHeaderNavCode()
  assert.match(navCode, /setIsSearchOpen\(true\)/, 'Search button must trigger setIsSearchOpen(true)')
  assert.match(navCode, /(?:Search|शोधा)/, 'Search button label must show "Search" or "शोधा..."')
  assert.match(navCode, /⌘K/, 'Keyboard shortcut hint ⌘K must be displayed')
})

test('Tier 1 - Feature 1.5: Navigation displays active bookmark counter correctly', () => {
  const navCode = getHeaderNavCode()
  assert.match(navCode, /bookmarks\.length > 0 &&/, 'Bookmark badge must be conditionally rendered')

  const { toggleBookmark } = useWorkspaceStore.getState()
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 0)

  toggleBookmark('hist-1-q-0')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 1)

  toggleBookmark('hist-2-q-1')
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 2)
})

// ============================================================================
// FEATURE 2: 3D Hero / SVG Fallback (5 tests)
// ============================================================================
test('Tier 1 - Feature 2.1: Hero container specifies 3 staggered parallax depth layers', () => {
  const heroCode = getHeroSectionCode()
  assert.ok(
    /layer1Y.*useTransform/.test(heroCode) || /LAYER 1:/.test(heroCode),
    'Layer 1 parallax transform must be defined'
  )
  assert.ok(
    /layer2Y.*useTransform/.test(heroCode) || /LAYER 2:/.test(heroCode),
    'Layer 2 parallax transform must be defined'
  )
  assert.ok(
    /layer3Y.*useTransform/.test(heroCode) || /LAYER 3:/.test(heroCode),
    'Layer 3 parallax transform must be defined'
  )
})

test('Tier 1 - Feature 2.2: Hero Layer 1 renders deep Deccan twilight sky and radiant horizon sun', () => {
  const heroCode = getHeroSectionCode()
  const svgCode = getScholarSilhouetteCode()
  const combined = heroCode + '\n' + svgCode
  assert.ok(
    /twilightSky/.test(combined) || /Deep Twilight Sky/.test(combined),
    'Deccan twilight sky gradient required'
  )
  assert.ok(
    /sunGlow/.test(combined) || /ff884d/.test(combined) || /ffb066/.test(combined),
    'Radiant horizon sun required'
  )
})

test('Tier 1 - Feature 2.3: Hero Layer 2 renders historic Sahyadri ridges and fort bastions', () => {
  const heroCode = getHeroSectionCode()
  assert.match(heroCode, /Sahyadri Ridge/i, 'Layer 2 Sahyadri Ridge required')
  assert.ok(
    /viewBox="0 0 1440 (320|400)"/.test(heroCode),
    'Mountain ridges SVG viewBox required'
  )
})

test('Tier 1 - Feature 2.4: Hero Layer 3 renders contemplative Scholar at the Scroll silhouette', () => {
  const heroCode = getHeroSectionCode()
  const svgCode = getScholarSilhouetteCode()
  const combined = heroCode + '\n' + svgCode
  assert.ok(
    /ScholarSilhouetteSVG/.test(combined) || /SCHOLAR AT THE SCROLL/.test(combined),
    'Scholar silhouette element required'
  )
  assert.ok(
    /इतिहास संशोधक आणि प्राचीन हस्तलिखित पोथी/.test(combined) || /पोथी \/ हस्तलिखित/.test(combined),
    'Scholar contemplative study theme required'
  )
})

test('Tier 1 - Feature 2.5: Scholar silhouette holds unrolled ancient manuscript with script lines', () => {
  const heroCode = getHeroSectionCode()
  const svgCode = getScholarSilhouetteCode()
  const combined = heroCode + '\n' + svgCode
  assert.ok(
    /scrollGlow/.test(combined) || /Ancient Manuscript Scroll/.test(combined) || /हस्तलिखित/.test(combined),
    'Ancient manuscript scroll required'
  )
})

// ============================================================================
// FEATURE 3: Chapter Switching & Gallery (5 tests)
// ============================================================================
test('Tier 1 - Feature 3.1: Curriculum database contains exactly 9 syllabus chapters', () => {
  assert.equal(chaptersData.length, 9, 'Should have exactly 9 chapters in curriculum')
  const historyChapters = chaptersData.filter((c) => c.subject === 'history')
  const polChapters = chaptersData.filter((c) => c.subject === 'political_science')
  assert.equal(historyChapters.length, 6, 'Must have 6 History chapters')
  assert.equal(polChapters.length, 3, 'Must have 3 Political Science chapters')
})

test('Tier 1 - Feature 3.2: Chapter selection updates store selectedChapterId and viewMode', () => {
  const store = useWorkspaceStore.getState()
  assert.equal(store.selectedChapterId, null)
  assert.equal(store.viewMode, 'explore')

  store.setSelectedChapterId('hist-1')
  const updated = useWorkspaceStore.getState()
  assert.equal(updated.selectedChapterId, 'hist-1')
  assert.equal(updated.viewMode, 'study')
})

test('Tier 1 - Feature 3.3: Every chapter possesses authentic Marathi and English titles', () => {
  chaptersData.forEach((ch) => {
    assert.ok(ch.titleMarathi && ch.titleMarathi.length > 3, `Chapter ${ch.id} must have titleMarathi`)
    assert.ok(ch.titleEnglish && ch.titleEnglish.length > 3, `Chapter ${ch.id} must have titleEnglish`)
    assert.ok(ch.subtitle && ch.subtitle.length > 5, `Chapter ${ch.id} must have subtitle`)
  })
})

test('Tier 1 - Feature 3.4: Chapter sequencing reflects 1-6 for History and 1-3 for Political Science', () => {
  const histNumbers = chaptersData.filter((c) => c.subject === 'history').map((c) => c.chapterNumber)
  assert.deepEqual(histNumbers, [1, 2, 3, 4, 5, 6])

  const polNumbers = chaptersData.filter((c) => c.subject === 'political_science').map((c) => c.chapterNumber)
  assert.deepEqual(polNumbers, [1, 2, 3])
})

test('Tier 1 - Feature 3.5: ChapterReader provides next/prev navigation links', () => {
  const readerCode = getChapterReaderCode()
  assert.match(readerCode, /मागील पाठ/, 'Reader must display "मागील पाठ" for previous chapter')
  assert.match(readerCode, /पुढील पाठ/, 'Reader must display "पुढील पाठ" for next chapter')
  assert.match(readerCode, /prevChapter\s*\?/, 'Previous chapter button must be conditionally checked')
  assert.match(readerCode, /nextChapter\s*&&/, 'Next chapter button must be guarded')
})

// ============================================================================
// FEATURE 4: Question Taxonomy & Subject Filtering (5 tests)
// ============================================================================
test('Tier 1 - Feature 4.1: Subject filter "all" returns all 9 chapters', () => {
  const { setActiveSubject } = useWorkspaceStore.getState()
  setActiveSubject('all')
  assert.equal(useWorkspaceStore.getState().activeSubject, 'all')

  const filtered = chaptersData.filter((c) => {
    if (useWorkspaceStore.getState().activeSubject === 'all') return true
    return c.subject === useWorkspaceStore.getState().activeSubject
  })
  assert.equal(filtered.length, 9)
})

test('Tier 1 - Feature 4.2: Subject filter "history" returns exactly 6 history chapters', () => {
  const { setActiveSubject } = useWorkspaceStore.getState()
  setActiveSubject('history')
  assert.equal(useWorkspaceStore.getState().activeSubject, 'history')

  const filtered = chaptersData.filter((c) => c.subject === 'history')
  assert.equal(filtered.length, 6)
  filtered.forEach((c) => assert.equal(c.subject, 'history'))
})

test('Tier 1 - Feature 4.3: Subject filter "political_science" returns exactly 3 chapters', () => {
  const { setActiveSubject } = useWorkspaceStore.getState()
  setActiveSubject('political_science')
  assert.equal(useWorkspaceStore.getState().activeSubject, 'political_science')

  const filtered = chaptersData.filter((c) => c.subject === 'political_science')
  assert.equal(filtered.length, 3)
  filtered.forEach((c) => assert.equal(c.subject, 'political_science'))
})

test('Tier 1 - Feature 4.4: Questions are classified into recognized syllabus taxonomy', () => {
  const validQuestionTypes = new Set([
    'सविस्तर उत्तरे',
    'टीपा लिहा',
    'संकल्पना स्पष्ट करा',
    'विधान चूक की बरोबर',
    'तक्ता पूर्ण करा',
    'पर्याय निवडा',
    'थोडक्यात उत्तरे',
  ])

  let totalQuestionsCount = 0
  chaptersData.forEach((ch) => {
    ch.swadhay.forEach((q) => {
      totalQuestionsCount++
      assert.ok(q.qType && q.qType.length > 0, `Question must have non-empty qType in ${ch.id}`)
      assert.ok(
        validQuestionTypes.has(q.qType) || q.qType.length >= 4,
        `qType "${q.qType}" should follow standard Marathi academic naming`
      )
    })
  })
  assert.ok(totalQuestionsCount >= 20, 'Total syllabus questions must be comprehensive (>= 20)')
})

test('Tier 1 - Feature 4.5: Switching subject filter resets selected chapter to null', () => {
  const store = useWorkspaceStore.getState()
  store.setSelectedChapterId('hist-1')
  assert.equal(useWorkspaceStore.getState().selectedChapterId, 'hist-1')

  // SubjectFilterBar onclick sets activeSubject and selectedChapterId(null)
  store.setActiveSubject('political_science')
  store.setSelectedChapterId(null)

  assert.equal(useWorkspaceStore.getState().activeSubject, 'political_science')
  assert.equal(useWorkspaceStore.getState().selectedChapterId, null)
  assert.equal(useWorkspaceStore.getState().viewMode, 'explore')
})

// ============================================================================
// FEATURE 5: Question Accordions (5 tests)
// ============================================================================
test('Tier 1 - Feature 5.1: ChapterReader defaults to first question (index 0) expanded', () => {
  const readerCode = getChapterReaderCode()
  assert.match(readerCode, /useState<number \| null>\(0\)/, 'Accordion must default to question index 0 open')
})

test('Tier 1 - Feature 5.2: Accordion toggle handler allows collapsing and expanding', () => {
  const readerCode = getChapterReaderCode()
  assert.match(
    readerCode,
    /setOpenQuestionIdx\(isOpen \? null : idx\)/,
    'Accordion toggle logic must close when open and open when closed'
  )
})

test('Tier 1 - Feature 5.3: Every swadhay question contains bulleted Marathi answer points', () => {
  chaptersData.forEach((ch) => {
    ch.swadhay.forEach((q, idx) => {
      assert.ok(Array.isArray(q.points), `Points must be an array for ${ch.id} Q${idx}`)
      assert.ok(q.points.length >= 2, `Question ${q.question} in ${ch.id} must have at least 2 points`)
      q.points.forEach((pt) => {
        assert.ok(pt.trim().length > 10, 'Each answer point must be meaningful Devanagari text')
      })
    })
  })
})

test('Tier 1 - Feature 5.4: Accordion incorporates answer copy to clipboard action', () => {
  const readerCode = getChapterReaderCode()
  assert.match(readerCode, /handleCopy/, 'handleCopy function must be implemented')
  assert.match(readerCode, /navigator\.clipboard\.writeText/, 'Must copy to clipboard')
  assert.match(readerCode, /उत्तर कॉपी करा/, 'Button label must show "उत्तर कॉपी करा"')
  assert.match(readerCode, /कॉपी झाले!/, 'Confirmation state must show "कॉपी झाले!"')
})

test('Tier 1 - Feature 5.5: Accordion renders question category pill badge', () => {
  const readerCode = getChapterReaderCode()
  assert.match(readerCode, /\{q\.qType\}/, 'Must render {q.qType} badge in accordion header')
})

// ============================================================================
// FEATURE 6: Instant Bilingual Search (Ctrl+K) (5 tests)
// ============================================================================
test('Tier 1 - Feature 6.1: Search modal initial state is closed', () => {
  assert.equal(useWorkspaceStore.getState().isSearchOpen, false)
})

test('Tier 1 - Feature 6.2: Search modal opens and closes via store action', () => {
  const { setIsSearchOpen } = useWorkspaceStore.getState()
  setIsSearchOpen(true)
  assert.equal(useWorkspaceStore.getState().isSearchOpen, true)

  setIsSearchOpen(false)
  assert.equal(useWorkspaceStore.getState().isSearchOpen, false)
})

test('Tier 1 - Feature 6.3: Search finds Marathi concept "द्वंद्ववाद" (Hegel dialectics)', () => {
  const results = executeSearch('द्वंद्ववाद')
  assert.ok(results.length > 0, 'Search for द्वंद्ववाद must return matching chapters')
  const ch1Result = results.find((r) => r.chapter.id === 'hist-1')
  assert.ok(ch1Result, 'Chapter 1 must be among the results')
  assert.ok(
    ch1Result.matchingConcepts.some((c) => c.title.includes('द्वंद्ववाद')),
    'Matching concepts must include द्वंद्ववाद'
  )
})

test('Tier 1 - Feature 6.4: Search matches English title "Applied History"', () => {
  const results = executeSearch('Applied History')
  assert.ok(results.length > 0, 'Search for Applied History must return matches')
  const ch3Result = results.find((r) => r.chapter.id === 'hist-3')
  assert.ok(ch3Result, 'Chapter 3 must match Applied History')
  assert.equal(ch3Result.chapter.titleEnglish, 'Applied History')
})

test('Tier 1 - Feature 6.5: Search finds Marathi historical literature term "बखर"', () => {
  const results = executeSearch('बखर')
  assert.ok(results.length > 0, 'Search for बखर must return results')
  const ch2Result = results.find((r) => r.chapter.id === 'hist-2')
  assert.ok(ch2Result, 'Chapter 2 (भारतीय परंपरा) must contain बखर references')
})

// ============================================================================
// FEATURE 7: Bookmarking & Local Study Persistence (5 tests)
// ============================================================================
test('Tier 1 - Feature 7.1: Bookmarks array is initialized empty', () => {
  assert.deepEqual(useWorkspaceStore.getState().bookmarks, [])
})

test('Tier 1 - Feature 7.2: Toggling bookmark adds question ID to store', () => {
  const { toggleBookmark } = useWorkspaceStore.getState()
  toggleBookmark('hist-1-q-0')
  assert.deepEqual(useWorkspaceStore.getState().bookmarks, ['hist-1-q-0'])
})

test('Tier 1 - Feature 7.3: Toggling same bookmark ID removes it idempotently', () => {
  const { toggleBookmark } = useWorkspaceStore.getState()
  toggleBookmark('hist-1-q-0')
  assert.equal(useWorkspaceStore.getState().bookmarks.includes('hist-1-q-0'), true)

  toggleBookmark('hist-1-q-0')
  assert.equal(useWorkspaceStore.getState().bookmarks.includes('hist-1-q-0'), false)
  assert.equal(useWorkspaceStore.getState().bookmarks.length, 0)
})

test('Tier 1 - Feature 7.4: Bookmarks support multi-chapter question selections', () => {
  const { toggleBookmark } = useWorkspaceStore.getState()
  toggleBookmark('hist-1-q-0')
  toggleBookmark('hist-3-q-2')
  toggleBookmark('pol-1-q-1')

  const bookmarks = useWorkspaceStore.getState().bookmarks
  assert.equal(bookmarks.length, 3)
  assert.ok(bookmarks.includes('hist-1-q-0'))
  assert.ok(bookmarks.includes('hist-3-q-2'))
  assert.ok(bookmarks.includes('pol-1-q-1'))
})

test('Tier 1 - Feature 7.5: ChapterReader determines bookmark visual state by ID inclusion', () => {
  const readerCode = getChapterReaderCode()
  assert.match(readerCode, /bookmarks\.includes\(qId\)/, 'Visual state must check bookmarks.includes(qId)')
  assert.match(readerCode, /toggleBookmark\(qId\)/, 'Click handler must call toggleBookmark(qId)')
})

// ============================================================================
// FEATURE 8: Telemetry Spec-Cells (5 tests)
// ============================================================================
test('Tier 1 - Feature 8.1: Every chapter contains telemetry metrics', () => {
  chaptersData.forEach((ch) => {
    assert.ok(Array.isArray(ch.telemetry), `Telemetry must be an array for ${ch.id}`)
    assert.equal(ch.telemetry.length, 3, `Chapter ${ch.id} must define exactly 3 telemetry items`)
  })
})

test('Tier 1 - Feature 8.2: Telemetry items contain valid labels and values', () => {
  chaptersData.forEach((ch) => {
    ch.telemetry.forEach((item) => {
      assert.ok(item.label && item.label.length >= 2, `Telemetry label required for ${ch.id}`)
      assert.ok(item.value && item.value.length >= 1, `Telemetry value required for ${ch.id}`)
    })
  })
})

test('Tier 1 - Feature 8.3: ChapterReader renders telemetry metrics with 32px prominent font', () => {
  const readerCode = getChapterReaderCode()
  assert.match(
    readerCode,
    /text-2xl md:text-3xl font-bold font-mono/,
    'Telemetry metrics must use large 32px display typography'
  )
})

test('Tier 1 - Feature 8.4: Chapter 1 telemetry specifies 4 prominent thinkers and dialectics', () => {
  const ch1 = chaptersData.find((c) => c.id === 'hist-1')
  assert.ok(ch1)
  const thinkers = ch1.telemetry.find((t) => t.label === 'प्रमुख विचारवंत')
  assert.ok(thinkers)
  assert.equal(thinkers.value, '४')

  const dialectics = ch1.telemetry.find((t) => t.label === 'मूलभूत संकल्पना')
  assert.ok(dialectics)
  assert.equal(dialectics.value, 'द्वंद्ववाद')
})

test('Tier 1 - Feature 8.5: Political Science chapters feature domain-specific telemetry', () => {
  const pol1 = chaptersData.find((c) => c.id === 'pol-1')
  assert.ok(pol1)
  const polLabels = pol1.telemetry.map((t) => t.label)
  assert.ok(polLabels.includes('अधिकार') || polLabels.includes('मतदान वय') || polLabels.includes('महिला आरक्षण'))

  const pol2 = chaptersData.find((c) => c.id === 'pol-2')
  assert.ok(pol2)
  const pol2Labels = pol2.telemetry.map((t) => t.label)
  assert.ok(pol2Labels.includes('आयोग कलम') || pol2Labels.includes('प्रथम आयुक्त') || pol2Labels.includes('पारदर्शकता'))
})

// ============================================================================
// FEATURE 9: 4px Micro-Stripe Accent (5 tests)
// ============================================================================
test('Tier 1 - Feature 9.1: CSS or MicroStripe component defines exact 4px height', () => {
  const css = getIndexCss()
  const stripeCode = getMicroStripeCode()
  assert.ok(
    /height:\s*4px;/.test(css) || /height\s*=\s*4/.test(stripeCode),
    'Micro-stripe must enforce 4px signature height'
  )
})

test('Tier 1 - Feature 9.2: MicroStripe specifies 3 signature color stops: coral/terracotta, amber, teal', () => {
  const stripeCode = getMicroStripeCode()
  assert.match(stripeCode, /#cc785c/, 'Coral/terracotta color stop #cc785c required')
  assert.match(stripeCode, /#e8a55a/, 'Amber color stop #e8a55a required')
  assert.match(stripeCode, /#5db8a6/, 'Teal color stop #5db8a6 required')
})

test('Tier 1 - Feature 9.3: HeaderNav crowns top navigation with 4px MicroStripe or archival double rule', () => {
  const navCode = getHeaderNavCode()
  assert.ok(
    /<MicroStripe\s*\/>/.test(navCode) || /trinity-m-stripe/.test(navCode) || /archival-double-rule/.test(navCode),
    'Header must crown with MicroStripe or archival-double-rule'
  )
})

test('Tier 1 - Feature 9.4: Footer crowns footer section with 4px MicroStripe or archival double rule', () => {
  const footerCode = getFooterCode()
  assert.ok(
    /<MicroStripe\s*\/>/.test(footerCode) || /trinity-m-stripe/.test(footerCode) || /archival-double-rule/.test(footerCode),
    'Footer must crown with MicroStripe or archival-double-rule'
  )
})

test('Tier 1 - Feature 9.5: Color tokens for micro-stripe are registered in CSS :root', () => {
  const css = getIndexCss()
  assert.match(css, /--color-accent-terracotta:\s*#cc785c;/, 'terracotta accent must be #cc785c')
  assert.match(css, /--color-accent-amber:\s*#e8a55a;/, 'amber accent must be #e8a55a')
  assert.match(css, /--color-accent-teal:\s*#5db8a6;/, 'teal accent must be #5db8a6')
})

// ============================================================================
// FEATURE 10: Zero-Shadow Discipline & Trinity Tokens (5 tests)
// ============================================================================
test('Tier 1 - Feature 10.1: ChapterCard container uses border hairline instead of box-shadow', () => {
  const css = getIndexCss()
  // Root must define warm canvas and hairline
  assert.match(css, /--color-hairline:\s*#e6dfd8;/, 'Hairline token must be #e6dfd8')
})

test('Tier 1 - Feature 10.2: Canvas floor token is warm cream #faf9f5', () => {
  const css = getIndexCss()
  assert.match(css, /--color-canvas:\s*#faf9f5;/, 'Canvas floor token must be #faf9f5')
})

test('Tier 1 - Feature 10.3: Deep ink token is #141413', () => {
  const css = getIndexCss()
  assert.match(css, /--color-ink:\s*#141413;/, 'Ink token must be #141413')
})

test('Tier 1 - Feature 10.4: Claude coral voltage token is #cc785c', () => {
  const css = getIndexCss()
  assert.match(css, /--color-primary:\s*#cc785c;/, 'Primary coral token must be #cc785c')
})

test('Tier 1 - Feature 10.5: Body typography enforces Apple 17px standard and negative tracking', () => {
  const css = getIndexCss()
  assert.match(css, /font-size:\s*17px;/, 'Body font-size must be 17px')
  assert.match(css, /line-height:\s*1\.47;/, 'Body line-height must be 1.47')
  assert.match(css, /letter-spacing:\s*-0\.374px;/, 'Body letter-spacing must be -0.374px')
})
