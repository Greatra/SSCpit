/**
 * Maharashtra State Board (MSBSHSE) SSC Class 10
 * 10-Year Board Question Papers Archive & Cognitive Rubric Types (2016–2025)
 */

export type ExamYear =
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | 2023
  | 2024
  | 2025;

export type CurriculumEra =
  | 'old_course'        // 2016-2018 (40 marks, Modern World History)
  | 'transitional_new'  // 2019 (60 marks, First New Syllabus exam)
  | 'canonical_new'     // 2020, 2023-2025 (40 marks Activity Sheet)
  | 'covid_resolution'  // 2021 (Exam cancelled, GR 50:30:20 formula)
  | 'covid_reduced';    // 2022 (40 marks, 25% non-evaluative reduction)

export type BoardSubject = 'history' | 'political_science';

export type BoardQuestionType =
  | 'mcq_1m'               // प्र. १(अ), प्र. ६: योग्य पर्याय निवडा (१ गुण)
  | 'wrong_pair_1m'        // प्र. १(ब): चुकीची जोडी ओळखा (१ गुण)
  | 'match_columns_1m'     // प्र. १(ब) [जुना]: जोड्या जुळवा (१ गुण)
  | 'concept_map_2m'       // प्र. २(अ), प्र. ८(ब): संकल्पनाचित्र / प्रवाह तक्ता / कालरेषा (२ गुण)
  | 'short_notes_2m'       // प्र. २(ब), प्र. ८(अ): थोडक्यात टिपा / संकल्पना स्पष्ट करा (२ गुण)
  | 'give_reasons_2m'      // प्र. ३: विधाने सकारण स्पष्ट करा (२ गुण)
  | 'true_false_reasons_2m'// प्र. ७: चूक की बरोबर ते सकारण स्पष्ट करा (२ गुण)
  | 'passage_analysis_4m'  // प्र. ४: उतारा वाचन व स्वमत विश्लेषण (४ गुण)
  | 'detailed_answer_3m'   // प्र. ५ [नवीन]: सविस्तर उत्तरे लिहा (३ गुण)
  | 'detailed_answer_4m';  // प्र. ५ [जुना]: सविस्तर उत्तरे लिहा (४ गुण)

export type StarRating = '★★★' | '★★' | '★';

export interface FrequencyMarker {
  recurrenceCount: number; // e.g., 6
  stars: StarRating;
  yearsAppeared: ExamYear[];
  trendAnalysisMarathi: string; // e.g., "कार्ल मार्क्स व वर्गसंघर्ष सिद्धान्त प्रत्येक बोर्ड परीक्षेत हमखास विचारला जातो."
}

export interface StructuredMudda {
  hookMarathi: string;        // Bold 3-4 word memory hook (e.g., "उत्पादन साधनांची मालकी")
  elaborationMarathi: string; // Complete MSBSHSE standard point
  highValueKeywords: string[];// Keywords for Devanagari Cloze testing
}

export interface MSBSHSERubric {
  prastavana: string;            // ऐतिहासिक संदर्भ / प्रस्तावना (½ Mark)
  mukhyaMudde: StructuredMudda[];// मुख्य मुद्दे / स्मरण साखळी (१ ते २ Marks)
  nishkarsha: string;            // निष्कर्ष / ऐतिहासिक महत्त्व व समारोप (½ Mark)
  scoringRuleMarathi: string;    // e.g., "चूक की बरोबर ओळखण्यास १ गुण + अचूक कारणास १ गुण = २ गुण"
}

export interface BoardSubQuestion {
  questionNumber: string;
  textMarathi: string;
  marks: number;
  modelAnswer: string;
}

export interface BoardConceptNode {
  labelMarathi: string;
  marksPerNode: number; // typically 0.5
}

export interface BoardQuestion {
  id: string;                         // e.g., "bp-2024-q1a-1"
  year: ExamYear;
  subject: BoardSubject;
  questionNumberLabel: string;        // e.g., "प्र. १ (अ) (१)"
  type: BoardQuestionType;
  marks: number;
  chapterAssociationId: string;       // e.g., "hist-01" (cross-links to Swadhay chapter)
  questionMarathi: string;
  options?: string[];                 // For MCQs
  correctOptionIndex?: number;
  wrongPairItems?: Array<{ term: string; explanation: string }>;
  incorrectPair?: string;
  correctedPair?: string;
  passageText?: string;               // For Question 4 passage analysis
  subQuestions?: BoardSubQuestion[];  // For passage analysis sub-questions
  conceptDiagram?: {
    titleMarathi: string;
    diagramType: 'hierarchy' | 'flow' | 'radial' | 'timeline';
    nodes: BoardConceptNode[];
  };
  rubric?: MSBSHSERubric;             // Tripartite MSBSHSE model answer
  directAnswer?: string;              // Short 1-mark model answer
  frequencyMarker?: FrequencyMarker;  // Recurring exam frequency telemetry
}

export interface CovidResolutionDetails {
  grNumberCancellation: string;       // "संकीर्ण २०२१/प्र.क्र.३९/एसडी-२"
  grDateCancellation: string;         // "१२ मे २०२१"
  grNumberFormula: string;            // "परीक्षा-०५२१/प्र.क्र.४३/एसडी-२"
  grDateFormula: string;              // "२८ मे २०२१"
  circularNumber: string;             // "मंडळ परिपत्रक ४०२७ (९ जून २०२१)"
  formulaBreakdown: {
    class9Weightage: number;          // 50%
    class10WrittenWeightage: number;  // 30%
    class10InternalWeightage: number; // 20%
  };
  historicalRationaleMarathi: string;
}

export interface BoardPaperYearArchive {
  year: ExamYear;
  sessionTitleMarathi: string;        // e.g., "मार्च २०२४ बोर्ड परीक्षा"
  curriculumEra: CurriculumEra;
  totalMarks: number;                 // 40 or 60
  durationMinutes: number;            // 120
  historyMarks: number;               // 28 (or 40)
  politicalScienceMarks: number;      // 12 (or 20)
  officialSourceCitation: string;     // e.g., "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे"
  instructionsMarathi: string[];
  questions: BoardQuestion[];
  covidResolution?: CovidResolutionDetails;
}
