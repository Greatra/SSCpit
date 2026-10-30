import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, BookmarkCheck, Scale, Key } from 'lucide-react';
import type { MSBSHSERubric } from '../../types/boardPapers';

interface BoardRubricDrawerProps {
  rubric?: MSBSHSERubric;
  directAnswer?: string;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Tripartite MSBSHSE Model Answer & Marking Scheme Drawer (आदर्श उत्तर व गुणदान योजना)
 * Band A: प्रस्तावना (½ गुण)
 * Band B: मुख्य मुद्दे / स्मरण साखळी (१ ते २ गुण)
 * Band C: निष्कर्ष / ऐतिहासिक महत्त्व (½ गुण)
 * Scoring Rule Box: MSBSHSE परीक्षक गुणदान नियम
 * Strictly Zero-Shadow Law compliant.
 */
export const BoardRubricDrawer: React.FC<BoardRubricDrawerProps> = ({
  rubric,
  directAnswer,
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!rubric && !directAnswer) {
    return null;
  }

  return (
    <div className={`mt-3 border-t border-[rgba(255,255,255,0.08)] pt-3 ${className}`}>
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.08)] hover:border-[#C5A059]/50 transition-colors text-xs cursor-pointer group"
      >
        <div className="flex items-center gap-2 text-[#C5A059] font-medium font-marathi-serif">
          <BookmarkCheck size={14} className="shrink-0 text-[#C5A059]" />
          <span className="text-[13px] tracking-normal">
            आदर्श उत्तर व गुणदान योजना (MSBSHSE Model Answer & Rubric)
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-[#A8A29E] font-mono group-hover:text-[#FDFCFB]">
          <span>{isOpen ? 'बंद करा' : 'पहा'}</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>

      {/* Expanded Rubric Content */}
      {isOpen && (
        <div className="mt-3 p-4 rounded-xl bg-[#0A0A0E] border border-[#C5A059]/25 space-y-4">
          {/* Direct Answer (for 1-mark or concise questions) */}
          {directAnswer && (
            <div className="p-3 rounded-lg bg-[#121218] border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#3EA890] uppercase tracking-wider mb-1">
                <CheckCircle2 size={13} />
                <span>अचूक उत्तर (Direct Answer)</span>
              </div>
              <p className="font-marathi-serif text-sm text-[#FDFCFB] leading-relaxed">
                {directAnswer}
              </p>
            </div>
          )}

          {rubric && (
            <>
              {/* Band A: प्रस्तावना (½ Mark) */}
              {rubric.prastavana && (
                <div className="p-3.5 rounded-lg bg-[#121218] border-l-2 border-l-[#C5A059] border-t border-r border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C5A059] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      Band A: प्रस्तावना व ऐतिहासिक संदर्भ
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#1A1A24] text-[#C5A059] border border-[#C5A059]/20">
                      ½ गुण
                    </span>
                  </div>
                  <p className="font-marathi-serif text-[13.5px] leading-relaxed text-[#EBE5DC]">
                    {rubric.prastavana}
                  </p>
                </div>
              )}

              {/* Band B: मुख्य मुद्दे (१ ते २ Marks) */}
              {rubric.mukhyaMudde && rubric.mukhyaMudde.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D95D39] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D95D39]" />
                      Band B: मुख्य विश्लेषणात्मक मुद्दे (स्मरण साखळी)
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#1A1A24] text-[#D95D39] border border-[#D95D39]/20">
                      १ ते २ गुण
                    </span>
                  </div>

                  <div className="space-y-2">
                    {rubric.mukhyaMudde.map((mudda, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-[#121218] border border-[rgba(255,255,255,0.08)]"
                      >
                        {mudda.hookMarathi && (
                          <div className="font-marathi-serif font-bold text-sm text-[#FDFCFB] mb-1 flex items-start gap-2">
                            <span className="text-[#D95D39] font-mono font-semibold text-xs mt-0.5">
                              {idx + 1}.
                            </span>
                            <span>{mudda.hookMarathi}</span>
                          </div>
                        )}
                        <p className="font-marathi-serif text-[13px] leading-relaxed text-[#C7C0B5] pl-4">
                          {mudda.elaborationMarathi}
                        </p>

                        {/* High-Value Keywords Badges for Active Recall */}
                        {mudda.highValueKeywords && mudda.highValueKeywords.length > 0 && (
                          <div className="mt-2 pl-4 flex items-center gap-1.5 flex-wrap">
                            <Key size={11} className="text-[#A8A29E]" />
                            <span className="text-[10px] font-mono uppercase text-[#8E887F]">
                              मूल्य शब्द:
                            </span>
                            {mudda.highValueKeywords.map((kw, kwIdx) => (
                              <span
                                key={kwIdx}
                                className="px-1.5 py-0.5 rounded text-[10px] font-marathi-serif bg-[#181822] text-[#E8A55A] border border-[rgba(255,255,255,0.06)]"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Band C: निष्कर्ष / ऐतिहासिक महत्त्व (½ Mark) */}
              {rubric.nishkarsha && (
                <div className="p-3.5 rounded-lg bg-[#121218] border-l-2 border-l-[#3EA890] border-t border-r border-b border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3EA890] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3EA890]" />
                      Band C: निष्कर्ष व ऐतिहासिक महत्त्व
                    </span>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#1A1A24] text-[#3EA890] border border-[#3EA890]/20">
                      ½ गुण
                    </span>
                  </div>
                  <p className="font-marathi-serif text-[13.5px] leading-relaxed text-[#EBE5DC]">
                    {rubric.nishkarsha}
                  </p>
                </div>
              )}

              {/* MSBSHSE Examiner Scoring Rule */}
              {rubric.scoringRuleMarathi && (
                <div className="p-3 rounded-lg bg-[#161410] border border-[#C5A059]/30 flex items-start gap-2.5">
                  <Scale size={15} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#C5A059] block mb-0.5">
                      MSBSHSE अधिकृत गुणदान नियम (Scoring Formula)
                    </span>
                    <p className="font-marathi-serif text-xs text-[#EBE5DC] leading-normal">
                      {rubric.scoringRuleMarathi}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BoardRubricDrawer;
