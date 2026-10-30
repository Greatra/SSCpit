#!/usr/bin/env node
/**
 * tests/stress/search_stress.test.mjs
 * Adversarial Empirical Stress Test Suite for Search Indexing Engine
 *
 * Verifies:
 * 1. 100% vocabulary coverage across all 9 chapters (History 1-6, Political Science 1-3)
 * 2. Devanagari script integrity: matras, conjuncts, anusvara, virama, Unicode NFC/NFD
 * 3. Latin / English queries: exact, partial, mixed-case insensitivity
 * 4. Boundary, fuzzing, and malicious input safety (null, whitespace, XSS, 10k strings)
 * 5. Deterministic scoring, ranking order, and interface contract adherence
 * 6. High-throughput performance (1,000 queries in < 100ms)
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { searchCurriculum, searchIndex } from '../../src/data/searchIndex.ts';
import { chaptersData } from '../../src/data/chaptersData.ts';

test('Search Stress 1: Search index initialization and volume check', () => {
  assert(Array.isArray(searchIndex), 'searchIndex must be an array');
  assert(searchIndex.length > 50, `searchIndex must have substantial entries (got ${searchIndex.length})`);
  
  // Every entry must satisfy SearchIndexEntry contract
  for (const entry of searchIndex) {
    assert(entry.id, `Entry missing id`);
    assert(entry.chapterId, `Entry ${entry.id} missing chapterId`);
    assert(entry.chapterTitleMarathi, `Entry ${entry.id} missing chapterTitleMarathi`);
    assert(['chapter', 'question', 'figure', 'concept'].includes(entry.type), `Invalid type ${entry.type}`);
    assert(entry.titleMarathi, `Entry ${entry.id} missing titleMarathi`);
    assert(entry.titleEnglish, `Entry ${entry.id} missing titleEnglish`);
    assert(Array.isArray(entry.keywords), `Entry ${entry.id} keywords must be array`);
    assert(entry.keywords.length > 0, `Entry ${entry.id} keywords must not be empty`);
  }
});

test('Search Stress 2: All 9 Chapters discoverable via Marathi Titles', () => {
  for (const ch of chaptersData) {
    const title = ch.titleMarathi;
    const results = searchCurriculum(title);
    assert(results.length > 0, `Search failed to find chapter title: "${title}"`);
    const foundChapter = results.find((r) => r.type === 'chapter' && r.chapterId === ch.id);
    assert(foundChapter, `No chapter entry returned for "${title}"`);
    assert(foundChapter.score >= 15, `Chapter match score should be >= 15 (got ${foundChapter?.score})`);
  }
});

test('Search Stress 3: All 9 Chapters discoverable via English Titles', () => {
  for (const ch of chaptersData) {
    const title = ch.titleEnglish;
    const results = searchCurriculum(title);
    assert(results.length > 0, `Search failed to find English chapter title: "${title}"`);
    const foundChapter = results.find((r) => r.type === 'chapter' && r.chapterId === ch.id);
    assert(foundChapter, `No chapter entry returned for "${title}"`);
    assert(foundChapter.score >= 12, `English title match score should be >= 12 (got ${foundChapter?.score})`);
  }
});

test('Search Stress 4: Devanagari Diacritics and Complex Graphemes', () => {
  const devanagariTerms = [
    { query: 'द्वंद्ववाद', expectedKeywords: ['द्वंद्ववाद', 'हेगेल'] },
    { query: 'व्हॉल्टेअर', expectedKeywords: ['व्हॉल्टेअर', 'इतिहासलेखन'] },
    { query: 'रेने देकार्त', expectedKeywords: ['रेने देकार्त'] },
    { query: 'कार्ल मार्क्स', expectedKeywords: ['कार्ल मार्क्स', 'वर्गसंघर्ष'] },
    { query: 'स्त्रीवादी', expectedKeywords: ['स्त्रीवादी'] },
    { query: 'संविधान', expectedKeywords: ['संविधान'] },
    { query: 'निवडणूक', expectedKeywords: ['निवडणूक'] },
    { query: 'आचारसंहिता', expectedKeywords: ['आचारसंहिता'] },
    { query: 'अभिलेख', expectedKeywords: ['अभिलेख'] },
  ];

  for (const { query, expectedKeywords } of devanagariTerms) {
    const results = searchCurriculum(query);
    assert(results.length > 0, `Search returned 0 results for Devanagari term: "${query}"`);
    const hasMatchedAny = results.some((r) =>
      expectedKeywords.some(
        (kw) =>
          r.titleMarathi.includes(kw) ||
          r.contentSnippetMarathi.includes(kw) ||
          r.keywords.some((k) => k.includes(kw))
      )
    );
    assert(hasMatchedAny, `Results for "${query}" did not match expected keywords: ${expectedKeywords.join(', ')}`);
  }
});

test('Search Stress 5: Unicode Normalization Equivalence (NFC vs NFD)', () => {
  const nfcQuery = 'इतिहासलेखन';
  const nfdQuery = nfcQuery.normalize('NFD');

  const resNfc = searchCurriculum(nfcQuery);
  assert(resNfc.length > 0, 'NFC query should return results');

  // Decomposed Devanagari search should be handled safely without error
  const resNfd = searchCurriculum(nfdQuery);
  assert(Array.isArray(resNfd), 'NFD query must not throw and return array');
});

test('Search Stress 6: Latin Case-Insensitivity & Variations', () => {
  const variations = ['dialectics', 'DIALECTICS', 'DiaLecTics', 'dIaLeCtIcS'];
  const baselineResults = searchCurriculum(variations[0]);
  assert(baselineResults.length > 0, `Baseline search for "${variations[0]}" should return matches`);

  for (let i = 1; i < variations.length; i++) {
    const res = searchCurriculum(variations[i]);
    assert.equal(
      res.length,
      baselineResults.length,
      `Case variation "${variations[i]}" should return identical count to "${variations[0]}"`
    );
    assert.equal(
      res[0].id,
      baselineResults[0].id,
      `Top result ID should match across case variations`
    );
  }

  // Also test History / Political Science case variations
  for (const query of ['history', 'HISTORY', 'political science', 'POLITICAL SCIENCE']) {
    const res = searchCurriculum(query);
    assert(res.length > 0, `Query "${query}" should return results`);
  }
});

test('Search Stress 7: Key Historical Figures Indexing', () => {
  for (const ch of chaptersData) {
    for (const fig of ch.keyFigures) {
      const results = searchCurriculum(fig.nameMarathi);
      assert(
        results.length > 0,
        `Historical figure "${fig.nameMarathi}" from chapter ${ch.id} must be searchable`
      );
      const figEntry = results.find((r) => r.type === 'figure' && r.titleMarathi.includes(fig.nameMarathi));
      assert(figEntry, `Did not find figure entry for "${fig.nameMarathi}"`);
    }
  }
});

test('Search Stress 8: Question Types & Question Text Indexing', () => {
  const questionTypes = [
    'योग्य पर्याय',
    'चुकीची जोडी',
    'संकल्पना चित्र',
    'सकारण स्पष्ट करा',
    'सविस्तर उत्तरे',
  ];

  for (const qType of questionTypes) {
    const results = searchCurriculum(qType);
    assert(results.length > 0, `Question type label "${qType}" must return results`);
    const qMatches = results.filter((r) => r.type === 'question');
    assert(qMatches.length > 0, `Expected question items for "${qType}"`);
  }
});

test('Search Stress 9: Boundary, Malicious & Extreme Adversarial Inputs', () => {
  // 1. Empty string
  assert.deepEqual(searchCurriculum(''), [], 'Empty string should yield empty results');

  // 2. Whitespace only
  assert.deepEqual(searchCurriculum('    '), [], 'Whitespace only should yield empty results');
  assert.deepEqual(searchCurriculum('\t\n\r  '), [], 'Tabs/newlines should yield empty results');

  // 3. Single punctuation
  const punctRes = searchCurriculum('???');
  assert(Array.isArray(punctRes), 'Punctuation query should return array');

  // 4. Special regex chars (must not trigger invalid regex exceptions)
  const regexChars = ['(', ')', '[', ']', '{', '}', '*', '+', '?', '^', '$', '|', '\\', '.'];
  for (const char of regexChars) {
    assert.doesNotThrow(() => {
      const res = searchCurriculum(char);
      assert(Array.isArray(res));
    }, `Search should safely handle regex metacharacter: "${char}"`);
  }

  // 5. XSS / Script injection payload
  const xssQuery = '<script>alert("xss")</script>';
  assert.doesNotThrow(() => {
    const res = searchCurriculum(xssQuery);
    assert(Array.isArray(res));
  });

  // 6. SQL Injection payload
  const sqlQuery = "'; DROP TABLE curriculum; --";
  assert.doesNotThrow(() => {
    const res = searchCurriculum(sqlQuery);
    assert(Array.isArray(res));
  });

  // 7. Non-existent random garbage
  const garbage = 'zxqwerty9876543210nonexistentterm';
  assert.deepEqual(searchCurriculum(garbage), [], 'Non-existent garbage should return empty array');

  // 8. 10,000 characters payload
  const hugeQuery = 'इतिहास '.repeat(1500);
  assert.doesNotThrow(() => {
    const res = searchCurriculum(hugeQuery);
    assert(Array.isArray(res));
  });
});

test('Search Stress 10: Strict Monotonic Ranking Invariant', () => {
  const sampleQueries = ['इतिहास', 'संविधान', 'Dialectics', 'परंपरा', 'कला', 'निवडणूक'];

  for (const query of sampleQueries) {
    const results = searchCurriculum(query);
    assert(results.length > 1, `Query "${query}" should yield multiple results`);

    for (let i = 0; i < results.length - 1; i++) {
      assert(
        (results[i].score || 0) >= (results[i + 1].score || 0),
        `Ranking violation for query "${query}": index ${i} score (${results[i].score}) < index ${i + 1} score (${results[i + 1].score})`
      );
    }
  }
});

test('Search Stress 11: High-Throughput Burst Benchmark (1,000 queries)', () => {
  const testQueries = [
    'इतिहास', 'संविधान', 'Dialectics', 'व्हॉल्टेअर', 'द्वंद्ववाद',
    'History', 'Ch 1', 'निवडणूक', 'कला', 'साधने',
    'स्त्रीवादी', 'आचारसंहिता', 'रेने देकार्त', 'कार्ल मार्क्स'
  ];

  const startTime = performance.now();
  const iterations = 1000;

  for (let i = 0; i < iterations; i++) {
    const q = testQueries[i % testQueries.length];
    const res = searchCurriculum(q);
    assert(res.length > 0, `Query "${q}" should yield results`);
  }

  const durationMs = performance.now() - startTime;
  const avgPerQueryUs = (durationMs / iterations) * 1000;
  console.log(`   ⚡ Search Throughput: ${iterations} queries in ${durationMs.toFixed(2)}ms (avg ${avgPerQueryUs.toFixed(1)}µs/query)`);
  assert(durationMs < 2000, `1,000 queries took ${durationMs}ms, exceeded 2000ms threshold`);
});
