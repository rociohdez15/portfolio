import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: 'build', // cambiar carpeta de salida a "build"
  },
  plugins: [react()]
})

