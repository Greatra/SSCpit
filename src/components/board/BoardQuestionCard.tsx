import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  FileText,
  Network,
  ExternalLink,
  Eye,
  EyeOff,
  BookOpen,
} from 'lucide-react';
import type { BoardQuestion } from '../../types/boardPapers';
import { RecurringFrequencyBadge } from './RecurringFrequencyBadge';
import { BoardRubricDrawer } from './BoardRubricDrawer';
import { chaptersData } from '../../data/chaptersData';
import { useStudyStore } from '../../stores/useStudyStore';

interface BoardQuestionCardProps {
  question: BoardQuestion;
  onNavigateToChapter?: (chapterId: string) => void;
}

/**
 * Board Examination Question Card (बोर्ड प्रश्न पत्रिका घटक)
 * Specialized multi-type question renderer:
 * - MCQs with interactive option selection & answer reveal
 * - Wrong Pairs identification with inline correction
 * - Concept Map / Flowchart visual node representation
 * - Historical Passage analysis with sub-questions
 * - Tripartite MSBSHSE Rubric Drawer
 * Strictly Zero-Shadow Law compliant.
 */
export const BoardQuestionCard: React.FC<BoardQuestionCardProps> = ({
  question,
  onNavigateToChapter,
}) => {
  const [selectedMcqOption, setSelectedMcqOption] = useState<number | null>(null);
  const [isMcqRevealed, setIsMcqRevealed] = useState(false);
  const [isWrongPairRevealed, setIsWrongPairRevealed] = useState(false);
  const [revealedSubQuestions, setRevealedSubQuestions] = useState<Record<string, boolean>>({});

  const { setActiveViewTab, setActiveChapterId, setSelectedChapterId } = useStudyStore();

  // Find linked syllabus chapter
  const associatedChapter = chaptersData.find(
    (c) =>
      c.id === question.chapterAssociationId ||
      c.id === question.chapterAssociationId.replace('-0', '-') ||
      c.id.replace('-0', '-') === question.chapterAssociationId
  );

  const handleChapterClick = () => {
    if (onNavigateToChapter) {
      onNavigateToChapter(question.chapterAssociationId);
    } else {
      setActiveViewTab('chapters');
      setActiveChapterId(question.chapterAssociationId);
      setSelectedChapterId(question.chapterAssociationId);
      setTimeout(() => {
        const el = document.getElementById('swadhay-workspace');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const toggleSubQuestion = (qNum: string) => {
    setRevealedSubQuestions((prev) => ({
      ...prev,
      [qNum]: !prev[qNum],
    }));
  };

  return (
    <article className="bg-[#121218] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 md:p-6 mb-4 transition-colors">
      {/* 1. Header Metadata Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Question Number Badge */}
          <span className="px-2.5 py-1 rounded bg-[#1A1A24] border border-[rgba(255,255,255,0.1)] text-xs font-mono font-bold text-[#FDFCFB]">
            {question.questionNumberLabel}
          </span>

          {/* Subject Badge */}
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-marathi-serif font-medium ${
              question.subject === 'history'
                ? 'bg-[#D95D39]/15 text-[#D95D39] border border-[#D95D39]/30'
                : 'bg-[#3EA890]/15 text-[#3EA890] border border-[#3EA890]/30'
            }`}
          >
            {question.subject === 'history' ? 'इतिहास' : 'राज्यशास्त्र'}
          </span>

          {/* Marks Weightage Pill */}
          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#161622] text-[#C5A059] border border-[#C5A059]/25">
            {question.marks} {question.marks === 1 ? 'गुण' : 'गुण'}
          </span>

          {/* Cross-Linkable Syllabus Chapter Pill */}
          <button
            type="button"
            onClick={handleChapterClick}
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-marathi-serif bg-[#0E0E14] text-[#A8A29E] hover:text-[#C5A059] border border-[rgba(255,255,255,0.08)] hover:border-[#C5A059]/40 cursor-pointer transition-colors"
            title="या धड्यातील स्वाध्याय व संकल्पनचित्रे पाहण्यासाठी क्लिक करा"
          >
            <BookOpen size={11} className="text-[#C5A059]" />
            <span>
              {associatedChapter
                ? `${associatedChapter.chapterNumber}. ${associatedChapter.titleMarathi}`
                : question.chapterAssociationId}
            </span>
            <ExternalLink size={10} className="text-[#8E887F]" />
          </button>
        </div>

        {/* Recurring Exam Frequency Badge (★★★, ★★, ★) */}
        {question.frequencyMarker && (
          <RecurringFrequencyBadge frequencyMarker={question.frequencyMarker} />
        )}
      </div>

      {/* 2. Main Question Prompt */}
      <h3 className="font-marathi-serif text-[17px] sm:text-lg text-[#FDFCFB] leading-relaxed mb-4">
        {question.questionMarathi}
      </h3>

      {/* 3. Specialized Type Renderer: Multiple Choice Question (MCQ) */}
      {question.type === 'mcq_1m' && question.options && question.options.length > 0 && (
        <div className="space-y-3 my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {question.options.map((opt, idx) => {
              const isSelected = selectedMcqOption === idx;
              const isCorrect = question.correctOptionIndex === idx;
              const showResult = isMcqRevealed || isSelected;

              let optionStyle =
                'bg-[#0E0E14] border-[rgba(255,255,255,0.08)] text-[#EBE5DC] hover:border-[#C5A059]/40';
              if (showResult && isCorrect) {
                optionStyle = 'bg-[#0E1A16] border-[#3EA890] text-[#FDFCFB]';
              } else if (showResult && isSelected && !isCorrect) {
                optionStyle = 'bg-[#1A1212] border-[#D95D39] text-[#FDFCFB]';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedMcqOption(idx);
                    setIsMcqRevealed(true);
                  }}
                  className={`flex items-center justify-between p-3 rounded-lg border text-left cursor-pointer transition-colors text-xs sm:text-sm font-marathi-serif ${optionStyle}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1A1A24] border border-[rgba(255,255,255,0.1)] flex items-center justify-center font-mono text-xs text-[#A8A29E] shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {showResult && isCorrect && (
                    <CheckCircle2 size={16} className="text-[#3EA890] shrink-0 ml-2" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle size={16} className="text-[#D95D39] shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => setIsMcqRevealed((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:underline cursor-pointer font-marathi-serif"
            >
              {isMcqRevealed ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>{isMcqRevealed ? 'उत्तर लपवा' : 'अचूक उत्तर पहा'}</span>
            </button>

            {question.directAnswer && isMcqRevealed && (
              <span className="text-xs font-marathi-serif text-[#3EA890] font-semibold">
                उत्तर: {question.directAnswer}
              </span>
            )}
          </div>
        </div>
      )}

      {/* 4. Specialized Type Renderer: Wrong Pair Identification */}
      {question.type === 'wrong_pair_1m' && question.wrongPairItems && (
        <div className="space-y-3 my-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {question.wrongPairItems.map((pair, idx) => {
              const isTheWrongOne =
                question.incorrectPair &&
                (question.incorrectPair.includes(pair.term) ||
                  pair.term.includes(question.incorrectPair.split('-')[0]?.trim() || ''));

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border text-xs sm:text-sm font-marathi-serif transition-colors ${
                    isWrongPairRevealed && isTheWrongOne
                      ? 'bg-[#1A1212] border-[#D95D39]'
                      : 'bg-[#0E0E14] border-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs text-[#A8A29E]">({idx + 1})</span>
                    {isWrongPairRevealed && isTheWrongOne && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#D95D39]/20 text-[#D95D39] border border-[#D95D39]/40">
                        चुकीची जोडी
                      </span>
                    )}
                  </div>
                  <div className="font-semibold text-[#FDFCFB]">{pair.term}</div>
                  <div className="text-[#A8A29E] mt-0.5">— {pair.explanation}</div>
                </div>
              );
            })}
          </div>

          {/* Reveal Incorrect Pair & Correction Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIsWrongPairRevealed((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.08)] hover:border-[#C5A059]/40 text-xs text-[#C5A059] cursor-pointer font-marathi-serif"
            >
              {isWrongPairRevealed ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>{isWrongPairRevealed ? 'स्पष्टीकरण लपवा' : 'चुकीची जोडी व दुरुस्ती पहा'}</span>
            </button>

            {isWrongPairRevealed && (
              <div className="mt-2.5 p-3 rounded-lg bg-[#0E0E14] border border-[#D95D39]/30 space-y-1.5 text-xs font-marathi-serif">
                {question.incorrectPair && (
                  <div className="flex items-center gap-2 text-[#D95D39]">
                    <XCircle size={14} className="shrink-0" />
                    <span>
                      <strong>चुकीची जोडी:</strong> {question.incorrectPair}
                    </span>
                  </div>
                )}
                {question.correctedPair && (
                  <div className="flex items-center gap-2 text-[#3EA890]">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>
                      <strong>दुरुस्त जोडी:</strong> {question.correctedPair}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. Specialized Type Renderer: Concept Map / Diagram */}
      {question.conceptDiagram && (
        <div className="my-4 p-4 rounded-xl bg-[#0E0E14] border border-[#C5A059]/25">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-3">
            <Network size={14} />
            <span>{question.conceptDiagram.titleMarathi}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {question.conceptDiagram.nodes.map((node, nIdx) => (
              <div
                key={nIdx}
                className="p-3 rounded-lg bg-[#121218] border border-[rgba(255,255,255,0.08)] flex flex-col justify-between"
              >
                <div className="font-marathi-serif text-xs text-[#FDFCFB] font-medium leading-snug">
                  {node.labelMarathi}
                </div>
                <div className="mt-2 text-right">
                  <span className="text-[10px] font-mono text-[#C5A059] px-1.5 py-0.5 rounded bg-[#1A1A24]">
                    {node.marksPerNode} गुण
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Specialized Type Renderer: Passage Analysis (Question 4) */}
      {question.passageText && (
        <div className="my-4 space-y-4">
          <div className="p-4 rounded-xl bg-[#0E0E14] border-l-2 border-l-[#C5A059] border-t border-r border-b border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#C5A059] mb-2 font-bold">
              <FileText size={13} />
              <span>वाचनासाठी ऐतिहासिक अधिकृत उतारा:</span>
            </div>
            <p className="font-marathi-serif text-sm text-[#EBE5DC] leading-relaxed italic">
              "{question.passageText}"
            </p>
          </div>

          {/* Sub-Questions for Passage */}
          {question.subQuestions && question.subQuestions.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase text-[#A8A29E] block">
                उताऱ्यावरील उपप्रश्न व गुणदान:
              </span>
              {question.subQuestions.map((subQ) => {
                const isSubRevealed = revealedSubQuestions[subQ.questionNumber];
                return (
                  <div
                    key={subQ.questionNumber}
                    className="p-3.5 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="font-marathi-serif text-sm text-[#FDFCFB]">
                        <span className="font-mono text-xs font-bold text-[#C5A059] mr-2">
                          ({subQ.questionNumber})
                        </span>
                        {subQ.textMarathi}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1A1A24] text-[#C5A059] border border-[#C5A059]/20 shrink-0">
                        {subQ.marks} {subQ.marks === 1 ? 'गुण' : 'गुण'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleSubQuestion(subQ.questionNumber)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#C5A059] hover:underline cursor-pointer font-marathi-serif"
                    >
                      {isSubRevealed ? <EyeOff size={11} /> : <Eye size={11} />}
                      <span>{isSubRevealed ? 'उत्तर लपवा' : 'आदर्श उत्तर पहा'}</span>
                    </button>

                    {isSubRevealed && (
                      <div className="mt-2 p-2.5 rounded bg-[#121218] border border-[rgba(255,255,255,0.06)] font-marathi-serif text-xs text-[#3EA890] leading-relaxed">
                        <strong>उत्तर:</strong> {subQ.modelAnswer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* 7. Tripartite Rubric Drawer (प्रस्तावना, मुख्य मुद्दे, निष्कर्ष) */}
      <BoardRubricDrawer
        rubric={question.rubric}
        directAnswer={question.type !== 'mcq_1m' ? question.directAnswer : undefined}
      />
    </article>
  );
};

export default BoardQuestionCard;
