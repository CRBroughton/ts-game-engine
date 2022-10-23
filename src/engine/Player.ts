import Entity from './Entity'
import type { SpriteConfig } from './types'

interface Key {
  pressed: Boolean
}

interface Keys {
  s: Key
  w: Key
  d: Key
  a: Key
}

export default class Player extends Entity {
  keys: Keys
  constructor(config: SpriteConfig) {
    super(config)

    this.listener()

    this.keys = {
      w: {
        pressed: false,
      },
      a: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
      s: {
        pressed: false,
      },
    }
  }

  collision() {
    if (this.position.x >= 128 - this.width)
      this.position.x = 128 - this.width

    if (this.position.x <= 0)
      this.position.x = 0

    if (this.position.y <= 0)
      this.position.y = 0

    if (this.position.y >= 128 - this.width)
      this.position.y = 128 - this.width
  }

  listener() {
    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'a':
        case 'ArrowLeft':
          this.keys.a.pressed = true
          break
        case 'd':
        case 'ArrowRight':
          this.keys.d.pressed = true
          break
        case 'w':
        case 'ArrowUp':
          this.keys.w.pressed = true
          break
        case 's':
        case 'ArrowDown':
          this.keys.s.pressed = true
      }
    })

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'a':
        case 'ArrowLeft':
          this.keys.a.pressed = false
          break
        case 'd':
        case 'ArrowRight':
          this.keys.d.pressed = false
          break
        case 'w':
        case 'ArrowUp':
          this.keys.w.pressed = false
          break
        case 's':
        case 'ArrowDown':
          this.keys.s.pressed = false
      }
    })
  }
}
