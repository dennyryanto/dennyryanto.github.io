// Capture every live section the site build needs that build_hifi.py's earlier grabs don't cover.
// Serve the repo first (python3 -m http.server 8765), then: node design/tools/grab-site.js <workdir>
// Writes <workdir>/hifi/<name>.html with images inlined as data URIs (build_site.py moves them into assets/).
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const fs = require('fs');
const SRC = process.env.SRC || 'http://localhost:8765/design/source/legacy-index.html';
// children of [data-r="page"] on the live page, by index
const PICK = { komunal: 4, ai: 5, board: 7, lab: 8, earlier: 10, career: 12, capabilities: 13, contact: 14 };
(async () => {
  const out = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  await p.goto(SRC, { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
  // walk the page so lazy content boots
  const h = await p.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 700) { await p.evaluate(y => window.scrollTo(0, y), y); await p.waitForTimeout(60); }
  await p.waitForTimeout(800);
  const r = await p.evaluate(async (PICK) => {
    async function toData(url) {
      const blob = await (await fetch(url)).blob();
      return await new Promise(res => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(blob); });
    }
    const kids = [...document.querySelector('[data-r="page"]').children];
    const res = {};
    for (const [k, i] of Object.entries(PICK)) {
      const c = kids[i].cloneNode(true);
      for (const img of c.querySelectorAll('img, source')) {
        for (const at of ['src', 'srcset']) { const v = img.getAttribute(at); if (v && v.startsWith('blob:')) img.setAttribute(at, await toData(v)); }
      }
      for (const e of c.querySelectorAll('[style*="blob:"], image[href^="blob:"]')) {
        for (const at of ['style', 'href']) {
          let s = e.getAttribute(at); if (!s) continue;
          for (const mm of [...s.matchAll(/blob:[^"')\s]+/g)]) s = s.replace(mm[0], await toData(mm[0]));
          e.setAttribute(at, s);
        }
      }
      res[k] = c.outerHTML;
    }
    return res;
  }, PICK);
  for (const [k, v] of Object.entries(r)) { fs.writeFileSync(`${out}/hifi/${k}.html`, v); console.log(k, v.length, (v.match(/blob:/g) || []).length, 'blob refs left'); }
  await b.close();
})();
