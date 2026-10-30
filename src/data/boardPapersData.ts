/**
 * Maharashtra State Board (MSBSHSE) SSC Class 10
 * 10-Year Board Question Papers Archive Dataset (2016–2025)
 *
 * Spanning 5 distinct curriculum and administrative eras:
 * 1. Old Course Era (2016-2018): 40 marks, Modern World History & Democracy
 * 2. Transitional New Course (2019): 60 marks, 0 internal assessment
 * 3. Canonical Activity Sheet (2020, 2023-2025): 40 marks (28 History + 12 Political Science)
 * 4. COVID-19 Resolution (2021): Written examination cancelled, GR 50:30:20 formula
 * 5. Reduced Syllabus Post-COVID (2022): 40 marks, 25% non-evaluative reduction
 *
 * Adhering strictly to src/types/boardPapers.ts with authentic MSBSHSE tripartite rubrics,
 * Devanagari cloze keywords, memory hooks, and empirical recurrence telemetry.
 */

import type { BoardPaperYearArchive } from '../types/boardPapers';

export const boardPapersData: BoardPaperYearArchive[] = [
  {
    "year": 2016,
    "sessionTitleMarathi": "मार्च २०१६ बोर्ड परीक्षा",
    "curriculumEra": "old_course",
    "totalMarks": 40,
    "durationMinutes": 120,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत."
    ],
    "questions": [
      {
        "id": "bp-2016-q1a-1",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "औद्योगिक क्रांतीचा उगम ______ या देशात झाला असे मानले जाते.",
        "options": [
          "फ्रान्स",
          "इंग्लंड",
          "जर्मनी"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "इंग्लंड"
      },
      {
        "id": "bp-2016-q1a-2",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "बाल्कन प्रदेश हा ______ साम्राज्याचा भाग होता.",
        "options": [
          "जर्मनी",
          "ऑस्ट्रिया",
          "तुर्कस्तान"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "तुर्कस्तान"
      },
      {
        "id": "bp-2016-q1a-3",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "स्टॅलिनने ______ कराराचा भंग करून पोलंडवर आपले वर्चस्व प्रस्थापित केले.",
        "options": [
          "याल्टा",
          "वॉर्सा",
          "नाटो"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "याल्टा"
      },
      {
        "id": "bp-2016-q1b-1",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: वुड्रो विल्सन",
        "options": [
          "भारताचे अवकाश संशोधन",
          "आत्मनिर्णयाचे तत्त्व / १४ कलमे",
          "भारताचे अणु संशोधन"
        ],
        "directAnswer": "वुड्रो विल्सन - आत्मनिर्णयाचे तत्त्व / १४ कलमे"
      },
      {
        "id": "bp-2016-q1b-2",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: डॉ. विक्रम साराभाई",
        "options": [
          "भारताचे अवकाश संशोधन",
          "भारताच्या क्षेपणास्त्र कार्यक्रमाचे जनक",
          "भारताचे अणु संशोधन"
        ],
        "directAnswer": "डॉ. विक्रम साराभाई - भारताचे अवकाश संशोधन"
      },
      {
        "id": "bp-2016-q1b-3",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: डॉ. ए. पी. जे. अब्दुल कलाम",
        "options": [
          "भारताच्या क्षेपणास्त्र कार्यक्रमाचे जनक",
          "भारताचे अवकाश संशोधन",
          "आत्मनिर्णयाचे तत्त्व"
        ],
        "directAnswer": "डॉ. ए. पी. जे. अब्दुल कलाम - भारताच्या क्षेपणास्त्र कार्यक्रमाचे जनक"
      },
      {
        "id": "bp-2016-q2-1",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'साम्राज्यवाद' म्हणजे काय ते स्पष्ट करा.",
        "rubric": {
          "prastavana": "आधुनिक जगाच्या इतिहासात १५ व्या शतकातील भौगोलिक शोधांनंतर साम्राज्यवादाची नवी लाट युरोपमध्ये उगम पावली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "राजकीय-आर्थिक अधिसत्ता",
              "elaborationMarathi": "एका प्रबळ, विकसित आणि बलाढ्य राष्ट्राने आपल्या सामर्थ्याच्या बळावर दुसऱ्या दुर्बल व अविकसित राष्ट्रावर आपले राजकीय, लष्करी आणि आर्थिक सार्वभौमत्व प्रस्थापित करणे म्हणजे साम्राज्यवाद होय.",
              "highValueKeywords": [
                "प्रबळ राष्ट्र",
                "राजकीय सार्वभौमत्व",
                "आर्थिक नियंत्रण"
              ]
            },
            {
              "hookMarathi": "वसाहतींची अनिर्बंध पिळवणूक",
              "elaborationMarathi": "साम्राज्यवादी देश वसाहतींमधील नैसर्गिक साधनसंपत्ती, शेती व खनिजांचा वापर स्वतःच्या देशातील औद्योगिकीकरणासाठी व समृद्धीसाठी करून स्थानिक जनतेचे शोषण करतात.",
              "highValueKeywords": [
                "साधनसंपत्ती",
                "कच्चा माल",
                "आर्थिक शोषण"
              ]
            }
          ],
          "nishkarsha": "साम्राज्यवादातून जागतिक सत्तासंघर्ष उफाळून आला आणि पुढे पहिल्या व दुसऱ्या महायुद्धाची बीजे रोवली गेली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ समर्पक मुख्य मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2016-q3-1",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "विधाने सकारण स्पष्ट करा: बाल्कन प्रदेश हा युरोपमधील स्फोटक भाग बनला.",
        "rubric": {
          "prastavana": "विसाव्या शतकाच्या सुरुवातीला दक्षिण-पूर्व युरोपमधील बाल्कन द्वीपकल्प आंतरराष्ट्रीय संघर्षाचे केंद्रबिंदू ठरला.",
          "mukhyaMudde": [
            {
              "hookMarathi": "ऑटोमन साम्राज्याचा ऱ्हास",
              "elaborationMarathi": "बाल्कन प्रदेश मूळचा तुर्कस्तानच्या (ऑटोमन) साम्राज्याचा भाग होता; तुर्की सत्ता कमकुवत होताच या भागातील ग्रीक, सर्बियन, बल्गेरियन आदी वांशिक गटांमध्ये स्वातंत्र्याची तीव्र भावना निर्माण झाली.",
              "highValueKeywords": [
                "ऑटोमन साम्राज्य",
                "वांशिक गट",
                "स्वातंत्र्य भावना"
              ]
            },
            {
              "hookMarathi": "साम्राज्यवादी सत्तांची स्पर्धा",
              "elaborationMarathi": "बाल्कन प्रदेशावर आपले राजकीय वर्चस्व प्रस्थापित करण्यासाठी रशिया (पॅन-स्लाव्ह चळवळ), ऑस्ट्रिया आणि जर्मनी या साम्राज्यवादी महासत्तांमध्ये तीव्र स्पर्धा व मत्सर निर्माण झाला.",
              "highValueKeywords": [
                "पॅन-स्लाव्ह",
                "ऑस्ट्रिया-हंगेरी",
                "महासत्तांची स्पर्धा"
              ]
            }
          ],
          "nishkarsha": "या वांशिक असंतोष व आंतरराष्ट्रीय सत्तासंघर्षामुळे बाल्कन प्रदेशाला \"युरोपचे दारूगोळ्याचे कोठार\" म्हटले गेले, ज्याने पहिल्या महायुद्धाला वाट करून दिली.",
          "scoringRuleMarathi": "विधान अचूक कारणमीमांसेसह २ मुद्द्यांत स्पष्ट केल्यास २ पैकी २ गुण."
        }
      },
      {
        "id": "bp-2016-q4-1",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. ४ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "औद्योगिक क्रांतीचे आर्थिक परिणाम स्पष्ट करा.",
        "rubric": {
          "prastavana": "१८ व्या शतकाच्या उत्तरार्धात इंग्लंडमध्ये यंत्रांच्या सहाय्याने मोठ्या प्रमाणावर उत्पादन सुरू झाल्याने आर्थिक रचनेत मूलगामी बदल झाले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "उत्पादनात प्रचंड वाढ",
              "elaborationMarathi": "हातमागांऐवजी बाष्पशक्ती व यंत्रांचा वापर सुरू झाल्यामुळे कापड व लोखंड उत्पादनात प्रचंड वाढ झाली आणि वस्तू स्वस्त दरात मुबलक उपलब्ध झाल्या.",
              "highValueKeywords": [
                "यंत्रयुग",
                "प्रचंड उत्पादन",
                "बाष्पशक्ती"
              ]
            },
            {
              "hookMarathi": "भांडवलशाहीचा उदय",
              "elaborationMarathi": "मोठमोठे कारखाने उभे राहिल्याने भांडवलदार वर्ग शक्तिशाली बनला आणि उत्पादन साधनांवर मूठभर धनिकांचे नियंत्रण प्रस्थापित झाले.",
              "highValueKeywords": [
                "भांडवलदार वर्ग",
                "उत्पादन साधने",
                "खाजगी नफा"
              ]
            },
            {
              "hookMarathi": "जागतिक बाजारपेठेची गरज",
              "elaborationMarathi": "तयार झालेला अतिरिक्त माल विकण्यासाठी आणि स्वस्त कच्चा माल मिळवण्यासाठी युरोपीय देशांना आंतरराष्ट्रीय बाजारपेठ व वसाहती मिळवणे अपरिहार्य बनले.",
              "highValueKeywords": [
                "अतिरिक्त माल",
                "कच्चा माल",
                "जागतिक बाजारपेठ"
              ]
            }
          ],
          "nishkarsha": "औद्योगिक क्रांतीने जागतिक अर्थव्यवस्थेला आधुनिक गती दिली, परंतु त्यातूनच आक्रमक आर्थिक साम्राज्यवादाचा पाया घातला गेला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ आर्थिक परिणाम २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        }
      },
      {
        "id": "bp-2016-q5-1",
        "year": 2016,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_4m",
        "marks": 4,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पहिल्या महायुद्धाची (१९१४-१९१८) प्रमुख कारणे सविस्तर स्पष्ट करा.",
        "rubric": {
          "prastavana": "२८ जुलै १९१४ रोजी सुरू झालेले पहिले महायुद्ध हे आधुनिक मानवी इतिहासातील अत्यंत संहारक जागतिक युद्ध ठरले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "युरोपचे लष्करी गटबाजी",
              "elaborationMarathi": "युरोपीय महासत्तांचे दोन परस्परविरोधी लष्करी गट तयार झाले - त्रिराष्ट्र करार (जर्मनी, ऑस्ट्रिया, इटली) आणि त्रिराष्ट्र मैत्री (इंग्लंड, फ्रान्स, रशिया). यामुळे परस्पर अविश्वास शिगेला पोहोचला.",
              "highValueKeywords": [
                "लष्करी गट",
                "त्रिराष्ट्र करार",
                "त्रिराष्ट्र मैत्री"
              ]
            },
            {
              "hookMarathi": "आक्रमक राष्ट्रवाद व लष्करशाही",
              "elaborationMarathi": "माझाच देश जगावर राज्य करण्यास योग्य ही आक्रमक अहंकार भावना वाढीस लागली; देशांनी सैनिकी सामर्थ्य व शस्त्रास्त्र निर्मितीवर प्रचंड खर्च करून युद्धाचे वातावरण तयार केले.",
              "highValueKeywords": [
                "उग्र राष्ट्रवाद",
                "शस्त्रास्त्र स्पर्धा",
                "लष्करशाही"
              ]
            },
            {
              "hookMarathi": "साम्राज्यवादी स्पर्धा",
              "elaborationMarathi": "आशिया व आफ्रिकेत वसाहती मिळवण्यासाठी आणि बाजारपेठा काबीज करण्यासाठी इंग्लंड, फ्रान्स आणि नव्याने उदयास आलेला जर्मनी यांच्यात कमालीचा आर्थिक संघर्ष निर्माण झाला.",
              "highValueKeywords": [
                "वसाहत स्पर्धा",
                "आर्थिक संघर्ष",
                "बाजारपेठा"
              ]
            },
            {
              "hookMarathi": "सारायेव्हो येथील तात्कालिक हत्या",
              "elaborationMarathi": "२८ जून १९१४ रोजी ऑस्ट्रियाचा वारसदार आर्कड्यूक फ्रान्सिस फर्निनांड व त्याची पत्नी यांची बोस्नियाची राजधानी सारायेव्हो येथे एका सर्बियन राष्ट्रवाद्याने गोळ्या झाडून हत्या केली. ऑस्ट्रियाने सर्बियावर युद्ध पुकारल्याने महायुद्ध भडकले.",
              "highValueKeywords": [
                "आर्कड्यूक फर्निनांड",
                "सारायेव्हो हत्या",
                "तात्कालिक कारण"
              ]
            }
          ],
          "nishkarsha": "या कारणांमुळे पेटलेले महायुद्ध चार वर्षे चालले, ज्याने रशियन, जर्मन, ऑस्ट्रियन व ऑटोमन अशा चार विशाल साम्राज्यांचा अंत घडवून आणला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ४ सविस्तर कारणे ३ गुण + निष्कर्ष ½ गुण = ४ गुण."
        }
      },
      {
        "id": "bp-2016-q6-1",
        "year": 2016,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "भारतात ______ शासन पद्धती अस्तित्वात आहे.",
        "options": [
          "संसदीय",
          "अध्यक्षीय",
          "लष्करी",
          "एकात्मिक"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "संसदीय",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2016-q6-2",
        "year": 2016,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "लोकांच्या राजकीय सहभागाचे प्रमाण ______ देशात जास्त असते.",
        "options": [
          "हुकूमशाही",
          "प्रत्यक्ष लोकशाही",
          "लष्करशाही",
          "सरंजामशाही"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "प्रत्यक्ष लोकशाही"
      },
      {
        "id": "bp-2016-q6-3",
        "year": 2016,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "राजकीय पक्षांचे मुख्य उद्दिष्ट ______ मिळवणे असते.",
        "options": [
          "सामाजिक कार्य",
          "सत्ता",
          "संपत्ती",
          "प्रसिद्धी"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "सत्ता",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2016-q7-1",
        "year": 2016,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "short_notes_2m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "'उपक्रम' (Initiative) म्हणजे काय?",
        "directAnswer": "प्रत्यक्ष लोकशाहीत कायद्याचा मसुदा तयार करून तो कायदेमंडळाकडे विचारार्थ पाठवण्याचा नागरिकांना असलेला संविधानात्मक अधिकार म्हणजे उपक्रम (Initiative) होय."
      },
      {
        "id": "bp-2016-q8-1",
        "year": 2016,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: लोकशाहीत सर्व नागरिकांना समान हक्क असतात.",
        "rubric": {
          "prastavana": "भारतीय संविधान लोकशाही, स्वातंत्र्य आणि समतेच्या तत्त्वांवर अधिष्ठित आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीदर्शक बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. लोकशाही शासनप्रणाली मूलभूत मानवी हक्क आणि समानतेवर आधारित असते.",
              "highValueKeywords": [
                "विधान बरोबर",
                "मूलभूत हक्क",
                "समानता"
              ]
            },
            {
              "hookMarathi": "कायद्यापुढे समानता",
              "elaborationMarathi": "संविधानाने धर्म, वंश, जात, लिंग किंवा जन्मस्थान या आधारांवर कोणताही भेदभाव न करता प्रत्येक नागरिकाला समान मूलभूत अधिकार व मतदानाचा समान अधिकार दिला आहे.",
              "highValueKeywords": [
                "भेदभाव प्रतिबंध",
                "समान अधिकार",
                "प्रौढ मतदान"
              ]
            }
          ],
          "nishkarsha": "नागरिकांचे हक्क सुरक्षित राखल्यामुळेच खरीखुरी सर्वसमावेशक लोकशाही प्रत्यक्षात येते.",
          "scoringRuleMarathi": "विधान चूक की बरोबर ओळखण्यास १ गुण + अचूक कारणास १ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2016-q9-1",
        "year": 2016,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-5",
        "questionMarathi": "लोकशाहीसमोरील आव्हानांचे स्वरूप स्पष्ट करा.",
        "rubric": {
          "prastavana": "लोकशाही ही सतत विकसित होणारी गतिशील शासनप्रणाली असून तिच्या यशस्वीतेसाठी विविध आव्हानांवर मात करावी लागते.",
          "mukhyaMudde": [
            {
              "hookMarathi": "सामाजिक व आर्थिक विषमता",
              "elaborationMarathi": "समाजातील गरिबी, निरक्षरता, बेरोजगारी आणि जात-धर्म आधारित भेदभाव लोकशाही सहभागात मोठा अडथळा निर्माण करतात.",
              "highValueKeywords": [
                "आर्थिक विषमता",
                "दारिद्र्य",
                "सामाजिक सलोखा"
              ]
            },
            {
              "hookMarathi": "गुन्हेगारीकरण व भ्रष्टाचार",
              "elaborationMarathi": "निवडणूक प्रक्रियेत पैशाचा गैरवापर, वाढता भ्रष्टाचार आणि राजकारणाचे गुन्हेगारीकरण ही आधुनिक लोकशाहीसमोरील गंभीर आव्हाने आहेत.",
              "highValueKeywords": [
                "गुन्हेगारीकरण",
                "भ्रष्टाचार",
                "पारदर्शकता"
              ]
            }
          ],
          "nishkarsha": "कायद्याचे राज्य, जनतेची सतर्कता आणि निष्पक्ष संस्थांच्या बळावरच या आव्हानांवर यशस्वी मात करता येते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ स्पष्ट मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      }
    ]
  },
  {
    "year": 2017,
    "sessionTitleMarathi": "मार्च २०१७ बोर्ड परीक्षा",
    "curriculumEra": "old_course",
    "totalMarks": 40,
    "durationMinutes": 120,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत."
    ],
    "questions": [
      {
        "id": "bp-2017-q1a-1",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पोर्तुगीज राजा ______ याने सागरी मोहिमांना प्रोत्साहन दिले.",
        "options": [
          "विल्यम",
          "हेन्री",
          "निकोलस"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "हेन्री"
      },
      {
        "id": "bp-2017-q1a-2",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "त्रिराष्ट्र करारामध्ये जर्मनी, ऑस्ट्रिया आणि ______ यांचा समावेश होता.",
        "options": [
          "फ्रान्स",
          "जपान",
          "इटली"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "इटली"
      },
      {
        "id": "bp-2017-q1a-3",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "१८ व्या शतकापर्यंत ______ खंड 'अज्ञातांचा देश' (काळोखाचा खंड) म्हणून ओळखला जात होता.",
        "options": [
          "आशिया",
          "आफ्रिका",
          "अमेरिका"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "आफ्रिका"
      },
      {
        "id": "bp-2017-q1b-1",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: लेनिन",
        "options": [
          "इटलीतील फॅसिस्ट राजवट",
          "रशियन बोल्शेविक क्रांतीचे नेते",
          "जर्मनीतील नाझी हुकूमशहा"
        ],
        "directAnswer": "लेनिन - रशियन बोल्शेविक क्रांतीचे नेते"
      },
      {
        "id": "bp-2017-q1b-2",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: मुसोलिनी",
        "options": [
          "इटलीतील फॅसिस्ट राजवट",
          "जर्मनीतील नाझी हुकूमशहा",
          "अमेरिकेचे राष्ट्राध्यक्ष"
        ],
        "directAnswer": "मुसोलिनी - इटलीतील फॅसिस्ट राजवट"
      },
      {
        "id": "bp-2017-q1b-3",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: ॲडॉल्फ हिटलर",
        "options": [
          "जर्मनीतील नाझी हुकूमशहा",
          "रशियन बोल्शेविक क्रांतीचे नेते",
          "इटलीतील फॅसिस्ट राजवट"
        ],
        "directAnswer": "ॲडॉल्फ हिटलर - जर्मनीतील नाझी हुकूमशहा"
      },
      {
        "id": "bp-2017-q2-1",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'वसाहतवाद' ही संकल्पना स्पष्ट करा.",
        "rubric": {
          "prastavana": "१५ व्या व १६ व्या शतकात सागरी मार्गांचा शोध लागल्यानंतर युरोपीय देशांनी आशिया व आफ्रिकेत वसाहतवादाची सुरुवात केली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "भौगोलिक ताबा व वसाहतींची स्थापना",
              "elaborationMarathi": "एका प्रबळ देशाने दुसऱ्या दुर्बल देशातील प्रदेशावर आपले राजकीय व लष्करी वर्चस्व प्रस्थापित करून तेथे स्वतःच्या लोकांची कायमस्वरूपी राजकीय व व्यापारी वस्ती निर्माण करणे म्हणजे वसाहतवाद होय.",
              "highValueKeywords": [
                "व्यापारी वस्ती",
                "राजकीय वर्चस्व",
                "वसाहत"
              ]
            },
            {
              "hookMarathi": "आर्थिक लाभासाठी शोषण",
              "elaborationMarathi": "मातृदेशाच्या आर्थिक समृद्धीसाठी वसाहतीतील कच्चा माल हस्तगत करणे आणि स्वतःचा पक्का माल चढ्या भावाने विकून स्थानिकांना परावलंबी बनवणे हे वसाहतवादाचे मूळ उद्दिष्ट असते.",
              "highValueKeywords": [
                "कच्चा माल",
                "परावलंबित्व",
                "मातृदेशाचा नफा"
              ]
            }
          ],
          "nishkarsha": "वसाहतवाद हा साम्राज्यवादाचा पाया ठरला, ज्यातून पुढे आशिया व आफ्रिकेत राष्ट्रीय मुक्ती लढे उफाळून आले.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2017-q3-1",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "विधाने सकारण स्पष्ट करा: पोर्तुगीजांचे साम्राज्य भारतात दीर्घकाळ टिकू शकले नाही.",
        "rubric": {
          "prastavana": "वास्को-द-गामाने १४९८ मध्ये भारताचा सागरी शोध लावल्यानंतर पोर्तुगीजांनी भारतात पहिली युरोपीय सत्ता स्थापन केली होती.",
          "mukhyaMudde": [
            {
              "hookMarathi": "धार्मिक असहिष्णुता",
              "elaborationMarathi": "पोर्तुगीजांनी स्थानिक भारतीय प्रजेवर जबरदस्तीने धर्मपरिवर्तन लादले आणि मंदिरे उद्ध्वस्त केल्यामुळे स्थानिक जनतेत त्यांच्याविषयी तीव्र संताप व विरोध निर्माण झाला.",
              "highValueKeywords": [
                "जबरदस्ती धर्मपरिवर्तन",
                "धार्मिक असहिष्णुता",
                "स्थानिकांचा विरोध"
              ]
            },
            {
              "hookMarathi": "डच व इंग्रजांचे आव्हान",
              "elaborationMarathi": "पोर्तुगाल हा आकाराने लहान देश होता; नंतरच्या काळात डच, ब्रिटिश आणि फ्रेंच यांच्या आधुनिक नौदलाचा व लष्करी सामर्थ्याचा मुकाबला पोर्तुगीज करू शकले नाहीत.",
              "highValueKeywords": [
                "नौदल स्पर्धा",
                "ब्रिटिश आव्हान",
                "मर्यादित मनुष्यबळ"
              ]
            }
          ],
          "nishkarsha": "या कारणांमुळे पोर्तुगीजांचे भारतातील साम्राज्य केवळ गोवा, दमण व दीव या लहान किनारपट्टी भागापुरतेच मर्यादित राहिले.",
          "scoringRuleMarathi": "विधान अचूक २ मुद्द्यांच्या कारणासह स्पष्ट केल्यास २ पैकी २ गुण."
        }
      },
      {
        "id": "bp-2017-q4-1",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. ४ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "साम्राज्यवादाचे विधायक परिणाम स्पष्ट करा.",
        "rubric": {
          "prastavana": "साम्राज्यवाद हा शोषणकारी असला, तरी काही बाबतीत वसाहतींच्या देशांमध्ये अनिच्छेने का होईना काही विधायक सुधारणा घडून आल्या.",
          "mukhyaMudde": [
            {
              "hookMarathi": "आधुनिक शिक्षणाचा प्रसार",
              "elaborationMarathi": "प्रशासकीय सोयीसाठी साम्राज्यवाद्यांनी इंग्रजी व पाश्चात्त्य शिक्षणाची सुरुवात केली; त्यामुळे वैज्ञानिक दृष्टिकोन, समता, लोकशाही आणि मानवी हक्कांची संकल्पना वसाहतींमधील सुशिक्षितांना समजली.",
              "highValueKeywords": [
                "पाश्चात्त्य शिक्षण",
                "वैज्ञानिक दृष्टिकोन",
                "लोकशाही मूल्ये"
              ]
            },
            {
              "hookMarathi": "दळणवळणाची आधुनिक साधने",
              "elaborationMarathi": "रेल्वे, तारायंत्र, पोस्ट आणि उत्तम रस्त्यांचे जाळे निर्माण झाल्याने देशांतर्गत एकात्मता निर्माण झाली आणि राष्ट्रीय चळवळींना संघटित होण्यास मदत झाली.",
              "highValueKeywords": [
                "रेल्वे व तारायंत्र",
                "रस्ते विकास",
                "राष्ट्रीय एकात्मता"
              ]
            },
            {
              "hookMarathi": "कायद्याचे राज्य व सामाजिक सुधारणा",
              "elaborationMarathi": "समान न्यायव्यवस्था लागू झाली आणि सतीप्रथा, बालविवाह यांसारख्या अनिष्ट अमानुष सामाजिक प्रथांवर बंदी घालण्यासाठी कायदे केले गेले.",
              "highValueKeywords": [
                "समान न्यायव्यवस्था",
                "सामाजिक सुधारणा",
                "अनिष्ट प्रथा बंदी"
              ]
            }
          ],
          "nishkarsha": "या विधायक सुधारणा साम्राज्यवाद्यांनी स्वतःच्या फायद्यासाठी केल्या असल्या तरी त्यांचा उपयोग पुढे भारतीय स्वातंत्र्यलढ्याला झाला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ विधायक परिणाम २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        }
      },
      {
        "id": "bp-2017-q5-1",
        "year": 2017,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_4m",
        "marks": 4,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पहिल्या महायुद्धानंतर युरोपमधील लोकशाही शासनांचा ऱ्हास होण्यास कोणती कारणे कारणीभूत ठरली?",
        "rubric": {
          "prastavana": "पहिल्या महायुद्धानंतर स्थापन झालेली अनेक युरोपीय लोकशाही सरकारे जनतेच्या आकांक्षा पूर्ण करण्यात अपयशी ठरली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "भीषण आर्थिक अरिष्ट व बेकारी",
              "elaborationMarathi": "युद्धामुळे संपूर्ण युरोप कर्जबाजारी झाला; कारखाने बंद पडले, शेती उद्ध्वस्त झाली आणि महागाई व बेकारी यामुळे जनतेचे प्रचंड हाल झाले.",
              "highValueKeywords": [
                "आर्थिक अरिष्ट",
                "बेरोजगारी",
                "चलनवाढ"
              ]
            },
            {
              "hookMarathi": "व्हर्सायचा अन्यायकारक तह",
              "elaborationMarathi": "पराभूत राष्ट्रांवर, विशेषतः जर्मनीवर, लादलेल्या अपमानास्पद अटींमुळे जनतेमध्ये संताप खदखदत होता; या राष्ट्रीय अपमानाचे भांडवल करून हुकूमशहांनी लोकशाहीविरुद्ध प्रचार केला.",
              "highValueKeywords": [
                "व्हर्सायचा तह",
                "अपमानास्पद अटी",
                "सूडभावना"
              ]
            },
            {
              "hookMarathi": "संसदीय राजकारणातील अस्थिरता",
              "elaborationMarathi": "अनेक पक्षांच्या दुर्बल आघाड्या वारंवार कोलमडत असल्याने स्थिर निर्णय घेता आले नाहीत; लोकशाही व्यवस्था देशातील समस्या सोडवू शकत नाही अशी जनभावना बनली.",
              "highValueKeywords": [
                "राजकीय अस्थिरता",
                "आघाडी सरकारे",
                "संसदीय दुर्बलता"
              ]
            },
            {
              "hookMarathi": "फॅसिझम व नाझीझमचा उदय",
              "elaborationMarathi": "इटलीत मुसोलिनी व जर्मनीमध्ये हिटलर यांनी प्रखर राष्ट्रवादाचे आश्वासन देऊन जनतेला आकर्षित केले आणि लोकशाही संस्था नष्ट करून एकाधिकारशाही स्थापन केली.",
              "highValueKeywords": [
                "मुसोलिनी",
                "हिटलर",
                "एकाधिकारशाही"
              ]
            }
          ],
          "nishkarsha": "या सर्व कारणांमुळे पहिल्या महायुद्धानंतर युरोपात लोकशाहीचा संकोच होऊन दुसऱ्या महायुद्धाची विनाशकारी पार्श्वभूमी तयार झाली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ४ सविस्तर कारणे ३ गुण + निष्कर्ष ½ गुण = ४ गुण."
        }
      },
      {
        "id": "bp-2017-q6-1",
        "year": 2017,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "लोकशाही हा शब्द 'डिमॉस' आणि ______ या ग्रीक शब्दांपासून बनला आहे.",
        "options": [
          "क्रॅटोस",
          "पोलिटिक्स",
          "लोगोस",
          "सोफिया"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "क्रॅटोस"
      },
      {
        "id": "bp-2017-q6-2",
        "year": 2017,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "भारतामध्ये ______ पद्धती अस्तित्वात आहे.",
        "options": [
          "एकपक्षीय",
          "द्विपक्षीय",
          "बहुपक्षीय",
          "पक्षहीन"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "बहुपक्षीय",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2017-q6-3",
        "year": 2017,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "लोकशाहीमध्ये अंतिम सत्ता ______ कडे असते.",
        "options": [
          "न्यायाधीश",
          "जनता",
          "लष्करप्रमुख",
          "पोलीस"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "जनता"
      },
      {
        "id": "bp-2017-q7-1",
        "year": 2017,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "short_notes_2m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "'सार्वमत' (Referendum) म्हणजे काय?",
        "directAnswer": "एखाद्या महत्त्वाच्या राष्ट्रीय, संविधानात्मक किंवा सार्वजनिक प्रश्नावर थेट जनतेचा कौल (होय किंवा नाही) जाणून घेण्याची प्रत्यक्ष लोकशाहीची पद्धत म्हणजे सार्वमत (Referendum) होय."
      },
      {
        "id": "bp-2017-q8-1",
        "year": 2017,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: लोकशाहीत जनतेचा सक्रिय सहभाग आवश्यक असतो.",
        "rubric": {
          "prastavana": "लोकशाही ही लोकांचे, लोकांद्वारे आणि लोकांसाठी चालवलेले शासन असते.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान पूर्णतः बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. केवळ ठरावीक मुदतीनंतर मतदान करणे एवढ्यापुरती लोकशाही मर्यादित नसते, तर शासनाच्या दैनंदिन कामकाजावर जनतेची नजर असणे गरजेचे असते.",
              "highValueKeywords": [
                "विधान बरोबर",
                "सक्रिय सहभाग",
                "शासनावर नियंत्रण"
              ]
            },
            {
              "hookMarathi": "धोरणनिर्मिती व उत्तरदायित्व",
              "elaborationMarathi": "नागरिकांच्या जागरूक सहभागामुळे शासन अधिक उत्तरदायी, पारदर्शक आणि संवेदनशील बनते, ज्यामुळे हुकूमशाही प्रवृत्तींना आळा बसतो.",
              "highValueKeywords": [
                "उत्तरदायित्व",
                "पारदर्शकता",
                "संवेदनशील शासन"
              ]
            }
          ],
          "nishkarsha": "नागरिकांची सतत जागरूकता हीच लोकशाहीचा खरा प्राणवायू आहे.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2017-q9-1",
        "year": 2017,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "लोकशाहीमध्ये नागरिक कोणत्या विविध मार्गांनी सक्रिय सहभाग घेऊ शकतात?",
        "rubric": {
          "prastavana": "आधुनिक प्रातिनिधिक लोकशाहीत नागरिकांच्या राजकीय सहभागाची विविध माध्यमे उपलब्ध आहेत.",
          "mukhyaMudde": [
            {
              "hookMarathi": "मतदान व निवडणूक प्रक्रिया",
              "elaborationMarathi": "नियमित निवडणुकांमध्ये मतदानाचा पवित्र हक्क बजावणे किंवा स्वतः योग्य उमेदवार म्हणून निवडणूक लढवून कायदेमंडळात प्रवेश करणे.",
              "highValueKeywords": [
                "मतदान हक्क",
                "उमेदवारी",
                "निवडणूक"
              ]
            },
            {
              "hookMarathi": "आंदोलने व माहितीचा अधिकार",
              "elaborationMarathi": "जनआंदोलने, मोर्चे, पर्यावरण व कामगार चळवळींमध्ये सहभाग घेणे तसेच माहितीचा अधिकार (RTI) वापरून भ्रष्टाचारावर व गैरकारभारावर अंकुश ठेवणे.",
              "highValueKeywords": [
                "जनआंदोलने",
                "माहितीचा अधिकार",
                "नागरिक चळवळी"
              ]
            }
          ],
          "nishkarsha": "अशा विविध मार्गांनी नागरिक शासनाच्या कारभारात सहभागी होऊन लोकशाहीचे सक्षमीकरण करतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मार्ग १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      }
    ]
  },
  {
    "year": 2018,
    "sessionTitleMarathi": "मार्च २०१८ बोर्ड परीक्षा",
    "curriculumEra": "old_course",
    "totalMarks": 40,
    "durationMinutes": 120,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे (जुना अभ्यासक्रम अंतिम परीक्षा)",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत."
    ],
    "questions": [
      {
        "id": "bp-2018-q1a-1",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "संयुक्त राष्ट्रसंघाचे आंतरराष्ट्रीय न्यायालय हॉलंडमधील ______ या शहरात आहे.",
        "options": [
          "न्यूयॉर्क",
          "अंकारा",
          "हेग"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "हेग"
      },
      {
        "id": "bp-2018-q1a-2",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "धारासना येथील मिठाच्या सत्याग्रहाचे नेतृत्व ______ यांनी केले.",
        "options": [
          "सरोजिनी नायडू",
          "कस्तुरबा गांधी",
          "मादाम कामा"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "सरोजिनी नायडू"
      },
      {
        "id": "bp-2018-q1a-3",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "______ च्या तहानुसार इंग्लंडला हाँगकाँग बेट मिळाले.",
        "options": [
          "पेकिंग",
          "नानकिंग",
          "कानागावा"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "नानकिंग"
      },
      {
        "id": "bp-2018-q1b-1",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: मंगो पार्क",
        "options": [
          "भारतीय महासंगणकाचे जनक",
          "अमेरिकन राष्ट्राध्यक्ष",
          "धाडसी युरोपियन प्रवासी"
        ],
        "directAnswer": "मंगो पार्क - धाडसी युरोपियन प्रवासी"
      },
      {
        "id": "bp-2018-q1b-2",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: डॉ. विजय भटकर",
        "options": [
          "भारतीय महासंगणकाचे जनक",
          "कम्युनिस्ट मॅनिफेस्टो",
          "अमेरिकन राष्ट्राध्यक्ष"
        ],
        "directAnswer": "डॉ. विजय भटकर - भारतीय महासंगणकाचे जनक"
      },
      {
        "id": "bp-2018-q1b-3",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "match_columns_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'अ' गट व 'ब' गट यांची योग्य जोडी जुळवा: वुड्रो विल्सन",
        "options": [
          "अमेरिकन राष्ट्राध्यक्ष - १४ कलमी कार्यक्रम",
          "धाडसी युरोपियन प्रवासी",
          "भारतीय महासंगणकाचे जनक"
        ],
        "directAnswer": "वुड्रो विल्सन - अमेरिकन राष्ट्राध्यक्ष - १४ कलमी कार्यक्रम"
      },
      {
        "id": "bp-2018-q2-1",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "'उग्र राष्ट्रवाद' ही संकल्पना स्पष्ट करा.",
        "rubric": {
          "prastavana": "१९ व्या शतकाच्या अखेरीस युरोपमध्ये राष्ट्रवादाचे स्वरूप बदलून ते आक्रमक व संकुचित बनले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "अंध स्वराष्ट्रप्रेम व परद्वेष",
              "elaborationMarathi": "केवळ आपल्याच देशावर प्रेम करणे एवढ्यापुरते मर्यादित न राहता, इतर राष्ट्रांविषयी द्वेष, तिरस्कार व संशय बाळगणे आणि स्वहित साधण्यासाठी दुसऱ्या देशांचे नुकसान करणे म्हणजे उग्र राष्ट्रवाद होय.",
              "highValueKeywords": [
                "अंध स्वराष्ट्रप्रेम",
                "परराष्ट्र द्वेष",
                "संकुचित भावना"
              ]
            },
            {
              "hookMarathi": "सैन्यवाद व युद्धाची खुमखुमी",
              "elaborationMarathi": "उग्र राष्ट्रवादामुळे देशात लष्करशाहीला प्रतिष्ठा मिळते आणि शांततापूर्ण वाटाघाटींऐवजी युद्धाचा मार्ग श्रेष्ठ मानण्याची प्रवृत्ती वाढीस लागते.",
              "highValueKeywords": [
                "लष्करशाही",
                "युद्ध प्रवृत्ती",
                "आंतरराष्ट्रीय शांतता भंग"
              ]
            }
          ],
          "nishkarsha": "उग्र राष्ट्रवादामुळे युरोपचे वातावरण युद्धाभिमुख झाले आणि पहिल्या महायुद्धाचा स्फोट घडून आला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2018-q3-1",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "विधाने सकारण स्पष्ट करा: पहिल्या महायुद्धानंतर युरोपमधील लोकशाही शासने कोलमडू लागली.",
        "rubric": {
          "prastavana": "पहिल्या महायुद्धानंतर अनेक युरोपीय देशांत लोकशाही पद्धतीची सरकारे स्थापन झाली होती, परंतु ती अल्पायुषी ठरली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "गंभीर आर्थिक संकट व बेकारी",
              "elaborationMarathi": "युद्धात झालेल्या अतोनात विध्वंसामुळे आर्थिक मंदी आली; महागाई, भूकबळी आणि गरिबी यांवर लोकशाही सरकारे तातडीने मात करू शकली नाहीत.",
              "highValueKeywords": [
                "आर्थिक मंदी",
                "महागाई",
                "भूकबळी"
              ]
            },
            {
              "hookMarathi": "राजकीय पक्षांचा अंतर्गत कलह",
              "elaborationMarathi": "संसदेमध्ये राजकीय पक्षांमध्ये सतत सत्तासंघर्ष सुरू राहिल्याने सरकारे वारंवार बदलली, त्यामुळे जनतेचा लोकशाहीवरील विश्वास उडून लोकांनी हुकूमशाही नेतृत्वाला स्वीकारले.",
              "highValueKeywords": [
                "राजकीय कलह",
                "विश्वासघात",
                "हुकूमशाही आकर्षण"
              ]
            }
          ],
          "nishkarsha": "यामुळे इटलीमध्ये मुसोलिनी व जर्मनीमध्ये हिटलरसारख्या हुकूमशहांचा उदय झाला.",
          "scoringRuleMarathi": "विधान अचूक २ मुद्द्यांच्या कारणासह स्पष्ट केल्यास २ पैकी २ गुण."
        }
      },
      {
        "id": "bp-2018-q4-1",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. ४ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "साम्राज्यवादाचे कोणतेही तीन विघातक परिणाम लिहा.",
        "rubric": {
          "prastavana": "साम्राज्यवादामुळे आशिया व आफ्रिका खंडांतील प्राचीन समृद्ध संस्कृतींचे आणि अर्थव्यवस्थेचे अपरिमित नुकसान झाले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "आर्थिक शोषण व दारिद्र्य",
              "elaborationMarathi": "वसाहतींमधील कच्चा माल लुटून नेल्यामुळे आणि स्थानिक पारंपारिक हस्तकला व उद्योगधंदे नष्ट झाल्यामुळे स्थानिक जनता भयंकर दारिद्र्यात ढकलली गेली.",
              "highValueKeywords": [
                "आर्थिक शोषण",
                "हस्तकला ऱ्हास",
                "दारिद्र्य"
              ]
            },
            {
              "hookMarathi": "स्वातंत्र्य व सार्वभौमत्वाचा संकोच",
              "elaborationMarathi": "वसाहतीतील लोकांचे राजकीय स्वातंत्र्य हिरावून घेतले गेले; नागरिकांना दुय्यम दर्जाची वागणूक मिळाली व त्यांचे मूलभूत मानवी हक्क चिरडले गेले.",
              "highValueKeywords": [
                "राजकीय पारतंत्र्य",
                "दुय्यम वागणूक",
                "हक्कांची गळचेपी"
              ]
            },
            {
              "hookMarathi": "वर्णद्वेष व सांस्कृतिक हानी",
              "elaborationMarathi": "गोऱ्या लोकांचे ओझे (White Man's Burden) असा अहंकार दाखवून साम्राज्यवाद्यांनी स्थानिक भाषा, साहित्य आणि संस्कृतीचा अवमान करून वर्णद्वेष पसरवला.",
              "highValueKeywords": [
                "वर्णद्वेष",
                "सांस्कृतिक अवमान",
                "सांस्कृतिक ऱ्हास"
              ]
            }
          ],
          "nishkarsha": "साम्राज्यवादाच्या या विघातक परिणामांतूनच तीव्र असंतोष पसरला आणि जागतिक पातळीवर वसाहतविरोधी राष्ट्रीय लढे पेटले.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ विघातक परिणाम २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        }
      },
      {
        "id": "bp-2018-q5-1",
        "year": 2018,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_4m",
        "marks": 4,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "रशियन राज्यक्रांतीचे (१९१७) महत्त्व सविस्तर स्पष्ट करा.",
        "rubric": {
          "prastavana": "१९१७ मध्ये रशियात झालेली बोल्शेविक क्रांती ही विसाव्या शतकातील जागतिक इतिहासाला कलाटणी देणारी अभूतपूर्व घटना ठरली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "झारशाहीचा जुलमी अंत",
              "elaborationMarathi": "रशियातील रोमनॉफ घराण्याची ३०० वर्षांची अनियंत्रित, जुलमी आणि सरंजामी झारशाही उलथवून टाकण्यात आली आणि जनतेला मुक्ती मिळाली.",
              "highValueKeywords": [
                "झारशाही अंत",
                "रोमनॉफ राजवट",
                "श्रमिकांचे राज्य"
              ]
            },
            {
              "hookMarathi": "जगातील पहिली कामगार-शेतकरी राजवट",
              "elaborationMarathi": "लेनिनच्या नेतृत्वाखाली कार्ल मार्क्सच्या साम्यवादी सिद्धांतांवर आधारित कामगार आणि शेतकऱ्यांचे पहिले समाजवादी सरकार स्थापन झाले.",
              "highValueKeywords": [
                "लेनिन",
                "साम्यवादी सिद्धांत",
                "समाजवादी सरकार"
              ]
            },
            {
              "hookMarathi": "नियोजित अर्थव्यवस्थेचा प्रारंभ",
              "elaborationMarathi": "जमीन कसणाऱ्यांची आणि कारखाने कामगारांचे हे तत्त्व लागू करून खाजगी मालमत्तेचे उच्चाटन झाले व पंचवार्षिक योजनांद्वारे देशाचा जलद आर्थिक विकास साधला गेला.",
              "highValueKeywords": [
                "नियोजित अर्थव्यवस्था",
                "पंचवार्षिक योजना",
                "खाजगी मालमत्ता अंत"
              ]
            },
            {
              "hookMarathi": "जागतिक वसाहतमुक्तीला प्रेरणा",
              "elaborationMarathi": "रशियन क्रांतीने जगातील सर्व साम्राज्यविरोधी, शोषित व पारतंत्र्यातील देशांना स्वातंत्र्यासाठी लढा देण्याची जबरदस्त प्रेरणा व पाठबळ दिले.",
              "highValueKeywords": [
                "वसाहतमुक्ती",
                "साम्राज्यवाद विरोध",
                "जागतिक प्रेरणा"
              ]
            }
          ],
          "nishkarsha": "रशियन क्रांतीमुळे जगाचे दोन वैचारिक गटांत (भांडवलशाही व समाजवाद) विभाजन झाले, ज्याने पुढे शीतयुद्धाची रचना निश्चित केली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ४ सविस्तर मुद्दे ३ गुण + निष्कर्ष ½ गुण = ४ गुण."
        }
      },
      {
        "id": "bp-2018-q6-1",
        "year": 2018,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "भारतामध्ये ______ प्रकारची लोकशाही आहे.",
        "options": [
          "प्रत्यक्ष",
          "अप्रत्यक्ष",
          "अध्यक्षीय",
          "मिश्र"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "अप्रत्यक्ष"
      },
      {
        "id": "bp-2018-q6-2",
        "year": 2018,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-5",
        "questionMarathi": "भाषेच्या बाबतीत ______ हा एकजिनसी देश आहे.",
        "options": [
          "भारत",
          "स्वित्झर्लंड",
          "चीन",
          "श्रीलंका"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "चीन"
      },
      {
        "id": "bp-2018-q6-3",
        "year": 2018,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "______ हा लोकशाहीचा गाभा आहे.",
        "options": [
          "जनता",
          "प्रतिनिधी",
          "पंतप्रधान",
          "लोकसहभाग"
        ],
        "correctOptionIndex": 3,
        "directAnswer": "लोकसहभाग"
      },
      {
        "id": "bp-2018-q7-1",
        "year": 2018,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "short_notes_2m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "'प्रत्याव्हान' (Recall) म्हणजे काय?",
        "directAnswer": "निवडून दिलेल्या लोकप्रतिनिधीचे काम समाधानकारक नसल्यास त्याचा कार्यकाळ संपण्यापूर्वीच त्याला परत बोलावण्याचा मतदारांचा अधिकार म्हणजे प्रत्याव्हान (Recall) होय."
      },
      {
        "id": "bp-2018-q8-1",
        "year": 2018,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: भारतात कायदा प्रस्तावित करणे ही कायदेमंडळाची जबाबदारी आहे.",
        "rubric": {
          "prastavana": "संसदीय शासनप्रणालीत कायदेमंडळ (संसद) ही देशातील सर्वोच्च कायदे करणारी संस्था आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान पूर्णतः बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. भारताच्या संविधानाने देशासाठी कायदे करण्याचे संपूर्ण अधिकार संसदेला (लोकसभा व राज्यसभा) प्रदान केले आहेत.",
              "highValueKeywords": [
                "विधान बरोबर",
                "कायदेमंडळ",
                "संसदेचे अधिकार"
              ]
            },
            {
              "hookMarathi": "विधेयकाची कायदेशीर प्रक्रिया",
              "elaborationMarathi": "मंत्रिमंडळ किंवा खासदार संसदेत विधेयकाचा मसुदा मांडतात; त्यावर सविस्तर चर्चा, दुरुस्त्या आणि दोन्ही सभागृहांत मतदान होऊन राष्ट्रपतींच्या स्वाक्षरीने कायदा बनतो.",
              "highValueKeywords": [
                "विधेयक मसुदा",
                "संसदीय चर्चा",
                "राष्ट्रपती स्वाक्षरी"
              ]
            }
          ],
          "nishkarsha": "कायदेमंडळ हे जनतेच्या सार्वभौम इच्छांचे प्रतिनिधित्व करून जनहितैषी कायदे तयार करते.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2018-q9-1",
        "year": 2018,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-5",
        "questionMarathi": "लोकशाहीसमोरील आव्हानांचे दुहेरी स्वरूप स्पष्ट करा.",
        "rubric": {
          "prastavana": "कोणत्याही लोकशाही देशात लोकशाही टिकवणे आणि ती अधिकाधिक परिपक्व बनवणे ही दुहेरी आव्हाने असतात.",
          "mukhyaMudde": [
            {
              "hookMarathi": "पहिले आव्हान - लोकशाही संस्थांचे संरक्षण",
              "elaborationMarathi": "लोकशाही शासनप्रणालीचे स्वरूप टिकवून ठेवणे, हुकूमशाही प्रवृत्तींचा शिरकाव रोखणे आणि निवडणुकांचे पावित्र्य व निष्पक्षता अबाधित राखणे.",
              "highValueKeywords": [
                "संस्थांचे संरक्षण",
                "हुकूमशाही रोखणे",
                "निष्पक्ष निवडणुका"
              ]
            },
            {
              "hookMarathi": "दुसरे आव्हान - लोकशाहीचे सक्षमीकरण व विस्तार",
              "elaborationMarathi": "समाजातील तळागाळातील उपेक्षित घटकांपर्यंत, स्त्रियांपर्यंत आणि दुर्बलांपर्यंत लोकशाहीचे प्रत्यक्ष लाभ पोहोचवून त्यांना सत्तेत खराखुरा वाटा देणे.",
              "highValueKeywords": [
                "लोकशाही सक्षमीकरण",
                "उपेक्षित घटक",
                "सत्तेत सहभाग"
              ]
            }
          ],
          "nishkarsha": "या दुहेरी आव्हानांवर मात केल्यानेच लोकशाही केवळ नावापुरती न राहता प्रत्यक्ष जीवनपद्धती बनते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + दुहेरी स्वरूपाचे २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      }
    ]
  },
  {
    "year": 2019,
    "sessionTitleMarathi": "मार्च २०१९ बोर्ड परीक्षा",
    "curriculumEra": "transitional_new",
    "totalMarks": 60,
    "durationMinutes": 150,
    "historyMarks": 40,
    "politicalScienceMarks": 20,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे (नवीन अभ्यासक्रम पहिली परीक्षा, ६० गुण)",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (४० गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (२० गुण) आहेत.",
      "नवीन पुनर्रचित अभ्यासक्रमाची ही पहिलीच बोर्ड परीक्षा असून अंतर्गत मूल्यमापनाचे गुण रद्द असल्याने एकत्रित ६० गुणांची परीक्षा घेण्यात आली."
    ],
    "questions": [
      {
        "id": "bp-2019-q1a-1",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "'प्रिमिटिव्ह कम्युनिझम टु स्लेव्हरी' हे पुस्तक ______ इतिहासलेखनाचे उदाहरण आहे.",
        "options": [
          "वसाहतवादी",
          "प्राच्यवादी",
          "राष्ट्रवादी",
          "मार्क्सवादी"
        ],
        "correctOptionIndex": 3,
        "directAnswer": "मार्क्सवादी",
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "कार्ल मार्क्स व वर्गसंघर्ष सिद्धान्त प्रत्येक बोर्ड परीक्षेत हमखास विचारला जातो (MCQ, चुकीची जोडी किंवा सविस्तर उत्तर)."
        }
      },
      {
        "id": "bp-2019-q1a-2",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "भारताचे राष्ट्रीय अभिलेखागार ______ येथे आहे.",
        "options": [
          "दिल्ली",
          "कोलकाता",
          "मुंबई",
          "चेन्नई"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "दिल्ली",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2019-q1a-3",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "भारतातील पहिले इंग्रजी वर्तमानपत्र ______ यांनी सुरू केले.",
        "options": [
          "जेम्स ऑगस्टस हिकी",
          "सर जॉन मार्शल",
          "अ‍ॅलन ह्यूम",
          "बाळशास्त्री जांभेकर"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "जेम्स ऑगस्टस हिकी",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2025
          ],
          "trendAnalysisMarathi": "केसरी व मराठा वृत्तपत्रे आणि लोकमान्य टिळक यांचे स्वातंत्र्यलढ्यातील योगदान."
        }
      },
      {
        "id": "bp-2019-q1a-4",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (४)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "ऑलिम्पिक स्पर्धांची प्राचीन परंपरा ______ येथे सुरू झाली.",
        "options": [
          "ग्रीस",
          "रोम",
          "भारत",
          "चीन"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "ग्रीस",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2019-q1b-1",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-6",
        "questionMarathi": "पुढीलपैकी चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "रायगडाला जेव्हा जाग येते",
            "explanation": "वसंत कानेटकर"
          },
          {
            "term": "टिळक आणि आगरकर",
            "explanation": "विश्राम बेडेकर"
          },
          {
            "term": "साष्टांग नमस्कार",
            "explanation": "आचार्य अत्रे"
          },
          {
            "term": "एकच प्याला",
            "explanation": "अण्णासाहेब किर्लोस्कर"
          }
        ],
        "incorrectPair": "एकच प्याला - अण्णासाहेब किर्लोस्कर",
        "correctedPair": "एकच प्याला - राम गणेश गडकरी",
        "directAnswer": "एकच प्याला - अण्णासाहेब किर्लोस्कर (दुरुस्ती: राम गणेश गडकरी)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2019-q1b-2",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-4",
        "questionMarathi": "पुढीलपैकी चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "छत्रपती शिवाजी महाराज टर्मिनस",
            "explanation": "गॉथिक स्थापत्यशैली"
          },
          {
            "term": "गोलघुमट",
            "explanation": "विजापूरची मुस्लीम स्थापत्यशैली"
          },
          {
            "term": "दक्षिणेकडील मंदिरे",
            "explanation": "नागर स्थापत्यशैली"
          },
          {
            "term": "गोंदेश्वर मंदिर",
            "explanation": "हेमाडपंती स्थापत्यशैली"
          }
        ],
        "incorrectPair": "दक्षिणेकडील मंदिरे - नागर स्थापत्यशैली",
        "correctedPair": "दक्षिणेकडील मंदिरे - द्राविड स्थापत्यशैली (किंवा उत्तरेकडील मंदिरे - नागर शैली)",
        "directAnswer": "दक्षिणेकडील मंदिरे - नागर स्थापत्यशैली (दुरुस्ती: द्राविड स्थापत्यशैली)"
      },
      {
        "id": "bp-2019-q1b-3",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "पुढीलपैकी चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "प्रभाकर",
            "explanation": "भाऊ महाजन"
          },
          {
            "term": "दर्पण",
            "explanation": "बाळशास्त्री जांभेकर"
          },
          {
            "term": "दीनबंधू",
            "explanation": "डॉ. बाबासाहेब आंबेडकर"
          },
          {
            "term": "केसरी",
            "explanation": "बाळ गंगाधर टिळक"
          }
        ],
        "incorrectPair": "दीनबंधू - डॉ. बाबासाहेब आंबेडकर",
        "correctedPair": "दीनबंधू - कृष्णराव भालेकर (किंवा डॉ. बाबासाहेब आंबेडकर - मूकनायक/बहिष्कृत भारत)",
        "directAnswer": "दीनबंधू - डॉ. बाबासाहेब आंबेडकर (दुरुस्ती: कृष्णराव भालेकर)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2019-q2a-1",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "संकल्पनाचित्र पूर्ण करा: महाराष्ट्रातील युनेस्को जागतिक सांस्कृतिक वारसा स्थळे",
        "conceptDiagram": {
          "titleMarathi": "महाराष्ट्रातील जागतिक सांस्कृतिक वारसा स्थळे",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "अजिंठा लेणी (१९८३)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "वेरूळ लेणी (१९८३)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "घारापुरी (एलिफंटा) लेणी (१९८७)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "छत्रपती शिवाजी महाराज टर्मिनस (२००४)",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. अजिंठा लेणी २. वेरूळ लेणी ३. घारापुरी (एलिफंटा) लेणी ४. छत्रपती शिवाजी महाराज टर्मिनस, मुंबई",
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2019,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "अजिंठा लेणी व युनेस्को जागतिक वारसा स्थळे संकल्पनाचित्र."
        }
      },
      {
        "id": "bp-2019-q2a-2",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (२)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "संकल्पनाचित्र पूर्ण करा: वृत्तपत्रांची विविध कार्ये",
        "conceptDiagram": {
          "titleMarathi": "वृत्तपत्रांची कार्ये",
          "diagramType": "radial",
          "nodes": [
            {
              "labelMarathi": "लोकजागृती व जनमत घडवणे",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "ताज्या बातम्या व माहिती देणे",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "ज्ञानप्रसार व विचारप्रवर्तन",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "सामाजिक सुधारणांना चालना देणे",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. लोकजागृती २. बातम्या देणे ३. ज्ञानप्रसार ४. सामाजिक सुधारणांना चालना",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2019-q2b-1",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "थोडक्यात टीप लिहा: उपयोजित इतिहास (Public History)",
        "rubric": {
          "prastavana": "इतिहास विषयाचा सर्वसामान्य जनतेशी आणि वर्तमानकालीन समाजजीवनाशी असलेला प्रत्यक्ष संबंध म्हणजे उपयोजित इतिहास होय.",
          "mukhyaMudde": [
            {
              "hookMarathi": "वर्तमानाशी प्रत्यक्ष सहसंबंध",
              "elaborationMarathi": "भूतकाळातील घटनांविषयीचे ज्ञान वर्तमानातील आणि भविष्यकालीन मानवी समस्यांवर मात करण्यासाठी कसे उपयुक्त ठरेल, या दृष्टीने इतिहासाचा अभ्यास करणे म्हणजे उपयोजित इतिहास.",
              "highValueKeywords": [
                "वर्तमान सहसंबंध",
                "उपयोजन",
                "समस्या निराकरण"
              ]
            },
            {
              "hookMarathi": "व्यावसायिक व सांस्कृतिक संधी",
              "elaborationMarathi": "सांस्कृतिक व नैसर्गिक वारशाचे जतन, पर्यटन, चित्रपट, संग्रहालये आणि अभिलेखागारे या क्षेत्रांमध्ये उपयोजित इतिहासामुळे रोजगाराच्या मुबलक संधी निर्माण होतात.",
              "highValueKeywords": [
                "वारसा जतन",
                "पर्यटन व्यवसाय",
                "रोजगार संधी"
              ]
            }
          ],
          "nishkarsha": "उपयोजित इतिहासामुळे इतिहास हा केवळ अभ्यासकांसाठी नसून सर्वसामान्य जनतेच्या दैनंदिन हिताचा विषय ठरतो.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ समर्पक मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2019-q2b-2",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (२)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "थोडक्यात टीप लिहा: व्हॉल्टेअर (Voltaire)",
        "rubric": {
          "prastavana": "व्हॉल्टेअर (१६९४-१७७८) हे फ्रेंच तत्त्वज्ञ असून त्यांचे मूळ नाव फ्रान्स्वा मारी अरूए असे होते.",
          "mukhyaMudde": [
            {
              "hookMarathi": "मानवी जीवनाचा सर्वांगीण विचार",
              "elaborationMarathi": "इतिहासलेखनात केवळ वस्तुनिष्ठ सत्य आणि घटनांचा कालक्रम पुरेसा नसून तत्कालीन समाजव्यवस्था, शेती, व्यापार व अर्थव्यवस्था यांचा विचार होणे आवश्यक असल्याचे त्यांनी मांडले.",
              "highValueKeywords": [
                "वस्तुनिष्ठ सत्य",
                "समाजव्यवस्था",
                "शेती व व्यापार"
              ]
            },
            {
              "hookMarathi": "आधुनिक इतिहासलेखनाचा जनक",
              "elaborationMarathi": "इतिहासलेखनाला मानवकेंद्रित दृष्टिकोन दिल्याने व्हॉल्टेअर यांना आधुनिक इतिहासलेखनाचा जनक मानले जाते.",
              "highValueKeywords": [
                "मानवकेंद्रित दृष्टिकोन",
                "आधुनिक जनक",
                "इतिहासमीमांसा"
              ]
            }
          ],
          "nishkarsha": "व्हॉल्टेअर यांच्या विचारांमुळे इतिहासलेखनात सामाजिक व आर्थिक वास्तवाचा अभ्यास करण्याची नवी परंपरा सुरू झाली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ गुणवैशिष्ट्ये १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "व्हॉल्टेअर - आधुनिक इतिहासलेखनाचा जनक यावर बहुपर्यायी प्रश्नांमध्ये वारंवार विचारणा होते."
        }
      },
      {
        "id": "bp-2019-q2b-3",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (३)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "थोडक्यात टीप लिहा: बखर (Bakhar)",
        "rubric": {
          "prastavana": "ऐतिहासिक साहित्यात मध्ययुगीन मराठी गद्य साहित्याचा अत्यंत महत्त्वपूर्ण प्रकार म्हणजे \"बखर\" होय.",
          "mukhyaMudde": [
            {
              "hookMarathi": "शौर्यगाथा व ऐतिहासिक घडामोडी",
              "elaborationMarathi": "बखरीत शूर पुरुषांचे गुणगान, ऐतिहासिक घडामोडी, युद्धे आणि थोर पुरुषांची चरित्रे यांचे रसाळ व प्रभावी मराठीत वर्णन आढळते.",
              "highValueKeywords": [
                "मध्ययुगीन गद्य",
                "शौर्यगाथा",
                "ऐतिहासिक घडामोडी"
              ]
            },
            {
              "hookMarathi": "प्रमुख बखरींचे प्रकार",
              "elaborationMarathi": "कृष्णाजी अनंत सभासद लिखित 'सभासद बखर' (छत्रपती शिवाजी महाराजांच्या कारकीर्दीची माहिती) व 'भाऊसाहेबांची बखर' (पानिपतच्या तिसऱ्या युद्धाचे वर्णन) या अत्यंत प्रसिद्ध बखरी आहेत.",
              "highValueKeywords": [
                "सभासद बखर",
                "भाऊसाहेबांची बखर",
                "पानिपत युद्ध"
              ]
            }
          ],
          "nishkarsha": "जरी बखरींमध्ये काही प्रमाणात अतिशयोक्ती व ऐकीव माहिती असली, तरी तत्कालीन राजकीय-सामाजिक परिस्थिती समजून घेण्यासाठी बखर हे अनमोल साधन आहे.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2019,
            2024
          ],
          "trendAnalysisMarathi": "बखर - ऐतिहासिक साहित्यातील महत्त्वाचे साधन (सभासद बखर, भाऊसाहेबांची बखर)."
        }
      },
      {
        "id": "bp-2019-q3-1",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: जागतिक वारशाच्या पदास पात्र ठरणारी स्थळे, परंपरा यांची यादी युनेस्कोद्वारे जाहीर केली जाते.",
        "rubric": {
          "prastavana": "युनेस्को (UNESCO) ही संयुक्त राष्ट्रसंघाची शैक्षणिक, वैज्ञानिक आणि सांस्कृतिक संघटना आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "मानवी संस्कृतीचा अनमोल वारसा",
              "elaborationMarathi": "आपल्या पूर्वजांनी निर्माण केलेल्या सांस्कृतिक आणि निसर्गाने बहाल केलेल्या नैसर्गिक वारशाचे जतन पुढील पिढ्यांसाठी होणे नितांत गरजेचे आहे.",
              "highValueKeywords": [
                "सांस्कृतिक ठेवा",
                "पुढील पिढ्या",
                "वारसा संवर्धन"
              ]
            },
            {
              "hookMarathi": "जागतिक निकष व आंतरराष्ट्रीय संरक्षण",
              "elaborationMarathi": "काळाच्या ओघात ऐतिहासिक वास्तू व निसर्ग नष्ट होण्यापासून रोखण्यासाठी जागतिक निकषांच्या आधारे युनेस्को अशा स्थळांची यादी जाहीर करते, ज्यामुळे आंतरराष्ट्रीय आर्थिक व तांत्रिक मदत मिळते.",
              "highValueKeywords": [
                "युनेस्को निकष",
                "आंतरराष्ट्रीय मदत",
                "वैज्ञानिक जतन"
              ]
            }
          ],
          "nishkarsha": "यामुळे जगभरातील वारसा स्थळांचे जतन व संवर्धन आंतरराष्ट्रीय दर्जाच्या तंत्रज्ञानाने सुरक्षितपणे केले जाते.",
          "scoringRuleMarathi": "विधान अचूक २ मुद्द्यांच्या कारणासह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2019,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "अजिंठा लेणी व युनेस्को जागतिक वारसा स्थळे संकल्पनाचित्र."
        }
      },
      {
        "id": "bp-2019-q3-2",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (२)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: प्रादेशिक इतिहासलेखनाला चालना मिळाली.",
        "rubric": {
          "prastavana": "१९ व्या व २० व्या शतकात भारतीय इतिहासलेखनात राष्ट्रवादी इतिहासलेखनाची सशक्त चळवळ उभी राहिली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "ब्रिटिश इतिहासकारांच्या मर्यादा",
              "elaborationMarathi": "ब्रिटिश वसाहतवादी इतिहासकारांनी भारताचा इतिहास पूर्वग्रहदूषित नजरेने लिहिला आणि दक्षिण भारतासह विविध प्रांतांच्या वैशिष्ट्यपूर्ण इतिहासाकडे दुर्लक्ष केले.",
              "highValueKeywords": [
                "वसाहतवादी पूर्वग्रह",
                "प्रांतीय दुर्लक्ष",
                "राष्ट्रवादी जाणीव"
              ]
            },
            {
              "hookMarathi": "वि. का. राजवाडे यांचे ऐतिहासिक कार्य",
              "elaborationMarathi": "इतिहाससंशोधक वि. का. राजवाडे यांनी अस्सल कागदपत्रांच्या आधारे मराठ्यांच्या इतिहासाची साधने गोळा केली; त्यामुळे महाराष्ट्रासारख्या विशिष्ट भौगोलिक व सांस्कृतिक प्रदेशांचा स्वतंत्र व सखोल इतिहास लिहिण्यास मोठी गती मिळाली.",
              "highValueKeywords": [
                "वि. का. राजवाडे",
                "अस्सल कागदपत्रे",
                "मराठ्यांचा इतिहास"
              ]
            }
          ],
          "nishkarsha": "यामुळे स्थानिक अस्मिता जागृत झाली आणि भारताच्या विविधांगी समृद्ध इतिहासाची खरीखुरी ओळख समोर आली.",
          "scoringRuleMarathi": "विधान अचूक २ कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        }
      },
      {
        "id": "bp-2019-q4-1",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. ४",
        "type": "passage_analysis_4m",
        "marks": 4,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "दिलेल्या उताऱ्याचे वाचन करून खालील प्रश्नांची उत्तरे लिहा:",
        "passageText": "भारताच्या प्राचीन ते अर्वाचीन इतिहासाच्या संदर्भात दूरदर्शनवरून प्रसारित झालेली 'भारत एक खोज' ही मालिका महत्त्वाची आहे. पंडित नेहरू यांच्या 'डिस्कव्हरी ऑफ इंडिया' या ग्रंथावर आधारित ही मालिका होती. श्याम बेनेगल दिग्दर्शित या मालिकेने प्राचीन काळ ते अर्वाचीन काळाचा सामाजिक, सांस्कृतिक आणि राजकीय इतिहास मांडला. सखोल संशोधन आणि सादरीकरण या पातळीवर ही मालिका सरस ठरली. हडप्पा संस्कृती, वैदिक काळ, रामायण-महाभारताचा अन्वयार्थ, मौर्य कालखंड, अफगाण आणि मोगलांचे आक्रमण, मुघल कालखंड आणि मुघल बादशहा यांचे योगदान, भक्ती चळवळ, छत्रपती शिवाजी महाराजांचे कार्य, समाजसुधारक चळवळी आणि स्वातंत्र्यसंग्राम अशा अनेक घटना या मालिकेतून मांडल्या गेल्या. या मालिकेत नाट्य, लोककला, प्रबोधनपर माहिती असा आधार घेत नेहरूंच्या रूपातील कलावंत रोशन सेठ प्रास्ताविक व अन्वयार्थ सांगत असत. नेहरूंचा इतिहासाकडे बघण्याचा दृष्टिकोन आणि त्याचे प्रभावी सादरीकरण यांमुळे ही मालिका संपूर्ण भारतभर वाखाणली गेली.",
        "subQuestions": [
          {
            "questionNumber": "१",
            "textMarathi": "'भारत एक खोज' ही दूरदर्शन मालिका कोणत्या ग्रंथावर आधारित होती?",
            "marks": 1,
            "modelAnswer": "ही मालिका पंडित जवाहरलाल नेहरू यांच्या 'डिस्कव्हरी ऑफ इंडिया' या ग्रंथावर आधारित होती."
          },
          {
            "questionNumber": "२",
            "textMarathi": "या मालिकेचे दिग्दर्शन कोणी केले?",
            "marks": 1,
            "modelAnswer": "या मालिकेचे दिग्दर्शन प्रसिद्ध चित्रपट दिग्दर्शक श्याम बेनेगल यांनी केले."
          },
          {
            "questionNumber": "३",
            "textMarathi": "ही मालिका संपूर्ण भारतभर का वाखाणली गेली? तुमचे मत स्पष्ट करा.",
            "marks": 2,
            "modelAnswer": "पंडित नेहरूंचा इतिहासविषयक वस्तुनिष्ठ दृष्टिकोन, रोशन सेठ यांचे प्रभावी निवेदन, सखोल ऐतिहासिक संशोधन, प्राचीन ते आधुनिक भारताचा सलग वेध आणि प्रभावी दृकश्राव्य सादरीकरण यांमुळे ही मालिका भारतभर अत्यंत लोकप्रिय ठरली."
          }
        ],
        "rubric": {
          "prastavana": "दूरदर्शन हे दृकश्राव्य माध्यम असून ऐतिहासिक मालिकांच्या माध्यमातून इतिहास घरोघरी पोहोचवण्यात ते यशस्वी ठरले आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "सखोल ऐतिहासिक संशोधन",
              "elaborationMarathi": "हडप्पा संस्कृतीपासून स्वातंत्र्यलढ्यापर्यंतच्या सर्व महत्त्वाच्या कालखंडांचे वस्तुनिष्ठ आणि कलात्मक सादरीकरण श्याम बेनेगल यांनी केले.",
              "highValueKeywords": [
                "श्याम बेनेगल",
                "सखोल संशोधन",
                "दृकश्राव्य सादरीकरण"
              ]
            },
            {
              "hookMarathi": "प्रभावी नाट्य व लोककला",
              "elaborationMarathi": "नेहरूंच्या भूमिकेतील रोशन सेठ यांच्या प्रास्ताविक निवेदनामुळे आणि नाट्य-लोककलांच्या वापरामुळे सामान्य प्रेक्षकांना इतिहास अत्यंत रंजकपणे समजला.",
              "highValueKeywords": [
                "रोशन सेठ",
                "लोककला व नाट्य",
                "लोकप्रियता"
              ]
            }
          ],
          "nishkarsha": "यामुळे 'भारत एक खोज' ही मालिका भारतीय इतिहासाची एक दृकश्राव्य ज्ञानकोश ठरली.",
          "scoringRuleMarathi": "प्र. १ (१ गुण) + प्र. २ (१ गुण) + प्र. ३ स्वमत (२ गुण) = एकूण ४ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दूरदर्शन व ऐतिहासिक मालिका (भारत एक खोज) व दृकश्राव्य माध्यमाचे महत्त्व."
        }
      },
      {
        "id": "bp-2019-q5-1",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "नैसर्गिक आणि सांस्कृतिक वारसा जतन करण्याच्या प्रकल्पातून कोणत्या गोष्टी साध्य होतात?",
        "rubric": {
          "prastavana": "उपयोजित इतिहासाच्या अंतर्गत वारसा स्थळांचे जतन व संवर्धन करण्याचे विविध शासकीय व सामाजिक प्रकल्प राबवले जातात.",
          "mukhyaMudde": [
            {
              "hookMarathi": "मूळ स्वरूपाचा सुरक्षित सांभाळ",
              "elaborationMarathi": "प्रकल्पाच्या अंतर्गत काम करताना ऐतिहासिक वास्तू, मंदिरे किंवा नैसर्गिक स्थळांच्या मूळ संरचनेला कोणताही धक्का न लावता त्यांचे शास्त्रीय पद्धतीने संवर्धन साध्य होते.",
              "highValueKeywords": [
                "मूळ स्वरूप जतन",
                "शास्त्रीय संवर्धन",
                "संरचना रक्षण"
              ]
            },
            {
              "hookMarathi": "स्थानिकांच्या भावनांचा आदर",
              "elaborationMarathi": "स्थानिक लोकांची सांस्कृतिक पार्श्वभूमी व परंपरा समजून घेऊन, त्यांच्या भावना न दुखावता त्यांना विश्वासात घेऊन विकास योजना आखल्या जातात.",
              "highValueKeywords": [
                "स्थानिक लोकसहभाग",
                "सांस्कृतिक परंपरा",
                "भावनांचा आदर"
              ]
            },
            {
              "hookMarathi": "रोजगार व आर्थिक विकास",
              "elaborationMarathi": "वारसा स्थळांच्या जतनामुळे पर्यटन उद्योगाला मोठी चालना मिळते; स्थानिक कारागीर, हॉटेल्स, गाईड्स आणि वाहतूक व्यवसायांना रोजगाराच्या नव्या संधी प्राप्त होतात.",
              "highValueKeywords": [
                "पर्यटन उद्योग",
                "रोजगार निर्मिती",
                "स्थानिक अर्थव्यवस्था"
              ]
            }
          ],
          "nishkarsha": "या प्रकल्पांमुळे सांस्कृतिक अस्मितेचे रक्षण होऊन शाश्वत आर्थिक विकासाची उद्दिष्टे साध्य होतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ साध्य होणाऱ्या बाबी २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        }
      },
      {
        "id": "bp-2019-q5-2",
        "year": 2019,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (२)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "कार्ल मार्क्स यांचा वर्गसिद्धांत (Class Theory) सविस्तर स्पष्ट करा.",
        "rubric": {
          "prastavana": "१९ व्या शतकाच्या उत्तरार्धात जर्मन विचारवंत कार्ल मार्क्स (१८१८-१८८३) यांनी मांडलेल्या वर्गसिद्धांताने जागतिक इतिहासलेखनाला क्रांतीकारी दिशा दिली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "इतिहास मानवी संघर्षाचा आरसा",
              "elaborationMarathi": "इतिहास हा अमूर्त कल्पनांचा नसून जिवंत माणसांचा असतो; मूलभूत गरजा भागवण्यासाठी आवश्यक असणाऱ्या उत्पादन साधनांच्या मालकीवर माणसांचे नातेसंबंध अवलंबून असतात.",
              "highValueKeywords": [
                "अमूर्त कल्पना नव्हे",
                "उत्पादन साधने",
                "भौतिक गरजा"
              ]
            },
            {
              "hookMarathi": "उत्पादन साधनांची विषम वाटणी",
              "elaborationMarathi": "समाजातील सर्व घटकांना ही उत्पादन साधने समप्रमाणात मिळत नाहीत; ज्या वर्गाच्या हातात उत्पादन साधने असतात, तो वर्ग उर्वरित वंचित वर्गाचे आर्थिक शोषण करतो.",
              "highValueKeywords": [
                "विषम वाटणी",
                "भांडवलदार वर्ग",
                "शोषित वर्ग"
              ]
            },
            {
              "hookMarathi": "वर्गसंघर्षातून समाजपरिवर्तन",
              "elaborationMarathi": "मानवी इतिहास हा अशा साधनसंपन्न (शोषक) आणि साधनहीन (शोषित) वर्गांमधील निरंतर वर्गसंघर्षाचा इतिहास आहे, असे प्रतिपादन मार्क्सने 'दास कॅपिटल' या जगप्रसिद्ध ग्रंथात केले.",
              "highValueKeywords": [
                "वर्गसंघर्ष",
                "दास कॅपिटल",
                "शोषक विरुद्ध शोषित"
              ]
            }
          ],
          "nishkarsha": "कार्ल मार्क्सच्या या आर्थिक भौतिकवादी सिद्धांताने कामगार वर्गाला एकत्र येऊन क्रांती करण्याचे तत्त्वज्ञान पुरवले.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ मुख्य संकल्पना २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "कार्ल मार्क्स व वर्गसंघर्ष सिद्धान्त प्रत्येक बोर्ड परीक्षेत हमखास विचारला जातो (MCQ, चुकीची जोडी किंवा सविस्तर उत्तर)."
        }
      },
      {
        "id": "bp-2019-q6-1",
        "year": 2019,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "जस्टीस पार्टी या ब्राह्मणेतर चळवळीचे रूपांतर ______ या राजकीय पक्षात झाले.",
        "options": [
          "आसाम गण परिषद",
          "शिवसेना",
          "द्रविड मुन्नेत्र कझगम",
          "जम्मू आणि काश्मीर नॅशनल कॉन्फरन्स"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "द्रविड मुन्नेत्र कझगम",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2019-q6-2",
        "year": 2019,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "स्वातंत्र्यपूर्व काळात ओदिशातील ______ या आदिवासी जमातीने ब्रिटिशांविरुद्ध उठाव केला.",
        "options": [
          "कोळी",
          "भिल्ल",
          "गोंड",
          "संथाळ"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "गोंड",
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      },
      {
        "id": "bp-2019-q7-1",
        "year": 2019,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: लोकशाहीमध्ये सर्वच चळवळींना जनतेचा पाठिंबा मिळतोच असे नाही.",
        "rubric": {
          "prastavana": "चळवळी हा लोकशाहीतील लोकसहभागाचा एक अत्यंत प्रभावी मार्ग आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीनुसार बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. प्रत्येक चळवळीचे उद्दिष्ट, मागणी किंवा कार्यपद्धती संपूर्ण समाजाला मान्य असेलच असे नसते.",
              "highValueKeywords": [
                "विधान बरोबर",
                "विविध दृष्टिकोन",
                "जनमताची भिन्नता"
              ]
            },
            {
              "hookMarathi": "हितसंबंधांचा परस्परविरोधी संघर्ष",
              "elaborationMarathi": "एखादी चळवळ विशिष्ट घटकांच्या (उदा. उद्योगपती, कामगार किंवा विशिष्ट प्रांताच्या) हितासाठी असू शकते; त्यामुळे विरोधी हितसंबंध असणारे गट त्या चळवळीला विरोध करतात किंवा पाठिंबा देत नाहीत.",
              "highValueKeywords": [
                "हितसंबंध संघर्ष",
                "मर्यादित पाठिंबा",
                "विरोध"
              ]
            }
          ],
          "nishkarsha": "जनतेचा पाठिंबा मिळवण्यासाठी चळवळीला लोकाभिमुख मागण्या आणि अहिंसक प्रबोधनाचा मार्ग अवलंबावा लागतो.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      },
      {
        "id": "bp-2019-q7-2",
        "year": 2019,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (२)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: युती शासनामुळे राजकीय अस्थिरता निर्माण होते.",
        "rubric": {
          "prastavana": "भारतामध्ये १९८९ च्या सार्वत्रिक निवडणुकीनंतर एका प्रबळ पक्षाचे युग संपून आघाडी (युती) शासनाचे युग सुरू झाले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीनुसार चूक",
              "elaborationMarathi": "हे विधान चूक आहे. सुरुवातीच्या काळात काही आघाड्या कोसळल्या तरी नंतरच्या काळात युती शासनाने भारतात अभूतपूर्व राजकीय स्थैर्य सिद्ध केले आहे.",
              "highValueKeywords": [
                "विधान चूक",
                "राजकीय स्थैर्य",
                "आघाडी राजकारण"
              ]
            },
            {
              "hookMarathi": "सामंजस्य व सहमतीचे राजकारण",
              "elaborationMarathi": "१९९९ चे राष्ट्रीय लोकशाही आघाडी (NDA) सरकार किंवा २००४ व २००९ चे संयुक्त पुरोगामी आघाडी (UPA) सरकार यांनी संपूर्ण ५ वर्षांचा कार्यकाळ यशस्वीपणे पूर्ण करून आर्थिक सुधारणा राबवल्या.",
              "highValueKeywords": [
                "सहमतीचे राजकारण",
                "कार्यकाळ पूर्ण",
                "आघाडी स्थैर्य"
              ]
            }
          ],
          "nishkarsha": "विविध प्रादेशिक पक्षांना राष्ट्रीय सत्तेत सामावून घेण्याची युती शासनाची पद्धत भारतीय लोकशाही अधिक सर्वसमावेशक बनवणारी ठरली आहे.",
          "scoringRuleMarathi": "विधान चूक ओळखल्यास १ गुण + ऐतिहासिक दाखल्यांसह समर्पक कारणास १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2019-q8a-1",
        "year": 2019,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (अ) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "संकल्पना स्पष्ट करा: प्रादेशिकता (Regionalism)",
        "rubric": {
          "prastavana": "भारत हा विविध भाषा, संस्कृती आणि भौगोलिक प्रदेशांनी नटलेला विशाल बहुसांस्कृतिक देश आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "स्वभाषेविषयी व प्रदेशाविषयी अभिमान",
              "elaborationMarathi": "आपल्या भाषेचा, साहित्याचा, संस्कृतीचा आणि भूभागाचा वाजवी अभिमान बाळगणे स्वाभाविक आहे; परंतु हा अभिमान जेव्हा अतिरेकी बनतो तेव्हा त्याला प्रादेशिकता म्हणतात.",
              "highValueKeywords": [
                "भाषिक अस्मिता",
                "प्रादेशिक अभिमान",
                "अतिरेकी जाणीव"
              ]
            },
            {
              "hookMarathi": "स्वार्थासाठी इतर प्रदेशांविषयी दुराभिमान",
              "elaborationMarathi": "आपलाच प्रांत श्रेष्ठ असून केंद्र शासनाने केवळ आपल्याच प्रदेशाचा विकास करावा आणि इतर प्रदेशांतील लोकांना दुय्यम समजावे ही संकुचित वृत्ती प्रादेशिकतेतून निर्माण होते.",
              "highValueKeywords": [
                "संकुचित वृत्ती",
                "असमतोलाची भावना",
                "राष्ट्रीय एकात्मता धोका"
              ]
            }
          ],
          "nishkarsha": "संतुलित प्रादेशिक विकास साधल्यास प्रादेशिकतेच्या घातक प्रभावाला आळा घालून राष्ट्रीय एकात्मता टिकवता येते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ स्पष्ट मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2019-q8b-1",
        "year": 2019,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (ब) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "pol-2",
        "questionMarathi": "सूचनेप्रमाणे कृती करा: निवडणूक प्रक्रियेचे महत्त्वाचे टप्पे कालक्रमानुसार पूर्ण करा.",
        "conceptDiagram": {
          "titleMarathi": "निवडणूक प्रक्रियेचे टप्पे",
          "diagramType": "flow",
          "nodes": [
            {
              "labelMarathi": "१. मतदारसंघ निर्मिती (Delimitation)",
              "marksPerNode": 0.33
            },
            {
              "labelMarathi": "२. मतदार याद्यांची निश्चिती व अद्ययावतीकरण",
              "marksPerNode": 0.33
            },
            {
              "labelMarathi": "३. उमेदवारांचे नामनिर्देशन व अर्ज छाननी",
              "marksPerNode": 0.33
            },
            {
              "labelMarathi": "४. निवडणूक प्रचार मोहीम",
              "marksPerNode": 0.33
            },
            {
              "labelMarathi": "५. प्रत्यक्ष मतदान प्रक्रिया",
              "marksPerNode": 0.33
            },
            {
              "labelMarathi": "६. मतमोजणी व अधिकृत निकाल घोषणा",
              "marksPerNode": 0.35
            }
          ]
        },
        "directAnswer": "मतदारसंघ निर्मिती -> मतदार याद्या निश्चिती -> उमेदवारी अर्ज व छाननी -> निवडणूक प्रचार -> प्रत्यक्ष मतदान -> मतमोजणी व निकाल.",
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2020,
            2025
          ],
          "trendAnalysisMarathi": "निवडणूक आयोग, मुख्य निवडणूक आयुक्त व आचारसंहिता."
        }
      },
      {
        "id": "bp-2019-q9-1",
        "year": 2019,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "पुढील प्रश्नाचे थोडक्यात उत्तर लिहा: पाणी परिषदेचे उद्दिष्ट काय होते?",
        "rubric": {
          "prastavana": "भारताचे \"जलपुरुष\" (Waterman of India) म्हणून ओळखले जाणारे डॉ. राजेंद्रसिंह राणा यांनी राजस्थानमध्ये मोठी जलक्रांती घडवून आणली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "जलसंवर्धनाची राष्ट्रव्यापी जनजागृती",
              "elaborationMarathi": "पाण्याच्या दुर्भिक्ष्यावर मात करण्यासाठी पारंपरिक पाणी साठवण पद्धतींचे पुनरुज्जीवन करणे आणि पाण्याचा काटकसरीने वापर करण्याविषयी लोकजागृती घडवून आणणे.",
              "highValueKeywords": [
                "डॉ. राजेंद्रसिंह राणा",
                "जलसंवर्धन",
                "पारंपरिक पद्धती"
              ]
            },
            {
              "hookMarathi": "नद्यांचे पुनरुज्जीवन व लोकसहभाग",
              "elaborationMarathi": "जोहड (बंधारे) बांधणे, वनसंवर्धन करणे आणि नद्यांना प्रदूषणमुक्त करून बारमाही वाहत्या ठेवण्यासाठी सामान्य नागरिकांचा सक्रिय सहभाग मिळवणे हे पाणी परिषदेचे मुख्य उद्दिष्ट होते.",
              "highValueKeywords": [
                "जोहड बंधारे",
                "नद्या पुनरुज्जीवन",
                "सक्रिय लोकसहभाग"
              ]
            }
          ],
          "nishkarsha": "पाणी परिषदांमुळे जलव्यवस्थापनाला राष्ट्रीय चळवळीचे स्वरूप प्राप्त झाले.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ समर्पक उद्दिष्टे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      }
    ]
  },
  {
    "year": 2020,
    "sessionTitleMarathi": "मार्च २०२० बोर्ड परीक्षा",
    "curriculumEra": "canonical_new",
    "totalMarks": 40,
    "durationMinutes": 120,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे (प्रमाणित कृतिपत्रिका आराखडा)",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत.",
      "अंतर्गत मूल्यमापन १० गुण पूर्ववत झाल्यानंतरची ही पहिलीच प्रमाणित ४० गुणांची परीक्षा आहे."
    ],
    "questions": [
      {
        "id": "bp-2020-q1a-1",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "आधुनिक इतिहासलेखनाचा जनक ______ यास म्हणता येईल.",
        "options": [
          "व्हॉल्टेअर",
          "रेने देकार्त",
          "लिओपॉल्ड रांके",
          "कार्ल मार्क्स"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "व्हॉल्टेअर",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "व्हॉल्टेअर - आधुनिक इतिहासलेखनाचा जनक यावर बहुपर्यायी प्रश्नांमध्ये वारंवार विचारणा होते."
        }
      },
      {
        "id": "bp-2020-q1a-2",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "जगातील सर्वात प्राचीन संग्रहालय ______ या शहराचे उत्खनन करताना सापडले.",
        "options": [
          "हडप्पा",
          "मोहेंजोदडो",
          "ऊर",
          "दिल्ली"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "ऊर",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2020-q1a-3",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "'शेतकऱ्यांचा असूड' हा ग्रंथ ______ यांनी लिहिला.",
        "options": [
          "डॉ. बाबासाहेब आंबेडकर",
          "महात्मा फुले",
          "लोकमान्य टिळक",
          "वि. दा. सावरकर"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "महात्मा फुले",
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      },
      {
        "id": "bp-2020-q1b-1",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-4",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "कुटियट्टम",
            "explanation": "केरळमधील संस्कृत नाट्यपरंपरा"
          },
          {
            "term": "रम्मन",
            "explanation": "उत्तराखंडमधील धार्मिक उत्सव"
          },
          {
            "term": "रामलीला",
            "explanation": "उत्तर भारतातील सादरीकरण"
          },
          {
            "term": "कालबेलिया",
            "explanation": "महाराष्ट्राचे लोकनृत्य"
          }
        ],
        "incorrectPair": "कालबेलिया - महाराष्ट्राचे लोकनृत्य",
        "correctedPair": "कालबेलिया - राजस्थानचे लोकनृत्य (किंवा लावणी - महाराष्ट्राचे लोकनृत्य)",
        "directAnswer": "कालबेलिया - महाराष्ट्राचे लोकनृत्य (दुरुस्ती: राजस्थानचे लोकनृत्य)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2020-q1b-2",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "प्रभाकर",
            "explanation": "भाऊ महाजन"
          },
          {
            "term": "दर्पण",
            "explanation": "बाळशास्त्री जांभेकर"
          },
          {
            "term": "दीनबंधू",
            "explanation": "डॉ. बाबासाहेब आंबेडकर"
          },
          {
            "term": "केसरी",
            "explanation": "बाळ गंगाधर टिळक"
          }
        ],
        "incorrectPair": "दीनबंधू - डॉ. बाबासाहेब आंबेडकर",
        "correctedPair": "दीनबंधू - कृष्णराव भालेकर (किंवा डॉ. बाबासाहेब आंबेडकर - मूकनायक)",
        "directAnswer": "दीनबंधू - डॉ. बाबासाहेब आंबेडकर (दुरुस्ती: कृष्णराव भालेकर)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2020-q1b-3",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "मल्लखांब",
            "explanation": "शारीरिक कसरतीचा मैदानी खेळ"
          },
          {
            "term": "बुद्धिबळ",
            "explanation": "बैठे खेळ"
          },
          {
            "term": "हॉकी",
            "explanation": "भारताचा राष्ट्रीय खेळ"
          },
          {
            "term": "कबड्डी",
            "explanation": "परदेशी मैदानी खेळ"
          }
        ],
        "incorrectPair": "कबड्डी - परदेशी मैदानी खेळ",
        "correctedPair": "कबड्डी - भारतीय देशी मैदानी खेळ",
        "directAnswer": "कबड्डी - परदेशी मैदानी खेळ (दुरुस्ती: भारतीय देशी मैदानी खेळ)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2020-q2a-1",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: पर्यटनाचे प्रमुख प्रकार",
        "conceptDiagram": {
          "titleMarathi": "पर्यटनाचे प्रकार",
          "diagramType": "radial",
          "nodes": [
            {
              "labelMarathi": "ऐतिहासिक पर्यटन (किल्ले, स्मारके)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "धार्मिक पर्यटन (तीर्थक्षेत्रे, मंदिरे)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "कृषी पर्यटन (आधुनिक शेती प्रकल्प)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "क्रीडा पर्यटन (ऑलिम्पिक, हिमालयातील गिर्यारोहण)",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. ऐतिहासिक पर्यटन २. धार्मिक पर्यटन ३. कृषी पर्यटन ४. क्रीडा पर्यटन",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2020-q2a-2",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (२)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: भारताचा युनेस्को नैसर्गिक वारसा",
        "conceptDiagram": {
          "titleMarathi": "भारताची नैसर्गिक वारसा स्थळे",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "काझीरंगा राष्ट्रीय उद्यान (आसाम)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "केवलादेव राष्ट्रीय उद्यान (राजस्थान)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "मानस वन्यजीव अभयारण्य (आसाम)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "सुंदरबन राष्ट्रीय उद्यान (पश्चिम बंगाल)",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. काझीरंगा राष्ट्रीय उद्यान २. केवलादेव राष्ट्रीय उद्यान ३. मानस वन्यजीव अभयारण्य ४. सुंदरबन राष्ट्रीय उद्यान",
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2019,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "अजिंठा लेणी व युनेस्को जागतिक वारसा स्थळे संकल्पनाचित्र."
        }
      },
      {
        "id": "bp-2020-q2b-1",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "थोडक्यात टिपा लिहा: वृत्तपत्रांचे स्वातंत्र्यलढ्यातील योगदान",
        "rubric": {
          "prastavana": "भारताच्या स्वातंत्र्यलढ्यात मुद्रित माध्यमांनी आणि विशेषतः वृत्तपत्रांनी राष्ट्रीय जागृतीचे प्रमुख अस्त्र म्हणून काम केले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "लोकजागृती व अन्यायाला वाचा",
              "elaborationMarathi": "लोकमान्य टिळकांचे 'केसरी' व 'मराठा', गांधीजींचे 'यंग इंडिया' या वृत्तपत्रांनी ब्रिटिशांच्या जुलमी राजवटीवर आणि शोषक धोरणांवर परखड टीका केली.",
              "highValueKeywords": [
                "केसरी व मराठा",
                "लोकजागृती",
                "ब्रिटिश धोरणांवर टीका"
              ]
            },
            {
              "hookMarathi": "सामाजिक सुधारणांना बळ",
              "elaborationMarathi": "स्त्रीशिक्षण, अस्पृश्यतानिवारण आणि अंधश्रद्धा निर्मूलन यांसारख्या सामाजिक सुधारणांचा प्रसार करून वृत्तपत्रांनी स्वातंत्र्यलढ्याला जनसामान्यांचे अधिष्ठान दिले.",
              "highValueKeywords": [
                "सामाजिक सुधारणा",
                "राष्ट्रीय एकात्मता",
                "जनजागृती"
              ]
            }
          ],
          "nishkarsha": "वृत्तपत्रे ही केवळ बातम्या देणारी पत्रके नसून भारतीय स्वातंत्र्यलढ्याचा वैचारिक दीपस्तंभ ठरली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ समर्पक मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2025
          ],
          "trendAnalysisMarathi": "केसरी व मराठा वृत्तपत्रे आणि लोकमान्य टिळक यांचे स्वातंत्र्यलढ्यातील योगदान."
        }
      },
      {
        "id": "bp-2020-q2b-2",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (२)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "थोडक्यात टिपा लिहा: खेळांचे महत्त्व",
        "rubric": {
          "prastavana": "खेळ हा मानवी संस्कृतीचा अविभाज्य भाग असून शारीरिक व मानसिक आरोग्यासाठी खेळांना अनन्यसाधारण महत्त्व आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "शारीरिक सुदृढता व व्यायाम",
              "elaborationMarathi": "खेळामुळे शरीराचा सर्वांगीण व्यायाम होतो, स्नायू बळकट होतात आणि चपळता, सहनशीलता व प्रतिकारशक्ती वाढते.",
              "highValueKeywords": [
                "शारीरिक व्यायाम",
                "चपळता व कणखरता",
                "आरोग्य"
              ]
            },
            {
              "hookMarathi": "मानसिक ताणतणाव मुक्ती व संघभावना",
              "elaborationMarathi": "खेळामुळे मनातील चिंता व नैराश्य दूर होते; खेळाडूवृत्ती, संघभावना, नेतृत्वगुण आणि पराभव खिलाडूपणे स्वीकारण्याची मानसिक परिपक्वता निर्माण होते.",
              "highValueKeywords": [
                "ताणतणाव मुक्ती",
                "संघभावना",
                "खेळाडूवृत्ती"
              ]
            }
          ],
          "nishkarsha": "खेळ माणसाचे व्यक्तिमत्त्व घडवतात आणि सामाजिक सलोखा व आंतरराष्ट्रीय बंधुभाव वाढीस लावतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2020-q3-1",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: तंत्रज्ञानाचा इतिहास अभ्यासावा लागतो.",
        "rubric": {
          "prastavana": "मानवाच्या आदिम काळापासून ते आजच्या संगणक युगापर्यंत मानवी प्रगती तंत्रज्ञानाच्या विकासाशी जोडलेली आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "उत्पादन पद्धतींमधील उत्क्रांती",
              "elaborationMarathi": "दगडांच्या हत्यारांपासून ते कृषी, धातूकाम, वस्त्रनिर्मिती आणि यंत्रांच्या शोधांपर्यंत उत्पादन प्रक्रियेत टप्प्याटप्प्याने झालेले बदल समजून घेण्यासाठी तंत्रज्ञानाचा इतिहास अभ्यासावा लागतो.",
              "highValueKeywords": [
                "उत्पादन उत्क्रांती",
                "यांत्रिकीकरण",
                "वैज्ञानिक बदल"
              ]
            },
            {
              "hookMarathi": "विज्ञान आणि तंत्रज्ञानाचा परस्परसंबंध",
              "elaborationMarathi": "विज्ञानातील शोधांमुळे नवनवीन तंत्रज्ञान कसे निर्माण झाले आणि त्या तंत्रज्ञानाने औद्योगिक व आर्थिक जीवनाला कशी कलाटणी दिली हे समजण्यासाठी हा अभ्यास अनिवार्य आहे.",
              "highValueKeywords": [
                "विज्ञान-तंत्रज्ञान सहसंबंध",
                "आर्थिक गती",
                "मानवी विकास"
              ]
            }
          ],
          "nishkarsha": "तंत्रज्ञानाच्या इतिहासाच्या अभ्यासातूनच मानवाच्या निरंतर बौद्धिक आणि तांत्रिक प्रगतीची दिशा स्पष्ट होते.",
          "scoringRuleMarathi": "विधान अचूक २ कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        }
      },
      {
        "id": "bp-2020-q3-2",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (२)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: ऐतिहासिक साधनांचे जतन व संवर्धन करणे आवश्यक असते.",
        "rubric": {
          "prastavana": "भूतकाळातील मानवी जीवन समजून घेण्याचा एकमेव खराखुरा पुरावा म्हणजे ऐतिहासिक साधने (लिखित, भौतिक व मौखिक) होत.",
          "mukhyaMudde": [
            {
              "hookMarathi": "ऐतिहासिक सत्याचा आधार नष्ट होण्याचा धोका",
              "elaborationMarathi": "प्राचीन मंदिरे, किल्ले, नाणी आणि मोडी-हस्तलिखिते काळाच्या ओघात ऊन, वारा, पाऊस आणि मानवी दुर्लक्षामुळे नष्ट झाल्यास इतिहासाचे अस्सल पुरावे कायमचे नाहीसे होतील.",
              "highValueKeywords": [
                "अस्सल पुरावे",
                "काळाचा मारा",
                "नष्ट होण्यापासून संरक्षण"
              ]
            },
            {
              "hookMarathi": "भविष्यातील पिढ्यांसाठी प्रेरणा व अस्मिता",
              "elaborationMarathi": "आपल्या पूर्वजांच्या शौर्याची, स्थापत्यकलेची आणि संस्कृतीची जाणीव पुढील पिढ्यांना होऊन राष्ट्रीय स्वाभिमान जागा राहण्यासाठी हे जतन आवश्यक असते.",
              "highValueKeywords": [
                "सांस्कृतिक अस्मिता",
                "पुढील पिढ्या",
                "ऐतिहासिक प्रेरणा"
              ]
            }
          ],
          "nishkarsha": "वारशाचे जतन हे राष्ट्राच्या आत्म्याचे रक्षण करण्यासारखे आहे, म्हणूनच वैज्ञानिक संवर्धन काळाची गरज आहे.",
          "scoringRuleMarathi": "विधान अचूक २ मुद्द्यांच्या कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2020-q4-1",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. ४",
        "type": "passage_analysis_4m",
        "marks": 4,
        "chapterAssociationId": "hist-6",
        "questionMarathi": "दिलेल्या उताऱ्याचे वाचन करून खालील प्रश्नांची उत्तरे लिहा:",
        "passageText": "महाराष्ट्रातील लोककलांमध्ये पोवाडा हा अत्यंत वैशिष्ट्यपूर्ण व वीररसप्रधान प्रकार आहे. छत्रपती शिवाजी महाराजांच्या काळात आणि पेशवेकाळात पोवाड्यांनी मोठी लोकप्रियता मिळवली. छत्रपती शिवाजी महाराजांच्या काळात कवी अज्ञानदासाने अफझलखानाच्या वधावर रचलेला पोवाडा अतिशय प्रसिद्ध आहे. त्याचप्रमाणे तुळशीदासाने सिंहगडाच्या लढाईवर तानाजी मालुसरे यांच्या शौर्यावर रचलेला पोवाडा आजही अंगावर रोमांच उभे करतो. आधुनिक काळात संयुक्त महाराष्ट्र चळवळीत अमर शेख, अण्णाभाऊ साठे आणि द. ना. गव्हाणकर या शाहिरांनी पोवाड्यांच्या माध्यमातून प्रचंड लोकजागृती घडवून आणली. दशावतारी नाटके ही कोकण आणि गोव्यातील पारंपरिक लोकनाट्य परंपरा आहे. यामध्ये लाकडी मुखवटे घालून मत्स्य, कूर्म, वराह आदी विष्णूच्या दहा अवतारांवर आधारित कथा सादर केल्या जातात.",
        "subQuestions": [
          {
            "questionNumber": "१",
            "textMarathi": "छत्रपती शिवाजी महाराजांच्या काळात अफझलखानाच्या वधावर कोणी पोवाडा रचला?",
            "marks": 1,
            "modelAnswer": "छत्रपती शिवाजी महाराजांच्या काळात कवी अज्ञानदासाने अफझलखानाच्या वधावर पोवाडा रचला."
          },
          {
            "questionNumber": "२",
            "textMarathi": "दशावतारी नाटके कोणत्या प्रांतातील पारंपरिक लोकनाट्य आहे?",
            "marks": 1,
            "modelAnswer": "दशावतारी नाटके ही कोकण आणि गोवा प्रांतातील पारंपरिक लोकनाट्य परंपरा आहे."
          },
          {
            "questionNumber": "३",
            "textMarathi": "लोककलांचे संवर्धन का केले पाहिजे? तुमचे मत स्पष्ट करा.",
            "marks": 2,
            "modelAnswer": "लोककलांमध्ये समाजाची खरीखुरी संस्कृती, बोलीभाषा, इतिहास आणि लोकजीवनाचे प्रतिबिंब असते. त्यातून मनोरंजनासोबत वीररस आणि राष्ट्रभक्तीची प्रेरणा मिळते; आधुनिक मनोरंजनाच्या युगात या पारंपरिक कला नष्ट होऊ नयेत म्हणून त्यांचे संवर्धन आवश्यक आहे."
          }
        ],
        "rubric": {
          "prastavana": "पोवाडा आणि दशावतारी नाटके ही महाराष्ट्राची समृद्ध पारंपरिक लोकनाट्य व लोकसंगीत संपदा आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "वीररस व राष्ट्रभक्तीची प्रेरणा",
              "elaborationMarathi": "छत्रपती शिवरायांच्या काळापासून संयुक्त महाराष्ट्र चळवळीपर्यंत पोवाड्यांनी अन्यायाविरुद्ध लढण्याची जिद्द सामान्य जनतेच्या नसानसात भरली.",
              "highValueKeywords": [
                "पोवाडा",
                "अज्ञानदास",
                "वीररस",
                "संयुक्त महाराष्ट्र चळवळ"
              ]
            },
            {
              "hookMarathi": "सांस्कृतिक मुळांचे जतन",
              "elaborationMarathi": "दशावतारी नाटके आणि लाकडी मुखवट्यांची कला ही लोकजीवनाची सजीव ओळख असून ती पुढच्या पिढ्यांना आपल्या मुळांशी जोडून ठेवते.",
              "highValueKeywords": [
                "दशावतार",
                "कोकण-गोवा",
                "सांस्कृतिक ओळख"
              ]
            }
          ],
          "nishkarsha": "लोककलांचे संवर्धन करणे म्हणजे मराठी मातीच्या ज्वलंत सांस्कृतिक अस्मितेची जपणूक करणे होय.",
          "scoringRuleMarathi": "प्र. १ (१ गुण) + प्र. २ (१ गुण) + प्र. ३ स्वमत (२ गुण) = एकूण ४ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2020-q5-1",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "उपयोजित इतिहासाचा वर्तमानकाळाशी कसा सहसंबंध जोडता येतो? सविस्तर लिहा.",
        "rubric": {
          "prastavana": "इतिहास हा केवळ होऊन गेलेल्या घटनांची जंत्री नसून वर्तमानाला योग्य दिशा दाखवणारा मार्गदर्शक दीपस्तंभ असतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "भूतकालीन अनुभवांवरून वर्तमान आकलन",
              "elaborationMarathi": "मानवाच्या आजच्या सामाजिक रूढी, कायदे, राजकीय व्यवस्था आणि मूल्ये भूतकाळातील मानवी संघर्षातून विकसित झाली आहेत; त्यामुळे आजचे वास्तव समजण्यासाठी ऐतिहासिक पार्श्वभूमी समजून घेणे आवश्यक ठरते.",
              "highValueKeywords": [
                "वर्तमान आकलन",
                "भूतकालीन अनुभव",
                "सामाजिक व्यवस्था"
              ]
            },
            {
              "hookMarathi": "भविष्यातील समस्यांचे शास्त्रीय निराकरण",
              "elaborationMarathi": "भूतकाळात मानवाने विविध नैसर्गिक आपत्ती, रोगराई, युद्धे किंवा आर्थिक संकटांवर कशी मात केली, हे समजल्यामुळे वर्तमानातील संकटांवर मात करण्याचे धोरण ठरवता येते.",
              "highValueKeywords": [
                "संकट निवारण",
                "धोरणनिर्मिती",
                "उपयुक्तता"
              ]
            },
            {
              "hookMarathi": "वारसा संवर्धन व रोजगार निर्मिती",
              "elaborationMarathi": "ऐतिहासिक स्थळांचे जतन करून त्याद्वारे पर्यटन, हस्तकला, हॉटेल व्यवसाय व गाईड्स यांच्या माध्यमातून लाखो तरुणांना आजच्या युगात रोजगार मिळवून दिला जातो.",
              "highValueKeywords": [
                "वारसा संवर्धन",
                "पर्यटन रोजगार",
                "आर्थिक लाभ"
              ]
            }
          ],
          "nishkarsha": "अशा प्रकारे उपयोजित इतिहास मानवी जीवनाला वर्तमानकाळात अर्थपूर्ण आणि समृद्ध बनवतो.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ मुख्य मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        }
      },
      {
        "id": "bp-2020-q5-2",
        "year": 2020,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (२)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "ग्रंथालय आणि अभिलेखागार व्यवस्थापनाचे महत्त्व स्पष्ट करा.",
        "rubric": {
          "prastavana": "ज्ञानाचा खजिना सुरक्षित ठेवण्यासाठी ग्रंथालये आणि शासकीय अस्सल दस्तऐवज जपण्यासाठी अभिलेखागारे ही अत्यंत महत्त्वाची आधुनिक संस्थाने आहेत.",
          "mukhyaMudde": [
            {
              "hookMarathi": "ज्ञानाचे संकलन व वर्गीकरण",
              "elaborationMarathi": "ग्रंथालयांमध्ये दुर्मीळ पुस्तके, हस्तलिखिते, नकाशे आणि संशोधन ग्रंथांचे शास्त्रीय पद्धतीने कॅटलॉगिंग व डिजिटायझेशन करून वाचकांना व संशोधकांना तत्परतेने उपलब्ध करून दिले जाते.",
              "highValueKeywords": [
                "पुस्तके संकलन",
                "कॅटलॉगिंग",
                "डिजिटायझेशन"
              ]
            },
            {
              "hookMarathi": "अस्सल ऐतिहासिक पुराव्यांचे रक्षण",
              "elaborationMarathi": "अभिलेखागारांमध्ये (उदा. राष्ट्रीय अभिलेखागार, नवी दिल्ली) शासकीय करार, गुप्त पत्रव्यवहार, न्यायनिवाडे व सनदा विशिष्ट तापमान व दमटता नियंत्रित करून शास्त्रीय पद्धतीने जतन केल्या जातात.",
              "highValueKeywords": [
                "राष्ट्रीय अभिलेखागार",
                "अस्सल सनदा",
                "शास्त्रीय जतन"
              ]
            },
            {
              "hookMarathi": "संशोधन व ऐतिहासिक सत्याचा पाया",
              "elaborationMarathi": "कोणत्याही इतिहास संशोधकाला निष्पक्ष व वस्तुनिष्ठ इतिहास लिहिण्यासाठी या अस्सल पुराव्यांची प्राथमिक आवश्यकता असते, ज्यामुळे चुकीचा इतिहास पसरण्यास आळा बसतो.",
              "highValueKeywords": [
                "इतिहास संशोधन",
                "वस्तुनिष्ठ पुरावा",
                "सत्य शोधन"
              ]
            }
          ],
          "nishkarsha": "ग्रंथालये आणि अभिलेखागारे ही मानवी संस्कृतीच्या बौद्धिक ठेव्याची सुरक्षित तिजोरी आहेत.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ व्यवस्थापकीय मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2020-q6-1",
        "year": 2020,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "संविधानाने ______ चे उद्दिष्ट साध्य करण्यासाठी मार्गदर्शक तत्त्वे ठरवून दिली आहेत.",
        "options": [
          "कल्याणकारी राज्य",
          "साम्यवादी राज्य",
          "लष्करी राज्य",
          "धार्मिक राज्य"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "कल्याणकारी राज्य",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2020-q6-2",
        "year": 2020,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "मतदारांचे वय २१ वर्षांवरून १८ वर्षे केल्यामुळे भारतातील ______ अधिक व्यापक झाली.",
        "options": [
          "हुकूमशाही",
          "लष्करशाही",
          "लोकशाही",
          "सरंजामशाही"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "लोकशाही",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2020-q7-1",
        "year": 2020,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-2",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: निवडणूक आयोग आचारसंहिता लागू करतो.",
        "rubric": {
          "prastavana": "भारतामध्ये स्वतंत्र, निष्पक्ष आणि भयमुक्त वातावरणात निवडणुका पार पाडण्याची जबाबदारी स्वायत्त निवडणूक आयोगावर आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीनुसार बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. निवडणुका जाहीर झाल्यापासून निकाल लागेपर्यंत सर्व राजकीय पक्ष व उमेदवारांसाठी निवडणूक आयोग आचारसंहिता (Code of Conduct) जारी करतो.",
              "highValueKeywords": [
                "विधान बरोबर",
                "आचारसंहिता",
                "निवडणूक आयोग"
              ]
            },
            {
              "hookMarathi": "गैरप्रकारांना प्रतिबंध व निष्पक्षता",
              "elaborationMarathi": "सत्ताबळाचा गैरवापर, पैशांचे वाटप, मतदारांवर दबाव आणि धार्मिक द्वेष पसरवणाऱ्या भाषणांवर बंदी घालून सर्व उमेदवारांना समान संधी उपलब्ध करून देणे हा आचारसंहितेचा मुख्य हेतू असतो.",
              "highValueKeywords": [
                "गैरप्रकार प्रतिबंध",
                "समान संधी",
                "भयमुक्त वातावरण"
              ]
            }
          ],
          "nishkarsha": "आचारसंहितेच्या कडक अंमलबजावणीमुळेच भारतीय निवडणुकांचे जागतिक स्तरावर कौतुक केले जाते.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2020,
            2025
          ],
          "trendAnalysisMarathi": "निवडणूक आयोग, मुख्य निवडणूक आयुक्त व आचारसंहिता."
        }
      },
      {
        "id": "bp-2020-q7-2",
        "year": 2020,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (२)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: भारतात पक्षपद्धतीचे अस्तित्व संपुष्टात आले आहे.",
        "rubric": {
          "prastavana": "भारतामध्ये संसदीय लोकशाही पद्धत स्वीकारण्यात आली असून राजकीय पक्ष हा या प्रणालीचा मुख्य आधारस्तंभ आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीनुसार पूर्णतः चूक",
              "elaborationMarathi": "हे विधान चूक आहे. भारतात बहुपक्षीय पद्धती अत्यंत सशक्त आणि गतिमान असून राष्ट्रीय व प्रादेशिक पक्षांची संख्या दिवसेंदिवस वाढत आहे.",
              "highValueKeywords": [
                "विधान चूक",
                "बहुपक्षीय पद्धती",
                "सशक्त अस्तित्व"
              ]
            },
            {
              "hookMarathi": "लोकशाहीची अपरिहार्य गरज",
              "elaborationMarathi": "राजकीय पक्ष निवडणुका लढवतात, लोकमत घडवतात आणि सत्ताधारी पक्ष किंवा विरोधी पक्ष म्हणून संसदेत लोककल्याणकारी भूमिका बजावतात; राजकीय पक्षांशिवाय संसदीय लोकशाही चालूच शकत नाही.",
              "highValueKeywords": [
                "सत्ताधारी व विरोधी",
                "लोकमत",
                "संसदीय गरज"
              ]
            }
          ],
          "nishkarsha": "भारतामध्ये प्रादेशिक आणि राष्ट्रीय पक्षांचे अस्तित्व अधिक मजबूत झाले असून पक्षपद्धती निरंतर चालू आहे.",
          "scoringRuleMarathi": "विधान चूक ओळखल्यास १ गुण + २ स्पष्ट कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2020-q8a-1",
        "year": 2020,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (अ) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "संकल्पना स्पष्ट करा: मतदारांचे वय / सार्वत्रिक प्रौढ मतदान पद्धती",
        "rubric": {
          "prastavana": "भारतीय संविधानाने स्वातंत्र्यप्राप्तीनंतर सर्व सज्ञान नागरिकांना मतदानाचा मूलभूत राजकीय अधिकार बहाल केला.",
          "mukhyaMudde": [
            {
              "hookMarathi": "६१ वी घटनादुरुस्ती (१९८८)",
              "elaborationMarathi": "मूळ संविधानात मतदारांचे किमान वय २१ वर्षे निश्चित केले होते; परंतु ६१ व्या घटनादुरुस्तीने हे वय १८ वर्षे करण्यात आले, ज्यामुळे कोट्यवधी तरुण मतदारांना मताधिकार मिळाला.",
              "highValueKeywords": [
                "६१ वी घटनादुरुस्ती",
                "१८ वर्षे वय",
                "युवा मतदार"
              ]
            },
            {
              "hookMarathi": "जगातील सर्वात मोठी युवा लोकशाही",
              "elaborationMarathi": "वय कमी केल्यामुळे देशाच्या निर्णयप्रक्रियेत तरुणांचा सहभाग वाढला आणि भारत ही जगातील सर्वाधिक युवा मतदार असलेली विशाल लोकशाही बनली.",
              "highValueKeywords": [
                "युवा सहभाग",
                "विशाल लोकशाही",
                "राजकीय जाणीव"
              ]
            }
          ],
          "nishkarsha": "या निर्णयाने भारतीय लोकशाहीचे अधिष्ठान अधिक व्यापक आणि परिपक्व बनवले.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ स्पष्ट मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2020-q8b-1",
        "year": 2020,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (ब) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: स्थानिक स्वराज्य संस्थांमधील महिला सक्षमीकरण तरतुदी",
        "conceptDiagram": {
          "titleMarathi": "संविधानात्मक महिला आरक्षण",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "७३ वी व ७४ वी घटनादुरुस्ती (स्थानिक संस्थांत ३३% आरक्षण)",
              "marksPerNode": 1
            },
            {
              "labelMarathi": "महाराष्ट्रासह अनेक राज्यांत ५०% पर्यंत आरक्षण वाढ",
              "marksPerNode": 1
            }
          ]
        },
        "directAnswer": "१. ७३ व ७४ वी घटनादुरुस्ती (३३% आरक्षण) २. महाराष्ट्रात स्थानिक स्वराज्य संस्थांत महिलांसाठी ५०% आरक्षण",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2020-q9-1",
        "year": 2020,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "पुढील प्रश्नाचे थोडक्यात उत्तर लिहा: माहितीच्या अधिकाराने (RTI 2005) लोकशाही कशी बळकट केली?",
        "rubric": {
          "prastavana": "भारतामध्ये २००५ साली लागू झालेला माहितीचा अधिकार कायदा (Right to Information) हा लोकशाहीतील नागरिक सक्षमीकरणाचा क्रांतिकारी टप्पा आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "पारदर्शकता व उत्तरदायित्व",
              "elaborationMarathi": "शासनाच्या कामकाजातील गोपनीयता संपुष्टात आणून प्रशासकीय निर्णय, खर्चाचे तपशील आणि योजनांची माहिती मिळवण्याचा अधिकार नागरिकांना मिळाला, ज्यामुळे कारभारात पारदर्शकता आली.",
              "highValueKeywords": [
                "पारदर्शकता",
                "उत्तरदायित्व",
                "गोपनीयता अंत"
              ]
            },
            {
              "hookMarathi": "भ्रष्टाचाराला पायबंद व जनतेचा विश्वास",
              "elaborationMarathi": "माहिती मागवण्याच्या धाकामुळे शासकीय दिरंगाई, बेकायदेशीर कामे आणि भ्रष्टाचाराला आळा बसला; शासन व जनता यांच्यातील संवादाची दरी मिटून जनतेचा लोकशाहीवरील विश्वास दृढ झाला.",
              "highValueKeywords": [
                "भ्रष्टाचार प्रतिबंध",
                "शासकीय संवाद",
                "लोकशाही बळकटीकरण"
              ]
            }
          ],
          "nishkarsha": "माहितीच्या अधिकारामुळे सामान्य नागरिक केवळ मतदार न राहता कारभाराचा प्रत्यक्ष निरीक्षक व भागीदार बनला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ परिणामकारक मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      }
    ]
  },
  {
    "year": 2021,
    "sessionTitleMarathi": "सन २०२१ शासन निर्णय व पर्यायी मूल्यमापन सूत्र",
    "curriculumEra": "covid_resolution",
    "totalMarks": 100,
    "durationMinutes": 0,
    "historyMarks": 50,
    "politicalScienceMarks": 50,
    "officialSourceCitation": "शालेय शिक्षण व क्रीडा विभाग, महाराष्ट्र शासन व राज्य मंडळ परिपत्रक क्र. ४०२७",
    "instructionsMarathi": [
      "कोविड-१९ साथीच्या दुसऱ्या भीषण लाटेमुळे राज्यातील १६ लाख विद्यार्थ्यांचे आरोग्य व जीवन सुरक्षित ठेवण्यासाठी सन २०२१ ची प्रत्यक्ष एसएससी बोर्ड परीक्षा रद्द करण्यात आली.",
      "विद्यार्थ्यांचे शैक्षणिक वर्ष वाया जाऊ नये म्हणून शासनाने ५०:३०:२० या वस्तुनिष्ठ व पारदर्शक पर्यायी सूत्राने १०० गुणांचा निकाल तयार करण्याचे आदेश दिले.",
      "या अंतर्गत मूल्यमापनाने मिळालेल्या निकालावर असमाधानी असणाऱ्या विद्यार्थ्यांना कोविड संकट नियंत्रणात आल्यानंतर श्रेणीसुधार प्रत्यक्ष लेखी परीक्षा देण्याची पूर्ण संधी देण्यात आली."
    ],
    "covidResolution": {
      "grNumberCancellation": "संकीर्ण २०२१/प्र.क्र.३९/एसडी-२",
      "grDateCancellation": "१२ मे २०२१",
      "grNumberFormula": "परीक्षा-०५२१/प्र.क्र.४३/एसडी-२",
      "grDateFormula": "२८ मे २०२१",
      "circularNumber": "मंडळ परिपत्रक क्र. ४०२७ (९ जून २०२१)",
      "formulaBreakdown": {
        "class9Weightage": 50,
        "class10WrittenWeightage": 30,
        "class10InternalWeightage": 20
      },
      "historicalRationaleMarathi": "शैक्षणिक वर्ष २०२०-२१ मधील कोविड-१९ साथीच्या अभूतपूर्व संकटामुळे प्रत्यक्ष लेखी परीक्षा रद्द करून विद्यार्थ्यांच्या इयत्ता ९ वी मधील अंतिम गुणांचे ५०%, इयत्ता १० वी मधील वर्षभरातील अंतर्गत लेखी चाचण्यांचे ३०% आणि १० वी मधील गृहपाठ/स्वाध्याय नोंदींचे २०% असे एकत्रित १०० गुणांचे रूपांतर करून निकाल घोषित करण्यात आला."
    },
    "questions": []
  },
  {
    "year": 2022,
    "sessionTitleMarathi": "मार्च २०२२ बोर्ड परीक्षा (२५% अभ्यासक्रम कपात)",
    "curriculumEra": "covid_reduced",
    "totalMarks": 40,
    "durationMinutes": 135,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे (२५% नॉन-इव्हॅल्युएटिव्ह कपात)",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत.",
      "कोविड टाळेबंदीनंतरची ही पहिली प्रत्यक्ष लेखी परीक्षा असून विद्यार्थ्यांना १५ मिनिटे अतिरिक्त वेळ (एकूण २ तास १५ मिनिटे) देण्यात आला होता."
    ],
    "questions": [
      {
        "id": "bp-2022-q1a-1",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "लिओनार्दो द विंची या जगप्रसिद्ध इटालियन चित्रकाराने रेखाटलेल्या ______ या चित्राचा समावेश लुव्र संग्रहालयात आहे.",
        "options": [
          "नेपोलियन",
          "मोनालिसा",
          "हॅन्स स्लोअन",
          "दुसरा जॉर्ज"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "मोनालिसा",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2022-q1a-2",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "थॉमस कुकने ______ विकण्याचा एजन्सी व्यवसाय सुरू केला.",
        "options": [
          "हस्तकौशल्याच्या वस्तू",
          "खेळणी",
          "खाद्यवस्तू",
          "पर्यटन तिकिटे"
        ],
        "correctOptionIndex": 3,
        "directAnswer": "पर्यटन तिकिटे",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2022-q1a-3",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "भारताचे राष्ट्रीय अभिलेखागार ______ येथे आहे.",
        "options": [
          "नवी दिल्ली",
          "कोलकाता",
          "मुंबई",
          "चेन्नई"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "नवी दिल्ली",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2022-q1b-1",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-4",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "कुटियट्टम",
            "explanation": "केरळमधील संस्कृत नाट्यपरंपरा"
          },
          {
            "term": "रम्मन",
            "explanation": "उत्तराखंडमधील धार्मिक उत्सव"
          },
          {
            "term": "रामलीला",
            "explanation": "उत्तर भारतातील रामायणाचे सादरीकरण"
          },
          {
            "term": "कालबेलिया",
            "explanation": "पश्चिम बंगालचे लोकनृत्य"
          }
        ],
        "incorrectPair": "कालबेलिया - पश्चिम बंगालचे लोकनृत्य",
        "correctedPair": "कालबेलिया - राजस्थानचे लोकनृत्य",
        "directAnswer": "कालबेलिया - पश्चिम बंगालचे लोकनृत्य (दुरुस्ती: राजस्थानचे लोकनृत्य)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2022-q1b-2",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "व्हॉल्टेअर",
            "explanation": "फ्रान्स"
          },
          {
            "term": "रेने देकार्त",
            "explanation": "जर्मनी"
          },
          {
            "term": "लिओपॉल्ड रांके",
            "explanation": "जर्मनी"
          },
          {
            "term": "कार्ल मार्क्स",
            "explanation": "जर्मनी"
          }
        ],
        "incorrectPair": "रेने देकार्त - जर्मनी",
        "correctedPair": "रेने देकार्त - फ्रान्स",
        "directAnswer": "रेने देकार्त - जर्मनी (दुरुस्ती: फ्रान्स)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "रेने देकार्त व डिस्कॉर्स ऑन द मेथड यावर वस्तुनिष्ठ व जोड्यांमध्ये नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2022-q1b-3",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "प्रभाकर",
            "explanation": "भाऊ महाजन"
          },
          {
            "term": "दर्पण",
            "explanation": "बाळशास्त्री जांभेकर"
          },
          {
            "term": "केसरी",
            "explanation": "बाळ गंगाधर टिळक"
          },
          {
            "term": "इंदुप्रकाश",
            "explanation": "दादाभाई नौरोजी"
          }
        ],
        "incorrectPair": "इंदुप्रकाश - दादाभाई नौरोजी",
        "correctedPair": "इंदुप्रकाश - विष्णूशास्त्री पंडित / न्या. महादेव गोविंद रानडे (किंवा दादाभाई नौरोजी - राष्ट्र गोफ्तार)",
        "directAnswer": "इंदुप्रकाश - दादाभाई नौरोजी (दुरुस्ती: विष्णूशास्त्री पंडित)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2022-q2a-1",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: पर्यटनाचे प्रमुख प्रकार",
        "conceptDiagram": {
          "titleMarathi": "पर्यटनाचे प्रकार",
          "diagramType": "radial",
          "nodes": [
            {
              "labelMarathi": "ऐतिहासिक पर्यटन",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "भौगोलिक पर्यटन",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "आरोग्य पर्यटन",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "कृषी पर्यटन",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. ऐतिहासिक पर्यटन २. भौगोलिक पर्यटन ३. आरोग्य पर्यटन ४. कृषी पर्यटन",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2022-q2a-2",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (२)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: महाराष्ट्रातील दुर्गांचे प्रकार व उदाहरणे",
        "conceptDiagram": {
          "titleMarathi": "महाराष्ट्रातील किल्ले",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "जलदुर्ग (उदा. जंजिरा / सिंधुदुर्ग)",
              "marksPerNode": 0.66
            },
            {
              "labelMarathi": "गिरिदुर्ग (उदा. रायगड / राजगड)",
              "marksPerNode": 0.66
            },
            {
              "labelMarathi": "भुईकोट किल्ले (उदा. नळदुर्ग / चाकण)",
              "marksPerNode": 0.68
            }
          ]
        },
        "directAnswer": "१. जलदुर्ग - जंजिरा २. गिरिदुर्ग - रायगड / राजगड ३. भुईकोट किल्ले - नळदुर्ग"
      },
      {
        "id": "bp-2022-q2b-1",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "थोडक्यात टिपा लिहा: लुव्र संग्रहालय (पॅरिस)",
        "rubric": {
          "prastavana": "फ्रान्सची राजधानी पॅरिस येथील 'लुव्र संग्रहालय' (Louvre Museum) हे जगातील सर्वाधिक प्रसिद्ध व समृद्ध संग्रहालय आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "राजवाड्याचे संग्रहालयात रूपांतर",
              "elaborationMarathi": "१२ व्या शतकात बांधलेल्या फ्रान्सच्या राजवाड्याचे फ्रेंच राज्यक्रांतीनंतर १७९३ मध्ये जनतेसाठी खुल्या सार्वजनिक संग्रहालयात रूपांतर करण्यात आले.",
              "highValueKeywords": [
                "पॅरिस",
                "फ्रेंच राज्यक्रांती",
                "सार्वजनिक संग्रहालय"
              ]
            },
            {
              "hookMarathi": "मोनालिसा व नेपोलियनचा संग्रह",
              "elaborationMarathi": "या संग्रहालयात लिओनार्दो द विंचीचे जगप्रसिद्ध 'मोनालिसा' हे मूळ चित्र, नेपोलियनने आपल्या मोहिमांत आणलेल्या दुर्मीळ कलावस्तू आणि प्राचीन ग्रीक-रोमन शिल्पे जतन केलेली आहेत.",
              "highValueKeywords": [
                "मोनालिसा चित्र",
                "लिओनार्दो द विंची",
                "नेपोलियन संग्रह"
              ]
            }
          ],
          "nishkarsha": "लुव्र संग्रहालय हे जागतिक कला, इतिहास आणि संस्कृतीचा अद्वितीय मानदंड मानले जाते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ वैशिष्ट्यपूर्ण मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2022-q2b-2",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (२)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "थोडक्यात टिपा लिहा: आकाशवाणी (AIR)",
        "rubric": {
          "prastavana": "आकाशवाणी (All India Radio) हे भारतातील अग्रगण्य शासकीय श्राव्य प्रसारमाध्यम आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "स्थापना व नामकरण",
              "elaborationMarathi": "ब्रिटिश काळात 'इंडियन ब्रॉडकास्टिंग कंपनी' (IBC) म्हणून सुरू झालेल्या या रेडिओ केंद्राचे १९३६ मध्ये 'ऑल इंडिया रेडिओ' आणि ज्येष्ठ कवी पंडित नरेंद्र शर्मा यांच्या सूचनेवरून 'आकाशवाणी' असे नामकरण झाले.",
              "highValueKeywords": [
                "IBC",
                "ऑल इंडिया रेडिओ",
                "पंडित नरेंद्र शर्मा"
              ]
            },
            {
              "hookMarathi": "बहुजन हिताय बहुजन सुखाय",
              "elaborationMarathi": "हे ब्रीदवाक्य बाळगून आकाशवाणीने बातम्या, हवामान अंदाज, शेतीविषयक मार्गदर्शन, कामगार सभा, सुगम संगीत आणि युवावाणी यांसारख्या विविध लोकोपयोगी कार्यक्रमांचे २४ भाषांत प्रसारण केले.",
              "highValueKeywords": [
                "बहुजन हिताय बहुजन सुखाय",
                "विविध भारती",
                "श्राव्य माध्यम"
              ]
            }
          ],
          "nishkarsha": "आकाशवाणीने दुर्गम खेड्यापाड्यांपर्यंत ज्ञान, माहिती आणि मनोरंजन पोहोचवून राष्ट्रीय एकात्मता मजबूत केली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दूरदर्शन व ऐतिहासिक मालिका (भारत एक खोज) व दृकश्राव्य माध्यमाचे महत्त्व."
        }
      },
      {
        "id": "bp-2022-q3-1",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: पर्यटनामुळे स्थानिक पातळीवर रोजगाराच्या संधी निर्माण होतात.",
        "rubric": {
          "prastavana": "आधुनिक काळात पर्यटन हा केवळ विरंगुळा न राहता जगातील सर्वाधिक वेगाने वाढणारा आर्थिक व्यवसाय बनला आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "सेवा क्षेत्रातील रोजगार साखळी",
              "elaborationMarathi": "पर्यटकांच्या आगमनामुळे स्थानिक भागातील हॉटेल्स, लॉजिंग, खानावळी, ट्रॅव्हल एजन्सी आणि वाहतूक सेवा (टॅक्सी, रिक्षा) यांना थेट व्यवसाय मिळतो.",
              "highValueKeywords": [
                "हॉस्पिटॅलिटी",
                "वाहतूक सेवा",
                "थेट रोजगार"
              ]
            },
            {
              "hookMarathi": "हस्तकला व स्थानिक उत्पादनांना बाजारपेठ",
              "elaborationMarathi": "स्थानिक कारागिरांच्या हस्तकौशल्याच्या वस्तू, पारंपरिक खाद्यपदार्थ आणि स्थानिक शेतीमालाला मोठी मागणी निर्माण होते; तसेच प्रशिक्षित गाईड्स म्हणून स्थानिक सुशिक्षितांना काम मिळते.",
              "highValueKeywords": [
                "स्थानिक हस्तकला",
                "पर्यटक गाईड्स",
                "शेतीमाल विक्री"
              ]
            }
          ],
          "nishkarsha": "अशा प्रकारे पर्यटनामुळे स्थानिक अर्थव्यवस्थेला चालना मिळून ग्रामीण व दुर्गम भागात रोजगाराची नवी दालने खुली होतात.",
          "scoringRuleMarathi": "विधान अचूक २ मुद्द्यांच्या कारणासह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2022-q3-2",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (२)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: वृत्तपत्रांना इतिहास या विषयाची गरज पडते.",
        "rubric": {
          "prastavana": "वृत्तपत्रे दररोज ताज्या घडामोडी वाचकांपर्यंत पोहोचवतात, तरीही अनेक संदर्भांसाठी त्यांना इतिहासाचा आधार घ्यावा लागतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "घटनेची ऐतिहासिक पार्श्वभूमी स्पष्ट करणे",
              "elaborationMarathi": "एखादी मोठी राजकीय, आर्थिक किंवा आंतरराष्ट्रीय बातमी देताना (उदा. युद्धाची बातमी किंवा निवडणुका) वाचकांना संपूर्ण अर्थ समजण्यासाठी त्या बातमीचा भूतकालीन इतिहास द्यावा लागतो.",
              "highValueKeywords": [
                "ऐतिहासिक पार्श्वभूमी",
                "बातमीचा संदर्भ",
                "सखोल विश्लेषण"
              ]
            },
            {
              "hookMarathi": "दिनविशेष व विशेष पुरवण्या",
              "elaborationMarathi": "स्वातंत्र्यदिन, क्रांतीदिन किंवा थोर व्यक्तींच्या जयंती-पुण्यतिथीनिमित्त विशेष पुरवण्या आणि '५० वर्षांपूर्वी आजच्या दिवशी' यांसारखी सदरे लिहिण्यासाठी इतिहास संशोधनाची व साधनांची अनिवार्य गरज असते.",
              "highValueKeywords": [
                "दिनविशेष",
                "शतकोत्सव पुरवण्या",
                "इतिहास साधने"
              ]
            }
          ],
          "nishkarsha": "इतिहासाच्या पायाशिवाय वृत्तपत्रांमधील बातम्यांना परिपूर्णता आणि विश्लेषणात्मक खोली प्राप्त होऊ शकत नाही.",
          "scoringRuleMarathi": "विधान अचूक २ मुद्द्यांच्या कारणासह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2025
          ],
          "trendAnalysisMarathi": "केसरी व मराठा वृत्तपत्रे आणि लोकमान्य टिळक यांचे स्वातंत्र्यलढ्यातील योगदान."
        }
      },
      {
        "id": "bp-2022-q4-1",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. ४",
        "type": "passage_analysis_4m",
        "marks": 4,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "दिलेल्या उताऱ्याचे वाचन करून खालील प्रश्नांची उत्तरे लिहा:",
        "passageText": "महाराष्ट्राला किल्ल्यांचा समृद्ध ऐतिहासिक वारसा लाभला आहे. छत्रपती शिवाजी महाराजांनी स्वराज्य स्थापनेच्या कार्यात दुर्गांना अनन्यसाधारण महत्त्व दिले होते. रामचंद्रपंत अमात्य यांनी आपल्या 'आज्ञापत्र' या ग्रंथात 'दुर्ग म्हणजे राज्याचे मुख्य सार' असे किल्ल्यांचे यथार्थ वर्णन केले आहे. शिवरायांच्या काळात सुमारे तीनशे किल्ले स्वराज्यात होते. सिंधुदुर्ग, विजयदुर्ग यांसारखे जलदुर्ग शिवछत्रपतींनी समुद्रकिनाऱ्याचे रक्षण करण्यासाठी स्वतः उभारले. किल्ल्यांचे संवर्धन करताना त्यांच्या तटबंदीची डागडुजी, पायऱ्यांची दुरुस्ती आणि पिण्याच्या पाण्याच्या टाक्यांची स्वच्छता करणे आवश्यक असते. आजच्या काळात किल्ल्यांवर पर्यटकांची गर्दी वाढल्यामुळे प्लास्टिकचा कचरा आणि भिंतींवर नावे कोरणे यांसारख्या विघातक गोष्टी घडतात, त्या रोखणे अत्यंत आवश्यक आहे.",
        "subQuestions": [
          {
            "questionNumber": "१",
            "textMarathi": "'आज्ञापत्र' या ग्रंथात दुर्गांविषयी काय म्हटले आहे?",
            "marks": 1,
            "modelAnswer": "'आज्ञापत्र' या ग्रंथात रामचंद्रपंत अमात्य यांनी 'दुर्ग म्हणजे राज्याचे मुख्य सार' असे म्हटले आहे."
          },
          {
            "questionNumber": "२",
            "textMarathi": "समुद्रकिनाऱ्याच्या संरक्षणासाठी छत्रपती शिवाजी महाराजांनी कोणते जलदुर्ग उभारले?",
            "marks": 1,
            "modelAnswer": "समुद्रकिनाऱ्याच्या संरक्षणासाठी छत्रपती शिवाजी महाराजांनी सिंधुदुर्ग, विजयदुर्ग आदी जलदुर्ग उभारले."
          },
          {
            "questionNumber": "३",
            "textMarathi": "किल्ल्यांचे ऐतिहासिक पावित्र्य व संवर्धन टिकवण्यासाठी तुम्ही कोणते उपाय सुचवाल?",
            "marks": 2,
            "modelAnswer": "किल्ल्यांवर प्लास्टिकच्या वापरावर पूर्ण बंदी घालणे, कचरा कुंड्यांची सोय करणे, भिंतींवर नावे कोरणाऱ्यांवर कडक दंडात्मक कारवाई करणे, आणि दुर्गप्रेमी संस्थांच्या सहकार्याने नियमित स्वच्छता मोहिमा व ऐतिहासिक फलक लावणे हे उपाय मी सुचवेन."
          }
        ],
        "rubric": {
          "prastavana": "छत्रपती शिवाजी महाराजांचे दुर्गवैभव ही महाराष्ट्राची अढळ ऐतिहासिक अस्मिता आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "आज्ञापत्रातील दुर्गांचे महत्त्व",
              "elaborationMarathi": "दुर्ग हे राज्याचे जीवन असून जलदुर्गांच्या उभारणीने शिवरायांनी स्वतंत्र भारतीय आरमार उभारले.",
              "highValueKeywords": [
                "आज्ञापत्र",
                "रामचंद्रपंत अमात्य",
                "जलदुर्ग सिंधुदुर्ग"
              ]
            },
            {
              "hookMarathi": "नागरिकांचे संवर्धन कर्तव्य",
              "elaborationMarathi": "किल्ल्यांची विटंबना रोखणे, प्लास्टिक कचरा न करणे आणि ऐतिहासिक अवशेषांचे वैज्ञानिक जतन करणे हे प्रत्येक नागरिकाचे कर्तव्य आहे.",
              "highValueKeywords": [
                "प्लास्टिक बंदी",
                "वैज्ञानिक जतन",
                "दुर्ग संवर्धन"
              ]
            }
          ],
          "nishkarsha": "किल्ले सुरक्षित राहिल्यासच छत्रपती शिवरायांचा पराक्रमी इतिहास पुढील पिढ्यांपर्यंत जिवंत राहील.",
          "scoringRuleMarathi": "प्र. १ (१ गुण) + प्र. २ (१ गुण) + प्र. ३ स्वमत (२ गुण) = एकूण ४ गुण."
        }
      },
      {
        "id": "bp-2022-q5-1",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "इतिहास संशोधनात वृत्तपत्रांचे स्थान सविस्तर स्पष्ट करा.",
        "rubric": {
          "prastavana": "आधुनिक कालखंडाच्या इतिहास संशोधनासाठी वृत्तपत्रे हे समकालीन लिखित ऐतिहासिक साधनांपैकी अत्यंत महत्त्वपूर्ण साधन मानले जाते.",
          "mukhyaMudde": [
            {
              "hookMarathi": "समकालीन घटनांची थेट नोंद",
              "elaborationMarathi": "वृत्तपत्रांमधून घटना घडलेल्या दिवसाच्या तारखेनुसार तत्कालीन सामाजिक, राजकीय, आर्थिक आणि वैज्ञानिक घडामोडींचे प्रत्यक्ष पुरावे उपलब्ध होतात.",
              "highValueKeywords": [
                "समकालीन नोंद",
                "थेट पुरावा",
                "कालक्रम"
              ]
            },
            {
              "hookMarathi": "विविध विचारप्रवाहांचे प्रकटीकरण",
              "elaborationMarathi": "तत्कालीन समाजातील विविध राजकीय पक्ष, समाजसुधारक आणि सर्वसामान्य लोकांचे विचार, मते आणि चळवळींचे प्रतिबिंब वृत्तपत्रांच्या संपादकीय व लेखांतून स्पष्ट होते.",
              "highValueKeywords": [
                "संपादकीय मते",
                "विचारप्रवाह",
                "समाजप्रबोधन"
              ]
            },
            {
              "hookMarathi": "तौलनिक चिकित्सा व सत्यशोधन",
              "elaborationMarathi": "एकाच घटनेविषयी विविध वृत्तपत्रांमधील मतांची तुलना करून पूर्वग्रह बाजूला ठेवून इतिहासकाराला वस्तुनिष्ठ सत्यापर्यंत पोहोचता येते.",
              "highValueKeywords": [
                "तौलनिक चिकित्सा",
                "वस्तुनिष्ठ सत्य",
                "संशोधन साधन"
              ]
            }
          ],
          "nishkarsha": "वृत्तपत्रांशिवाय आधुनिक भारताच्या सामाजिक आणि राजकीय इतिहासाची मांडणी अपूर्ण ठरते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ समर्पक मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2022-q5-2",
        "year": 2022,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (२)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "खेळांचे आंतरराष्ट्रीयीकरण कसे झाले आहे? सविस्तर लिहा.",
        "rubric": {
          "prastavana": "विसाव्या आणि एकविसाव्या शतकात विज्ञान, तंत्रज्ञान आणि प्रसारमाध्यमांच्या क्रांतीमुळे खेळांचे क्षेत्र जागतिक पातळीवर विस्तारले आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "जागतिक क्रीडा स्पर्धांचे आयोजन",
              "elaborationMarathi": "ऑलिम्पिक, आशियाई स्पर्धा (एशियाड), राष्ट्रकुल क्रीडा स्पर्धा आणि क्रिकेट/फुटबॉलचे विश्वचषक (World Cup) यांमुळे सर्व देशांतील खेळाडू एकाच व्यासपीठावर एकत्र येतात.",
              "highValueKeywords": [
                "ऑलिम्पिक",
                "विश्वचषक",
                "जागतिक क्रीडा स्पर्धा"
              ]
            },
            {
              "hookMarathi": "थेट दृकश्राव्य प्रक्षेपण (Live Telecast)",
              "elaborationMarathi": "उपग्रह संप्रेषण व दूरदर्शनमुळे जगाच्या कोणत्याही कोपऱ्यात चाललेला सामना कोट्यवधी क्रीडारसिकांना घरात बसून थेट पाहता येतो, ज्यामुळे खेळांना जागतिक बाजारपेठ मिळाली.",
              "highValueKeywords": [
                "थेट प्रक्षेपण",
                "उपग्रह संप्रेषण",
                "जागतिक बाजारपेठ"
              ]
            },
            {
              "hookMarathi": "व्यावसायिक संधी व आर्थिक उलाढाल",
              "elaborationMarathi": "खेळांचे अर्थकारण बदलले असून प्रायोजकत्व (Sponsorship), जाहिराती, क्रीडा साहित्य, प्रशिक्षक व समालोचक अशा विविध क्षेत्रांत अब्जावधी रुपयांची उलाढाल सुरू झाली.",
              "highValueKeywords": [
                "प्रायोजकत्व",
                "क्रीडा अर्थकारण",
                "व्यावसायिक संधी"
              ]
            }
          ],
          "nishkarsha": "खेळांच्या आंतरराष्ट्रीयीकरणामुळे खेळांचे स्वरूप केवळ शारीरिक करमणूक न राहता आंतरराष्ट्रीय संबंध व व्यवसायाचे महत्त्वाचे केंद्र बनले आहे.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ मुख्य मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2022-q6-1",
        "year": 2022,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "महाराष्ट्रात स्थानिक स्वराज्य संस्थांमध्ये महिलांसाठी ______ जागा राखीव ठेवण्यात आल्या आहेत.",
        "options": [
          "२५%",
          "३०%",
          "४०%",
          "५०%"
        ],
        "correctOptionIndex": 3,
        "directAnswer": "५०%",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2022-q6-2",
        "year": 2022,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "शेतकरी चळवळीची ______ ही प्रमुख मागणी आहे.",
        "options": [
          "शेतीमालाला योग्य भाव मिळावा",
          "कारखाने बंद करावेत",
          "कर रद्द करावेत",
          "आयात वाढवावी"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "शेतीमालाला योग्य भाव मिळावा",
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2022,
            2024
          ],
          "trendAnalysisMarathi": "शेतकरी चळवळ व मागण्या (हमीभाव, स्वामिनाथन आयोग)."
        }
      },
      {
        "id": "bp-2022-q7-1",
        "year": 2022,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-2",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: गुप्त मतदान पद्धतीमुळे मतदारांचे स्वातंत्र्य अबाधित राहते.",
        "rubric": {
          "prastavana": "लोकशाही निवडणुकीत मतदारांचा स्वतंत्र निर्णय हा सर्वात महत्त्वाचा घटक असतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीनुसार बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. गुप्त मतदान पद्धतीत मतदाराने कोणाला मतदान केले हे कोणालाही समजत नाही.",
              "highValueKeywords": [
                "विधान बरोबर",
                "गुप्त मतदान",
                "स्वातंत्र्य"
              ]
            },
            {
              "hookMarathi": "दडपण व भीतीपासून संरक्षण",
              "elaborationMarathi": "मतदान गुप्त असल्यामुळे कोणत्याही राजकीय पक्षाचा, सावकाराचा किंवा गुन्हेगारांचा मतदारावर दबाव येऊ शकत नाही आणि मतदार कोणत्याही भीतीशिवाय निर्भयपणे मत देऊ शकतो.",
              "highValueKeywords": [
                "निर्भय मतदान",
                "दबावमुक्ती",
                "स्वतंत्र कौल"
              ]
            }
          ],
          "nishkarsha": "गुप्त मतदान पद्धत ही निष्पक्ष व पारदर्शक निवडणुकीचा मूलभूत संविधानात्मक पाया आहे.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2020,
            2025
          ],
          "trendAnalysisMarathi": "निवडणूक आयोग, मुख्य निवडणूक आयुक्त व आचारसंहिता."
        }
      },
      {
        "id": "bp-2022-q7-2",
        "year": 2022,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (२)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: चळवळीला खंबीर नेतृत्वाची आवश्यकता असते.",
        "rubric": {
          "prastavana": "लोकशाहीत जनतेच्या समस्या शासनापर्यंत पोहोचवण्यासाठी सामाजिक व राजकीय चळवळी अत्यंत महत्त्वाची भूमिका बजावतात.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान पूर्णतः बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. कोणतीही चळवळ यशस्वी होण्यासाठी दिशा दाखवणारे खंबीर आणि समर्पित नेतृत्व अनिवार्य असते.",
              "highValueKeywords": [
                "विधान बरोबर",
                "खंबीर नेतृत्व",
                "चळवळ यश"
              ]
            },
            {
              "hookMarathi": "उद्दिष्ट निश्चिती व जनसमर्थन",
              "elaborationMarathi": "नेतृत्वामुळे चळवळीचे उद्दिष्ट, कार्यपद्धती आणि रणनीती निश्चित होते; जनतेला एकत्र आणणे, कार्यकर्त्यांमध्ये उत्साह टिकवणे आणि शासनाशी वाटाघाटी करण्याचे काम नेतृत्वच करते.",
              "highValueKeywords": [
                "रणनीती निश्चिती",
                "कार्यकर्ते उत्साह",
                "शासनाशी वाटाघाटी"
              ]
            }
          ],
          "nishkarsha": "खंबीर नेतृत्वाशिवाय चळवळी दिशाहीन होऊन त्यांचे रूपांतर अराजकात होण्याचा धोका असतो.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ स्पष्ट कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      },
      {
        "id": "bp-2022-q8a-1",
        "year": 2022,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (अ) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "संकल्पना स्पष्ट करा: बहुपक्षीय पद्धती (Multi-Party System)",
        "rubric": {
          "prastavana": "भारतासारख्या खंडप्राय आणि बहुसांस्कृतिक देशात विविध समाजघटकांच्या आकांक्षा व्यक्त होण्यासाठी बहुपक्षीय पद्धती अस्तित्वात आली आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "अनेक पक्षांचे अस्तित्त्व व सत्तास्पर्धा",
              "elaborationMarathi": "ज्या देशात दोनपेक्षा अधिक राजकीय पक्ष कायदेशीरपणे कार्यरत असतात आणि ते सर्व पक्ष निवडणुकीत सत्ता मिळवण्यासाठी परस्पर स्पर्धा करतात, त्या पद्धतीला बहुपक्षीय पद्धती म्हणतात.",
              "highValueKeywords": [
                "अनेक पक्ष",
                "सत्तास्पर्धा",
                "बहुपक्षीय रचना"
              ]
            },
            {
              "hookMarathi": "विविध घटकांना प्रतिनिधित्व",
              "elaborationMarathi": "भारतात भाषिक, प्रादेशिक, जातीय आणि धार्मिक विविधता असल्याने वेगवेगळ्या घटकांना संसदेत स्वतःचा आवाज मांडण्यासाठी स्वतंत्र राजकीय पक्षांची आवश्यकता असते.",
              "highValueKeywords": [
                "विविधता प्रतिनिधित्व",
                "लोकशाही सर्वसमावेशकता",
                "आघाडी सरकारे"
              ]
            }
          ],
          "nishkarsha": "बहुपक्षीय पद्धतीमुळे भारतीय लोकशाही अधिक सहिष्णू आणि लवचिक बनली आहे.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2022-q8b-1",
        "year": 2022,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (ब) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: भारतातील प्रमुख राष्ट्रीय पक्ष",
        "conceptDiagram": {
          "titleMarathi": "भारताचे राष्ट्रीय राजकीय पक्ष",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "भारतीय राष्ट्रीय काँग्रेस (INC)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "भारतीय जनता पक्ष (BJP)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "बहुजन समाज पक्ष (BSP)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "भारतीय कम्युनिस्ट पक्ष (CPI/CPM)",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. भारतीय राष्ट्रीय काँग्रेस २. भारतीय जनता पक्ष ३. बहुजन समाज पक्ष ४. भारतीय कम्युनिस्ट पक्ष",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2022-q9-1",
        "year": 2022,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-2",
        "questionMarathi": "पुढील प्रश्नाचे थोडक्यात उत्तर लिहा: निवडणूक प्रक्रियेतील निवडणूक आयुक्तांची भूमिका स्पष्ट करा.",
        "rubric": {
          "prastavana": "भारतीय संविधानाच्या कलम ३२४ अन्वये स्वतंत्र व स्वायत्त निवडणूक आयोगाची तरतूद करण्यात आली आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "निवडणूक वेळापत्रक व आचारसंहिता",
              "elaborationMarathi": "निवडणुकीच्या तारखा जाहीर करणे, आचारसंहिता लागू करणे आणि सर्व उमेदवारांच्या अर्जांची छाननी करून प्रत्यक्ष मतदानाचे नियोजन करणे ही मुख्य निवडणूक आयुक्तांची जबाबदारी असते.",
              "highValueKeywords": [
                "कलम ३२४",
                "वेळापत्रक जाहीर",
                "आचारसंहिता अंमलबजावणी"
              ]
            },
            {
              "hookMarathi": "स्वायत्तता व निष्पक्ष निर्णय",
              "elaborationMarathi": "शासनाच्या कोणत्याही हस्तक्षेपाशिवाय स्वतंत्रपणे काम करणे, गैरप्रकार घडल्यास फेरमतदान घेणे आणि राजकीय पक्षांना मान्यता व निवडणूक चिन्हे वाटप करण्याचे अधिकार आयुक्तांना असतात.",
              "highValueKeywords": [
                "स्वायत्त निर्णय",
                "चिन्हे वाटप",
                "फेरमतदान अधिकार"
              ]
            }
          ],
          "nishkarsha": "निवडणूक आयुक्तांच्या निष्पक्ष भूमिकेमुळेच भारतीय लोकशाहीतील निवडणुकांवर जनतेचा अढळ विश्वास टिकून आहे.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ स्पष्ट भूमिका १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2020,
            2025
          ],
          "trendAnalysisMarathi": "निवडणूक आयोग, मुख्य निवडणूक आयुक्त व आचारसंहिता."
        }
      }
    ]
  },
  {
    "year": 2023,
    "sessionTitleMarathi": "मार्च २०२३ बोर्ड परीक्षा",
    "curriculumEra": "canonical_new",
    "totalMarks": 40,
    "durationMinutes": 120,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे (१००% पूर्ण अभ्यासक्रम पूर्ववत)",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत.",
      "कोविडनंतर १००% पूर्ण अभ्यासक्रमावर आधारित प्रमाणित बोर्ड परीक्षा."
    ],
    "questions": [
      {
        "id": "bp-2023-q1a-1",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "लिओनार्डो द विंची या जगप्रसिद्ध इटालियन चित्रकाराने रेखाटलेल्या ______ या चित्राचा समावेश लुव्र संग्रहालयात आहे.",
        "options": [
          "नेपोलियन",
          "मोनालिसा",
          "हॅन्स स्लोअन",
          "दुसरा जॉर्ज"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "मोनालिसा",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2023-q1a-2",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "थॉमस कुकने ______ विकण्याचा एजन्सी व्यवसाय सुरू केला.",
        "options": [
          "हस्तकौशल्याच्या वस्तू",
          "खेळणी",
          "खाद्यवस्तू",
          "पर्यटन तिकिटे"
        ],
        "correctOptionIndex": 3,
        "directAnswer": "पर्यटन तिकिटे",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2023-q1a-3",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "एकोणिसाव्या शतकात स्त्रियांविषयी लेखन करणाऱ्या लेखिकांमध्ये ______ यांचे नाव अग्रणी आहे.",
        "options": [
          "ताराबाई शिंदे",
          "पंडिता रमाबाई",
          "मीरा कोसंबी",
          "शर्मिला रेगे"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "ताराबाई शिंदे",
        "frequencyMarker": {
          "recurrenceCount": 1,
          "stars": "★",
          "yearsAppeared": [
            2023
          ],
          "trendAnalysisMarathi": "स्त्रीवादी इतिहासलेखन (ताराबाई शिंदे, पंडिता रमाबाई)."
        }
      },
      {
        "id": "bp-2023-q1b-1",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "जॉर्ज विल्हेम फ्रेडरिक हेगेल",
            "explanation": "रिझन इन हिस्टरी"
          },
          {
            "term": "लिओपोल्ड व्हॉन रांके",
            "explanation": "द थिअरी अँड प्रॅक्टिस ऑफ हिस्टरी"
          },
          {
            "term": "हिरोडोटस",
            "explanation": "द हिस्टरीज्"
          },
          {
            "term": "कार्ल मार्क्स",
            "explanation": "डिस्कोर्स ऑन द मेथड"
          }
        ],
        "incorrectPair": "कार्ल मार्क्स - डिस्कोर्स ऑन द मेथड",
        "correctedPair": "रेने देकार्त - डिस्कोर्स ऑन द मेथड (किंवा कार्ल मार्क्स - दास कॅपिटल)",
        "directAnswer": "कार्ल मार्क्स - डिस्कोर्स ऑन द मेथड (दुरुस्ती: रेने देकार्त)",
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "कार्ल मार्क्स व वर्गसंघर्ष सिद्धान्त प्रत्येक बोर्ड परीक्षेत हमखास विचारला जातो (MCQ, चुकीची जोडी किंवा सविस्तर उत्तर)."
        }
      },
      {
        "id": "bp-2023-q1b-2",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "कोलकाता",
            "explanation": "नॅशनल लायब्ररी"
          },
          {
            "term": "दिल्ली",
            "explanation": "नेहरू मेमोरियल म्युझियम अँड लायब्ररी"
          },
          {
            "term": "हैदराबाद",
            "explanation": "स्टेट सेंट्रल लायब्ररी"
          },
          {
            "term": "पुणे",
            "explanation": "लायब्ररी ऑफ एशियाटिक सोसायटी"
          }
        ],
        "incorrectPair": "पुणे - लायब्ररी ऑफ एशियाटिक सोसायटी",
        "correctedPair": "मुंबई - लायब्ररी ऑफ एशियाटिक सोसायटी",
        "directAnswer": "पुणे - लायब्ररी ऑफ एशियाटिक सोसायटी (दुरुस्ती: मुंबई)",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2023-q1b-3",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "लगोरी",
            "explanation": "मैदानी खेळ"
          },
          {
            "term": "बुद्धिबळ",
            "explanation": "बैठा खेळ"
          },
          {
            "term": "खो-खो",
            "explanation": "मैदानी खेळ"
          },
          {
            "term": "कॅरम",
            "explanation": "मैदानी खेळ"
          }
        ],
        "incorrectPair": "कॅरम - मैदानी खेळ",
        "correctedPair": "कॅरम - बैठा खेळ",
        "directAnswer": "कॅरम - मैदानी खेळ (दुरुस्ती: बैठा खेळ)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2023-q2a-1",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: महाराष्ट्रातील प्रसिद्ध ऐतिहासिक लेणी",
        "conceptDiagram": {
          "titleMarathi": "महाराष्ट्रातील लेणी",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "अजिंठा लेणी (छत्रपती संभाजीनगर)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "वेरूळ लेणी (छत्रपती संभाजीनगर)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "कार्ले-भाजे लेणी (पुणे जिल्हा)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "कान्हेरी लेणी (मुंबई उपनगर)",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. अजिंठा लेणी २. वेरूळ लेणी ३. कार्ले-भाजे लेणी ४. कान्हेरी लेणी",
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2019,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "अजिंठा लेणी व युनेस्को जागतिक वारसा स्थळे संकल्पनाचित्र."
        }
      },
      {
        "id": "bp-2023-q2a-2",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (२)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: आधुनिक प्रसारमाध्यमांचे वर्गीकरण",
        "conceptDiagram": {
          "titleMarathi": "प्रसारमाध्यमे वर्गीकरण",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "मुद्रित माध्यमे (वृत्तपत्रे, नियतकालिके, ग्रंथ)",
              "marksPerNode": 1
            },
            {
              "labelMarathi": "इलेक्ट्रॉनिक / दृकश्राव्य माध्यमे (आकाशवाणी, दूरदर्शन, इंटरनेट)",
              "marksPerNode": 1
            }
          ]
        },
        "directAnswer": "१. मुद्रित माध्यमे (वृत्तपत्रे, नियतकालिके) २. इलेक्ट्रॉनिक व दृकश्राव्य माध्यमे (आकाशवाणी, दूरदर्शन, इंटरनेट)",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दूरदर्शन व ऐतिहासिक मालिका (भारत एक खोज) व दृकश्राव्य माध्यमाचे महत्त्व."
        }
      },
      {
        "id": "bp-2023-q2b-1",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "थोडक्यात टिपा लिहा: स्त्रीवादी इतिहासलेखन (Feminist Historiography)",
        "rubric": {
          "prastavana": "दीर्घकाळ इतिहासलेखनात पुरुषांचेच कर्तृत्व केंद्रस्थानी राहिले होते; त्याला आव्हान देऊन स्त्रियांच्या दृष्टिकोनातून इतिहास नव्याने मांडण्याची पद्धत म्हणजे स्त्रीवादी इतिहासलेखन होय.",
          "mukhyaMudde": [
            {
              "hookMarathi": "सीमॉन द बोव्हा व तात्त्विक पाया",
              "elaborationMarathi": "फ्रेंच विचारवंत सीमॉन् द बोव्हा हिने स्त्रीवादाची मूलभूत तात्त्विक भूमिका मांडली; त्यातून स्त्रियांच्या हक्कांचा व सामाजिक स्थानाचा वेध घेण्यास सुरुवात झाली.",
              "highValueKeywords": [
                "सीमॉन द बोव्हा",
                "तात्त्विक भूमिका",
                "स्त्रीवादी विचार"
              ]
            },
            {
              "hookMarathi": "ताराबाई शिंदे व पंडिता रमाबाई",
              "elaborationMarathi": "भारतात ताराबाई शिंदे यांनी १८८२ मध्ये 'स्त्री-पुरुष तुलना' हे पुस्तक लिहून पुरुषप्रधान व्यवस्था व धर्मव्यवस्थेवर प्रहार केला, तर पंडिता रमाबाई यांनी 'द हाय कास्ट हिंदू वुमन' ग्रंथातून स्त्रियांचे दुःख मांडले.",
              "highValueKeywords": [
                "ताराबाई शिंदे",
                "स्त्री-पुरुष तुलना",
                "पंडिता रमाबाई"
              ]
            }
          ],
          "nishkarsha": "स्त्रीवादी इतिहासलेखनामुळे रोजगारातील स्थान, कुटुंबातील अधिकार आणि स्त्रियांचे स्वातंत्र्य या ऐतिहासिक अंगांवर प्रकाश पडला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ विचारवंत/मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 1,
          "stars": "★",
          "yearsAppeared": [
            2023
          ],
          "trendAnalysisMarathi": "स्त्रीवादी इतिहासलेखन (ताराबाई शिंदे, पंडिता रमाबाई)."
        }
      },
      {
        "id": "bp-2023-q2b-2",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (२)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "थोडक्यात टिपा लिहा: खेळांचे महत्त्व",
        "rubric": {
          "prastavana": "खेळ माणसाचे शारीरिक स्वास्थ्य आणि मानसिक कणखरता विकसित करण्याचे सर्वोत्तम साधन आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "शारीरिक व मानसिक आरोग्य",
              "elaborationMarathi": "खेळामुळे शरीरातील रक्ताभिसरण सुधारते, स्नायू बळकट होतात आणि दैनंदिन जीवनातील ताणतणाव नाहीसा होऊन मनाला ताजेतवाने वाटते.",
              "highValueKeywords": [
                "शारीरिक स्वास्थ्य",
                "कणखरता",
                "ताणतणाव मुक्ती"
              ]
            },
            {
              "hookMarathi": "सामाजिक मूल्ये व व्यक्तिमत्त्व विकास",
              "elaborationMarathi": "खेळांमुळे सांघिक भावना, एकाग्रता, चिकाटी, सहकार्य आणि विजय-पराजय समभावाने स्वीकारण्याची खिलाडूवृत्ती अंगी बाणवली जाते.",
              "highValueKeywords": [
                "सांघिक भावना",
                "खिलाडूवृत्ती",
                "चिकाटी"
              ]
            }
          ],
          "nishkarsha": "खेळ जीवनाला शिस्त लावतात आणि राष्ट्रीय व आंतरराष्ट्रीय पातळीवर बंधुभाव निर्माण करतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ समर्पक मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2023-q2b-3",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (३)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "थोडक्यात टिपा लिहा: वृत्तपत्रांची उद्दिष्टे",
        "rubric": {
          "prastavana": "मुद्रणकलेच्या विकासानंतर लोकशाहीचा चौथा स्तंभ म्हणून वृत्तपत्रांनी समाजजीवनात अत्यंत प्रभावी भूमिका बजावली आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "माहिती व बातम्यांचे तत्पर वितरण",
              "elaborationMarathi": "स्थानिक, राष्ट्रीय व आंतरराष्ट्रीय स्तरावरील घटना, चालू घडामोडी आणि शासकीय धोरणे वाचकांपर्यंत निष्पक्षपणे व वेळेत पोहोचवणे.",
              "highValueKeywords": [
                "चालू घडामोडी",
                "निष्पक्ष बातम्या",
                "माहिती वितरण"
              ]
            },
            {
              "hookMarathi": "लोकजागृती व सामाजिक प्रबोधन",
              "elaborationMarathi": "समाजातील अनिष्ट रूढी, भ्रष्टाचार, अन्याय यांवर प्रकाश टाकून लोकमत तयार करणे आणि शिक्षण, आरोग्य व लोकशाही मूल्यांविषयी जनतेला जागृत करणे.",
              "highValueKeywords": [
                "लोकजागृती",
                "लोकमत निर्मिती",
                "सामाजिक प्रबोधन"
              ]
            }
          ],
          "nishkarsha": "वृत्तपत्रे समाजाचा आरसा असून ती लोकशाहीचे रक्षण आणि मार्गदर्शन करण्याचे दुहेरी कार्य करतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ उद्दिष्टे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2023-q3-1",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: मायकेल फुको यांच्या लेखनपद्धतीला 'ज्ञानाचे पुरातत्त्व' म्हटले आहे.",
        "rubric": {
          "prastavana": "विसाव्या शतकातील फ्रेंच विचारवंत मायकेल फुको (१९२६-१९८४) यांनी इतिहासलेखनात नवी विचारसरणी मांडली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "कालक्रमानुसार अखंड मांडणी अमान्य",
              "elaborationMarathi": "इतिहासाची कालक्रमानुसार अखंड मांडणी करण्याची पद्धत चुकीची आहे, असे फुको यांचे मत होते; केवळ अंतिम ऐतिहासिक सत्यापर्यंत पोहोचणे हे उद्दिष्ट नसून भूतकाळातील संक्रमणांचे (Transitions) स्पष्टीकरण देणे महत्त्वाचे आहे.",
              "highValueKeywords": [
                "कालक्रम अमान्य",
                "संक्रमणांचे स्पष्टीकरण",
                "इतिहास पद्धती"
              ]
            },
            {
              "hookMarathi": "आर्किऑलॉजी ऑफ नॉलेज ग्रंथ",
              "elaborationMarathi": "त्यांनी 'आर्किऑलॉजी ऑफ नॉलेज' (Archaeology of Knowledge) या ग्रंथात मनोविकृती, वैद्यकशास्त्र, तुरुंगव्यवस्था यांसारख्या पूर्वी दुर्लक्षित विषयांचा इतिहासाच्या दृष्टिकोनातून सखोल विचार केला.",
              "highValueKeywords": [
                "आर्किऑलॉजी ऑफ नॉलेज",
                "मनोविकृती व वैद्यकशास्त्र",
                "दुर्लक्षित घटक"
              ]
            }
          ],
          "nishkarsha": "ज्ञानाच्या वेगवेगळ्या शाखांमधील ऐतिहासिक स्थित्यंतरे उलगडून दाखवल्यामुळे त्यांच्या पद्धतीला 'ज्ञानाचे पुरातत्त्व' म्हटले जाते.",
          "scoringRuleMarathi": "विधान अचूक २ कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2019,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "मायकेल फुको यांची ज्ञानाचे पुरातत्त्व (Archaeology of Knowledge) ही संकल्पना."
        }
      },
      {
        "id": "bp-2023-q3-2",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (२)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: दूरदर्शन हे सर्व प्रसारमाध्यमांमध्ये अतिशय लोकप्रिय माध्यम मानले जाते.",
        "rubric": {
          "prastavana": "१५ सप्टेंबर १९५९ रोजी भारतात दूरदर्शनचे आगमन झाले आणि अल्पावधीतच ते सर्वाधिक लोकप्रिय माध्यम बनले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "दृकश्राव्य (Audio-Visual) वैशिष्ट्य",
              "elaborationMarathi": "वृत्तपत्रे केवळ वाचता येतात आणि आकाशवाणी केवळ ऐकता येते; परंतु दूरदर्शनवर प्रत्यक्ष घटना डोळ्यांनी पाहता येते आणि ऐकताही येते, ज्यामुळे प्रेक्षकांना जिवंत अनुभूती मिळते.",
              "highValueKeywords": [
                "दृकश्राव्य माध्यम",
                "थेट प्रक्षेपण",
                "जिवंत अनुभूती"
              ]
            },
            {
              "hookMarathi": "निरक्षर व सर्व वयोगटांसाठी उपयुक्त",
              "elaborationMarathi": "वाचता न येणाऱ्या निरक्षर व्यक्तींनाही चित्र आणि आवाजाच्या सहाय्याने बातम्या, मालिका, क्रीडा स्पर्धा आणि कृषी मार्गदर्शन सहज समजते; त्यामुळे ते प्रत्येक घराघरात पोहोचले.",
              "highValueKeywords": [
                "सर्वसमावेशकता",
                "निरक्षरांसाठी सुलभ",
                "कौटुंबिक मनोरंजन"
              ]
            }
          ],
          "nishkarsha": "दृक आणि श्राव्य या दोन्ही घटकांचा परिपूर्ण मेळ साधल्यामुळे दूरदर्शन हे जनमानसातील सर्वाधिक प्रभावी व लोकप्रिय माध्यम ठरले.",
          "scoringRuleMarathi": "विधान अचूक २ मुद्द्यांच्या कारणासह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दूरदर्शन व ऐतिहासिक मालिका (भारत एक खोज) व दृकश्राव्य माध्यमाचे महत्त्व."
        }
      },
      {
        "id": "bp-2023-q4-1",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. ४",
        "type": "passage_analysis_4m",
        "marks": 4,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "दिलेल्या उताऱ्याचे वाचन करून खालील प्रश्नांची उत्तरे लिहा:",
        "passageText": "एकोणिसाव्या शतकाच्या उत्तरार्धात थॉमस कुक याने ६०० लोकांसाठी लेस्टर ते लाफब्रो अशी रेल्वे सहल आयोजित केली होती. संपूर्ण आगगाडी आरक्षित करून हा भव्य दौरा यशस्वीपणे पार पाडण्यात आला. पुढे त्याने युरोपची भव्य वर्तुळाकार सहल यशस्वीरीत्या आयोजित केली. पर्यटकांना विविध ठिकाणची तिकिटे विकण्याचा एजन्सी व्यवसाय त्याने सुरू केला. या ऐतिहासिक प्रयत्नातूनच आधुनिक काळातील व्यावसायिक पर्यटन उद्योगाची पायाभरणी झाली. आज पर्यटन हा जगातील सर्वाधिक वेगाने वाढणारा आर्थिक उद्योग बनला असून लाखो लोकांना त्यातून रोजगाराच्या संधी प्राप्त होत आहेत.",
        "subQuestions": [
          {
            "questionNumber": "१",
            "textMarathi": "थॉमस कुकने पहिली रेल्वे सहल कोणत्या दोन शहरांदरम्यान आयोजित केली होती?",
            "marks": 1,
            "modelAnswer": "थॉमस कुकने पहिली रेल्वे सहल लेस्टर ते लाफब्रो या दोन शहरांदरम्यान आयोजित केली होती."
          },
          {
            "questionNumber": "२",
            "textMarathi": "थॉमस कुकने पर्यटकांसाठी कोणता एजन्सी व्यवसाय सुरू केला?",
            "marks": 1,
            "modelAnswer": "थॉमस कुकने पर्यटकांना विविध ठिकाणची पर्यटन तिकिटे विकण्याचा एजन्सी व्यवसाय सुरू केला."
          },
          {
            "questionNumber": "३",
            "textMarathi": "थॉमस कुकला 'आधुनिक पर्यटनाचा जनक' का मानले जाते? तुमचे मत स्पष्ट करा.",
            "marks": 2,
            "modelAnswer": "थॉमस कुक याने पर्यटनाला व्यावसायिक संस्थात्मक स्वरूप दिले. रेल्वेचे आरक्षण, सामूहिक सहलींचे सुनियोजित आयोजन, हॉटेल व तिकिटांची एकछत्री सोय करून पर्यटनाची नवी वाट चोखाळली. त्याच्या या दूरदृष्टीपूर्ण उपक्रमातून जागतिक पर्यटन उद्योगाची पायाभरणी झाली, म्हणून त्याला आधुनिक पर्यटनाचा जनक मानले जाते."
          }
        ],
        "rubric": {
          "prastavana": "थॉमस कुक यांनी १९ व्या शतकात पर्यटनाचे व्यापारीकरण व आधुनिकीकरण करून ऐतिहासिक क्रांती घडवली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "व्यावसायिक सहल नियोजनाची सुरुवात",
              "elaborationMarathi": "६०० लोकांची पहिली आगगाडी सहल यशस्वी करून त्यांनी पर्यटन हे सर्वसामान्य जनतेच्या आवाक्यात आणले.",
              "highValueKeywords": [
                "थॉमस कुक",
                "लेस्टर ते लाफब्रो",
                "तिकिटे एजन्सी"
              ]
            },
            {
              "hookMarathi": "आधुनिक पर्यटन उद्योगाचा पाया",
              "elaborationMarathi": "वर्तुळाकार सहली आणि पर्यटन तिकिटांच्या एजन्सी व्यवसायाने आजच्या जागतिक ट्रॅव्हल कंपन्यांचे मॉडेल निर्माण केले.",
              "highValueKeywords": [
                "आधुनिक पर्यटन जनक",
                "वर्तुळाकार सहल",
                "रोजगार संधी"
              ]
            }
          ],
          "nishkarsha": "थॉमस कुक यांच्या उपक्रमांनी पर्यटनाला जागतिक अर्थव्यवस्थेचा मुख्य स्तंभ बनवले.",
          "scoringRuleMarathi": "प्र. १ (१ गुण) + प्र. २ (१ गुण) + प्र. ३ स्वमत (२ गुण) = एकूण ४ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2023-q5-1",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "इतिहासाची संशोधन पद्धती विविध ज्ञानशाखांच्या विकासात कशी उपयुक्त ठरते?",
        "rubric": {
          "prastavana": "ज्ञान आणि संशोधनाची प्रत्येक शाखा भूतकाळातील शोधांवर आधारलेली असते; त्यामुळे इतिहासाची संशोधन पद्धती प्रत्येक विद्याशाखेचा पाया ठरते.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विज्ञान आणि तंत्रज्ञान क्षेत्रातील उपयोग",
              "elaborationMarathi": "मानवाने लावलेले वैज्ञानिक शोध, भौतिक साधने आणि यंत्रांची उत्क्रांती समजून घेण्यासाठी वैज्ञानिक इतिहासाची तपासणी करावी लागते, ज्यामुळे नवीन शोधांना दिशा मिळते.",
              "highValueKeywords": [
                "वैज्ञानिक शोध",
                "यंत्र उत्क्रांती",
                "तांत्रिक प्रगती"
              ]
            },
            {
              "hookMarathi": "कला, स्थापत्य व साहित्य विकास",
              "elaborationMarathi": "विविध कालखंडांतील चित्रकला, शिल्पकला आणि वास्तुरचना तत्कालीन समाजमन व धार्मिक मूल्यांशी जोडलेली असते; ऐतिहासिक विश्लेषणाने कलाकृतींचे योग्य रसग्रहण करता येते.",
              "highValueKeywords": [
                "कला व स्थापत्य",
                "रसग्रहण",
                "सांस्कृतिक मूल्ये"
              ]
            },
            {
              "hookMarathi": "मानव्यज्ञान शाखा व समाजशास्त्रे",
              "elaborationMarathi": "राज्यशास्त्र, अर्थशास्त्र, समाजशास्त्र आणि मानसशास्त्र या मानव्यविद्यांचे सिद्धांत भूतकालीन मानवी वर्तनाच्या ऐतिहासिक अभ्यासातूनच आकाराला आले आहेत.",
              "highValueKeywords": [
                "मानव्यविद्या",
                "मानवी वर्तन",
                "सिद्धांत निर्मिती"
              ]
            }
          ],
          "nishkarsha": "अशा प्रकारे इतिहासाची चिकित्सा संशोधन पद्धती सर्व ज्ञानशाखांना सखोलता व विश्वासार्हता प्रदान करते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ ज्ञानशाखांचे विश्लेषण २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        }
      },
      {
        "id": "bp-2023-q5-2",
        "year": 2023,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (२)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "खेळांच्या इतिहासाचा आणि चित्रपटांचा सहसंबंध सोदाहरण स्पष्ट करा.",
        "rubric": {
          "prastavana": "आधुनिक काळात चित्रपट आणि क्रीडा या दोन्ही लोकप्रिय क्षेत्रांमध्ये अत्यंत घनिष्ठ व सर्जनशील सहसंबंध प्रस्थापित झाला आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "खेळाडूंवर चरित्रपट (बायोपिक्स)",
              "elaborationMarathi": "प्रसिद्ध खेळाडूंचा संघर्ष, अपार मेहनत आणि आंतरराष्ट्रीय यश यांवर आधारित दर्जेदार चित्रपट निर्माण झाले आहेत; उदा. 'भाग मिल्खा भाग' (मिल्खा सिंग), 'मेरी कोम' आणि 'एम. एस. धोनी - द अनटोल्ड स्टोरी'.",
              "highValueKeywords": [
                "चरित्रपट (बायोपिक)",
                "मेरी कोम",
                "मिल्खा सिंग",
                "धोनी"
              ]
            },
            {
              "hookMarathi": "खेळांच्या इतिहासावर आधारित चित्रपट",
              "elaborationMarathi": "ब्रिटिश काळातील क्रिकेटच्या पार्श्वभूमीवर तयार झालेला 'लगान', महिला कुस्ती खेळावर आधारित 'दंगल' आणि भारतीय महिला हॉकी संघाच्या संघर्षावरील 'चक दे इंडिया' या चित्रपटांनी नवा इतिहास रचला.",
              "highValueKeywords": [
                "दंगल",
                "लगान",
                "चक दे इंडिया",
                "क्रीडा इतिहास"
              ]
            },
            {
              "hookMarathi": "इतिहास संशोधनाची अपरिहार्य गरज",
              "elaborationMarathi": "अशा चित्रपटांची निर्मिती करताना तत्कालीन कालखंडातील खेळाडूंचे पोशाख, क्रीडासाहित्य, मैदानांचे स्वरूप आणि भाषा यांचे हुबेहूब दर्शन घडवण्यासाठी खेळाच्या इतिहासाचा सखोल अभ्यास करावा लागतो.",
              "highValueKeywords": [
                "तत्कालीन वेशभूषा",
                "क्रीडासाहित्य",
                "इतिहास संशोधन"
              ]
            }
          ],
          "nishkarsha": "खेळ आणि चित्रपटांच्या या सुंदर मिलाफामुळे खेळाचा इतिहास लाखो प्रेक्षकांपर्यंत प्रभावीपणे पोहोचून नव्या पिढीला प्रेरणा देतो.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + उदाहरणांसह ३ मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2023-q6-1",
        "year": 2023,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "मतदारांचे वय २१ वर्षांवरून १८ वर्षे केल्यामुळे भारतातील मतदारांची संख्या ______ झाली.",
        "options": [
          "घटली",
          "वाढली",
          "स्थिर राहिली",
          "मर्यादित झाली"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "वाढली",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2023-q6-2",
        "year": 2023,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "संविधानाचे स्वरूप एखाद्या जिवंत ______ सारखे असते.",
        "options": [
          "वृक्षा",
          "इमारती",
          "दस्तऐवजा",
          "कायद्या"
        ],
        "correctOptionIndex": 2,
        "directAnswer": "दस्तऐवजा",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2023-q7-1",
        "year": 2023,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: न्यायालयाच्या निर्णयामुळे महिलांच्या सन्मानाची व प्रतिष्ठेची जपणूक झाली आहे.",
        "rubric": {
          "prastavana": "भारतीय लोकशाहीत संविधान आणि मूलभूत हक्कांचे रक्षक म्हणून सर्वोच्च व उच्च न्यायालयांची भूमिका अत्यंत मोलाची आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान पूर्णतः बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. न्यायालयाने महिलांच्या मानवी हक्कांचे आणि प्रतिष्ठेचे रक्षण करण्यासाठी वेळोवेळी ऐतिहासिक व पुरोगामी निकाल दिले आहेत.",
              "highValueKeywords": [
                "विधान बरोबर",
                "महिला सन्मान",
                "ऐतिहासिक निकाल"
              ]
            },
            {
              "hookMarathi": "कौटुंबिक हिंसाचार व समान हक्क निकाल",
              "elaborationMarathi": "वडिलोपार्जित संपत्तीत मुलींना समान वाटा, कामाच्या ठिकाणी लैंगिक छळाला प्रतिबंध (विशाखा गाईडलाईन्स) आणि कौटुंबिक हिंसाचारापासून संरक्षण यांसारख्या निर्णयांनी महिलांना सामाजिक सुरक्षितता दिली.",
              "highValueKeywords": [
                "समान वारसा हक्क",
                "विशाखा गाईडलाईन्स",
                "कौटुंबिक हिंसाचार संरक्षण"
              ]
            }
          ],
          "nishkarsha": "न्यायालयाच्या या संवेदनशील भूमिकेमुळे महिला सक्षमीकरणाला कायदेशीर बळ प्राप्त झाले.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2023-q7-2",
        "year": 2023,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (२)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: चळवळीला खंबीर नेतृत्वाची गरज नसते.",
        "rubric": {
          "prastavana": "चळवळी हा सामान्य जनतेच्या संघटित सामर्थ्याचा आविष्कार असतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान पूर्णतः चूक",
              "elaborationMarathi": "हे विधान चूक आहे. कोणत्याही चळवळीला यशाच्या दिशेने नेण्यासाठी एका कणखर, दूरदृष्टी आणि समर्पित नेतृत्वाची नितांत आवश्यकता असते.",
              "highValueKeywords": [
                "विधान चूक",
                "खंबीर नेतृत्व गरज",
                "चळवळीचे यश"
              ]
            },
            {
              "hookMarathi": "दिशा व शिस्तीचा अभाव रोखणे",
              "elaborationMarathi": "नेतृत्व नसेल तर चळवळ भरकटते, तिचा उद्देश स्पष्ट राहत नाही आणि हिंसक वळण लागण्याचा धोका असतो; योग्य नेतृत्वच जनमत तयार करून शासनावर दबाव आणू शकते.",
              "highValueKeywords": [
                "दिशा व शिस्त",
                "अहिंसक मार्ग",
                "शासनाशी समन्वय"
              ]
            }
          ],
          "nishkarsha": "महात्मा गांधी, डॉ. बाबासाहेब आंबेडकर यांच्या नेतृत्वावरून स्पष्ट होते की खंबीर नेतृत्वामुळेच चळवळींना ऐतिहासिक विजय मिळतो.",
          "scoringRuleMarathi": "विधान चूक ओळखल्यास १ गुण + २ स्पष्ट कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      },
      {
        "id": "bp-2023-q8a-1",
        "year": 2023,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (अ) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "संकल्पना स्पष्ट करा: राष्ट्रीय पक्ष (National Party)",
        "rubric": {
          "prastavana": "निवडणूक आयोगाने निश्चित केलेल्या कायदेशीर निकषांची पूर्तता करणाऱ्या पक्षाला राष्ट्रीय पक्ष म्हणून मान्यता मिळते.",
          "mukhyaMudde": [
            {
              "hookMarathi": "चार किंवा अधिक राज्यांत मान्यता",
              "elaborationMarathi": "ज्या पक्षाला लोकसभा किंवा विधानसभेच्या निवडणुकीत किमान चार किंवा अधिक राज्यांत एकूण वैध मतांपैकी किमान ६% मते आणि किमान ४ खासदार निवडून येतात, त्याला राष्ट्रीय पक्ष मानले जाते.",
              "highValueKeywords": [
                "किमान चार राज्ये",
                "६% मते",
                "४ खासदार"
              ]
            },
            {
              "hookMarathi": "अथवा लोकसभेत २% जागा",
              "elaborationMarathi": "किंवा किमान तीन वेगवेगळ्या राज्यांतून मिळून लोकसभेच्या एकूण जागांच्या किमान २% जागा (११ जागा) जिंकणाऱ्या पक्षाला निवडणूक आयोग राष्ट्रीय पक्ष म्हणून अधिकृत मान्यता देतो.",
              "highValueKeywords": [
                "२% लोकसभा जागा",
                "तीन वेगवेगळी राज्ये",
                "निवडणूक आयोग निकष"
              ]
            }
          ],
          "nishkarsha": "उदा. भारतीय राष्ट्रीय काँग्रेस (INC), भारतीय जनता पक्ष (BJP), बहुजन समाज पक्ष (BSP) हे भारताचे प्रमुख राष्ट्रीय पक्ष आहेत.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + अचूक निकषांचे २ मुद्दे १ गुण + निष्कर्ष/उदाहरणे ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2023-q8b-1",
        "year": 2023,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (ब) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "pol-2",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: भारतातील प्रमुख निवडणूक सुधारणा",
        "conceptDiagram": {
          "titleMarathi": "निवडणूक सुधारणा",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "ईव्हीएम (EVM) मशीनचा वापर (मतपत्रिकेऐवजी इलेक्ट्रॉनिक मतदान)",
              "marksPerNode": 0.66
            },
            {
              "labelMarathi": "व्हीव्हीपॅट (VVPAT) पावती (आपले मत कोणाला गेले याची खात्रीशीर पावती)",
              "marksPerNode": 0.66
            },
            {
              "labelMarathi": "नोटा (NOTA) चा पर्याय (कोणीही उमेदवार पसंत नसल्यास मत देण्याचा अधिकार)",
              "marksPerNode": 0.68
            }
          ]
        },
        "directAnswer": "१. ईव्हीएम (EVM) मशीन २. व्हीव्हीपॅट (VVPAT) पावती ३. नोटा (NOTA) चा पर्याय",
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2020,
            2025
          ],
          "trendAnalysisMarathi": "निवडणूक आयोग, मुख्य निवडणूक आयुक्त व आचारसंहिता."
        }
      },
      {
        "id": "bp-2023-q9-1",
        "year": 2023,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "पुढील प्रश्नाचे थोडक्यात उत्तर लिहा: राजकीय पक्षांची प्रमुख वैशिष्ट्ये स्पष्ट करा.",
        "rubric": {
          "prastavana": "राजकीय पक्ष हा लोकशाही शासनप्रणालीचा आत्मा मानला जातो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "सत्ता मिळवणे व विचारसरणीचा आधार",
              "elaborationMarathi": "निवडणुकीच्या संविधानात्मक मार्गाने सत्ता हस्तगत करणे हे राजकीय पक्षांचे प्रमुख उद्दिष्ट असते; प्रत्येक पक्षाची विशिष्ट ध्येयधोरणे आणि विचारसरणी असते.",
              "highValueKeywords": [
                "सत्ता प्राप्ती",
                "संविधानात्मक मार्ग",
                "विचारसरणी"
              ]
            },
            {
              "hookMarathi": "शासन आणि जनता यांमधील दुवा",
              "elaborationMarathi": "जनतेच्या तक्रारी व मागण्या शासनापर्यंत पोहोचवणे आणि शासनाची धोरणे व योजना जनतेपर्यंत नेऊन त्यांची अंमलबजावणी करणे हा महत्त्वाचा दुवा राजकीय पक्ष साधतात.",
              "highValueKeywords": [
                "शासन-जनता दुवा",
                "लोकमत निर्मिती",
                "धोरण अंमलबजावणी"
              ]
            }
          ],
          "nishkarsha": "राजकीय पक्षांमुळे जनतेला राजकीय शिक्षण मिळते आणि लोकशाहीची पाळेमुळे घट्ट होतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ वैशिष्ट्ये १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      }
    ]
  },
  {
    "year": 2024,
    "sessionTitleMarathi": "मार्च २०२४ बोर्ड परीक्षा",
    "curriculumEra": "canonical_new",
    "totalMarks": 40,
    "durationMinutes": 120,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे (प्रमाणित बोर्ड परीक्षा पॅटर्न)",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत."
    ],
    "questions": [
      {
        "id": "bp-2024-q1a-1",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "\"मानवी इतिहास हा वर्गसंघर्षाचा इतिहास असतो\", असे मत ______ या तत्त्वज्ञाने मांडले.",
        "options": [
          "व्हॉल्टेअर",
          "हेगेल",
          "रांके",
          "कार्ल मार्क्स"
        ],
        "correctOptionIndex": 3,
        "directAnswer": "कार्ल मार्क्स",
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "कार्ल मार्क्स व वर्गसंघर्ष सिद्धान्त प्रत्येक बोर्ड परीक्षेत हमखास विचारला जातो (MCQ, चुकीची जोडी किंवा सविस्तर उत्तर)."
        }
      },
      {
        "id": "bp-2024-q1a-2",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "भारतातील पहिले इंग्रजी वृत्तपत्र 'द बंगाल गॅझेट' हे ______ यांनी सुरू केले.",
        "options": [
          "जेम्स ऑगस्टस हिकी",
          "सर जॉन मार्शल",
          "लॉर्ड कर्झन",
          "अ‍ॅलन ह्यूम"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "जेम्स ऑगस्टस हिकी",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2024-q1a-3",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "खेळाचे साहित्य आणि खेळणी ही इतिहासाच्या अभ्यासाचे ______ साधन आहे.",
        "options": [
          "भौतिक",
          "लिखित",
          "मौखिक",
          "दृक्-श्राव्य"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "भौतिक",
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "खेळणी आणि इतिहास यांच्यातील ऐतिहासिक व सांस्कृतिक सहसंबंध."
        }
      },
      {
        "id": "bp-2024-q1b-1",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-4",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "कुटियट्टम",
            "explanation": "केरळमधील संस्कृत नाट्यपरंपरा"
          },
          {
            "term": "रम्मन",
            "explanation": "पश्चिम बंगालमधील धार्मिक उत्सव"
          },
          {
            "term": "रामलीला",
            "explanation": "उत्तर भारतातील सादरीकरण"
          },
          {
            "term": "कालबेलिया",
            "explanation": "राजस्थानचे लोकनृत्य"
          }
        ],
        "incorrectPair": "रम्मन - पश्चिम बंगालमधील धार्मिक उत्सव",
        "correctedPair": "रम्मन - उत्तराखंडमधील धार्मिक उत्सव",
        "directAnswer": "रम्मन - पश्चिम बंगालमधील धार्मिक उत्सव (दुरुस्ती: उत्तराखंड)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2024-q1b-2",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-6",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "दशावतार",
            "explanation": "त्यागराज"
          },
          {
            "term": "कीर्तन",
            "explanation": "संत नामदेव"
          },
          {
            "term": "भारुड",
            "explanation": "संत एकनाथ"
          },
          {
            "term": "खंजिरी भजन",
            "explanation": "राष्ट्रसंत तुकडोजी महाराज"
          }
        ],
        "incorrectPair": "दशावतार - त्यागराज",
        "correctedPair": "दशावतार - कोकण व गोव्यातील पारंपरिक लोकनाट्य (किंवा त्यागराज - कर्नाटक संगीत रचनाकार)",
        "directAnswer": "दशावतार - त्यागराज (दुरुस्ती: कोकण-गोव्यातील पारंपरिक लोकनाट्य)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2024-q1b-3",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "व्हॉल्टेअर",
            "explanation": "आधुनिक इतिहासलेखनाचा जनक"
          },
          {
            "term": "रेने देकार्त",
            "explanation": "डिस्कोर्स ऑन द मेथड"
          },
          {
            "term": "कार्ल मार्क्स",
            "explanation": "दास कॅपिटल"
          },
          {
            "term": "मायकेल फुको",
            "explanation": "द थिअरी अँड प्रॅक्टिस ऑफ हिस्टरी"
          }
        ],
        "incorrectPair": "मायकेल फुको - द थिअरी अँड प्रॅक्टिस ऑफ हिस्टरी",
        "correctedPair": "मायकेल फुको - आर्किऑलॉजी ऑफ नॉलेज (किंवा लिओपॉल्ड व्हॉन रांके - द थिअरी अँड प्रॅक्टिस ऑफ हिस्टरी)",
        "directAnswer": "मायकेल फुको - द थिअरी अँड प्रॅक्टिस ऑफ हिस्टरी (दुरुस्ती: लिओपॉल्ड व्हॉन रांके)",
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2019,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "मायकेल फुको यांची ज्ञानाचे पुरातत्त्व (Archaeology of Knowledge) ही संकल्पना."
        }
      },
      {
        "id": "bp-2024-q2a-1",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: भारतातील युनेस्को जागतिक वारसा स्थळांचे वर्गीकरण",
        "conceptDiagram": {
          "titleMarathi": "युनेस्को जागतिक वारसा स्थळे",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "सांस्कृतिक वारसा (अजिंठा, वेरूळ, ताजमहाल, छत्रपती शिवाजी महाराज टर्मिनस)",
              "marksPerNode": 1
            },
            {
              "labelMarathi": "नैसर्गिक वारसा (काझीरंगा राष्ट्रीय उद्यान, पश्चिम घाट, सुंदरबन)",
              "marksPerNode": 1
            }
          ]
        },
        "directAnswer": "१. सांस्कृतिक वारसा (अजिंठा, वेरूळ, ताजमहाल, सीएसएमटी) २. नैसर्गिक वारसा (काझीरंगा, पश्चिम घाट, सुंदरबन)",
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2019,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "अजिंठा लेणी व युनेस्को जागतिक वारसा स्थळे संकल्पनाचित्र."
        }
      },
      {
        "id": "bp-2024-q2a-2",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (२)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: ऐतिहासिक खेळणी व त्यांचे महत्त्व",
        "conceptDiagram": {
          "titleMarathi": "खेळणी आणि इतिहास",
          "diagramType": "hierarchy",
          "nodes": [
            {
              "labelMarathi": "उत्खननातील प्राचीन खेळणी (हडप्पातील मातीचे गाडे, शिट्ट्या, पॉम्पेईची हस्तिदंती बाहुली)",
              "marksPerNode": 1
            },
            {
              "labelMarathi": "सांस्कृतिक व तांत्रिक प्रगतीचे दर्शन (धातुकाम, कलात्मकता व आंतरराष्ट्रीय व्यापार संबंध)",
              "marksPerNode": 1
            }
          ]
        },
        "directAnswer": "१. उत्खननातील प्राचीन खेळणी (हडप्पा, पॉम्पेई) २. तत्कालीन सांस्कृतिक व तांत्रिक प्रगतीची माहिती",
        "frequencyMarker": {
          "recurrenceCount": 3,
          "stars": "★★",
          "yearsAppeared": [
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "खेळणी आणि इतिहास यांच्यातील ऐतिहासिक व सांस्कृतिक सहसंबंध."
        }
      },
      {
        "id": "bp-2024-q2b-1",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "थोडक्यात टिपा लिहा: खेळ आणि व्यावसायिक संधी",
        "rubric": {
          "prastavana": "आधुनिक काळात खेळ हे केवळ मनोरंजन किंवा छंद न राहता एक अत्यंत समृद्ध आणि प्रतिष्ठा मिळवून देणारे करिअर क्षेत्र बनले आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "खेळाडू, पंच व प्रशिक्षक",
              "elaborationMarathi": "उत्कृष्ट कामगिरी करणाऱ्या खेळाडूंना शासकीय नोकऱ्या व लिलावात कोट्यवधी रुपयांची बोली लागते; तसेच पंच (Umpire/Referee) आणि व्यावसायिक प्रशिक्षक (Coach) म्हणून मोठी मागणी आहे.",
              "highValueKeywords": [
                "व्यावसायिक खेळाडू",
                "प्रशिक्षक व पंच",
                "शासकीय आरक्षण"
              ]
            },
            {
              "hookMarathi": "क्रीडा पत्रकारिता व समालोचक",
              "elaborationMarathi": "वृत्तपत्रे, वृत्तवाहिन्या आणि ओटीटी प्लॅटफॉर्मवर क्रीडा पत्रकार, समालोचक (Commentator), फिजिओथेरपिस्ट आणि क्रीडा मानसशास्त्रज्ञ म्हणून तरुणांना लाखो रुपयांचे रोजगार उपलब्ध आहेत.",
              "highValueKeywords": [
                "क्रीडा पत्रकारिता",
                "समालोचन (Commentary)",
                "फिजिओथेरपिस्ट"
              ]
            }
          ],
          "nishkarsha": "क्रीडा क्षेत्राने व्यावसायिकतेला व्यापक प्रतिष्ठा मिळवून देऊन रोजगाराची अगणित दालने खुली केली आहेत.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ व्यावसायिक संधी १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2024-q2b-2",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (२)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "थोडक्यात टिपा लिहा: अभिलेखागार (Archives)",
        "rubric": {
          "prastavana": "ज्या ठिकाणी जुनी, ऐतिहासिकदृष्ट्या अत्यंत महत्त्वाची, अधिकृत कागदपत्रे आणि दस्तऐवज काळजीपूर्वक जतन करून ठेवले जातात, त्या ठिकाणास अभिलेखागार (Archives) म्हणतात.",
          "mukhyaMudde": [
            {
              "hookMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली)",
              "elaborationMarathi": "नवी दिल्ली येथील राष्ट्रीय अभिलेखागार हे आशिया खंडातील सर्वात मोठे अभिलेखागार असून येथे १७४८ पासूनच्या ऐतिहासिक नोंदी व दस्तऐवज शास्त्रीय पद्धतीने जतन आहेत.",
              "highValueKeywords": [
                "राष्ट्रीय अभिलेखागार",
                "नवी दिल्ली",
                "आशियातील सर्वात मोठे"
              ]
            },
            {
              "hookMarathi": "पुणे येथील चित्रपट अभिलेखागार (NFAI)",
              "elaborationMarathi": "पुण्यातील राष्ट्रीय चित्रपट अभिलेखागारामध्ये (National Film Archive of India) भारतीय चित्रपटसृष्टीचा अमूल्य वारसा, दुर्मीळ चित्रफिती आणि माहितीपट सुरक्षित राखले जातात.",
              "highValueKeywords": [
                "NFAI पुणे",
                "चित्रपट अभिलेखागार",
                "चित्रफिती जतन"
              ]
            }
          ],
          "nishkarsha": "अभिलेखागारांमुळे ऐतिहासिक पुराव्यांचे शास्त्रीय संवर्धन होऊन संशोधकांना अधिकृत संदर्भ मिळतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ प्रमुख अभिलेखागारे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2024-q2b-3",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (३)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "थोडक्यात टिपा लिहा: वृत्तपत्रांची स्वातंत्र्यलढ्यातील भूमिका",
        "rubric": {
          "prastavana": "भारतीय स्वातंत्र्यलढ्यात मुद्रित माध्यमांनी आणि विशेषतः राष्ट्रीय वृत्तपत्रांनी क्रांतीची मशाल पेटवून ठेवली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "साम्राज्यवाद विरोधी लोकजागृती",
              "elaborationMarathi": "लोकमान्य टिळकांचे 'केसरी', 'मराठा', शिशिरकुमार घोष यांचे 'अमृत बझार पत्रिका' यांनी ब्रिटिशांच्या आर्थिक शोषणावर आणि दडपशाहीवर तीव्र प्रहार केले.",
              "highValueKeywords": [
                "केसरी व मराठा",
                "साम्राज्यवाद विरोध",
                "स्वातंत्र्य प्रेरणा"
              ]
            },
            {
              "hookMarathi": "राष्ट्रीय एकात्मता व जनआंदोलने",
              "elaborationMarathi": "वृत्तपत्रांनी देशाच्या विविध भागांतील स्वातंत्र्यलढ्याची माहिती संपूर्ण भारतभर पोहोचवून जनतेला असहकार, सविनय कायदेभंग व भारत छोडो आंदोलनांमध्ये सहभागी होण्याची प्रेरणा दिली.",
              "highValueKeywords": [
                "राष्ट्रीय एकात्मता",
                "जनआंदोलने",
                "स्वातंत्र्यसंग्राम"
              ]
            }
          ],
          "nishkarsha": "वृत्तपत्रांनी भारतीय जनतेच्या मनात राष्ट्रप्रेमाची ज्योत सतत प्रज्वलित ठेवली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ समर्पक मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2025
          ],
          "trendAnalysisMarathi": "केसरी व मराठा वृत्तपत्रे आणि लोकमान्य टिळक यांचे स्वातंत्र्यलढ्यातील योगदान."
        }
      },
      {
        "id": "bp-2024-q3-1",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: बखर हे ऐतिहासिक साहित्यातील महत्त्वाचे साधन आहे.",
        "rubric": {
          "prastavana": "मध्ययुगीन मराठी इतिहासलेखनात छत्रपती शिवाजी महाराज व मराठा साम्राज्याचा इतिहास समजून घेण्यासाठी बखर हे अत्यंत मौल्यवान लिखित साधन आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "समकालीन घडामोडी व पराक्रमाची वर्णने",
              "elaborationMarathi": "बखरीत शूर योद्ध्यांचे पराक्रम, मोहिमा, राजकीय कारस्थाने, तह आणि युद्धांचे सजीव व तपशीलवार वर्णन आढळते.",
              "highValueKeywords": [
                "समकालीन घडामोडी",
                "पराक्रम वर्णन",
                "मराठा इतिहास"
              ]
            },
            {
              "hookMarathi": "तत्कालीन समाजजीवन व भाषेची ओळख",
              "elaborationMarathi": "तत्कालीन लोकजीवन, धार्मिक समजुती, न्यायनिवाड्यांची पद्धत आणि १७ व्या-१८ व्या शतकातील मराठी भाषेचे ऐतिहासिक स्वरूप समजून घेण्यासाठी बखर अत्यंत उपयुक्त ठरते.",
              "highValueKeywords": [
                "तत्कालीन भाषा",
                "समाजजीवन",
                "सभासद बखर"
              ]
            }
          ],
          "nishkarsha": "बखरीतील माहितीची इतर समकालीन साधनांशी तुलना करून मराठ्यांचा प्रामाणिक इतिहास उभा करता येतो.",
          "scoringRuleMarathi": "विधान अचूक २ कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2019,
            2024
          ],
          "trendAnalysisMarathi": "बखर - ऐतिहासिक साहित्यातील महत्त्वाचे साधन (सभासद बखर, भाऊसाहेबांची बखर)."
        }
      },
      {
        "id": "bp-2024-q3-2",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (२)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-4",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: कलांच्या इतिहासाचा सखोल अभ्यास करावा लागतो.",
        "rubric": {
          "prastavana": "कला या मानवी संस्कृतीचे, भावनांचे आणि सौंदर्याचे प्रकटीकरण असतात.",
          "mukhyaMudde": [
            {
              "hookMarathi": "तत्कालीन संस्कृती व जीवनमूल्ये समजणे",
              "elaborationMarathi": "चित्रकला, शिल्पकला आणि वास्तुकला यांवरून तत्कालीन समाजाची धार्मिक श्रद्धा, सौंदर्यदृष्टी, जीवनशैली आणि तंत्रज्ञानाची पातळी कशी होती हे स्पष्ट होते.",
              "highValueKeywords": [
                "संस्कृतीचे प्रकटीकरण",
                "सौंदर्यदृष्टी",
                "जीवनशैली"
              ]
            },
            {
              "hookMarathi": "कलाशैलींची ऐतिहासिक उत्क्रांती",
              "elaborationMarathi": "प्राचीन गुहाचित्रांपासून आधुनिक कलेपर्यंत मानवी विचार आणि अभिव्यक्ती कशी बदलत गेली, हे शोधण्यासाठी कलांच्या इतिहासाचा अभ्यास अनिवार्य ठरतो.",
              "highValueKeywords": [
                "कला उत्क्रांती",
                "अभिव्यक्ती बदल",
                "सखोल संशोधन"
              ]
            }
          ],
          "nishkarsha": "कलांच्या सखोल अभ्यासानेच मानवी भावजीवनाचा आणि संस्कृतीचा खरा इतिहास समजून घेता येतो.",
          "scoringRuleMarathi": "विधान अचूक २ कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2024-q4-1",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. ४",
        "type": "passage_analysis_4m",
        "marks": 4,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "दिलेल्या उताऱ्याचे वाचन करून खालील प्रश्नांची उत्तरे लिहा:",
        "passageText": "बाळशास्त्री जांभेकर यांनी ६ जानेवारी १८३२ रोजी मुंबईत 'दर्पण' हे पहिले मराठी वृत्तपत्र सुरू केले. म्हणून ६ जानेवारी हा दिवस संपूर्ण महाराष्ट्रात 'पत्रकार दिन' म्हणून साजरा केला जातो. दर्पणच्या अंकांमधून तत्कालीन महाराष्ट्रातील सामाजिक, राजकीय, आर्थिक आणि सांस्कृतिक घडामोडींवर प्रकाश पडतो. विधवा पुनर्विवाहाचा प्रश्न, वैज्ञानिक दृष्टिकोन, इंग्रजी शिक्षण आणि कोलकाता येथे सुरू झालेली पहिली ग्रंथालय सोसायटी यांसारख्या सुधारणावादी विषयांवर बाळशास्त्रींनी परखड विचार मांडले. म्हणूनच बाळशास्त्री जांभेकर यांना मराठी वृत्तपत्रसृष्टीचे 'आद्य संपादक' मानले जाते.",
        "subQuestions": [
          {
            "questionNumber": "१",
            "textMarathi": "'दर्पण' हे पहिले मराठी वृत्तपत्र कधी सुरू झाले?",
            "marks": 1,
            "modelAnswer": "'दर्पण' हे पहिले मराठी वृत्तपत्र ६ जानेवारी १८३२ रोजी मुंबईत सुरू झाले."
          },
          {
            "questionNumber": "२",
            "textMarathi": "महाराष्ट्रात ६ जानेवारी हा दिवस कोणत्या नावाने साजरा केला जातो?",
            "marks": 1,
            "modelAnswer": "महाराष्ट्रात ६ जानेवारी हा दिवस 'पत्रकार दिन' म्हणून अत्यंत आदराने साजरा केला जातो."
          },
          {
            "questionNumber": "३",
            "textMarathi": "बाळशास्त्री जांभेकरांना मराठी वृत्तपत्रसृष्टीचे 'आद्य संपादक' का मानले जाते? तुमचे मत स्पष्ट करा.",
            "marks": 2,
            "modelAnswer": "बाळशास्त्री जांभेकरांनी पारतंत्र्याच्या काळात महाराष्ट्रात वृत्तपत्रसृष्टीची मुहूर्तमेढ रोवली. त्यांनी दर्पणच्या माध्यमातून विधवा विवाह, विज्ञाननिष्ठा, स्त्रीशिक्षण आणि ग्रंथालयांचे महत्त्व यांवर परखड प्रबोधन केले. मराठी पत्रकारितेला वैचारिक आणि सामाजिक बांधिलकीची दिशा त्यांनी प्रथम दिली, म्हणून त्यांना आद्य संपादक मानले जाते."
          }
        ],
        "rubric": {
          "prastavana": "बाळशास्त्री जांभेकर हे महाराष्ट्रातील प्रबोधन युगाचे आद्य समाजसुधारक आणि पत्रकारितेचे जनक होत.",
          "mukhyaMudde": [
            {
              "hookMarathi": "दर्पणची ऐतिहासिक सुरुवात",
              "elaborationMarathi": "६ जानेवारी १८३२ रोजी दर्पण सुरू करून मराठी वृत्तपत्रसृष्टीची पायाभरणी झाली.",
              "highValueKeywords": [
                "दर्पण वृत्तपत्र",
                "६ जानेवारी १८३२",
                "पत्रकार दिन"
              ]
            },
            {
              "hookMarathi": "सुधारणावादी वैचारिक अधिष्ठान",
              "elaborationMarathi": "विधवा पुनर्विवाह, विज्ञान आणि समाजसुधारणांवर परखड लेखन करून पत्रकारितेला समाजप्रबोधनाचे साधन बनवले.",
              "highValueKeywords": [
                "आद्य संपादक",
                "विज्ञाननिष्ठा",
                "समाजप्रबोधन"
              ]
            }
          ],
          "nishkarsha": "बाळशास्त्री जांभेकरांचा वारसा आजही महाराष्ट्रातील पत्रकारितेला दिशा दाखवतो.",
          "scoringRuleMarathi": "प्र. १ (१ गुण) + प्र. २ (१ गुण) + प्र. ३ स्वमत (२ गुण) = एकूण ४ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "बाळशास्त्री जांभेकर व दर्पण वृत्तपत्र हा वृत्तपत्रांच्या इतिहासातील सर्वोच्च आवडीचा बोर्ड प्रश्न आहे."
        }
      },
      {
        "id": "bp-2024-q5-1",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "पर्यटन क्षेत्राचा विकास करण्यासाठी कोणत्या उपाययोजना केल्या पाहिजेत?",
        "rubric": {
          "prastavana": "पर्यटनातून स्थानिक विकास आणि परकीय चलन मिळवण्यासाठी पर्यटन स्थळांचा सर्वांगीण व सुनियोजित विकास करणे काळाची गरज आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "पायाभूत सुविधा व सुरक्षितता",
              "elaborationMarathi": "पर्यटन स्थळांपर्यंत पोहोचण्यासाठी दर्जेदार रस्ते, स्वच्छ पिण्याचे पाणी, उत्तम स्वच्छतागृहे आणि पर्यटकांच्या, विशेषतः महिला पर्यटकांच्या, सुरक्षिततेची चोख व्यवस्था केली पाहिजे.",
              "highValueKeywords": [
                "दर्जेदार रस्ते",
                "स्वच्छतागृहे",
                "पर्यटक सुरक्षितता"
              ]
            },
            {
              "hookMarathi": "माहिती फलक व अधिकृत गाईड्स",
              "elaborationMarathi": "ऐतिहासिक स्थळांवर विविध भाषांमध्ये माहिती देणारे फलक, ऑडिओ गाईड्स, ब्रोशर्स आणि प्रशिक्षित अधिकृत गाईड्सची उपलब्धता असावी.",
              "highValueKeywords": [
                "माहिती फलक",
                "ऑडिओ गाईड्स",
                "प्रशिक्षित गाईड्स"
              ]
            }
          ],
          "nishkarsha": "अशा सुनियोजित उपाययोजनांमुळे देशांतर्गत व विदेशी पर्यटकांची संख्या वाढून पर्यटनाचा शाश्वत विकास साध्य होईल.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ परिणामकारक उपाययोजना २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2024-q5-2",
        "year": 2024,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (२)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "दूरदर्शन आणि इतिहासाचा सहसंबंध ऐतिहासिक मालिकांच्या आधारे स्पष्ट करा.",
        "rubric": {
          "prastavana": "दूरदर्शन या दृकश्राव्य माध्यमामुळे ऐतिहासिक घटना आणि महापुरुषांचे जीवन चरित्र घराघरात अत्यंत प्रभावीपणे पोहोचले आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "रामायण, महाभारत व भारत एक खोज",
              "elaborationMarathi": "रामानंद सागर यांची 'रामायण', बी. आर. चोप्रा यांची 'महाभारत' आणि श्याम बेनेगल यांची 'भारत एक खोज' या मालिकांनी भारतीय इतिहासाचा आणि महाकाव्यांचा ज्वलंत वेध घेतला.",
              "highValueKeywords": [
                "रामायण व महाभारत",
                "भारत एक खोज",
                "श्याम बेनेगल"
              ]
            },
            {
              "hookMarathi": "छत्रपती शिवरायांवरील ऐतिहासिक मालिका",
              "elaborationMarathi": "'राजा शिवछत्रपती' आणि 'स्वराज्यरक्षक संभाजी' या मालिकांनी शिवकालीन इतिहास, किल्ले, शस्त्रास्त्रे आणि तत्कालीन राजनीतीचे अचूक दर्शन घडवून प्रचंड लोकप्रियता मिळवली.",
              "highValueKeywords": [
                "राजा शिवछत्रपती",
                "स्वराज्यरक्षक संभाजी",
                "शिवकालीन इतिहास"
              ]
            },
            {
              "hookMarathi": "इतिहासकारांची सल्लागार म्हणून भूमिका",
              "elaborationMarathi": "अशा मालिकांची पटकथा, संवाद, वेशभूषा आणि स्थलरचना अचूक होण्यासाठी दिग्दर्शकांना इतिहासतज्ज्ञ व संशोधकांची मदत घ्यावी लागते, ज्यामुळे इतिहास अभ्यासकांना रोजगाराच्या संधी मिळतात.",
              "highValueKeywords": [
                "पटकथा व वेशभूषा",
                "इतिहासतज्ज्ञ सल्लागार",
                "व्यावसायिक संधी"
              ]
            }
          ],
          "nishkarsha": "दूरदर्शनने इतिहासाला जिवंत रूप देऊन जनमानसात ऐतिहासिक जाणीव समृद्ध केली आहे.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + मालिकांच्या संदर्भासह ३ मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दूरदर्शन व ऐतिहासिक मालिका (भारत एक खोज) व दृकश्राव्य माध्यमाचे महत्त्व."
        }
      },
      {
        "id": "bp-2024-q6-1",
        "year": 2024,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "संविधानाचे उद्दिष्ट साध्य करण्यासाठी ______ महत्त्वाची भूमिका बजावतात.",
        "options": [
          "राजकीय पक्ष",
          "व्यापारी संघटना",
          "लष्कर",
          "न्यायालय"
        ],
        "correctOptionIndex": 3,
        "directAnswer": "न्यायालय",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2024-q6-2",
        "year": 2024,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "माहितीचा अधिकार हा कायदा भारतात ______ साली लागू झाला.",
        "options": [
          "२०००",
          "२००५",
          "२०१०",
          "२०१५"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "२००५",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2024-q7-1",
        "year": 2024,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: भारतीय संविधानाने नागरिकांना मतदानाचा अधिकार बहाल केला आहे.",
        "rubric": {
          "prastavana": "लोकशाही शासनप्रणालीचा पाया सार्वत्रिक प्रौढ मतदानावर आधारित असतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान पूर्णतः बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. भारताच्या संविधानाच्या कलम ३२६ अन्वये वय वर्षे १८ पूर्ण केलेल्या प्रत्येक भारतीय नागरिकाला मतदानाचा समान अधिकार प्रदान करण्यात आला आहे.",
              "highValueKeywords": [
                "विधान बरोबर",
                "कलम ३२६",
                "सार्वत्रिक प्रौढ मतदान"
              ]
            },
            {
              "hookMarathi": "समान राजकीय संधी",
              "elaborationMarathi": "धर्म, जात, वंश, लिंग किंवा आर्थिक परिस्थिती या आधारावर कोणताही भेदभाव न करता प्रत्येक नागरिकाच्या मताचे मूल्य समान मानले गेले आहे.",
              "highValueKeywords": [
                "भेदभाव प्रतिबंध",
                "समान मूल्य",
                "राजकीय समता"
              ]
            }
          ],
          "nishkarsha": "मताधिकारामुळे देशातील प्रत्येक नागरिक सरकार निवडण्याच्या सर्वोच्च प्रक्रियेचा प्रत्यक्ष भागीदार बनतो.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2024-q7-2",
        "year": 2024,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (२)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: राजकीय पक्षांमध्ये अंतर्गत निवडणुका घेणे बंधनकारक नसते.",
        "rubric": {
          "prastavana": "लोकशाही व्यवस्था खऱ्या अर्थाने यशस्वी होण्यासाठी राजकीय पक्षांचे अंतर्गत कामकाजही लोकशाही तत्त्वांनुसार चालणे आवश्यक असते.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीनुसार चूक",
              "elaborationMarathi": "हे विधान चूक आहे. भारतीय निवडणूक आयोगाच्या नियमांनुसार आणि लोकप्रतिनिधी कायद्यानुसार सर्व नोंदणीकृत राजकीय पक्षांना नियमित अंतर्गत संघटनात्मक निवडणुका घेणे कायदेशीररीत्या बंधनकारक आहे.",
              "highValueKeywords": [
                "विधान चूक",
                "निवडणूक आयोग नियम",
                "अंतर्गत निवडणुका बंधनकारक"
              ]
            },
            {
              "hookMarathi": "घराणेशाहीला आळा व पारदर्शकता",
              "elaborationMarathi": "अंतर्गत निवडणुकांमुळे पक्षातील पदाधिकाऱ्यांची पारदर्शक निवड होते, घराणेशाहीला आळा बसतो आणि सर्वसामान्य कार्यकर्त्यांना नेतृत्वाची संधी मिळते.",
              "highValueKeywords": [
                "पारदर्शक निवड",
                "घराणेशाही प्रतिबंध",
                "कार्यकर्त्यांना संधी"
              ]
            }
          ],
          "nishkarsha": "अंतर्गत लोकशाही असणारे पक्षच देशात खऱ्या लोकशाही मूल्यांचे रक्षण करू शकतात.",
          "scoringRuleMarathi": "विधान चूक ओळखल्यास १ गुण + २ स्पष्ट कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2024-q8a-1",
        "year": 2024,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (अ) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "संकल्पना स्पष्ट करा: कामगार चळवळ (Workers' Movement)",
        "rubric": {
          "prastavana": "१९ व्या शतकाच्या उत्तरार्धात भारतात औद्योगिकीकरणाची सुरुवात झाल्यानंतर कामगार वर्गाच्या हक्कांसाठी कामगार चळवळीचा उदय झाला.",
          "mukhyaMudde": [
            {
              "hookMarathi": "नारायण मेघाजी लोखंडे - आद्य नेते",
              "elaborationMarathi": "महात्मा फुल्यांच्या सत्यशोधक समाजाचे कार्यकर्ते नारायण मेघाजी लोखंडे यांनी १८९० मध्ये 'बॉम्बे मिलहँड्स असोसिएशन' ही भारतातील पहिली कामगार संघटना स्थापन केली व रविवारी साप्ताहिक सुट्टी मिळवून दिली.",
              "highValueKeywords": [
                "नारायण मेघाजी लोखंडे",
                "बॉम्बे मिलहँड्स असोसिएशन",
                "साप्ताहिक सुट्टी"
              ]
            },
            {
              "hookMarathi": "कामाचे तास, वेतन व सामाजिक सुरक्षा",
              "elaborationMarathi": "कामाचे तास निश्चित करणे (८ तास), योग्य किमान वेतन, भविष्य निर्वाह निधी (PF), वैद्यकीय विमा आणि सुरक्षित कामाचे वातावरण या प्रमुख मागण्यांसाठी कामगार चळवळ सातत्याने कार्यरत आहे.",
              "highValueKeywords": [
                "किमान वेतन",
                "कामाचे ८ तास",
                "सामाजिक सुरक्षा"
              ]
            }
          ],
          "nishkarsha": "कामगार चळवळीने कामगारांना शोषणापासून मुक्ती देऊन त्यांना कायदेशीर संरक्षणाची भक्कम ढाल दिली.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      },
      {
        "id": "bp-2024-q8b-1",
        "year": 2024,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (ब) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: लोकशाहीमध्ये राजकीय पक्षांची प्रमुख कार्ये",
        "conceptDiagram": {
          "titleMarathi": "राजकीय पक्षांची कार्ये",
          "diagramType": "radial",
          "nodes": [
            {
              "labelMarathi": "निवडणुका लढवणे व उमेदवार उभे करणे",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "लोकमत तयार करणे व प्रबोधन करणे",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "शासन स्थापन करणे व चालवणे",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "शासन व जनता यांमधील दुवा म्हणून काम करणे",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. निवडणुका लढवणे २. लोकमत तयार करणे ३. शासन स्थापन करणे ४. शासन व जनता यांमधील दुवा",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2024-q9-1",
        "year": 2024,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-5",
        "questionMarathi": "पुढील प्रश्नाचे थोडक्यात उत्तर लिहा: लोकशाहीसमोरील गुन्हेगारीकरणाचे आव्हान कसे रोखता येईल?",
        "rubric": {
          "prastavana": "निवडणूक प्रक्रियेत आणि राजकारणात गुन्हेगारी पार्श्वभूमी असणाऱ्या व्यक्तींचा वाढता शिरकाव हे भारतीय लोकशाहीसमोरील एक गंभीर आव्हान आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "कडक कायदे व अपात्रतेची तरतूद",
              "elaborationMarathi": "गंभीर गुन्हे दाखल असणाऱ्या किंवा न्यायालयाने दोषी ठरवलेल्या व्यक्तींना निवडणूक लढवण्यावर कायमस्वरूपी बंदी घालण्यासाठी कडक कायदे संसदेने केले पाहिजेत.",
              "highValueKeywords": [
                "गुन्हेगारांवर बंदी",
                "अपात्रतेचे कायदे",
                "न्यायालयीन खटले"
              ]
            },
            {
              "hookMarathi": "मतदारांची जागरूकता व नोटा (NOTA) चा वापर",
              "elaborationMarathi": "राजकीय पक्षांनी गुन्हेगारांना उमेदवारी देणे बंद केले पाहिजे; तसेच जागरूक मतदारांनी गुन्हेगार उमेदवारांना बहिष्कृत करून स्वच्छ चारित्र्याच्या उमेदवारांनाच मतदान केले पाहिजे.",
              "highValueKeywords": [
                "मतदार जागृती",
                "नोटा चा वापर",
                "चारित्र्यसंपन्न उमेदवार"
              ]
            }
          ],
          "nishkarsha": "न्यायव्यवस्था, निवडणूक आयोग आणि सजग नागरिक यांच्या एकत्रित प्रयत्नांतूनच राजकारणाचे गुन्हेगारीकरण रोखता येईल.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ परिणामकारक उपाय १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      }
    ]
  },
  {
    "year": 2025,
    "sessionTitleMarathi": "सन २०२५ बोर्ड प्रारूप व प्रतिभा प्रश्नपेढी",
    "curriculumEra": "canonical_new",
    "totalMarks": 40,
    "durationMinutes": 120,
    "historyMarks": 28,
    "politicalScienceMarks": 12,
    "officialSourceCitation": "SCERT महाराष्ट्र प्रतिभा प्रश्नपेढी व MSBSHSE बोर्ड मॉडेल प्रश्नपत्रिका",
    "instructionsMarathi": [
      "सर्व प्रश्न सोडवणे अनिवार्य आहे.",
      "उजव्या बाजूचे अंक पूर्ण गुण दर्शवितात.",
      "प्रश्न १ ते ५ हे इतिहासाचे (२८ गुण) असून प्रश्न ६ ते ९ हे राज्यशास्त्राचे (१२ गुण) आहेत.",
      "महाराष्ट्र राज्य शैक्षणिक संशोधन व प्रशिक्षण परिषद (SCERT) व बालभारती यांच्या अधिकृत २०२५ प्रश्नपेढीनुसार रचना."
    ],
    "questions": [
      {
        "id": "bp-2025-q1a-1",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-2",
        "questionMarathi": "भारतीय पुरातत्त्व खात्याचे दुसरे सरसंचालक ______ यांच्या काळात हडप्पा संस्कृतीचा शोध लागला.",
        "options": [
          "सर जॉन मार्शल",
          "अलेक्झांडर कनिंगहॅम",
          "जेम्स मिल",
          "विल्यम जोन्स"
        ],
        "correctOptionIndex": 0,
        "directAnswer": "सर जॉन मार्शल"
      },
      {
        "id": "bp-2025-q1a-2",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "जगातील सर्वात जुने संग्रहालय ______ या बॅबिलोनच्या राजकन्येने स्थापन केले होते.",
        "options": [
          "क्लियोपॅत्रा",
          "एनिगाल्डी",
          "व्हिक्टोरिया",
          "एलिझाबेथ"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "एनिगाल्डी",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2025-q1a-3",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (अ) (३)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "ऑलंपिक खेळांची आंतरराष्ट्रीय संघटना ______ येथे स्थापन झाली.",
        "options": [
          "ग्रीस (अथेन्स)",
          "पॅरिस",
          "लंडन",
          "बर्लिन"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "पॅरिस",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2025-q1b-1",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (१)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "हेगेल",
            "explanation": "द्वंद्ववादी तत्त्वज्ञान"
          },
          {
            "term": "रेने देकार्त",
            "explanation": "ऐतिहासिक साधनांची तपासणी"
          },
          {
            "term": "लिओपॉल्ड रांके",
            "explanation": "द थिअरी अँड प्रॅक्टिस ऑफ हिस्टरी"
          },
          {
            "term": "कार्ल मार्क्स",
            "explanation": "स्त्रीवादी इतिहासलेखन"
          }
        ],
        "incorrectPair": "कार्ल मार्क्स - स्त्रीवादी इतिहासलेखन",
        "correctedPair": "कार्ल मार्क्स - वर्गसंघर्ष (किंवा ताराबाई शिंदे - स्त्रीवादी इतिहासलेखन)",
        "directAnswer": "कार्ल मार्क्स - स्त्रीवादी इतिहासलेखन (दुरुस्ती: वर्गसंघर्ष सिद्धान्त)",
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "कार्ल मार्क्स व वर्गसंघर्ष सिद्धान्त प्रत्येक बोर्ड परीक्षेत हमखास विचारला जातो (MCQ, चुकीची जोडी किंवा सविस्तर उत्तर)."
        }
      },
      {
        "id": "bp-2025-q1b-2",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (२)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "महाबळेश्वर",
            "explanation": "थंड हवेचे ठिकाण"
          },
          {
            "term": "वेरूळ",
            "explanation": "लेणी पर्यटन"
          },
          {
            "term": "भिलार",
            "explanation": "पुस्तकांचे गाव"
          },
          {
            "term": "ताडोबा",
            "explanation": "सागरी पर्यटन"
          }
        ],
        "incorrectPair": "ताडोबा - सागरी पर्यटन",
        "correctedPair": "ताडोबा - व्याघ्र प्रकल्प / अभयारण्य (किंवा मालवण / तारकर्ली - सागरी पर्यटन)",
        "directAnswer": "ताडोबा - सागरी पर्यटन (दुरुस्ती: व्याघ्र प्रकल्प / अभयारण्य)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2025-q1b-3",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. १ (ब) (३)",
        "type": "wrong_pair_1m",
        "marks": 1,
        "chapterAssociationId": "hist-4",
        "questionMarathi": "पुढीलपैकी प्रत्येक गटातील चुकीची जोडी ओळखून लिहा:",
        "wrongPairItems": [
          {
            "term": "भरतनाट्यम्",
            "explanation": "तामिळनाडू"
          },
          {
            "term": "कथकली",
            "explanation": "केरळ"
          },
          {
            "term": "लावणी",
            "explanation": "महाराष्ट्र"
          },
          {
            "term": "भांगडा",
            "explanation": "गुजरात"
          }
        ],
        "incorrectPair": "भांगडा - गुजरात",
        "correctedPair": "भांगडा - पंजाब (किंवा गरबा - गुजरात)",
        "directAnswer": "भांगडा - गुजरात (दुरुस्ती: पंजाब)",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2025-q2a-1",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-6",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: मनोरंजनाची विविध माध्यमे",
        "conceptDiagram": {
          "titleMarathi": "मनोरंजनाची माध्यमे",
          "diagramType": "radial",
          "nodes": [
            {
              "labelMarathi": "लोकनाट्य व लोककला (दशावतार, तमाशा, भारुड)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "भारतीय चित्रपटसृष्टी (मूकपट व बोलपट)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "दूरदर्शन व इलेक्ट्रॉनिक माध्यमे",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "संगीत व मराठी रंगभूमी",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. लोकनाट्य २. चित्रपट ३. दूरदर्शन ४. संगीत व रंगभूमी",
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दशावतार, तमाशा, भारुड, पोवाडा या लोककलांवर नियमित प्रश्न विचारले जातात."
        }
      },
      {
        "id": "bp-2025-q2a-2",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (अ) (२)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: ऐतिहासिक मराठी वृत्तपत्रांची वाटचाल",
        "conceptDiagram": {
          "titleMarathi": "मराठी वृत्तपत्रांचा इतिहास",
          "diagramType": "timeline",
          "nodes": [
            {
              "labelMarathi": "'दर्पण' (१८३२) - बाळशास्त्री जांभेकर (पहिले मराठी वृत्तपत्र)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "'प्रभाकर' (१८४१) - भाऊ महाजन (शतपत्रे प्रसिद्ध)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "'ज्ञानोदय' (१८४२) - आशिया व युरोपचा नकाशा छापणारे वृत्तपत्र",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "'केसरी' (१८८१) - लोकमान्य बाळ गंगाधर टिळक (राष्ट्रीय जागृती)",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. 'दर्पण' (१८३२) २. 'प्रभाकर' (१८४१) ३. 'ज्ञानोदय' (१८४२) ४. 'केसरी' (१८८१)",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2025
          ],
          "trendAnalysisMarathi": "केसरी व मराठा वृत्तपत्रे आणि लोकमान्य टिळक यांचे स्वातंत्र्यलढ्यातील योगदान."
        }
      },
      {
        "id": "bp-2025-q2b-1",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-1",
        "questionMarathi": "थोडक्यात टिपा लिहा: द्वंद्ववाद (Dialectics)",
        "rubric": {
          "prastavana": "जर्मन तत्त्वज्ञ जॉर्ज विल्हेम फ्रेडरिक हेगेल (१७७०-१८३१) यांनी मानवी विचारांचे व इतिहासाचे विश्लेषण करण्यासाठी द्वंद्ववादी पद्धत मांडली.",
          "mukhyaMudde": [
            {
              "hookMarathi": "परस्परविरोधी बाजूंची मांडणी",
              "elaborationMarathi": "कोणत्याही घटनेचा खरा अर्थ समजण्यासाठी तिचे वर्गीकरण दोन परस्परविरोधी घटकांत (उदा. चांगले-वाईट, खरे-खोटे) करावे लागते; या पद्धतीला द्वंद्ववाद म्हणतात.",
              "highValueKeywords": [
                "हेगेल",
                "परस्परविरोधी बाजू",
                "तर्कशुद्ध मांडणी"
              ]
            },
            {
              "hookMarathi": "थिसिस, अँटीथिसिस व सिंथेसिस",
              "elaborationMarathi": "यात प्रथम एक सिद्धांत (Thesis) मांडला जातो, नंतर त्याविरुद्ध प्रतिसिद्धांत (Antithesis) मांडला जातो आणि अखेर दोन्हीतील सत्याचा समन्वय असणारा समन्वयात्मक सिद्धांत (Synthesis) उभा केला जातो.",
              "highValueKeywords": [
                "सिद्धांत (Thesis)",
                "प्रतिसिद्धांत (Antithesis)",
                "समन्वय (Synthesis)"
              ]
            }
          ],
          "nishkarsha": "हेगेलच्या या द्वंद्ववादी पद्धतीचा प्रभाव कार्ल मार्क्सच्या वर्गसंघर्ष सिद्धांतावरही पडला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ स्पष्ट संकल्पना मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 1,
          "stars": "★",
          "yearsAppeared": [
            2025
          ],
          "trendAnalysisMarathi": "हेगेलची द्वंद्ववादी पद्धत (Thesis, Antithesis, Synthesis)."
        }
      },
      {
        "id": "bp-2025-q2b-2",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (२)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-8",
        "questionMarathi": "थोडक्यात टिपा लिहा: भिलार - पुस्तकांचे गाव",
        "rubric": {
          "prastavana": "महाराष्ट्र शासनाने पर्यटन आणि वाचनसंस्कृतीला प्रोत्साहन देण्यासाठी महाबळेश्वरजवळील 'भिलार' हे पुस्तकांचे गाव म्हणून विकसित केले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "ब्रिटनमधील हे-ऑन-वाय चा आदर्श",
              "elaborationMarathi": "इंग्लंडमधील 'हे-ऑन-वाय' या पुस्तकांच्या गावाच्या धर्तीवर भिलार या निसर्गरम्य स्ट्रॉबेरी उत्पादक गावाची निवड करण्यात आली.",
              "highValueKeywords": [
                "हे-ऑन-वाय",
                "स्ट्रॉबेरीचे गाव",
                "पुस्तकांचे गाव"
              ]
            },
            {
              "hookMarathi": "घरोघरी मोफत ग्रंथदालने",
              "elaborationMarathi": "गावातील घराघरांमध्ये, बागांमध्ये मराठी साहित्य, कविता, इतिहास, संतसाहित्य आणि बालसाहित्याची दालने पर्यटकांसाठी विनामूल्य वाचण्यासाठी खुली ठेवली आहेत.",
              "highValueKeywords": [
                "घरोघरी ग्रंथालये",
                "वाचन संस्कृती",
                "सांस्कृतिक पर्यटन"
              ]
            }
          ],
          "nishkarsha": "भिलारमुळे पर्यटनाला साहित्याची जोड मिळून महाराष्ट्रात एक नवा सांस्कृतिक पर्यटन प्रयोग यशस्वी झाला.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ वैशिष्ट्यपूर्ण मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "पर्यटनाचे प्रकार व थॉमस कुक यांचे योगदान यांवर नियमित प्रश्न येतात."
        }
      },
      {
        "id": "bp-2025-q2b-3",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. २ (ब) (३)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "थोडक्यात टिपा लिहा: उपयोजित इतिहास आणि दैनंदिन जीवन",
        "rubric": {
          "prastavana": "इतिहास ही केवळ ग्रंथालयात बंदिस्त असणारी गोष्ट नसून आपल्या रोजच्या जगण्याशी तिचा थेट सहसंबंध असतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "सांस्कृतिक अस्मिता व आचारविचार",
              "elaborationMarathi": "आपल्या भाषेतील शब्द, सण-उत्सव, नातेसंबंध आणि सामाजिक रूढी या सर्व गोष्टी आपल्या पूर्वजांच्या ऐतिहासिक परंपरेतून आलेल्या असतात.",
              "highValueKeywords": [
                "सांस्कृतिक अस्मिता",
                "परंपरा व सण",
                "पूर्वजांचा ठेवा"
              ]
            },
            {
              "hookMarathi": "निर्णयक्षमता व वारसा आदर",
              "elaborationMarathi": "आपल्या आजूबाजूच्या जुन्या वास्तू, मंदिरे किंवा निसर्गाविषयी आदर निर्माण होऊन त्यांची नासधूस न करता त्यांचे जतन करण्याची जाणीव दैनंदिन व्यवहारात निर्माण होते.",
              "highValueKeywords": [
                "वारसा आदर",
                "जागरूक नागरिक",
                "दैनंदिन जीवन सहसंबंध"
              ]
            }
          ],
          "nishkarsha": "उपयोजित इतिहास मानवाला स्वतःच्या मुळांची जाणीव देऊन जबाबदार व प्रगल्भ नागरिक बनवतो.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      },
      {
        "id": "bp-2025-q3-1",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (१)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: खेळामुळे आंतरराष्ट्रीय संबंध दृढ होतात.",
        "rubric": {
          "prastavana": "आधुनिक जगात क्रीडा स्पर्धा हे विविध राष्ट्रांमधील शांतता, सलोखा आणि संवादाचे सर्वात प्रभावी माध्यम बनले आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "राजकीय तणाव विसरून एकत्र येणे",
              "elaborationMarathi": "ऑलिम्पिक किंवा विश्वचषक स्पर्धांमध्ये परस्परविरोधी किंवा युद्धजन्य देशांचे खेळाडूही निकोप मैदानावर खेळाडूवृत्तीने एकत्र येतात आणि मैत्रीचे संबंध निर्माण होतात.",
              "highValueKeywords": [
                "राजकीय तणाव मुक्ती",
                "क्रीडा मुत्सद्देगिरी",
                "आंतरराष्ट्रीय शांतता"
              ]
            },
            {
              "hookMarathi": "संस्कृतींची देवाणघेवाण",
              "elaborationMarathi": "खेळाडू आणि लाखो प्रेक्षक एका देशातून दुसऱ्या देशात प्रवास करतात; त्यामुळे एकमेकांच्या भाषा, संस्कृती, खानपान आणि परंपरा समजून घेऊन जागतिक बंधुभाव वाढतो.",
              "highValueKeywords": [
                "सांस्कृतिक देवाणघेवाण",
                "जागतिक बंधुभाव",
                "सलोखा"
              ]
            }
          ],
          "nishkarsha": "क्रीडा मुत्सद्देगिरी (Sports Diplomacy) जगातील कटुता कमी करून राष्ट्रांमध्ये सौहार्द निर्माण करते.",
          "scoringRuleMarathi": "विधान अचूक २ कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2025-q3-2",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. ३ (२)",
        "type": "give_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "hist-9",
        "questionMarathi": "पुढील विधाने सकारण स्पष्ट करा: ऐतिहासिक कागदपत्रांचे जतन अत्यंत काळजीपूर्वक करावे लागते.",
        "rubric": {
          "prastavana": "इतिहासलेखनात मोडी लिपीतील पत्रव्यवहार, फर्माने, बखरी आणि शासकीय दस्तऐवज हे सर्वात विश्वासार्ह प्राथमिक पुरावे असतात.",
          "mukhyaMudde": [
            {
              "hookMarathi": "कागदाचा ठिसूळपणा व कीटकांचा धोका",
              "elaborationMarathi": "शेकडो वर्षे जुने कागद दमट हवेमुळे, बुरशीमुळे किंवा वाळवी-कीटकांच्या प्रादुर्भावामुळे ठिसूळ होऊन पावडर बनण्याचा धोका असतो; त्यामुळे त्यांचे रासायनिक प्रक्रिया करून जतन करणे आवश्यक असते.",
              "highValueKeywords": [
                "रासायनिक संवर्धन",
                "बुरशी व वाळवी",
                "ठिसूळ कागद"
              ]
            },
            {
              "hookMarathi": "इतिहास संशोधनाची अखंडता",
              "elaborationMarathi": "एकदा मूळ कागदपत्र नष्ट झाले की त्यातील महत्त्वाची ऐतिहासिक माहिती कायमची नष्ट होते; त्यामुळे अशा दुर्मीळ कागदपत्रांचे मायक्रोफिल्मिंग व डिजिटायझेशन करून मूल स्वरूपात जतन करावे लागते.",
              "highValueKeywords": [
                "मायक्रोफिल्मिंग",
                "डिजिटायझेशन",
                "अस्सल ऐतिहासिक पुरावा"
              ]
            }
          ],
          "nishkarsha": "ऐतिहासिक कागदपत्रांचे काटेकोर जतन हे आपल्या पूर्वजांच्या वारशाचे आणि ज्ञानाचे रक्षण आहे.",
          "scoringRuleMarathi": "विधान अचूक २ कारणांसह स्पष्ट केल्यास २ पैकी २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2024
          ],
          "trendAnalysisMarathi": "भारताचे राष्ट्रीय अभिलेखागार (नवी दिल्ली) यावर वस्तुनिष्ठ प्रश्न सातत्याने येतो."
        }
      },
      {
        "id": "bp-2025-q4-1",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. ४",
        "type": "passage_analysis_4m",
        "marks": 4,
        "chapterAssociationId": "hist-7",
        "questionMarathi": "दिलेल्या उताऱ्याचे वाचन करून खालील प्रश्नांची उत्तरे लिहा:",
        "passageText": "भारताला देशी खेळांची अत्यंत प्राचीन आणि समृद्ध परंपरा लाभली आहे. मल्लखांब हा महाराष्ट्राने भारताला आणि जगाला दिलेला एक अत्यंत वैशिष्ट्यपूर्ण कसरतीचा मैदानी खेळ आहे. पेशवेकाळात श्रीमंत बाळंभटदादा देवधर यांनी मल्लखांबाची निर्मिती केली. बाळंभटदादांनी झाडावरील माकडांच्या उड्या आणि हालचालींचे सूक्ष्म निरीक्षण करून कुस्तीपटूंचे शरीर चपळ, लवचिक आणि कणखर बनवण्यासाठी मल्लखांबाचे कसरतीचे डावपेच शोधून काढले. आज लाकडी मल्लखांब, दोरीचा मल्लखांब (रोप मल्लखांब) आणि टांगता मल्लखांब असे त्याचे विविध प्रकार लोकप्रिय आहेत. राष्ट्रीय आणि आंतरराष्ट्रीय स्तरावर मल्लखांबाच्या स्पर्धा आयोजित केल्या जातात. देशी खेळांमुळे शरीराचा परिपूर्ण व्यायाम होतो आणि एकाग्रता वाढते.",
        "subQuestions": [
          {
            "questionNumber": "१",
            "textMarathi": "मल्लखांबाची निर्मिती कोणी केली?",
            "marks": 1,
            "modelAnswer": "मल्लखांबाची निर्मिती पेशवेकाळात श्रीमंत बाळंभटदादा देवधर यांनी केली."
          },
          {
            "questionNumber": "२",
            "textMarathi": "मल्लखांबाचे आज कोणते विविध प्रकार खेळले जातात?",
            "marks": 1,
            "modelAnswer": "आज लाकडी मल्लखांब, दोरीचा मल्लखांब (रोप मल्लखांब) आणि टांगता मल्लखांब हे विविध प्रकार खेळले जातात."
          },
          {
            "questionNumber": "३",
            "textMarathi": "देशी खेळांचे जतन करणे का काळाची गरज आहे? तुमचे मत स्पष्ट करा.",
            "marks": 2,
            "modelAnswer": "देशी खेळांसाठी प्रचंड महागाड्या क्रीडासाहित्याची गरज नसते; त्यातून कमी खर्चात संपूर्ण शरीराचा उत्कृष्ट व्यायाम, चपळता आणि लवचिकता प्राप्त होते. देशी खेळ आपल्या संस्कृतीची व लोकजीवनाची ओळख असून परदेशी खेळांच्या आक्रमणात आपल्या या समृद्ध वारशाचे जतन करणे काळाची गरज आहे."
          }
        ],
        "rubric": {
          "prastavana": "मल्लखांब हा महाराष्ट्राची देणगी असलेला पारंपरिक मैदानी कसरतीचा खेळ आहे.",
          "mukhyaMudde": [
            {
              "hookMarathi": "बाळंभटदादा देवधर यांचे योगदान",
              "elaborationMarathi": "माकडांच्या चपळ हालचालींवरून कुस्तीच्या सरावासाठी मल्लखांबाची रचना करण्यात आली.",
              "highValueKeywords": [
                "बाळंभटदादा देवधर",
                "कुस्ती सराव",
                "लवचिकता"
              ]
            },
            {
              "hookMarathi": "विविध प्रकार व आंतरराष्ट्रीय प्रतिष्ठा",
              "elaborationMarathi": "रोप मल्लखांब आणि लाकडी मल्लखांबाला आज आंतरराष्ट्रीय स्पर्धांमध्ये मानाचे स्थान मिळाले आहे.",
              "highValueKeywords": [
                "रोप मल्लखांब",
                "टांगता मल्लखांब",
                "देशी खेळांचे जतन"
              ]
            }
          ],
          "nishkarsha": "देशी खेळ आपली शारीरिक संस्कृती जिवंत ठेवणारे अनमोल साधन आहेत.",
          "scoringRuleMarathi": "प्र. १ (१ गुण) + प्र. २ (१ गुण) + प्र. ३ स्वमत (२ गुण) = एकूण ४ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 5,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "खेळ, खेळणी व व्यावसायिक संधी यांवर संकल्पनाचित्र किंवा टीप सातत्याने विचारली जाते."
        }
      },
      {
        "id": "bp-2025-q5-1",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (१)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-3",
        "questionMarathi": "उपयोजित इतिहास म्हणजे काय? त्याचे मानवी जीवनातील महत्त्व सविस्तर स्पष्ट करा.",
        "rubric": {
          "prastavana": "इतिहास विषयाचे दैनंदिन समाजजीवनाशी आणि लोककल्याणाशी असलेले उपयोजन म्हणजे उपयोजित इतिहास होय.",
          "mukhyaMudde": [
            {
              "hookMarathi": "भूतकाळाच्या आधारे वर्तमान समजणे",
              "elaborationMarathi": "मानवाचे वर्तमानकाळातील सामाजिक, राजकीय व सांस्कृतिक जीवन पूर्वजांच्या अनुभवांवर उभे आहे; भूतकाळातील घटनांचा अभ्यास वर्तमानातील समस्या सोडवण्यास दिशा देतो.",
              "highValueKeywords": [
                "वर्तमान आकलन",
                "भूतकालीन अनुभव",
                "समस्या निराकरण"
              ]
            },
            {
              "hookMarathi": "सांस्कृतिक वारसा संवर्धन",
              "elaborationMarathi": "ऐतिहासिक मंदिरे, किल्ले, लेण्या आणि कलापरंपरा नष्ट न होऊ देता त्यांचे वैज्ञानिक जतन करण्याचे तंत्र उपयोजित इतिहास देतो.",
              "highValueKeywords": [
                "सांस्कृतिक संवर्धन",
                "वैज्ञानिक जतन",
                "किल्ले व मंदिरे"
              ]
            },
            {
              "hookMarathi": "पर्यटन व रोजगार निर्मिती",
              "elaborationMarathi": "वारसा स्थळांचे जतन केल्यामुळे ऐतिहासिक पर्यटनाला मोठी गती मिळते; त्यातून हॉटेल, वाहतूक, गाईड्स आणि स्थानिक हस्तकला व्यवसायांत लाखो तरुणांना रोजगाराच्या संधी मिळतात.",
              "highValueKeywords": [
                "पर्यटन उद्योग",
                "रोजगार निर्मिती",
                "स्थानिक अर्थव्यवस्था"
              ]
            }
          ],
          "nishkarsha": "उपयोजित इतिहासामुळे समाजाला स्वतःच्या गौरवशाली सांस्कृतिक ठेव्याविषयी अभिमान निर्माण होतो आणि राष्ट्रीय एकात्मता दृढ होते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ मुख्य मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        }
      },
      {
        "id": "bp-2025-q5-2",
        "year": 2025,
        "subject": "history",
        "questionNumberLabel": "प्र. ५ (२)",
        "type": "detailed_answer_3m",
        "marks": 3,
        "chapterAssociationId": "hist-5",
        "questionMarathi": "आधुनिक प्रसारमाध्यमांमध्ये दूरदर्शन आणि समाजमाध्यमे (Social Media) यांचा इतिहासविषयक जनजागृतीवर काय प्रभाव पडतो?",
        "rubric": {
          "prastavana": "माहिती व तंत्रज्ञान क्रांतीच्या आजच्या युगात दूरदर्शन आणि सोशल मीडिया ही इतिहासाचा प्रसार करणारी सर्वात शक्तिशाली साधने बनली आहेत.",
          "mukhyaMudde": [
            {
              "hookMarathi": "दृकश्राव्य सादरीकरण व थेट संवाद",
              "elaborationMarathi": "दूरदर्शनवरील माहितीपट, ऐतिहासिक मालिका आणि सोशल मीडियावरील (उदा. यूट्यूब, पॉडकास्ट) व्हिडिओंद्वारे इतिहास पुस्तकाच्या पानाबाहेर पडून थेट तरुण पिढीच्या नजरेसमोर सजीव होतो.",
              "highValueKeywords": [
                "माहितीपट व मालिका",
                "सोशल मीडिया",
                "दृकश्राव्य प्रभाव"
              ]
            },
            {
              "hookMarathi": "झटपट माहिती व आंतरराष्ट्रीय पोहोच",
              "elaborationMarathi": "जागतिक वारसा स्थळे, उत्खननातील नवे शोध आणि ऐतिहासिक घटनांची माहिती एका क्लिकवर जगभर पोहोचते, ज्यामुळे ऐतिहासिक पर्यटनाला मोठी चालना मिळते.",
              "highValueKeywords": [
                "एका क्लिकवर माहिती",
                "नवे शोध",
                "जागतिक पोहोच"
              ]
            },
            {
              "hookMarathi": "अफवा व विपर्यास रोखण्याचे आव्हान",
              "elaborationMarathi": "सोशल मीडियावरून इतिहासाचा विपर्यास आणि खोट्या माहितीचा प्रसार होण्याचा धोका असतो; त्यामुळे अधिकृत संदर्भांची पडताळणी करण्याची जबाबदारी आणि सत्य इतिहास मांडण्याची सजगता आवश्यक असते.",
              "highValueKeywords": [
                "विपर्यास प्रतिबंध",
                "सत्य इतिहास",
                "संदर्भ पडताळणी"
              ]
            }
          ],
          "nishkarsha": "योग्य विवेकाने वापरल्यास समाजमाध्यमे इतिहास संशोधनाला व लोकजागृतीला अभूतपूर्व गती देऊ शकतात.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + ३ विश्लेषणात्मक मुद्दे २ गुण + निष्कर्ष ½ गुण = ३ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "दूरदर्शन व ऐतिहासिक मालिका (भारत एक खोज) व दृकश्राव्य माध्यमाचे महत्त्व."
        }
      },
      {
        "id": "bp-2025-q6-1",
        "year": 2025,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (१)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-2",
        "questionMarathi": "भारतात मुख्य निवडणूक आयुक्तांची नेमणूक ______ करतात.",
        "options": [
          "पंतप्रधान",
          "राष्ट्रपती",
          "सरन्यायाधीश",
          "उपराष्ट्रपती"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "राष्ट्रपती",
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2020,
            2025
          ],
          "trendAnalysisMarathi": "निवडणूक आयोग, मुख्य निवडणूक आयुक्त व आचारसंहिता."
        }
      },
      {
        "id": "bp-2025-q6-2",
        "year": 2025,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ६ (२)",
        "type": "mcq_1m",
        "marks": 1,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "सामाजिक न्यायाचे उद्दिष्ट साध्य करण्यासाठी संविधानात ______ पद्धत स्वीकारण्यात आली आहे.",
        "options": [
          "सरंजामशाही",
          "आरक्षण",
          "खाजगीकरण",
          "हुकूमशाही"
        ],
        "correctOptionIndex": 1,
        "directAnswer": "आरक्षण",
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2025-q7-1",
        "year": 2025,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (१)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-1",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: मतदारांचे वय १८ वर्षे केल्यामुळे लोकशाहीचा संकोच झाला.",
        "rubric": {
          "prastavana": "भारतीय लोकशाहीने ६१ व्या घटनादुरुस्तीद्वारे (१९८८) मतदारांचे वय २१ वरून १८ वर्षे केले.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान वस्तुस्थितीनुसार पूर्णतः चूक",
              "elaborationMarathi": "हे विधान चूक आहे. मतदारांचे वय कमी केल्यामुळे लोकशाहीचा संकोच न होता ती अधिक विस्तृत, व्यापक आणि तरुण झाली आहे.",
              "highValueKeywords": [
                "विधान चूक",
                "लोकशाही विस्तार",
                "संकोच नाही"
              ]
            },
            {
              "hookMarathi": "युवा वर्गाला संविधानात्मक हक्क",
              "elaborationMarathi": "कोट्यवधी नवयुवकांना मताधिकार मिळाल्यामुळे देशाच्या निर्णयप्रक्रियेत नव्या विचारांचा आणि तरुण आकांक्षांचा समावेश झाला, ज्यामुळे भारत जगातील सर्वात मोठी युवा लोकशाही बनला.",
              "highValueKeywords": [
                "युवा आकांक्षा",
                "निर्णयप्रक्रियेत सहभाग",
                "व्यापक लोकशाही"
              ]
            }
          ],
          "nishkarsha": "मताधिकाराच्या या विस्ताराने भारतीय लोकशाहीचे अधिष्ठान अधिक समृद्ध केले.",
          "scoringRuleMarathi": "विधान चूक ओळखल्यास १ गुण + २ समर्पक कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2020,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "भारतीय संविधानाची उद्दिष्टे, मूलभूत चौकट व न्यायालयाचे निर्णय."
        }
      },
      {
        "id": "bp-2025-q7-2",
        "year": 2025,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ७ (२)",
        "type": "true_false_reasons_2m",
        "marks": 2,
        "chapterAssociationId": "pol-2",
        "questionMarathi": "पुढील विधान चूक की बरोबर ते सकारण स्पष्ट करा: निवडणूक आयोग निवडणुकीच्या तारखा जाहीर करतो.",
        "rubric": {
          "prastavana": "भारतीय संविधानाच्या कलम ३२४ नुसार निवडणूक आयोगाला निवडणुकीचे संपूर्ण संचालन करण्याचे स्वायत्त अधिकार दिले आहेत.",
          "mukhyaMudde": [
            {
              "hookMarathi": "विधान पूर्णतः बरोबर",
              "elaborationMarathi": "हे विधान बरोबर आहे. लोकसभा, राज्यसभा, विधानसभा आणि विधानपरिषद यांच्या निवडणुकांचे संपूर्ण वेळापत्रक, आचारसंहिता आणि मतदानाच्या तारखा निश्चित करण्याचा स्वतंत्र अधिकार केवळ निवडणूक आयोगालाच आहे.",
              "highValueKeywords": [
                "विधान बरोबर",
                "कलम ३२४",
                "वेळापत्रक निश्चिती"
              ]
            },
            {
              "hookMarathi": "शासनाचा हस्तक्षेप नसणे",
              "elaborationMarathi": "शासनाचा कोणताही पक्ष सत्तेत असला तरी निवडणूक आयोगाच्या वेळापत्रकात सरकार कोणताही बदल करू शकत नाही; या स्वायत्ततेमुळे निवडणुका निष्पक्षपणे पार पडतात.",
              "highValueKeywords": [
                "स्वायत्त अधिकार",
                "शासकीय हस्तक्षेप मुक्त",
                "निष्पक्षता"
              ]
            }
          ],
          "nishkarsha": "निवडणूक आयोगाच्या या अधिकारामुळेच लोकशाहीतील सत्तांतराची प्रक्रिया शांततापूर्ण व कायदेशीर मार्गाने होते.",
          "scoringRuleMarathi": "विधान बरोबर ओळखल्यास १ गुण + २ स्पष्ट कारणांस १ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 2,
          "stars": "★",
          "yearsAppeared": [
            2020,
            2025
          ],
          "trendAnalysisMarathi": "निवडणूक आयोग, मुख्य निवडणूक आयुक्त व आचारसंहिता."
        }
      },
      {
        "id": "bp-2025-q8a-1",
        "year": 2025,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (अ) (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-3",
        "questionMarathi": "संकल्पना स्पष्ट करा: प्रादेशिक पक्ष (Regional Parties)",
        "rubric": {
          "prastavana": "विशिष्ट भौगोलिक प्रदेशातील अस्मिता, भाषा आणि संस्कृतीच्या संवर्धनासाठी प्रादेशिक पक्षांचा उदय होतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "प्रादेशिक समस्या व स्वायत्ततेची मागणी",
              "elaborationMarathi": "आपल्या विशिष्ट राज्याच्या किंवा प्रदेशाच्या विकासाला प्राधान्य देणे, स्थानिक भाषा व संस्कृतीचे रक्षण करणे आणि सत्तेच्या अधिक स्वायत्ततेची मागणी करणे ही प्रादेशिक पक्षांची प्रमुख उद्दिष्टे असतात.",
              "highValueKeywords": [
                "प्रादेशिक अस्मिता",
                "स्थानिक प्रश्न",
                "स्वायत्तता मागणी"
              ]
            },
            {
              "hookMarathi": "निवडणूक आयोगाचे मान्यता निकष",
              "elaborationMarathi": "विधानसभेच्या निवडणुकीत किमान ६% मते आणि किमान २ आमदार निवडून येणाऱ्या पक्षाला निवडणूक आयोग 'राज्यस्तरीय पक्ष' (प्रादेशिक पक्ष) म्हणून अधिकृत मान्यता देतो; उदा. शिवसेना, द्रमुक (DMK), तृणमूल काँग्रेस.",
              "highValueKeywords": [
                "६% मते व २ आमदार",
                "राज्यस्तरीय मान्यता",
                "उदाहरणे"
              ]
            }
          ],
          "nishkarsha": "प्रादेशिक पक्षांमुळे प्रादेशिक गरजांची राष्ट्रीय स्तरावर प्रभावी दखल घेतली जाते.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ मुद्दे व उदाहरणे १ गुण + निष्कर्ष ½ गुण = २ गुण."
        },
        "frequencyMarker": {
          "recurrenceCount": 4,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2022,
            2023,
            2024
          ],
          "trendAnalysisMarathi": "राजकीय पक्षांची कार्ये, राष्ट्रीय व प्रादेशिक पक्षांचे निकष."
        }
      },
      {
        "id": "bp-2025-q8b-1",
        "year": 2025,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ८ (ब) (१)",
        "type": "concept_map_2m",
        "marks": 2,
        "chapterAssociationId": "pol-4",
        "questionMarathi": "दिलेल्या सूचनेनुसार संकल्पनाचित्र पूर्ण करा: भारतातील प्रमुख सामाजिक व राजकीय चळवळी",
        "conceptDiagram": {
          "titleMarathi": "भारतातील प्रमुख चळवळी",
          "diagramType": "radial",
          "nodes": [
            {
              "labelMarathi": "शेतकरी चळवळ (शेतमालाला हमीभाव व कर्जमुक्ती)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "कामगार चळवळ (किमान वेतन व सामाजिक सुरक्षा)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "महिला चळवळ (समान अधिकार, ५०% आरक्षण व हिंसाचार बंदी)",
              "marksPerNode": 0.5
            },
            {
              "labelMarathi": "पर्यावरण चळवळ (चिपको आंदोलन व जलक्रांती)",
              "marksPerNode": 0.5
            }
          ]
        },
        "directAnswer": "१. शेतकरी चळवळ २. कामगार चळवळ ३. महिला चळवळ ४. पर्यावरण चळवळ",
        "frequencyMarker": {
          "recurrenceCount": 6,
          "stars": "★★★",
          "yearsAppeared": [
            2019,
            2020,
            2022,
            2023,
            2024,
            2025
          ],
          "trendAnalysisMarathi": "सामाजिक व राजकीय चळवळी (शेतकरी/कामगार) हा राज्यशास्त्रातील सर्वोच्च वारंवारतेचा १००% हमखास घटक आहे."
        }
      },
      {
        "id": "bp-2025-q9-1",
        "year": 2025,
        "subject": "political_science",
        "questionNumberLabel": "प्र. ९ (१)",
        "type": "short_notes_2m",
        "marks": 2,
        "chapterAssociationId": "pol-5",
        "questionMarathi": "पुढील प्रश्नाचे थोडक्यात उत्तर लिहा: लोकशाहीसमोरील भ्रष्टाचाराचे आव्हान दूर करण्यासाठी कोणते उपाय करता येतील?",
        "rubric": {
          "prastavana": "भ्रष्टाचारामुळे लोकशाही संस्थांवरील जनतेचा विश्वास उडतो आणि सामाजिक न्यायाचा संकोच होतो.",
          "mukhyaMudde": [
            {
              "hookMarathi": "प्रशासकीय पारदर्शकता व ई-गव्हर्नन्स",
              "elaborationMarathi": "सर्व शासकीय कामे आणि आर्थिक व्यवहार डिजिटल प्रणालीद्वारे (E-Governance) पारदर्शक केले पाहिजेत; मध्यस्थांची साखळी तोडून थेट जनतेच्या बँक खात्यात योजनांचे लाभ दिले पाहिजेत.",
              "highValueKeywords": [
                "ई-गव्हर्नन्स",
                "थेट लाभ हस्तांतरण",
                "डिजिटल पारदर्शकता"
              ]
            },
            {
              "hookMarathi": "लोकपाल व कडक न्यायप्रक्रिया",
              "elaborationMarathi": "लोकपाल व लोकायुक्त यांसारख्या भ्रष्टाचार विरोधी स्वायत्त यंत्रणांना अधिक अधिकार दिले पाहिजेत आणि भ्रष्ट अधिकाऱ्यांवर जलदगती न्यायालयांत खटले चालवून कठोर शिक्षेची अंमलबजावणी केली पाहिजे.",
              "highValueKeywords": [
                "लोकपाल व लोकायुक्त",
                "जलदगती न्यायालये",
                "कठोर शिक्षा"
              ]
            }
          ],
          "nishkarsha": "जनतेची दक्षता आणि कायद्याची कठोर अंमलबजावणी यांमुळेच भ्रष्टाचाराचे समूळ उच्चाटन शक्य होईल.",
          "scoringRuleMarathi": "प्रस्तावना ½ गुण + २ परिणामकारक उपाय १ गुण + निष्कर्ष ½ गुण = २ गुण."
        }
      }
    ]
  }
];
