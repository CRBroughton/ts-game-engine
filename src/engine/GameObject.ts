import type { GameObjectConfig, Position } from './types'

export default class GameObject {
  width: number
  height: number
  position: Position
  normalised: Position

  constructor(config: GameObjectConfig) {
    this.position = {
      x: config.position.x,
      y: config.position.y,
    }

    this.normalised = {
      x: 0,
      y: 0,
    }

    this.width = config.width
    this.height = config.height
  }
}
