import GameObject from './GameObject'
import type { SpriteConfig } from './types'

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
    this.image.src = config.src
    this.row = config.row
    this.frame = 0
    this.src = config.src
  }

  draw() {
    const cropbox = {
      position: {
        x: this.width * this.frame,
        y: this.row,
      },
      width: this.width,
      height: this.height,
    }
    this.context.drawImage(this.image, cropbox.position.x, cropbox.position.y, cropbox.width, this.height, this.position.x, this.position.y, this.width, this.height)
  }
}
