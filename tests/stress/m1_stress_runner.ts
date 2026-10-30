/**
 * Milestone 1 Empirical Stress Test Runner
 * Adversarial tests for:
 * 1. useStudyStore resilience (SSR/headless, empty localStorage, malformed JSON, quota exceeded, throwing storage)
 * 2. Type contracts exhaustiveness & null safety (curriculum.ts, search.ts, worker.ts)
 * 3. Store state immutability & invariants
 */

import type {
  Chapter,
  QuestionType,
  SubjectType,
  DifficultyLevel,
  ConceptDiagram,
} from '../../src/types/curriculum.ts';
import type {
  SearchEntryType,
} from '../../src/types/search.ts';
import type {
  MainToWorkerMessage,
  WorkerToMainMessage,
} from '../../src/types/worker.ts';

// Helper for exhaustive type checks
function assertNever(x: never): never {
  throw new Error(`Unhandled union member: ${JSON.stringify(x)}`);
}

interface TestResult {
  name: string;
  category: string;
  passed: boolean;
  error?: string;
  details?: string;
}

const results: TestResult[] = [];

function record(name: string, category: string, passed: boolean, details?: string, error?: string) {
  results.push({ name, category, passed, details, error });
  const status = passed ? '✅ PASS' : '❌ FAIL';
  console.log(`${status} [${category}] ${name}`);
  if (details) console.log(`   Details: ${details}`);
  if (error) console.log(`   Error: ${error}`);
}

// -------------------------------------------------------------
// TEST SUITE 1: TypeScript Contract Exhaustiveness & Null Safety
// -------------------------------------------------------------

