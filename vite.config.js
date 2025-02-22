global.structuredClone =
  global.structuredClone ||
  ((obj) => JSON.parse(JSON.stringify(obj)));

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
