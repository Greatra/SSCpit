import React from 'react';
import type { ExamYear } from '../../types/boardPapers';

interface BoardYearTabsProps {
  selectedYear: ExamYear;
  onSelectYear: (year: ExamYear) => void;
  className?: string;
}

const ALL_YEARS: ExamYear[] = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

interface EraInfo {
  labelEnglish: string;
  labelMarathi: string;
  color: string;
}

const getEraInfo = (year: ExamYear): EraInfo => {
  if (year >= 2016 && year <= 2018) {
    return { labelEnglish: 'Old Course', labelMarathi: 'जुना अभ्यासक्रम', color: '#8E887F' };
  }
  if (year === 2019) {
    return { labelEnglish: 'Transitional', labelMarathi: 'संक्रमण वर्ष', color: '#E8A55A' };
  }
  if (year === 2021) {
    return { labelEnglish: 'COVID GR', labelMarathi: 'शासन निर्णय', color: '#D95D39' };
  }
  if (year === 2022) {
    return { labelEnglish: '25% Reduced', labelMarathi: '२५% कपात', color: '#3EA890' };
  }
  return { labelEnglish: 'Activity Sheet', labelMarathi: 'कृतीपत्रिका', color: '#C5A059' };
};

/**
 * 10-Year MSBSHSE Board Examination Selector Bar (२०१६–२०२५)
 * Categorizes 5 curriculum eras with distinctive badge telemetry:
 * - 2016-2018: Old Course (जुना अभ्यासक्रम)
 * - 2019: Transitional (संक्रमण वर्ष)
 * - 2020, 2023, 2024, 2025: Activity Sheet (कृतीपत्रिका)
 * - 2021: COVID GR (शासन निर्णय)
 * - 2022: 25% Reduced (२५% कपात)
 * Strictly Zero-Shadow Law compliant.
 */
export const BoardYearTabs: React.FC<BoardYearTabsProps> = ({
  selectedYear,
  onSelectYear,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-x-auto pb-2 scrollbar-none ${className}`}>
      <div className="flex items-center gap-2 min-w-max p-1.5 rounded-2xl bg-[#0E0E14] border border-[rgba(255,255,255,0.08)]">
        {ALL_YEARS.map((year) => {
          const isSelected = selectedYear === year;
          const era = getEraInfo(year);

          return (
            <button
              key={year}
              type="button"
              onClick={() => onSelectYear(year)}
              aria-selected={isSelected}
              className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all cursor-pointer border select-none ${
                isSelected
                  ? 'bg-[#121218] border-[#C5A059] text-[#FDFCFB]'
                  : 'bg-transparent border-transparent text-[#A8A29E] hover:bg-[#1A1A24] hover:text-[#FDFCFB]'
              }`}
            >
              <span className="font-mono text-base font-bold tracking-tight">
                {year}
              </span>

              <span
                className="mt-1 px-1.5 py-0.5 rounded text-[9.5px] font-mono uppercase tracking-wider font-semibold"
                style={{
                  backgroundColor: `${era.color}18`,
                  color: era.color,
                  border: `1px solid ${era.color}35`,
                }}
              >
                {era.labelEnglish}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BoardYearTabs;
