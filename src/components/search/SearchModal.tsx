import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, BookOpen, HelpCircle, User, Network } from 'lucide-react';
import { useStudyStore } from '../../stores/useStudyStore';
import { searchCurriculum } from '../../data/searchIndex';
import type { SearchResultItem } from '../../types/search';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    closeSearch,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    setActiveChapterId,
    setSelectedQuestionId,
    setSelectedChapterId,
  } = useStudyStore();

  const isOpen = isSearchOpen;
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results: SearchResultItem[] = searchQuery.trim()
    ? searchCurriculum(searchQuery).slice(0, 20)
    : [];

  const handleClose = () => {
    closeSearch();
    setIsSearchOpen(false);
    setSearchQuery('');
    setSelectedIndex(0);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);


  const handleSelectResult = (item: SearchResultItem) => {
    setActiveChapterId(item.chapterId);
    setSelectedChapterId(item.chapterId);

    if (item.questionId) {
      setSelectedQuestionId(item.questionId);
    }

    handleClose();

    // Smooth scroll to top of workspace
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        results.length > 0 ? (prev - 1 + results.length) % results.length : 0
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Search Modal Chassis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-2xl bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-xl overflow-hidden z-10 flex flex-col"
        >
          {/* Search Input Bar */}
          <div className="p-4 border-b border-[var(--color-hairline)] flex items-center gap-3 bg-[var(--color-surface-card)]">
            <Search size={18} className="text-[var(--color-primary)] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search syllabus, concepts, or thinkers... (e.g. द्वंद्ववाद, बखर, EVM)"
              className="w-full bg-transparent text-[var(--color-ink)] placeholder-[var(--color-muted)] text-base outline-none tracking-normal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 text-[var(--color-muted)] hover:text-[var(--color-ink)] cursor-pointer"
              >
                <X size={16} />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono rounded border border-[var(--color-hairline)] bg-[var(--color-canvas)] text-[var(--color-muted)]">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {!searchQuery.trim() ? (
              <div className="py-12 px-6 text-center">
                <p className="text-sm text-[var(--color-body)] mb-2">
                  Enter keywords, historical figures, or concepts to search.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                  {['द्वंद्ववाद', 'बखर', 'उपयोजित इतिहास', 'वारली', 'दर्पण', 'EVM', 'शिरोमणी अकाली दल'].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 rounded-full text-xs bg-[var(--color-surface-card)] border border-[var(--color-hairline)] text-[var(--color-ink)] hover:border-[var(--color-primary)] cursor-pointer transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-12 px-6 text-center text-sm text-[var(--color-muted)]">
                No syllabus references found for &ldquo;{searchQuery}&rdquo;. Please try another term.
              </div>
            ) : (
              <div className="space-y-1">
                {results.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon =
                    item.type === 'chapter'
                      ? BookOpen
                      : item.type === 'question'
                      ? HelpCircle
                      : item.type === 'figure'
                      ? User
                      : Network;

                  const typeLabel =
                    item.type === 'chapter'
                      ? 'CHAPTER'
                      : item.type === 'question'
                      ? 'QUESTION'
                      : item.type === 'figure'
                      ? 'THINKER'
                      : 'CONCEPT';

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelectResult(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`p-3.5 rounded-lg border cursor-pointer transition-colors flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[var(--color-surface-card)] border-[var(--color-primary)]'
                          : 'bg-transparent border-transparent hover:bg-[var(--color-canvas-parchment)]'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'bg-[var(--color-canvas)] text-[var(--color-muted)] border border-[var(--color-hairline)]'
                        }`}
                      >
                        <Icon size={14} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold font-mono uppercase tracking-[1px] px-2 py-0.2 rounded bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-[var(--color-muted)]">
                            {typeLabel}
                          </span>
                          <span className="text-xs text-[var(--color-muted)] truncate">
                            {item.chapterTitleMarathi}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-[var(--color-ink)] truncate">
                          {item.titleMarathi}
                        </h4>
                        <p className="text-xs text-[var(--color-body)] line-clamp-2 mt-0.5">
                          {item.contentSnippetMarathi}
                        </p>
                      </div>

                      <ArrowRight
                        size={15}
                        className={`shrink-0 mt-2 transition-transform ${
                          isSelected
                            ? 'text-[var(--color-primary)] translate-x-1'
                            : 'text-[var(--color-muted-soft)]'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Keyboard Hint Footer */}
          <div className="p-3 bg-[var(--color-canvas-parchment)] border-t border-[var(--color-hairline)] flex items-center justify-between text-[11px] text-[var(--color-muted)] font-mono">
            <div className="flex items-center gap-3">
              <span>↑↓ Navigate</span>
              <span>ENTER Select</span>
              <span>ESC Dismiss</span>
            </div>
            <span>{results.length} Results</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SearchModal;