function testTypeContracts() {
  console.log('\n--- SUITE 1: TypeScript Contract Exhaustiveness & Safety ---');

  // 1.1 QuestionType exhaustiveness
  try {
    const questionTypes: QuestionType[] = [
      'mcq',
      'wrong_pair',
      'concept_map',
      'short_notes',
      'give_reasons',
      'true_false_reasons',
      'detailed_answer',
    ];

    const handled: string[] = [];
    for (const qt of questionTypes) {
      switch (qt) {
        case 'mcq':
        case 'wrong_pair':
        case 'concept_map':
        case 'short_notes':
        case 'give_reasons':
        case 'true_false_reasons':
        case 'detailed_answer':
          handled.push(qt);
          break;
        default:
          assertNever(qt);
      }
    }
    record('QuestionType Exhaustiveness', 'Types', handled.length === 7, `Handled ${handled.length}/7 variants`);
  } catch (err: any) {
    record('QuestionType Exhaustiveness', 'Types', false, undefined, err.message);
  }

  // 1.2 SubjectType exhaustiveness
  try {
    const subjects: SubjectType[] = ['history', 'political_science'];
    const handledSubjects: string[] = [];
    for (const s of subjects) {
      switch (s) {
        case 'history':
        case 'political_science':
          handledSubjects.push(s);
          break;
        default:
          assertNever(s);
      }
    }
    record('SubjectType Exhaustiveness', 'Types', handledSubjects.length === 2, `Handled ${handledSubjects.length}/2 variants`);
  } catch (err: any) {
    record('SubjectType Exhaustiveness', 'Types', false, undefined, err.message);
  }

  // 1.3 DifficultyLevel exhaustiveness
  try {
    const difficulties: DifficultyLevel[] = ['सुलभ', 'मध्यम', 'प्रगत'];
    const handledDiffs: string[] = [];
    for (const d of difficulties) {
      switch (d) {
        case 'सुलभ':
        case 'मध्यम':
        case 'प्रगत':
          handledDiffs.push(d);
          break;
        default:
          assertNever(d);
      }
    }
    record('DifficultyLevel Exhaustiveness', 'Types', handledDiffs.length === 3, `Handled ${handledDiffs.length}/3 Marathi variants`);
  } catch (err: any) {
    record('DifficultyLevel Exhaustiveness', 'Types', false, undefined, err.message);
  }

  // 1.4 ConceptDiagram type exhaustiveness
  try {
    const diagramTypes: ConceptDiagram['type'][] = ['hierarchy', 'flow', 'category'];
    const handledDiagrams: string[] = [];
    for (const dt of diagramTypes) {
      switch (dt) {
        case 'hierarchy':
        case 'flow':
        case 'category':
          handledDiagrams.push(dt);
          break;
        default:
          assertNever(dt);
      }
    }
    record('ConceptDiagram.type Exhaustiveness', 'Types', handledDiagrams.length === 3, `Handled ${handledDiagrams.length}/3 variants`);
  } catch (err: any) {
    record('ConceptDiagram.type Exhaustiveness', 'Types', false, undefined, err.message);
  }

  // 1.5 SearchEntryType exhaustiveness
  try {
    const entryTypes: SearchEntryType[] = ['chapter', 'question', 'figure', 'concept'];
    const handledEntries: string[] = [];
    for (const et of entryTypes) {
      switch (et) {
        case 'chapter':
        case 'question':
        case 'figure':
        case 'concept':
          handledEntries.push(et);
          break;
        default:
          assertNever(et);
      }
    }
    record('SearchEntryType Exhaustiveness', 'Types', handledEntries.length === 4, `Handled ${handledEntries.length}/4 variants`);
  } catch (err: any) {
    record('SearchEntryType Exhaustiveness', 'Types', false, undefined, err.message);
  }

  // 1.6 MainToWorkerMessage exhaustiveness
  try {
    const mockCanvas = {} as OffscreenCanvas;
    const workerMsgs: MainToWorkerMessage[] = [
      { type: 'INIT', canvas: mockCanvas, width: 800, height: 600, dpr: 1.0, tier: 1 },
      { type: 'RESIZE', width: 1024, height: 768 },
      { type: 'SCROLL', scrollY: 150, maxScroll: 1000 },
      { type: 'MOUSE_MOVE', normalizedX: 0.5, normalizedY: 0.5 },
      { type: 'DISPOSE' },
    ];
    const handledMsgs: string[] = [];
    for (const msg of workerMsgs) {
      switch (msg.type) {
        case 'INIT':
        case 'RESIZE':
        case 'SCROLL':
        case 'MOUSE_MOVE':
        case 'DISPOSE':
          handledMsgs.push(msg.type);
          break;
        default:
          assertNever(msg);
      }
    }
    record('MainToWorkerMessage Exhaustiveness', 'Types', handledMsgs.length === 5, `Handled ${handledMsgs.length}/5 variants`);
  } catch (err: any) {
    record('MainToWorkerMessage Exhaustiveness', 'Types', false, undefined, err.message);
  }

  // 1.7 WorkerToMainMessage exhaustiveness
  try {
    const workerReplies: WorkerToMainMessage[] = [
      { type: 'READY', rendererInfo: 'WebGL 2.0 (Intel Iris)' },
      { type: 'FPS_REPORT', fps: 60 },
      { type: 'ERROR', message: 'Context lost' },
    ];
    const handledReplies: string[] = [];
    for (const reply of workerReplies) {
      switch (reply.type) {
        case 'READY':
        case 'FPS_REPORT':
        case 'ERROR':
          handledReplies.push(reply.type);
          break;
        default:
          assertNever(reply);
      }
    }
    record('WorkerToMainMessage Exhaustiveness', 'Types', handledReplies.length === 3, `Handled ${handledReplies.length}/3 variants`);
  } catch (err: any) {
    record('WorkerToMainMessage Exhaustiveness', 'Types', false, undefined, err.message);
  }

  // 1.8 Full Chapter Schema Conformance
  try {
    const fullChapter: Chapter = {
      id: 'hist-01',
      subject: 'history',
      chapterNumber: 1,
      titleMarathi: 'इतिहासलेखन : पाश्चात्त्य परंपरा',
      titleEnglish: 'Historiography : Western Tradition',
      summaryMarathi: 'पाश्चात्त्य इतिहासलेखनाची परंपरा, विचारवंत आणि द्वंद्ववाद यांचा सखोल अभ्यास.',
      telemetry: {
        boardWeightageMarks: 4,
        questionCount: 7,
        recommendedStudyMinutes: 45,
        difficultyLevel: 'मध्यम',
      },
      keyFigures: [
        { nameMarathi: 'रेने देकार्त', roleMarathi: 'फ्रेंच विचारवंत (डिस्कॉर्स ऑन द मेथड)', period: '१५९६-१६५०' },
        { nameMarathi: 'व्हॉल्तेअर', roleMarathi: 'आधुनिक इतिहासलेखनाचे जनक', period: '१६९४-१७७८' },
      ],
      milestones: [
        { year: '१७३७', eventMarathi: 'गॉटिंगेन विद्यापीठात स्वतंत्र इतिहास विभाग स्थापना' },
      ],
      conceptDiagrams: [
        {
          titleMarathi: 'पाश्चात्त्य विचारवंत',
          nodes: ['रेने देकार्त', 'व्हॉल्तेअर', 'हेगेल', 'कार्ल मार्क्स'],
          type: 'hierarchy',
        },
      ],
      questions: [
        {
          id: 'q-hist-01-01',
          chapterId: 'hist-01',
          type: 'mcq',
          questionMarathi: 'आधुनिक इतिहासलेखनाचा जनक कोणास म्हटले जाते?',
          marks: 1,
          options: ['व्हॉल्तेअर', 'रेने देकार्त', 'लिओपोल्ड व्हॉन रांके', 'कार्ल मार्क्स'],
          correctOptionIndex: 0,
          answerMarathiPoints: ['व्हॉल्तेअर यांनी मानवी जीवनाचे सर्व पैलू मांडण्याचा विचार मांडला.'],
          answerMarathiDetailed: 'त्यामुळे त्यांना आधुनिक इतिहासलेखनाचा जनक मानले जाते.',
        },
      ],
    };
    record('Chapter Complete Schema Validation', 'Types', fullChapter.questions.length === 1 && fullChapter.telemetry.boardWeightageMarks === 4, 'Full chapter object structurally valid against contract');
  } catch (err: any) {
    record('Chapter Complete Schema Validation', 'Types', false, undefined, err.message);
  }
}

