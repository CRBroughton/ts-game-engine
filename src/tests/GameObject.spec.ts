import { describe, expect, it } from 'vitest'
import GameObject from '../engine/GameObject'

describe('GameObject tests', () => {
  it('sets the configuration for a GameObject', () => {
    const object = new GameObject({ height: 16, width: 16, position: { x: 5, y: 5 } })

    expect(object.height).toEqual(16)
    expect(object.width).toEqual(16)

    expect(object.position.x).toEqual(5 - 16 / 2)
    expect(object.position.y).toEqual(5 - 16 / 2)
  })
})
