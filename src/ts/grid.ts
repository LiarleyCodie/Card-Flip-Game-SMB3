// prettier-ignore
export function createFilledGrid(rows: number, cols: number, object: any = null): any[][] {
  const grid: any[][] = []

  for (let row = 0; row < rows; row++) {
    grid.push([])
    for (let col = 0; col < cols; col++) {
      grid[row].push(object)
    }
  }

  return grid
}
