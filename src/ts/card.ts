import { context } from '../main'
import { GameObject } from './GameObject'
import { sprites } from './preload'


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
  id: number
}

type TFaces = 'oneup' | 'star' | 'fireflower' | 'mushroom' | 'twentycoins' | 'tencoins'

export class Card extends GameObject {
  public currentFace: number
  private faces: { back: number; oneup: number; star: number; fireflower: number; mushroom: number; twentycoins: number; tencoins: number }
  public id: number
  private flipped: boolean

  public constructor({ position, size, id }: ICard) {
    super({ position, size })
    this.faces = {
      back: 132,
      oneup: 0,
      star: 22,
      fireflower: 44,
      mushroom: 66,
      twentycoins: 88,
      tencoins: 110
    }
    this.currentFace = this.faces.star
    this.id = id
    this.flipped = false
  }

  public draw() {
    const currentFace: number = this.flipped ? this.currentFace : this.faces.back
    context.drawImage(
      sprites,
      currentFace,
      0,
      22,
      32,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    )
  }

  public flip() {
    this.flipped = !this.flipped
  }

  // temporary
  public changeFace(face: TFaces): void {
    this.currentFace = this.faces[face]
  }
}
