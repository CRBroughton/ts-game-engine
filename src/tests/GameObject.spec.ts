import { describe, expect, it } from 'vitest'
import GameObject from '../engine/GameObject'

describe('GameObject tests', () => {
  it('sets the configuration for a GameObject', () => {
    const object = new GameObject({ height: 10, width: 10, x: 5, y: 5 })

    expect(object.height).toEqual(10)
    expect(object.width).toEqual(10)
    expect(object.x).toEqual(5)
    expect(object.y).toEqual(5)
  })
})
