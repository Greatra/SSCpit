import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Clock } from 'lucide-react';
import type { KeyFigure } from '../../types/curriculum';

interface HistoricalFiguresModalProps {
  figures: KeyFigure[];
  isOpen: boolean;
  onClose: () => void;
  chapterTitle: string;
}

export const HistoricalFiguresModal: React.FC<HistoricalFiguresModalProps> = ({
  figures,
  isOpen,
  onClose,
  chapterTitle,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Window Chassis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-2xl bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-xl overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="p-6 border-b border-[var(--color-hairline)] flex items-center justify-between bg-[var(--color-surface-card)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--color-archival-ochre)] text-white flex items-center justify-center font-bold">
                <User size={18} />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[var(--color-muted)] font-mono">
                  HISTORICAL FIGURES DOSSIER
                </span>
                <h3 className="text-xl font-bold text-[var(--color-ink)]">
                  Key Thinkers & Historians Dossier
                </h3>
                <p className="text-xs text-[var(--color-muted)] truncate max-w-sm">
                  {chapterTitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full border border-[var(--color-hairline)] text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-canvas)] cursor-pointer transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Dossier Cards List */}
          <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
            {figures.length === 0 ? (
              <p className="text-sm text-[var(--color-muted)] text-center py-8">
                No biographical records available for this chapter.
              </p>
            ) : (
              figures.map((fig, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-lg hover:border-[var(--color-primary)] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-[var(--color-ink)]">
                        {fig.nameMarathi}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] font-mono mt-0.5">
                        <Clock size={12} className="text-[var(--color-accent-amber)]" />
                        <span>{fig.period}</span>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold font-mono uppercase tracking-[1.5px] px-2 py-0.5 rounded bg-[var(--color-canvas)] border border-[var(--color-hairline)] text-[var(--color-muted)] shrink-0">
                      DOSSIER #{idx + 1}
                    </span>
                  </div>

                  <p className="text-[15px] leading-relaxed text-[var(--color-body)] mt-2">
                    {fig.roleMarathi}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[var(--color-canvas-parchment)] border-t border-[var(--color-hairline)] text-right">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold uppercase tracking-normal rounded-full bg-[var(--color-ink)] text-white hover:bg-[var(--color-primary)] cursor-pointer transition-colors"
            >
              Close Dossier
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default HistoricalFiguresModal;
