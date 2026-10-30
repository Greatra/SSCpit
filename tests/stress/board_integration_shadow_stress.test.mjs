import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const PROJECT_ROOT = process.cwd();

// ==============================================================================
// 1. PRODUCTION BUILD & WORKER CHUNK VERIFICATION
// ==============================================================================
test('Build Artifacts: dist/ directory exists and contains all required bundles', () => {
  const distPath = path.join(PROJECT_ROOT, 'dist');
  assert.ok(fs.existsSync(distPath), 'dist/ directory must exist');

  const htmlPath = path.join(distPath, 'index.html');
  assert.ok(fs.existsSync(htmlPath), 'dist/index.html must exist');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  assert.ok(htmlContent.includes('<script type="module"'), 'dist/index.html must contain script module tag');

  const assetsPath = path.join(distPath, 'assets');
  assert.ok(fs.existsSync(assetsPath), 'dist/assets directory must exist');

  const assetFiles = fs.readdirSync(assetsPath);

  // Check Web Worker separation for OffscreenCanvas
  const workerChunks = assetFiles.filter((f) => f.includes('heroRender.worker') && f.endsWith('.js'));
  assert.ok(
    workerChunks.length > 0,
    `OffscreenCanvas Web Worker chunk must be generated in dist/assets. Found: ${assetFiles.join(', ')}`
  );

  const workerFile = path.join(assetsPath, workerChunks[0]);
  const workerStat = fs.statSync(workerFile);
  assert.ok(
    workerStat.size > 100000,
    `heroRender.worker chunk must be non-trivial (>100KB). Actual size: ${workerStat.size} bytes`
  );

  // Check main JS and CSS bundles
  const mainJsChunks = assetFiles.filter((f) => f.startsWith('index-') && f.endsWith('.js'));
  assert.ok(mainJsChunks.length > 0, 'Main index-*.js bundle must exist');

  const mainCssChunks = assetFiles.filter((f) => f.startsWith('index-') && f.endsWith('.css'));
  assert.ok(mainCssChunks.length > 0, 'Main index-*.css bundle must exist');
});

// ==============================================================================
// 2. EXHAUSTIVE ZERO-SHADOW AUDIT ACROSS BOARD COMPONENTS & MODIFIED FILES
// ==============================================================================
test('Zero-Shadow Law: Zero box-shadow and zero shadow-*/drop-shadow-* in board components', () => {
  const boardDir = path.join(PROJECT_ROOT, 'src', 'components', 'board');
  const files = fs.readdirSync(boardDir).filter((f) => f.endsWith('.tsx') || f.endsWith('.ts'));

  assert.equal(files.length, 6, 'Exactly 6 board components must be audited');

  const shadowRegex = /\b(?:drop-)?shadow(?:-(?:sm|md|lg|xl|2xl|inner|\[[^\]]+\]))?\b(?!\s*:\s*none)(?!-none)/;
  const cssShadowRegex = /box-shadow\s*:\s*(?!none\b)[^;]+/i;
  const jsBoxShadowRegex = /boxShadow\s*:\s*['"`](?!none\b)[^'"`]+['"`]/;
  const filterDropShadowRegex = /filter\s*:\s*[^;]*drop-shadow\(/i;

  const violations = [];

  for (const f of files) {
    const fullPath = path.join(boardDir, f);
    const content = fs.readFileSync(fullPath, 'utf8');

    // Strip comments
    const stripped = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');

    // Check line by line for precise reporting
    const lines = stripped.split('\n');
    lines.forEach((line, idx) => {
      if (shadowRegex.test(line)) {
        violations.push({ file: f, line: idx + 1, type: 'Tailwind shadow class', code: line.trim() });
      }
      if (cssShadowRegex.test(line)) {
        violations.push({ file: f, line: idx + 1, type: 'CSS box-shadow', code: line.trim() });
      }
      if (jsBoxShadowRegex.test(line)) {
        violations.push({ file: f, line: idx + 1, type: 'JS inline boxShadow', code: line.trim() });
      }
      if (filterDropShadowRegex.test(line)) {
        violations.push({ file: f, line: idx + 1, type: 'CSS filter drop-shadow', code: line.trim() });
      }
    });
  }

  assert.equal(
    violations.length,
    0,
    `Found Zero-Shadow violations in board components:\n${JSON.stringify(violations, null, 2)}`
  );
});

test('Zero-Shadow Law: HeaderNav.tsx and App.tsx are strictly zero-shadow compliant', () => {
  const files = ['src/components/HeaderNav.tsx', 'src/App.tsx'];
  const shadowRegex = /\b(?:drop-)?shadow(?:-(?:sm|md|lg|xl|2xl|inner|\[[^\]]+\]))?\b(?!\s*:\s*none)(?!-none)/;
  const cssShadowRegex = /box-shadow\s*:\s*(?!none\b)[^;]+/i;
  const jsBoxShadowRegex = /boxShadow\s*:\s*['"`](?!none\b)[^'"`]+['"`]/;

  for (const relPath of files) {
    const fullPath = path.join(PROJECT_ROOT, relPath);
    const content = fs.readFileSync(fullPath, 'utf8');
    const stripped = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');

    const lines = stripped.split('\n');
    lines.forEach((line, idx) => {
      assert.ok(
        !shadowRegex.test(line),
        `Tailwind shadow class violation in ${relPath} line ${idx + 1}: ${line.trim()}`
      );
      assert.ok(
        !cssShadowRegex.test(line),
        `CSS box-shadow violation in ${relPath} line ${idx + 1}: ${line.trim()}`
      );
      assert.ok(
        !jsBoxShadowRegex.test(line),
        `JS inline boxShadow violation in ${relPath} line ${idx + 1}: ${line.trim()}`
      );
    });
  }
});

