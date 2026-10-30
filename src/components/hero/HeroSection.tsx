import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { ArrowDown, BookOpen, Layers, Cpu, Compass } from 'lucide-react'
import { HeroCanvas3D } from './HeroCanvas3D'
import { useMasterTicker } from '../../hooks/useMasterTicker'
import { useHardwareTier } from '../../hooks/useHardwareTier'
import { useStudyStore } from '../../stores/useStudyStore'

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fps, setFps] = useState<number | null>(null)
  const [rendererInfo, setRendererInfo] = useState<string | null>(null)
  const [lightMode, setLightMode] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const syncColorScheme = () => setLightMode(mediaQuery.matches)
    syncColorScheme()
    mediaQuery.addEventListener('change', syncColorScheme)

    return () => mediaQuery.removeEventListener('change', syncColorScheme)
  }, [])

  const handleReady = useCallback((info: string) => {
    setRendererInfo(info)
  }, [])

  const handleFpsReport = useCallback((val: number) => {
    setFps(val)
  }, [])

  // Initialize unified master ticker (Lenis + GSAP ScrollTrigger)
  useMasterTicker()

  // Hardware capability tier and DPR clamp
  const { tier, dpr, isFallback } = useHardwareTier()

  // Study store coordination
  const { setActiveSubject } = useStudyStore()

  // Accessibility: detect OS-level reduced motion preference
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // 3-Layer Parallax Depth Plane Transforms
  const layer1YRaw = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const layer2YRaw = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const layer3YRaw = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])
  const textOpacityRaw = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const textYRaw = useTransform(scrollYProgress, [0, 0.75], ['0px', '70px'])

  // Guard against motion transforms when prefers-reduced-motion is active
  const layer1Y = shouldReduceMotion ? '0%' : layer1YRaw
  const layer2Y = shouldReduceMotion ? '0%' : layer2YRaw
  const layer3Y = shouldReduceMotion ? '0%' : layer3YRaw
  const textOpacity = shouldReduceMotion ? 1 : textOpacityRaw
  const textY = shouldReduceMotion ? '0px' : textYRaw

  const handleScrollToStudy = useCallback(() => {
    setActiveSubject('all')
    const target =
      document.getElementById('swadhay-workspace') ||
      document.getElementById('chapters-grid')
    target?.scrollIntoView({ behavior: 'smooth' })
  }, [setActiveSubject])

  const handleScrollToChapters = useCallback(() => {
    const target =
      document.getElementById('chapters-grid') ||
      document.getElementById('swadhay-workspace')
    target?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section
      ref={containerRef}
      className={`relative w-full min-h-[100svh] md:h-[92vh] md:min-h-[640px] md:max-h-[920px] overflow-hidden flex flex-col justify-between select-none ${
        lightMode ? 'bg-[#dcecef]' : 'bg-[#140604]'
      }`}
      style={{ boxShadow: 'none' }}
    >
      {/* ============================================================== */}
      {/* LAYER 1: 3D OffscreenCanvas / Twilight Sky & Sun (Deep Depth) */}
      {/* ============================================================== */}
      <motion.div
        style={{ y: layer1Y, boxShadow: 'none' }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <HeroCanvas3D
          className="w-full h-full"
          onReady={handleReady}
          onFpsReport={handleFpsReport}
        />
      </motion.div>

      {/* ============================================================== */}
      {/* LAYER 2: Sahyadri Ridge Silhouette Overlay (Mid Depth)         */}
      {/* ============================================================== */}
      <motion.div
        style={{ y: layer2Y, boxShadow: 'none' }}
        className="absolute inset-0 z-10 pointer-events-none flex items-end"
      >
        <svg
          className={`w-full h-[40%] object-cover ${
            lightMode ? 'text-[#704536] opacity-45' : 'text-[#120403] opacity-85'
          }`}
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <path d="M0,180 L80,150 L160,170 L240,120 L320,160 L400,105 L470,140 L540,100 L610,135 L680,95 L750,130 L830,90 L900,120 L970,80 L1050,125 L1130,90 L1210,135 L1290,100 L1370,130 L1440,90 L1440,320 L0,320 Z" />
        </svg>
      </motion.div>

      {/* ============================================================== */}
      {/* LAYER 3: Foreground Rocky Promontory & Atmosphere Seam         */}
      {/* ============================================================== */}
      <motion.div
        style={{ y: layer3Y, boxShadow: 'none' }}
        className="absolute inset-0 z-20 pointer-events-none flex items-end justify-center"
      >
        {/* Subtle horizon mist gradient blending seamlessly into page floor */}
        <div
          className={`w-full h-36 ${
            lightMode
              ? 'bg-gradient-to-t from-[#704536]/75 via-[#8f5a43]/35 to-transparent'
              : 'bg-gradient-to-t from-[#070709] via-[#070709]/80 to-transparent'
          }`}
        />
      </motion.div>

      {/* Atmospheric text contrast scrim to guarantee crystal-clear legibility */}
      <div
        className={`absolute inset-0 z-25 pointer-events-none ${
          lightMode
            ? 'bg-[radial-gradient(ellipse_62%_48%_at_50%_43%,rgba(38,23,20,0.56)_0%,rgba(38,23,20,0.28)_48%,rgba(38,23,20,0.04)_76%,transparent_88%)]'
            : 'bg-[radial-gradient(ellipse_75%_65%_at_50%_46%,rgba(7,7,9,0.85)_0%,rgba(7,7,9,0.45)_55%,transparent_85%)]'
        }`}
      />

      {/* Top Telemetry Diagnostic Bar */}
      <div className="relative z-30 w-full px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 flex justify-between items-center text-xs">
        <div className="inline-flex max-w-[calc(100%-52px)] items-center gap-2 px-3 py-1 rounded-full bg-[rgba(18,18,24,0.92)] border border-[rgba(197,160,89,0.25)] text-[#C7C0B5] text-[10px] sm:text-[11px] tracking-[0.12em] uppercase">
          <Compass size={12} className="text-[#D95D39]" />
          <span className="truncate">DECCAN ARCHIVAL GUILD</span>
        </div>

        {/* Hardware & Render Engine Spec Cell */}
        <div
          title={rendererInfo ?? '3D Render Pipeline'}
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(18,18,24,0.92)] border border-[rgba(255,255,255,0.1)] text-[#A8A29E] text-[11px] tracking-[0.12em] uppercase"
        >
          <Cpu size={12} className={tier >= 1 ? 'text-[#3EA890]' : 'text-[#C5A059]'} />
          <span>
            {isFallback || tier === 0
              ? 'TIER 0 • VECTOR SVG'
              : `TIER ${tier} • DPR ${dpr.toFixed(1)}${fps ? ` • ${fps} FPS` : ''}`}
          </span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* OVERLAY: Clean Minimalist Typography & Actions                  */}
      {/* ============================================================== */}
      <div className="relative z-30 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-6 text-center flex flex-col items-center">
        <motion.div
          style={{ opacity: textOpacity, y: textY, boxShadow: 'none' }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`flex flex-col items-center ${
            lightMode
              ? 'rounded-[1.5rem] border border-[#f6d8ad]/20 bg-[#2b1d1a]/45 px-4 py-4 sm:px-8 sm:py-6'
              : ''
          }`}
        >
          {/* Refined Archival Heritage Hallmark (Zero cyber-slashes) */}
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#121218]/95 border border-[#C5A059]/35 mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D95D39]" />
            <span className="truncate text-[10px] sm:text-[12px] tracking-[0.1em] sm:tracking-[0.14em] font-medium text-[#C5A059] uppercase">
              Maharashtra State Board • Class 10
            </span>
            <span className="text-[11px] text-[#A8A29E] tracking-[0.08em] hidden sm:inline">
              इतिहास व राज्यशास्त्र
            </span>
          </div>

          {/* Authentic Marathi Devanagari Title Accent */}
          <div
            className={`font-marathi-serif text-base sm:text-xl tracking-wide mb-2 font-medium ${
              lightMode ? 'text-[#f6d8ad]' : 'text-[#C5A059]'
            }`}
          >
            इतिहास स्वाध्याय अभ्यासपीठ
          </div>

          {/* Hero Display Headline (High-Contrast Editorial Serif - "Gold Valley" Reference) */}
          <h1
            className={`font-serif editorial-title text-[clamp(2.75rem,13vw,4.5rem)] sm:text-6xl md:text-7xl font-normal tracking-[-0.02em] mb-4 sm:mb-5 max-w-full sm:max-w-3xl leading-[1.02] ${
              lightMode ? 'text-[#fff8ed]' : 'text-[#FDFCFB]'
            }`}
          >
            Itihas Swadhay
          </h1>

          {/* Editorial Subtitle (High Contrast Warm Silver, Perfect Legibility) */}
          <p
            className={`font-sans text-[15px] sm:text-lg md:text-xl font-normal max-w-2xl mb-6 sm:mb-8 leading-[1.45] ${
              lightMode ? 'text-[#f5e6d2]' : 'text-[#D6D0C7]'
            }`}
          >
            Class 10 Maharashtra State Board History & Political Science. Interactive point-by-point swadhay, conceptual diagrams, and board exam revision cockpit.
          </p>

          {/* Action Voltage CTAs with Tactile Cockpit Springs */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={handleScrollToStudy}
              className="justify-center bg-[#D95D39] text-[#FFFFFF] px-6 sm:px-8 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-[0.12em] uppercase flex items-center gap-2 cursor-pointer border border-[#D95D39] hover:bg-[#B84724] transition-colors"
              style={{ boxShadow: 'none' }}
            >
              <BookOpen size={16} />
              <span>START PRACTICE</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={handleScrollToChapters}
              className="justify-center bg-[#121218]/95 text-[#FDFCFB] border border-[#C5A059]/40 px-5 sm:px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-[0.12em] uppercase flex items-center gap-2 cursor-pointer hover:border-[#C5A059] hover:bg-[#1A1A24] transition-colors"
              style={{ boxShadow: 'none' }}
            >
              <Layers size={16} className="text-[#C5A059]" />
              <span>14 CHAPTERS INDEX</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator with subtle bounce */}
      <div className="relative z-30 pb-4 sm:pb-6 text-center flex flex-col items-center">
        <motion.div
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-xs text-[var(--color-on-dark-soft)] flex items-center gap-1.5 opacity-75 tracking-widest uppercase text-[11px]"
        >
          <span>SCROLL DOWN TO EXPLORE</span>
          <ArrowDown size={12} />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
