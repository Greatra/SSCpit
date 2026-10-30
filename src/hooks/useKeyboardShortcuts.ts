import { useEffect } from 'react';
import { useStudyStore } from '../stores/useStudyStore';
import { chaptersData } from '../data/chaptersData';

export function useKeyboardShortcuts() {
  const {
    isSearchOpen,
    openSearch,
    closeSearch,
    activeChapterId,
    setActiveChapterId,
    setSelectedChapterId,
    setStudyMode,
  } = useStudyStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 1. Toggle Search via Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isSearchOpen) {
          closeSearch();
        } else {
          openSearch();
        }
        return;
      }

      // 2. Close Search via Escape
      if (e.key === 'Escape') {
        if (isSearchOpen) {
          e.preventDefault();
          closeSearch();
          return;
        }
      }

      // 3. Arrow Navigation between Chapters (only if search is closed and not typing in an input)
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (!isSearchOpen && !isInput) {
        // Study Mode switching: [1] वाचन (Read), [2] स्मरण (Recall), [3] सराव (Cloze)
        if (e.key === '1') {
          e.preventDefault();
          setStudyMode('read');
          return;
        } else if (e.key === '2') {
          e.preventDefault();
          setStudyMode('recall');
          return;
        } else if (e.key === '3') {
          e.preventDefault();
          setStudyMode('cloze');
          return;
        }

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          const currentIndex = chaptersData.findIndex(
            (c) =>
              c.id === activeChapterId ||
              c.id === activeChapterId.replace('hist-0', 'hist-').replace('pol-0', 'pol-')
          );
          if (currentIndex >= 0 && currentIndex < chaptersData.length - 1) {
            e.preventDefault();
            const nextCh = chaptersData[currentIndex + 1];
            setActiveChapterId(nextCh.id);
            setSelectedChapterId(nextCh.id);
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          const currentIndex = chaptersData.findIndex(
            (c) =>
              c.id === activeChapterId ||
              c.id === activeChapterId.replace('hist-0', 'hist-').replace('pol-0', 'pol-')
          );
          if (currentIndex > 0) {
            e.preventDefault();
            const prevCh = chaptersData[currentIndex - 1];
            setActiveChapterId(prevCh.id);
            setSelectedChapterId(prevCh.id);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isSearchOpen,
    openSearch,
    closeSearch,
    activeChapterId,
    setActiveChapterId,
    setSelectedChapterId,
  ]);
}

export default useKeyboardShortcuts;
