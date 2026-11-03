import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  root: resolve(__dirname),
  plugins: [react()],
  resolve: { dedupe: ['react', 'react-dom'] },
  server: { host: '127.0.0.1', fs: { allow: [resolve(__dirname, '..')] } },
})
