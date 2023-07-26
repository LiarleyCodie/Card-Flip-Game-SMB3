import { background } from './background'
import { context as c, canvas } from './canvas'
import { createFilledGrid } from './grid'

const gridInstances: ICard[][][] = []

interface IGameObject {
  position: {
    x: number
    y: number
  }
  size: {
    w: number
    h: number
  }
}

//#region Cards
interface ICard extends IGameObject {
  draw: () => void
}

const card: ICard = {
  position: {
    x: 0,
    y: 0,
  },
  size: {
    w: 22,
    h: 32,
  },
  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.size.w, this.size.h)
  },
}
//#endregion

//#region Cards Grid
// grid[row][col]
const cardsGrid: ICard[][] = createFilledGrid(2, 3, card)

gridInstances.push(cardsGrid)
//#endregion

export function mainCreate() {
  console.log('[Create]')
}

export function mainUpdate() {
  // console.log('[Update]')
  background?.()

  if (gridInstances.length) {
    gridInstances.forEach((gridInst: ICard[][]) => {
      gridInst.forEach((gridRow: ICard[]) => {
        gridRow.forEach((card: ICard) => {
          card?.draw()
        })
      })
    })
  }
}
