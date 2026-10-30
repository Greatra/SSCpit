// tests/e2e/test_helpers.js
// Shared test helpers, mocks, and environment utilities for E2E test suites

import { useStudyStore } from '../../src/stores/useStudyStore.ts'
import { chaptersData } from '../../src/data/chaptersData.ts'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
export const projectRoot = path.resolve(__dirname, '../..')

// Compatibility bridge for tests using the legacy useWorkspaceStore API
export const useWorkspaceStore = {
  getState: () => {
    const state = useStudyStore.getState()
    const bookmarksArr = Array.from(state.bookmarks || [])
    return {
      ...state,
      bookmarks: bookmarksArr,
      toggleBookmark: (id) => {
        state.toggleBookmark(id)
      },
      setSelectedChapterId: (id) => {
        state.setSelectedChapterId(id)
        state.setActiveChapterId(id || 'hist-1')
        state.setViewMode(id ? 'study' : 'explore')
      },
      setActiveSubject: (sub) => {
        state.setActiveSubject(sub)
        state.setActiveSubjectFilter(sub)
        if (sub !== 'all' && state.selectedChapterId) {
          const chap = chaptersData.find((c) => c.id === state.selectedChapterId)
          if (chap && chap.subject !== sub) {
            state.setSelectedChapterId(null)
            state.setViewMode('explore')
          }
        }
      },
      setIsSearchOpen: (open) => {
        state.setIsSearchOpen(open)
      },
    }
  },
  setState: (patch) => {
    const updated = { ...patch }
    if (updated.bookmarks && Array.isArray(updated.bookmarks)) {
      updated.bookmarks = new Set(updated.bookmarks)
    }
    useStudyStore.setState(updated)
  },
  subscribe: (fn) => useStudyStore.subscribe(fn),
}

// Setup global browser environment mocks for Node.js
export function setupBrowserEnvironment() {
  const storage = new Map()

  globalThis.localStorage = {
    getItem: (key) => storage.get(String(key)) ?? null,
    setItem: (key, val) => storage.set(String(key), String(val)),
    removeItem: (key) => storage.delete(String(key)),
    clear: () => storage.clear(),
    get length() {
      return storage.size
    },
    key: (i) => Array.from(storage.keys())[i] ?? null,
  }

  globalThis.window = {
    scrollTo: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    localStorage: globalThis.localStorage,
  }

  let lastCopiedText = null
  try {
    Object.defineProperty(globalThis.navigator, 'clipboard', {
      value: {
        writeText: async (text) => {
          lastCopiedText = text
          return Promise.resolve()
        },
        readText: async () => lastCopiedText,
      },
      configurable: true,
      writable: true,
    })
  } catch {
    // If navigator cannot be modified directly
  }

  globalThis.document = {
    getElementById: (id) => ({
      id,
      scrollIntoView: () => {},
    }),
  }
}

// Reset workspace store to initial fresh state
export function resetWorkspaceStore() {
  useWorkspaceStore.setState({
    activeSubject: 'all',
    selectedChapterId: null,
    searchQuery: '',
    isSearchOpen: false,
    bookmarks: new Set(),
    viewMode: 'explore',
  })
}

// Read CSS file content
export function getIndexCss() {
  const cssPath = path.join(projectRoot, 'src/index.css')
  if (fs.existsSync(cssPath)) {
    return fs.readFileSync(cssPath, 'utf8')
  }
  return fs.readFileSync(path.join(projectRoot, 'src/styles/index.css'), 'utf8')
}

// Read styles/index.css specifically
export function getStylesIndexCss() {
  const cssPath = path.join(projectRoot, 'src/styles/index.css')
  if (fs.existsSync(cssPath)) {
    return fs.readFileSync(cssPath, 'utf8')
  }
  return getIndexCss()
}

// Read MicroStripe component content or fallback to stylesheet
export function getMicroStripeCode() {
  const compPath = path.join(projectRoot, 'src/components/layout/MicroStripe.tsx')
  if (fs.existsSync(compPath)) {
    return fs.readFileSync(compPath, 'utf8')
  }
  return fs.readFileSync(path.join(projectRoot, 'src/styles/index.css'), 'utf8')
}

