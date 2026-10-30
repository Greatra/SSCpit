import React, { useEffect, useRef, useState } from 'react'
import { useHardwareTier } from '../../hooks/useHardwareTier'
import { ScholarSilhouetteSVG } from './ScholarSilhouetteSVG'
import type { MainToWorkerMessage, WorkerToMainMessage } from '../../types/worker'

export interface HeroCanvas3DProps {
  className?: string
  onReady?: (info: string) => void
  onFpsReport?: (fps: number) => void
}

/**
 * OffscreenCanvas bridge component running Three.js in a dedicated Web Worker.
 * Enforces the 4 Milestone 2 Pre-Flight Guards:
 * 1. React 19 StrictMode transferControlToOffscreen crash guard via dynamic canvas creation.
 * 2. Zero-idle GPU burn via IntersectionObserver + visibilitychange (PAUSE/RESUME).
 * 3. Zero-allocation scroll telemetry via rAF-throttled normalized float.
 * 4. Hardware capability tiering & DPR clamp with Tier 0 SVG fallback.
 */
export const HeroCanvas3D: React.FC<HeroCanvas3DProps> = ({
  className = '',
  onReady,
  onFpsReport,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const workerRef = useRef<Worker | null>(null)

  const { tier, dpr, isFallback, isLoaded } = useHardwareTier()
  const [hasWorkerFailed, setHasWorkerFailed] = useState(false)
  const [isWorkerReady, setIsWorkerReady] = useState(false)
  const [lightMode, setLightMode] = useState(false)

  // Store callbacks in refs to prevent useEffect re-triggering on callback identity changes
  const onReadyRef = useRef(onReady)
  const onFpsReportRef = useRef(onFpsReport)
  useEffect(() => {
    onReadyRef.current = onReady
    onFpsReportRef.current = onFpsReport
  })

  // Check OffscreenCanvas support statically
  const isOffscreenSupported =
    typeof window !== 'undefined' &&
    typeof HTMLCanvasElement !== 'undefined' &&
    'transferControlToOffscreen' in HTMLCanvasElement.prototype

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    const syncColorScheme = () => setLightMode(mediaQuery.matches)
    syncColorScheme()
    mediaQuery.addEventListener('change', syncColorScheme)

    return () => mediaQuery.removeEventListener('change', syncColorScheme)
  }, [])

  useEffect(() => {
    // Only attempt 3D initialization if loaded, supported, and not Tier 0 fallback
    if (!isLoaded || isFallback || tier === 0 || !isOffscreenSupported || hasWorkerFailed) return

    const container = containerRef.current
    if (!container) return

    // Guard 1: Dynamically instantiate fresh canvas to prevent React 19 StrictMode double-mount crash
    const canvas = document.createElement('canvas')
    canvas.className = 'w-full h-full block absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none'
    canvas.style.boxShadow = 'none'
    container.appendChild(canvas)

    let worker: Worker | null = null
    let offscreen: OffscreenCanvas | null = null

    try {
      offscreen = canvas.transferControlToOffscreen()
      worker = new Worker(new URL('../../workers/heroRender.worker.ts', import.meta.url), {
        type: 'module',
      })
      workerRef.current = worker
    } catch {
      if (canvas.parentNode === container) {
        container.removeChild(canvas)
      }
      queueMicrotask(() => setHasWorkerFailed(true))
      return
    }

    const rect = container.getBoundingClientRect()
    const width = Math.max(rect.width, 320)
    const height = Math.max(rect.height, 480)

    // Handle messages from worker
    worker.onmessage = (e: MessageEvent<WorkerToMainMessage>) => {
      const msg = e.data
      if (!msg) return

      if (msg.type === 'READY') {
        setIsWorkerReady(true)
        canvas.classList.remove('opacity-0')
        canvas.classList.add('opacity-100')
        onReadyRef.current?.(msg.rendererInfo)
      } else if (msg.type === 'FPS_REPORT') {
        onFpsReportRef.current?.(msg.fps)
      } else if (msg.type === 'ERROR') {
        setHasWorkerFailed(true)
      }
    }

    worker.onerror = () => {
      setHasWorkerFailed(true)
    }

    // Initialize worker scene
    const initMsg: MainToWorkerMessage = {
      type: 'INIT',
      canvas: offscreen,
      width,
      height,
      dpr,
      tier,
      lightMode,
    }
    worker.postMessage(initMsg, [offscreen])

    // Guard 2: Interaction forwarding with rAF throttling (Zero allocation)
    let pendingResize = false
    let pendingScroll = false
    let pendingMouse = false
    let lastMouseX = 0
    let lastMouseY = 0

    const handleResize = () => {
      if (pendingResize) return
      pendingResize = true
      requestAnimationFrame(() => {
        if (!containerRef.current || !workerRef.current) return
        const r = containerRef.current.getBoundingClientRect()
        workerRef.current.postMessage({
          type: 'RESIZE',
          width: Math.max(r.width, 320),
          height: Math.max(r.height, 480),
        } as MainToWorkerMessage)
        pendingResize = false
      })
    }

    const handleScroll = () => {
      if (pendingScroll) return
      pendingScroll = true
      requestAnimationFrame(() => {
        if (!workerRef.current) return
        const scrollY = window.scrollY
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        workerRef.current.postMessage({
          type: 'SCROLL',
          scrollY,
          maxScroll,
        } as MainToWorkerMessage)
        pendingScroll = false
      })
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return
      const r = containerRef.current.getBoundingClientRect()
      // Normalize to [-1.0, 1.0]
      lastMouseX = ((e.clientX - r.left) / r.width) * 2 - 1
      lastMouseY = ((e.clientY - r.top) / r.height) * 2 - 1

      if (pendingMouse) return
      pendingMouse = true
      requestAnimationFrame(() => {
        if (!workerRef.current) return
        workerRef.current.postMessage({
          type: 'MOUSE_MOVE',
          normalizedX: lastMouseX,
          normalizedY: lastMouseY,
        } as MainToWorkerMessage)
        pendingMouse = false
      })
    }

    // Guard 3: Zero-Idle GPU Burn (IntersectionObserver + visibilitychange)
    let isIntersecting = true
    let isVisible = typeof document !== 'undefined' ? document.visibilityState === 'visible' : true

    const updateRenderState = () => {
      if (!workerRef.current) return
      if (isIntersecting && isVisible) {
        workerRef.current.postMessage({ type: 'RESUME' } as MainToWorkerMessage)
      } else {
        workerRef.current.postMessage({ type: 'PAUSE' } as MainToWorkerMessage)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry) {
          isIntersecting = entry.isIntersecting
          updateRenderState()
        }
      },
      { threshold: 0.05 }
    )
    io.observe(container)

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible'
      updateRenderState()
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    // ResizeObserver for responsive container adaptation
    const ro = new ResizeObserver(() => handleResize())
    ro.observe(container)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      io.disconnect()
      ro.disconnect()

      if (canvas.parentNode === container) {
        container.removeChild(canvas)
      }

      if (workerRef.current) {
        try {
          workerRef.current.postMessage({ type: 'DISPOSE' } as MainToWorkerMessage)
          workerRef.current.terminate()
        } catch {
          // Safe catch
        }
        workerRef.current = null
      }
    }
  }, [isLoaded, isFallback, tier, dpr, lightMode, isOffscreenSupported, hasWorkerFailed])

  const shouldUseFallback = !isLoaded || isFallback || tier === 0 || !isOffscreenSupported || hasWorkerFailed

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      style={{ boxShadow: 'none' }}
    >
      {/* Tier 0 Vector Artwork Fallback */}
      {shouldUseFallback && (
        <ScholarSilhouetteSVG className="absolute inset-0 w-full h-full" lightMode={lightMode} />
      )}

      {/* Subtle instant placeholder until worker signals READY */}
      {!shouldUseFallback && !isWorkerReady && (
        <ScholarSilhouetteSVG
          className="absolute inset-0 w-full h-full transition-opacity duration-300"
          lightMode={lightMode}
        />
      )}
    </div>
  )
}

export default HeroCanvas3D
