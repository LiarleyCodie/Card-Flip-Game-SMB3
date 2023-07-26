import { background } from './background'
import { DebugTools } from './Debug'
import { createFilledGrid } from './grid'
import { Card } from './card'

const debugTools = new DebugTools({ showlinesInCenter: true })

const gridCardInstances: Card[][][] = []

const card = new Card({ position: { x: 0, y: 0 }, size: { w: 22, h: 32 } })

export function mainCreate() {
  console.log('[Create]')
  gridCardInstances[0] = createFilledGrid(2, 3, card)
}

export function mainUpdate() {
  background?.()
  debugTools.enable()

  if (gridCardInstances.length) {
    gridCardInstances.forEach((gridInst: Card[][]) => {
      gridInst.forEach((gridRow: Card[]) => {
        gridRow.forEach((card: Card) => {
          card?.draw()
        })
      })
    })
  }
}

// cardsGrid[row][col]
