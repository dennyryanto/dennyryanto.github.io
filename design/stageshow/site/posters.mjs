// Screenshot each kept demo's poster (the finished frame, reduced-motion state) at both of its designs.
//   node posters.mjs <harness url, no trailing slash> <out dir>
// Run through build_posters.py, which starts the harness and converts the PNGs to WebP.
import { createRequire } from 'node:module'
import { execSync } from 'node:child_process'
const { chromium } = createRequire(import.meta.url)(execSync('npm root -g').toString().trim() + '/playwright')
// [viewport for the wide design, viewport for the compact one]: a stage uses its wide design from `below` px of container width up
const IDS = {
  'linkaja-routing': [640, 358], 'linkaja-home': [600, 358], 'komunal-shipped-flow': [900, 358],
  'ai-decision-desk': [1100, 358], 'ai-chrona': [700, 358],
}
;(async () => {
  const [base, out] = process.argv.slice(2)
  const b = await chromium.launch()
  for (const [id, widths] of Object.entries(IDS)) {
    for (const [i, w] of widths.entries()) {
      const p = await b.newPage({ viewport: { width: w, height: 1400 }, deviceScaleFactor: 2, reducedMotion: 'reduce' })
      await p.goto(`${base}/?capture=${id}&still=1`, { waitUntil: 'networkidle' })
      await p.waitForSelector('.ss-stage')
      await p.waitForTimeout(1800)
      await p.locator('.ss-stage').screenshot({ path: `${out}/${id}-${i ? 'compact' : 'wide'}.png` })
      await p.close()
    }
  }
  await b.close()
})()
