# Curriculum Ingestion & Rubric Completeness Matrix (इयत्ता १० वी अभ्यासक्रम)

## Overview & Audit Summary

This document provides the canonical tracking matrix for the complete 14-chapter curriculum (9 History + 5 Political Science) for Class 10 Maharashtra State Board (MSBSHSE), as specified in User Requirement R1 and Milestone M2.

- **Total Chapters**: 14 (9 History + 5 Political Science)
- **Total Swadhay Questions**: 98 (7 questions per chapter, 63 History + 35 Political Science)
- **Tripartite Rubric Standard**: 100% of questions require Band A (`प्रस्तावना` - ½ mark), Band B (`मुख्य मुद्दे` - 1 to 2 marks), and Band C (`निष्कर्ष` - ½ mark).
- **Current Workspace Status**: Complete — All 14 chapters (9 History + 5 Political Science, 98 questions total) are fully ingested and registered in `src/data/chaptersData.ts` with 100% MSBSHSE tripartite rubrics.

---

## 14-Chapter Master Ingestion Matrix

| # | Subject | Chapter ID | Marathi Title (अधिकृत नाव) | English Title | Weightage (गुण) | Questions | Tripartite Rubric Status | Ingestion Status |
| :---: | :---: | :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| 1 | History | `hist-1` | इतिहासलेखन : पाश्चात्त्य परंपरा | Historiography : Western Tradition | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 2 | History | `hist-2` | इतिहासलेखन : भारतीय परंपरा | Historiography : Indian Tradition | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 3 | History | `hist-3` | उपयोजित इतिहास | Applied History | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 4 | History | `hist-4` | भारतीय कलांचा इतिहास | History of Indian Arts | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 5 | History | `hist-5` | प्रसारमाध्यमे आणि इतिहास | Mass Media and History | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 6 | History | `hist-6` | मनोरंजनाची माध्यमे आणि इतिहास | Entertainment Media and History | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 7 | History | `hist-7` | खेळ आणि इतिहास | Sports and History | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 8 | History | `hist-8` | पर्यटन आणि इतिहास | Tourism and History | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 9 | History | `hist-9` | ऐतिहासिक ठेव्यांचे जतन | Heritage Management | 4 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 10 | Pol Sci | `pol-1` | संविधानाची वाटचाल | Working of the Constitution | 3 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 11 | Pol Sci | `pol-2` | निवडणूक प्रक्रिया | Electoral Process | 3 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 12 | Pol Sci | `pol-3` | राजकीय पक्ष | Political Parties | 3 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 13 | Pol Sci | `pol-4` | सामाजिक व राजकीय चळवळी | Social and Political Movements | 3 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |
| 14 | Pol Sci | `pol-5` | भारतीय लोकशाहीसमोरील आव्हाने | Challenges before Indian Democracy | 3 | 7 | Complete (`प्रस्तावना`, `मुद्दे`, `निष्कर्ष`) | Registered |

---

## Detailed Chapter Specifications & Taxonomy

### History (इतिहास — ९ धडे)

#### 1. इतिहासलेखन : पाश्चात्त्य परंपरा (`hist-1`)
- **Key Concepts**: आधुनिक इतिहासलेखनाची वैशिष्ट्ये, रेने देकार्त, व्हॉल्टेअर, हेगेलचा द्वंद्ववाद, लिओपॉल्ड रांके, कार्ल मार्क्सचा वर्गसंघर्ष, अ‍ॅनल्स प्रणाली, मायकेल फुको (ज्ञानाचे पुरातत्त्व), स्त्रीवादी इतिहासलेखन.
- **Question Distribution**:
  - प्र. १(अ) MCQ: आधुनिक इतिहासलेखनाचा जनक (व्हॉल्टेअर)
  - प्र. १(ब) चुकीची जोडी: कार्ल मार्क्स – डिस्कोर्स ऑन द मेथड (चुकीची)
  - प्र. २(अ) संकल्पनाचित्र: द्वंद्ववादी प्रक्रिया (Thesis-Antithesis-Synthesis)
  - प्र. २(ब) टिपा: अ‍ॅनल्स प्रणाली
  - प्र. ३ विधाने सकारण: फुको यांच्या लेखनपद्धतीला ज्ञानाचे पुरातत्त्व म्हटले जाते
  - प्र. ३ विधाने सकारण: स्त्रियांच्या आयुष्याशी निगडित विविध पैलूंवर विचार करणारे संशोधन सुरू झाले
  - प्र. ५ सविस्तर उत्तर: कार्ल मार्क्स यांचा वर्गसिद्धान्त स्पष्ट करा

