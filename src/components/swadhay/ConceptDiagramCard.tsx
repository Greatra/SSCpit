import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Calendar, Layers, Eye, EyeOff, Award } from 'lucide-react';
import type { Chapter } from '../../data/chaptersData';
import { ARCHIVAL_TRANSITIONS } from '../../styles/motionTokens';

interface ConceptDiagramCardProps {
  chapter: Chapter;
}

export const ConceptDiagramCard: React.FC<ConceptDiagramCardProps> = ({ chapter }) => {
  // Local state for revealed satellite nodes per diagram
  const [revealedNodes, setRevealedNodes] = useState<Record<string, boolean>>({});

  const toggleNode = (nodeKey: string) => {
    setRevealedNodes((prev) => ({
      ...prev,
      [nodeKey]: !prev[nodeKey],
    }));
  };

  const revealAllForDiagram = (diagramIndex: number, count: number) => {
    const next = { ...revealedNodes };
    for (let i = 0; i < count; i++) {
      next[`${diagramIndex}-${i}`] = true;
    }
    setRevealedNodes(next);
  };

  const hideAllForDiagram = (diagramIndex: number, count: number) => {
    const next = { ...revealedNodes };
    for (let i = 0; i < count; i++) {
      next[`${diagramIndex}-${i}`] = false;
    }
    setRevealedNodes(next);
  };

  return (
    <div className="w-full space-y-6 my-8">
      {/* 1. Concept Diagrams & Web Trees (Interactive Node-by-Node Active Recall) */}
      {chapter.conceptDiagrams.length > 0 && (
        <section
          aria-label="Concept Diagrams"
          className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-xl p-6 md:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-[var(--color-hairline)] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[var(--color-canvas)] border border-[var(--color-hairline)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Network size={16} />
              </div>
              <div>
                <span className="text-[11px] font-medium tracking-normal text-[#C5A059] font-marathi-serif">
                  संकल्पनाचित्रे • संकल्पना तक्ता (२ गुण)
                </span>
                <h3 className="text-xl font-bold text-[var(--color-ink)]">
                  संकल्पना चित्रे व प्रवाह तक्ते
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-muted)]">
              <Award size={14} className="text-[var(--color-archival-ochre)]" />
              <span>SSC बोर्ड गुण: २ गुण (१ घटक = ½ गुण)</span>
            </div>
          </div>

          <div className="space-y-6">
            {chapter.conceptDiagrams.map((diagram, dIdx) => {
              const totalNodes = diagram.nodes.length;
              const revealedCount = diagram.nodes.filter(
                (_, nIdx) => !!revealedNodes[`${dIdx}-${nIdx}`]
              ).length;
              const allRevealed = revealedCount === totalNodes;
              const earnedMarks = (revealedCount * 0.5).toFixed(1);

              return (
                <div
                  key={dIdx}
                  className="bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-xl p-5 md:p-6"
                >
                  {/* Diagram Header Bar with Master Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-[var(--color-hairline-soft)]">
                    <div className="flex items-center gap-2">
                      <Layers size={16} className="text-[var(--color-primary)]" />
                      <h4 className="text-base sm:text-lg font-bold text-[var(--color-ink)]">
                        {diagram.titleMarathi}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Active Recall Score Badge */}
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[var(--color-canvas-parchment)] border border-[var(--color-hairline)] text-[var(--color-ink)]">
                        {totalNodes} पैकी {revealedCount} आठवले ({earnedMarks} / {(totalNodes * 0.5).toFixed(1)} गुण)
                      </span>

                      {/* Reveal / Hide All Toggle Button */}
                      <button
                        onClick={() =>
                          allRevealed
                            ? hideAllForDiagram(dIdx, totalNodes)
                            : revealAllForDiagram(dIdx, totalNodes)
                        }
                        className="flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full bg-[var(--color-surface-card)] border border-[var(--color-hairline)] hover:border-[var(--color-primary)] text-[var(--color-ink)] cursor-pointer transition-colors"
                      >
                        {allRevealed ? <EyeOff size={13} /> : <Eye size={13} />}
                        <span>{allRevealed ? 'सर्व लपवा' : 'सर्व दाखवा'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Satellite Interactive Nodes Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    {diagram.nodes.map((nodeText, nIdx) => {
                      const nodeKey = `${dIdx}-${nIdx}`;
                      const isNodeRevealed = !!revealedNodes[nodeKey];

                      return (
                        <div
                          key={nIdx}
                          role="button"
                          tabIndex={0}
                          aria-label={`संकल्पना घटक ${nIdx + 1}`}
                          onClick={() => toggleNode(nodeKey)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleNode(nodeKey);
                            }
                          }}
                          className={`p-4 rounded-xl border flex flex-col justify-between min-h-[96px] cursor-pointer transition-all select-none focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary)] focus-visible:outline-offset-2 ${
                            isNodeRevealed
                              ? 'bg-[var(--color-surface-card)] border-[var(--color-primary)]'
                              : 'bg-[var(--color-canvas-parchment)] border-dashed border-[var(--color-hairline-soft)] hover:border-[var(--color-primary)]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span
                              className={`w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center ${
                                isNodeRevealed
                                  ? 'bg-[var(--color-primary)] text-white'
                                  : 'bg-[var(--color-canvas)] text-[var(--color-muted)] border border-[var(--color-hairline)]'
                              }`}
                            >
                              {nIdx + 1}
                            </span>
                            <span className="text-[11px] font-mono text-[var(--color-muted)] font-bold">
                              ½ गुण
                            </span>
                          </div>

                          <AnimatePresence mode="wait">
                            {isNodeRevealed ? (
                              <motion.p
                                key="revealed"
                                initial={{ opacity: 0, y: 3 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -3 }}
                                transition={ARCHIVAL_TRANSITIONS.editorialEase}
                                className="text-sm md:text-[15px] font-bold text-[var(--color-ink)] leading-snug"
                              >
                                {nodeText}
                              </motion.p>
                            ) : (
                              <motion.div
                                key="hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-[var(--color-muted)] flex items-center justify-between font-medium"
                              >
                                <span>आठवून टॅप करा</span>
                                <Eye size={13} className="text-[var(--color-primary)]" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 2. Chronological Milestones Timeline */}
      {chapter.milestones.length > 0 && (
        <section
          aria-label="Chronological Milestones"
          className="bg-[var(--color-surface-card)] border border-[var(--color-hairline)] rounded-xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6 border-b border-[var(--color-hairline)] pb-4">
            <div className="w-8 h-8 rounded-full bg-[var(--color-canvas)] border border-[var(--color-hairline)] flex items-center justify-center text-[var(--color-archival-ochre)]">
              <Calendar size={16} />
            </div>
            <div>
              <span className="text-[11px] font-medium tracking-normal text-[#C5A059] font-marathi-serif">
                कालपट • ऐतिहासिक कालानुक्रम
              </span>
              <h3 className="text-xl font-bold text-[var(--color-ink)]">
                कालपट व महत्त्वाच्या ऐतिहासिक घटना
              </h3>
            </div>
          </div>

          <div className="relative pl-6 border-l-2 border-[var(--color-hairline)] space-y-6">
            {chapter.milestones.map((ms, mIdx) => (
              <div key={mIdx} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--color-canvas)] border-2 border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="font-mono text-sm font-bold text-[var(--color-primary)] px-2.5 py-0.5 rounded bg-[var(--color-canvas)] border border-[var(--color-hairline)] shrink-0 w-fit">
                    {ms.year}
                  </span>
                  <p className="text-[17px] leading-[1.47] tracking-normal text-[var(--color-body)]">
                    {ms.eventMarathi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ConceptDiagramCard;
