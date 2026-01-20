import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    fs: {
      allow: ['src', 'node_modules']
    }
  },
  publicDir: 'src/public'
})
