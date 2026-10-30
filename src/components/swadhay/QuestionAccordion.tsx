import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Bookmark,
  Check,
  Copy,
  CheckCircle2,
  Circle,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Eye,
  EyeOff,
  RotateCcw,
  Star,
  Scroll,
} from 'lucide-react';
import type { SwadhayQuestion } from '../../data/chaptersData';
import { useStudyStore } from '../../stores/useStudyStore';
import { ARCHIVAL_TRANSITIONS, ARCHIVAL_STAGGER_VARIANTS } from '../../styles/motionTokens';

interface QuestionAccordionProps {
  question: SwadhayQuestion;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

// Master Regex for high-value Maharashtra State Board historical & political keywords across all 14 chapters
export const MASTER_CURRICULUM_KEYWORDS_REGEX =
  /(व्हॉल्टेअर|रेने देकार्त|जॉर्ज हेगेल|कार्ल मार्क्स|मायकेल फुको|मायकेल फुकॉ|लिओपॉल्ड रांके|लिओपोल्ड रांखे|हिरोडोटस|बाबर|कल्हण|झियाउद्दीन बरनी|वि\. का\. राजवाडे|स्वातंत्र्यवीर सावरकर|डॉ\. बाबासाहेब आंबेडकर|बाळशास्त्री जांभेकर|लोकमान्य टिळक|छत्रपती शिवाजी महाराज|ताराबाई शिंदे|पंडिता रमाबाई|स्त्री-पुरुष तुलना|डिस्कॉर्स ऑन द मेथड|दास कॅपिटल|राजतरंगिणी|बखर|सभासद बखर|असहकार चळवळ|उपयोजित इतिहास|वारसा स्थळ|युनेस्को|अजिंठा|वेरूळ|घारापुरी|कास पठार|दख्खनची स्थापत्यशैली|गांधार शैली|नागर शैली|द्रविड शैली|हेमाडपंती|दर्पण|ज्ञानोदय|केसरी|मराठा|आकाशवाणी|दूरदर्शन|दादासाहेब फाळके|विष्णूदास भावे|बाळंभट्टदादा देवधर|खाशाबा जाधव|मेजर ध्यानचंद|ऑलिंपिक|मल्लखांब|बुद्धिबळ|चतुरंग|थॉमस कुक|बेंजामिन ट्युडेला|मार्को पोलो|इब्न बतूता|गेरहार्ड मर्कॅटर|भिलार|कृषी पर्यटन|वारसा सहल|लुव्र संग्रहालय|ब्रिटिश संग्रहालय|भारतीय संग्रहालय|नॅशनल म्युझियम|सरस्वती महाल|विश्वकोश|स्थलकोश|संविधान|मूलभूत हक्क|माहितीचा अधिकार|निवडणूक आयोग|आचारसंहिता|ईव्हीएम|व्हीव्हीपॅट|सुकुमार सेन|राष्ट्रीय पक्ष|प्रादेशिक पक्ष|शेतकरी चळवळ|चिपको आंदोलन|नर्मदा बचाव आंदोलन|ग्राहक संरक्षण कायदा|नक्षलवाद|चारू मुजुमदार|लोकपाल|लोकायुक्त|१७८९|१९२०|१९४२|१९४७|१८४८|१९५०|१९७३|१९८८|१९९२|२००५|इ\.स\.|इ\.स\.पू\.|वर्गसंघर्ष|द्वंद्ववाद|ॲनल्स प्रणाली|हक्काधारित दृष्टिकोन)/g;

import {
  DEVANAGARI_AKSHARA_REGEX_SOURCE,
  getKeywordSemanticCategory,
} from '../../utils/devanagariGraphemes';

const HISTORICAL_KEYWORDS_REGEX = MASTER_CURRICULUM_KEYWORDS_REGEX;

function getKeywordCategory(word: string): string {
  return getKeywordSemanticCategory(word);
}

const mrSegmenter =
  typeof Intl !== 'undefined' && 'Segmenter' in Intl
    ? new Intl.Segmenter('mr', { granularity: 'grapheme' })
    : null;

const toDevanagariDigits = (n: number): string =>
  String(n).replace(/[0-9]/g, (d) => '०१२३४५६७८९'[Number(d)]);

// Devanagari grapheme cluster regex fallback for older mobile WebViews
const DEVANAGARI_GRAPHEME_REGEX = new RegExp(DEVANAGARI_AKSHARA_REGEX_SOURCE, 'gu');

export function getMarathiClozeHint(word: string): { firstAkshara: string; aksharaCountLabel: string } {
  const clean = word.trim();
  let graphemes: string[];

  if (mrSegmenter) {
    graphemes = Array.from(mrSegmenter.segment(clean), (s) => s.segment).filter(
      (c) => !/^[\s\p{P}\p{S}]+$/u.test(c)
    );
  } else {
    graphemes = clean.match(DEVANAGARI_GRAPHEME_REGEX) || [];
  }

  const firstAkshara = graphemes[0] ?? '';
  const count = graphemes.length;
  const countStr = toDevanagariDigits(count);
  const suffix = count === 1 ? 'अक्षर' : 'अक्षरे';
  return {
    firstAkshara,
    aksharaCountLabel: firstAkshara ? `${firstAkshara}... (${countStr} ${suffix})` : `(${countStr} ${suffix})`,
  };
}

export const QuestionAccordion: React.FC<QuestionAccordionProps> = ({
  question,
  index,
  isOpen,
  onToggle,
}) => {
  const {
    isBookmarked,
    toggleBookmark,
    isQuestionCompleted,
    toggleQuestionCompleted,
    isInRevisionQueue,
    toggleRevisionQueue,
    studyMode,
    revealedRecallNodes,
    toggleRecallNode,
    revealAllRecallNodes,
  } = useStudyStore();

  const [activeAnswerTab, setActiveAnswerTab] = useState<'points' | 'detailed'>('points');
  const [selectedMcqOption, setSelectedMcqOption] = useState<number | null>(null);
  const [selectedWrongPairIdx, setSelectedWrongPairIdx] = useState<number | null>(null);
  // Cloze Stage Map: tokenKey -> 0 (Masked), 1 (Hint / First Akshara), 2 (Fully Revealed)
  const [clozeStages, setClozeStages] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState(false);

  const bookmarked = isBookmarked(question.id);
  const completed = isQuestionCompleted(question.id);
  const inRevision = isInRevisionQueue(question.id);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(question.id);
  };

