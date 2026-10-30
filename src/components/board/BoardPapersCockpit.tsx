import React, { useState, useMemo } from 'react';
import {
  Filter,
  Award,
  Layers,
  Clock,
  ArrowRight,
  BookOpen,
  Info,
  Calendar,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { boardPapersData } from '../../data/boardPapersData';
import type { BoardSubject } from '../../types/boardPapers';
import { ShivmudraEmblem } from '../brand/ShivmudraEmblem';
import { BoardYearTabs } from './BoardYearTabs';
import { BoardQuestionCard } from './BoardQuestionCard';
import { CovidResolutionView } from './CovidResolutionView';
import { useStudyStore } from '../../stores/useStudyStore';

type QuestionTypeFilter =
  | 'all'
  | 'mcq'
  | 'wrong_pair'
  | 'concept_map'
  | 'short_notes'
  | 'give_reasons'
  | 'passage'
  | 'detailed';

/**
 * 10-Year MSBSHSE SSC Board Question Paper Cockpit (बोर्ड प्रश्नपत्रिका दालन २०१६–२०२५)
 * Provides official archival papers across 5 curriculum eras,
 * complete with tripartite MSBSHSE rubrics, COVID GR resolution,
 * and empirical recurring question frequency markers.
 * Strictly Zero-Shadow Law compliant.
 */
export const BoardPapersCockpit: React.FC = () => {
  const { activeBoardYear, setActiveBoardYear, setActiveViewTab, setActiveChapterId, setSelectedChapterId } =
    useStudyStore();

  const [subjectFilter, setSubjectFilter] = useState<'all' | BoardSubject>('all');
  const [typeFilter, setTypeFilter] = useState<QuestionTypeFilter>('all');
  const [recurringOnly, setRecurringOnly] = useState<boolean>(false);
  const [areInstructionsExpanded, setAreInstructionsExpanded] = useState<boolean>(false);

  // Active year archive object
  const currentArchive = useMemo(() => {
    return boardPapersData.find((a) => a.year === activeBoardYear) || boardPapersData[0];
  }, [activeBoardYear]);

  // Filter questions based on subject, type, and recurring frequency
  const filteredQuestions = useMemo(() => {
    if (!currentArchive || !currentArchive.questions) return [];

    return currentArchive.questions.filter((q) => {
      // 1. Subject Filter
      if (subjectFilter !== 'all' && q.subject !== subjectFilter) {
        return false;
      }

      // 2. Question Type Filter
      if (typeFilter !== 'all') {
        if (typeFilter === 'mcq' && q.type !== 'mcq_1m' && q.type !== 'match_columns_1m') {
          return false;
        }
        if (typeFilter === 'wrong_pair' && q.type !== 'wrong_pair_1m') {
          return false;
        }
        if (typeFilter === 'concept_map' && q.type !== 'concept_map_2m') {
          return false;
        }
        if (typeFilter === 'short_notes' && q.type !== 'short_notes_2m') {
          return false;
        }
        if (
          typeFilter === 'give_reasons' &&
          q.type !== 'give_reasons_2m' &&
          q.type !== 'true_false_reasons_2m'
        ) {
          return false;
        }
        if (typeFilter === 'passage' && q.type !== 'passage_analysis_4m') {
          return false;
        }
        if (
          typeFilter === 'detailed' &&
          q.type !== 'detailed_answer_3m' &&
          q.type !== 'detailed_answer_4m'
        ) {
          return false;
        }
      }

      // 3. Recurring Questions Only Filter
      if (recurringOnly && !q.frequencyMarker) {
        return false;
      }

      return true;
    });
  }, [currentArchive, subjectFilter, typeFilter, recurringOnly]);

  // Calculate total marks of current filtered set
  const totalFilteredMarks = useMemo(() => {
    return filteredQuestions.reduce((sum, q) => sum + q.marks, 0);
  }, [filteredQuestions]);

  const handleNavigateToChapter = (chapterId: string) => {
    setActiveViewTab('chapters');
    setActiveChapterId(chapterId);
    setSelectedChapterId(chapterId);
    setTimeout(() => {
      const el = document.getElementById('swadhay-workspace');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 w-full animate-fadeIn">
      {/* 1. Archival Sovereign Header */}
      <div className="bg-[#121218] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[rgba(255,255,255,0.08)]">
          <div className="flex items-center gap-4">
            <ShivmudraEmblem size={52} />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-serif italic text-xs tracking-wider text-[#C5A059]">
                  प्रतिपच्चंद्रलेखेव वर्धिष्णुर्विश्ववंदिता शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते
                </span>
              </div>
              <h1 className="font-marathi-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FDFCFB] tracking-tight leading-tight">
                बोर्ड प्रश्नपत्रिका दालन (२०१६–२०२५)
              </h1>
              <p className="font-marathi-serif text-xs sm:text-sm text-[#A8A29E] mt-1">
                महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ (MSBSHSE) SSC अधिकृत प्रश्नपत्रिका व गुणदान योजना
              </p>
            </div>
          </div>

          {/* Quick jump to Chapter Swadhay */}
          <button
            type="button"
            onClick={() => setActiveViewTab('chapters')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A24] hover:bg-[#222230] text-[#C5A059] border border-[#C5A059]/30 text-xs font-semibold cursor-pointer transition-colors self-start md:self-auto shrink-0"
          >
            <BookOpen size={14} />
            <span>इतिहास स्वाध्याय दालनाकडे जा</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 2. Archival Telemetry Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="p-3.5 rounded-xl bg-[#0E0E14] border border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E887F] block mb-0.5">
              संग्रहित परीक्षा वर्षे
            </span>
            <div className="font-mono text-lg font-bold text-[#FDFCFB]">
              १० वर्षे <span className="text-xs text-[#C5A059] font-normal">(२०१६–२०२५)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0E0E14] border border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E887F] block mb-0.5">
              अभ्यासक्रम पर्व
            </span>
            <div className="font-mono text-lg font-bold text-[#E8A55A]">
              ५ पर्व <span className="text-xs text-[#A8A29E] font-normal">(कृतीपत्रिका व GR)</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0E0E14] border border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E887F] block mb-0.5">
              अधिकृत गुणदान मॉडेल
            </span>
            <div className="font-marathi-serif text-sm font-bold text-[#3EA890] truncate">
              प्रस्तावना • मुख्य • निष्कर्ष
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0E0E14] border border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8E887F] block mb-0.5">
              हमखास विचारलेले प्रश्न
            </span>
            <div className="font-mono text-lg font-bold text-[#C5A059] flex items-center gap-1">
              <span>★★★</span>
              <span className="text-xs text-[#FDFCFB] font-normal">वारंवारता</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 10-Year Selector Tab Strip */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-xs font-mono uppercase tracking-wider text-[#A8A29E] flex items-center gap-1.5 font-semibold">
            <Calendar size={13} className="text-[#C5A059]" />
            बोर्ड परीक्षा वर्ष निवडा (Select Exam Year)
          </span>
          <span className="text-[11px] font-mono text-[#8E887F]">
            निवडलेले वर्ष: {activeBoardYear}
          </span>
        </div>

        <BoardYearTabs
          selectedYear={activeBoardYear}
          onSelectYear={(year) => setActiveBoardYear(year)}
        />
      </div>

      {/* 4. Active Year Metadata & Official Instructions Banner */}
      <div className="bg-[#121218] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[rgba(255,255,255,0.08)]">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-marathi-serif text-xl font-bold text-[#FDFCFB]">
                {currentArchive.sessionTitleMarathi}
              </h2>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-[#1A1A24] text-[#C5A059] border border-[#C5A059]/25">
                {currentArchive.curriculumEra.replace('_', ' ')}
              </span>
            </div>
            <p className="font-marathi-serif text-xs text-[#8E887F] mt-0.5">
              स्त्रोत: {currentArchive.officialSourceCitation}
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.08)]">
              <Layers size={13} className="text-[#C5A059]" />
              <span className="text-[#FDFCFB] font-bold">{currentArchive.totalMarks} गुण</span>
              <span className="text-[#8E887F]">
                ({currentArchive.historyMarks}H + {currentArchive.politicalScienceMarks}PS)
              </span>
            </div>

            {currentArchive.durationMinutes > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.08)]">
                <Clock size={13} className="text-[#3EA890]" />
                <span className="text-[#FDFCFB]">{currentArchive.durationMinutes} मिनिटे</span>
              </div>
            )}
          </div>
        </div>

        {/* Board Instructions Accordion */}
        {currentArchive.instructionsMarathi && currentArchive.instructionsMarathi.length > 0 && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => setAreInstructionsExpanded((prev) => !prev)}
              className="flex items-center gap-1.5 text-xs text-[#C5A059] hover:underline cursor-pointer font-marathi-serif"
            >
              <Info size={13} />
              <span>
                {areInstructionsExpanded
                  ? 'बोर्ड अधिकृत सूचना लपवा'
                  : 'बोर्ड प्रश्नपत्रिकेतील अधिकृत सूचना पहा'}
              </span>
              {areInstructionsExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
            </button>

            {areInstructionsExpanded && (
              <ul className="mt-2.5 pl-5 list-disc space-y-1 text-xs font-marathi-serif text-[#C7C0B5] bg-[#0E0E14] p-3 rounded-lg border border-[rgba(255,255,255,0.06)]">
                {currentArchive.instructionsMarathi.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* 5. Main Year View Content: COVID Resolution vs Standard Paper Questions */}
      {activeBoardYear === 2021 ? (
        <CovidResolutionView covidResolution={currentArchive.covidResolution} />
      ) : (
        <>
          {/* Filters Bar */}
          <div className="bg-[#121218] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 mb-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Subject Tabs */}
              <div className="flex items-center gap-1 bg-[#0E0E14] p-1 rounded-lg border border-[rgba(255,255,255,0.08)]">
                <button
                  type="button"
                  onClick={() => setSubjectFilter('all')}
                  className={`px-3 py-1 rounded-md text-xs font-marathi-serif font-medium cursor-pointer transition-colors ${
                    subjectFilter === 'all'
                      ? 'bg-[#C5A059] text-[#070709] font-bold'
                      : 'text-[#A8A29E] hover:text-[#FDFCFB]'
                  }`}
                >
                  सर्व विषय ({currentArchive.questions.length})
                </button>
                <button
                  type="button"
                  onClick={() => setSubjectFilter('history')}
                  className={`px-3 py-1 rounded-md text-xs font-marathi-serif font-medium cursor-pointer transition-colors ${
                    subjectFilter === 'history'
                      ? 'bg-[#D95D39] text-white font-bold'
                      : 'text-[#A8A29E] hover:text-[#FDFCFB]'
                  }`}
                >
                  इतिहास ({currentArchive.historyMarks} गुण)
                </button>
                <button
                  type="button"
                  onClick={() => setSubjectFilter('political_science')}
                  className={`px-3 py-1 rounded-md text-xs font-marathi-serif font-medium cursor-pointer transition-colors ${
                    subjectFilter === 'political_science'
                      ? 'bg-[#3EA890] text-white font-bold'
                      : 'text-[#A8A29E] hover:text-[#FDFCFB]'
                  }`}
                >
                  राज्यशास्त्र ({currentArchive.politicalScienceMarks} गुण)
                </button>
              </div>

              {/* Recurring Questions Toggle Button */}
              <button
                type="button"
                onClick={() => setRecurringOnly((prev) => !prev)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-marathi-serif font-medium cursor-pointer transition-colors border ${
                  recurringOnly
                    ? 'bg-[#1A160F] border-[#C5A059] text-[#C5A059]'
                    : 'bg-[#0E0E14] border-[rgba(255,255,255,0.08)] text-[#A8A29E] hover:text-[#FDFCFB]'
                }`}
              >
                <Award size={14} className={recurringOnly ? 'text-[#C5A059]' : 'text-[#8E887F]'} />
                <span>केवळ हमखास प्रश्न (★★★ / ★★)</span>
              </button>
            </div>

            {/* Question Type Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap pt-2 border-t border-[rgba(255,255,255,0.06)] text-xs">
              <span className="text-[10px] font-mono uppercase text-[#8E887F] mr-1 flex items-center gap-1">
                <Filter size={11} />
                प्रश्न प्रकार:
              </span>

              {[
                { id: 'all', label: 'सर्व प्रश्न' },
                { id: 'mcq', label: 'पर्याय निवडा (१ गुण)' },
                { id: 'wrong_pair', label: 'चुकीची जोडी (१ गुण)' },
                { id: 'concept_map', label: 'संकल्पनाचित्र (२ गुण)' },
                { id: 'short_notes', label: 'थोडक्यात टिपा (२ गुण)' },
                { id: 'give_reasons', label: 'सकारण स्पष्ट करा (२ गुण)' },
                { id: 'passage', label: 'उतारा वाचन (४ गुण)' },
                { id: 'detailed', label: 'सविस्तर उत्तरे (३/४ गुण)' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTypeFilter(t.id as QuestionTypeFilter)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-marathi-serif cursor-pointer transition-colors ${
                    typeFilter === t.id
                      ? 'bg-[#1A1A24] border border-[#C5A059]/40 text-[#C5A059] font-semibold'
                      : 'bg-[#0E0E14] text-[#A8A29E] hover:text-[#FDFCFB] border border-transparent'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result Count and Marks Summary */}
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-mono text-[#8E887F]">
              दर्शविलेले प्रश्न: <strong className="text-[#FDFCFB]">{filteredQuestions.length}</strong> / {currentArchive.questions.length}
            </span>
            <span className="text-xs font-mono text-[#C5A059]">
              एकूण निवडलेले गुण: <strong>{totalFilteredMarks} गुण</strong>
            </span>
          </div>

          {/* Question Cards List */}
          {filteredQuestions.length === 0 ? (
            <div className="py-16 px-6 text-center bg-[#121218] border border-[rgba(255,255,255,0.08)] rounded-xl text-sm text-[#A8A29E] font-marathi-serif">
              निवडलेल्या निकषांनुसार कोणतेही प्रश्न आढळले नाहीत. कृपया फिल्टर बदला.
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((question) => (
                <BoardQuestionCard
                  key={question.id}
                  question={question}
                  onNavigateToChapter={handleNavigateToChapter}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BoardPapersCockpit;
