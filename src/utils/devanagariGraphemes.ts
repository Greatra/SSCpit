/**
 * Devanagari Grapheme Cluster Cloze Engine
 * Designed for MSBSHSE Class 10 History & Political Science
 * Adheres strictly to Trinity Design System, Zero-Shadow Law, and Dark AMOLED (#070709 / #121218).
 *
 * Implements Intl.Segmenter('mr') grapheme clustering with Unicode punctuation filtering
 * and an exact phonological akshara regex fallback for 100% parity across browsers.
 */

export type ClozeStage = 0 | 1 | 2;

export type SemanticCategory =
  | 'विचारवंत'
  | 'वर्ष'
  | 'ग्रंथ'
  | 'चळवळ'
  | 'ऐतिहासिक साधन'
  | 'संकल्पना';

export interface ClozeTokenInfo {
  rawToken: string;
  cleanText: string;
  category: SemanticCategory;
  categoryLabel: string;
  firstAkshara: string;
  aksharaCount: number;
  aksharaCountLabel: string;
  aksharas: string[];
}

export interface ClozeTextSegment {
  isKeyword: boolean;
  text: string;
  tokenInfo?: ClozeTokenInfo;
}

const C = '[\\u0915-\\u0939\\u0958-\\u095F\\u0978-\\u097F]\\u093C?';
const V = '[\\u0904-\\u0914\\u0972-\\u0977]';
const VIRAMA = '\\u094D[\\u200C\\u200D]?';
const MATRA = '[\\u093E-\\u094C\\u094E\\u094F\\u0955-\\u0957\\u0962\\u0963]';
const MOD = '[\\u0901-\\u0903]';
const DIGIT = '[\\u0966-\\u096F]';
const LATIN = '[A-Za-z0-9]';

// Fallback regex pattern for phonological akshara / grapheme clusters
export const DEVANAGARI_AKSHARA_REGEX_SOURCE =
  `(?:(?:(?:${C}${VIRAMA})*${C}(?:${VIRAMA}|(?:${MATRA})?(?:${MOD})?)|${V}(?:${MOD})?)|${DIGIT}|${LATIN})`;

export const DEVANAGARI_AKSHARA_REGEX = new RegExp(DEVANAGARI_AKSHARA_REGEX_SOURCE, 'gu');

// Master Regex for high-value Maharashtra State Board historical & political keywords across 14 chapters
export const MASTER_CURRICULUM_KEYWORDS_REGEX =
  /(व्हॉल्टेअर|रेने देकार्त|जॉर्ज हेगेल|कार्ल मार्क्स|मायकेल फुको|मायकेल फुकॉ|लिओपॉल्ड रांके|लिओपोल्ड रांखे|हिरोडोटस|बाबर|कल्हण|झियाउद्दीन बरनी|वि\. का\. राजवाडे|स्वातंत्र्यवीर सावरकर|डॉ\. बाबासाहेब आंबेडकर|बाळशास्त्री जांभेकर|लोकमान्य टिळक|छत्रपती शिवाजी महाराज|ताराबाई शिंदे|पंडिता रमाबाई|स्त्री-पुरुष तुलना|डिस्कॉर्स ऑन द मेथड|दास कॅपिटल|राजतरंगिणी|बखर|सभासद बखर|असहकार चळवळ|उपयोजित इतिहास|वारसा स्थळ|युनेस्को|अजिंठा|वेरूळ|घारापुरी|कास पठार|दख्खनची स्थापत्यशैली|गांधार शैली|नागर शैली|द्रविड शैली|हेमाडपंती|दर्पण|ज्ञानोदय|केसरी|मराठा|आकाशवाणी|दूरदर्शन|दादासाहेब फाळके|विष्णूदास भावे|बाळंभट्टदादा देवधर|खाशाबा जाधव|मेजर ध्यानचंद|ऑलिंपिक|मल्लखांब|बुद्धिबळ|चतुरंग|थॉमस कुक|बेंजामिन ट्युडेला|मार्को पोलो|इब्न बतूता|गेरहार्ड मर्कॅटर|भिलार|कृषी पर्यटन|वारसा सहल|लुव्र संग्रहालय|ब्रिटिश संग्रहालय|भारतीय संग्रहालय|नॅशनल म्युझियम|सरस्वती महाल|विश्वकोश|स्थलकोश|संविधान|मूलभूत हक्क|माहितीचा अधिकार|निवडणूक आयोग|आचारसंहिता|ईव्हीएम|व्हीव्हीपॅट|सुकुमार सेन|राष्ट्रीय पक्ष|प्रादेशिक पक्ष|शेतकरी चळवळ|चिपको आंदोलन|नर्मदा बचाव आंदोलन|ग्राहक संरक्षण कायदा|नक्षलवाद|चारू मुजुमदार|लोकपाल|लोकायुक्त|१७८९|१९२०|१९४२|१९४७|१८४८|१९५०|१९७३|१९८८|१९९२|२००५|इ\.स\.|इ\.स\.पू\.|वर्गसंघर्ष|द्वंद्ववाद|ॲनल्स प्रणाली|हक्काधारित दृष्टिकोन)/g;

