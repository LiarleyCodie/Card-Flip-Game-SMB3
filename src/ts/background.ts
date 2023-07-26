import { context as c, canvas } from './canvas'

export function background() {
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
}
