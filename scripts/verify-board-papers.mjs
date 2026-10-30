import fs from 'node:fs';
import path from 'node:path';

/**
 * Empirical Standalone Verification Test Harness: Board Papers Dataset Stress & Schema Integrity
 *
 * Validates src/data/boardPapersData.ts across 11 test suites:
 * 1. 10-Year Chronological Horizon & Era Taxonomy (2016–2025)
 * 2. Total Question Count (185) & Sequential Question ID Uniqueness
 * 3. MSBSHSE Tripartite Model Answer Rubrics (प्रस्तावना, मुख्य मुद्दे, निष्कर्ष)
 * 4. Objective MCQs & Column Matching Validity
 * 5. Wrong Pair Identification & Corrections (प्र. १ ब)
 * 6. Concept Diagrams & Flowcharts (प्र. २ अ, प्र. ८ ब)
 * 7. Historiographical Passage Analysis & Sub-Questions (प्र. ४)
 * 8. Special Year 2021 COVID Government Resolution & 50:30:20 Formula
 * 9. Empirical Recurrence Telemetry & Star Ratings (BOARD_PAPERS_STATUS.md)
 * 10. Deep Recursive Null, Undefined, & Placeholder Token Audit
 * 11. Cross-Linkage Parity with registered chapters in chaptersData.ts
 */

const boardPapersDataPath = path.resolve('src/data/boardPapersData.ts');
const chaptersDataPath = path.resolve('src/data/chaptersData.ts');

if (!fs.existsSync(boardPapersDataPath)) {
  console.error(`❌ boardPapersData.ts not found at ${boardPapersDataPath}`);
  process.exit(1);
}

if (!fs.existsSync(chaptersDataPath)) {
  console.error(`❌ chaptersData.ts not found at ${chaptersDataPath}`);
  process.exit(1);
}

const boardMod = await import('file:///' + boardPapersDataPath.replace(/\\/g, '/'));
const chapMod = await import('file:///' + chaptersDataPath.replace(/\\/g, '/'));

const boardPapers = boardMod.boardPapersData;
const chapters = chapMod.chaptersData;

if (!Array.isArray(boardPapers)) {
  console.error('❌ boardPapersData export is not an array!');
  process.exit(1);
}

let passedChecks = 0;
let totalChecks = 0;
const failures = [];

