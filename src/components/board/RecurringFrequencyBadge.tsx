import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp, History } from 'lucide-react';
import type { FrequencyMarker } from '../../types/boardPapers';

interface RecurringFrequencyBadgeProps {
  frequencyMarker: FrequencyMarker;
  className?: string;
}

/**
 * Gold Star Recurrence Telemetry Badge (वारंवार विचारलेला हमखास प्रश्न)
 * Displays MSBSHSE 10-year recurring frequency with ★★★, ★★, or ★ stars,
 * years appeared, and authentic trend analysis.
 * Strictly Zero-Shadow Law compliant.
 */
export const RecurringFrequencyBadge: React.FC<RecurringFrequencyBadgeProps> = ({
  frequencyMarker,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { stars, recurrenceCount, yearsAppeared, trendAnalysisMarathi } = frequencyMarker;

  return (
    <div className={`inline-flex flex-col relative select-none ${className}`}>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A160F] border border-[#C5A059]/40 hover:border-[#C5A059] transition-colors cursor-pointer text-xs"
        title="वारंवार विचारलेला बोर्ड प्रश्न — कल व विश्लेषण पाहण्यासाठी क्लिक करा"
      >
        <Award size={13} className="text-[#C5A059] shrink-0" />
        <span className="font-mono font-bold tracking-wider text-[#E8A55A]">
          {stars}
        </span>
        <span className="font-marathi-serif font-medium text-[11px] text-[#FDFCFB]">
          वारंवार विचारलेला ({recurrenceCount} वर्षे)
        </span>
        {isExpanded ? (
          <ChevronUp size={12} className="text-[#C5A059] shrink-0 ml-0.5" />
        ) : (
          <ChevronDown size={12} className="text-[#A8A29E] shrink-0 ml-0.5" />
        )}
      </button>

      {/* Expandable Trend & Recurrence Analysis Box */}
      {isExpanded && (
        <div className="mt-2 p-3 rounded-lg bg-[#0E0E14] border border-[#C5A059]/30 text-xs text-[#FDFCFB] space-y-2 z-10 max-w-sm">
          <div className="flex items-center gap-1.5 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider">
            <History size={12} />
            <span>MSBSHSE प्रश्न कल विश्लेषण</span>
          </div>

          <p className="font-marathi-serif text-xs leading-relaxed text-[#EBE5DC]">
            {trendAnalysisMarathi}
          </p>

          <div className="pt-2 border-t border-[rgba(255,255,255,0.08)] flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] uppercase font-mono text-[#A8A29E]">
              परीक्षेतील उपस्थिती:
            </span>
            {yearsAppeared.map((yr) => (
              <span
                key={yr}
                className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#1A1A24] text-[#C5A059] border border-[#C5A059]/20"
              >
                {yr}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurringFrequencyBadge;
