import type { GameObjectConfig, Position } from './types'

export default class GameObject {
  width: number
  height: number
  position: Position

  constructor(config: GameObjectConfig) {
    this.position = {
      x: config.position.x - config.width / 2,
      y: config.position.y - config.height / 2,
    }
    this.width = config.width
    this.height = config.height
  }
}
