import Sprite from './Sprite'
import type { SpriteConfig } from './types'

export default class Entity extends Sprite {
  vy: number
  vx: number
  isColliding: boolean
  collidingSide: string
  constructor(config: SpriteConfig) {
    super(config)
    this.vx = 0
    this.vy = 0
    this.isColliding = false
    this.collidingSide = ''
  }

  update() {
    this.normalised = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    }
  }
}
