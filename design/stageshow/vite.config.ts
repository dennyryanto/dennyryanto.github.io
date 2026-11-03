import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// One JS file and one CSS file, which build_review.py inlines into the page.
export default defineConfig({
  root: resolve(__dirname, 'review'),
  plugins: [react()],
  resolve: { dedupe: ['react', 'react-dom'] },
  build: {
    target: 'es2022',
    outDir: resolve(__dirname, '.build'),
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: { output: { inlineDynamicImports: true, entryFileNames: 'app.js', assetFileNames: 'app[extname]' } },
  },
})
