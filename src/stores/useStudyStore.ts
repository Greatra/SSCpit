import { create } from 'zustand';
import { getGPUTier } from '@pmndrs/detect-gpu';
import type { QuestionType, SubjectType } from '../types/curriculum';
import type { ExamYear } from '../types/boardPapers';

export type HardwareTier = 0 | 1 | 2;
export type CategoryFilter = 'all' | 'revision' | QuestionType;
export type SubjectFilter = 'all' | SubjectType;
export type StudyMode = 'read' | 'recall' | 'cloze'; // 3-Mode Active Recall Engine (वाचन / स्मरण / सराव)
export type ViewTab = 'chapters' | 'board_papers';

const HARDWARE_TIER_KEY = 'itihas_hardware_tier';
const BOOKMARKS_KEY = 'itihas_bookmarks';
const COMPLETED_QUESTIONS_KEY = 'itihas_completed_questions';
const REVISION_QUEUE_KEY = 'itihas_revision_queue';
function getInitialHardwareTier(): HardwareTier {
  if (typeof window === 'undefined') return 1;
  try {
    const val = localStorage.getItem(HARDWARE_TIER_KEY);
    if (val !== null) {
      const parsed = parseInt(val, 10);
      if (parsed === 0 || parsed === 1 || parsed === 2) {
        return parsed as HardwareTier;
      }
    }
  } catch {
    // LocalStorage unavailable
  }
  return 1;
}

function getStoredBookmarks(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return new Set(parsed);
      }
    }
  } catch {
    // Ignore storage errors
  }
  return new Set();
}

function getStoredCompletedQuestions(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(COMPLETED_QUESTIONS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return new Set(parsed);
      }
    }
  } catch {
    // Ignore storage errors
  }
  return new Set();
}

function getStoredRevisionQueue(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(REVISION_QUEUE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return new Set(parsed);
      }
    }
  } catch {
    // Ignore storage errors
  }
  return new Set();
}

function persistBookmarks(bookmarks: Set<string>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarks)));
  } catch {
    // Ignore storage errors
  }
}

function persistCompletedQuestions(completed: Set<string>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(COMPLETED_QUESTIONS_KEY, JSON.stringify(Array.from(completed)));
  } catch {
    // Ignore storage errors
  }
}

function persistRevisionQueue(queue: Set<string>): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(REVISION_QUEUE_KEY, JSON.stringify(Array.from(queue)));
  } catch {
    // Ignore storage errors
  }
}

function persistHardwareTier(tier: HardwareTier): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(HARDWARE_TIER_KEY, String(tier));
  } catch {
    // Ignore storage errors
  }
}

export interface StudyStoreState {
  // Hardware Tier (0 = Fallback / Low, 1 = Integrated / Clamped DPR, 2 = Discrete High-End)
  hardwareTier: HardwareTier;
  setHardwareTier: (tier: HardwareTier) => void;
  detectHardwareTier: () => Promise<HardwareTier>;

  // Active Chapter ID (default: 'hist-01')
  activeChapterId: string;
  setActiveChapterId: (id: string) => void;

  // Filters
  activeCategoryFilter: CategoryFilter;
  setActiveCategoryFilter: (filter: CategoryFilter) => void;
  activeSubjectFilter: SubjectFilter;
  setActiveSubjectFilter: (subject: SubjectFilter) => void;

  // Bookmarks (Set with localStorage sync)
  bookmarks: Set<string>;
  toggleBookmark: (id: string) => void;
  addBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;

  // Completed Questions (Set with localStorage sync)
  completedQuestions: Set<string>;
  toggleQuestionCompleted: (questionId: string) => void;
  setQuestionCompleted: (questionId: string, completed: boolean) => void;
  isQuestionCompleted: (questionId: string) => boolean;

  // Confidence-Based Revision Queue ("उजळणी संच" - Leitner Box spaced repetition)
  revisionQueue: Set<string>;
  toggleRevisionQueue: (questionId: string) => void;
  setInRevisionQueue: (questionId: string, inQueue: boolean) => void;
  isInRevisionQueue: (questionId: string) => boolean;