#### 2. इतिहासलेखन : भारतीय परंपरा (`hist-2`)
- **Key Concepts**: प्राचीन, मध्ययुगीन व आधुनिक भारतीय इतिहासलेखन, बाणभट्टाचे हर्षचरित, कल्हणाची राजतरंगिणी, झियाउद्दीन बरनीची तारीख-इ-फिरुझशाही, बखर परंपरा (सभासद बखर, भाऊसाहेबांची बखर), वसाहतवादी, प्राच्यवादी, राष्ट्रवादी, मार्क्सवादी, वंचित (Subaltern), स्त्रीवादी इतिहासलेखन.
- **Question Distribution**: 7 questions covering colonial, nationalist, and subaltern schools with model rubrics.

#### 3. उपयोजित इतिहास (`hist-3`)
- **Key Concepts**: उपयोजित इतिहास संकल्पना (Public History), जनांसाठी इतिहास, सांस्कृतिक व नैसर्गिक वारसा, युनेस्को जागतिक वारसा स्थळे (अजिंठा, वेरूळ, छत्रपती शिवाजी महाराज टर्मिनस, कास पठार), राष्ट्रीय अभिलेखागार, संग्रहालये व ग्रंथालये.
- **Question Distribution**: 7 questions covering tangible/intangible heritage and historical tourism applications.

#### 4. भारतीय कलांचा इतिहास (`hist-4`)
- **Key Concepts**: दृक कला व ललित/आंगिक कला, लोककला व अभिजात कला, भारतीय चित्रकला व शिल्पकला परंपरा, वारली चित्रकला, मराठा शैली, हेमाडपंती मंदिरे, इस्लामिक व इंडो-गॉथिक स्थापत्य, भारतीय संगीत, नृत्य व लोकनाट्य परंपरा (दशावतार, पोवाडा, भरतनाट्यम).
- **Question Distribution**: 7 questions covering architectural styles, folk art traditions, and classical arts.

#### 5. प्रसारमाध्यमे आणि इतिहास (`hist-5`)
- **Key Concepts**: वृत्तपत्रे (बंगाल गॅझेट, दर्पण, प्रभाकर, ज्ञानोदय, केसरी, मराठा), नियतकालिके, आकाशवाणी (AIR), दूरदर्शन, प्रसारमाध्यमांची ऐतिहासिक आवश्यकता, वस्तुनिष्ठता व समीक्षणात्मक परीक्षण.
- **Question Distribution**: 7 questions covering historical journalism, radio broadcasting, and television documentaries.

#### 6. मनोरंजनाची माध्यमे आणि इतिहास (`hist-6`)
- **Key Concepts**: मनोरंजनाची आवश्यकता, लोकनाट्य (तमाशा, भारुड, लळित), दशावतारी नाटके, संगीत नाटक (अण्णासाहेब किर्लोस्कर, बालगंधर्व), भारतीय चित्रपटसृष्टीची वाटचाल (दादासाहेब फाळके, राजा हरिश्चंद्र), ऐतिहासिक चित्रपट व व्यावसायिक संधी.
- **Question Distribution**: 7 questions covering theater history, folk performances, and cinema pioneers.

