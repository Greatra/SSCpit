import * as THREE from 'three'
import type { MainToWorkerMessage, WorkerToMainMessage } from '../types/worker'

// Worker communication helper
function postTypedMessage(msg: WorkerToMainMessage): void {
  ;(self as unknown as { postMessage: (data: WorkerToMainMessage) => void }).postMessage(msg)
}

// State container for scene execution
interface WorkerSceneState {
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  tier: number
  dpr: number
  width: number
  height: number
  animationFrameId: number | null
  particles: THREE.Points
  particlePositions: Float32Array
  particleVelocities: Float32Array
  celestialRings: THREE.Group
  ridgeLayerFar: THREE.Mesh
  ridgeLayerMid: THREE.Mesh
  sunMesh: THREE.Mesh
  sunGlow: THREE.Mesh
  lightMode: boolean
  mouseTargetX: number
  mouseTargetY: number
  scrollProgress: number
  lastFpsReportTime: number
  lastTickTime: number
  ringRotationZ: number
  frameCount: number
}

let state: WorkerSceneState | null = null

// Module-scope scratchpad vectors to guarantee zero heap allocations in the render loop
const _vec3 = new THREE.Vector3()

/**
 * Creates custom procedural Deccan Twilight Sky plane with atmospheric horizon gradient.
 */
