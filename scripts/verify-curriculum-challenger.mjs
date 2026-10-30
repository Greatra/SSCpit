import fs from 'node:fs';
import path from 'node:path';

// Load compiled or ts file using dynamic import with node strip types
const chaptersDataPath = path.resolve('src/data/chaptersData.ts');

if (!fs.existsSync(chaptersDataPath)) {
  console.error(`❌ chaptersData.ts not found at ${chaptersDataPath}`);
  process.exit(1);
}

const mod = await import('file:///' + chaptersDataPath.replace(/\\/g, '/'));
const chapters = mod.chaptersData || mod.default;

if (!Array.isArray(chapters)) {
  console.error('❌ chaptersData export is not an array!');
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
console.log('   CURRICULUM DATASET EMPIRICAL STRESS TEST HARNESS');
console.log('================================================================\n');

// 1. Array Length Verification
console.log('--- 1. Chapter Array & Distribution ---');
check('Array length is exactly 14 chapters', chapters.length === 14, `Found ${chapters.length} chapters.`);

const historyChapters = chapters.filter(c => c.subject === 'history');
check('History chapters count is exactly 9', historyChapters.length === 9, `Found ${historyChapters.length} history chapters.`);

const polChapters = chapters.filter(c => c.subject === 'political_science');
check('Political Science chapters count is exactly 5', polChapters.length === 5, `Found ${polChapters.length} pol chapters.`);

// 2. Sequential Chapter IDs & Numbering
console.log('\n--- 2. Chapter Sequential ID & Numbering ---');
const expectedHistIds = Array.from({ length: 9 }, (_, i) => `hist-${i + 1}`);
const actualHistIds = historyChapters.map(c => c.id);
check(
  'History chapter IDs are sequential hist-1 to hist-9',
  JSON.stringify(actualHistIds) === JSON.stringify(expectedHistIds),
  `Expected ${JSON.stringify(expectedHistIds)}, got ${JSON.stringify(actualHistIds)}`
);

const expectedPolIds = Array.from({ length: 5 }, (_, i) => `pol-${i + 1}`);
const actualPolIds = polChapters.map(c => c.id);
check(
  'Political Science chapter IDs are sequential pol-1 to pol-5',
  JSON.stringify(actualPolIds) === JSON.stringify(expectedPolIds),
  `Expected ${JSON.stringify(expectedPolIds)}, got ${JSON.stringify(actualPolIds)}`
);

let sequentialHistNumbers = historyChapters.every((c, i) => c.chapterNumber === i + 1);
check('History chapterNumber sequential 1 to 9', sequentialHistNumbers, 'Mismatch in history chapterNumber');

let sequentialPolNumbers = polChapters.every((c, i) => c.chapterNumber === i + 1);
check('Political Science chapterNumber sequential 1 to 5', sequentialPolNumbers, 'Mismatch in pol chapterNumber');

// 3. Question Count & Sequential Question IDs
console.log('\n--- 3. Question Count & Question IDs ---');
const allQuestions = chapters.flatMap(c => c.questions);
check('Total questions count across all 14 chapters is exactly 98', allQuestions.length === 98, `Found ${allQuestions.length} questions`);

let allHave7Questions = true;
const chapterQuestionCounts = {};
for (const ch of chapters) {
  chapterQuestionCounts[ch.id] = ch.questions.length;
  if (ch.questions.length !== 7) allHave7Questions = false;
}
check(
  'Every single chapter has exactly 7 questions',
  allHave7Questions,
  `Counts: ${JSON.stringify(chapterQuestionCounts)}`
);

// Check question IDs format and uniqueness
const questionIds = new Set();
let duplicateQuestionIds = [];
let malformedQuestionIds = [];
let chapterIdMismatches = [];

for (const ch of chapters) {
  ch.questions.forEach((q, idx) => {
    if (questionIds.has(q.id)) duplicateQuestionIds.push(q.id);
    questionIds.add(q.id);

    const expectedId = `${ch.id}-q-${idx}`;
    if (q.id !== expectedId) {
      malformedQuestionIds.push({ actual: q.id, expected: expectedId });
    }

    if (q.chapterId !== ch.id) {
      chapterIdMismatches.push({ questionId: q.id, questionChapterId: q.chapterId, actualChapterId: ch.id });
    }
  });
}

check('Zero duplicate question IDs', duplicateQuestionIds.length === 0, `Duplicates: ${duplicateQuestionIds.join(', ')}`);
check('All question IDs follow strict sequential convention [chapterId]-q-[0..6]', malformedQuestionIds.length === 0, `Malformed: ${JSON.stringify(malformedQuestionIds)}`);
check('All questions have matching parent chapterId property', chapterIdMismatches.length === 0, `Mismatches: ${JSON.stringify(chapterIdMismatches)}`);

// Chapter IDs uniqueness
const chapterIds = new Set();
let duplicateChapterIds = [];
for (const ch of chapters) {
  if (chapterIds.has(ch.id)) duplicateChapterIds.push(ch.id);
  chapterIds.add(ch.id);
}
check('Zero duplicate chapter IDs', duplicateChapterIds.length === 0, `Duplicates: ${duplicateChapterIds.join(', ')}`);

// 4. Tripartite Rubrics Verification
console.log('\n--- 4. Tripartite Rubrics on Analytical & All Questions ---');
// Analytical questions: short_notes, give_reasons, detailed_answer
const analyticalQuestions = allQuestions.filter(q => ['short_notes', 'give_reasons', 'detailed_answer'].includes(q.type));
const missingAnalyticalRubric = [];
const identicalPrastavanaNishkarsha = [];

for (const q of analyticalQuestions) {
  const hasPrastavana = typeof q.prastavana === 'string' && q.prastavana.trim().length > 10;
  const hasNishkarsha = typeof q.nishkarsha === 'string' && q.nishkarsha.trim().length > 10;
  const hasPoints = Array.isArray(q.answerMarathiPoints) && q.answerMarathiPoints.length >= 2;
  if (!hasPrastavana || !hasNishkarsha || !hasPoints) {
    missingAnalyticalRubric.push({ id: q.id, type: q.type, hasPrastavana, hasNishkarsha, hasPoints });
  }
  if (hasPrastavana && hasNishkarsha && q.prastavana.trim() === q.nishkarsha.trim()) {
    identicalPrastavanaNishkarsha.push(q.id);
  }
}
check(
  `All 47 analytical questions have full tripartite rubric (prastavana, nishkarsha, answerMarathiPoints >= 2)`,
  missingAnalyticalRubric.length === 0,
  `Deficient questions: ${JSON.stringify(missingAnalyticalRubric)}`
);
check(
  'Prastavana and Nishkarsha are distinct texts (no lazy copy-paste)',
  identicalPrastavanaNishkarsha.length === 0,
  `Identical in: ${identicalPrastavanaNishkarsha.join(', ')}`
);

// Check Milestone 2 Ingested Chapters (hist-7, hist-8, hist-9, pol-4, pol-5)
const m2ChapterIds = ['hist-7', 'hist-8', 'hist-9', 'pol-4', 'pol-5'];
const m2Questions = chapters.filter(c => m2ChapterIds.includes(c.id)).flatMap(c => c.questions);
const m2MissingRubric = m2Questions.filter(q => !q.prastavana || !q.nishkarsha || !q.answerMarathiPoints || q.answerMarathiPoints.length === 0);
check(
  `All 35 newly ingested M2 questions (hist-7..9, pol-4..5) have complete tripartite rubrics (35/35)`,
  m2Questions.length === 35 && m2MissingRubric.length === 0,
  `M2 deficient questions: ${m2MissingRubric.map(q => q.id).join(', ')}`
);

// Verify ALL 98 questions have answerMarathiPoints
const questionsMissingPoints = allQuestions.filter(q => !Array.isArray(q.answerMarathiPoints) || q.answerMarathiPoints.length === 0);
check('All 98 questions have non-empty answerMarathiPoints', questionsMissingPoints.length === 0, `Missing: ${questionsMissingPoints.map(q => q.id).join(', ')}`);

// 5. Placeholder & AI-Slop Text Detection
console.log('\n--- 5. Placeholder, Null, & Undefined Field Detection ---');
const placeholderRegex = /\b(TBD|dummy|lorem\s+ipsum|TODO|FIXME|placeholder|xxx|sample\s+text)\b/i;
const placeholderFindings = [];

function scanForPlaceholders(obj, pathStr) {
  if (obj === null || obj === undefined) {
    placeholderFindings.push({ path: pathStr, issue: 'null or undefined value' });
    return;
  }
  if (typeof obj === 'string') {
    if (placeholderRegex.test(obj)) {
      placeholderFindings.push({ path: pathStr, issue: `contains placeholder: "${obj.match(placeholderRegex)[0]}"` });
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, i) => scanForPlaceholders(item, `${pathStr}[${i}]`));
  } else if (typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      scanForPlaceholders(v, `${pathStr}.${k}`);
    }
  }
}

