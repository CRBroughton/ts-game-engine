import { describe, expect, it } from 'vitest'
import { store } from '../store'

describe('store tests', () => {
  it('increments the counter', () => {
    const { counter, increment } = store()

    expect(counter.value).toEqual(0)

    increment()

    expect(counter.value).toEqual(1)
  })
})
