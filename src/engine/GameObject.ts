export interface GameObjectConfig {
  x: number
  y: number
  width: number
  height: number
}

export default class GameObject {
  x: number
  y: number
  width: number
  height: number
  constructor(config: GameObjectConfig) {
    this.x = config.x
    this.y = config.y
    this.width = config.width
    this.height = config.height
  }
}
