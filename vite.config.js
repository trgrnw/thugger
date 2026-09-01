import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Относительные пути позволяют открыть сборку на обычном хостинге
  // и в подпапке GitHub Pages без ошибок загрузки assets.
  base: './'
})