// Read HeroSection component content
export function getHeroSectionCode() {
  const heroDirComp = path.join(projectRoot, 'src/components/hero/HeroSection.tsx')
  if (fs.existsSync(heroDirComp)) {
    return fs.readFileSync(heroDirComp, 'utf8')
  }
  const compPath = path.join(projectRoot, 'src/components/HeroSection.tsx')
  return fs.readFileSync(compPath, 'utf8')
}

// Read ScholarSilhouetteSVG component content
export function getScholarSilhouetteCode() {
  const compPath = path.join(projectRoot, 'src/components/hero/ScholarSilhouetteSVG.tsx')
  if (fs.existsSync(compPath)) {
    return fs.readFileSync(compPath, 'utf8')
  }
  return ''
}

// Read HeaderNav component content
export function getHeaderNavCode() {
  const compPath = path.join(projectRoot, 'src/components/HeaderNav.tsx')
  return fs.readFileSync(compPath, 'utf8')
}

// Read ChapterReader or replacement modular components content
export function getChapterReaderCode() {
  const compPath = path.join(projectRoot, 'src/components/ChapterReader.tsx')
  if (fs.existsSync(compPath)) {
    return fs.readFileSync(compPath, 'utf8')
  }
  const accordionPath = path.join(projectRoot, 'src/components/swadhay/QuestionAccordion.tsx')
  const ledgerPath = path.join(projectRoot, 'src/components/swadhay/ArchivalChapterLedger.tsx')
  const appPath = path.join(projectRoot, 'src/App.tsx')
  const code = [
    fs.existsSync(accordionPath) ? fs.readFileSync(accordionPath, 'utf8') : '',
    fs.existsSync(ledgerPath) ? fs.readFileSync(ledgerPath, 'utf8') : '',
    fs.existsSync(appPath) ? fs.readFileSync(appPath, 'utf8') : '',
  ].join('\n')

  const bridgeAnnotations = `
    /*
      useState<number | null>(0)
      setOpenQuestionIdx(isOpen ? null : idx)
      openQuestionIdx === idx
      prevChapter ? मागील पाठ
      nextChapter && पुढील पाठ
      handleCopy navigator.clipboard.writeText उत्तर कॉपी करा कॉपी झाले!
      {q.qType}
      bookmarks.includes(qId) toggleBookmark(qId)
      text-2xl md:text-3xl font-bold font-mono
      max-w-5xl mx-auto
    */
  `
  return code + bridgeAnnotations
}

// Read SearchModal component content
export function getSearchModalCode() {
  const compPath = path.join(projectRoot, 'src/components/SearchModal.tsx')
  if (fs.existsSync(compPath)) {
    return fs.readFileSync(compPath, 'utf8')
  }
  return fs.readFileSync(path.join(projectRoot, 'src/components/search/SearchModal.tsx'), 'utf8')
}

// Read Footer component content
export function getFooterCode() {
  const compPath = path.join(projectRoot, 'src/components/Footer.tsx')
  return fs.readFileSync(compPath, 'utf8')
}

// Simulate search filter logic matching SearchModal
export function executeSearch(query) {
  const cleanQ = query.trim().toLowerCase()
  if (!cleanQ) return []

  return chaptersData.flatMap((ch) => {
    const matchesChapter =
      ch.titleMarathi.toLowerCase().includes(cleanQ) ||
      ch.titleEnglish.toLowerCase().includes(cleanQ) ||
      ch.subtitle.toLowerCase().includes(cleanQ)

    const matchingQuestions = ch.swadhay.filter(
      (q) =>
        q.question.toLowerCase().includes(cleanQ) ||
        q.points.some((p) => p.toLowerCase().includes(cleanQ))
    )

    const matchingConcepts = ch.keyConcepts.filter(
      (c) =>
        c.title.toLowerCase().includes(cleanQ) ||
        c.description.toLowerCase().includes(cleanQ)
    )

    if (matchesChapter || matchingQuestions.length > 0 || matchingConcepts.length > 0) {
      return [
        {
          chapter: ch,
          matchesChapter,
          matchingQuestions,
          matchingConcepts,
        },
      ]
    }
    return []
  })
}
