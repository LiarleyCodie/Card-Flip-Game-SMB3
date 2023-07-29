// // prettier-ignore
// export function createFilledGrid(rows: number, cols: number, object: any = null): any[][] {
//   const grid: any[][] = []

import { canvasSettings } from '../main'

//   for (let row = 0; row < rows; row++) {
//     grid.push([])
//     for (let col = 0; col < cols; col++) {
//       grid[row].push(object)
//     }
//   }

//   return grid
// }

export class Grid {
  public grid: any[]
  public readonly position: { x: number; y: number }
  public constructor({ position }: { position: { x: number; y: number } }) {
    this.grid = []
    this.position = position
  }
  public createFilledGrid(rows: number, cols: number, object: any = null) {
    const grid: any[][] = []

    for (let row = 0; row < rows; row++) {
      grid.push([])
      for (let col = 0; col < cols; col++) {
        grid[row].push(object)
      }
    }

    this.grid = grid
  }
}

export function createFilledGrid(
  rows: number,
  cols: number,
  object: any
): Grid {
  const grid: Grid = new Grid({
    position: { x: canvasSettings.width / 2, y: canvasSettings.height / 2 },
  })
  grid.createFilledGrid(rows, cols, object)

  return grid
}
