export interface IGameObject {
  position: {
    x: number
    y: number
  }
  size: {
    w: number
    h: number
  }
}

export class GameObject {
  public readonly position: { x: number; y: number }
  public readonly size: { w: number; h: number }
  public constructor({ position, size }: IGameObject) {
    this.position = position
    this.size = size
  }
}
