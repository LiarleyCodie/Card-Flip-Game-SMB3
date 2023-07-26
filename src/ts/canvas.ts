import { mainUpdate, mainCreate } from './create_and_update'

export const canvas = document.querySelector('#gameCanvas') as HTMLCanvasElement
export const context = canvas.getContext('2d') as CanvasRenderingContext2D

export let currentFrame: number = 0

function canvasInit() {
  canvas.width = 256
  canvas.height = 224
  context.imageSmoothingEnabled = false
  canvas.style.imageRendering = 'pixelated'
}

function loop() {
  mainUpdate?.()

  window.requestAnimationFrame(loop)
  currentFrame = currentFrame + 1
}

export function gameInit() {
  canvasInit?.()
  mainCreate?.()
  loop?.()
}