chapters.forEach((ch, i) => scanForPlaceholders(ch, `chaptersData[${i}](${ch.id})`));
check('Zero placeholder text, null, or undefined fields in chaptersData', placeholderFindings.length === 0, `Found: ${JSON.stringify(placeholderFindings.slice(0, 5))}`);

// 6. Question Specific Structure Integrity
console.log('\n--- 6. Question-Specific Schema Validation ---');
const mcqQuestions = allQuestions.filter(q => q.type === 'mcq');
const invalidMcqs = mcqQuestions.filter(q => {
  if (!Array.isArray(q.options) || q.options.length < 3) return true;
  if (typeof q.correctOptionIndex !== 'number' || q.correctOptionIndex < 0 || q.correctOptionIndex >= q.options.length) return true;
  // Check options uniqueness within question
  const optSet = new Set(q.options.map(o => o.trim()));
  return optSet.size !== q.options.length;
});
check(`All ${mcqQuestions.length} MCQ questions have distinct options (>= 3) and in-bounds correctOptionIndex`, invalidMcqs.length === 0, `Invalid MCQs: ${invalidMcqs.map(q => q.id).join(', ')}`);

const wrongPairQuestions = allQuestions.filter(q => q.type === 'wrong_pair');
const invalidWrongPairs = wrongPairQuestions.filter(q => {
  return !q.wrongPairData ||
    !Array.isArray(q.wrongPairData.pairs) ||
    q.wrongPairData.pairs.length === 0 ||
    !q.wrongPairData.incorrectPair ||
    !q.wrongPairData.correctedPair;
});
check(`All ${wrongPairQuestions.length} wrong_pair questions have valid wrongPairData (pairs, incorrectPair, correctedPair)`, invalidWrongPairs.length === 0, `Invalid wrong_pair: ${invalidWrongPairs.map(q => q.id).join(', ')}`);

