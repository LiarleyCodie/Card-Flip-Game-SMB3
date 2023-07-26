import { context } from './canvas'
import { GameObject } from './GameObject'
import { sprites } from './preload'

// 0 = backface
// 1 = 1UP
// 2 = fireflower
// 3 = mushroom
// 4 = 20 coins
// 5 = 10 coins

interface ICard {
  position: {
    x: number
    y: number
  }
  size: {
    w: number
    h: number
  }
  currentFace: number
}

export class Card extends GameObject {
  private currentFace: number
  private faces: number[]
  public constructor({ position, size, currentFace }: ICard) {
    super({ position, size })
    this.currentFace = currentFace
    this.faces = [132, 0, 22, 44, 66, 88, 110]
  }

  draw() {
    context.drawImage(
      sprites,
      this.faces[this.currentFace],
      0,
      22,
      32,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    )
  }
}
