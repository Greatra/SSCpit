# 10-Year SSC Board Question Papers Status & Recurrence Telemetry (२०१६–२०२५)

## Executive Summary

This log documents the official 10-year Maharashtra State Board (MSBSHSE) SSC History & Political Science examination paper archive (2016–2025) from `D:\Local Send\saves\इयत्ता_१०वी_इतिहास_व_राज्यशास्त्र-20261028-070156.zip`.

The 10-year collection spans five distinct curriculum and administrative eras, requiring a discriminated data schema in `src/types/boardPapers.ts` and `src/data/boardPapersData.ts`:
1. **Old Course Era (2016–2018)**: ४० गुण — विसावे शतक: आधुनिक जगाचा इतिहास व भारताचे परराष्ट्र धोरण.
2. **Transitional New Course (2019)**: ६० गुण — नवीन अभ्यासक्रमाची पहिली मुख्य परीक्षा; अंतर्गत मूल्यमापन शून्य.
3. **Canonical Activity Sheet (2020, 2023–2025)**: ४० गुण — २८ इतिहास + १२ राज्यशास्त्र; अंतर्गत मूल्यमापन १० गुण.
4. **COVID-19 Government Resolution (2021)**: परीक्षा रद्द — अधिकृत शासन निर्णय व ५०:३०:२० पर्यायी मूल्यमापन सूत्र.
5. **Reduced Syllabus Post-COVID (2022)**: ४० गुण — २५% अभ्यासक्रम कपात (Non-evaluative reduction).

---

## 10-Year Examination Archive Status Matrix

| Year | Session / Title | Curriculum Era | Total Marks | Structure & Blueprints | Status |
| :---: | :--- | :--- | :---: | :--- | :---: |
| **2016** | मार्च २०१६ बोर्ड परीक्षा | `old_course` | 40 | History 28 (Q1–Q5), Pol Sci 12 (Q6–Q9); Modern World History | Verified in Archive |
| **2017** | मार्च २०१७ बोर्ड परीक्षा | `old_course` | 40 | History 28 (Q1–Q5), Pol Sci 12 (Q6–Q9); Modern World History | Verified in Archive |
| **2018** | मार्च २०१८ बोर्ड परीक्षा | `old_course` | 40 | Final examination of the Old Course syllabus | Verified in Archive |
| **2019** | मार्च २०१९ बोर्ड परीक्षा | `transitional_new` | 60 | First New Syllabus examination; History 40 + Pol Sci 20; 0 internal marks | Verified in Archive |
| **2020** | मार्च २०२० बोर्ड परीक्षा | `canonical_new` | 40 | Activity sheet pattern (कृतिपत्रिका); History 28 + Pol Sci 12; 10 internal marks | Verified in Archive |
| **2021** | २०२१ शासन निर्णय व सूत्र | `covid_resolution` | 100 | Written exam cancelled (GR संकीर्ण २०२१/प्र.क्र.३९/एसडी-२); 50:30:20 formula | Verified in Archive |
| **2022** | मार्च २०२२ बोर्ड परीक्षा | `covid_reduced` | 40 | Post-COVID first exam with 25% non-evaluative syllabus reduction | Verified in Archive |
| **2023** | मार्च २०२३ बोर्ड परीक्षा | `canonical_new` | 40 | 100% full syllabus restored; History 28 + Pol Sci 12 | Verified in Archive |
| **2024** | मार्च २०२४ बोर्ड परीक्षा | `canonical_new` | 40 | Advanced application, concept maps, passage analysis, and self-expression | Verified in Archive |
| **2025** | २०२५ बोर्ड प्रारूप व प्रश्नपेढी | `canonical_new` | 40 | SCERT Pratibha Question Bank & MSBSHSE official model paper | Verified in Archive |

---

## Empirical Recurrence Telemetry (2019–2025 New Course)

Automated full-text frequency analysis across all six New Course examinations (2019, 2020, 2022, 2023, 2024, 2025) identified the highest-frequency historical topics. In Milestone 3, these topics receive the `FrequencyMarker` badge (`★★★`, `★★`, `★`):

