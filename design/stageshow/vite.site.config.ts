import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// The bundle the site loads on demand: one ES module and one stylesheet, plus the few
// images the demos import (flat, next to them). build_site.py copies the folder to assets/stageshow/.
// The kit's brand-mark registry inlines about 100 logos, and none of the five demos draws one.
const withoutBrandMarks = {
  name: 'without-brand-marks',
  enforce: 'pre' as const,
  resolveId(id: string, importer?: string) {
    if (importer?.includes('/kit/') && /(^|\/)brands$/.test(id)) return '\0brands-stub'
  },
  load(id: string) {
    if (id === '\0brands-stub') return 'export const brandMarks = {}'
  },
}

export default defineConfig({
  root: resolve(__dirname, 'site'),
  plugins: [withoutBrandMarks, react()],
  resolve: { dedupe: ['react', 'react-dom'] },
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    target: 'es2022',
    outDir: resolve(__dirname, '.build-site'),
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsDir: '',
    assetsInlineLimit: 4096,
    minify: 'esbuild',
    lib: { entry: resolve(__dirname, 'site/main.tsx'), formats: ['es'], fileName: () => 'stageshow.js' },
    rollupOptions: { output: { assetFileNames: (a) => (a.names?.[0]?.endsWith('.css') ? 'stageshow.css' : '[name]-[hash][extname]') } },
  },
})