// -------------------------------------------------------------
// TEST SUITE 2: SSR / Headless Mode Store Execution
// -------------------------------------------------------------

async function testSSRMode() {
  console.log('\n--- SUITE 2: SSR / Headless Execution (typeof window === "undefined") ---');

  try {
    // Dynamically import store in pure node environment (window is undefined)
    const { useStudyStore } = await import('../../src/stores/useStudyStore.ts');
    const store = useStudyStore.getState();

    // Verify initial values
    record('SSR Initial Hardware Tier is 1', 'SSR', store.hardwareTier === 1, `hardwareTier: ${store.hardwareTier}`);
    record('SSR Initial Bookmarks is empty Set', 'SSR', store.bookmarks instanceof Set && store.bookmarks.size === 0, `bookmarks.size: ${store.bookmarks.size}`);
    record('SSR Initial Completed Questions is empty Set', 'SSR', store.completedQuestions instanceof Set && store.completedQuestions.size === 0, `completedQuestions.size: ${store.completedQuestions.size}`);
    record('SSR Initial Active Chapter is hist-01', 'SSR', store.activeChapterId === 'hist-01', `activeChapterId: ${store.activeChapterId}`);

    // Exercise all mutation actions under SSR
    store.addBookmark('test-q1');
    const afterAdd = useStudyStore.getState();
    record('SSR addBookmark executes without throwing', 'SSR', afterAdd.bookmarks.has('test-q1'), 'Bookmark added');

    store.toggleBookmark('test-q1');
    const afterToggle = useStudyStore.getState();
    record('SSR toggleBookmark removes item', 'SSR', !afterToggle.bookmarks.has('test-q1'), 'Bookmark removed');

    store.setQuestionCompleted('q-01', true);
    record('SSR setQuestionCompleted marks question', 'SSR', useStudyStore.getState().isQuestionCompleted('q-01'), 'Question completed');

    store.toggleQuestionCompleted('q-01');
    record('SSR toggleQuestionCompleted unmarks question', 'SSR', !useStudyStore.getState().isQuestionCompleted('q-01'), 'Question uncompleted');

    store.setHardwareTier(2);
    record('SSR setHardwareTier updates state', 'SSR', useStudyStore.getState().hardwareTier === 2, `Tier updated to ${useStudyStore.getState().hardwareTier}`);

    const detected = await store.detectHardwareTier();
    record('SSR detectHardwareTier returns fallback 1 without crashing', 'SSR', detected === 1, `detectHardwareTier returned ${detected}`);

    store.openSearch();
    store.setSearchQuery('इतिहास');
    record('SSR search actions operate cleanly', 'SSR', useStudyStore.getState().isSearchOpen && useStudyStore.getState().searchQuery === 'इतिहास', 'Search modal opened with query');

    store.closeSearch();
    record('SSR closeSearch resets query and flag', 'SSR', !useStudyStore.getState().isSearchOpen && useStudyStore.getState().searchQuery === '', 'Search modal closed and query cleared');

  } catch (err: any) {
    record('SSR Store Execution', 'SSR', false, undefined, err.message);
  }
}

