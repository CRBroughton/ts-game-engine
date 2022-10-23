import Sprite from './Sprite'
import type { SpriteConfig } from './types'

export default class Entity extends Sprite {
  vy: number
  vx: number
  isColliding: boolean
  constructor(config: SpriteConfig) {
    super(config)
    this.vx = 0
    this.vy = 0
    this.isColliding = false
  }

  update() {
  }
}
