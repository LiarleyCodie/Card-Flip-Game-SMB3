const moveUp = document.querySelector("#moveUp") as HTMLButtonElement
const moveDown = document.querySelector("#moveDown") as HTMLButtonElement
const moveLeft = document.querySelector("#moveLeft") as HTMLButtonElement
const moveRight = document.querySelector("#moveRight") as HTMLButtonElement
const action = document.querySelector("#action") as HTMLButtonElement
import { markerInstances } from './create_and_update'

export function initControls() {
	moveRight.onclick = () => markerInstances[0].moveRight()
	moveLeft.onclick = () => markerInstances[0].moveLeft()
	moveUp.onclick = () => markerInstances[0].moveUp()
	moveDown.onclick = () => markerInstances[0].moveDown()
	action.onclick = () => markerInstances[0].action()
}