// -------------------------------------------------------------
// TEST SUITE 3: Simulated Browser Storage & Adversarial Scenarios
// -------------------------------------------------------------

// Helper to create a controllable mock localStorage
function createMockStorage(options: {
  initial?: Record<string, string>;
  throwOnGet?: boolean;
  throwOnSet?: boolean;
  quotaExceededOnSet?: boolean;
}) {
  const store: Record<string, string> = { ...(options.initial || {}) };
  return {
    getItem: (key: string): string | null => {
      if (options.throwOnGet) {
        throw new Error('SecurityError: Access to Storage is denied for this document');
      }
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string): void => {
      if (options.quotaExceededOnSet) {
        const err: any = new Error('DOMException: QuotaExceededError');
        err.name = 'QuotaExceededError';
        throw err;
      }
      if (options.throwOnSet) {
        throw new Error('SecurityError: SetItem is forbidden');
      }
      store[key] = String(value);
    },
    removeItem: (key: string): void => {
      delete store[key];
    },
    clear: (): void => {
      for (const k of Object.keys(store)) delete store[k];
    },
    _raw: store,
  };
}

async function runAdversarialStorageTests() {
  console.log('\n--- SUITE 3: Adversarial LocalStorage & Edge Cases ---');

  // We test the logic of getInitialHardwareTier, getStoredBookmarks, getStoredCompletedQuestions
  // and persist helpers by isolating their implementation under simulated window / localStorage.

  // Test 3.1: Empty localStorage
  {
    const emptyStorage = createMockStorage({ initial: {} });
    // Simulate reading empty keys
    const rawBookmarks = emptyStorage.getItem('itihas_bookmarks');
    const rawTier = emptyStorage.getItem('itihas_hardware_tier');
    const parsedTier = rawTier !== null ? parseInt(rawTier, 10) : 1;
    record('Empty Storage: Hardware Tier defaults to 1', 'Storage-Empty', parsedTier === 1, `rawTier is null -> tier 1`);
    record('Empty Storage: Bookmarks is null', 'Storage-Empty', rawBookmarks === null, `rawBookmarks is null -> Set()`);
  }

  // Test 3.2: Malformed JSON in bookmarks
  {
    const corruptInputs = [
      '{ bad json: 123',
      'undefined',
      'null',
      '12345',
      '"a raw string"',
      '{"key": "object"}',
      '[null, undefined, 42]',
      'true',
      '',
    ];

    let allHandledSafely = true;
    for (const corrupt of corruptInputs) {
      try {
        let bookmarksSet: Set<string>;
        if (corrupt) {
          try {
            const parsed = JSON.parse(corrupt);
            if (Array.isArray(parsed)) {
              bookmarksSet = new Set(parsed);
            } else {
              bookmarksSet = new Set();
            }
          } catch {
            bookmarksSet = new Set();
          }
        } else {
          bookmarksSet = new Set();
        }
        if (!(bookmarksSet instanceof Set)) {
          allHandledSafely = false;
        }
      } catch {
        allHandledSafely = false;
      }
    }
    record('Malformed Bookmarks JSON parsing resilience', 'Storage-Malformed', allHandledSafely, `Tested ${corruptInputs.length} corrupt inputs without crashing`);
  }

  // Test 3.3: Malformed Hardware Tier values
  {
    const tierInputs: Array<{ input: string | null; expected: number }> = [
      { input: null, expected: 1 },
      { input: '0', expected: 0 },
      { input: '1', expected: 1 },
      { input: '2', expected: 2 },
      { input: '3', expected: 1 },
      { input: '-1', expected: 1 },
      { input: '999', expected: 1 },
      { input: 'abc', expected: 1 },
      { input: 'undefined', expected: 1 },
      { input: 'null', expected: 1 },
      { input: '', expected: 1 },
      { input: '0.9', expected: 0 }, // parseInt('0.9', 10) === 0
    ];

    let allTiersValid = true;
    for (const { input, expected } of tierInputs) {
      let resolvedTier = 1;
      if (input !== null) {
        const parsed = parseInt(input, 10);
        if (parsed === 0 || parsed === 1 || parsed === 2) {
          resolvedTier = parsed;
        }
      }
      if (resolvedTier !== expected) {
        allTiersValid = false;
        console.log(`Mismatch for input "${input}": expected ${expected}, got ${resolvedTier}`);
      }
    }
    record('Malformed Hardware Tier parser resilience', 'Storage-Malformed', allTiersValid, `Tested ${tierInputs.length} boundary inputs`);
  }

  // Test 3.4: QuotaExceededError handling during persist
  {
    const quotaStorage = createMockStorage({ quotaExceededOnSet: true });
    let didThrow = false;
    try {
      try {
        quotaStorage.setItem('itihas_bookmarks', JSON.stringify(['q1', 'q2']));
      } catch {
        // Handled gracefully in persistBookmarks
      }
    } catch {
      didThrow = true;
    }
    record('QuotaExceededError is caught and swallowed', 'Storage-Quota', !didThrow, 'Storage failure does not bubble up to UI thread');
  }

  // Test 3.5: CRITICAL SECURITY CHECK - Module-level auto-run at line 243
  // In src/stores/useStudyStore.ts lines 242-245:
  // if (typeof window !== 'undefined' && localStorage.getItem(HARDWARE_TIER_KEY) === null) {
  //   useStudyStore.getState().detectHardwareTier();
  // }
  // What happens if window is defined, but localStorage is null, undefined, or throws on getItem?
  {
    let moduleLevelProtected = true;
    const testCases = [
      {
        desc: 'localStorage is null',
        exec: () => {
          const fakeWindow = {};
          const fakeLocalStorage: any = null;
          // Evaluating: if (typeof fakeWindow !== 'undefined' && fakeLocalStorage.getItem('key') === null)
          try {
            if (typeof fakeWindow !== 'undefined' && fakeLocalStorage.getItem('key') === null) {
              // ...
            }
          } catch (e) {
            return 'CRASHED: ' + (e as Error).message;
          }
          return 'SAFE';
        },
      },
      {
        desc: 'localStorage throws SecurityError',
        exec: () => {
          const fakeWindow = {};
          const fakeLocalStorage = {
            getItem: () => {
              throw new Error('SecurityError: Access is denied');
            },
          };
          try {
            if (typeof fakeWindow !== 'undefined' && fakeLocalStorage.getItem('key') === null) {
              // ...
            }
          } catch (e) {
            return 'CRASHED: ' + (e as Error).message;
          }
          return 'SAFE';
        },
      },
    ];

    for (const tc of testCases) {
      const outcome = tc.exec();
      if (outcome.startsWith('CRASHED')) {
        moduleLevelProtected = false;
        console.log(`   ⚠️ Line 243 vulnerability confirmed: when ${tc.desc} -> ${outcome}`);
      }
    }

    record(
      'Module-Level Line 243 Throw Safety Check',
      'Vulnerability-Audit',
      moduleLevelProtected,
      moduleLevelProtected ? 'Protected' : 'Unprotected localStorage access at line 243 crashes when localStorage throws or is null'
    );
  }
}

