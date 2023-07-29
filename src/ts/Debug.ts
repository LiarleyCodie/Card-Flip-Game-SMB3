import { canvasSettings, context, currentFrame } from '../main'

interface IDebugTools {
  showlinesInCenter?: boolean
  showCurrentFrame?: boolean
}

/**
 * Instantiate a set of debug methods, such as: `showlinesInCenter`, `showCurrentFrame` and more.
 * Enable each one by passing a boolean to the respective method as argument.
 * For enable, call `.enable()` within your main update method
 */
export class DebugTools {
  public showlinesInCenter: boolean | undefined
  public showCurrentFrame: boolean | undefined

  public constructor({ showlinesInCenter, showCurrentFrame }: IDebugTools) {
    this.showlinesInCenter = showlinesInCenter
    this.showCurrentFrame = showCurrentFrame
  }
  private DrawLinesInCenter() {
    context.strokeStyle = '#ffee00'
    context.beginPath()
    context.moveTo(canvasSettings.width / 2, 0)
    context.lineTo(canvasSettings.width / 2, canvasSettings.height)
    context.stroke()

    context.strokeStyle = '#00ffee'
    context.beginPath()
    context.moveTo(0, canvasSettings.height / 2)
    context.lineTo(canvasSettings.width, canvasSettings.height / 2)
    context.stroke()
  }

  public enable() {
    this.showlinesInCenter && this.DrawLinesInCenter?.()
  }
}
