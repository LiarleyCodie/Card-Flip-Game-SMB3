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

function createGrid(): Grid {
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
  grid.distributeCards(5, 8)

  return grid
}

function createMarker(grid: Grid): Marker {
  const marker = new Marker({ position: { x: 0, y: 0 }, size: { w: 30, h: 40 }, grid })
  marker.updatePosition()
  return marker
}

export function mainCreate() {
  console.log('[Create]')
  const grid = createGrid()

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
