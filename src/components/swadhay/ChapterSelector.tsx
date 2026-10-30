import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ScrollText,
  BookOpen,
  Landmark,
  Palette,
  Radio,
  Film,
  Trophy,
  Compass,
  Archive,
  Scale,
  Vote,
  Users,
  Flame,
  ShieldAlert,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { chaptersData } from '../../data/chaptersData';
import { useStudyStore } from '../../stores/useStudyStore';

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  ScrollText,
  BookOpen,
  Landmark,
  Palette,
  Radio,
  Film,
  Trophy,
  Compass,
  Archive,
  Scale,
  Vote,
  Users,
  Flame,
  ShieldAlert,
};

export const ChapterSelector: React.FC = () => {
  const { activeChapterId, setActiveChapterId, completedQuestions, setSelectedChapterId } = useStudyStore();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartPos, setScrollStartPos] = useState(0);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [checkScroll]);

  const handleSelect = (id: string) => {
    if (isDragging) return;
    setActiveChapterId(id);
    setSelectedChapterId(id);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      scrollRef.current.scrollLeft += e.deltaY * 1.1;
      checkScroll();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStartPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    scrollRef.current.scrollLeft = scrollStartPos - walk;
    checkScroll();
  };

  const stopDragging = () => {
    setIsDragging(false);
    checkScroll();
  };

  const scrollByAmount = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      setTimeout(checkScroll, 320);
    }
  };

  const activeIndex = chaptersData.findIndex(
    (ch) =>
      activeChapterId === ch.id ||
      activeChapterId === ch.id.replace('hist-', 'hist-0').replace('pol-', 'pol-0')
  );

  return (
    <nav
      id="chapters-grid"
      aria-label="Chapter Selector"
      className="w-full bg-[#070709] border-b border-[rgba(255,255,255,0.08)] py-3 px-4 sm:px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header & Tactile Directional Pagination Buttons */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-semibold tracking-[0.12em] text-[#C5A059] uppercase">
              CHAPTER SELECTOR
            </span>
            <span className="text-xs text-[#8E887F] font-mono">
              [ {activeIndex >= 0 ? String(activeIndex + 1).padStart(2, '0') : '01'} / 14 ]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#A8A29E] font-medium hidden sm:inline mr-2">
              Drag or scroll chapters
            </span>

            {/* Circular Minimal Navigation Arrows ("Gold Valley" Reference Standard) */}
            <button
              onClick={() => scrollByAmount(-280)}
              disabled={!canScrollLeft}
              aria-label="Previous chapters"
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-[rgba(255,255,255,0.2)] text-[#FDFCFB] hover:border-[#C5A059] hover:bg-[#121218]'
                  : 'border-[rgba(255,255,255,0.06)] text-[#4A4742] cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft size={14} />
            </button>

            <button
              onClick={() => scrollByAmount(280)}
              disabled={!canScrollRight}
              aria-label="Next chapters"
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-[rgba(255,255,255,0.2)] text-[#FDFCFB] hover:border-[#C5A059] hover:bg-[#121218]'
                  : 'border-[rgba(255,255,255,0.06)] text-[#4A4742] cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Scrollable / Draggable Chapter Track with Edge Soft Fade Masks */}
        <div className="relative">
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onScroll={checkScroll}
            className={`flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none scroll-smooth ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {chaptersData.map((ch) => {
              const Icon = iconMap[ch.icon] || BookOpen;
              const isActive =
                activeChapterId === ch.id ||
                activeChapterId === ch.id.replace('hist-', 'hist-0').replace('pol-', 'pol-0');
              const isHistory = ch.subject === 'history';

              const chapterCompletedCount = ch.questions.filter((q) =>
                completedQuestions.has(q.id)
              ).length;
              const isAllCompleted =
                ch.questions.length > 0 && chapterCompletedCount === ch.questions.length;

              return (
                <motion.button
                  key={ch.id}
                  onClick={() => handleSelect(ch.id)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`relative flex items-center gap-2.5 px-3.5 py-2 rounded-full border text-left shrink-0 transition-all ${
                    isActive
                      ? 'bg-[#161622] border-[#D95D39] text-[#FDFCFB]'
                      : 'bg-[#0E0E14] border-[rgba(255,255,255,0.08)] text-[#C7C0B5] hover:border-[#C5A059]/40 hover:text-[#FDFCFB]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeChapterPillHighlight"
                      className="absolute inset-0 rounded-full border border-[#D95D39] pointer-events-none"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}

                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isActive
                        ? isHistory
                          ? 'bg-[#D95D39] text-white'
                          : 'bg-[#2B7497] text-white'
                        : isHistory
                          ? 'bg-[rgba(217,93,57,0.15)] text-[#E06042]'
                          : 'bg-[rgba(43,116,151,0.15)] text-[#5AB1DC]'
                    }`}
                  >
                    <Icon size={12} />
                  </div>

                  <div className="flex flex-col pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold font-mono tracking-[1.2px] uppercase text-[#8E887F]">
                        {isHistory
                          ? `HIST-${String(ch.chapterNumber).padStart(2, '0')}`
                          : `POL-${String(ch.chapterNumber).padStart(2, '0')}`}
                      </span>
                      {isAllCompleted && (
                        <CheckCircle2 size={11} className="text-[#3EA890]" />
                      )}
                    </div>
                    <span className="text-xs font-medium text-[#FDFCFB] whitespace-nowrap tracking-normal font-marathi-serif">
                      {ch.titleMarathi}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ChapterSelector;
