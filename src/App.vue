<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gameLoop } from './engine/Engine'
import Entity from './engine/Entity'
import Player from './engine/Player'

let gameObjects: Array<Entity | Player>
let context: CanvasRenderingContext2D
const canvasEl = ref<HTMLCanvasElement>()

function createWorld() {
  gameObjects = [
    new Entity({
      position: { x: 70, y: 40 },
      width: 18,
      height: 24,
      context,
      row: (0 * 18),
      frame: 0,
      src: 'src/assets/my-spritesheet.png',

    }),
    new Entity({
      position: { x: 47, y: 20 },
      width: 19,
      height: 24,
      context,
      row: (0 * 24),
      frame: 0,
      src: 'src/assets/my-spritesheet.png',

    }),
    new Player({
      position: { x: 10, y: 10 },
      width: 18,
      height: 24,
      context,
      row: (0 * 24),
      frame: 0,
      frames: 4,
      buffer: 40,
      src: 'src/assets/my-spritesheet.png',
    }),
  ]
}

function init() {
  context = canvasEl.value!.getContext('2d')!
  createWorld()
  gameLoop(context, canvasEl.value!, gameObjects)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div class="canvas-wrapper">
    <canvas id="canvas" ref="canvasEl" width="128" height="128" class="large" />
  </div>
</template>

<style scoped>
</style>
