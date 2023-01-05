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
  frames?: number
  src: string
  position: Position
  buffer?: number
}

export type SpriteConfig = SpriteType & GameObjectConfig

export type Intersection = (
  x1: number,
  y1: number,
  w1: number,
  h1: number,
  x2: number,
  y2: number,
  w2: number,
  h2: number
) => boolean
