// // prettier-ignore
// export function createFilledGrid(rows: number, cols: number, object: any = null): any[][] {
//   const grid: any[][] = []

import { Card } from './card'

export class Grid {
  public grid: Card[][]
  public readonly position: { x: number; y: number }
  public constructor({ position }: { position: { x: number; y: number } }) {
    this.grid = []
    this.position = position
  }
  public createFilledGrid(rows: number, cols: number, object: any = null) {
    const grid: Card[][] = []

    for (let row = 0; row < rows; row++) {
      grid.push([])
      for (let col = 0; col < cols; col++) {
        grid[row].push(object)
      }
    }

    this.grid = grid
  }
  public distributeCards(gap: number = 5) {
    if (this.grid.length) {
      const totalWidth: number = this.grid[0].length * this.grid[0][0].size.w + ((this.grid[0].length - 1) * gap)
      const totalHeight: number = this.grid.length * this.grid[0][0].size.h + ((this.grid.length - 1) * gap)
      for (let row: number = 0; row < this.grid.length; row++) {
        for (let col: number = 0; col < this.grid[row].length; col++) {
          const card = this.grid[row][col]
          card.position.x = this.position.x - totalWidth / 2 + (card.size.w * col) + (gap * col)
          card.position.y = this.position.y - totalHeight / 2 + (card.size.h * row) + (gap * row)
        }
      }
    }
  }
}
