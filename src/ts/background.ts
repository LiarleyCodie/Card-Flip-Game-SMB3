import { context as c, canvasSettings } from '../main'

export function background() {
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvasSettings.width, canvasSettings.height)
}
