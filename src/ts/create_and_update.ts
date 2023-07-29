import { background } from './background'
import { DebugTools } from './Debug'
import { Grid, createFilledGrid } from './grid'
import { Card } from './card'
import { canvasSettings } from '../main'

const debugTools = new DebugTools({
  showlinesInCenter: true,
  showCurrentFrame: false,
})
const gridInstances: Grid[] = []

const card = new Card({
  position: { x: 0, y: 0 },
  size: { w: 22, h: 32 },
  currentFace: 3,
})

export function mainCreate() {
  console.log('[Create]')
  gridInstances[0] = createFilledGrid(2, 6, card)

  console.log(gridInstances)
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
              card.draw?.()
            })
          }
        })
      }
    })
  }
}