  // Search Modal State
  isSearchOpen: boolean;
  searchQuery: string;
  setIsSearchOpen: (open: boolean) => void;
  openSearch: () => void;
  closeSearch: () => void;
  setSearchQuery: (query: string) => void;

  // Active question inside chapter reader
  selectedQuestionId: string | null;
  setSelectedQuestionId: (id: string | null) => void;

  // Active Recall Engine Mode (वाचन / स्मरण / सराव)
  studyMode: StudyMode;
  setStudyMode: (mode: StudyMode) => void;

  // Node-by-node active recall reveal state for Concept Maps and Hook Memory
  revealedRecallNodes: Set<string>;
  toggleRecallNode: (nodeId: string) => void;
  revealAllRecallNodes: (nodeIds: string[]) => void;
  hideAllRecallNodes: (nodeIds?: string[]) => void;
  isRecallNodeRevealed: (nodeId: string) => boolean;

  // Workspace compatibility properties
  viewMode: 'explore' | 'study';
  setViewMode: (mode: 'explore' | 'study') => void;
  selectedChapterId: string | null;
  setSelectedChapterId: (id: string | null) => void;
  activeSubject: SubjectFilter;
  setActiveSubject: (subject: SubjectFilter) => void;

  // Milestone 3 Top-Level View & Board Papers State
  activeViewTab: ViewTab;
  setActiveViewTab: (tab: ViewTab) => void;
  activeBoardYear: ExamYear;
  setActiveBoardYear: (year: ExamYear) => void;

}

