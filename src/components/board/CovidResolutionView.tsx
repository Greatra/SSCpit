import React, { useState } from 'react';
import { Calculator, FileText, AlertTriangle, Award, Info } from 'lucide-react';
import type { CovidResolutionDetails } from '../../types/boardPapers';

interface CovidResolutionViewProps {
  covidResolution?: CovidResolutionDetails;
}

/**
 * COVID-19 Resolution Archive & Interactive 50:30:20 Evaluation Calculator
 * Year 2021 Archival Examination Viewer
 * Based on GR No. संकीर्ण २०२१/प्र.क्र.३९/एसडी-२ & परीक्षा-०५२१/प्र.क्र.४३/एसडी-२
 * Strictly Zero-Shadow Law compliant.
 */
export const CovidResolutionView: React.FC<CovidResolutionViewProps> = ({
  covidResolution,
}) => {
  // 50:30:20 Calculator Inputs (Marks out of 100)
  const [class9Score, setClass9Score] = useState<number>(82);
  const [class10WrittenScore, setClass10WrittenScore] = useState<number>(78);
  const [class10InternalScore, setClass10InternalScore] = useState<number>(90);

  // Fallback defaults if not passed from data
  const resolution = covidResolution || {
    grNumberCancellation: 'संकीर्ण २०२१/प्र.क्र.३९/एसडी-२',
    grDateCancellation: '१२ मे २०२१',
    grNumberFormula: 'परीक्षा-०५२१/प्र.क्र.४३/एसडी-२',
    grDateFormula: '२८ मे २०२१',
    circularNumber: 'मंडळ परिपत्रक क्र. ४०२७ (९ जून २०२१)',
    formulaBreakdown: {
      class9Weightage: 50,
      class10WrittenWeightage: 30,
      class10InternalWeightage: 20,
    },
    historicalRationaleMarathi:
      'शैक्षणिक वर्ष २०२०-२१ मधील कोविड-१९ साथीच्या अभूतपूर्व संकटामुळे प्रत्यक्ष लेखी परीक्षा रद्द करून विद्यार्थ्यांच्या इयत्ता ९ वी मधील अंतिम गुणांचे ५०%, इयत्ता १० वी मधील वर्षभरातील अंतर्गत लेखी चाचण्यांचे ३०% आणि १० वी मधील गृहपाठ/स्वाध्याय नोंदींचे २०% असे एकत्रित १०० गुणांचे रूपांतर करून निकाल घोषित करण्यात आला.',
  };

  // Calculation logic
  const valid9 = Math.min(100, Math.max(0, isNaN(class9Score) ? 0 : class9Score));
  const valid10W = Math.min(100, Math.max(0, isNaN(class10WrittenScore) ? 0 : class10WrittenScore));
  const valid10I = Math.min(100, Math.max(0, isNaN(class10InternalScore) ? 0 : class10InternalScore));

  const weighted9 = Number(((valid9 * 50) / 100).toFixed(1));
  const weighted10W = Number(((valid10W * 30) / 100).toFixed(1));
  const weighted10I = Number(((valid10I * 20) / 100).toFixed(1));

  const totalCalculatedMarks = Number((weighted9 + weighted10W + weighted10I).toFixed(1));
  const roundedFinalMarks = Math.round(totalCalculatedMarks);

  const getGradeMarathi = (marks: number) => {
    if (marks >= 75) return { grade: 'विशेष प्राविण्य (Distinction)', color: '#C5A059' };
    if (marks >= 60) return { grade: 'प्रथम श्रेणी (First Class)', color: '#3EA890' };
    if (marks >= 45) return { grade: 'द्वितीय श्रेणी (Second Class)', color: '#E8A55A' };
    if (marks >= 35) return { grade: 'उत्तीर्ण श्रेणी (Pass Class)', color: '#A8A29E' };
    return { grade: 'अनुत्तीर्ण (Needs Improvement)', color: '#D95D39' };
  };

  const gradeInfo = getGradeMarathi(roundedFinalMarks);

  // Convert numbers to Marathi numerals for authentic presentation
  const toMarathiNumerals = (num: number | string): string => {
    const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return String(num).replace(/[0-9]/g, (d) => devanagariDigits[parseInt(d, 10)]);
  };

  const setPreset = (c9: number, c10w: number, c10i: number) => {
    setClass9Score(c9);
    setClass10WrittenScore(c10w);
    setClass10InternalScore(c10i);
  };

  return (
    <div className="space-y-6">
      {/* Official Government Resolution Header Banner */}
      <div className="p-6 rounded-xl bg-[#121218] border border-[rgba(255,255,255,0.08)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(255,255,255,0.08)] mb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-[#D95D39]/15 border border-[#D95D39]/30 text-[#D95D39]">
              <AlertTriangle size={18} />
            </span>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D95D39] font-bold block">
                अधिकृत शासन निर्णय व ऐतिहासिक दस्तऐवज
              </span>
              <h2 className="font-marathi-serif text-lg sm:text-xl font-bold text-[#FDFCFB]">
                सन २०२१: कोविड-१९ परीक्षा निरसन व पर्यायी मूल्यमापन
              </h2>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#1A1A24] text-[#C5A059] border border-[#C5A059]/30 self-start sm:self-auto">
            COVID-19 GR 2021
          </span>
        </div>

        {/* Legal & Administrative Gazette Citations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono uppercase text-[#A8A29E] block mb-1">
              १. परीक्षा रद्द शासन निर्णय
            </span>
            <div className="font-mono text-xs text-[#FDFCFB] font-semibold">
              {resolution.grNumberCancellation}
            </div>
            <span className="text-[11px] text-[#C5A059] font-marathi-serif mt-0.5 block">
              तारीख: {resolution.grDateCancellation}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono uppercase text-[#A8A29E] block mb-1">
              २. मूल्यमापन पद्धती शासन निर्णय
            </span>
            <div className="font-mono text-xs text-[#FDFCFB] font-semibold">
              {resolution.grNumberFormula}
            </div>
            <span className="text-[11px] text-[#C5A059] font-marathi-serif mt-0.5 block">
              तारीख: {resolution.grDateFormula}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#0E0E14] border border-[rgba(255,255,255,0.06)]">
            <span className="text-[10px] font-mono uppercase text-[#A8A29E] block mb-1">
              ३. राज्य मंडळ कार्यपद्धती परिपत्रक
            </span>
            <div className="font-mono text-xs text-[#FDFCFB] font-semibold">
              {resolution.circularNumber}
            </div>
            <span className="text-[11px] text-[#3EA890] font-marathi-serif mt-0.5 block">
              सर्व मान्यताप्राप्त शाळांसाठी बंधनकारक
            </span>
          </div>
        </div>

        {/* Historical Context Statement */}
        <div className="p-4 rounded-lg bg-[#0A0A0E] border-l-2 border-l-[#C5A059] border-t border-r border-b border-[rgba(255,255,255,0.06)] text-xs text-[#EBE5DC] font-marathi-serif leading-relaxed">
          <div className="flex items-center gap-1.5 text-[#C5A059] font-bold mb-1.5 text-[11px] uppercase tracking-wider font-mono">
            <FileText size={13} />
            <span>महाराष्ट्र शासनाची अधिकृत भूमिका</span>
          </div>
          <p>{resolution.historicalRationaleMarathi}</p>
        </div>
      </div>

      {/* Interactive 50:30:20 Formula Calculator */}
      <div className="p-6 rounded-xl bg-[#121218] border border-[#C5A059]/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(255,255,255,0.08)] mb-6">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#C5A059]">
              <Calculator size={18} />
            </span>
            <div>
              <h3 className="font-marathi-serif text-lg font-bold text-[#FDFCFB]">
                अधिकृत ५०:३०:२० गुण रूपांतरण कॅल्क्युलेटर
              </h3>
              <p className="text-xs text-[#A8A29E] font-marathi-serif">
                शासनाने ठरवून दिलेल्या प्रमाणानुसार तुमचे गुण प्रविष्ट करा व अचूक रूपांतरित एसएससी निकाल तपासा.
              </p>
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono text-[#8E887F] uppercase mr-1">नमुना:</span>
            <button
              type="button"
              onClick={() => setPreset(92, 88, 96)}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0E0E14] hover:bg-[#1A1A24] text-[#C5A059] border border-[#C5A059]/30 cursor-pointer"
            >
              ९०%+ प्राविण्य
            </button>
            <button
              type="button"
              onClick={() => setPreset(75, 72, 80)}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0E0E14] hover:bg-[#1A1A24] text-[#3EA890] border border-[#3EA890]/30 cursor-pointer"
            >
              ७५% प्रथम
            </button>
            <button
              type="button"
              onClick={() => setPreset(55, 52, 65)}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#0E0E14] hover:bg-[#1A1A24] text-[#E8A55A] border border-[#E8A55A]/30 cursor-pointer"
            >
              ५५% द्वितीय
            </button>
          </div>
        </div>

        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Component 1: Class 9 (50%) */}
          <div className="p-4 rounded-xl bg-[#0E0E14] border border-[rgba(255,255,255,0.08)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A059]">
                घटक १ (५०% भार)
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1A160F] text-[#C5A059] border border-[#C5A059]/30">
                ५० गुण
              </span>
            </div>

            <div>
              <label
                htmlFor="input-c9"
                className="block text-xs font-marathi-serif text-[#FDFCFB] font-medium mb-1"
              >
                इयत्ता ९ वी अंतिम निकाल गुण (%):
              </label>
              <input
                id="input-c9"
                type="number"
                min="0"
                max="100"
                value={class9Score}
                onChange={(e) => setClass9Score(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-lg bg-[#161622] border border-[rgba(255,255,255,0.12)] text-[#FDFCFB] font-mono text-sm focus:outline-none focus:border-[#C5A059]"
              />
            </div>

            <div className="pt-2 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8E887F]">रूपांतरित भार:</span>
              <span className="text-[#C5A059] font-bold">
                {valid9} × ०.५ = {weighted9} गुण
              </span>
            </div>
          </div>

          {/* Component 2: Class 10 Written (30%) */}
          <div className="p-4 rounded-xl bg-[#0E0E14] border border-[rgba(255,255,255,0.08)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95D39]">
                घटक २ (३०% भार)
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1A1412] text-[#D95D39] border border-[#D95D39]/30">
                ३० गुण
              </span>
            </div>

            <div>
              <label
                htmlFor="input-c10w"
                className="block text-xs font-marathi-serif text-[#FDFCFB] font-medium mb-1"
              >
                १० वी वर्षभरातील लेखी चाचण्या (%):
              </label>
              <input
                id="input-c10w"
                type="number"
                min="0"
                max="100"
                value={class10WrittenScore}
                onChange={(e) => setClass10WrittenScore(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-lg bg-[#161622] border border-[rgba(255,255,255,0.12)] text-[#FDFCFB] font-mono text-sm focus:outline-none focus:border-[#D95D39]"
              />
            </div>

            <div className="pt-2 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8E887F]">रूपांतरित भार:</span>
              <span className="text-[#D95D39] font-bold">
                {valid10W} × ०.३ = {weighted10W} गुण
              </span>
            </div>
          </div>

          {/* Component 3: Class 10 Internal/Oral (20%) */}
          <div className="p-4 rounded-xl bg-[#0E0E14] border border-[rgba(255,255,255,0.08)] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3EA890]">
                घटक ३ (२०% भार)
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0F1A18] text-[#3EA890] border border-[#3EA890]/30">
                २० गुण
              </span>
            </div>

            <div>
              <label
                htmlFor="input-c10i"
                className="block text-xs font-marathi-serif text-[#FDFCFB] font-medium mb-1"
              >
                १० वी गृहपाठ व अंतर्गत तोंडी (%):
              </label>
              <input
                id="input-c10i"
                type="number"
                min="0"
                max="100"
                value={class10InternalScore}
                onChange={(e) => setClass10InternalScore(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-lg bg-[#161622] border border-[rgba(255,255,255,0.12)] text-[#FDFCFB] font-mono text-sm focus:outline-none focus:border-[#3EA890]"
              />
            </div>

            <div className="pt-2 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8E887F]">रूपांतरित भार:</span>
              <span className="text-[#3EA890] font-bold">
                {valid10I} × ०.२ = {weighted10I} गुण
              </span>
            </div>
          </div>
        </div>

        {/* Calculated Result Display Card */}
        <div className="p-5 rounded-xl bg-[#0A0A0E] border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono uppercase tracking-wider text-[#C5A059]">
              <Award size={15} />
              <span>अधिकृत ५०:३०:२० रूपांतरित निकाल</span>
            </div>
            <div className="font-marathi-serif text-sm text-[#A8A29E]">
              सूत्र: ({valid9} × ०.५) + ({valid10W} × ०.३) + ({valid10I} × ०.२)
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-1">
              <span
                className="text-xs font-marathi-serif px-2.5 py-0.5 rounded-full font-bold"
                style={{
                  backgroundColor: `${gradeInfo.color}15`,
                  color: gradeInfo.color,
                  border: `1px solid ${gradeInfo.color}40`,
                }}
              >
                {gradeInfo.grade}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-[10px] uppercase font-mono text-[#8E887F] block">
                १०० पैकी अंतिम गुण
              </span>
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#FDFCFB] tracking-tight">
                {totalCalculatedMarks.toFixed(1)}{' '}
                <span className="text-base text-[#C5A059] font-normal">/ १००</span>
              </div>
            </div>

            <div className="h-12 w-px bg-[rgba(255,255,255,0.12)] hidden sm:block" />

            <div className="text-center sm:text-left">
              <span className="text-[10px] uppercase font-mono text-[#8E887F] block">
                देवनागरी नोंद
              </span>
              <div className="font-marathi-serif text-2xl font-bold text-[#E8A55A]">
                {toMarathiNumerals(roundedFinalMarks)} गुण
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Opportunity for Improvement */}
        <div className="mt-4 flex items-start gap-2 text-[11px] text-[#8E887F] font-marathi-serif">
          <Info size={13} className="shrink-0 text-[#C5A059] mt-0.5" />
          <p>
            शासन निर्णय क्र. परीक्षा-०५२१/प्र.क्र.४३/एसडी-२ नुसार या पर्यायी मूल्यमापनाने मिळालेल्या निकालावर असमाधानी असणाऱ्या विद्यार्थ्यांना कोविड संकट नियंत्रणात आल्यानंतर श्रेणीसुधार प्रत्यक्ष लेखी परीक्षा देण्याची मुभा देण्यात आली होती.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CovidResolutionView;
