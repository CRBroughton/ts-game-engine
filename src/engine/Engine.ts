import type Entity from './Entity'
import type Player from './Player'
import type Sprite from './Sprite'
import type { Intersection } from './types'

export function debugEngine(
  context: CanvasRenderingContext2D,
  entity: Entity | Player,
) {
  context.font = '10px Arial'
  context.fillStyle = 'white'
  context.fillText(`X: ${entity.position.x}`, 1, 10)
  context.fillText(`Y: ${entity.position.y}`, 1, 20)
  context.fillText(`NX: ${entity.normalised.x}`, 1, 30)
  context.fillText(`NY: ${entity.normalised.y}`, 1, 40)
  context.fillText(`Colliding: ${entity.isColliding}`, 1, 50)
}

export function gameLoop(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  gameObjects: Array<Entity | Player>,
) {
  const fpsInterval = 1000 / 60

  let then = window.performance.now()

  const step = () => {
    requestAnimationFrame(step)

    const now = window.performance.now()

    const elapsed = now - then

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval)

      update(gameObjects)

      clearCanvas(context, canvas)

      draw(gameObjects)

      detectCollisions(gameObjects as [Entity | Player])

      debugEngine(context, gameObjects[2] as Player)
    }
  }
  step()
}

function update(gameObjects: Array<Entity | Player>) {
  for (let i = 0; i < gameObjects.length; i++)
    gameObjects[i].update()
}

function draw(
  gameObjects: Array<Sprite | Entity | Player>,
) {
  for (let i = 0; i < gameObjects.length; i++)
    gameObjects[i].draw()
}

function clearCanvas(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
) {
  context.clearRect(0, 0, canvas.width, canvas.height)
}

const rectIntersect: Intersection = (x1, y1, w1, h1, x2, y2, w2, h2) => {
  if (x2 > w1 + x1
      || x1 > w2 + x2
      || y2 > h1 + y1
      || y1 > h2 + y2
  )
    return false

  return true
}

export function detectCollisions(objects: Array<Entity | Player>) {
  let obj1
  let obj2

  for (let i = 0; i < objects.length; i++)
    objects[i].isColliding = false

  for (let i = 0; i < objects.length; i++) {
    obj1 = objects[i]

    for (let j = i + 1; j < objects.length; j++) {
      obj2 = objects[j]

      if (rectIntersect(obj1.position.x, obj1.position.y, obj1.width, obj1.height, obj2.position.x, obj2.position.y, obj2.width, obj2.height)) {
        obj1.isColliding = true
        obj2.isColliding = true
      }
    }
  }
}
