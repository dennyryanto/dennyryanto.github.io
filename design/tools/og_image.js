// The link-preview image (LinkedIn, Slack, X): a 1200x630 card in the site's own type and colours, written to
// assets/og-image.png. Fonts come from the built index.html's @font-face rules, so run build_site.py first.
//   node design/tools/og_image.js [stats|card] [out.png]     (needs Playwright with its Chromium)
// stats: the headline over the four key numbers. card: the profile card alone as frosted glass, identity left and
// details right, running off the bottom edge.
// build_site.py adds the og:image tags that point at it; re-run this when the headline or the numbers change.
const path = require('path'), fs = require('fs');
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');

const ROOT = path.resolve(__dirname, '..', '..');
const site = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const faces = (site.match(/@font-face\s*{[^}]*}/g) || []).join('\n');

// the accent as the built page uses it (theme.py has already run on index.html)
const HEADSHOT = (site.match(/<img[^>]*alt="Denny Ryanto"[^>]*src="([^"]+)"/) || site.match(/<img[^>]*src="([^"]+)"[^>]*alt="Denny Ryanto"/) || [, ''])[1];
const LIME = (site.match(/--lime:\s*([^;]+);/) || [, 'oklch(0.9 0.2 122)'])[1].trim();
const RABBIT = ['..X.X.....', '..X.X.....', '..XXX.....', '.XXXXX....', '.XEXXX....', '..XXXXXX..', '.XXXXXXXX.', '.XXXXXXXXX', '..XX..XX..'];
const rabbit = RABBIT.map((r, y) => [...r].map((c, x) => c === 'X' ? `<rect x="${x}" y="${y}" width="1" height="1"/>` : '').join('')).join('');

const STATS = `<!doctype html><html><head><meta charset="utf-8"><base href="file://${ROOT}/">
<style>
${faces}
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; background: #161511; overflow: hidden; }
body { position: relative; padding: 64px 72px 0; color: #f2efe8; font-family: Archivo, sans-serif; -webkit-font-smoothing: antialiased; }
.top { display: flex; justify-content: space-between; align-items: baseline; font: 600 15px/1 'IBM Plex Mono', monospace; letter-spacing: .16em; }
.top .who { color: #f2efe8; font: 800 22px/1 Archivo, sans-serif; font-stretch: 118%; letter-spacing: -.01em; }
.top .url { color: rgba(242, 239, 232, .55); }
.eyebrow { margin-top: 58px; font: 600 16px/1 'IBM Plex Mono', monospace; letter-spacing: .16em; color: ${LIME}; }
h1 { margin-top: 22px; font: 800 92px/.95 Archivo, sans-serif; font-stretch: 118%; letter-spacing: -.025em; }
h1 span { color: ${LIME}; }
.keys { position: absolute; left: 0; right: 0; bottom: 0; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(242, 239, 232, .14); }
.key { padding: 22px 0 30px 72px; }
.key + .key { padding-left: 28px; border-left: 1px solid rgba(242, 239, 232, .14); }
.key b { display: block; font: 800 40px/1 Archivo, sans-serif; font-stretch: 120%; letter-spacing: -.02em; }
.key:first-child b { color: ${LIME}; }
.arw { margin: 0 6px 4px; vertical-align: middle; }
.key span { display: block; margin-top: 10px; font: 500 13px/1.3 'IBM Plex Mono', monospace; letter-spacing: .12em; color: rgba(242, 239, 232, .6); }
.rabbit { position: absolute; right: 84px; top: 252px; opacity: .55; }
</style></head><body>
<div class="top"><span class="who">DENNY RYANTO</span><span class="url">DENNYRYANTO.GITHUB.IO</span></div>
<div class="eyebrow">HEAD / AVP, PRODUCT DESIGN · JAKARTA</div>
<h1>Design leadership,<br>measured in <span>outcomes.</span></h1>
<svg class="rabbit" viewBox="0 0 10 9" width="30" height="27" shape-rendering="crispEdges"><g fill="#f2efe8">${rabbit}</g></svg>
<div class="keys">
  <div class="key"><b>−80%</b><span>CS OPEX · LINKAJA</span></div>
  <div class="key"><b>+12 pts</b><span>DEPOSIT FUNNEL · KOMUNAL</span></div>
  <div class="key"><b>~200K</b><span>CUSTOMERS / MO · DASH</span></div>
  <div class="key"><b>0<svg class="arw" viewBox="0 0 34 24" width="34" height="24" fill="none" stroke="#f2efe8" stroke-width="5.5" stroke-linecap="square"><path d="M3 12h24M18 3l10 9-10 9"/></svg>1</b><span>AI-NATIVE BUILDS</span></div>
</div>
</body></html>`;

