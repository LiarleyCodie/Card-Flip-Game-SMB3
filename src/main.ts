import { preload } from './ts/preload'
import { mainUpdate, mainCreate } from './ts/create_and_update'
import './style.css'

const runButton = document.querySelector('#run') as HTMLButtonElement
const stopButton = document.querySelector('#stop') as HTMLButtonElement
const canvas = document.querySelector('#gameCanvas') as HTMLCanvasElement
export const context = canvas.getContext('2d') as CanvasRenderingContext2D
interface ICanvasSettings {
  width: number
  height: number
}
export const canvasSettings: ICanvasSettings = {
  width: 256,
  height: 224,
}
let isRunning: boolean = false
let alreadyExecuted: boolean = false
let animationFrameID: number = 0
window.onload = () => {
  preload()
}

export let currentFrame: number = 0

function canvasInit(settings: ICanvasSettings) {
  canvas.width = settings.width
  canvas.height = settings.height
  context.imageSmoothingEnabled = false
  canvas.style.imageRendering = 'pixelated'
}

function loop() {
  mainUpdate?.()

  animationFrameID = window.requestAnimationFrame(loop)
  currentFrame = currentFrame + 1
}

runButton.onclick = () => {
  if (!isRunning) {
    if (!alreadyExecuted) {
      canvasInit?.(canvasSettings)
      mainCreate?.()
    }
    loop?.()
    alreadyExecuted = true
    return (isRunning = true)
  }

  console.log('[! ALREADY IN EXECUTION !]')
}

stopButton.onclick = () => {
  if (isRunning) {
    cancelAnimationFrame(animationFrameID)
    return (isRunning = false)
  }

  alreadyExecuted
    ? console.log('[! ALREADY STOPPED !]')
    : console.log('[! NOT YET RUNNING TO STOP SOMETHING !]')
}