export const mrSegmenter =
  typeof Intl !== 'undefined' && 'Segmenter' in Intl
    ? new Intl.Segmenter('mr', { granularity: 'grapheme' })
    : null;

/**
 * Converts Western Arabic digits (0-9) to authentic Devanagari numerals (०-९).
 */
export function toDevanagariDigits(n: number | string): string {
  return String(n).replace(/[0-9]/g, (d) => '०१२३४५६७८९'[Number(d)]);
}

/**
 * Extracts true phonological akshara syllables from a Marathi text,
 * filtering out spaces, punctuation, and typographical markers.
 */
export function getPhonologicalAksharas(text: string): string[] {
  const clean = text.trim();
  if (!clean) return [];

  if (mrSegmenter) {
    const rawClusters = Array.from(mrSegmenter.segment(clean), (s) => s.segment);
    // Filter out whitespace, Unicode punctuation (\p{P}), and symbols (\p{S})
    return rawClusters.filter((c) => !/^[\s\p{P}\p{S}]+$/u.test(c));
  } else {
    // Regex fallback inherently isolates grapheme units and ignores spacing/punctuation
    const matches = clean.match(new RegExp(DEVANAGARI_AKSHARA_REGEX_SOURCE, 'gu'));
    return matches || [];
  }
}

/**
 * Classifies a keyword into one of the 6 core MSBSHSE curriculum categories.
 */
export function getKeywordSemanticCategory(word: string): SemanticCategory {
  const clean = word.trim();
  // 1. Year / Era
  if (/^[०-९\d]{2,4}$/.test(clean) || /इ\.स\.|इ\.स\.पू\./.test(clean)) {
    return 'वर्ष';
  }
  // 2. Thinkers, Historians, Leaders, Thinker entities
  if (
    /व्हॉल्टेअर|देकार्त|हेगेल|मार्क्स|फुको|फुकॉ|रांके|रांखे|हिरोडोटस|बाबर|कल्हण|बरनी|राजवाडे|सावरकर|आंबेडकर|जांभेकर|टिळक|महाराज|शिंदे|रमाबाई|फाळके|भावे|देवधर|जाधव|ध्यानचंद|कुक|ट्युडेला|पोलो|बतूता|मर्कॅटर|सेन|मुजुमदार/.test(clean)
  ) {
    return 'विचारवंत';
  }
  // 3. Books, Periodicals, Texts
  if (
    /मेथड|कॅपिटल|तुलना|राजतरंगिणी|बखर|दर्पण|ज्ञानोदय|केसरी|मराठा|विश्वकोश|स्थलकोश/.test(clean)
  ) {
    return 'ग्रंथ';
  }
  // 4. Movements, Acts, Codes
  if (
    /चळवळ|आंदोलन|कायदा|हक्क|संविधान|आचारसंहिता|नक्षलवाद|लोकपाल|लोकायुक्त/.test(clean)
  ) {
    return 'चळवळ';
  }
  // 5. Historical Sources, Monuments, Media, Artifacts
  if (
    /अजिंठा|वेरूळ|घारापुरी|कास पठार|भिलार|संग्रहालय|म्युझियम|सरस्वती महाल|वारसा स्थळ|युनेस्को|शैली|हेमाडपंती|ईव्हीएम|व्हीव्हीपॅट|आकाशवाणी|दूरदर्शन/.test(clean)
  ) {
    return 'ऐतिहासिक साधन';
  }
  // 6. Historiographical Concepts
  return 'संकल्पना';
}

