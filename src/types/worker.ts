export type MainToWorkerMessage =
  | {
      type: 'INIT'
      canvas: OffscreenCanvas
      width: number
      height: number
      dpr: number
      tier: number
      lightMode: boolean
    }
  | { type: 'RESIZE'; width: number; height: number }
  | { type: 'SCROLL'; scrollY: number; maxScroll: number }
  | { type: 'PAUSE' }
  | { type: 'RESUME' }
  | { type: 'MOUSE_MOVE'; normalizedX: number; normalizedY: number }
  | { type: 'DISPOSE' };

export type WorkerToMainMessage =
  | { type: 'READY'; rendererInfo: string }
  | { type: 'FPS_REPORT'; fps: number }
  | { type: 'ERROR'; message: string };