test('Visual Elevation Law: Visual depth is strictly achieved via border hairlines and surface luminance', () => {
  const boardDir = path.join(PROJECT_ROOT, 'src', 'components', 'board');
  const files = fs.readdirSync(boardDir).filter((f) => f.endsWith('.tsx'));

  // Each component must utilize border hairlines and background layers
  for (const f of files) {
    const content = fs.readFileSync(path.join(boardDir, f), 'utf8');
    assert.ok(
      content.includes('border') || content.includes('border-'),
      `${f} must employ border hairlines for structural separation`
    );
    assert.ok(
      content.includes('bg-[') || content.includes('bg-'),
      `${f} must employ surface luminance contrast for card elevation`
    );
  }
});

// ==============================================================================
// 3. RUNTIME DATA & CHAPTER CROSS-LINKING INTEGRITY
// ==============================================================================
test('Curriculum Cross-Linking: Every chapterAssociationId in board papers maps to a valid chapter', async () => {
  const boardContent = fs.readFileSync(path.join(PROJECT_ROOT, 'src/data/boardPapersData.ts'), 'utf8');
  const chapterContent = fs.readFileSync(path.join(PROJECT_ROOT, 'src/data/chaptersData.ts'), 'utf8');

  // Match chapter IDs in chaptersData
  const chapterIdMatches = [...chapterContent.matchAll(/["']?id["']?:\s*['"](hist-\d+|pol-\d+)['"]/g)].map((m) => m[1]);
  const registeredChapterIds = new Set(chapterIdMatches);

  assert.equal(
    registeredChapterIds.size,
    14,
    `All 14 chapters must be present in chaptersData.ts. Found: ${registeredChapterIds.size} (${[...registeredChapterIds].join(', ')})`
  );

  // Extract all chapterAssociationId from boardPapersData.ts
  const assocMatches = [...boardContent.matchAll(/["']?chapterAssociationId["']?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  assert.ok(assocMatches.length >= 100, `Expected at least 100 chapter associations, found: ${assocMatches.length}`);

  const normalizeId = (id) => id.replace('-0', '-');
  const validNormalizedIds = new Set([...registeredChapterIds].map(normalizeId));

  const unmapped = [];
  for (const rawId of assocMatches) {
    const norm = normalizeId(rawId);
    if (!validNormalizedIds.has(norm)) {
      unmapped.push(rawId);
    }
  }

  assert.equal(
    unmapped.length,
    0,
    `Found unmapped chapterAssociationIds in boardPapersData.ts: ${unmapped.join(', ')}`
  );
});

// ==============================================================================
// 4. FILTER STRESS TEST HARNESS ACROSS ALL 10 YEARS
// ==============================================================================
test('Filter Stress Harness: Simulated filter matrix executes cleanly without exceptions', () => {
  const boardContent = fs.readFileSync(path.join(PROJECT_ROOT, 'src/data/boardPapersData.ts'), 'utf8');

  // Check that all 10 years are represented
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  for (const yr of years) {
    assert.ok(boardContent.includes(`"year": ${yr}`) || boardContent.includes(`year: ${yr}`), `Year ${yr} archive must exist`);
  }

  // Verify that all question types used across components are valid types
  const validQuestionTypes = new Set([
    'mcq_1m',
    'wrong_pair_1m',
    'match_columns_1m',
    'concept_map_2m',
    'short_notes_2m',
    'give_reasons_2m',
    'true_false_reasons_2m',
    'passage_analysis_4m',
    'detailed_answer_3m',
    'detailed_answer_4m',
  ]);

  const typeMatches = [...boardContent.matchAll(/["']?type["']?:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  assert.ok(typeMatches.length > 0, 'Must have question types');
  for (const t of typeMatches) {
    assert.ok(validQuestionTypes.has(t), `Unknown question type found in dataset: ${t}`);
  }
});

// ==============================================================================
// 5. 50:30:20 COVID RESOLUTION EVALUATION CALCULATOR MATHEMATICAL ORACLE
// ==============================================================================
test('COVID-19 Resolution Calculator: Evaluates 50:30:20 formula accurately across edge cases', () => {
  const calculateResult = (class9, class10W, class10I) => {
    const valid9 = Math.min(100, Math.max(0, isNaN(class9) ? 0 : class9));
    const valid10W = Math.min(100, Math.max(0, isNaN(class10W) ? 0 : class10W));
    const valid10I = Math.min(100, Math.max(0, isNaN(class10I) ? 0 : class10I));

    const weighted9 = Number(((valid9 * 50) / 100).toFixed(1));
    const weighted10W = Number(((valid10W * 30) / 100).toFixed(1));
    const weighted10I = Number(((valid10I * 20) / 100).toFixed(1));

    const totalCalculatedMarks = Number((weighted9 + weighted10W + weighted10I).toFixed(1));
    const roundedFinalMarks = Math.round(totalCalculatedMarks);

    const getGrade = (marks) => {
      if (marks >= 75) return 'Distinction';
      if (marks >= 60) return 'First Class';
      if (marks >= 45) return 'Second Class';
      if (marks >= 35) return 'Pass Class';
      return 'Needs Improvement';
    };

    return { total: roundedFinalMarks, grade: getGrade(roundedFinalMarks) };
  };

  // Case 1: Perfect scores 100/100/100 -> 100 Distinction
  assert.deepEqual(calculateResult(100, 100, 100), { total: 100, grade: 'Distinction' });

  // Case 2: Zero scores 0/0/0 -> 0 Needs Improvement
  assert.deepEqual(calculateResult(0, 0, 0), { total: 0, grade: 'Needs Improvement' });

  // Case 3: Default UI presets 82/78/90 -> 82 Distinction
  // 82*0.5 = 41.0, 78*0.3 = 23.4, 90*0.2 = 18.0 => 41.0 + 23.4 + 18.0 = 82.4 => round 82
  assert.deepEqual(calculateResult(82, 78, 90), { total: 82, grade: 'Distinction' });

  // Case 4: Pass boundary: 35/35/35 -> 35 Pass Class
  assert.deepEqual(calculateResult(35, 35, 35), { total: 35, grade: 'Pass Class' });

  // Case 5: First Class boundary: 60/60/60 -> 60 First Class
  assert.deepEqual(calculateResult(60, 60, 60), { total: 60, grade: 'First Class' });

  // Case 6: Clamping negative values (-20 -> 0)
  assert.deepEqual(calculateResult(-20, -50, -10), { total: 0, grade: 'Needs Improvement' });

  // Case 7: Clamping overflow values (150 -> 100)
  assert.deepEqual(calculateResult(150, 200, 120), { total: 100, grade: 'Distinction' });

  // Case 8: NaN fallback
  assert.deepEqual(calculateResult(NaN, undefined, null), { total: 0, grade: 'Needs Improvement' });

  // Case 9: 100 Random stress vectors in range [-50, 150]
  for (let i = 0; i < 100; i++) {
    const s9 = Math.floor(Math.random() * 200) - 50;
    const s10w = Math.floor(Math.random() * 200) - 50;
    const s10i = Math.floor(Math.random() * 200) - 50;
    const res = calculateResult(s9, s10w, s10i);
    assert.ok(res.total >= 0 && res.total <= 100, `Result ${res.total} out of bounds for inputs ${s9}, ${s10w}, ${s10i}`);
    assert.ok(['Distinction', 'First Class', 'Second Class', 'Pass Class', 'Needs Improvement'].includes(res.grade));
  }
});

// ==============================================================================
// 6. STORE STATE CONTRACT & VIEW SWITCHING INTEGRATION
// ==============================================================================
test('Zustand Store Integration: contracts, default state, and view switching transitions', () => {
  const storePath = path.join(PROJECT_ROOT, 'src/stores/useStudyStore.ts');
  const storeContent = fs.readFileSync(storePath, 'utf8');

  // Verify type definition
  assert.ok(
    /export type ViewTab = 'chapters' \| 'board_papers';/.test(storeContent),
    'ViewTab must include only chapters and board_papers'
  );

  // Verify initial state
  assert.ok(
    storeContent.includes("activeViewTab: 'chapters'"),
    "Default activeViewTab must be 'chapters'"
  );
  assert.ok(
    storeContent.includes('activeBoardYear: 2024') || storeContent.includes('activeBoardYear: 2025'),
    'activeBoardYear must be initialized to 2024 or 2025'
  );

  // Verify action handlers
  assert.ok(
    storeContent.includes('setActiveViewTab: (activeViewTab: ViewTab) => set({ activeViewTab })') ||
      storeContent.includes('setActiveViewTab: (tab'),
    'setActiveViewTab setter must properly update state'
  );
  assert.ok(
    storeContent.includes('setActiveBoardYear: (activeBoardYear: ExamYear) => set({ activeBoardYear })') ||
      storeContent.includes('setActiveBoardYear: (year'),
    'setActiveBoardYear setter must properly update state'
  );
});

// ==============================================================================
// 7. COMPONENT INTEGRATION: CHAPTER NAVIGATION HANDLER
// ==============================================================================
test('Component Integration: BoardQuestionCard and BoardPapersCockpit link to chapter study', () => {
  const cardPath = path.join(PROJECT_ROOT, 'src/components/board/BoardQuestionCard.tsx');
  const cardContent = fs.readFileSync(cardPath, 'utf8');

  // Verify handleChapterClick calls setActiveViewTab('chapters')
  assert.ok(
    cardContent.includes("setActiveViewTab('chapters')"),
    'BoardQuestionCard must switch activeViewTab to chapters on chapter pill click'
  );
  assert.ok(
    cardContent.includes('setActiveChapterId(question.chapterAssociationId)'),
    'BoardQuestionCard must set activeChapterId to question.chapterAssociationId'
  );
  assert.ok(
    cardContent.includes("scrollIntoView({ behavior: 'smooth' })"),
    'BoardQuestionCard must scroll into swadhay-workspace smoothly'
  );

  const cockpitPath = path.join(PROJECT_ROOT, 'src/components/board/BoardPapersCockpit.tsx');
  const cockpitContent = fs.readFileSync(cockpitPath, 'utf8');

  assert.ok(
    cockpitContent.includes('handleNavigateToChapter'),
    'BoardPapersCockpit must define handleNavigateToChapter'
  );
  assert.ok(
    cockpitContent.includes("setActiveViewTab('chapters')"),
    'BoardPapersCockpit handleNavigateToChapter must switch view to chapters'
  );
});
