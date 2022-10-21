import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    setupFiles: ['./vitest.setup.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    // For this config, check https://github.com/vitest-dev/vitest/issues/740
    threads: false,
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
})
