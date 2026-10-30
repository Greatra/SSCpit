import React from 'react'
import { ArrowUp } from 'lucide-react'
import { useStudyStore } from '../stores/useStudyStore'
import { ShivmudraEmblem } from './brand/ShivmudraEmblem'

export const Footer: React.FC = () => {
  const { setSelectedChapterId } = useStudyStore()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleChapterClick = (id: string) => {
    useStudyStore.getState().setActiveChapterId(id)
    setSelectedChapterId(id)
    const element = document.getElementById('swadhay-workspace')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-[#070709] text-[#A8A29E] border-t border-[rgba(255,255,255,0.08)]">
      {/* Archival Double Hairline Rule (Royal Gold & Saffron) */}
      <div className="archival-double-rule" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Heritage (Royal Shivmudra Crest) */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <ShivmudraEmblem size={44} showText={true} />
            </div>
            <p className="text-sm leading-relaxed max-w-md text-[#C7C0B5] mb-5 font-marathi-serif">
              महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे.
              इयत्ता दहावी इतिहास (पाठ १ ते ९) व राज्यशास्त्र (पाठ १ ते ५) चे आधुनिक, चिकित्सक व गतिमान स्वाध्याय संकलन.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs">
              <span className="text-[11px] px-3 py-1 rounded-full bg-[#121218] border border-[#C5A059]/30 text-[#C5A059] font-medium">
                SSC Board Curriculum Edition 2026
              </span>
              <span className="text-[11px] text-[#8E887F]">
                महाराष्ट्र राज्य पाठ्यपुस्तक निर्मिती व अभ्यासक्रम संशोधन मंडळ (बालभारती)
              </span>
            </div>
          </div>

          {/* Col 2: इतिहास सूची */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[1.5px] text-[#D95D39]">
                HIST
              </span>
              <h4 className="text-xs font-bold text-[#FDFCFB] tracking-normal uppercase">
                History Curriculum
              </h4>
            </div>
            <ul className="text-sm space-y-2.5 font-marathi-serif text-[#C7C0B5]">
              <li
                onClick={() => handleChapterClick('hist-1')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                १. पाश्चात्त्य परंपरा
              </li>
              <li
                onClick={() => handleChapterClick('hist-2')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                २. भारतीय परंपरा
              </li>
              <li
                onClick={() => handleChapterClick('hist-3')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                ३. उपयोजित इतिहास
              </li>
              <li
                onClick={() => handleChapterClick('hist-4')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                ४. भारतीय कलांचा इतिहास
              </li>
              <li
                onClick={() => handleChapterClick('hist-5')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                ५. प्रसारमाध्यमे आणि इतिहास
              </li>
              <li
                onClick={() => handleChapterClick('hist-6')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                ६. मनोरंजनाची माध्यमे
              </li>
              <li
                onClick={() => handleChapterClick('hist-7')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                ७. खेळ आणि इतिहास
              </li>
              <li
                onClick={() => handleChapterClick('hist-8')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                ८. पर्यटन आणि इतिहास
              </li>
              <li
                onClick={() => handleChapterClick('hist-9')}
                className="hover:text-[#D95D39] cursor-pointer transition-colors"
              >
                ९. ऐतिहासिक ठेव्यांचे जतन
              </li>
            </ul>
          </div>

          {/* Col 3: राज्यशास्त्र सूची */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[1.5px] text-[#2B7497]">
                POL
              </span>
              <h4 className="text-xs font-bold text-[#FDFCFB] tracking-normal uppercase">
                Political Science
              </h4>
            </div>
            <ul className="text-sm space-y-2.5 font-marathi-serif text-[#C7C0B5]">
              <li
                onClick={() => handleChapterClick('pol-1')}
                className="hover:text-[#2B7497] cursor-pointer transition-colors"
              >
                १. संविधानाची वाटचाल
              </li>
              <li
                onClick={() => handleChapterClick('pol-2')}
                className="hover:text-[#2B7497] cursor-pointer transition-colors"
              >
                २. निवडणूक प्रक्रिया
              </li>
              <li
                onClick={() => handleChapterClick('pol-3')}
                className="hover:text-[#2B7497] cursor-pointer transition-colors"
              >
                ३. राजकीय पक्ष
              </li>
              <li
                onClick={() => handleChapterClick('pol-4')}
                className="hover:text-[#2B7497] cursor-pointer transition-colors"
              >
                ४. सामाजिक व राजकीय चळवळी
              </li>
              <li
                onClick={() => handleChapterClick('pol-5')}
                className="hover:text-[#2B7497] cursor-pointer transition-colors"
              >
                ५. भारतीय लोकशाहीसमोरील आव्हाने
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Dignified Provenance & Scholarly Anchor */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[#8E887F]">
            <span className="inline-flex items-center gap-1.5 font-medium text-[#FDFCFB]">
              <span className="w-2 h-2 rounded-full bg-[#3EA890]" />
              महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे
            </span>
            <span className="hidden sm:inline text-[rgba(255,255,255,0.15)]">•</span>
            <span className="text-[11px] text-[#C5A059]">
              इयत्ता १० वी अभ्यासक्रम
            </span>
            <span className="hidden md:inline text-[rgba(255,255,255,0.15)]">•</span>
            <span className="text-[11px] text-[#8E887F]">
              मुक्त शैक्षणिक ज्ञानपीठ • ऐतिहासिक संदर्भ व चिकित्सक स्वाध्याय
            </span>
            <span className="text-[11px] text-[#C5A059] font-marathi-serif">
              Created by Greatra / Shriram Shinde
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D95D39] hover:text-white cursor-pointer font-semibold uppercase tracking-wider shrink-0 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