const SEAL = '<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#e3b341"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#3a2a05" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CARD = `<!doctype html><html><head><meta charset="utf-8"><base href="file://${ROOT}/">
<style>
${faces}
* { box-sizing: border-box; margin: 0; }
html, body { width: 1200px; height: 630px; overflow: hidden; background: #161511; }
body { position: relative; color: #f2efe8; font-family: Archivo, sans-serif; -webkit-font-smoothing: antialiased; }
/* glows behind the glass */
.glow { position: absolute; border-radius: 50%; filter: blur(80px); }
.g1 { width: 560px; height: 520px; left: 120px; top: -300px; background: oklch(0.9 0.2 122 / .42); }
.g2 { width: 520px; height: 480px; right: -160px; bottom: -220px; background: oklch(0.72 0.16 160 / .4); }
.g3 { width: 420px; height: 420px; left: -140px; bottom: -200px; background: #fdb022; opacity: .22; }
.grain { position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px); background-size: 4px 4px; }
.top { position: absolute; left: 56px; right: 56px; top: 22px; display: flex; justify-content: space-between; align-items: center; }
.url { font: 600 14px/1 'IBM Plex Mono', monospace; letter-spacing: .16em; color: rgba(242, 239, 232, .62); }
/* the profile card, frosted, straight, running off the bottom edge: identity left, details right */
.card { position: absolute; left: 56px; right: 56px; top: 58px; height: 620px; padding: 44px 48px; border-radius: 28px;
  display: grid; grid-template-columns: 372px 1fr; column-gap: 44px;
  background: linear-gradient(160deg, rgba(255,255,255,.13), rgba(255,255,255,.04) 50%, rgba(255,255,255,.07));
  backdrop-filter: blur(30px) saturate(150%); -webkit-backdrop-filter: blur(30px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.3), inset 0 0 0 1px rgba(255,255,255,.12), 0 40px 90px -30px rgba(0,0,0,.85); }
.card::before { content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: linear-gradient(120deg, rgba(255,255,255,.14) 0%, transparent 30%); }
.id { display: flex; flex-direction: column; padding-right: 44px; border-right: 1px solid rgba(255,255,255,.13); margin-right: -44px; }
.id img { width: 200px; height: 200px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 0 4px rgba(255,255,255,.2); }
.id b { margin-top: 30px; font: 800 62px/.96 Archivo, sans-serif; font-stretch: 112%; letter-spacing: -.02em; }
.id span { margin-top: 18px; font: 600 19px/1.4 'IBM Plex Mono', monospace; letter-spacing: .14em; color: ${LIME}; }
.chips { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 26px; }
.chips i { font-style: normal; padding: 9px 14px; border-radius: 100px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.24); background: rgba(255,255,255,.05);
  font: 600 14px/1 'IBM Plex Mono', monospace; letter-spacing: .12em; }
.rows { display: flex; flex-direction: column; }
.row { padding: 18px 0 20px; border-top: 1px solid rgba(255,255,255,.13); }
.row:first-child { padding-top: 4px; border-top: 0; }
.row i { display: block; font: 500 15px/1 'IBM Plex Mono', monospace; font-style: normal; letter-spacing: .16em; color: rgba(242,239,232,.62); }
.row p { margin-top: 10px; font: 400 36px/1.15 Archivo, sans-serif; letter-spacing: -.005em; }
.row p b { color: ${LIME}; font-weight: 700; }
.certs { margin-top: 12px; display: flex; flex-direction: column; gap: 10px; }
.certs div { display: flex; align-items: center; gap: 12px; font: 400 29px/1.2 Archivo, sans-serif; }
.certs svg { width: 29px; height: 29px; flex: none; }
</style></head><body>
<div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div><div class="grain"></div>
<div class="top"><span class="url">DENNYRYANTO.GITHUB.IO</span><svg viewBox="0 0 10 9" width="22" height="20" shape-rendering="crispEdges" style="opacity:.6"><g fill="#f2efe8">${rabbit}</g></svg></div>
<div class="card">
  <div class="id">
    <img src="${HEADSHOT}" alt="">
    <b>Denny Ryanto</b>
    <span>HEAD / AVP,<br>PRODUCT DESIGN</span>
    <div class="chips"><i>FINTECH</i><i>ENTERPRISE</i><i>CONSUMER</i></div>
  </div>
  <div class="rows">
    <div class="row"><i>EXPERIENCE</i><p><b>15+ years</b> in digital product</p></div>
    <div class="row"><i>NOW</i><p>Product &amp; AI design consultant</p></div>
    <div class="row"><i>BOARD</i><p>Commissioner, Dash &amp; Lumio</p></div>
    <div class="row"><i>CERTIFIED · ANTHROPIC 2026</i><div class="certs"><div>${SEAL}AI-Native SDLC Playbook</div><div>${SEAL}Claude Code 101</div><div>${SEAL}AI Fluency: Framework &amp; Foundations</div></div></div>
  </div>
</div>
</body></html>`;

const VARIANT = process.argv[2] || 'stats';
const OUT = path.resolve(process.argv[3] || path.join(ROOT, 'assets', 'og-image.png'));
const html = VARIANT === 'card' ? CARD : STATS;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const tmp = path.join(ROOT, 'design', 'tools', '.og-image.html');
  fs.writeFileSync(tmp, html);
  await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200);
  const missing = await p.evaluate(() => ['Archivo', 'IBM Plex Mono'].filter(f => !document.fonts.check('800 20px "' + f + '"') && !document.fonts.check('500 20px "' + f + '"')));
  await p.screenshot({ path: OUT });
  fs.unlinkSync(tmp); await b.close();
  console.log(path.relative(ROOT, OUT) + ' written (' + VARIANT + ')', missing.length ? '(fonts missing: ' + missing.join(', ') + ')' : '(fonts ok)');
})();
