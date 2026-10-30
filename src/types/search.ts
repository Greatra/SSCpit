export type SearchEntryType = 'chapter' | 'question' | 'figure' | 'concept';

export interface SearchIndexEntry {
  id: string;
  chapterId: string;
  chapterTitleMarathi: string;
  questionId?: string;
  type: SearchEntryType;
  titleMarathi: string;
  titleEnglish: string;
  contentSnippetMarathi: string;
  keywords: string[];
}

export interface SearchResultItem extends SearchIndexEntry {
  score?: number;
  matchedKeyword?: string;
}
