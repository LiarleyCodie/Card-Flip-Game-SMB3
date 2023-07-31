import { Card } from './Card'

export class Grid {
  public grid: Card[][]
  public readonly position: { x: number; y: number }
  public constructor({ position }: { position: { x: number; y: number } }) {
    this.grid = []
    this.position = position
  }
  /** 
    * @param {number} rows - indicate the rows amount
    * @param {number} cols - indicates the columns amount
    * @param {any} object - if you want to create an one already populated grid, pass an (card) object as argument
    * this method will define the `grid` of this instance (*optional*)
    */
  public createGrid(rows: number, cols: number, object?: any) {
    const grid: Card[][] = []

    for (let row = 0; row < rows; row++) {
      grid.push([])
      for (let col = 0; col < cols; col++) {
        grid[row].push(object)
      }
    }

    this.grid = grid
  }
  /**
   * @param {number} rowGap - Indicate the gap between cards rows (*optional*)
   * @param {number} colGap - Indicate the gap between cards columns (*optional*)
   * As the name suggests, this method will automatically deal the cards
   * @default [5]
   */
  public distributeCards(rowGap: number = 5, colGap: number = 5) {
    if (this.grid.length) {
      const totalWidth: number = this.grid[0].length * this.grid[0][0].size.w + ((this.grid[0].length - 1) * colGap)
      const totalHeight: number = this.grid.length * this.grid[0][0].size.h + ((this.grid.length - 1) * rowGap)
      for (let row: number = 0; row < this.grid.length; row++) {
        for (let col: number = 0; col < this.grid[row].length; col++) {
          const card = this.grid[row][col]
          card.position.x = this.position.x - totalWidth / 2 + (card.size.w * col) + (colGap * col)
          card.position.y = this.position.y - totalHeight / 2 + (card.size.h * row) + (rowGap * row)

          if (col === 1 && row === 1) {
            card.changeFace('mushroom')
            card.flip()
            console.log(card.currentFace)
          }
        }
      }
    }
  }
}
