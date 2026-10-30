import test from 'node:test';
import assert from 'node:assert/strict';

test('Deep Runtime Object Oracle: boardPapersData and chaptersData integration', async () => {
  const { boardPapersData } = await import('../../src/data/boardPapersData.ts');
  const { chaptersData } = await import('../../src/data/chaptersData.ts');

  // 1. Verify 10 years in ascending order
  assert.equal(boardPapersData.length, 10, 'Must have exactly 10 years');
  const expectedYears = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  boardPapersData.forEach((item, idx) => {
    assert.equal(item.year, expectedYears[idx], `Year at index ${idx} must be ${expectedYears[idx]}`);
    assert.ok(item.sessionTitleMarathi && item.sessionTitleMarathi.length > 5, `Year ${item.year} must have valid sessionTitleMarathi`);
    assert.ok(item.officialSourceCitation && item.officialSourceCitation.length > 5, `Year ${item.year} must have officialSourceCitation`);
  });

  // 2. Verify 14 chapters in chaptersData
  assert.equal(chaptersData.length, 14, 'Must have exactly 14 chapters in chaptersData');
  const chapterIds = new Set(chaptersData.map((c) => c.id.replace('-0', '-')));

  // 3. Question IDs uniqueness and question integrity
  const allQuestionIds = new Set();
  let totalQuestions = 0;
  let mcqCount = 0;
  let wrongPairCount = 0;
  let conceptDiagramCount = 0;
  let passageCount = 0;
  let rubricCount = 0;
  let frequencyMarkerCount = 0;

  for (const yearArchive of boardPapersData) {
    if (yearArchive.year === 2021) {
      assert.equal(yearArchive.curriculumEra, 'covid_resolution');
      assert.ok(yearArchive.covidResolution, 'Year 2021 must have covidResolution details');
      assert.equal(yearArchive.covidResolution.formulaBreakdown.class9Weightage, 50);
      assert.equal(yearArchive.covidResolution.formulaBreakdown.class10WrittenWeightage, 30);
      assert.equal(yearArchive.covidResolution.formulaBreakdown.class10InternalWeightage, 20);
      assert.ok(yearArchive.covidResolution.grNumberCancellation.includes('३९'));
      assert.ok(yearArchive.covidResolution.grNumberFormula.includes('४३'));
      continue;
    }

    assert.ok(yearArchive.questions && yearArchive.questions.length > 0, `Year ${yearArchive.year} must have questions`);

    for (const q of yearArchive.questions) {
      totalQuestions++;

      // Uniqueness of ID
      assert.ok(!allQuestionIds.has(q.id), `Duplicate question ID detected: ${q.id}`);
      allQuestionIds.add(q.id);

      // Parent year alignment
      assert.equal(q.year, yearArchive.year, `Question ${q.id} year mismatch with parent year`);

      // Subject alignment
      assert.ok(['history', 'political_science'].includes(q.subject), `Invalid subject in question ${q.id}: ${q.subject}`);

      // Marks validation
      assert.ok(q.marks >= 1 && q.marks <= 4, `Marks out of range in question ${q.id}: ${q.marks}`);

      // Question text
      assert.ok(q.questionMarathi && q.questionMarathi.trim().length > 3, `Missing or empty questionMarathi in ${q.id}`);

      // Chapter association resolution
      const normAssoc = q.chapterAssociationId.replace('-0', '-');
      assert.ok(
        chapterIds.has(normAssoc),
        `Question ${q.id} references non-existent chapterAssociationId: ${q.chapterAssociationId}`
      );

      // Question Type specific validations
      if (q.type === 'mcq_1m') {
        mcqCount++;
        assert.ok(Array.isArray(q.options) && q.options.length >= 3, `MCQ ${q.id} must have >= 3 options`);
        assert.ok(
          typeof q.correctOptionIndex === 'number' &&
            q.correctOptionIndex >= 0 &&
            q.correctOptionIndex < q.options.length,
          `MCQ ${q.id} has invalid correctOptionIndex: ${q.correctOptionIndex}`
        );
      } else if (q.type === 'wrong_pair_1m') {
        wrongPairCount++;
        assert.ok(q.wrongPairItems && q.wrongPairItems.length >= 3, `Wrong pair ${q.id} must have >= 3 pairs`);
        assert.ok(q.incorrectPair, `Wrong pair ${q.id} must have incorrectPair`);
        assert.ok(q.correctedPair, `Wrong pair ${q.id} must have correctedPair`);
      } else if (q.conceptDiagram) {
        conceptDiagramCount++;
        assert.ok(q.conceptDiagram.titleMarathi, `Concept diagram in ${q.id} must have titleMarathi`);
        assert.ok(q.conceptDiagram.nodes.length >= 2, `Concept diagram in ${q.id} must have >= 2 nodes`);
      } else if (q.passageText) {
        passageCount++;
        assert.ok(q.passageText.length > 50, `Passage text in ${q.id} must be substantive (>50 chars)`);
        assert.ok(q.subQuestions && q.subQuestions.length >= 2, `Passage ${q.id} must have >= 2 sub-questions`);
      }

      // Rubric validation
      if (q.rubric) {
        rubricCount++;
        assert.ok(q.rubric.prastavana && q.rubric.prastavana.length > 5, `Rubric in ${q.id} must have prastavana`);
        assert.ok(q.rubric.mukhyaMudde && q.rubric.mukhyaMudde.length >= 1, `Rubric in ${q.id} must have mukhyaMudde`);
        assert.ok(q.rubric.nishkarsha && q.rubric.nishkarsha.length > 5, `Rubric in ${q.id} must have nishkarsha`);
        assert.ok(q.rubric.scoringRuleMarathi, `Rubric in ${q.id} must have scoringRuleMarathi`);
      }

      // Frequency marker validation
      if (q.frequencyMarker) {
        frequencyMarkerCount++;
        assert.ok(['★★★', '★★', '★'].includes(q.frequencyMarker.stars), `Invalid stars in ${q.id}: ${q.frequencyMarker.stars}`);
        assert.ok(q.frequencyMarker.recurrenceCount >= 1, `Recurrence count must be >= 1 in ${q.id}`);
        assert.ok(Array.isArray(q.frequencyMarker.yearsAppeared) && q.frequencyMarker.yearsAppeared.length >= 1, `yearsAppeared must be array in ${q.id}`);
        assert.ok(q.frequencyMarker.trendAnalysisMarathi && q.frequencyMarker.trendAnalysisMarathi.length > 10, `Substantive trendAnalysisMarathi required in ${q.id}`);
      }
    }
  }

  console.log(`[DEEP RUNTIME ORACLE] Successfully audited:`);
  console.log(`  - Total Ingested Questions: ${totalQuestions}`);
  console.log(`  - MCQs with Verified Option Bounds: ${mcqCount}`);
  console.log(`  - Wrong Pairs with Verified Corrections: ${wrongPairCount}`);
  console.log(`  - Concept Diagrams with Verified Nodes: ${conceptDiagramCount}`);
  console.log(`  - Historical Passages with Sub-Questions: ${passageCount}`);
  console.log(`  - Questions with MSBSHSE Tripartite Rubrics: ${rubricCount}`);
  console.log(`  - Questions with Empirical Recurrence Telemetry: ${frequencyMarkerCount}`);

  assert.equal(totalQuestions, 185, 'Total questions must be exactly 185 across all years');
  assert.ok(rubricCount >= 85, `Expected >= 85 tripartite rubrics, found: ${rubricCount}`);
  assert.ok(frequencyMarkerCount >= 120, `Expected >= 120 recurring frequency markers, found: ${frequencyMarkerCount}`);
});