/**
 * Alias for getKeywordSemanticCategory for semantic consistency.
 */
export const detectSemanticCategory = getKeywordSemanticCategory;

/**
 * Returns the 2-stage scaffolding hint: first akshara and syllable count.
 * e.g., 'कार्ल मार्क्स' -> { firstAkshara: 'का', aksharaCount: 4, aksharaCountLabel: 'का... (४ अक्षरे)', aksharas: ['का','र्ल','मा','र्क्स'] }
 */
export function getMarathiClozeHint(word: string): {
  firstAkshara: string;
  aksharaCount: number;
  aksharaCountLabel: string;
  aksharas: string[];
} {
  const aksharas = getPhonologicalAksharas(word);
  const firstAkshara = aksharas[0] ?? '';
  const count = aksharas.length;
  const countDigits = toDevanagariDigits(count);
  const suffix = count === 1 ? 'अक्षर' : 'अक्षरे';
  const aksharaCountLabel = firstAkshara
    ? `${firstAkshara}... (${countDigits} ${suffix})`
    : `(${countDigits} ${suffix})`;

  return {
    firstAkshara,
    aksharaCount: count,
    aksharaCountLabel,
    aksharas,
  };
}

/**
 * Formats Stage 0 Mask: [ {category} ]
 */
export function getStage0Mask(tokenInfo: ClozeTokenInfo): string {
  return `[ ${tokenInfo.categoryLabel} ]`;
}

/**
 * Formats Stage 1 Phonological Priming Hint: [ {firstAkshara}... ({count} अक्षरे) ]
 */
export function getStage1Hint(tokenInfo: ClozeTokenInfo): string {
  return `[ ${tokenInfo.aksharaCountLabel} ]`;
}

/**
 * Builds complete ClozeTokenInfo for any given word.
 */
export function getClozeTokenInfo(
  word: string,
  categoryOverride?: SemanticCategory
): ClozeTokenInfo {
  const cleanText = word.trim();
  const category = categoryOverride ?? getKeywordSemanticCategory(cleanText);
  const hint = getMarathiClozeHint(cleanText);

  return {
    rawToken: word,
    cleanText,
    category,
    categoryLabel: category,
    firstAkshara: hint.firstAkshara,
    aksharaCount: hint.aksharaCount,
    aksharaCountLabel: hint.aksharaCountLabel,
    aksharas: hint.aksharas,
  };
}

/**
 * Splits arbitrary Marathi text into alternating plain text and Cloze tokens.
 */
export function tokenizeClozeText(
  text: string,
  customRegex?: RegExp
): ClozeTextSegment[] {
  const regex = customRegex ?? MASTER_CURRICULUM_KEYWORDS_REGEX;
  const parts = text.split(regex);
  const segments: ClozeTextSegment[] = [];

  for (const part of parts) {
    if (!part) continue;
    const isKeyword = regex.test(part);
    regex.lastIndex = 0;

    if (isKeyword) {
      segments.push({
        isKeyword: true,
        text: part,
        tokenInfo: getClozeTokenInfo(part),
      });
    } else {
      segments.push({
        isKeyword: false,
        text: part,
      });
    }
  }

  return segments;
}