#### 7. खेळ आणि इतिहास (`hist-7`) — *Ingestion Source: `धडा_७_खेळ_आणि_इतिहास`*
- **Key Concepts**: खेळांचे महत्त्व, मैदानी व बैठे खेळ, देशी खेळ (कबड्डी, खो-खो, आट्यापाट्या, मल्लखांब) व विदेशी खेळ (क्रिकेट, फुटबॉल, टेनिस), खेळांचे आंतरराष्ट्रीयीकरण (ऑलिम्पिक, आशियाड), खेळणी व इतिहास (पॉम्पेईतील हस्तिदंती बाहुली, सिंधू संस्कृतीतील मातीची खेळणी), खेळाचे साहित्य व व्यावसायिक संधी.
- **Target Ingested Questions**:
  - प्र. १(अ) MCQ: मल्लखांबाची निर्मिती (बाळंभटदेव देवधर)
  - प्र. १(ब) चुकीची जोडी: खेळ आणि त्यांचे उगमस्थान
  - प्र. २(अ) संकल्पनाचित्र: देशी व विदेशी मैदानी खेळांचे वर्गीकरण
  - प्र. २(ब) टिपा: खेळ आणि व्यावसायिक संधी
  - प्र. २(ब) टिपा: खेळणी व इतिहास यांच्यातील परस्परसंबंध
  - प्र. ३ विधाने सकारण: सध्याच्या काळात खेळांचे आंतरराष्ट्रीयीकरण झाले आहे
  - प्र. ५ सविस्तर उत्तर: खेळाचे महत्त्व आणि शारीरिक-मानसिक विकासातील योगदान सविस्तर स्पष्ट करा

#### 8. पर्यटन आणि इतिहास (`hist-8`) — *Ingestion Source: `धडा_८_पर्यटन_आणि_इतिहास`*
- **Key Concepts**: पर्यटनाची परंपरा (बौद्ध भिक्खू, युआन श्वांग, संत नामदेव), पर्यटनाचे प्रकार (स्थानिक, आंतरराष्ट्रीय, ऐतिहासिक, भौगोलिक, आरोग्य, कृषी, क्रीडा पर्यटन), थॉमस कुक (पर्यटन तिकीट व सहलींचे आद्य प्रवर्तक), पर्यटनाचा विकास व वारसा स्थळांचे रक्षण, आदरातिथ्य क्षेत्र व रोजगाराच्या संधी.
- **Target Ingested Questions**:
  - प्र. १(अ) MCQ: पर्यटनाचे व्यापारी आद्य प्रवर्तक (थॉमस कुक)
  - प्र. १(ब) चुकीची जोडी: पर्यटन प्रकार व स्थळे
  - प्र. २(अ) संकल्पनाचित्र: पर्यटनाच्या विविध प्रकारांचा ओघतक्ता
  - प्र. २(ब) टिपा: कृषी पर्यटन (Agro-tourism)
  - प्र. २(ब) टिपा: ऐतिहासिक पर्यटनाचे महत्त्व
  - प्र. ३ विधाने सकारण: पर्यटनामुळे स्थानिक पातळीवर मोठ्या प्रमाणावर रोजगाराच्या संधी निर्माण होतात
  - प्र. ५ सविस्तर उत्तर: पर्यटनाचा विकास करताना ऐतिहासिक वारसा स्थळांचे जतन व संवर्धन कसे करावे?