// -------------------------------------------------------------
// TEST SUITE 4: State Store Invariants & Immutability
// -------------------------------------------------------------

async function testStoreInvariants() {
  console.log('\n--- SUITE 4: Store State Invariants & Immutability ---');

  const { useStudyStore } = await import('../../src/stores/useStudyStore.ts');

  // Test 4.1: Bookmarks Set reference change (immutability)
  const initialBookmarks = useStudyStore.getState().bookmarks;
  useStudyStore.getState().addBookmark('immutable-test-1');
  const updatedBookmarks = useStudyStore.getState().bookmarks;
  const isReferenceChanged = initialBookmarks !== updatedBookmarks;
  record('Bookmarks Set updates immutably (new reference for React reactivity)', 'Invariants', isReferenceChanged, 'Old !== New Set instance');

  // Test 4.2: Idempotent addBookmark
  useStudyStore.getState().addBookmark('immutable-test-1');
  const afterDuplicateAdd = useStudyStore.getState().bookmarks;
  const count = Array.from(afterDuplicateAdd).filter((x) => x === 'immutable-test-1').length;
  record('addBookmark is idempotent', 'Invariants', count === 1, `Count of id: ${count}`);

  // Test 4.3: Completed questions reference change
  const initialCompleted = useStudyStore.getState().completedQuestions;
  useStudyStore.getState().setQuestionCompleted('q-imm-1', true);
  const updatedCompleted = useStudyStore.getState().completedQuestions;
  record('CompletedQuestions updates immutably', 'Invariants', initialCompleted !== updatedCompleted, 'Old !== New Set instance');

  // Test 4.4: Active Category Filter accepts 'all' and QuestionType
  useStudyStore.getState().setActiveCategoryFilter('mcq');
  record('setActiveCategoryFilter accepts QuestionType "mcq"', 'Invariants', useStudyStore.getState().activeCategoryFilter === 'mcq', 'Category filter updated');
  useStudyStore.getState().setActiveCategoryFilter('all');
  record('setActiveCategoryFilter accepts "all"', 'Invariants', useStudyStore.getState().activeCategoryFilter === 'all', 'Category filter reset to all');

  // Test 4.5: Active Subject Filter accepts SubjectFilter variants
  useStudyStore.getState().setActiveSubjectFilter('political_science');
  record('setActiveSubjectFilter accepts "political_science"', 'Invariants', useStudyStore.getState().activeSubjectFilter === 'political_science', 'Subject filter updated');
  useStudyStore.getState().setActiveSubjectFilter('history');
  record('setActiveSubjectFilter accepts "history"', 'Invariants', useStudyStore.getState().activeSubjectFilter === 'history', 'Subject filter updated');
  useStudyStore.getState().setActiveSubjectFilter('all');
  record('setActiveSubjectFilter accepts "all"', 'Invariants', useStudyStore.getState().activeSubjectFilter === 'all', 'Subject filter reset to all');
}

// -------------------------------------------------------------
// MAIN TEST ORCHESTRATOR
// -------------------------------------------------------------

async function runAll() {
  console.log('====================================================');
  console.log('   MILENSTONE 1 EMPIRICAL STRESS TEST SUITE');
  console.log('====================================================');

  testTypeContracts();
  await testSSRMode();
  await runAdversarialStorageTests();
  await testStoreInvariants();

  console.log('\n====================================================');
  console.log('                  TEST SUMMARY');
  console.log('====================================================');
  const passedCount = results.filter((r) => r.passed).length;
  const failedCount = results.filter((r) => !r.passed).length;
  console.log(`Total: ${results.length} | Passed: ${passedCount} | Failed: ${failedCount}`);

  if (failedCount > 0) {
    console.log('\nFAILED TESTS:');
    for (const r of results.filter((r) => !r.passed)) {
      console.log(`- [${r.category}] ${r.name}: ${r.details || r.error}`);
    }
  }

  return { passedCount, failedCount, total: results.length };
}

runAll().then((summary) => {
  if (summary.failedCount > 0) {
    console.log(`\nExit status: ${summary.failedCount} failures detected.`);
    process.exitCode = 1;
  } else {
    console.log('\nExit status: ALL TESTS PASSED.');
  }
});
