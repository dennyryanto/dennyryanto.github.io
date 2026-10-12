const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
(async () => {
  const out = process.argv[2];
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  await p.goto('http://localhost:8765/design/source/legacy-index.html', { waitUntil: 'networkidle' }); await p.waitForTimeout(3000);
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 700) { await p.evaluate(v => scrollTo(0, v), y); await p.waitForTimeout(60); }
  await p.waitForTimeout(800);
  const marks = await p.evaluate(() => {
    function byText(t) { const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) if (n.nodeValue.includes(t)) return n.parentElement; return null; }
    function up(el, pred) { while (el && !pred(el)) el = el.parentElement; return el; }
    const tag = (el, k) => { if (el) el.setAttribute('data-sv', k); return !!el; };
    const res = {};
    res.linkaja = tag(document.querySelector('svg[aria-label^="Customer-service"]').parentElement, 'linkaja');
    res.komunal = tag(up(byText('Deposit Placement Funnel'), e => getComputedStyle(e).backgroundColor === 'rgb(15, 19, 25)'), 'komunal');
    res.dash = tag(document.querySelector('[data-r="bleed-ipad"]'), 'dash');
    res.dashScreen = tag(document.querySelector('[data-r="dash-ui"]'), 'dashScreen');
    const oct = byText('October 2026');
    res.chrona = tag(oct && up(oct, e => e.getBoundingClientRect().height > 500 && e.getBoundingClientRect().width < 400), 'chrona');
    res.eink = tag([...document.querySelectorAll('img')].find(i => (i.alt || '').startsWith('Garmin Daily Brief e-ink panel showing training')), 'eink');
    res.garmin = tag(document.getElementById('gx-stage'), 'garmin');
    res.garminClose = tag([...document.querySelectorAll('img')].find(i => (i.alt || '').startsWith('Isometric close-up of the Recovery')), 'garminClose');
    return res;
  });
  console.log(JSON.stringify(marks));
  for (const k of Object.keys(marks)) {
    if (!marks[k]) continue;
    const el = p.locator(`[data-sv="${k}"]`);
    await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(500);
    await el.screenshot({ path: `${out}/${k}.png` });
  }
  await b.close();
})();