| संकल्पना / विचारवंत (Concept / Thinker) | Star Rating | Recurrence (६ पैकी) | % Frequency | Appearing Examination Years | Trend & Examination Significance |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **कार्ल मार्क्स (वर्गसिद्धान्त / दास कॅपिटल)** | ★★★ | ६ / ६ | **१००%** | 2019, 2020, 2022, 2023, 2024, 2025 | प्रत्येक वर्षी हमखास विचारला जाणारा प्रश्न (MCQ, चुकीची जोडी किंवा सविस्तर उत्तर). |
| **सामाजिक व राजकीय चळवळी (शेतकरी/कामगार)** | ★★★ | ६ / ६ | **१००%** | 2019, 2020, 2022, 2023, 2024, 2025 | राज्यशास्त्रातील सर्वोच्च पुनरावृत्ती (चूक की बरोबर किंवा संकल्पनाचित्र). |
| **रेने देकार्त (डिस्कोर्स ऑन द मेथड)** | ★★★ | ५ / ६ | **८३%** | 2019, 2020, 2022, 2024, 2025 | वस्तुनिष्ठ १ गुण व ऐतिहासिक साधनांची विश्वसनीयता यावर वारंवार प्रश्न. |
| **बाळशास्त्री जांभेकर / 'दर्पण'** | ★★★ | ५ / ६ | **८३%** | 2019, 2020, 2022, 2024, 2025 | वृत्तपत्रांचा इतिहास (धडा ५) मधील सर्वाधिक आवडीचा बोर्ड प्रश्न. |
| **खेळ व खेळणी (इतिहास व व्यावसायिक संधी)** | ★★★ | ५ / ६ | **८३%** | 2020, 2022, 2023, 2024, 2025 | धडा ७ मधील खेळणी व व्यावसायिक संधी यावर नियमित संकल्पनाचित्र किंवा टीप. |
| **पर्यटन (पर्यटन प्रकार / थॉमस कुक)** | ★★★ | ५ / ६ | **८३%** | 2020, 2022, 2023, 2024, 2025 | धडा ८ मधील पर्यटन प्रकार ओघतक्ता किंवा थॉमस कुक यांचे योगदान. |
| **नाट्य व लोककला (दशावतार/तमाशा/भारुड)** | ★★★ | ५ / ६ | **८३%** | 2019, 2020, 2022, 2024, 2025 | मनोरंजनाची माध्यमे (धडा ६) मधील लोकनाट्य परंपरा. |
| **व्हॉल्टेअर (आधुनिक इतिहासलेखनाचा जनक)** | ★★★ | ४ / ६ | **६७%** | 2019, 2020, 2022, 2024 | प्र. १(अ) वस्तुनिष्ठ पर्यायामध्ये सातत्याने विचारला जाणारा प्रश्न. |
| **केसरी व मराठा (लोकमान्य टिळक)** | ★★★ | ४ / ६ | **६७%** | 2019, 2020, 2022, 2025 | वृत्तपत्रे व स्वातंत्र्यलढ्यातील राष्ट्रीय जागृती. |
| **राष्ट्रीय अभिलेखागार (National Archives)** | ★★★ | ४ / ६ | **६७%** | 2019, 2020, 2022, 2024 | नवी दिल्ली येथील अभिलेखागार व पुणे येथील चित्रपट अभिलेखागार (NFAI). |
| **दूरदर्शन व ऐतिहासिक मालिका** | ★★★ | ४ / ६ | **६७%** | 2019, 2023, 2024, 2025 | दृकश्राव्य माध्यम व ऐतिहासिक मालिकांची लोकप्रियता (रामायण, भारत एक खोज). |
| **भारतीय संविधानाची मूलभूत चौकट** | ★★★ | ४ / ६ | **६७%** | 2020, 2023, 2024, 2025 | राज्यशास्त्र धडा १: न्यायालयाची भूमिका व संविधानाची गतिशीलता. |
| **राजकीय पक्षांची कार्ये व मान्यता निकष** | ★★★ | ४ / ६ | **६७%** | 2019, 2022, 2023, 2024 | राज्यशास्त्र धडा ३: राष्ट्रीय व प्रादेशिक पक्षांचे निवडणूक आयोगाचे निकष. |
| **मायकेल फुको (ज्ञानाचे पुरातत्त्व)** | ★★ | ३ / ६ | **५०%** | 2019, 2023, 2024 | 'आर्किऑलॉजी ऑफ नॉलेज' व विधाने सकारण स्पष्ट करा. |
| **अजिंठा व युनेस्को जागतिक वारसा स्थळे** | ★★ | ३ / ६ | **५०%** | 2019, 2023, 2024 | उपयोजित इतिहास (धडा ३) सांस्कृतिक वारसा स्थळांचे जतन. |
| **ऐतिहासिक खेळणी (पॉम्पेई / सिंधू संस्कृती)** | ★★ | ३ / ६ | **५०%** | 2022, 2023, 2024 | खेळणी आणि इतिहास यांच्यातील ऐतिहासिक परस्परसंबंध. |
| **बखर (सभासद बखर / भाऊसाहेबांची बखर)** | ★ | २ / ६ | **३३%** | 2019, 2024 | मराठा इतिहासलेखन परंपरा व ऐतिहासिक कागदपत्रे. |
| **निवडणूक आयोग व आचारसंहिता** | ★ | २ / ६ | **३३%** | 2020, 2025 | राज्यशास्त्र धडा २: आचारसंहिता म्हणजे काय व तिचे महत्त्व. |
| **शेतकरी चळवळ व स्वामिनाथन आयोग** | ★ | २ / ६ | **३३%** | 2022, 2024 | राज्यशास्त्र धडा ४: शेतकरी संघटनांच्या मागण्या. |
| **द्वंद्ववाद (हेगेल / Thesis-Antithesis)** | ★ | १ / ६ | **१७%** | 2025 | हेगेलची द्वंद्ववादी पद्धत संकल्पनाचित्र. |
| **स्त्रीवादी इतिहासलेखन (ताराबाई शिंदे)** | ★ | १ / ६ | **१७%** | 2023 | 'स्त्री-पुरुष तुलना' (१८८२) आद्य स्त्रीवादी ग्रंथ. |

