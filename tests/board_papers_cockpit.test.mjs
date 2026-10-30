import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Board Papers Cockpit: All 10 exam years are archived in dataset', async () => {
  const content = fs.readFileSync('src/data/boardPapersData.ts', 'utf8');
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  for (const yr of years) {
    assert.ok(
      content.includes(`"year": ${yr}`),
      `Exam year ${yr} must exist in boardPapersData.ts`
    );
  }
});

test('Board Papers Cockpit: 2021 COVID Resolution data exists with 50:30:20 formula', async () => {
  const content = fs.readFileSync('src/data/boardPapersData.ts', 'utf8');
  assert.ok(content.includes('covid_resolution'), 'Must specify covid_resolution curriculum era');
  assert.ok(content.includes('class9Weightage": 50'), 'Must specify 50% Class 9 weightage');
  assert.ok(content.includes('class10WrittenWeightage": 30'), 'Must specify 30% Class 10 written weightage');
  assert.ok(content.includes('class10InternalWeightage": 20'), 'Must specify 20% Class 10 internal weightage');
  assert.ok(content.includes('संकीर्ण २०२१/प्र.क्र.३९/एसडी-२'), 'Must include official GR citation');
});

test('Board Papers Cockpit: Recurring frequency markers (★★★, ★★, ★) are present', async () => {
  const content = fs.readFileSync('src/data/boardPapersData.ts', 'utf8');
  assert.ok(content.includes('"stars": "★★★"'), 'Must contain 3-star recurrence markers');
  assert.ok(content.includes('"stars": "★★"'), 'Must contain 2-star recurrence markers');
  assert.ok(content.includes('trendAnalysisMarathi'), 'Must contain trendAnalysisMarathi');
});

test('Board Papers Cockpit: Tripartite MSBSHSE Rubrics are present', async () => {
  const content = fs.readFileSync('src/data/boardPapersData.ts', 'utf8');
  assert.ok(content.includes('"prastavana"'), 'Must contain prastavana in rubrics');
  assert.ok(content.includes('"mukhyaMudde"'), 'Must contain mukhyaMudde in rubrics');
  assert.ok(content.includes('"nishkarsha"'), 'Must contain nishkarsha in rubrics');
  assert.ok(content.includes('"scoringRuleMarathi"'), 'Must contain scoringRuleMarathi');
});

test('Board Papers Cockpit: Store state includes activeViewTab and activeBoardYear', async () => {
  const content = fs.readFileSync('src/stores/useStudyStore.ts', 'utf8');
  assert.ok(content.includes('activeViewTab: ViewTab'), 'Store must define activeViewTab');
  assert.ok(content.includes('setActiveViewTab: (tab: ViewTab) => void'), 'Store must define setActiveViewTab');
  assert.ok(content.includes('activeBoardYear: ExamYear'), 'Store must define activeBoardYear');
  assert.ok(content.includes('setActiveBoardYear: (year: ExamYear) => void'), 'Store must define setActiveBoardYear');
});

test('Board Papers Cockpit: Zero-Shadow Law strictly upheld across all board components', async () => {
  const boardDir = 'src/components/board';
  const files = fs.readdirSync(boardDir).filter((f) => f.endsWith('.tsx'));
  assert.ok(files.length >= 6, 'All 6 board components must be created');

  for (const f of files) {
    const filePath = path.join(boardDir, f);
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanContent = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');

    const hasTwShadow = /\b(?:drop-)?shadow(?:-(?:sm|md|lg|xl|2xl|inner|\[[^\]]+\]))?\b(?!\s*:\s*none)(?!-none)/.test(cleanContent);
    const hasCssShadow = /box-shadow\s*:\s*(?!none)/i.test(cleanContent);
    const hasJsBoxShadow = /boxShadow\s*:\s*['"`](?!none)['"`]/.test(cleanContent);

    assert.ok(!hasTwShadow, `Forbidden Tailwind shadow class found in ${f}`);
    assert.ok(!hasCssShadow, `Forbidden CSS box-shadow found in ${f}`);
    assert.ok(!hasJsBoxShadow, `Forbidden JS boxShadow found in ${f}`);
  }
});

test('Board Papers Cockpit: App.tsx and HeaderNav.tsx wire up view switching cleanly', async () => {
  const appContent = fs.readFileSync('src/App.tsx', 'utf8');
  assert.ok(appContent.includes('<BoardPapersCockpit'), 'App.tsx must render BoardPapersCockpit');
  assert.ok(appContent.includes("activeViewTab === 'board_papers'"), 'App.tsx must switch on activeViewTab');
  assert.match(
    appContent,
    /activeViewTab === 'board_papers'[\s\S]*<BoardPapersCockpit[\s\S]*\)\s*:\s*\([\s\S]*<HeroSection \/>/,
    'App.tsx must retain the Chapters render fallback after Board Papers'
  );
  assert.ok(!appContent.includes('NeuroLabCockpit'), 'App.tsx must not retain the Neuro Lab render path');

  const navContent = fs.readFileSync('src/components/HeaderNav.tsx', 'utf8');
  assert.ok(navContent.includes('Board Papers'), 'HeaderNav must render Board Papers navigation tab');
  assert.ok(navContent.includes('Chapters'), 'HeaderNav must render Chapters navigation tab');
  assert.ok(navContent.includes("setActiveViewTab('board_papers')"), 'HeaderNav must toggle board_papers view');
  assert.ok(navContent.includes("setActiveViewTab('chapters')"), 'HeaderNav must preserve chapters view navigation');
  assert.ok(!navContent.includes('Neuro Lab'), 'HeaderNav must not render the Neuro Lab tab');
});
