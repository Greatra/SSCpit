import { useState, useEffect } from 'react'
import { getGPUTier } from '@pmndrs/detect-gpu'

export type HardwareTier = 0 | 1 | 2

export interface HardwareTierState {
  tier: HardwareTier
  dpr: number
  isFallback: boolean
  isLoaded: boolean
  gpu?: string
  isMobile?: boolean
  fps?: number
}

const STORAGE_KEY = 'itihas_hardware_tier'

/**
 * Calculates clamped Device Pixel Ratio based on classified hardware tier.
 * - Tier 0: 1.0 (Fallback, no 3D canvas)
 * - Tier 1: 1.0 (Strictly clamped for integrated GPUs to prevent fill-rate saturation)
 * - Tier 2: min(window.devicePixelRatio, 1.5) (Discrete GPU)
 */
export function calculateDprForTier(tier: HardwareTier): number {
  if (typeof window === 'undefined') return 1.0
  if (tier <= 1) return 1.0
  const nativeDpr = window.devicePixelRatio || 1.0
  return Math.min(nativeDpr, 1.5)
}

/**
 * Reads cached tier info from localStorage safely.
 */
function getCachedTier(): { tier: HardwareTier; dpr: number; gpu?: string } | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed.tier === 'number' && [0, 1, 2].includes(parsed.tier)) {
      return {
        tier: parsed.tier as HardwareTier,
        dpr: calculateDprForTier(parsed.tier as HardwareTier),
        gpu: parsed.gpu,
      }
    }
  } catch {
    // localStorage may be disabled or full
  }
  return null
}

/**
 * Writes detected tier info to localStorage safely.
 */
function setCachedTier(tier: HardwareTier, gpu?: string): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        tier,
        gpu: gpu ?? 'Unknown',
        timestamp: Date.now(),
      })
    )
  } catch {
    // Ignore storage write errors (e.g. private mode)
  }
}

/**
 * Perform asynchronous GPU detection using @pmndrs/detect-gpu.
 */
export async function detectHardwareTier(): Promise<HardwareTierState> {
  if (typeof window === 'undefined') {
    return {
      tier: 0,
      dpr: 1.0,
      isFallback: true,
      isLoaded: true,
    }
  }

  // Check reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) {
    return {
      tier: 0,
      dpr: 1.0,
      isFallback: true,
      isLoaded: true,
      gpu: 'Reduced Motion Active',
    }
  }

  // Fast synchronous WebGL renderer check for Intel HD/UHD, mobile GPUs, and offline environments
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (gl) {
      const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info')
      if (debugInfo) {
        const rendererStr = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || ''
        const isIntegratedOrMobile = /Intel|HD Graphics|UHD Graphics|Iris|Apple|Adreno|Mali|PowerVR|Samsung|Bifrost|Valhall/i.test(rendererStr)
        const isMobileDevice = typeof navigator !== 'undefined' && (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Macintosh/i.test(navigator.userAgent)))

        if (isIntegratedOrMobile || isMobileDevice) {
          const dpr = 1.0
          setCachedTier(1, rendererStr)
          return {
            tier: 1,
            dpr,
            isFallback: false,
            isLoaded: true,
            gpu: rendererStr,
            isMobile: isMobileDevice,
          }
        }
      }
    }
  } catch {}

  try {
    const tierResult = await getGPUTier()
    let categorizedTier: HardwareTier = 1

    if (tierResult.type === 'WEBGL_UNSUPPORTED' || tierResult.type === 'BLOCKLISTED') {
      categorizedTier = 0
    } else if (tierResult.tier === 0) {
      // If WebGL is functional but detect-gpu rated tier 0 due to high native DPR on mobile,
      // grant Tier 1 with strictly clamped DPR 1.0 rather than dropping to static SVG
      categorizedTier = 1
    } else if (tierResult.tier === 1) {
      categorizedTier = 1
    } else {
      // Tier 2 or 3
      categorizedTier = 2
    }

    const dpr = calculateDprForTier(categorizedTier)
    setCachedTier(categorizedTier, tierResult.gpu)

    return {
      tier: categorizedTier,
      dpr,
      isFallback: categorizedTier === 0,
      isLoaded: true,
      gpu: tierResult.gpu,
      isMobile: tierResult.isMobile,
      fps: tierResult.fps,
    }
  } catch {
    // If detect-gpu throws (e.g. offline/network failure), check if WebGL works directly
    const hasWebGL = typeof window !== 'undefined' && !!document.createElement('canvas').getContext('webgl')
    return {
      tier: hasWebGL ? 1 : 0,
      dpr: 1.0,
      isFallback: !hasWebGL,
      isLoaded: true,
      gpu: hasWebGL ? 'WebGL Baseline Fallback' : 'WebGL Unsupported',
    }
  }
}

/**
 * React hook to detect and persist GPU capability tier and clamped DPR.
 */
export function useHardwareTier(): HardwareTierState {
  const cached = getCachedTier()

  const [state, setState] = useState<HardwareTierState>(() => {
    if (cached) {
      return {
        tier: cached.tier,
        dpr: cached.dpr,
        isFallback: cached.tier === 0,
        isLoaded: true,
        gpu: cached.gpu,
      }
    }
    return {
      tier: 1, // Default conservative baseline while detecting
      dpr: 1.0,
      isFallback: false,
      isLoaded: false,
    }
  })

  useEffect(() => {
    let isMounted = true

    detectHardwareTier().then((detected) => {
      if (isMounted) {
        setState(detected)
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return state
}
