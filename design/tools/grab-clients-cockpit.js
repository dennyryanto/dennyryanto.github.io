// Grab the live site's Clients & brands block and the Garmin cockpit section (images inlined as data URIs)
// into <out>/clients.html and <out>/labui.html for build_hifi.py. Serve the repo on :8765 first.
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const fs = require('fs');
(async () => {
  const out = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  await p.goto('http://localhost:8765/design/source/legacy-index.html', { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
  const r = await p.evaluate(async () => {
    async function toData(url) { const blob = await (await fetch(url)).blob(); return await new Promise(res => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(blob); }); }
    const k = [...document.querySelector('[data-r="page"]').children];
    const res = {};
    for (const [name, el] of [['clients', k[11]], ['labui', k[9]]]) {
      const c = el.cloneNode(true);
      for (const img of c.querySelectorAll('img')) if (img.src.startsWith('blob:')) img.setAttribute('src', await toData(img.src));
      res[name] = c.outerHTML;
    }
    return res;
  });
  for (const [k, v] of Object.entries(r)) fs.writeFileSync(`${out}/${k}.html`, v);
  await b.close();
})();