export const useStudyStore = create<StudyStoreState>((set, get) => ({
  hardwareTier: getInitialHardwareTier(),

  setHardwareTier: (tier: HardwareTier) => {
    persistHardwareTier(tier);
    set({ hardwareTier: tier });
  },

  detectHardwareTier: async () => {
    if (typeof window === 'undefined') return 1;

    // Fast synchronous WebGL check for Intel HD/UHD integrated GPUs
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (gl) {
        const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
          const rendererStr = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '';
          if (/Intel|HD Graphics|UHD Graphics|Iris/i.test(rendererStr)) {
            persistHardwareTier(1);
            set({ hardwareTier: 1 });
            return 1;
          }
        }
      }
    } catch {}

    try {
      const gpuInfo = await getGPUTier();
      let normalizedTier: HardwareTier = 1;
      if (gpuInfo.tier <= 0) {
        normalizedTier = 0;
      } else if (gpuInfo.tier === 1) {
        normalizedTier = 1;
      } else {
        normalizedTier = 2;
      }
      persistHardwareTier(normalizedTier);
      set({ hardwareTier: normalizedTier });
      return normalizedTier;
    } catch {
      const fallbackTier: HardwareTier = 1;
      persistHardwareTier(fallbackTier);
      set({ hardwareTier: fallbackTier });
      return fallbackTier;
    }
  },

  // Initial chapter ID is 'hist-1' (normalized across all curriculum datasets)
  activeChapterId: 'hist-1',
  setActiveChapterId: (activeChapterId: string) => set({ activeChapterId }),

  activeCategoryFilter: 'all' as CategoryFilter,
  setActiveCategoryFilter: (activeCategoryFilter: CategoryFilter) => set({ activeCategoryFilter }),

  activeSubjectFilter: 'all',
  setActiveSubjectFilter: (activeSubjectFilter: SubjectFilter) => set({ activeSubjectFilter }),

  bookmarks: getStoredBookmarks(),

  toggleBookmark: (id: string) => {
    const next = new Set(get().bookmarks);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    persistBookmarks(next);
    set({ bookmarks: next });
  },

  addBookmark: (id: string) => {
    const next = new Set(get().bookmarks);
    next.add(id);
    persistBookmarks(next);
    set({ bookmarks: next });
  },

  removeBookmark: (id: string) => {
    const next = new Set(get().bookmarks);
    next.delete(id);
    persistBookmarks(next);
    set({ bookmarks: next });
  },

  isBookmarked: (id: string) => {
    return get().bookmarks.has(id);
  },

  completedQuestions: getStoredCompletedQuestions(),

  toggleQuestionCompleted: (questionId: string) => {
    const next = new Set(get().completedQuestions);
    if (next.has(questionId)) {
      next.delete(questionId);
    } else {
      next.add(questionId);
    }
    persistCompletedQuestions(next);
    set({ completedQuestions: next });
  },

  setQuestionCompleted: (questionId: string, completed: boolean) => {
    const next = new Set(get().completedQuestions);
    if (completed) {
      next.add(questionId);
    } else {
      next.delete(questionId);
    }
    persistCompletedQuestions(next);
    set({ completedQuestions: next });
  },

  isQuestionCompleted: (questionId: string) => {
    return get().completedQuestions.has(questionId);
  },

  revisionQueue: getStoredRevisionQueue(),

  toggleRevisionQueue: (questionId: string) => {
    const next = new Set(get().revisionQueue);
    if (next.has(questionId)) {
      next.delete(questionId);
    } else {
      next.add(questionId);
    }
    persistRevisionQueue(next);
    set({ revisionQueue: next });
  },

  setInRevisionQueue: (questionId: string, inQueue: boolean) => {
    const next = new Set(get().revisionQueue);
    if (inQueue) {
      next.add(questionId);
    } else {
      next.delete(questionId);
    }
    persistRevisionQueue(next);
    set({ revisionQueue: next });
  },

  isInRevisionQueue: (questionId: string) => {
    return get().revisionQueue.has(questionId);
  },

  isSearchOpen: false,
  searchQuery: '',

  setIsSearchOpen: (isSearchOpen: boolean) => set({ isSearchOpen }),
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false, searchQuery: '' }),
  setSearchQuery: (searchQuery: string) => set({ searchQuery }),

  selectedQuestionId: null,
  setSelectedQuestionId: (selectedQuestionId: string | null) => set({ selectedQuestionId }),

  // 3-Mode Active Recall Engine
  studyMode: 'read',
  setStudyMode: (studyMode: StudyMode) => set({ studyMode }),

  revealedRecallNodes: new Set<string>(),
  toggleRecallNode: (nodeId: string) => {
    const next = new Set(get().revealedRecallNodes);
    if (next.has(nodeId)) {
      next.delete(nodeId);
    } else {
      next.add(nodeId);
    }
    set({ revealedRecallNodes: next });
  },
  revealAllRecallNodes: (nodeIds: string[]) => {
    const next = new Set(get().revealedRecallNodes);
    nodeIds.forEach((id) => next.add(id));
    set({ revealedRecallNodes: next });
  },
  hideAllRecallNodes: (nodeIds?: string[]) => {
    if (!nodeIds) {
      set({ revealedRecallNodes: new Set<string>() });
      return;
    }
    const next = new Set(get().revealedRecallNodes);
    nodeIds.forEach((id) => next.delete(id));
    set({ revealedRecallNodes: next });
  },
  isRecallNodeRevealed: (nodeId: string) => {
    return get().revealedRecallNodes.has(nodeId);
  },

  // Workspace compatibility properties
  viewMode: 'explore',
  setViewMode: (viewMode: 'explore' | 'study') => set({ viewMode }),
  selectedChapterId: 'hist-1',
  setSelectedChapterId: (id: string | null) => {
    set({
      selectedChapterId: id,
      activeChapterId: id || get().activeChapterId,
      viewMode: id ? 'study' : 'explore',
    });
  },
  activeSubject: 'all',
  setActiveSubject: (activeSubject: SubjectFilter) => {
    set({
      activeSubject,
      activeSubjectFilter: activeSubject,
    });
  },

  // Milestone 3 Top-Level View & Board Papers State
  activeViewTab: 'chapters',
  setActiveViewTab: (activeViewTab: ViewTab) => set({ activeViewTab }),
  activeBoardYear: 2024,
  setActiveBoardYear: (activeBoardYear: ExamYear) => set({ activeBoardYear }),

}));

// Auto-run hardware tier detection on client if not yet persisted in localStorage
if (typeof window !== 'undefined') {
  try {
    if (window.localStorage && window.localStorage.getItem(HARDWARE_TIER_KEY) === null) {
      useStudyStore.getState().detectHardwareTier();
    }
  } catch {
    // Storage restricted or unavailable
  }
}

export default useStudyStore;