#### 9. ऐतिहासिक ठेव्यांचे जतन (`hist-9`) — *Ingestion Source: `धडा_९_ऐतिहासिक_ठेव्यांचे_जतन`*
- **Key Concepts**: ऐतिहासिक साधनांचे जतन व संवर्धन, मौद्रिक, हस्तलिखित व दस्तऐवज संवर्धन, भारतातील प्रमुख संग्रहालये (इंडियन म्युझियम कोलकाता, छत्रपती शिवाजी महाराज वस्तुसंग्रहालय मुंबई), ग्रंथालये (सरस्वती महाल ग्रंथालय तंजावर, राष्ट्रीय ग्रंथालय कोलकाता), राष्ट्रीय अभिलेखागार (National Archives of India, नवी दिल्ली), कोश वाङ्मय (विश्वकोश, चरित्रकोश, स्थलकोश).
- **Target Ingested Questions**:
  - प्र. १(अ) MCQ: आशियातील सर्वात जुने संग्रहालय (इंडियन म्युझियम, कोलकाता)
  - प्र. १(ब) चुकीची जोडी: ग्रंथालये व त्यांची शहरे
  - प्र. २(अ) संकल्पनाचित्र: कोश वाङ्मयाचे विविध प्रकार
  - प्र. २(ब) टिपा: राष्ट्रीय अभिलेखागार (National Archives)
  - प्र. २(ब) टिपा: सरस्वती महाल ग्रंथालय
  - प्र. ३ विधाने सकारण: ऐतिहासिक दस्तऐवज व प्राचीन वस्तूंचे रासायनिक संवर्धन करणे आवश्यक असते
  - प्र. ५ सविस्तर उत्तर: कोश वाङ्मयाची आवश्यकता व इतिहासाच्या विद्यार्थ्यांसाठी त्याचे महत्त्व स्पष्ट करा

---

### Political Science (राज्यशास्त्र — ५ धडे)

#### 10. संविधानाची वाटचाल (`pol-1`)
- **Key Concepts**: लोकशाहीचे विकेंद्रीकरण (७३ वी व ७४ वी घटनादुरुस्ती), माहितीचा अधिकार (RTI २००५), सामाजिक न्याय व समता, अनुसूचित जाती/जमाती अत्याचार प्रतिबंधक कायदा (Atrocities Act), महिलांचे सक्षमीकरण व ५०% स्थानिक स्वराज्य संस्था आरक्षण, न्यायालयाची भूमिका व मूलभूत चौकट (Basic Structure).
- **Question Distribution**: 7 questions covering democracy, social justice, and judicial review.

#### 11. निवडणूक प्रक्रिया (`pol-2`)
- **Key Concepts**: भारतीय निवडणूक आयोग (कलम ३२४), मुख्य निवडणूक आयुक्त (सुकुमार सेन), आचारसंहिता (Code of Conduct), मतदारसंघांची पुनर्रचना (Delimitation Commission), मतदानाची उत्क्रांती (मतपत्रिका $\rightarrow$ EVM $\rightarrow$ VVPAT), निवडणूक सुधारणा.
- **Question Distribution**: 7 questions covering election commission duties, code of conduct, and voter participation.

#### 12. राजकीय पक्ष (`pol-3`)
- **Key Concepts**: राजकीय पक्षांचे स्वरूप व कार्ये, पक्ष पद्धतीची उत्क्रांती (एकपक्षीय, द्विपक्षीय, बहुपक्षीय व आघाडी सरकारे), राष्ट्रीय पक्ष (काँग्रेस, भाजप, भाकप, माकप, तृणमूल, बसप, राष्ट्रवादी), प्रादेशिक पक्ष (शिवसेना, शिरोमणी अकाली दल, द्रमुक, आसाम गण परिषद), निवडणूक आयोगाचे मान्यता निकष.
- **Question Distribution**: 7 questions covering party systems, national party criteria, and regional aspirations.