function check(name, condition, errorDetail = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ [PASS] ${name}`);
  } else {
    failures.push({ name, errorDetail });
    console.error(`  ❌ [FAIL] ${name}: ${errorDetail}`);
  }
}

console.log('================================================================');
console.log('   BOARD PAPERS DATASET EMPIRICAL STRESS & INTEGRITY HARNESS');
console.log('================================================================\n');

// -----------------------------------------------------------------------------
// SUITE 1: 10-Year Chronological Horizon & Era Taxonomy
// -----------------------------------------------------------------------------
console.log('--- 1. 10-Year Chronological Horizon & Curriculum Era Taxonomy ---');
check('Archive contains exactly 10 examination years', boardPapers.length === 10, `Found ${boardPapers.length} years.`);

const expectedYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
const actualYears = boardPapers.map((y) => y.year);
check(
  'Years are strictly sequential from 2016 to 2025 in ascending order',
  JSON.stringify(actualYears) === JSON.stringify(expectedYears),
  `Expected ${JSON.stringify(expectedYears)}, got ${JSON.stringify(actualYears)}`
);

const expectedEras = {
  2016: 'old_course',
  2017: 'old_course',
  2018: 'old_course',
  2019: 'transitional_new',
  2020: 'canonical_new',
  2021: 'covid_resolution',
  2022: 'covid_reduced',
  2023: 'canonical_new',
  2024: 'canonical_new',
  2025: 'canonical_new',
};

let erasMatch = true;
const eraMismatches = [];
for (const y of boardPapers) {
  if (y.curriculumEra !== expectedEras[y.year]) {
    erasMatch = false;
    eraMismatches.push({ year: y.year, expected: expectedEras[y.year], actual: y.curriculumEra });
  }
}
check(
  'All 10 examination years have accurate curriculum era classifications',
  erasMatch,
  `Mismatches: ${JSON.stringify(eraMismatches)}`
);

let allHaveMetadata = true;
const devanagariRegex = /[\u0900-\u097F]/;
for (const y of boardPapers) {
  if (
    !y.sessionTitleMarathi ||
    !devanagariRegex.test(y.sessionTitleMarathi) ||
    !y.officialSourceCitation ||
    !Array.isArray(y.instructionsMarathi) ||
    y.instructionsMarathi.length < 3
  ) {
    allHaveMetadata = false;
  }
}
check(
  'Every year archive has authentic sessionTitle, official citation, and >= 3 instructions',
  allHaveMetadata,
  'Incomplete year metadata or missing instructions.'
);

// -----------------------------------------------------------------------------
// SUITE 2: Total Question Count & Sequential Question ID Uniqueness
// -----------------------------------------------------------------------------
console.log('\n--- 2. Question Counts & Sequential Question ID Uniqueness ---');
const allQuestions = boardPapers.flatMap((y) => y.questions);
check(
  'Total questions count across all 10 years is exactly 185',
  allQuestions.length === 185,
  `Expected 185, found ${allQuestions.length}`
);

const expectedYearCounts = {
  2016: 16,
  2017: 16,
  2018: 16,
  2019: 24,
  2020: 22,
  2021: 0,
  2022: 22,
  2023: 23,
  2024: 23,
  2025: 23,
};

let yearCountsMatch = true;
const actualYearCounts = {};
for (const y of boardPapers) {
  actualYearCounts[y.year] = y.questions.length;
  if (y.questions.length !== expectedYearCounts[y.year]) {
    yearCountsMatch = false;
  }
}
check(
  'Per-year question distribution matches authentic paper structures',
  yearCountsMatch,
  `Actual counts: ${JSON.stringify(actualYearCounts)}`
);

const questionIdSet = new Set();
const duplicateIds = [];
const malformedIds = [];
const parentYearMismatches = [];
const invalidSubjects = [];

for (const y of boardPapers) {
  for (const q of y.questions) {
    if (questionIdSet.has(q.id)) duplicateIds.push(q.id);
    questionIdSet.add(q.id);

    const expectedPrefix = `bp-${y.year}-`;
    if (!q.id.startsWith(expectedPrefix)) {
      malformedIds.push(q.id);
    }

    if (q.year !== y.year) {
      parentYearMismatches.push({ id: q.id, questionYear: q.year, parentYear: y.year });
    }

    if (q.subject !== 'history' && q.subject !== 'political_science') {
      invalidSubjects.push({ id: q.id, subject: q.subject });
    }
  }
}

check('Zero duplicate question IDs (185 unique IDs)', duplicateIds.length === 0, `Duplicates: ${duplicateIds.join(', ')}`);
check(
  'All question IDs follow standard prefix convention bp-[year]-...',
  malformedIds.length === 0,
  `Malformed: ${malformedIds.join(', ')}`
);
check('All questions have year property strictly matching parent year archive', parentYearMismatches.length === 0);
check('All questions have valid subject (history or political_science)', invalidSubjects.length === 0);

// -----------------------------------------------------------------------------
// SUITE 3: Tripartite Model Answer Rubrics on Analytical Questions
// -----------------------------------------------------------------------------
console.log('\n--- 3. MSBSHSE Tripartite Model Answer Rubrics (प्रस्तावना, मुख्य मुद्दे, निष्कर्ष) ---');
const questionsWithRubric = allQuestions.filter((q) => q.rubric);
check(
  'All 88 analytical and long-answer questions contain MSBSHSE tripartite rubrics',
  questionsWithRubric.length === 88,
  `Found ${questionsWithRubric.length} rubrics`
);

let rubricsValid = true;
let rubricsCopyPasted = false;
let muddeValid = true;
let clozesValid = true;

for (const q of questionsWithRubric) {
  const r = q.rubric;
  if (
    !r.prastavana ||
    typeof r.prastavana !== 'string' ||
    r.prastavana.trim().length < 15 ||
    !r.nishkarsha ||
    typeof r.nishkarsha !== 'string' ||
    r.nishkarsha.trim().length < 15
  ) {
    rubricsValid = false;
  }

  if (r.prastavana.trim() === r.nishkarsha.trim()) {
    rubricsCopyPasted = true;
  }

  if (!Array.isArray(r.mukhyaMudde) || r.mukhyaMudde.length === 0) {
    muddeValid = false;
  } else {
    for (const m of r.mukhyaMudde) {
      if (!m.hookMarathi || m.hookMarathi.trim().length === 0) muddeValid = false;
      if (!m.elaborationMarathi || m.elaborationMarathi.trim().length < 15) muddeValid = false;
      if (!Array.isArray(m.highValueKeywords) || m.highValueKeywords.length === 0) clozesValid = false;
    }
  }
}

check('All rubrics have substantial prastavana and nishkarsha (>15 chars in Marathi)', rubricsValid);
check('Prastavana and Nishkarsha are strictly distinct texts (zero copy-paste shortcutting)', !rubricsCopyPasted);
check('All rubrics have structured mukhyaMudde with bold memory hooks and complete elaboration', muddeValid);
check('All mukhyaMudde contain highValueKeywords for Devanagari Cloze retrieval practice', clozesValid);

// -----------------------------------------------------------------------------
// SUITE 4: Objective MCQs & Column Matching Validity
// -----------------------------------------------------------------------------
console.log('\n--- 4. Objective MCQs & Column Matching Validity ---');
const mcqs = allQuestions.filter((q) => q.type === 'mcq_1m');
check('MCQ question count is exactly 49', mcqs.length === 49, `Found ${mcqs.length} MCQs`);

let mcqsValid = true;
let directAnswerMatchesOption = true;
for (const q of mcqs) {
  if (!Array.isArray(q.options) || q.options.length < 3) mcqsValid = false;
  if (typeof q.correctOptionIndex !== 'number' || q.correctOptionIndex < 0 || q.correctOptionIndex >= q.options.length) {
    mcqsValid = false;
  }
  const set = new Set(q.options);
  if (set.size !== q.options.length) mcqsValid = false;
  if (q.directAnswer && q.directAnswer !== q.options[q.correctOptionIndex]) {
    directAnswerMatchesOption = false;
  }
}
check('All MCQs have >= 3 distinct options and in-bounds correctOptionIndex', mcqsValid);
check('All MCQs directAnswer matches options[correctOptionIndex]', directAnswerMatchesOption);

const matchCols = allQuestions.filter((q) => q.type === 'match_columns_1m');
check('Old Course match_columns_1m count is exactly 9 (3 per year: 2016, 2017, 2018)', matchCols.length === 9);
const matchColsValid = matchCols.every((q) => Array.isArray(q.options) && q.options.length >= 3 && q.directAnswer);
check('All match_columns_1m questions contain options and directAnswer', matchColsValid);

// -----------------------------------------------------------------------------
// SUITE 5: Wrong Pair Questions (प्र. १ ब)
// -----------------------------------------------------------------------------
console.log('\n--- 5. Wrong Pair Questions (प्र. १ ब) ---');
const wrongPairs = allQuestions.filter((q) => q.type === 'wrong_pair_1m');
check('Wrong-pair questions count is exactly 18 (3 per year across 6 New Course years)', wrongPairs.length === 18);

let wrongPairsValid = true;
let incorrectDifferentFromCorrected = true;
for (const q of wrongPairs) {
  if (!Array.isArray(q.wrongPairItems) || q.wrongPairItems.length !== 4) wrongPairsValid = false;
  if (!q.incorrectPair || !q.correctedPair) wrongPairsValid = false;
  if (q.incorrectPair === q.correctedPair) incorrectDifferentFromCorrected = false;
  if (q.wrongPairItems) {
    for (const item of q.wrongPairItems) {
      if (!item.term || !item.explanation) wrongPairsValid = false;
    }
  }
}
check('All wrong-pair questions have exactly 4 pairs with non-empty terms & explanations', wrongPairsValid);
check('All wrong-pair questions have distinct incorrectPair and correctedPair', incorrectDifferentFromCorrected);

// -----------------------------------------------------------------------------
// SUITE 6: Concept Diagrams & Flowcharts (प्र. २ अ, प्र. ८ ब)
// -----------------------------------------------------------------------------
console.log('\n--- 6. Concept Diagrams & Flowcharts ---');
const conceptMaps = allQuestions.filter((q) => q.type === 'concept_map_2m');
check('Concept map questions count is exactly 18', conceptMaps.length === 18);

let conceptMapsValid = true;
const validDiagramTypes = ['hierarchy', 'flow', 'radial', 'timeline'];
for (const q of conceptMaps) {
  if (!q.conceptDiagram) {
    conceptMapsValid = false;
    continue;
  }
  const cd = q.conceptDiagram;
  if (!cd.titleMarathi || cd.titleMarathi.trim().length === 0) conceptMapsValid = false;
  if (!validDiagramTypes.includes(cd.diagramType)) conceptMapsValid = false;
  if (!Array.isArray(cd.nodes) || cd.nodes.length < 2) conceptMapsValid = false;
  if (cd.nodes) {
    for (const node of cd.nodes) {
      if (!node.labelMarathi || typeof node.marksPerNode !== 'number' || node.marksPerNode <= 0) {
        conceptMapsValid = false;
      }
    }
  }
}
check(
  'All concept maps have valid diagramType, titleMarathi, and >= 2 nodes with positive marks',
  conceptMapsValid
);

// -----------------------------------------------------------------------------
// SUITE 7: Passage Analysis Questions (प्र. ४)
// -----------------------------------------------------------------------------
console.log('\n--- 7. Historiographical Passage Analysis & Sub-Questions ---');
const passageQs = allQuestions.filter((q) => q.type === 'passage_analysis_4m');
check('Passage analysis questions count is exactly 6 (1 for each New Course year)', passageQs.length === 6);

let passagesValid = true;
let marksSumMatches = true;
for (const q of passageQs) {
  if (!q.passageText || q.passageText.trim().length < 100) passagesValid = false;
  if (!Array.isArray(q.subQuestions) || q.subQuestions.length < 2) passagesValid = false;
  if (q.subQuestions) {
    let sum = 0;
    for (const sq of q.subQuestions) {
      if (!sq.questionNumber || !sq.textMarathi || !sq.modelAnswer || typeof sq.marks !== 'number') {
        passagesValid = false;
      }
      sum += sq.marks;
    }
    if (sum !== q.marks) marksSumMatches = false;
  }
}
check('All passage analysis questions have substantial passageText (>100 chars) and subQuestions', passagesValid);
check('Sub-question marks sum precisely equals the question marks (4M)', marksSumMatches);

// -----------------------------------------------------------------------------
// SUITE 8: Special Year 2021 COVID Government Resolution
// -----------------------------------------------------------------------------
console.log('\n--- 8. Special Year 2021 COVID Government Resolution & Formula Breakdown ---');
const y2021 = boardPapers.find((y) => y.year === 2021);
check('Year 2021 exists in the dataset', !!y2021);
check('Year 2021 has curriculumEra covid_resolution and 0 questions', y2021?.curriculumEra === 'covid_resolution' && y2021?.questions.length === 0);
check('Year 2021 contains covidResolution object', !!y2021?.covidResolution);

const cr = y2021?.covidResolution;
check(
  'GR cancellation number is authentic (संकीर्ण २०२१/प्र.क्र.३९/एसडी-२)',
  cr?.grNumberCancellation === 'संकीर्ण २०२१/प्र.क्र.३९/एसडी-२'
);
check('GR cancellation date is authentic (१२ मे २०२१)', cr?.grDateCancellation === '१२ मे २०२१');
check(
  'GR formula number is authentic (परीक्षा-०५२१/प्र.क्र.४३/एसडी-२)',
  cr?.grNumberFormula === 'परीक्षा-०५२१/प्र.क्र.४३/एसडी-२'
);
check('GR formula date is authentic (२८ मे २०२१)', cr?.grDateFormula === '२८ मे २०२१');
check('Circular number cites circular 4027', cr?.circularNumber.includes('४०२७'));

const fb = cr?.formulaBreakdown;
check(
  '50:30:20 formula weights sum to exactly 100% (Class 9: 50%, Class 10 Written: 30%, Class 10 Internal: 20%)',
  fb?.class9Weightage === 50 &&
    fb?.class10WrittenWeightage === 30 &&
    fb?.class10InternalWeightage === 20 &&
    fb?.class9Weightage + fb?.class10WrittenWeightage + fb?.class10InternalWeightage === 100
);
check(
  'Historical rationale Marathi narrative is substantial (>50 chars)',
  !!cr?.historicalRationaleMarathi && cr.historicalRationaleMarathi.trim().length > 50
);

// -----------------------------------------------------------------------------
// SUITE 9: Frequency Telemetry & Status Matrix Alignment
// -----------------------------------------------------------------------------
console.log('\n--- 9. Recurrence Telemetry & Star Rating Alignment ---');
const freqQuestions = allQuestions.filter((q) => q.frequencyMarker);
check('Total questions with frequencyMarker is 125', freqQuestions.length === 125, `Found ${freqQuestions.length}`);

let freqMarkersValid = true;
let starsConsistent = true;
for (const q of freqQuestions) {
  const fm = q.frequencyMarker;
  if (!['★★★', '★★', '★'].includes(fm.stars)) freqMarkersValid = false;
  if (!Array.isArray(fm.yearsAppeared) || fm.yearsAppeared.length === 0) freqMarkersValid = false;
  if (fm.yearsAppeared.length !== fm.recurrenceCount) freqMarkersValid = false;
  if (!fm.trendAnalysisMarathi || fm.trendAnalysisMarathi.trim().length === 0) freqMarkersValid = false;

  let expected = '★';
  if (fm.recurrenceCount >= 4) expected = '★★★';
  else if (fm.recurrenceCount === 3) expected = '★★';
  if (fm.stars !== expected) starsConsistent = false;
}
check('All frequency markers have valid stars, recurrenceCount, yearsAppeared, and Marathi trend analysis', freqMarkersValid);
check('Star ratings strictly match recurrence threshold: >=4 is ★★★, 3 is ★★, <=2 is ★', starsConsistent);

// Verify key anchor topics from BOARD_PAPERS_STATUS.md
const keyTopics = [
  { name: 'कार्ल मार्क्स', stars: '★★★' },
  { name: 'सामाजिक व राजकीय चळवळी', stars: '★★★' },
  { name: 'रेने देकार्त', stars: '★★★' },
  { name: 'बाळशास्त्री जांभेकर', stars: '★★★' },
  { name: 'पर्यटन', stars: '★★★' },
  { name: 'लोककला', stars: '★★★' },
  { name: 'व्हॉल्टेअर', stars: '★★★' },
  { name: 'केसरी व मराठा', stars: '★★★' },
  { name: 'अभिलेखागार', stars: '★★★' },
  { name: 'दूरदर्शन', stars: '★★★' },
  { name: 'संविधानाची', stars: '★★★' },
  { name: 'राजकीय पक्षांची', stars: '★★★' },
  { name: 'मायकेल फुको', stars: '★★' },
  { name: 'अजिंठा', stars: '★★' },
  { name: 'बखर', stars: '★' },
  { name: 'निवडणूक आयोग', stars: '★' },
  { name: 'शेतकरी चळवळ', stars: '★' },
  { name: 'हेगेल', stars: '★' },
  { name: 'ताराबाई शिंदे', stars: '★' },
];

let allKeyTopicsMatch = true;
for (const kt of keyTopics) {
  const matches = freqQuestions.filter((q) => q.frequencyMarker.trendAnalysisMarathi.includes(kt.name));
  if (matches.length === 0 || !matches.every((q) => q.frequencyMarker.stars === kt.stars)) {
    allKeyTopicsMatch = false;
  }
}
check('All 19 flagship topics from BOARD_PAPERS_STATUS.md have confirmed presence and exact star ratings', allKeyTopicsMatch);

// -----------------------------------------------------------------------------
// SUITE 10: Deep Recursive Null, Undefined, & Placeholder Token Audit
// -----------------------------------------------------------------------------
console.log('\n--- 10. Deep Recursive Null, Undefined, & Placeholder Token Audit ---');
const placeholderRegex = /\b(TBD|dummy|lorem|TODO|placeholder|temp|xxx)\b/i;
const auditIssues = [];

function deepAudit(val, currPath) {
  if (val === null) {
    auditIssues.push({ path: currPath, issue: 'null value' });
    return;
  }
  if (val === undefined) {
    auditIssues.push({ path: currPath, issue: 'undefined value' });
    return;
  }
  if (typeof val === 'string') {
    if (placeholderRegex.test(val)) {
      auditIssues.push({ path: currPath, issue: `Placeholder token in string: "${val}"` });
    }
    return;
  }
  if (Array.isArray(val)) {
    val.forEach((item, idx) => deepAudit(item, `${currPath}[${idx}]`));
    return;
  }
  if (typeof val === 'object') {
    for (const [k, v] of Object.entries(val)) {
      deepAudit(v, currPath ? `${currPath}.${k}` : k);
    }
  }
}

deepAudit(boardPapers, 'boardPapersData');
check(
  'Zero null, undefined, or placeholder tokens (TBD, dummy, lorem, TODO, temp, placeholder) across entire dataset',
  auditIssues.length === 0,
  `Found issues: ${JSON.stringify(auditIssues.slice(0, 5))}`
);

// -----------------------------------------------------------------------------
// SUITE 11: Cross-Linkage Parity with chaptersData.ts
// -----------------------------------------------------------------------------
console.log('\n--- 11. Cross-Linkage Parity with registered chapters in chaptersData.ts ---');
const registeredChapterIds = new Set(chapters.map((c) => c.id));
check('chaptersData contains exactly 14 registered chapters (hist-1..9, pol-1..5)', registeredChapterIds.size === 14);

let invalidChapAssociations = [];
const usedChapAssociations = new Set();
for (const q of allQuestions) {
  usedChapAssociations.add(q.chapterAssociationId);
  if (!registeredChapterIds.has(q.chapterAssociationId)) {
    invalidChapAssociations.push({ id: q.id, chapterAssociationId: q.chapterAssociationId });
  }
}

check(
  'All 185 question chapterAssociationId values strictly point to registered chapters in chaptersData.ts',
  invalidChapAssociations.length === 0,
  `Invalid associations: ${JSON.stringify(invalidChapAssociations)}`
);
check(
  'All 14 curriculum chapters are actively cross-linked by board paper questions (100% curriculum coverage)',
  usedChapAssociations.size === 14,
  `Represented chapters: ${usedChapAssociations.size} of 14`
);

// -----------------------------------------------------------------------------
// FINAL SUMMARY & EXIT
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`TOTAL CHECKS: ${totalChecks} | PASSED: ${passedChecks} | FAILED: ${failures.length}`);
console.log('================================================================');

if (failures.length > 0) {
  console.error('\n❌ FAILURES DETECTED:');
  failures.forEach((f, i) => console.error(`  ${i + 1}. ${f.name}: ${f.errorDetail}`));
  process.exit(1);
} else {
  console.log('\n🌟 ALL BOARD PAPERS EMPIRICAL VERIFICATION CHECKS PASSED!\n');
  process.exit(0);
}
