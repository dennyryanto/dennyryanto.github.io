const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
(async () => {
  const b = await chromium.launch();
  for (const [w,h] of [[1440,900],[390,844]]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    await p.goto('http://localhost:8765/index.html', { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
    const r = await p.evaluate((vh) => {
      const page = document.querySelector('[data-r="page"]');
      const out = []; 
      let label = null;
      for (const n of page.childNodes) {
        if (n.nodeType === 8) { label = n.textContent.trim(); continue; }
        if (n.nodeType !== 1) continue;
        const el = n.tagName === 'SC-IF' ? n.firstElementChild || n : n;
        const hgt = el.getBoundingClientRect().height;
        out.push([label, +(hgt / vh).toFixed(1)]); label = null;
      }
      const mono = [...page.querySelectorAll('*')].filter(e => getComputedStyle(e).fontFamily.includes('Plex Mono') && e.children.length===0 && e.textContent.trim()).length;
      const small = [...page.querySelectorAll('*')].filter(e => e.children.length===0 && e.textContent.trim() && parseFloat(getComputedStyle(e).fontSize) < 12).length;
      return {out, mono, small};
    }, h);
    console.log(w, JSON.stringify(r));
  }
  await b.close();
})();
