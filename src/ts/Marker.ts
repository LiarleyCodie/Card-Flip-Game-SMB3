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
	private canMove: boolean
	private dist: number
	private cardIndex: { row: number; col: number }

	public constructor({ position, size, grid }: IMarker) {
		super({ position, size })
		this.grid = grid
		this.currentCard = null
		this.canMove = this.grid ? true : false
		this.dist = 4
		this.cardIndex = { row: 0, col: 0 }
	}
	public draw() {
		context.drawImage(sprites, 154, 0, 30, 40, this.position.x, this.position.y, this.size.w, this.size.h)
	}
	public updatePosition() {
		if (this.canMove) {
			const card = this.grid.grid[this.cardIndex.row][this.cardIndex.col]
			this.position.x = card.position.x - this.dist
			this.position.y = card.position.y - this.dist
			this.currentCard = card
		}
	}
	public moveRight() {
		if (this.canMove) {
			const lastCol = this.grid.grid[0].length - 1
			this.cardIndex.col = this.cardIndex.col >= lastCol ? 0 : this.cardIndex.col += 1
		}
	}
	public moveLeft() {
		if (this.canMove) {
			const lastCol = this.grid.grid[0].length - 1
			this.cardIndex.col = this.cardIndex.col <= 0 ? lastCol : this.cardIndex.col -= 1
		}
	}
	public moveUp() {
		if (this.canMove) {
			const lastRow = this.grid.grid.length - 1
			this.cardIndex.row = this.cardIndex.row <= 0 ? lastRow : this.cardIndex.row -= 1
		}
	}
	public moveDown() {
		if (this.canMove) {
			const lastRow = this.grid.grid.length - 1
			this.cardIndex.row = this.cardIndex.row >= lastRow ? 0 : this.cardIndex.row += 1
		}
	}
}