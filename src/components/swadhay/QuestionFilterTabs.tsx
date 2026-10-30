import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useStudyStore, type CategoryFilter, type StudyMode } from '../../stores/useStudyStore';
import type { Chapter } from '../../data/chaptersData';
import { BookOpen, Brain, EyeOff, Star } from 'lucide-react';

interface QuestionFilterTabsProps {
  chapter: Chapter;
}

interface FilterTabOption {
  id: CategoryFilter;
  labelEnglish: string;
  codeLatin: string;
  colorVar: string;
  isSpecial?: boolean;
}

const filterOptions: FilterTabOption[] = [
  { id: 'all', labelEnglish: 'All Questions', codeLatin: 'ALL', colorVar: 'var(--color-primary)' },
  { id: 'revision', labelEnglish: '★ उजळणी संच', codeLatin: 'REVISION', colorVar: 'var(--color-accent-amber)', isSpecial: true },
  { id: 'mcq', labelEnglish: 'Multiple Choice', codeLatin: 'MCQ', colorVar: 'var(--color-archival-basalt)' },
  { id: 'wrong_pair', labelEnglish: 'Incorrect Pairs', codeLatin: 'PAIR', colorVar: 'var(--color-archival-crimson)' },
  { id: 'concept_map', labelEnglish: 'Concept Maps', codeLatin: 'MAP', colorVar: 'var(--color-archival-sage)' },
  { id: 'short_notes', labelEnglish: 'Short Notes', codeLatin: 'NOTES', colorVar: 'var(--color-coral)' },
  { id: 'give_reasons', labelEnglish: 'Give Reasons', codeLatin: 'REASONS', colorVar: 'var(--color-archival-ochre)' },
  { id: 'true_false_reasons', labelEnglish: 'True or False', codeLatin: 'TRUE/FALSE', colorVar: 'var(--color-archival-cobalt)' },
  { id: 'detailed_answer', labelEnglish: 'Detailed Answers', codeLatin: 'DETAILED', colorVar: 'var(--color-archival-terracotta)' },
];

export const QuestionFilterTabs: React.FC<QuestionFilterTabsProps> = ({ chapter }) => {
  const {
    activeCategoryFilter,
    setActiveCategoryFilter,
    studyMode,
    setStudyMode,
    revisionQueue,
  } = useStudyStore();

  const tablistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tablistRef.current) {
      const activeEl = tablistRef.current.querySelector<HTMLElement>(`[data-filter-tab="${activeCategoryFilter}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
      }
    }
  }, [activeCategoryFilter]);

  const getCountForFilter = (filter: CategoryFilter): number => {
    if (filter === 'all') return chapter.questions.length;
    if (filter === 'revision') {
      return chapter.questions.filter((q) => revisionQueue.has(q.id)).length;
    }
    return chapter.questions.filter((q) => q.type === filter).length;
  };

  const modes: { id: StudyMode; keyShortcut: string; labelMarathi: string; icon: React.ReactNode }[] = [
    { id: 'read', keyShortcut: '1', labelMarathi: 'वाचन', icon: <BookOpen size={12} /> },
    { id: 'recall', keyShortcut: '2', labelMarathi: 'स्मरण', icon: <Brain size={12} /> },
    { id: 'cloze', keyShortcut: '3', labelMarathi: 'सराव', icon: <EyeOff size={12} /> },
  ];

  return (
    <div
      aria-label="Swadhay Sticky Archival Command Bar"
      className="sticky top-16 z-30 w-full bg-[var(--color-canvas)]/95 backdrop-blur-md border-y border-[var(--color-hairline)] px-2 sm:px-4 py-2 my-5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 md:gap-4"
    >
      {/* Left Zone: Question Category Filters with parchment fade mask */}
      <div
        ref={tablistRef}
        role="tablist"
        aria-label="Question Category Filters"
        className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none pb-1 md:pb-0 flex-1 [mask-image:linear-gradient(to_right,black_calc(100%-24px),transparent)]"
      >
        {filterOptions.map((opt) => {
          const count = getCountForFilter(opt.id);
          const isActive = activeCategoryFilter === opt.id;
          const isDisabled = count === 0 && opt.id !== 'all' && opt.id !== 'revision';

          return (
            <motion.button
              key={opt.id}
              role="tab"
              data-filter-tab={opt.id}
              aria-selected={isActive}
              disabled={isDisabled}
              onClick={() => setActiveCategoryFilter(opt.id)}
              whileHover={isDisabled ? undefined : { y: -1 }}
              whileTap={isDisabled ? undefined : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold cursor-pointer shrink-0 transition-colors ${
                isActive
                  ? 'bg-[var(--color-surface-card)] text-[var(--color-ink)] font-bold'
                  : isDisabled
                  ? 'bg-[var(--color-canvas)] border-[var(--color-hairline-soft)] text-[var(--color-muted-soft)] opacity-40 cursor-not-allowed'
                  : 'bg-[var(--color-canvas-parchment)] border-[var(--color-hairline)] text-[var(--color-body)] hover:border-[var(--color-hairline-soft)] hover:text-[var(--color-ink)]'
              }`}
              style={{
                boxShadow: 'none',
                borderColor: isActive ? opt.colorVar : undefined,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeQuestionCategoryPill"
                  className="absolute inset-0 rounded-full border-2 pointer-events-none"
                  style={{ borderColor: opt.colorVar, boxShadow: 'none' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              {opt.isSpecial ? (
                <Star size={11} className={count > 0 ? 'text-[var(--color-accent-amber)] fill-[var(--color-accent-amber)]' : 'text-[var(--color-muted)]'} />
              ) : (
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: opt.colorVar }}
                />
              )}
              <span className="tracking-normal font-medium">{opt.labelEnglish}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? 'bg-[var(--color-ink)] text-white'
                    : 'bg-[var(--color-canvas)] text-[var(--color-muted)]'
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Right Zone: 3-Mode Cognitive Switcher with Keyboard Badges */}
      <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
        <span className="hidden lg:inline text-[11px] font-medium tracking-normal text-[#8E887F] font-marathi-serif">
          अभ्यास मोड:
        </span>
        <div className="flex items-center p-0.5 bg-[var(--color-canvas-parchment)] border border-[var(--color-hairline)] rounded-full">
          {modes.map((mode) => {
            const isModeActive = studyMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setStudyMode(mode.id)}
                title={`कीबोर्ड शॉर्टकट [${mode.keyShortcut}] दाबून बदला`}
                className={`relative px-2.5 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isModeActive
                    ? 'text-[var(--color-ink)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                }`}
              >
                {isModeActive && (
                  <motion.div
                    layoutId="activeStudyModePill"
                    className="absolute inset-0 bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className={isModeActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)]'}>
                  {mode.icon}
                </span>
                <span>{mode.labelMarathi}</span>
                <span className="hidden sm:inline font-mono text-[9px] px-1 py-0.2 rounded bg-[var(--color-surface-card)] text-[var(--color-muted)] border border-[var(--color-hairline)]">
                  {mode.keyShortcut}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionFilterTabs;
