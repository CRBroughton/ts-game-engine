import GameObject from './GameObject'
import type { GameObjectConfig } from './GameObject'

export interface SpriteType {
  context: CanvasRenderingContext2D
  row: number
  frame: number
  src: string
}

type SpriteConfig = SpriteType & GameObjectConfig

export default class Sprite extends GameObject {
  context: CanvasRenderingContext2D
  image: HTMLImageElement
  row: number
  frame: number
  src: string
  constructor(config: SpriteConfig) {
    super(config)
    this.context = config.context
    this.image = new Image()
    this.row = config.row
    this.frame = 0
    this.src = config.src
  }

  draw() {
    this.context.fillRect(this.x, this.y, this.width, this.height)
  }
}
