const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
(async () => {
  const out = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  await p.goto('http://localhost:8765/index.html', { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 700) { await p.evaluate(v => scrollTo(0, v), y); await p.waitForTimeout(50); }
  const res = await p.evaluate(() => {
    function byText(t) { const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) if (n.nodeValue.includes(t)) return n.parentElement; return null; }
    function up(el, pred) { while (el && !pred(el)) el = el.parentElement; return el; }
    // the screen inside a device: the smallest clipped, rounded box that still fills most of the device
    function screenOf(dev) {
      const R = dev.getBoundingClientRect(); let best = dev, area = R.width * R.height;
      dev.querySelectorAll('*').forEach(e => { const r = e.getBoundingClientRect(), cs = getComputedStyle(e);
        if (r.width > R.width * .8 && r.height > R.height * .85 && cs.overflow !== 'visible' && parseFloat(cs.borderRadius) >= 10 && r.width * r.height < area) { best = e; area = r.width * r.height; } });
      return best;
    }
    const tag = (el, k) => { if (!el) return k + ':none'; el.setAttribute('data-sv', k); const r = el.getBoundingClientRect(); return k + ':' + Math.round(r.width) + 'x' + Math.round(r.height); };
    const out = [];
    const g4 = document.querySelectorAll('[data-r="grid4"] > div');
    const phone = (el) => up(el, e => { const r = e.getBoundingClientRect(); return r.height > 420 && r.width > 180 && r.width < 340; });
    out.push(tag(screenOf(phone(g4[0].querySelector('*'))), 'pay1'));
    out.push(tag(screenOf(phone(g4[1].querySelector('*'))), 'pay2'));
    out.push(tag(screenOf(phone(byText('Penempatan Berhasil'))), 'depoB'));
    out.push(tag(screenOf(phone(byText('Cari Produk') || byText('Produk'))), 'depoA'));
    const tables = byText('Occupied'); const ipad = up(tables, e => e.getBoundingClientRect().width > 500 && e.getBoundingClientRect().height > 380);
    out.push(tag(screenOf(ipad), 'captain'));
    const bo = byText('Bistecca'); const mac = up(bo, e => e.getBoundingClientRect().width > 500 && e.getBoundingClientRect().height > 330);
    out.push(tag(screenOf(mac), 'backoffice'));
    const dd = byText('decision-desk'); out.push(tag(up(dd, e => e.getBoundingClientRect().height > 200 && e.getBoundingClientRect().width > 900), 'desk'));
    return out;
  });
  console.log(res.join('  '));
  for (const k of ['pay1', 'pay2', 'depoA', 'depoB', 'captain', 'backoffice', 'desk']) {
    const el = p.locator(`[data-sv="${k}"]`); if (!(await el.count())) continue;
    await el.first().scrollIntoViewIfNeeded(); await p.waitForTimeout(400);
    await el.first().screenshot({ path: `${out}/${k}.png` });
  }
  await b.close();
})();
