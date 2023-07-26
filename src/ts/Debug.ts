import { canvas, context } from './canvas'

interface IDebugTools {
  showlinesInCenter: boolean
}

/**
 * Instantiate a set of debug methods, such as: `showlinesInCenter`, `showFPS` and more.
 * Enable each one by passing a boolean to the respective method as argument.
 * For enable, call `.enable()` within your main update method
 */
export class DebugTools {
  public showlinesInCenter: boolean

  public constructor({ showlinesInCenter }: IDebugTools) {
    this.showlinesInCenter = showlinesInCenter
  }
  private DrawLinesInCenter() {
    context.strokeStyle = '#ffee00'
    context.beginPath()
    context.moveTo(canvas.width / 2, 0)
    context.lineTo(canvas.width / 2, canvas.height)
    context.stroke()

    context.strokeStyle = '#00ffee'
    context.beginPath()
    context.moveTo(0, canvas.height / 2)
    context.lineTo(canvas.width, canvas.height / 2)
    context.stroke()
  }

  public enable() {
    this.showlinesInCenter && this.DrawLinesInCenter?.()
  }
}
