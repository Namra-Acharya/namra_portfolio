import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/namra_portfolio/' : '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  publicDir: 'src/public',
  server: {
    middlewareMode: false,
    cors: true,
  },
  preview: {
    port: 5173,
  }
})
