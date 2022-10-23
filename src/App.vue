<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gameLoop } from './engine/Engine'
import type Entity from './engine/Entity'
import Player from './engine/Player'

let gameObjects: Array<Entity>
let context: CanvasRenderingContext2D
const canvasEl = ref<HTMLCanvasElement>()

function createWorld() {
  gameObjects = [
    new Player({
      position: { x: 10, y: 10 },
      width: 16,
      height: 16,
      context,
      row: (0 * 16),
      frame: 0,
      src: 'src/assets/sprite.png',
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
