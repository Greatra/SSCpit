import React from 'react';
import { motion } from 'motion/react';
import type { Chapter } from '../../data/chaptersData';
import { useStudyStore } from '../../stores/useStudyStore';
import { Scroll, Users, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { ARCHIVAL_TRANSITIONS } from '../../styles/motionTokens';

interface ArchivalChapterLedgerProps {
  chapter: Chapter;
  onOpenFigures?: () => void;
}

export const ArchivalChapterLedger: React.FC<ArchivalChapterLedgerProps> = ({
  chapter,
  onOpenFigures,
}) => {
  const { completedQuestions, revisionQueue, setActiveCategoryFilter } = useStudyStore();

  const completedInChapter = chapter.questions.filter((q) => completedQuestions.has(q.id)).length;
  const revisionInChapter = chapter.questions.filter((q) => revisionQueue.has(q.id)).length;
  const progressPercent =
    chapter.questions.length > 0
      ? Math.round((completedInChapter / chapter.questions.length) * 100)
      : 0;

  // Breakdown of question weights
  const objectiveCount = chapter.questions.filter((q) => q.type === 'mcq' || q.type === 'wrong_pair').length;
  const conceptMapCount = chapter.questions.filter((q) => q.type === 'concept_map').length;
  const shortAnswerCount = chapter.questions.filter(
    (q) => q.type === 'give_reasons' || q.type === 'short_notes' || q.type === 'true_false_reasons'
  ).length;
  const detailedCount = chapter.questions.filter((q) => q.type === 'detailed_answer').length;

  const isHistory = chapter.subject === 'history';
  const subjectLabelMarathi = isHistory ? 'इतिहास विभाग' : 'राज्यशास्त्र विभाग';
  const subjectCode = isHistory ? 'HIST' : 'POL';

  return (
    <section
      aria-label="Archival Chapter Ledger"
      className="w-full my-6 bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-xl overflow-hidden"
    >
      {/* 1. Deccan Folio Top Bar / Inscription Banner */}
      <div className="bg-[var(--color-canvas-parchment)] border-b border-[var(--color-hairline)] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          {/* Tamrapat / Shendri Seal */}
          <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs select-none shadow-none">
            {isHistory ? 'इ' : 'रा'}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-[var(--color-ink)] tracking-normal">
              {subjectLabelMarathi}
            </span>
            <span className="text-[var(--color-hairline)]">•</span>
            <span className="font-mono text-[11px] font-bold text-[var(--color-muted)] uppercase tracking-wider">
              {subjectCode}-{String(chapter.chapterNumber).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--color-muted)]">
          <span className="flex items-center gap-1.5">
            <Scroll size={13} className="text-[var(--color-primary)]" />
            <span>महाराष्ट्र राज्य पाठ्यपुस्तक निर्मिती मंडळ (SSC)</span>
          </span>
        </div>
      </div>

      {/* 2. Primary 4-Column Archival Ledger Grid */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Ledger Column 2: Question Type Distribution */}
        <div className="border-b md:border-b-0 md:border-r border-[var(--color-hairline)] pb-5 md:pb-0 md:pr-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[var(--color-muted)] font-mono">
                स्वाध्याय रचना
              </span>
              <BookOpen size={15} className="text-[var(--color-archival-ochre)]" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold font-mono text-[var(--color-ink)] tabular-nums">
                {String(chapter.questions.length).padStart(2, '0')}
              </span>
              <span className="text-xs font-bold text-[var(--color-muted)] font-mono uppercase tracking-wider">
                प्रश्न संच
              </span>
            </div>
            <div className="mt-2 space-y-1 text-xs text-[var(--color-body)]">
              <div className="flex justify-between">
                <span>वस्तुनिष्ठ प्रश्न (१ गुण):</span>
                <span className="font-mono font-bold text-[var(--color-ink)]">{objectiveCount}</span>
              </div>
              <div className="flex justify-between">
                <span>संकल्पना चित्रे (२ गुण):</span>
                <span className="font-mono font-bold text-[var(--color-ink)]">{conceptMapCount}</span>
              </div>
              <div className="flex justify-between">
                <span>लघुत्तरी उत्तरे (२–३ गुण):</span>
                <span className="font-mono font-bold text-[var(--color-ink)]">{shortAnswerCount}</span>
              </div>
              <div className="flex justify-between">
                <span>दीर्घोत्तरी प्रश्न (४ गुण):</span>
                <span className="font-mono font-bold text-[var(--color-ink)]">{detailedCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ledger Column 3: Historical Thinkers & Chronology Anchor */}
        <div className="border-b lg:border-b-0 lg:border-r border-[var(--color-hairline)] pb-5 lg:pb-0 lg:pr-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[var(--color-muted)] font-mono">
                प्रमुख विचारवंत व कालपट
              </span>
              <Users size={15} className="text-[var(--color-accent-teal)]" />
            </div>

            {chapter.keyFigures.length > 0 ? (
              <div className="space-y-2 mt-2">
                <div className="flex flex-wrap gap-1.5">
                  {chapter.keyFigures.slice(0, 3).map((fig, fIdx) => (
                    <button
                      key={fIdx}
                      onClick={onOpenFigures}
                      className="px-2.5 py-1 rounded-md bg-[var(--color-canvas)] border border-[var(--color-hairline)] hover:border-[var(--color-primary)] text-xs text-[var(--color-ink)] font-medium cursor-pointer transition-colors text-left"
                      title={`${fig.roleMarathi} (${fig.period})`}
                    >
                      {fig.nameMarathi}
                    </button>
                  ))}
                </div>
                {chapter.keyFigures.length > 3 && onOpenFigures && (
                  <button
                    onClick={onOpenFigures}
                    className="text-xs text-[var(--color-primary)] font-bold hover:underline cursor-pointer flex items-center gap-1 mt-1"
                  >
                    + आणखी {chapter.keyFigures.length - 3} विचारवंत पहा
                  </button>
                )}
              </div>
            ) : (
              <p className="text-xs text-[var(--color-muted)] mt-2">
                या पाठात राज्यशास्त्र संकल्पना व संविधानात्मक तरतुदींचा अभ्यास आहे.
              </p>
            )}
          </div>

          {chapter.milestones.length > 0 && (
            <div className="mt-3 pt-2.5 border-t border-[var(--color-hairline-soft)] flex items-center gap-2 text-xs text-[var(--color-muted)]">
              <Calendar size={13} className="text-[var(--color-archival-ochre)]" />
              <span>कालपट: {chapter.milestones[0].year} – {chapter.milestones[chapter.milestones.length - 1].year}</span>
            </div>
          )}
        </div>

        {/* Ledger Column 4: Self-Study Completion Mastery & Spaced Revision Readiness */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-[var(--color-muted)] font-mono">
                स्वाध्याय तयारी प्रगती
              </span>
              <CheckCircle2 size={15} className="text-[var(--color-accent-teal)]" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold font-mono text-[var(--color-ink)] tabular-nums">
                {progressPercent}%
              </span>
              <span className="text-xs font-bold text-[var(--color-muted)] font-mono uppercase tracking-wider">
                पूर्ण
              </span>
            </div>

            {/* Two-Metric Archival Readiness Seal */}
            <div className="mt-2.5 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-[#9E7B42] font-semibold">
                <span>सराव पूर्ण:</span>
                <span className="font-mono font-bold tabular-nums">
                  {completedInChapter} / {chapter.questions.length} प्रश्न
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveCategoryFilter('revision');
                  const elem = document.getElementById('swadhay-workspace');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full flex items-center justify-between p-1.5 rounded border text-xs cursor-pointer transition-colors ${
                  revisionInChapter > 0
                    ? 'bg-[rgba(200,70,40,0.08)] border-[rgba(200,70,40,0.3)] text-[#C84628] font-bold hover:bg-[rgba(200,70,40,0.15)]'
                    : 'bg-[var(--color-canvas)] border-[var(--color-hairline-soft)] text-[var(--color-muted)] hover:border-[var(--color-hairline)]'
                }`}
                title="उजळणी संच उघडा"
              >
                <span className="flex items-center gap-1">
                  <span>★</span>
                  <span>उजळणी बाकी:</span>
                </span>
                <span className="font-mono font-bold tabular-nums">
                  {revisionInChapter} प्रश्न
                </span>
              </button>
            </div>
          </div>

          {/* Minimal Archival Progress Track */}
          <div className="mt-4 pt-3 border-t border-[var(--color-hairline-soft)]">
            <div className="w-full h-2 rounded-full bg-[var(--color-canvas)] border border-[var(--color-hairline)] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={ARCHIVAL_TRANSITIONS.editorialEase}
                className="h-full bg-[var(--color-primary)] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchivalChapterLedger;