  const handleCompleteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleQuestionCompleted(question.id);
  };

  const handleRevisionToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleRevisionQueue(question.id);
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const textToCopy = `प्रश्न: ${question.questionMarathi}\n\nउत्तरे:\n${question.answerMarathiPoints.map((p, idx) => `${idx + 1}. ${p}`).join('\n')}${
      question.answerMarathiDetailed ? `\n\nसविस्तर संदर्भ:\n${question.answerMarathiDetailed}` : ''
    }`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to deconstruct Marathi point into Memory Hook + Elaboration
  const parsePoint = (rawPoint: string, ptIdx: number) => {
    if (rawPoint.includes(':')) {
      const parts = rawPoint.split(':');
      return {
        hook: parts[0].trim(),
        explanation: parts.slice(1).join(':').trim(),
      };
    }
    const words = rawPoint.split(/\s+/);
    if (words.length <= 4) {
      return { hook: `मुद्दा क्र. ${ptIdx + 1}`, explanation: rawPoint };
    }
    return {
      hook: words.slice(0, 3).join(' '),
      explanation: words.slice(3).join(' '),
    };
  };

  const handleClozeClick = (tokenKey: string) => {
    setClozeStages((prev) => {
      const current = prev[tokenKey] || 0;
      const next = (current + 1) % 3; // 0 -> 1 -> 2 -> 0
      return { ...prev, [tokenKey]: next };
    });
  };

  const qTypeBadgeLabel =
    question.qType ||
    (question.type === 'mcq'
      ? 'योग्य पर्याय'
      : question.type === 'wrong_pair'
      ? 'चुकीची जोडी'
      : question.type === 'concept_map'
      ? 'संकल्पना चित्र'
      : question.type === 'short_notes'
      ? 'टिपा लिहा'
      : question.type === 'give_reasons'
      ? 'सकारण स्पष्ट करा'
      : question.type === 'true_false_reasons'
      ? 'चूक / बरोबर'
      : 'सविस्तर उत्तरे');

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'mcq':
        return 'text-[var(--color-archival-basalt)] border-[var(--color-hairline)] bg-[var(--color-canvas)]';
      case 'wrong_pair':
        return 'text-[#c84628] border-[rgba(200,70,40,0.3)] bg-[rgba(200,70,40,0.08)]';
      case 'concept_map':
        return 'text-[var(--color-accent-teal)] border-[rgba(93,184,166,0.3)] bg-[rgba(93,184,166,0.08)]';
      case 'short_notes':
        return 'text-[var(--color-primary)] border-[rgba(204,120,92,0.3)] bg-[rgba(204,120,92,0.08)]';
      case 'give_reasons':
        return 'text-[var(--color-archival-ochre)] border-[var(--color-archival-ochre-border)] bg-[var(--color-archival-ochre-soft)]';
      case 'true_false_reasons':
        return 'text-[#1d5b79] border-[rgba(29,91,121,0.3)] bg-[rgba(29,91,121,0.08)]';
      case 'detailed_answer':
      default:
        return 'text-[#c84628] border-[rgba(200,70,40,0.3)] bg-[rgba(200,70,40,0.08)]';
    }
  };

  // SSC Answer-Sheet Rubric: Authentic question-specific context & synthesis from curriculum data
  const openingPoint = question.prastavana ?? null;
  // All core points are preserved intact inside Band B (स्मरण साखळी) without peeling
  const corePoints = question.answerMarathiPoints;
  const concludingPoint = question.nishkarsha ?? null;

  return (
    <article
      className={`border rounded-xl my-3 transition-colors select-none ${
        isOpen
          ? 'bg-[var(--color-surface-card)] border-[var(--color-primary)]'
          : 'bg-[var(--color-surface-card)] border-[var(--color-hairline)] hover:border-[var(--color-primary)]'
      }`}
    >
      {/* Header Bar */}
      <header
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`question-content-${question.id}`}
        id={`question-header-${question.id}`}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.target !== e.currentTarget) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        className="p-5 md:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 rounded-xl transition-colors"
      >
        <div className="flex items-start gap-3.5 flex-1">
          {/* Completion Checkbox */}
          <button
            type="button"
            aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
            onClick={handleCompleteToggle}
            className="mt-1 text-[var(--color-muted)] hover:text-[var(--color-accent-teal)] cursor-pointer shrink-0 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-accent-teal)] focus-visible:outline-offset-2 rounded-full"
          >
            {completed ? (
              <CheckCircle2 size={20} className="text-[var(--color-accent-teal)]" />
            ) : (
              <Circle size={20} />
            )}
          </button>

          <div className="flex-1">
            {/* Meta tags: Question number, type badge, marks, revision star */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-[1.5px] text-[var(--color-muted)]">
                Q{String(index + 1).padStart(2, '0')}
              </span>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border tracking-normal ${getBadgeStyle(question.type)}`}>
                {qTypeBadgeLabel}
              </span>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[var(--color-canvas-parchment)] text-[var(--color-muted)]">
                {question.marks} Marks
              </span>
              {inRevision && (
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                  <Star size={11} className="fill-amber-600 text-amber-600" />
                  <span>उजळणी संच</span>
                </span>
              )}
            </div>

            {/* Question Text in Marathi */}
            <h3
              className={`text-lg md:text-xl font-semibold leading-snug tracking-normal ${
                completed ? 'line-through text-[var(--color-muted)]' : 'text-[var(--color-ink)]'
              }`}
            >
              {question.questionMarathi}
            </h3>
          </div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {/* Revision Deck Star Toggle */}
          <motion.button
            whileHover={{ y: -1.5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={ARCHIVAL_TRANSITIONS.tactile}
            onClick={handleRevisionToggle}
            aria-label="Toggle Revision Queue"
            title={inRevision ? 'उजळणी संचातून काढा' : 'उजळणी संचात जोडा'}
            className={`p-2 rounded-full border cursor-pointer transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
              inRevision
                ? 'bg-amber-100 text-amber-700 border-amber-300'
                : 'bg-[var(--color-canvas)] text-[var(--color-muted)] border-[var(--color-hairline)] hover:text-amber-600'
            }`}
          >
            <Star size={15} fill={inRevision ? 'currentColor' : 'none'} />
          </motion.button>

          {/* Bookmark Button */}
          <motion.button
            whileHover={{ y: -1.5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={ARCHIVAL_TRANSITIONS.tactile}
            onClick={handleBookmarkClick}
            aria-label="Bookmark question"
            className={`p-2 rounded-full border cursor-pointer transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
              bookmarked
                ? 'bg-[var(--color-accent-teal)] text-white border-[var(--color-accent-teal)]'
                : 'bg-[var(--color-canvas)] text-[var(--color-muted)] border-[var(--color-hairline)] hover:text-[var(--color-ink)]'
            }`}
          >
            <Bookmark size={15} fill={bookmarked ? 'currentColor' : 'none'} />
          </motion.button>

          {/* Copy Button */}
          <motion.button
            whileHover={{ y: -1.5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={ARCHIVAL_TRANSITIONS.tactile}
            onClick={handleCopy}
            aria-label="Copy question answer"
            className="p-2 rounded-full border bg-[var(--color-canvas)] text-[var(--color-muted)] border-[var(--color-hairline)] hover:text-[var(--color-ink)] cursor-pointer transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2"
          >
            {copied ? (
              <Check size={15} className="text-[var(--color-accent-teal)]" />
            ) : (
              <Copy size={15} />
            )}
          </motion.button>

          {/* Accordion Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={ARCHIVAL_TRANSITIONS.rotation}
            className="p-2 text-[var(--color-muted)]"
          >
            <ChevronDown size={18} />
          </motion.div>
        </div>
      </header>

      {/* Accordion Expandable Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={`question-content-${question.id}`}
            role="region"
            aria-labelledby={`question-header-${question.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 0.25, ease: 'easeOut' },
            }}
            style={{ willChange: 'height, opacity', transform: 'translateZ(0)' }}
            className="overflow-hidden border-t border-[var(--color-hairline)] motion-matra-safe-mask"
          >
            <div className="p-5 md:p-6 bg-[var(--color-canvas)] space-y-5">
              {/* Specialized MCQ Interactive Block */}
              {question.type === 'mcq' && question.options && (
                <div className="p-4 bg-[var(--color-canvas-parchment)] border border-[var(--color-hairline)] rounded-lg">
                  <div className="flex items-center justify-between mb-3 text-xs font-bold uppercase tracking-normal text-[var(--color-muted)]">
                    <div className="flex items-center gap-1.5">
                      <HelpCircle size={14} className="text-[var(--color-primary)]" />
                      <span>योग्य पर्याय निवडा (१ गुण)</span>
                    </div>
                    {selectedMcqOption === null && (
                      <span className="font-mono text-[11px] text-[var(--color-primary)] font-semibold">
                        (उत्तर पाहण्यापूर्वी पर्याय निवडा)
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {question.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === question.correctOptionIndex;
                      const isSelected = selectedMcqOption === optIdx;
                      let btnStyle =
                        'bg-[var(--color-canvas)] border-[var(--color-hairline)] text-[var(--color-body)]';

                      if (selectedMcqOption !== null) {
                        if (isCorrect) {
                          btnStyle =
                            'bg-[#e2edea] border-[var(--color-accent-teal)] text-[#1b4332] font-bold';
                        } else if (isSelected) {
                          btnStyle = 'bg-[#fdeeed] border-red-400 text-red-800';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => setSelectedMcqOption(optIdx)}
                          className={`p-3 text-left rounded-lg border text-sm flex items-center justify-between cursor-pointer transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${btnStyle}`}
                        >
                          <span>
                            <strong className="mr-2 font-mono">
                              ({String.fromCharCode(97 + optIdx)})
                            </strong>
                            {opt}
                          </span>
                          {selectedMcqOption !== null && isCorrect && (
                            <Check size={16} className="text-[var(--color-accent-teal)]" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {selectedMcqOption !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 rounded bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-xs text-[var(--color-body)]"
                    >
                      <strong className="text-[var(--color-ink)] mr-1">स्पष्टीकरण:</strong>
                      {selectedMcqOption === question.correctOptionIndex ? (
                        <span className="text-[#1b4332] font-medium">
                          बरोबर उत्तर! पर्याय ({String.fromCharCode(97 + (question.correctOptionIndex ?? 0))}) हा अचूक संदर्भ आहे.
                        </span>
                      ) : (
                        <span className="text-red-800 font-medium">
                          अचूक पर्याय ({String.fromCharCode(97 + (question.correctOptionIndex ?? 0))}) आहे. इतर पर्याय अन्य कालखंड किंवा विचारवंतांशी संबंधित आहेत.
                        </span>
                      )}
                    </motion.div>
                  )}
                </div>
              )}

              {/* Specialized Wrong Pair Interactive Block */}
              {question.type === 'wrong_pair' && question.wrongPairData && (
                <div className="p-4 bg-[var(--color-canvas-parchment)] border border-[var(--color-hairline)] rounded-lg space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-normal text-[var(--color-muted)]">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle size={14} className="text-[var(--color-accent-amber)]" />
                      <span>चुकीची जोडी ओळखा व दुरुस्त करा (१ गुण)</span>
                    </div>
                    <span className="font-mono text-[11px] text-[var(--color-muted)]">
                      (संशयास्पद जोडीवर टॅप करा)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {question.wrongPairData.pairs.map((pair, pIdx) => {
                      const isTargetWrong =
                        question.wrongPairData?.incorrectPair.includes(pair.term);
                      const isTapped = selectedWrongPairIdx === pIdx;

                      return (
                        <button
                          key={pIdx}
                          onClick={() => setSelectedWrongPairIdx(pIdx)}
                          className={`p-3 text-left bg-[var(--color-canvas)] border rounded-lg text-xs flex flex-col cursor-pointer transition-colors ${
                            isTapped
                              ? isTargetWrong
                                ? 'border-[#c84628] bg-[#fdeeed]'
                                : 'border-amber-400 bg-amber-50'
                              : 'border-[var(--color-hairline-soft)] hover:border-[var(--color-primary)]'
                          }`}
                        >
                          <span
                            className={`font-bold ${
                              isTapped && isTargetWrong
                                ? 'line-through text-red-700'
                                : 'text-[var(--color-ink)]'
                            }`}
                          >
                            {pair.term}
                          </span>
                          <span className="text-[var(--color-muted)] mt-0.5">{pair.explanation}</span>
                          {isTapped && isTargetWrong && (
                            <span className="mt-1 text-[11px] font-bold text-red-700">
                              ✓ अचूक ओळखले! ही जोडी चुकीची आहे.
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-[#fdeeed] border border-red-300 rounded text-xs text-red-900">
                    <strong>चुकीची जोडी:</strong> {question.wrongPairData.incorrectPair}
                  </div>
                  <div className="p-3 bg-[#e2edea] border border-[var(--color-accent-teal)] rounded text-xs text-[#1b4332]">
                    <strong>योग्य दुरुस्ती:</strong> {question.wrongPairData.correctedPair}
                  </div>
                </div>
              )}

              {/* Answer Presentation Mode Header */}
              <div className="flex items-center justify-between border-b border-[var(--color-hairline)] pb-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveAnswerTab('points')}
                    className={`px-3 py-1.5 text-xs font-bold uppercase tracking-normal rounded-full cursor-pointer transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
                      activeAnswerTab === 'points'
                        ? 'bg-[var(--color-surface-cream-strong)] text-[var(--color-ink)]'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    बोर्ड उत्तर रचना ({question.marks} गुण)
                  </button>
                  {question.answerMarathiDetailed && (
                    <button
                      onClick={() => setActiveAnswerTab('detailed')}
                      className={`px-3 py-1.5 text-xs font-bold uppercase tracking-normal rounded-full cursor-pointer transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
                        activeAnswerTab === 'detailed'
                          ? 'bg-[var(--color-surface-cream-strong)] text-[var(--color-ink)]'
                          : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                      }`}
                    >
                      सविस्तर संदर्भ व विश्लेषण
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-muted)] font-mono">
                  <Lightbulb size={13} className="text-[var(--color-accent-amber)]" />
                  <span className="uppercase font-bold tracking-wider">
                    {studyMode === 'read' ? 'वाचन पद्धती [१]' : studyMode === 'recall' ? 'स्मरण साखळी [२]' : '२-टप्पा सराव [३]'}
                  </span>
                </div>
              </div>

              {/* 3-Mode Active Recall Engine Rendering with SSC Board Rubric Framing */}
              {activeAnswerTab === 'points' && (
                <div className="space-y-4 pl-1">
                  {/* Band A: प्रस्तावना (Historical Background Opening) */}
                  {openingPoint && (
                    <div className="p-3.5 rounded-lg bg-[var(--color-canvas)] border-l-3 border-l-[var(--color-accent-copper)] border border-[var(--color-hairline-soft)]">
                      <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold uppercase font-mono text-[var(--color-accent-copper)]">
                        <Scroll size={12} />
                        <span>प्रस्तावना • ऐतिहासिक संदर्भ (½ गुण)</span>
                      </div>
                      <p className="text-[16px] leading-[1.65] text-[var(--color-body)] italic">
                        {openingPoint}
                      </p>
                    </div>
                  )}

                  {/* Band B: मुख्य मुद्दे (Causal Chain / स्मरण साखळी) */}
                  <div className="relative space-y-3">
                    {/* Vertical connecting thread between hooks */}
                    {corePoints.length > 1 && (
                      <div className="absolute left-[22px] top-6 bottom-6 w-[1px] border-l border-dashed border-[var(--color-accent-copper)]/40 pointer-events-none -z-0" />
                    )}

                    {/* Mode 1: वाचन (Read Mode) */}
                    {studyMode === 'read' && (
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        variants={ARCHIVAL_STAGGER_VARIANTS.pointsList}
                        className="space-y-3"
                      >
                        {corePoints.map((rawPoint, ptIdx) => {
                          const { hook, explanation } = parsePoint(rawPoint, ptIdx);
                          return (
                            <motion.li
                              key={ptIdx}
                              variants={ARCHIVAL_STAGGER_VARIANTS.pointItem}
                              className="relative z-10 flex items-start gap-3 p-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline-soft)]"
                            >
                              <span className="w-5 h-5 rounded-full bg-[var(--color-surface-cream-strong)] text-[var(--color-primary)] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-none">
                                {ptIdx + 1}
                              </span>
                              <div className="flex-1 text-[17px] leading-[1.65] tracking-normal text-[var(--color-body)]">
                                <strong className="text-[var(--color-ink)] font-bold mr-1">
                                  {hook}:
                                </strong>
                                <span>{explanation}</span>
                              </div>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    )}

                    {/* Mode 2: स्मरण (Hook Recall Mode) */}
                    {studyMode === 'recall' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-[var(--color-muted)] pb-1">
                          <span>मेमरी हुक पाहून स्पष्टीकरण मनात आठवा:</span>
                          <button
                            onClick={() => {
                              const nodeIds = corePoints.map((_, i) => `${question.id}-pt-${i}`);
                              revealAllRecallNodes(nodeIds);
                            }}
                            className="font-bold text-[var(--color-primary)] hover:underline cursor-pointer"
                          >
                            सर्व स्पष्टीकरण दाखवा
                          </button>
                        </div>

                        {corePoints.map((rawPoint, ptIdx) => {
                          const { hook, explanation } = parsePoint(rawPoint, ptIdx);
                          const nodeId = `${question.id}-pt-${ptIdx}`;
                          const isRevealed = revealedRecallNodes.has(nodeId);

                          return (
                            <div
                              key={ptIdx}
                              onClick={() => toggleRecallNode(nodeId)}
                              className={`relative z-10 p-3.5 rounded-lg border cursor-pointer transition-colors ${
                                isRevealed
                                  ? 'bg-[var(--color-canvas)] border-[var(--color-primary)]'
                                  : 'bg-[var(--color-surface-card)] border-[var(--color-hairline)] hover:border-[var(--color-primary)]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                  <span className="w-5 h-5 rounded-full bg-[var(--color-primary)] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                    {ptIdx + 1}
                                  </span>
                                  <span className="text-[17px] font-bold text-[var(--color-ink)]">
                                    {hook}
                                  </span>
                                </div>
                                <span className="text-xs font-bold text-[var(--color-primary)] flex items-center gap-1">
                                  {isRevealed ? <EyeOff size={14} /> : <Eye size={14} />}
                                  <span>{isRevealed ? 'लपवा' : 'तपासा'}</span>
                                </span>
                              </div>

                              <AnimatePresence>
                                {isRevealed && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-3 pt-3 border-t border-[var(--color-hairline)] text-[16px] leading-relaxed text-[var(--color-body)]"
                                  >
                                    {explanation}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Mode 3: २-टप्पा सराव (Two-Stage Semantic Cloze Mode) */}
                    {studyMode === 'cloze' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-[var(--color-muted)] pb-1">
                          <span>१ टॅप = पहिले अक्षर हिंट | २ टॅप = पूर्ण उत्तर:</span>
                          <button
                            onClick={() => setClozeStages({})}
                            className="flex items-center gap-1 font-bold text-[var(--color-muted)] hover:text-[var(--color-ink)] cursor-pointer"
                          >
                            <RotateCcw size={12} />
                            <span>सर्व मास्क रीसेट</span>
                          </button>
                        </div>

                        {corePoints.map((rawPoint, ptIdx) => {
                          const { hook, explanation } = parsePoint(rawPoint, ptIdx);
                          const tokens = explanation.split(HISTORICAL_KEYWORDS_REGEX);

                          return (
                            <div
                              key={ptIdx}
                              className="relative z-10 p-3.5 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-hairline)] flex items-start gap-3"
                            >
                              <span className="w-5 h-5 rounded-full bg-[var(--color-surface-cream-strong)] text-[var(--color-primary)] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                {ptIdx + 1}
                              </span>
                              <div className="flex-1 text-[17px] leading-[1.85] text-[var(--color-body)]">
                                <strong className="text-[var(--color-ink)] font-bold mr-1">
                                  {hook}:
                                </strong>
                                {tokens.map((token, tIdx) => {
                                  const isKeyword = HISTORICAL_KEYWORDS_REGEX.test(token);
                                  HISTORICAL_KEYWORDS_REGEX.lastIndex = 0;
                                  if (!isKeyword) {
                                    return <span key={tIdx}>{token}</span>;
                                  }

                                  const tokenKey = `${question.id}-${ptIdx}-${token}`;
                                  const stage = clozeStages[tokenKey] || 0; // 0 = masked, 1 = first akshara hint, 2 = fully revealed
                                  const categoryLabel = getKeywordCategory(token);
                                  const { aksharaCountLabel } = getMarathiClozeHint(token);

                                  if (stage === 2) {
                                    // Stage 2: Fully Revealed
                                    return (
                                      <button
                                        type="button"
                                        key={tIdx}
                                        onClick={() => handleClozeClick(tokenKey)}
                                        className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded font-marathi-serif font-bold text-xs sm:text-sm bg-[#0E1A16] text-[#3EA890] border border-[#3EA890]/60 hover:bg-[#13241F] cursor-pointer transition-colors"
                                        title="टॅप करून पुन्हा मास्क करा"
                                        style={{ boxShadow: 'none' }}
                                      >
                                        <span>{token}</span>
                                      </button>
                                    );
                                  } else if (stage === 1) {
                                    // Stage 1: First Akshara Phonological Hint
                                    return (
                                      <button
                                        type="button"
                                        key={tIdx}
                                        onClick={() => handleClozeClick(tokenKey)}
                                        className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded bg-[#1F1912] border border-[#E8A55A] text-xs font-bold text-[#F5D485] hover:bg-[#282016] cursor-pointer transition-colors"
                                        title="पूर्ण उत्तर पाहण्यासाठी पुन्हा टॅप करा"
                                        style={{ boxShadow: 'none' }}
                                      >
                                        <span>[ {aksharaCountLabel} ]</span>
                                      </button>
                                    );
                                  } else {
                                    // Stage 0: Semantic Category Mask
                                    return (
                                      <button
                                        type="button"
                                        key={tIdx}
                                        onClick={() => handleClozeClick(tokenKey)}
                                        className="inline-flex items-center px-2 py-0.5 mx-0.5 rounded bg-[#0E0E14] border border-dashed border-[#C5A059]/45 text-xs font-mono font-bold text-[#C5A059] hover:bg-[#16161F] hover:border-[#C5A059] cursor-pointer transition-colors"
                                        title="पहिले अक्षर हिंट पाहण्यासाठी टॅप करा"
                                        style={{ boxShadow: 'none' }}
                                      >
                                        <span>[ {categoryLabel} ]</span>
                                      </button>
                                    );
                                  }
                                })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Band C: निष्कर्ष (Concluding Synthesis / समारोप) */}
                  {concludingPoint && (
                    <div className="p-3.5 rounded-lg bg-[var(--color-surface-card)] border-l-3 border-l-[var(--color-primary)] border border-[var(--color-hairline)]">
                      <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold uppercase font-mono text-[var(--color-primary)]">
                        <Check size={13} />
                        <span>निष्कर्ष • समारोप व गुण विभागणी (½ गुण)</span>
                      </div>
                      <p className="text-[16px] leading-[1.65] font-medium text-[var(--color-ink)]">
                        {concludingPoint}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Detailed Context */}
              {activeAnswerTab === 'detailed' && question.answerMarathiDetailed && (
                <div className="p-4 bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-lg">
                  <p className="text-[17px] leading-[1.65] tracking-normal text-[var(--color-body)]">
                    {question.answerMarathiDetailed}
                  </p>
                </div>
              )}

              {/* Confidence-Grading Footer Bar */}
              <div className="pt-3 border-t border-[var(--color-hairline)] flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-[var(--color-muted)] font-mono">
                  अभ्यास मूल्यमापन (Confidence Rating):
                </span>

                <div className="flex items-center gap-2">
                  {/* Mark for Revision Deck */}
                  <button
                    onClick={handleRevisionToggle}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold cursor-pointer transition-colors ${
                      inRevision
                        ? 'bg-amber-100 text-amber-800 border-amber-300'
                        : 'bg-[var(--color-canvas)] text-[var(--color-muted)] border-[var(--color-hairline)] hover:border-amber-400 hover:text-amber-800'
                    }`}
                  >
                    <Star size={13} className={inRevision ? 'fill-amber-600 text-amber-600' : ''} />
                    <span>{inRevision ? '★ उजळणी संचात जोडले' : '★ उजळणीसाठी ठेवा'}</span>
                  </button>

                  {/* Mark as Mastered */}
                  <button
                    onClick={handleCompleteToggle}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold cursor-pointer transition-colors ${
                      completed
                        ? 'bg-[#e2edea] text-[#1b4332] border-[var(--color-accent-teal)]'
                        : 'bg-[var(--color-canvas)] text-[var(--color-muted)] border-[var(--color-hairline)] hover:border-[var(--color-accent-teal)] hover:text-[#1b4332]'
                    }`}
                  >
                    <CheckCircle2 size={13} className={completed ? 'text-[#1b4332]' : ''} />
                    <span>{completed ? '✓ पक्के झाले (Mastered)' : '✓ सराव पूर्ण'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default QuestionAccordion;