function createSkyBackground(lightMode: boolean): THREE.Mesh {
  const geometry = new THREE.PlaneGeometry(160, 90)
  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `
  const fragmentShader = `
    varying vec2 vUv;
    void main() {
      // 3-stop Deccan sky with a separate sunrise palette for light mode.
      vec3 darkCockpit = vec3(${lightMode ? '0.80, 0.90, 0.93' : '0.094, 0.090, 0.082'});
      vec3 coralHorizon = vec3(${lightMode ? '0.96, 0.78, 0.55' : '0.800, 0.471, 0.361'});
      vec3 amberGlow = vec3(${lightMode ? '0.99, 0.91, 0.72' : '0.910, 0.647, 0.353'});

      float t1 = smoothstep(0.0, 0.48, vUv.y);
      float t2 = smoothstep(0.48, 1.0, vUv.y);
      vec3 color = mix(mix(amberGlow, coralHorizon, t1), darkCockpit, t2);

      // 1-line Interleaved Gradient Noise (IGN) dithering to kill 8-bit color banding
      float dither = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
      gl_FragColor = vec4(color + dither, 1.0);
    }
  `

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    depthWrite: false,
    depthTest: false,
  })

  const skyMesh = new THREE.Mesh(geometry, material)
  skyMesh.position.set(0, 0, -40)
  return skyMesh
}

/**
 * Procedurally generates authentic Sahyadri Deccan Trap basalt mountain ridges.
 * Applies terrace-quantization (Pathar / Machi flat tops and Kada vertical scarps).
 */
function createMountainRidgeMesh(
  pointsCount: number,
  width: number,
  height: number,
  color: number,
  roughnessSeed: number
): THREE.Mesh {
  const shape = new THREE.Shape()
  shape.moveTo(-width / 2, -height)

  const step = width / pointsCount
  const terraceSteps = 6.0
  const terraceStrength = 0.65 // 65% terrace step quantization to emulate horizontal flood basalt strata

  for (let i = 0; i <= pointsCount; i++) {
    const x = -width / 2 + i * step
    const normalized = i / pointsCount

    // Base organic undulation of Sahyadri peaks
    const rawH =
      Math.sin(normalized * Math.PI * 2.8 + roughnessSeed) * (height * 0.42) +
      Math.sin(normalized * Math.PI * 6.2 + roughnessSeed * 2.1) * (height * 0.22) +
      Math.sin(normalized * Math.PI * 11.5 + roughnessSeed * 3.4) * (height * 0.09)

    // Normalize to 0..1 relative band for terrace quantization
    const normalizedH = (rawH + height * 0.5) / height
    const steppedH = Math.floor(normalizedH * terraceSteps) / terraceSteps
    const quantizedH =
      (normalizedH * (1 - terraceStrength) + steppedH * terraceStrength) * height - height * 0.5

    shape.lineTo(x, quantizedH)
  }

  shape.lineTo(width / 2, -height)
  shape.closePath()

  const geometry = new THREE.ShapeGeometry(shape)
  const material = new THREE.MeshBasicMaterial({
    color,
    depthTest: true,
  })

  return new THREE.Mesh(geometry, material)
}

/**
 * Creates Sanskrit / Modi celestial chronometer rings (कालचक्र).
 */
function createCelestialRings(tier: number, lightMode: boolean): THREE.Group {
  const group = new THREE.Group()
  if (lightMode) {
    group.visible = false
    return group
  }

  // Outer terracotta ring
  const outerRingGeo = new THREE.TorusGeometry(6.2, 0.04, 12, tier >= 2 ? 64 : 36)
  const outerRingMat = new THREE.MeshBasicMaterial({
    color: 0xd95d39,
    transparent: true,
    opacity: 0.22,
  })
  const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat)
  group.add(outerRing)

  // Middle amber astronomical division ring
  const midRingGeo = new THREE.TorusGeometry(4.8, 0.03, 12, tier >= 2 ? 56 : 32)
  const midRingMat = new THREE.MeshBasicMaterial({
    color: 0xc5a059,
    transparent: true,
    opacity: 0.18,
  })
  const midRing = new THREE.Mesh(midRingGeo, midRingMat)
  midRing.rotation.x = 0.2
  group.add(midRing)

  // Inner jade teal accent ring
  const innerRingGeo = new THREE.TorusGeometry(3.6, 0.025, 8, tier >= 2 ? 48 : 28)
  const innerRingMat = new THREE.MeshBasicMaterial({
    color: 0x3ea890,
    transparent: true,
    opacity: 0.15,
  })
  const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat)
  innerRing.rotation.y = 0.3
  group.add(innerRing)

  // Geometric radial chronometer markers (9 epochs / chapters)
  const markerCount = 9
  const markerGeo = new THREE.BoxGeometry(0.08, 0.6, 0.04)
  const markerMat = new THREE.MeshBasicMaterial({
    color: 0xc5a059,
    transparent: true,
    opacity: 0.25,
  })

  for (let i = 0; i < markerCount; i++) {
    const angle = (i / markerCount) * Math.PI * 2
    const marker = new THREE.Mesh(markerGeo, markerMat)
    marker.position.set(Math.cos(angle) * 4.8, Math.sin(angle) * 4.8, 0)
    marker.rotation.z = angle + Math.PI / 2
    group.add(marker)
  }

  group.position.set(0, -2.2, -14)
  return group
}

/**
 * Initializes floating warm parchment dust particles.
 */
function createDustParticles(tier: number, lightMode: boolean): {
  points: THREE.Points
  positions: Float32Array
  velocities: Float32Array
} {
  const count = tier <= 1 ? 280 : 650
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const velocities = new Float32Array(count * 3)

  const palette = lightMode
    ? [
        new THREE.Color(0xd79a5b),
        new THREE.Color(0xe8b56e),
        new THREE.Color(0xfff0c7),
        new THREE.Color(0xc8784e),
      ]
    : [
    new THREE.Color(0xcc785c), // Terracotta
    new THREE.Color(0xe8a55a), // Ochre Amber
    new THREE.Color(0xfff2df), // Cream parchment
    new THREE.Color(0xffaa55), // Luminous ember
      ]

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 36
    positions[i3 + 1] = (Math.random() - 0.5) * 22
    positions[i3 + 2] = (Math.random() - 0.5) * 24 - 4

    // Gentle upward and rotational drift
    velocities[i3] = (Math.random() - 0.5) * 0.008
    velocities[i3 + 1] = 0.006 + Math.random() * 0.012
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.006

    const col = palette[Math.floor(Math.random() * palette.length)]
    colors[i3] = col.r
    colors[i3 + 1] = col.g
    colors[i3 + 2] = col.b
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: tier <= 1 ? 0.14 : 0.18,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.NormalBlending,
    depthWrite: false,
  })

  const points = new THREE.Points(geometry, material)
  return { points, positions, velocities }
}

/**
 * Initializes Three.js render pipeline on OffscreenCanvas.
 */
function initRenderer(
  canvas: OffscreenCanvas,
  width: number,
  height: number,
  dpr: number,
  tier: number,
  lightMode: boolean
): void {
  try {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: tier >= 2,
      alpha: true,
      powerPreference: tier >= 2 ? 'high-performance' : 'low-power',
      precision: tier === 1 ? 'mediump' : 'highp',
      stencil: false,
      depth: true,
    })

    // Context loss resilience
    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault()
      postTypedMessage({
        type: 'ERROR',
        message: 'WebGL context lost, falling back to SVG',
      })
    })

    renderer.setPixelRatio(dpr)
    renderer.setSize(width, height, false)
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(lightMode ? 0xf0d4ad : 0x140604, lightMode ? 0.01 : 0.015)

    const aspect = width / height
    const fov = aspect < 1.0 ? 56 : 48
    const camera = new THREE.PerspectiveCamera(fov, aspect, 0.1, 100)
    camera.position.set(0, 0, aspect < 1.0 ? 18 : 16)

    // 1. Sky backdrop
    const sky = createSkyBackground(lightMode)
    scene.add(sky)

    // 2. Horizon Sun (Warm Amber-Gold Twilight Glow)
    const sunGeo = new THREE.CircleGeometry(2.2, tier >= 2 ? 48 : 32)
    const sunMat = new THREE.MeshBasicMaterial({
      color: lightMode ? 0xf7b84c : 0xf59e38,
      transparent: true,
      opacity: 0.85,
      depthTest: true,
    })
    const sunMesh = new THREE.Mesh(sunGeo, sunMat)
    sunMesh.position.set(0, -3.2, -18)
    scene.add(sunMesh)

    // Keep the sun as a crisp disc. No corona, blur, or bloom layer.
    const sunGlow = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial())
    sunGlow.visible = false

    // 3. Sahyadri mountain ridges (distant and mid-ground)
    const ridgeLayerFar = createMountainRidgeMesh(
      24,
      60,
      lightMode ? 8 : 12,
      lightMode ? 0xc07b53 : 0x360d09,
      1.2
    )
    ridgeLayerFar.position.set(0, -5.5, -22)
    scene.add(ridgeLayerFar)

    const ridgeLayerMid = createMountainRidgeMesh(
      36,
      44,
      lightMode ? 6 : 9,
      lightMode ? 0x724536 : 0x1b0604,
      3.7
    )
    ridgeLayerMid.position.set(0, -4.8, -12)
    scene.add(ridgeLayerMid)

    // 4. Sanskrit / Modi celestial rings
    const celestialRings = createCelestialRings(tier, lightMode)
    scene.add(celestialRings)

    // 5. Ambient floating dust / scroll particles
    const { points: particles, positions: particlePositions, velocities: particleVelocities } =
      createDustParticles(tier, lightMode)
    scene.add(particles)

    state = {
      renderer,
      scene,
      camera,
      tier,
      dpr,
      width,
      height,
      animationFrameId: null,
      particles,
      particlePositions,
      particleVelocities,
      celestialRings,
      ridgeLayerFar,
      ridgeLayerMid,
      sunMesh,
      sunGlow,
      lightMode,
      mouseTargetX: 0,
      mouseTargetY: 0,
      scrollProgress: 0,
      lastFpsReportTime: performance.now(),
      lastTickTime: performance.now(),
      ringRotationZ: 0,
      frameCount: 0,
    }

    // Start 60fps render loop
    startAnimationLoop()

    postTypedMessage({
      type: 'READY',
      rendererInfo: `WebGL r${THREE.REVISION} | Tier: ${tier} | DPR: ${dpr.toFixed(2)}`,
    })
  } catch (err) {
    postTypedMessage({
      type: 'ERROR',
      message: err instanceof Error ? err.message : 'Failed to initialize Three.js worker scene',
    })
  }
}

/**
 * High-performance 60 FPS animation loop running entirely inside the worker thread.
 * Pre-allocates variables; zero heap allocations per tick.
 */
function startAnimationLoop(): void {
  function tick(timestamp: number): void {
    if (!state) return

    // 1. Smoothly interpolate camera tilt based on mouse position
    state.camera.position.x += (state.mouseTargetX * 1.5 - state.camera.position.x) * 0.04
    state.camera.position.y += (-state.mouseTargetY * 0.8 - state.camera.position.y) * 0.04

    // 2. Parallax layer translations linked to scroll progress
    const scrollYOffset = state.scrollProgress * (state.lightMode ? 3.2 : 4.0)
    state.ridgeLayerFar.position.y = -5.5 + scrollYOffset * 0.25
    state.ridgeLayerMid.position.y = -4.8 + scrollYOffset * 0.55
    state.sunMesh.position.y = -3.2 + scrollYOffset * 0.15
    state.sunGlow.position.y = -3.2 + scrollYOffset * 0.15

    // 3. Smooth continuous celestial ring rotations (independent of clock resets)
    const deltaMs = state.lastTickTime > 0 ? Math.min(timestamp - state.lastTickTime, 64) : 16
    state.lastTickTime = timestamp
    if (!state.lightMode) {
      state.ringRotationZ = (state.ringRotationZ + deltaMs * 0.00015) % (Math.PI * 2)
      state.celestialRings.rotation.z = state.ringRotationZ
      state.celestialRings.rotation.y = Math.sin(timestamp * 0.0003) * 0.15
      state.celestialRings.position.y = -2.2 + scrollYOffset * 0.35
    }

    // 4. Update dust particles
    const positions = state.particlePositions
    const velocities = state.particleVelocities
    const count = positions.length / 3

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] += velocities[i3]
      positions[i3 + 1] += velocities[i3 + 1]
      positions[i3 + 2] += velocities[i3 + 2]

      // Wrap around bounds seamlessly
      if (positions[i3 + 1] > 11) {
        positions[i3 + 1] = -11
        positions[i3] = (Math.random() - 0.5) * 36
      }
      if (positions[i3] > 18) positions[i3] = -18
      if (positions[i3] < -18) positions[i3] = 18
    }
    state.particles.geometry.attributes.position.needsUpdate = true

    // Look at scene center
    _vec3.set(0, scrollYOffset * 0.2, 0)
    state.camera.lookAt(_vec3)

    // Render frame
    state.renderer.render(state.scene, state.camera)

    // FPS Telemetry Calculation (Report once per second)
    state.frameCount++
    if (timestamp - state.lastFpsReportTime >= 1000) {
      const elapsed = (timestamp - state.lastFpsReportTime) / 1000
      const currentFps = Math.round(state.frameCount / elapsed)
      postTypedMessage({
        type: 'FPS_REPORT',
        fps: currentFps,
      })
      state.frameCount = 0
      state.lastFpsReportTime = timestamp
    }

    if (state) {
      state.animationFrameId = requestAnimationFrame(tick)
    }
  }

  if (state) {
    state.animationFrameId = requestAnimationFrame(tick)
  }
}

/**
 * Memory-safe scene disposal to eliminate leaks when navigating or unmounting.
 */
function disposeScene(): void {
  if (!state) return

  if (state.animationFrameId !== null) {
    cancelAnimationFrame(state.animationFrameId)
    state.animationFrameId = null
  }

  // Dispose all scene objects
  state.scene.traverse((obj) => {
    if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
      obj.geometry.dispose()
      if (Array.isArray(obj.material)) {
        obj.material.forEach((m) => m.dispose())
      } else {
        obj.material.dispose()
      }
    }
  })

  state.renderer.dispose()
  state = null
}

// Main message handler listening to events dispatched from React main thread
self.addEventListener('message', (e: MessageEvent<MainToWorkerMessage>) => {
  const data = e.data
  if (!data) return

  switch (data.type) {
    case 'INIT': {
      initRenderer(data.canvas, data.width, data.height, data.dpr, data.tier, data.lightMode)
      break
    }
    case 'RESIZE': {
      if (state) {
        state.width = data.width
        state.height = data.height
        const aspect = data.width / data.height
        state.camera.aspect = aspect
        state.camera.fov = aspect < 1.0 ? 56 : 48
        state.camera.position.z = aspect < 1.0 ? 18 : 16
        state.camera.updateProjectionMatrix()
        state.renderer.setSize(data.width, data.height, false)
      }
      break
    }
    case 'SCROLL': {
      if (state) {
        state.scrollProgress = data.maxScroll > 0 ? Math.min(1, Math.max(0, data.scrollY / data.maxScroll)) : 0
      }
      break
    }
    case 'PAUSE': {
      if (state && state.animationFrameId !== null) {
        cancelAnimationFrame(state.animationFrameId)
        state.animationFrameId = null
      }
      break
    }
    case 'RESUME': {
      if (state && state.animationFrameId === null) {
        startAnimationLoop()
      }
      break
    }
    case 'MOUSE_MOVE': {
      if (state) {
        state.mouseTargetX = data.normalizedX
        state.mouseTargetY = data.normalizedY
      }
      break
    }
    case 'DISPOSE': {
      disposeScene()
      break
    }
  }
})
