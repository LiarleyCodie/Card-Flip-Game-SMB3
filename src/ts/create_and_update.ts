import { background } from './Background'
import { DebugTools } from './Debug'
import { Grid } from './Grid'
import { Card } from './Card'
import { Marker } from './Marker'
import { canvasSettings } from '../main'
import { initControls } from './Inputs'

const gridInstances: Grid[] = []
export const markerInstances: Marker[] = []

const debugTools = new DebugTools({
  showlinesInCenter: false,
  showCurrentFrame: false,
})

const patterns = [
  [1, 6],
  [2, 4],
]
let currentPattern: number[] = patterns[0]
const faces = ['oneup' , 'star' , 'fireflower' , 'mushroom' , 'twentycoins' , 'tencoins'] //prettier-ignore
function createGrid(pattern: number[], objects: any[]): Grid {
  const grid = new Grid({
    position: { x: canvasSettings.width / 2, y: canvasSettings.height / 2 },
  })
  function createRows(cols: number): Card[][] {
    let rows: Card[][] = []
    const rowFaces: string[] = []
    let faceID: number = Math.round(Math.random() * (objects.length - 1))
    for (let i = 0; i < cols; i++) {
      rowFaces.push(objects[faceID])
      faceID = faceID + 1
      if (faceID > objects.length - 1) faceID = 0
    }
    let firstRow: Card[] = []
    for (let i = 0; i < cols; i++) {
      const card = new Card({ position: { x: 0, y: 0}, size: { w: 22, h: 32}, id: 0 }) //prettier-ignore
      //@ts-ignore
      card.setFace(rowFaces[i])
      firstRow.push(card)
    }
    firstRow = firstRow.sort(() => Math.random() - 0.5)

    const secondRow: Card[] = []
    for (let i = 0; i < cols; i++) {
      const card = new Card({ position: { x: 0, y: 0}, size: { w: 22, h: 32}, id: 0 }) //prettier-ignore
      //@ts-ignore
      card.setFace(rowFaces[i])
      secondRow.push(card)
    }
    
    for (let i = 0; i < cols; i++) {
      firstRow[i].id = i
      secondRow[i].id = i
    }
    rows = [firstRow, secondRow]
    return rows
  }
  let rows: Card[][] = []
  for (let i = 0; i < pattern[0]; i++) {
    let row = createRows(pattern[1])
    rows.push(...row)
  }
  grid.grid = rows
  return grid
}

function createMarker(grid: Grid): Marker {
  const marker = new Marker({
    position: { x: 0, y: 0 },
    size: { w: 30, h: 40 },
    grid,
  })
  marker.updatePosition()
  return marker
}

export function mainCreate() {
  console.log('[Create]')
  const grid = createGrid(currentPattern, faces)
  grid.distributeCards()
  console.log(grid)

  gridInstances[0] = grid
  markerInstances[0] = createMarker(grid)
  initControls()
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

  if (markerInstances.length) {
    markerInstances.forEach((marker: Marker) => {
      marker?.draw?.()
      marker?.updatePosition?.()
    })
  }
}
