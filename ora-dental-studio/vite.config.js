import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow the sandboxed live-preview host (*.e2b.app) to load the dev server.
    allowedHosts: ['.e2b.app'],
  },
})
