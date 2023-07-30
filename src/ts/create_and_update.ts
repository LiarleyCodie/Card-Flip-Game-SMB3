import { background } from './background'
import { DebugTools } from './Debug'
import { Grid } from './grid'
import { Card } from './card'
import { canvasSettings } from '../main'

const debugTools = new DebugTools({
  showlinesInCenter: true,
  showCurrentFrame: false,
})
const gridInstances: Grid[] = []

export function mainCreate() {
  console.log('[Create]')
  let grid = new Grid({
    position: { x: canvasSettings.width / 2, y: canvasSettings.height / 2 },
  })
  grid.createGrid(2, 5)
  grid.grid.forEach((row) => {
    for (let i = 0; i < row.length; i++) {
      row[i] = new Card({
        position: { x: 0, y: 0 },
        size: { w: 22, h: 32 },
        currentFace: 3,
        id: i,
      })
    }
  })
  grid.distributeCards()

  gridInstances.push(grid)
  // console.log(gridInstances[0])
}

export function mainUpdate() {
  background?.()
  debugTools.enable()

  if (gridInstances.length) {
    gridInstances.forEach((gridInst) => {
      if (gridInst.grid.length) {
        gridInst.grid.forEach((row) => {
          if (row.length) {
            row.forEach((card: Card) => {
              card?.draw?.()
            })
          }
        })
      }
    })
  }
}
