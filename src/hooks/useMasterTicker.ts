import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Unified master ticker hook coordinating Lenis smooth scrolling with GSAP ScrollTrigger.
 * Executes on a single synchronized requestAnimationFrame loop via gsap.ticker with lagSmoothing(0)
 * to eliminate 1-frame jitter and prevent scroll desynchronization.
 */
export function useMasterTicker() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // 1. Initialize Lenis with autoRaf set to false
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisRef.current = lenis

    // Attach to window for global access/debugging
    ;(window as unknown as { lenis?: Lenis }).lenis = lenis

    // 2. Synchronize Lenis scroll position with GSAP ScrollTrigger
    const onScroll = () => {
      ScrollTrigger.update()
    }
    lenis.on('scroll', onScroll)

    // 3. Eliminate 1-frame jitter by disabling GSAP lag smoothing
    gsap.ticker.lagSmoothing(0)

    // 4. Add unified master ticker callback driving Lenis
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerUpdate)

    return () => {
      gsap.ticker.remove(tickerUpdate)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      lenisRef.current = null
      delete (window as unknown as { lenis?: Lenis }).lenis
    }
  }, [])

  return lenisRef
}
