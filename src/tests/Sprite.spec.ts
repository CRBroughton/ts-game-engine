import { describe, expect, it } from 'vitest'
import Sprite from '../engine/Sprite'

describe('Sprite tests', () => {
  it('sets the configuration for a Sprite', () => {
    const canvas = document.createElement('canvas')!
    const context = canvas.getContext('2d')!

    const object = new Sprite({
      width: 16,
      height: 16,
      position: { x: 5, y: 5 },
      context,
      row: 1,
      frame: 0, // this is set to 0 by default, thus overriden
      src: './test.png',
    })

    expect(object.height).toEqual(16)
    expect(object.width).toEqual(16)
    expect(object.position.x).toEqual(5 - 16 / 2)
    expect(object.position.y).toEqual(5 - 16 / 2)

    expect(object.context).toBeTruthy()
    expect(object.context.canvas).toBeTruthy()

    expect(object.row).toBe(1)
    expect(object.frame).toBe(0)
    expect(object.src).toBe('./test.png')
  })
})