#### 13. सामाजिक व राजकीय चळवळी (`pol-4`) — *Ingestion Source: `धडा_४_सामाजिक_व_राजकीय_चळवळी`*
- **Key Concepts**: चळवळ म्हणजे काय?, चळवळींची गरज व लोकशाहीतील महत्त्व, शेतकरी चळवळ (शेतकरी संघटना, भारतीय किसान युनियन - हमीभाव व स्वामिनाथन आयोग शिफारशी), कामगार चळवळ (नारायण मेघाजी लोखंडे, गिरणी कामगार संप), स्त्री चळवळी (हुंडाविरोधी, दारूबंदी, कौटुंबिक हिंसाचार), पर्यावरण चळवळ (चिपको आंदोलन, नर्मदा बचाओ), ग्राहक चळवळ (ग्राहक संरक्षण कायदा १९८६).
- **Target Ingested Questions**:
  - प्र. ६ MCQ: भारतातील शेतकरी चळवळीचे जनक (महात्मा ज्योतिराव फुले / शेतकरी संघटना)
  - प्र. ७ चूक की बरोबर सकारण: लोकशाहीमध्ये चळवळींना फार मोठे महत्त्व असते
  - प्र. ७ चूक की बरोबर सकारण: ग्राहक संरक्षण चळवळीमुळे ग्राहकांचे हक्क सुरक्षित झाले आहेत
  - प्र. ८(अ) संकल्पना स्पष्ट करा: कामगार चळवळ
  - प्र. ८(अ) संकल्पना स्पष्ट करा: पर्यावरण चळवळ (चिपको आंदोलन)
  - प्र. ८(ब) संकल्पनाचित्र: भारतातील प्रमुख सामाजिक चळवळी व त्यांची उद्दिष्टे
  - प्र. ९ थोडक्यात उत्तर: शेतकरी चळवळीच्या प्रमुख मागण्या कोणत्या आहेत ते स्पष्ट करा

#### 14. भारतीय लोकशाहीसमोरील आव्हाने (`pol-5`) — *Ingestion Source: `धडा_५_भारतीय_लोकशाहीसमोरील_आव्हाने`*
- **Key Concepts**: लोकशाहीची सखोलता व प्रत्यक्ष अंमलबजावणी, जमातवाद (Communalism) व धार्मिक ध्रुवीकरण, दहशतवाद व नक्षलवाद, राजकारणाचे गुन्हेगारीकरण (Criminalization of Politics), भ्रष्टाचार व पारदर्शकतेचा अभाव, कुटुंबशाही राजकारण, सामाजिक विषमता व लोकशाहीचे सार्वत्रिकीकरण.
- **Target Ingested Questions**:
  - प्र. ६ MCQ: लोकशाहीसमोरील सर्वात मोठे अंतर्गत आव्हान (भ्रष्टाचार / जमातवाद)
  - प्र. ७ चूक की बरोबर सकारण: राजकारणाचे गुन्हेगारीकरण झाल्यामुळे लोकशाही प्रक्रियेवर विपरीत परिणाम होतो
  - प्र. ७ चूक की बरोबर सकारण: जमातवादामुळे देशाच्या राष्ट्रीय एकात्मतेला धोका निर्माण होतो
  - प्र. ८(अ) संकल्पना स्पष्ट करा: राजकारणाचे गुन्हेगारीकरण
  - प्र. ८(अ) संकल्पना स्पष्ट करा: नक्षलवाद व डाव्यांची अतिरेकी चळवळ
  - प्र. ८(ब) संकल्पनाचित्र: भारतीय लोकशाहीसमोरील अंतर्गत आव्हानांचे वर्गीकरण
  - प्र. ९ थोडक्यात उत्तर: लोकशाही यशस्वी होण्यासाठी आणि आव्हानांवर मात करण्यासाठी कोणत्या उपाययोजना कराव्यात?

---

## Tripartite Rubric Quality Control Invariants

To eliminate rote memorization and satisfy MSBSHSE Chief Moderator standards, every answer must adhere to the three cognitive bands:

1. **Band A: प्रस्तावना (Historical Context / Opening Hook — ½ Mark)**:
   - Sets temporal and conceptual framing (e.g., historical thinker, textbook definition, or constitutional article).
2. **Band B: मुख्य मुद्दे (Core Analytical Mechanism / Memory Hooks — 1 to 2 Marks)**:
   - Structured points with 3–4 word bolded memory hooks (e.g., `उत्पादन साधनांची मालकी`, `कायद्याचे राज्य`, `स्वामिनाथन आयोग शिफारशी`).
   - High-value historical keywords for Devanagari cloze testing.
3. **Band C: निष्कर्ष (Historical Synthesis & Evaluation — ½ Mark)**:
   - Evaluates historical impact, constitutional significance, or contemporary relevance.
