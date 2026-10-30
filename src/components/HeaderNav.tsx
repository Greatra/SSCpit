import React from 'react'
import { motion } from 'motion/react'
import { Search, Bookmark, ArrowLeft, BookOpen, FileText } from 'lucide-react'
import { useStudyStore } from '../stores/useStudyStore'
import { ShivmudraEmblem } from './brand/ShivmudraEmblem'

export const HeaderNav: React.FC = () => {
  const {
    activeViewTab,
    setActiveViewTab,
    activeSubject,
    setActiveSubject,
    selectedChapterId,
    setSelectedChapterId,
    setIsSearchOpen,
    bookmarks,
    activeSubjectFilter,
  } = useStudyStore()
  const currentSubject = activeSubjectFilter || activeSubject

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070709]/95 backdrop-blur-md">
      {/* Archival Double Hairline Rule (Royal Gold & Saffron) */}
      <div className="archival-double-rule" />

      <nav className="border-b border-[rgba(255,255,255,0.08)] text-[#FDFCFB] h-16 px-4 md:px-12 flex items-center justify-between min-w-0 overflow-hidden">
        {/* Left Brand Identity */}
        <div className="flex items-center gap-4 min-w-0 shrink-0">
          {selectedChapterId && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={() => setSelectedChapterId(null)}
              title="परत जा"
              aria-label="परत जा (Back to Index)"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D95D39] hover:text-[#FDFCFB] cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Index</span>
              <span className="sr-only">परत जा</span>
            </motion.button>
          )}

          <div
            onClick={() => setSelectedChapterId(null)}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <ShivmudraEmblem size={32} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-medium text-base tracking-normal text-[#FDFCFB]">
                  Itihas Swadhay
                </span>
                <span className="hidden md:inline px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#161622] text-[#C5A059] border border-[#C5A059]/25">
                  Class 10
                </span>
                <span className="sr-only">इतिहास स्वाध्याय इयत्ता १० वी</span>
              </div>
              <span className="text-[11px] text-[#8E887F] font-marathi-serif hidden sm:block">
                इतिहास व राज्यशास्त्र अभ्यासपीठ
              </span>
            </div>
          </div>
        </div>

        {/* Center Navigation: Top-Level View Switcher & Chapter Quick Selector */}
        <div className="flex items-center justify-center gap-3 min-w-0 flex-1 overflow-x-auto scrollbar-none">
          {/* Top-Level Tab Controller: Chapters vs Board Papers */}
          <div
            role="tablist"
            aria-label="Main Section Navigation"
            className="flex items-center gap-1 bg-[#0E0E14] p-1 rounded-full border border-[rgba(255,255,255,0.08)] select-none shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeViewTab === 'chapters'}
              onClick={() => {
                setActiveViewTab('chapters')
                setSelectedChapterId(null)
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeViewTab === 'chapters'
                  ? 'bg-[#121218] text-[#FDFCFB] border border-[#C5A059]/40'
                  : 'text-[#A8A29E] hover:text-[#FDFCFB] border border-transparent'
              }`}
            >
              <BookOpen size={13} className={activeViewTab === 'chapters' ? 'text-[#C5A059]' : 'text-[#8E887F]'} />
              <span>Chapters</span>
              <span className="font-mono text-[10px] text-[#A8A29E]">(14)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeViewTab === 'board_papers'}
              onClick={() => {
                setActiveViewTab('board_papers')
              }}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                activeViewTab === 'board_papers'
                  ? 'bg-[#121218] text-[#FDFCFB] border border-[#C5A059]/40'
                  : 'text-[#A8A29E] hover:text-[#FDFCFB] border border-transparent'
              }`}
            >
              <FileText size={13} className={activeViewTab === 'board_papers' ? 'text-[#C5A059]' : 'text-[#8E887F]'} />
              <span>Board Papers</span>
              <span className="font-mono text-[10px] text-[#A8A29E]">(2016–2025)</span>
            </button>

          </div>

          {/* Chapter Subject Quick Selector (Visible when on Chapters view) */}
          {activeViewTab === 'chapters' && (
            <div className="hidden lg:flex items-center gap-1 bg-[#0E0E14] p-1 rounded-full border border-[rgba(255,255,255,0.08)]">
              <button
                onClick={() => {
                  setActiveSubject('all')
                  useStudyStore.getState().setActiveSubjectFilter('all')
                  setSelectedChapterId(null)
                }}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  currentSubject === 'all'
                    ? 'bg-[#D95D39] text-white'
                    : 'text-[#A8A29E] hover:text-[#FDFCFB]'
                }`}
              >
                All (14)
              </button>
              <button
                onClick={() => {
                  setActiveSubject('history')
                  useStudyStore.getState().setActiveSubjectFilter('history')
                  setSelectedChapterId(null)
                }}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  currentSubject === 'history'
                    ? 'bg-[#D95D39] text-white'
                    : 'text-[#A8A29E] hover:text-[#FDFCFB]'
                }`}
              >
                History (9)
              </button>
              <button
                onClick={() => {
                  setActiveSubject('political_science')
                  useStudyStore.getState().setActiveSubjectFilter('political_science')
                  setSelectedChapterId(null)
                }}
                className={`px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors cursor-pointer ${
                  currentSubject === 'political_science'
                    ? 'bg-[#D95D39] text-white'
                    : 'text-[#A8A29E] hover:text-[#FDFCFB]'
                }`}
              >
                Pol Sci (5)
              </button>
            </div>
          )}
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-3 shrink-0">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={() => setIsSearchOpen(true)}
            title="शोधा... (Search Syllabus)"
            aria-label="शोधा... (Search Syllabus)"
            className="flex items-center gap-2 bg-[#121218] hover:bg-[#1A1A24] text-[#FDFCFB] border border-[rgba(255,255,255,0.1)] px-3.5 py-1.5 rounded-full text-xs cursor-pointer"
          >
            <Search size={14} className="text-[#C5A059]" />
            <span className="hidden sm:inline text-[#A8A29E]">Search Syllabus...</span>
            <span className="sr-only">शोधा...</span>
            <kbd className="hidden sm:inline ml-1 px-1.5 py-0.5 text-[10px] bg-[#070709] rounded border border-[rgba(255,255,255,0.12)] text-[#A8A29E]">
              ⌘K
            </kbd>
          </motion.button>

          {bookmarks.size > 0 && (
            <div className="flex items-center gap-1.5 text-xs text-[#3EA890] font-mono bg-[#121218] border border-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-full">
              <Bookmark size={13} fill="currentColor" />
              <span>{bookmarks.size}</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
