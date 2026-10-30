import type { SearchIndexEntry, SearchResultItem } from '../types/search';
import { chaptersData } from './chaptersData';

function buildSearchIndex(): SearchIndexEntry[] {
  const entries: SearchIndexEntry[] = [];

  for (const ch of chaptersData) {
    // 1. Chapter Entry
    entries.push({
      id: `ch-${ch.id}`,
      chapterId: ch.id,
      chapterTitleMarathi: ch.titleMarathi,
      type: 'chapter',
      titleMarathi: `${ch.subject === 'history' ? 'इतिहास' : 'राज्यशास्त्र'} पाठ ${ch.chapterNumber}: ${ch.titleMarathi}`,
      titleEnglish: `${ch.subject === 'history' ? 'History' : 'Political Science'} Ch ${ch.chapterNumber}: ${ch.titleEnglish}`,
      contentSnippetMarathi: ch.summaryMarathi,
      keywords: [
        ch.titleMarathi,
        ch.titleEnglish,
        ch.subject === 'history' ? 'इतिहास' : 'राज्यशास्त्र',
        ch.subject === 'history' ? 'history' : 'political science',
        `पाठ ${ch.chapterNumber}`,
        `chapter ${ch.chapterNumber}`,
        ...ch.telemetry.map((t) => t.label),
        ...ch.telemetry.map((t) => t.value),
      ],
    });

    // 2. Question Entries
    for (const q of ch.questions) {
      const qSnippet = q.answerMarathiPoints.join(' ');
      const qTypeLabel = q.qType || (
        q.type === 'mcq'
          ? 'योग्य पर्याय'
          : q.type === 'wrong_pair'
          ? 'चुकीची जोडी'
          : q.type === 'concept_map'
          ? 'संकल्पना चित्र'
          : q.type === 'short_notes'
          ? 'टीपा लिहा'
          : q.type === 'give_reasons'
          ? 'सकारण स्पष्ट करा'
          : q.type === 'true_false_reasons'
          ? 'चूक की बरोबर'
          : 'सविस्तर उत्तरे'
      );

      entries.push({
        id: `q-${q.id}`,
        chapterId: ch.id,
        chapterTitleMarathi: ch.titleMarathi,
        questionId: q.id,
        type: 'question',
        titleMarathi: `[${qTypeLabel}] ${q.questionMarathi}`,
        titleEnglish: `Question: ${q.type} (${q.marks} marks)`,
        contentSnippetMarathi: qSnippet.slice(0, 140) + (qSnippet.length > 140 ? '...' : ''),
        keywords: [
          q.questionMarathi,
          qTypeLabel,
          q.type,
          ...q.answerMarathiPoints,
          ...(q.options || []),
          ...(q.wrongPairData ? [q.wrongPairData.incorrectPair, q.wrongPairData.correctedPair] : []),
        ],
      });
    }

    // 3. Historical Figures Entries
    for (const fig of ch.keyFigures) {
      entries.push({
        id: `fig-${ch.id}-${fig.nameMarathi.replace(/\s+/g, '-')}`,
        chapterId: ch.id,
        chapterTitleMarathi: ch.titleMarathi,
        type: 'figure',
        titleMarathi: `${fig.nameMarathi} (${fig.period})`,
        titleEnglish: `Historical Figure: ${fig.nameMarathi}`,
        contentSnippetMarathi: fig.roleMarathi,
        keywords: [
          fig.nameMarathi,
          fig.roleMarathi,
          fig.period,
          ch.titleMarathi,
          'विचारवंत',
          'इतिहासकार',
          'thinker',
          'historian',
        ],
      });
    }

    // 4. Key Concepts Entries
    for (const concept of ch.keyConcepts) {
      entries.push({
        id: `concept-${ch.id}-${concept.title.replace(/\s+/g, '-')}`,
        chapterId: ch.id,
        chapterTitleMarathi: ch.titleMarathi,
        type: 'concept',
        titleMarathi: concept.title,
        titleEnglish: `Concept in ${ch.titleEnglish}`,
        contentSnippetMarathi: concept.description.slice(0, 140) + '...',
        keywords: [
          concept.title,
          concept.description,
          ch.titleMarathi,
          'संकल्पना',
          'concept',
        ],
      });
    }
  }

  return entries;
}

export const searchIndex: SearchIndexEntry[] = buildSearchIndex();

/**
 * High-performance search function with bilingual ranking
 */
export function searchCurriculum(query: string): SearchResultItem[] {
  const cleanQ = query.trim().toLowerCase();
  if (!cleanQ) return [];

  const results: SearchResultItem[] = [];

  for (const entry of searchIndex) {
    let score = 0;
    let matchedKeyword: string | undefined;

    const titleMarathiLower = entry.titleMarathi.toLowerCase();
    const titleEnglishLower = entry.titleEnglish.toLowerCase();
    const snippetLower = entry.contentSnippetMarathi.toLowerCase();

    // Exact or prefix match on title has highest weight
    if (titleMarathiLower.includes(cleanQ)) {
      score += 15;
      matchedKeyword = entry.titleMarathi;
    } else if (titleEnglishLower.includes(cleanQ)) {
      score += 12;
      matchedKeyword = entry.titleEnglish;
    }

    // Snippet match
    if (snippetLower.includes(cleanQ)) {
      score += 8;
      if (!matchedKeyword) matchedKeyword = cleanQ;
    }

    // Keyword match
    for (const kw of entry.keywords) {
      const kwLower = kw.toLowerCase();
      if (kwLower === cleanQ) {
        score += 10;
        matchedKeyword = kw;
        break;
      } else if (kwLower.includes(cleanQ)) {
        score += 5;
        if (!matchedKeyword) matchedKeyword = kw;
      }
    }

    if (score > 0) {
      results.push({
        ...entry,
        score,
        matchedKeyword,
      });
    }
  }

  // Rank by score descending
  return results.sort((a, b) => (b.score || 0) - (a.score || 0));
}

export default searchIndex;
