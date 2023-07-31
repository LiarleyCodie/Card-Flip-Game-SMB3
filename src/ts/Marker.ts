import { sprites } from './preload'
import { context } from '../main'
import { GameObject } from './GameObject'
import { Grid } from './Grid'
import { Card } from './Card'

interface IMarker {
	position: { x: number; y: number }
	size: { w: number; h: number }
	grid: Grid
}

export class Marker extends GameObject {
	private grid: Grid
	public currentCard: Card | null

	public constructor({ position, size, grid }: IMarker) {
		super({ position, size })
		this.grid = grid
		this.currentCard = null
	}
	public draw() {
		context.drawImage(sprites, 154, 0, 30, 40, this.position.x, this.position.y, this.size.w, this.size.h)
	}
	public autoSetInitialPosition() {
		const card = this.grid.grid[0][0]
		this.position.x = card.position.x - 4
		this.position.y = card.position.y - 4
		this.currentCard = card
	}
}