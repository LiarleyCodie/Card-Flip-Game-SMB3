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
  id: number
}

interface IFace {
  title: string
  face: number
}

interface IFaces {
  back: IFace
  oneup: IFace
  star: IFace
  fireflower: IFace
  mushroom: IFace
  twentycoins: IFace
  tencoins: IFace
}

type TFaces =
  | 'oneup'
  | 'star'
  | 'fireflower'
  | 'mushroom'
  | 'twentycoins'
  | 'tencoins'

export class Card extends GameObject {
  private currentFace: IFace
  private faces: IFaces
  public id: number
  private flipped: boolean

  public constructor({ position, size, id }: ICard) {
    super({ position, size })
    this.faces = {
      back: {
        title: 'backface',
        face: 132,
      },
      oneup: {
        title: 'oneup',
        face: 0,
      },
      star: {
        title: 'star',
        face: 22,
      },
      fireflower: {
        title: 'fireflower',
        face: 44,
      },
      mushroom: {
        title: 'mushroom',
        face: 66,
      },
      twentycoins: {
        title: 'twentycoins',
        face: 88,
      },
      tencoins: {
        title: 'tencoins',
        face: 110,
      },
    }
    this.currentFace = this.faces.mushroom
    this.id = id
    this.flipped = false
  }

  public draw() {
    const currentFace: IFace | number = this.flipped
      ? this.currentFace
      : this.faces.back
    context.drawImage(
      sprites,
      currentFace.face,
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

  public setFace(face: TFaces = 'mushroom') {
    this.currentFace = this.faces[face]
  }

  public getFace(): string {
    return this.currentFace.title
  }
}
