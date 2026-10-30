import { useState } from 'react';
import {
  Users,
  ArrowLeft,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/hero/HeroSection';
import { Footer } from './components/Footer';
import { ChapterSelector } from './components/swadhay/ChapterSelector';
import { ArchivalChapterLedger } from './components/swadhay/ArchivalChapterLedger';
import { QuestionFilterTabs } from './components/swadhay/QuestionFilterTabs';
import { QuestionAccordion } from './components/swadhay/QuestionAccordion';
import { ConceptDiagramCard } from './components/swadhay/ConceptDiagramCard';
import { HistoricalFiguresModal } from './components/swadhay/HistoricalFiguresModal';
import { SearchModal } from './components/search/SearchModal';
import { BoardPapersCockpit } from './components/board/BoardPapersCockpit';
import { chaptersData } from './data/chaptersData';
import { useStudyStore } from './stores/useStudyStore';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';

export function App() {
  // Initialize Global Keyboard Navigation (Ctrl+K, Esc, Arrows)
  useKeyboardShortcuts();

  const {
    activeViewTab,
    activeChapterId,
    setActiveChapterId,
    activeCategoryFilter,
    selectedQuestionId,
    setSelectedQuestionId,
    revisionQueue,
    setSelectedChapterId,
  } = useStudyStore();

  // Find active chapter with backward-compatibility for IDs ('hist-01' vs 'hist-1')
  const currentChapter =
    chaptersData.find(
      (c) =>
        c.id === activeChapterId ||
        c.id === activeChapterId.replace('-0', '-') ||
        c.id.replace('-0', '-') === activeChapterId
    ) || chaptersData[0];

  const [userSelectedQuestionId, setUserSelectedQuestionId] = useState<string | null>(null);
  const [isFiguresModalOpen, setIsFiguresModalOpen] = useState(false);

  // Derive open question state without cascading effects
  const openQuestionId =
    userSelectedQuestionId ?? selectedQuestionId ?? currentChapter.questions[0]?.id ?? null;

  // Current chapter navigation index
  const currentIndex = chaptersData.findIndex((c) => c.id === currentChapter.id);
  const prevChapter = currentIndex > 0 ? chaptersData[currentIndex - 1] : null;
  const nextChapter = currentIndex < chaptersData.length - 1 ? chaptersData[currentIndex + 1] : null;

  const navigateToChapter = (id: string) => {
    setActiveChapterId(id);
    setSelectedChapterId(id);
    setSelectedQuestionId(null);
    setUserSelectedQuestionId(null);
    const elem = document.getElementById('swadhay-workspace');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter questions based on active category filter pill
  const filteredQuestions = currentChapter.questions.filter((q) => {
    if (activeCategoryFilter === 'all') return true;
    if (activeCategoryFilter === 'revision') {
      return revisionQueue.has(q.id);
    }
    return q.type === activeCategoryFilter;
  });

  return (
    <div className="min-h-screen bg-[var(--color-canvas)] text-[var(--color-body)] flex flex-col font-sans selection:bg-[var(--color-primary)] selection:text-white">
      {/* 1. Command Bar & Top Navigation with MicroStripe */}
      <HeaderNav />

      <main className="flex-1 w-full">
        {activeViewTab === 'board_papers' ? (
          <BoardPapersCockpit />
        ) : (
          <>
            {/* 2. Scholar at the Scroll Parallax Hero Section */}
            <HeroSection />

            {/* 3. Horizontal Swadhay Chapter Switcher */}
            <ChapterSelector />

            {/* 4. Swadhay Deep-Study Cockpit Workspace */}
            <section
              id="swadhay-workspace"
              className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-14 w-full"
            >
              {/* Chapter Title & Academic Synopsis Header */}
              <div className="bg-[#121218] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E0E14] border border-[rgba(255,255,255,0.08)] text-xs">
                      <span className="font-mono font-bold uppercase tracking-[1.2px] text-[#C5A059]">
                        {currentChapter.subject === 'history' ? 'HIST' : 'POL'}-{String(currentChapter.chapterNumber).padStart(2, '0')}
                      </span>
                      <span className="text-[#635F58]">•</span>
                      <span className="font-medium uppercase tracking-[0.08em] text-[#EBE5DC]">
                        {currentChapter.subject === 'history' ? 'History' : 'Political Science'} • Chapter {String(currentChapter.chapterNumber).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs text-[#8E887F] font-medium">
                      {currentChapter.questions.length} Practice Questions
                    </span>
                  </div>

                  {/* Thinkers Dossier Modal Trigger */}
                  {currentChapter.keyFigures.length > 0 && (
                    <button
                      onClick={() => setIsFiguresModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-full bg-[#0E0E14] border border-[rgba(255,255,255,0.12)] hover:border-[#C5A059] text-[#FDFCFB] cursor-pointer transition-colors w-fit"
                    >
                      <Users size={14} className="text-[#C5A059]" />
                      <span className="tracking-normal">Key Thinkers Dossier</span>
                      <span className="font-mono text-[11px] text-[#8E887F]">
                        ({currentChapter.keyFigures.length})
                      </span>
                    </button>
                  )}
                </div>

                <h1 className="font-marathi-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FDFCFB] mb-2 tracking-normal leading-snug">
                  {currentChapter.titleMarathi}
                </h1>

                <p className="font-serif italic text-sm md:text-base text-[#C5A059] mb-4 tracking-wide">
                  {currentChapter.titleEnglish}
                </p>

                <p className="font-sans text-[16px] md:text-[17px] leading-[1.6] tracking-normal text-[#C7C0B5] max-w-4xl font-light">
                  {currentChapter.summaryMarathi}
                </p>
              </div>

              {/* 5. Archival Chapter Ledger & SSC Exam Weightage */}
              <ArchivalChapterLedger
                chapter={currentChapter}
                onOpenFigures={() => setIsFiguresModalOpen(true)}
              />

              {/* 6. Question Category Filter Pills */}
              <div className="flex items-center justify-between mt-10 mb-2">
                <div className="flex items-center gap-2">
                  <Filter size={15} className="text-[var(--color-primary)]" />
                  <h2 className="text-xl font-bold text-[var(--color-ink)]">
                    Swadhay Study Questions
                  </h2>
                </div>
                <span className="text-xs font-mono text-[var(--color-muted)]">
                  {filteredQuestions.length} of {currentChapter.questions.length} Questions
                </span>
              </div>

              <QuestionFilterTabs chapter={currentChapter} />

              {/* 7. Questions Accordion List with Motion Physics */}
              <div className="space-y-3 mt-4">
                {filteredQuestions.length === 0 ? (
                  <div className="py-12 px-6 text-center bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-xl text-sm text-[var(--color-muted)]">
                    No questions found in this category.
                  </div>
                ) : (
                  filteredQuestions.map((question, qIdx) => (
                    <QuestionAccordion
                      key={question.id}
                      question={question}
                      index={qIdx}
                      isOpen={openQuestionId === question.id}
                      onToggle={() => {
                        if (selectedQuestionId) setSelectedQuestionId(null);
                        setUserSelectedQuestionId(openQuestionId === question.id ? null : question.id);
                      }}
                    />
                  ))
                )}
              </div>

              {/* 8. Concept Webs & Chronological Milestones */}
              <ConceptDiagramCard chapter={currentChapter} />

              {/* 9. Next / Previous Chapter Navigation Bar */}
              <nav
                aria-label="Chapter Pagination"
                className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-6 border-t border-[var(--color-hairline)]"
              >
                {prevChapter ? (
                  <button
                    onClick={() => navigateToChapter(prevChapter.id)}
                    className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] hover:underline cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    <span className="font-mono uppercase tracking-[1.5px]">PREVIOUS CHAPTER //</span>
                    <span className="tracking-normal font-medium">{prevChapter.titleMarathi}</span>
                  </button>
                ) : (
                  <div />
                )}

                {nextChapter ? (
                  <button
                    onClick={() => navigateToChapter(nextChapter.id)}
                    className="flex items-center gap-2 text-xs font-bold text-[var(--color-primary)] hover:underline cursor-pointer"
                  >
                    <span className="tracking-normal font-medium">{nextChapter.titleMarathi}</span>
                    <span className="font-mono uppercase tracking-[1.5px]">// NEXT CHAPTER</span>
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <div />
                )}
              </nav>
            </section>
          </>
        )}
      </main>

      {/* 10. Historical Figures Dossier Dialog */}
      <HistoricalFiguresModal
        figures={currentChapter.keyFigures}
        isOpen={isFiguresModalOpen}
        onClose={() => setIsFiguresModalOpen(false)}
        chapterTitle={currentChapter.titleMarathi}
      />

      {/* 11. Instant Ctrl+K Search Modal */}
      <SearchModal />

      {/* 12. Museum Grade Footer with 4px MicroStripe */}
      <Footer />
    </div>
  );
}

export default App;
