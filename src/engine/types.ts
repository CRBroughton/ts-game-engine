export interface Position {
  x: number
  y: number
}

export interface GameObjectConfig {
  position: Position
  width: number
  height: number
}

export interface SpriteType {
  context: CanvasRenderingContext2D
  row: number
  frame: number
  src: string
  position: Position
}

export type SpriteConfig = SpriteType & GameObjectConfig

