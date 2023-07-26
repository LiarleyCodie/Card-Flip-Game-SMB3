import { context } from './canvas'
import { GameObject } from './GameObject'

export class Card extends GameObject {
  draw() {
    context.fillStyle = 'blue'
    context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h)
  }
}
