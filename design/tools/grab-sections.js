const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const fs = require('fs');
(async () => {
  const out = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
  await p.goto('http://localhost:8765/index.html', { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
  // scroll so everything is rendered/booted, then snapshot before motion hides anything
  const r = await p.evaluate(async () => {
    async function toData(url) {
      const blob = await (await fetch(url)).blob();
      return await new Promise(res => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.readAsDataURL(blob); });
    }
    const page = document.querySelector('[data-r="page"]');
    const kids = [...page.children];
    const pick = { topbar: kids[0], hero: kids[1], stat: kids[2], brands: kids[3], linkaja: kids[6] };
    const res = {};
    for (const [k, el] of Object.entries(pick)) {
      const c = el.cloneNode(true);
      for (const img of c.querySelectorAll('img')) { if (img.src.startsWith('blob:')) img.setAttribute('src', await toData(img.src)); }
      for (const e of c.querySelectorAll('[style*="blob:"]')) {
        let s = e.getAttribute('style'); const m = [...s.matchAll(/blob:[^"')\s]+/g)];
        for (const mm of m) s = s.replace(mm[0], await toData(mm[0]));
        e.setAttribute('style', s);
      }
      res[k] = c.outerHTML;
    }
    // collect CSS (skip @font-face)
    let css = '';
    for (const ss of document.styleSheets) { try { for (const rule of ss.cssRules) { if (rule.type === 5) continue; css += rule.cssText + '\n'; } } catch (e) {} }
    res.css = css;
    res.headshot = document.querySelector('#headshot') ? document.querySelector('#headshot').outerHTML.slice(0, 600) : '';
    return res;
  });
  for (const [k, v] of Object.entries(r)) fs.writeFileSync(`${out}/${k}.html`, v);
  await b.close();
})();