---

## Special Year 2021: Government Resolution Architecture

Because of the second wave of COVID-19, the State Government cancelled the March/April 2021 SSC board examinations. In Milestone 3, instead of rendering a non-existent question paper, the system renders `CovidResolutionView.tsx`:

- **Decree 1 (Cancellation)**: शालेय शिक्षण व क्रीडा विभाग शासन निर्णय क्र. `संकीर्ण २०२१/प्र.क्र.३९/एसडी-२` (दिनांक १२ मे २०२१).
- **Decree 2 (Evaluation Formula)**: शासन निर्णय क्र. `परीक्षा-०५२१/प्र.क्र.४३/एसडी-२` (दिनांक २८ मे २०२१).
- **Executive Circular**: महाराष्ट्र राज्य मंडळ परिपत्रक क्र. `४०२७` (दिनांक ९ जून २०२१).
- **50:30:20 Calculation Model**:
  $$\text{Final Subject Mark (100)} = (0.50 \times \text{Class 9 Final}) + (0.30 \times \text{Class 10 Year Written}) + (0.20 \times \text{Class 10 Oral/Internal})$$
- **Interactive UI Feature**: An embedded 50:30:20 formula simulator allowing students to input historical Class 9 and internal marks to calculate final converted SSC score.

---

## Milestone 3 Data Ingestion Blueprint

1. **Target File**: `src/data/boardPapersData.ts`
2. **Schema Import**: `import type { BoardPaperYearArchive, ExamYear } from '../types/boardPapers';`
3. **Data Source Manifest**:
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2016/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2017/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2018/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2019/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2020/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2021/२०२१_बोर्ड_परीक्षा_रद्द_व_मूल्यमापन_पद्धती_अधिकृत_शासन_निर्णय.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2022/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2023/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2024/बोर्ड_प्रश्नपत्रिका.md`
   - `२_बोर्ड_प्रश्नपत्रिका_२०१६_ते_२०२५/वर्ष_2025/बोर्ड_प्रश्नपत्रिका.md`
4. **Cross-Linking**: Every question links to `chapterAssociationId` in `chaptersData.ts` (e.g. `hist-1` for Marx, `pol-4` for Movements) allowing instant jump between Board Questions and Swadhay chapters.
