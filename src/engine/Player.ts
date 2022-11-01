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
  held: string
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

    this.held = ''
  }

  update() {
    this.controls()
    this.currenctPos()
    this.wallCollision()

    this.normalised = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    }
  }

  currenctPos() {
    if (this.position.x < 0 || this.position.x > 128)
      return
    this.position.x += this.vx
    this.position.y += this.vy
  }

  wallCollision() {
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
          if (!this.held) {
            this.keys.a.pressed = true
            this.held = event.key
          }
          break
        case 'd':
        case 'ArrowRight':
          if (!this.held) {
            this.keys.d.pressed = true
            this.held = event.key
          }
          break
        case 'w':
        case 'ArrowUp':
          if (!this.held) {
            this.keys.w.pressed = true
            this.held = event.key
          }
          break
        case 's':
        case 'ArrowDown':
          if (!this.held) {
            this.keys.s.pressed = true
            this.held = event.key
          }
          break
      }
    })

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        case 'a':
        case 'ArrowLeft':
          this.keys.a.pressed = false
          this.held = ''
          break
        case 'd':
        case 'ArrowRight':
          this.keys.d.pressed = false
          this.held = ''
          break
        case 'w':
        case 'ArrowUp':
          this.keys.w.pressed = false
          this.held = ''
          break
        case 's':
        case 'ArrowDown':
          this.keys.s.pressed = false
          this.held = ''
          break
      }
    })
  }

  controls() {
    this.vx = 0
    this.vy = 0

    if (this.keys.d.pressed && this.collidingSide !== 'right')
      this.vx = 1

    if (this.keys.a.pressed && this.collidingSide !== 'left')
      this.vx = -1

    if (this.keys.w.pressed && this.collidingSide !== 'top')
      this.vy = -1

    if (this.keys.s.pressed && this.collidingSide !== 'bottom')
      this.vy = 1
  }
}
