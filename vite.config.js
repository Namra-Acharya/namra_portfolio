import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/namra_portfolio/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