// Verify wrong_pair content uniqueness (all wrong pairs must be distinct across chapters)
const incorrectPairsSet = new Set();
const duplicateIncorrectPairs = [];
for (const q of wrongPairQuestions) {
  const p = q.wrongPairData.incorrectPair.trim();
  if (incorrectPairsSet.has(p)) duplicateIncorrectPairs.push({ id: q.id, pair: p });
  incorrectPairsSet.add(p);
}
check('All 9 wrong_pair questions have unique historical incorrect pairs across chapters', duplicateIncorrectPairs.length === 0, `Duplicates: ${JSON.stringify(duplicateIncorrectPairs)}`);

// 7. Devanagari Script & Authentic Marathi Content Validation
console.log('\n--- 7. Authentic Marathi Content & Devanagari Presence ---');
const devanagariRegex = /[\u0900-\u097F]/;
const nonDevanagariChapters = chapters.filter(c => !devanagariRegex.test(c.titleMarathi) || !devanagariRegex.test(c.summaryMarathi));
check('All chapter titles and summaries contain authentic Devanagari script', nonDevanagariChapters.length === 0, `Non-Devanagari chapters: ${nonDevanagariChapters.map(c => c.id).join(', ')}`);

const nonDevanagariQuestions = allQuestions.filter(q => !devanagariRegex.test(q.questionMarathi));
check('All 98 question prompts contain authentic Devanagari script', nonDevanagariQuestions.length === 0, `Non-Devanagari questions: ${nonDevanagariQuestions.map(q => q.id).join(', ')}`);

// 8. Chapter Telemetry & Sub-collections Validation
console.log('\n--- 8. Telemetry, Key Figures, Milestones, Concept Diagrams ---');
let invalidTelemetry = [];
let invalidSubcollections = [];

for (const ch of chapters) {
  const t = ch.telemetry;
  if (!t || typeof t.boardWeightageMarks !== 'number' || t.boardWeightageMarks <= 0 ||
      t.questionCount !== ch.questions.length ||
      typeof t.recommendedStudyMinutes !== 'number' || t.recommendedStudyMinutes <= 0 ||
      !['सुलभ', 'मध्यम', 'प्रगत'].includes(t.difficultyLevel)) {
    invalidTelemetry.push(ch.id);
  }

  if (!Array.isArray(ch.keyFigures) || !Array.isArray(ch.milestones) || !Array.isArray(ch.conceptDiagrams)) {
    invalidSubcollections.push(ch.id);
  }
}
check('All 14 chapters have valid telemetry (weightage, questionCount parity, studyMinutes, difficultyLevel)', invalidTelemetry.length === 0, `Invalid: ${invalidTelemetry.join(', ')}`);
check('All 14 chapters have keyFigures, milestones, and conceptDiagrams arrays', invalidSubcollections.length === 0, `Invalid: ${invalidSubcollections.join(', ')}`);

// 9. Non-Objective Question Duplication Check
console.log('\n--- 9. Duplicate Content Anomaly Detection ---');
const nonWrongPair = allQuestions.filter(q => q.type !== 'wrong_pair');
const questionTextMap = new Map();
const duplicateQuestions = [];
for (const q of nonWrongPair) {
  const normalized = q.questionMarathi.trim();
  if (questionTextMap.has(normalized)) {
    duplicateQuestions.push({ existingId: questionTextMap.get(normalized), duplicateId: q.id, text: normalized });
  } else {
    questionTextMap.set(normalized, q.id);
  }
}
check('Zero duplicate question text across all 89 non-wrong_pair questions', duplicateQuestions.length === 0, `Duplicates: ${JSON.stringify(duplicateQuestions)}`);

console.log('\n================================================================');
console.log(`TOTAL CHECKS: ${totalChecks} | PASSED: ${passedChecks} | FAILED: ${failures.length}`);
console.log('================================================================\n');

if (failures.length > 0) {
  console.error('🚨 CURRICULUM VERIFICATION FAILED WITH ' + failures.length + ' FAILURES!');
  process.exit(1);
} else {
  console.log('🌟 ALL CURRICULUM VERIFICATION CHECKS PASSED EMPIRICALLY!');
  process.exit(0);
}
