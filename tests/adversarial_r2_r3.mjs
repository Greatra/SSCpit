#!/usr/bin/env node
// tests/adversarial_r2_r3.mjs
// Adversarial Empirical Verification Suite for Requirement 2 & Requirement 3
// Challenger 2 (teamwork_preview_challenger_m6_2)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chaptersData } from '../src/data/chaptersData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const ANSI = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  coral: '\x1b[38;2;204;120;92m',
  teal: '\x1b[38;2;93;184;166m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
};

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ${ANSI.green}✓ PASS${ANSI.reset}: ${testName}`);
  } else {
    failedTests++;
    failures.push({ testName, details });
    console.error(`  ${ANSI.red}✗ FAIL${ANSI.reset}: ${testName} - ${details}`);
  }
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walkDir(fullPath) : [fullPath];
  });
}

console.log(`\n${ANSI.coral}${ANSI.bold}================================================================================${ANSI.reset}`);
console.log(`${ANSI.coral}${ANSI.bold}   ADVERSARIAL EMPIRICAL VERIFICATION : REQUIREMENTS 2 & 3                      ${ANSI.reset}`);
console.log(`${ANSI.coral}${ANSI.bold}   Challenger 2 (teamwork_preview_challenger_m6_2)                             ${ANSI.reset}`);
console.log(`${ANSI.coral}${ANSI.bold}================================================================================${ANSI.reset}\n`);

// =============================================================================
// SUITE 1: ZERO-SHADOW LAW ADVERSARIAL SCAN ACROSS ALL SRC/ FILES
// =============================================================================
console.log(`${ANSI.teal}${ANSI.bold}[SUITE 1] Adversarial Zero-Shadow Scan Across src/${ANSI.reset}`);

const srcFiles = walkDir(path.join(rootDir, 'src')).filter((f) =>
  /\.(tsx|ts|css|jsx|js|html)$/.test(f)
);

let forbiddenShadowCount = 0;
const shadowViolations = [];

for (const file of srcFiles) {
  const relPath = path.relative(rootDir, file);
  const rawContent = fs.readFileSync(file, 'utf8');

  // Strip line comments and block comments to analyze executable code & styles
  const cleanContent = rawContent
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*/g, '');

  // 1. Check for CSS / inline style box-shadow definitions
  const cssShadowMatches = cleanContent.match(/box-shadow\s*:\s*([^;\}]+)/gi) || [];
  for (const match of cssShadowMatches) {
    const val = match.replace(/box-shadow\s*:\s*/i, '').trim().replace(/\s*!important/i, '').trim();
    if (val !== 'none' && val !== '0' && val !== 'inherit' && val !== 'unset') {
      forbiddenShadowCount++;
      shadowViolations.push(`${relPath}: CSS box-shadow: ${val}`);
    }
  }

  const jsShadowMatches = cleanContent.match(/boxShadow\s*:\s*['"`]([^'"`]+)['"`]/gi) || [];
  for (const match of jsShadowMatches) {
    const val = match.replace(/boxShadow\s*:\s*['"`]/i, '').replace(/['"`]$/, '').trim();
    if (val !== 'none' && val !== '0') {
      forbiddenShadowCount++;
      shadowViolations.push(`${relPath}: JS boxShadow: '${val}'`);
    }
  }

  // 2. Check for Tailwind shadow classes: shadow, shadow-sm, shadow-md, shadow-lg, shadow-xl, shadow-2xl, shadow-inner
  const twShadowRegex = /\bshadow-(?:sm|md|lg|xl|2xl|inner)\b|\bshadow\b(?!\s*:\s*none)(?!-none)/g;
  let twMatch;
  while ((twMatch = twShadowRegex.exec(cleanContent)) !== null) {
    const matchStr = twMatch[0];
    const surrounding = cleanContent.slice(Math.max(0, twMatch.index - 10), twMatch.index + matchStr.length + 10);
    if (!surrounding.includes('shadow-none') && !surrounding.includes('box-shadow')) {
      forbiddenShadowCount++;
      shadowViolations.push(`${relPath}: Tailwind class '${matchStr}' in context: "${surrounding.trim()}"`);
    }
  }
}

assert(
  forbiddenShadowCount === 0,
  `Zero-Shadow Law across all ${srcFiles.length} source files in src/`,
  forbiddenShadowCount > 0 ? `Found ${forbiddenShadowCount} violations:\n    ` + shadowViolations.join('\n    ') : ''
);

// Verify that global CSS enforces strict box-shadow: none !important
const indexCssPath = path.join(rootDir, 'src', 'styles', 'index.css');
const indexCss = fs.readFileSync(indexCssPath, 'utf8');
assert(
  indexCss.includes('box-shadow: none !important'),
  'Global CSS enforces box-shadow: none !important on standard UI elements'
);

// =============================================================================
// SUITE 2: ZERO EM DASHES (—) VERIFICATION ACROSS SOURCE & CURRICULUM
// =============================================================================
console.log(`\n${ANSI.teal}${ANSI.bold}[SUITE 2] Em Dash (—, U+2014) Elimination Scan${ANSI.reset}`);

let emDashCount = 0;
const emDashViolations = [];

for (const file of srcFiles) {
  const relPath = path.relative(rootDir, file);
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, lineIdx) => {
    if (line.includes('—') || line.includes('\u2014')) {
      emDashCount++;
      emDashViolations.push(`${relPath}:${lineIdx + 1}: ${line.trim()}`);
    }
  });
}

assert(
  emDashCount === 0,
  `Zero occurrences of em dashes (—) across all ${srcFiles.length} source files in src/`,
  emDashCount > 0 ? `Found ${emDashCount} em dashes:\n    ` + emDashViolations.slice(0, 10).join('\n    ') : ''
);

// In-memory scan of chaptersData for any em dash
let inMemoryEmDashes = 0;
JSON.stringify(chaptersData, (key, value) => {
  if (typeof value === 'string' && (value.includes('—') || value.includes('\u2014'))) {
    inMemoryEmDashes++;
  }
  return value;
});

assert(
  inMemoryEmDashes === 0,
  'In-memory curriculum data contains exactly 0 em dashes (—) across all fields'
);

// =============================================================================
// SUITE 3: AUTHENTIC MARATHI CURRICULUM INTEGRITY (100% DATA VERIFICATION)
// =============================================================================
console.log(`\n${ANSI.teal}${ANSI.bold}[SUITE 3] Authentic Devanagari Curriculum Data Integrity (9 Ch, 63 Qs, 185 Pts)${ANSI.reset}`);

// 1. Chapters count & distribution
assert(
  Array.isArray(chaptersData) && chaptersData.length === 9,
  `100% of chapters loaded: exactly 9 chapters (Found: ${chaptersData.length})`
);

const historyChapters = chaptersData.filter((c) => c.subject === 'history');
const polChapters = chaptersData.filter((c) => c.subject === 'political_science');
assert(
  historyChapters.length === 6 && polChapters.length === 3,
  `Syllabus distribution verified: 6 History chapters, 3 Political Science chapters`
);

// 2. Questions count across all chapters
const totalQuestions = chaptersData.reduce((acc, ch) => acc + ch.questions.length, 0);
assert(
  totalQuestions === 63,
  `Exact 63 questions loaded across all 9 chapters (Found: ${totalQuestions})`
);

// 3. Answer points count across all questions
const totalAnswerPoints = chaptersData.reduce((acc, ch) => {
  return acc + ch.questions.reduce((qAcc, q) => qAcc + q.answerMarathiPoints.length, 0);
}, 0);
assert(
  totalAnswerPoints === 185,
  `Exact 185 answer points loaded across all 63 questions (Found: ${totalAnswerPoints})`
);

// 4. Devanagari validation across all fields
const devanagariRegex = /[\u0900-\u097F]/;

let allTitlesDevanagari = true;
let allSummariesDevanagari = true;
let allQuestionsDevanagari = true;
let allAnswerPointsDevanagari = true;
let allConceptDiagramsDevanagari = true;
let allKeyFiguresDevanagari = true;
let allMilestonesDevanagari = true;

chaptersData.forEach((ch) => {
  if (!devanagariRegex.test(ch.titleMarathi)) allTitlesDevanagari = false;
  if (!devanagariRegex.test(ch.summaryMarathi)) allSummariesDevanagari = false;

  ch.questions.forEach((q) => {
    if (!devanagariRegex.test(q.questionMarathi)) allQuestionsDevanagari = false;
    q.answerMarathiPoints.forEach((pt) => {
      if (!devanagariRegex.test(pt)) allAnswerPointsDevanagari = false;
    });
  });

  ch.conceptDiagrams.forEach((cd) => {
    if (!devanagariRegex.test(cd.titleMarathi)) allConceptDiagramsDevanagari = false;
  });

  ch.keyFigures.forEach((kf) => {
    if (!devanagariRegex.test(kf.nameMarathi)) allKeyFiguresDevanagari = false;
  });

  ch.milestones.forEach((m) => {
    if (!devanagariRegex.test(m.eventMarathi)) allMilestonesDevanagari = false;
  });
});

assert(allTitlesDevanagari, '100% of chapter titles (titleMarathi) contain valid Devanagari text');
assert(allSummariesDevanagari, '100% of chapter summaries (summaryMarathi) contain valid Devanagari text');
assert(allQuestionsDevanagari, '100% of 63 questions (questionMarathi) contain valid Devanagari text');
assert(allAnswerPointsDevanagari, '100% of 185 answer points (answerMarathiPoints) contain valid Devanagari text');
assert(allConceptDiagramsDevanagari, '100% of concept diagrams contain valid Devanagari text');
assert(allKeyFiguresDevanagari, '100% of historical key figures contain valid Devanagari text');
assert(allMilestonesDevanagari, '100% of historical milestones contain valid Devanagari text');

// 5. Check for corrupted encoding or placeholder characters
const chaptersDataRaw = fs.readFileSync(path.join(rootDir, 'src', 'data', 'chaptersData.ts'), 'utf8');
const corruptedMatches = (chaptersDataRaw.match(/[\uFFFD]|(?:\?\?\?\?)/g) || []).length;
assert(
  corruptedMatches === 0,
  'Curriculum database has zero Unicode replacement characters (U+FFFD) or mojibake'
);

// =============================================================================
// SUITE 4: SELECTIVE BILINGUAL ARCHITECTURE & UI SHELL ENGLISH
// =============================================================================
console.log(`\n${ANSI.teal}${ANSI.bold}[SUITE 4] Selective Bilingual Architecture & Editorial English Shell${ANSI.reset}`);

// 1. HeaderNav.tsx
const headerNavPath = path.join(rootDir, 'src', 'components', 'HeaderNav.tsx');
const headerNav = fs.readFileSync(headerNavPath, 'utf8');
assert(
  headerNav.includes('Itihas Swadhay') &&
  headerNav.includes('CLASS 10 // MSBSHSE') &&
  headerNav.includes('All Chapters (9)') &&
  headerNav.includes('History (6)') &&
  headerNav.includes('Political Science (3)') &&
  headerNav.includes('Back to Index'),
  'HeaderNav renders editorial English navigation tags, status, and back button'
);
assert(
  headerNav.includes('title="परत जा"') || headerNav.includes('aria-label="परत जा'),
  'HeaderNav preserves Marathi accessibility/screen-reader labels'
);

// 2. HeroSection.tsx
const heroSectionPath = path.join(rootDir, 'src', 'components', 'hero', 'HeroSection.tsx');
const heroSection = fs.readFileSync(heroSectionPath, 'utf8');
assert(
  heroSection.includes('CLASS 10 // MAHARASHTRA STATE BOARD') &&
  heroSection.includes('HISTORY & POLITICAL SCIENCE ARCHIVE') &&
  heroSection.includes('START PRACTICE') &&
  heroSection.includes('9 CHAPTERS INDEX') &&
  heroSection.includes('SCROLL DOWN TO EXPLORE'),
  'HeroSection renders editorial English machined telemetry, badges, and CTAs'
);

// 3. ChapterSelector.tsx
const chapterSelectorPath = path.join(rootDir, 'src', 'components', 'swadhay', 'ChapterSelector.tsx');
const chapterSelector = fs.readFileSync(chapterSelectorPath, 'utf8');
assert(
  chapterSelector.includes('CHAPTER SELECTOR') &&
  chapterSelector.includes('Syllabus Index') &&
  chapterSelector.includes('HIST-0') &&
  chapterSelector.includes('POL-0'),
  'ChapterSelector renders editorial English headings and Latin machined prefixes'
);
assert(
  chapterSelector.includes('ch.titleMarathi'),
  'ChapterSelector preserves authentic Marathi chapter titles inside selector pills'
);

// 4. QuestionFilterTabs.tsx
const filterTabsPath = path.join(rootDir, 'src', 'components', 'swadhay', 'QuestionFilterTabs.tsx');
const filterTabs = fs.readFileSync(filterTabsPath, 'utf8');
assert(
  filterTabs.includes('All Questions') &&
  filterTabs.includes('Multiple Choice') &&
  filterTabs.includes('Incorrect Pairs') &&
  filterTabs.includes('Concept Maps') &&
  filterTabs.includes('Short Notes') &&
  filterTabs.includes('Give Reasons') &&
  filterTabs.includes('True or False') &&
  filterTabs.includes('Detailed Answers'),
  'QuestionFilterTabs renders all 8 taxonomy categories in polished editorial English'
);

// 5. TelemetrySpecCells.tsx
const telemetryPath = path.join(rootDir, 'src', 'components', 'swadhay', 'TelemetrySpecCells.tsx');
const telemetry = fs.readFileSync(telemetryPath, 'utf8');
assert(
  telemetry.includes('BOARD WEIGHT') &&
  telemetry.includes('QUESTIONS') &&
  telemetry.includes('STUDY TIME') &&
  telemetry.includes('DIFFICULTY') &&
  telemetry.includes('COMPLETED') &&
  telemetry.includes('MARKS') &&
  telemetry.includes('ITEMS') &&
  telemetry.includes('MINS'),
  'TelemetrySpecCells renders machined uppercase BMW M telemetry labels in English'
);

// 6. QuestionAccordion.tsx
const accordionPath = path.join(rootDir, 'src', 'components', 'swadhay', 'QuestionAccordion.tsx');
const accordion = fs.readFileSync(accordionPath, 'utf8');
assert(
  accordion.includes('Marks') &&
  accordion.includes('Point-by-Point') &&
  accordion.includes('MULTIPLE CHOICE // SELECT OPTION') &&
  accordion.includes('PAIR AUDIT // IDENTIFY & CORRECT'),
  'QuestionAccordion renders English structural and interactive headers'
);
assert(
  accordion.includes('question.questionMarathi') &&
  accordion.includes('question.answerMarathiPoints'),
  'QuestionAccordion renders 100% authentic Marathi for question and answer points'
);

// 7. SearchModal.tsx
const searchModalPath = path.join(rootDir, 'src', 'components', 'search', 'SearchModal.tsx');
const searchModal = fs.readFileSync(searchModalPath, 'utf8');
assert(
  searchModal.includes('Search syllabus, concepts, or thinkers...') &&
  searchModal.includes('Enter keywords, historical figures, or concepts to search.'),
  'SearchModal renders editorial English placeholder and instructions'
);

// 8. Footer.tsx
const footerPath = path.join(rootDir, 'src', 'components', 'Footer.tsx');
const footer = fs.readFileSync(footerPath, 'utf8');
assert(
  footer.includes('History Curriculum') &&
  footer.includes('Political Science') &&
  footer.includes('Back to Top') &&
  footer.includes('ACCESSION: MSBSHSE/PUN-2026/HIST-X'),
  'Footer renders English curriculum section headers, accession tags, and back to top action'
);

// =============================================================================
// SUITE 5: AWWWARDS SEMANTIC PALETTE & ZERO-SHADOW INTEGRITY
// =============================================================================
console.log(`\n${ANSI.teal}${ANSI.bold}[SUITE 5] Awwwards Archival Semantic Palette & Hairline Seams${ANSI.reset}`);

const requiredTokens = [
  '--color-archival-terracotta',
  '--color-archival-ochre',
  '--color-archival-cobalt',
  '--color-archival-sage',
  '--color-archival-crimson',
  '--color-archival-basalt',
  '--color-archival-hairline',
];

for (const token of requiredTokens) {
  assert(
    indexCss.includes(token),
    `Index CSS defines Awwwards token ${token}`
  );
}

assert(
  chapterSelector.includes('var(--color-archival-terracotta)') &&
  chapterSelector.includes('var(--color-archival-cobalt)'),
  'ChapterSelector wires archival terracotta and cobalt into subject pills'
);

assert(
  filterTabs.includes('var(--color-archival-basalt)') &&
  filterTabs.includes('var(--color-archival-crimson)') &&
  filterTabs.includes('var(--color-archival-sage)') &&
  filterTabs.includes('var(--color-archival-ochre)') &&
  filterTabs.includes('var(--color-archival-cobalt)') &&
  filterTabs.includes('var(--color-archival-terracotta)'),
  'QuestionFilterTabs applies distinct Awwwards semantic colors to all question category pills'
);

assert(
  accordion.includes('var(--color-archival-basalt)') &&
  accordion.includes('var(--color-archival-crimson)') &&
  accordion.includes('var(--color-archival-sage)') &&
  accordion.includes('var(--color-archival-ochre)') &&
  accordion.includes('var(--color-archival-cobalt)') &&
  accordion.includes('var(--color-archival-terracotta)'),
  'QuestionAccordion applies distinct high-contrast badge styles using Awwwards semantic tokens'
);

assert(
  telemetry.includes('var(--color-archival-terracotta)') &&
  telemetry.includes('var(--color-archival-ochre)') &&
  telemetry.includes('var(--color-archival-cobalt)') &&
  telemetry.includes('var(--color-archival-sage)'),
  'TelemetrySpecCells applies semantic icon colors across telemetry metric cells'
);

// =============================================================================
// SUMMARY
// =============================================================================
console.log(`\n${ANSI.coral}${ANSI.bold}================================================================================${ANSI.reset}`);
console.log(`${ANSI.coral}${ANSI.bold}   TEST SUMMARY                                                                 ${ANSI.reset}`);
console.log(`${ANSI.coral}${ANSI.bold}================================================================================${ANSI.reset}`);
console.log(`  Total Invariants Tested : ${totalTests}`);
console.log(`  Passed                  : ${ANSI.green}${passedTests}${ANSI.reset}`);
console.log(`  Failed                  : ${failedTests > 0 ? ANSI.red : ANSI.green}${failedTests}${ANSI.reset}`);

if (failedTests > 0) {
  console.error(`\n${ANSI.red}${ANSI.bold}FAILED INVARIANTS:${ANSI.reset}`);
  failures.forEach((f, i) => {
    console.error(`  ${i + 1}. ${f.testName}`);
    if (f.details) console.error(`     ${f.details}`);
  });
  process.exit(1);
} else {
  console.log(`\n${ANSI.green}${ANSI.bold}✅ ALL ADVERSARIAL CHECKS PASSED FOR REQUIREMENTS 2 & 3${ANSI.reset}\n`);
  process.exit(0);
}
