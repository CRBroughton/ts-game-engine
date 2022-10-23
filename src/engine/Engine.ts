import type Entity from './Entity'
import type Sprite from './Sprite'

export function gameLoop(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  gameObjects: Array<Entity>,
) {
  const fpsInterval = 1000 / 60

  let then = window.performance.now()

  const step = () => {
    requestAnimationFrame(step)

    const now = window.performance.now()

    const elapsed = now - then

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval)
      draw(
        context,
        canvas,
        gameObjects,
      )
      update(
        gameObjects,
      )
    }
  }
  step()
}

function draw(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  gameObjects: Array<Sprite | Entity>,
) {
  clearCanvas(context, canvas)
  for (let i = 0; i < gameObjects.length; i++)
    gameObjects[i].draw()
}

function update(gameObejcts: Array<Entity>) {
  for (let i = 0; i < gameObejcts.length; i++)
    gameObejcts[i].update()
}

function clearCanvas(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
) {
  context.clearRect(0, 0, canvas.width, canvas.height)
}
