import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
      {
        babel: {
          // presets: [...],
          // plugins: [...],
          babelrc: true,
          configFile: true,
        }
      }
  )],
  mode: 'development',
    // server: {
    //   base: '185.117.153.245:8002/'
    // },
  css: {
    devSourcemap: true,
  },
  build: {
    chunkSizeWarningLimit: 150
  },
})
