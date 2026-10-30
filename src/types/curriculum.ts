export type SubjectType = 'history' | 'political_science';

export type DifficultyLevel = 'सुलभ' | 'मध्यम' | 'प्रगत';

export type QuestionType =
  | 'mcq'
  | 'wrong_pair'
  | 'concept_map'
  | 'short_notes'
  | 'give_reasons'
  | 'true_false_reasons'
  | 'detailed_answer';

export interface KeyFigure {
  nameMarathi: string;
  roleMarathi: string;
  period: string;
}

export interface Milestone {
  year: string;
  eventMarathi: string;
}

export interface ConceptDiagram {
  titleMarathi: string;
  nodes: string[];
  type: 'hierarchy' | 'flow' | 'category';
}

export interface WrongPairItem {
  term: string;
  explanation: string;
}

export interface WrongPairData {
  pairs: WrongPairItem[];
  incorrectPair: string;
  correctedPair: string;
}

export interface StructuredAnswerPoint {
  hook: string; // Bold 3-4 word memory hook
  explanation: string; // Full board standard elaboration
  keywords?: string[]; // High-value historical keywords for Cloze exam testing
}

export interface SwadhayQuestion {
  id: string;
  chapterId: string;
  type: QuestionType;
  questionMarathi: string;
  marks: number;
  options?: string[]; // For MCQs
  correctOptionIndex?: number;
  wrongPairData?: WrongPairData;
  answerMarathiPoints: string[]; // 2-3 precise bullet points
  answerMarathiDetailed?: string; // Enriched analytical context
  prastavana?: string; // SSC Board Historical Context (½ Mark)
  nishkarsha?: string; // SSC Board Concluding Synthesis (½ Mark)
  structuredPoints?: StructuredAnswerPoint[]; // 3-Mode Active Recall structured points
}

export interface ChapterTelemetry {
  boardWeightageMarks: number;
  questionCount: number;
  recommendedStudyMinutes: number;
  difficultyLevel: DifficultyLevel;
}

export interface Chapter {
  id: string; // e.g. "hist-01"
  subject: SubjectType;
  chapterNumber: number;
  titleMarathi: string;
  titleEnglish: string;
  summaryMarathi: string;
  telemetry: ChapterTelemetry;
  keyFigures: KeyFigure[];
  milestones: Milestone[];
  conceptDiagrams: ConceptDiagram[];
  questions: SwadhayQuestion[];
}
