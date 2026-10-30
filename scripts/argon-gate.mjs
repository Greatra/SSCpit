import fs from 'node:fs';
import path from 'node:path';

const failures = [];
function assertInvariant(condition, code, message) {
  if (!condition) failures.push(`❌ [${code}] ${message}`);
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walkFiles(path.join(dir, d.name)) : [path.join(dir, d.name)]
  );
}

// 1. CSS Cascade Collision Check (:lang(mr) vs .machined-label)
const devCssPath = 'src/styles/trinity-devanagari.css';
if (fs.existsSync(devCssPath)) {
  const devCss = fs.readFileSync(devCssPath, 'utf8');
  assertInvariant(
    devCss.includes(':not(.machined-label)'),
    'CSS_CASCADE_COLLISION',
    'src/styles/trinity-devanagari.css :lang(mr) selector must exclude :not(.machined-label):not([lang="en"]) so <html lang="mr"> does not wipe out 1.5px uppercase telemetry tracking.'
  );
}

// 2. Zero-Shadow Law & Anti-Slop Icon Check across all src/ files
for (const file of walkFiles('src')) {
  if (!/\.(tsx|ts|css)$/.test(file)) continue;
  const content = fs.readFileSync(file, 'utf8');

  // Strip block and line comments to avoid false positives inside documentation comments
  const cleanContent = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '');

  // Forbid box-shadow in CSS/inline styles (except 'none') and Tailwind shadow-* classes
  const shadowMatches = cleanContent.match(/box-shadow\s*:\s*([^;\}]+)/gi) || [];
  const hasCssShadow = shadowMatches.some((m) => {
    const val = m.replace(/box-shadow\s*:\s*/i, '').trim().replace(/\s*!important/i, '').trim();
    return val !== 'none';
  });
  const hasTwShadow = /\b(?:drop-)?shadow(?:-(?:sm|md|lg|xl|2xl|inner|\[[^\]]+\]))?\b(?!\s*:\s*none)(?!-none)/.test(cleanContent);
  const hasJsBoxShadow = /boxShadow\s*:\s*['"`](?!none)['"`]/.test(cleanContent);
  assertInvariant(
    !hasCssShadow && !hasTwShadow && !hasJsBoxShadow,
    'ZERO_SHADOW_VIOLATION',
    `Forbidden shadow detected in ${file}. Use Trinity surface tone steps (#faf9f5 -> #efe9de) and 1px #e6dfd8 hairlines.`
  );

  // Forbid generic AI Sparkles icon in HeroSection & ChapterReader
  if (file.endsWith('HeroSection.tsx') || file.endsWith('ChapterReader.tsx')) {
    assertInvariant(
      !/\bSparkles\b/.test(content),
      'ANTI_SLOP_ICON_VIOLATION',
      `${path.basename(file)} must not use the generic Sparkles icon. Use a machined BMW M telemetry badge or BookOpen.`
    );
  }
}

// 3. Cross-File Store & Chapter ID Parity Check
const studyStorePath = 'src/stores/useStudyStore.ts';
const chaptersDataPath = 'src/data/chaptersData.ts';
if (fs.existsSync(studyStorePath) && fs.existsSync(chaptersDataPath)) {
  const studyStore = fs.readFileSync(studyStorePath, 'utf8');
  const chaptersData = fs.readFileSync(chaptersDataPath, 'utf8');
  const match = studyStore.match(/activeChapterId:\s*['"]([^'"]+)['"]/);
  if (match) {
    const defaultId = match[1];
    const idExists =
      chaptersData.includes(`id: '${defaultId}'`) ||
      chaptersData.includes(`"id": "${defaultId}"`);
    assertInvariant(
      idExists,
      'STORE_CHAPTER_ID_MISMATCH',
      `useStudyStore.ts default activeChapterId ('${defaultId}') does not exist in chaptersData.ts.`
    );
  }
}

// 4. React 19 OffscreenCanvas Detachment Safety Check
for (const file of walkFiles('src')) {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('transferControlToOffscreen')) {
    assertInvariant(
      !content.includes('WeakMap'),
      'OFFSCREENCANVAS_DETACHMENT_RISK',
      `${file} uses WeakMap with transferControlToOffscreen(). Transferred OffscreenCanvas instances are neutered by postMessage([offscreen]). Use dynamic document.createElement('canvas') inside useEffect instead.`
    );
  }
}

// 5. Orphan Deprecation & Pure Directory Architecture Check
assertInvariant(
  !fs.existsSync('src/store'),
  'ORPHAN_STORE_DETECTED',
  'src/store/ has been consolidated into src/stores/useStudyStore.ts and must remain deleted.'
);
assertInvariant(
  !fs.existsSync('src/components/ChapterReader.tsx'),
  'ORPHAN_COMPONENT_DETECTED',
  'src/components/ChapterReader.tsx has been replaced by QuestionAccordion.tsx and must remain deleted.'
);
assertInvariant(
  !fs.existsSync('src/components/layout'),
  'ORPHAN_LAYOUT_DIR_DETECTED',
  'src/components/layout/ has been replaced by .archival-double-rule and must remain deleted.'
);

// 6. Zero Nested ZIP Archives in Workspace Root
const rootZipFiles = fs.readdirSync('.').filter((f) => f.endsWith('.zip'));
assertInvariant(
  rootZipFiles.length === 0,
  'ROOT_ZIP_CONTAMINATION',
  `Found .zip archives in workspace root: ${rootZipFiles.join(', ')}. Distribution archives must only live in temp.`
);

// 7. Devanagari Grapheme Cluster (Akshara) Segmentation Law
const accordionPath = 'src/components/swadhay/QuestionAccordion.tsx';
if (fs.existsSync(accordionPath)) {
  const accordionContent = fs.readFileSync(accordionPath, 'utf8');
  assertInvariant(
    accordionContent.includes('Intl.Segmenter') && !accordionContent.includes('clean.length} अक्षरे'),
    'DEVANAGARI_AKSHARA_SEGMENTATION_REQUIRED',
    'QuestionAccordion.tsx must use Intl.Segmenter for Devanagari grapheme clusters and Devanagari digits, not UTF-16 .length.'
  );
}

// 8. Authentic SSC Curriculum Rubric Invariant
if (fs.existsSync(chaptersDataPath)) {
  const chaptersDataContent = fs.readFileSync(chaptersDataPath, 'utf8');
  assertInvariant(
    chaptersDataContent.includes('prastavana:') && chaptersDataContent.includes('nishkarsha:'),
    'SSC_RUBRIC_COMPLETENESS',
    'chaptersData.ts must provide authentic prastavana and nishkarsha fields for exam evaluation.'
  );
}

if (failures.length > 0) {
  console.error('\n🚨 ARGON PRINCIPAL ARCHITECT GATE BLOCKED TASK COMPLETION:\n' + failures.join('\n') + '\n');
  process.exit(1);
}

console.log('✅ ARGON PRINCIPAL ARCHITECT GATE PASSED (0 Cross-File Violations)');
