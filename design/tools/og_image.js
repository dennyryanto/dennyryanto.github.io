// The link-preview image (LinkedIn, Slack, X): a 1200x630 card in the site's own type and colours, written to
// assets/og-image.png. Fonts come from the built index.html's @font-face rules, so run build_site.py first.
//   node design/tools/og_image.js [stats|card] [out.png]     (needs Playwright with its Chromium)
// stats: the headline over the four key numbers. card: the headline beside the profile card as frosted glass.
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
.glow { position: absolute; border-radius: 50%; filter: blur(70px); }
.g1 { width: 420px; height: 420px; right: 260px; top: -170px; background: oklch(0.9 0.2 122 / .38); }
.g2 { width: 380px; height: 380px; right: -90px; bottom: -150px; background: oklch(0.72 0.16 160 / .36); }
.g3 { width: 300px; height: 300px; right: 430px; bottom: -60px; background: #fdb022; opacity: .22; }
.grain { position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.035) 1px, transparent 1px); background-size: 4px 4px; }
.left { position: absolute; left: 72px; top: 70px; width: 560px; }
.who { font: 800 22px/1 Archivo, sans-serif; font-stretch: 118%; letter-spacing: -.01em; }
.eyebrow { margin-top: 120px; font: 600 15px/1 'IBM Plex Mono', monospace; letter-spacing: .16em; color: ${LIME}; }
h1 { margin-top: 20px; font: 800 70px/.96 Archivo, sans-serif; font-stretch: 118%; letter-spacing: -.025em; }
h1 span { color: ${LIME}; }
.url { position: absolute; left: 72px; bottom: 58px; font: 600 15px/1 'IBM Plex Mono', monospace; letter-spacing: .16em; color: rgba(242, 239, 232, .6); }
/* the profile card, frosted */
.card { position: absolute; right: 72px; top: 62px; width: 430px; padding: 26px 26px 22px; border-radius: 22px;
  background: linear-gradient(155deg, rgba(255,255,255,.14), rgba(255,255,255,.04) 45%, rgba(255,255,255,.07));
  backdrop-filter: blur(26px) saturate(150%); -webkit-backdrop-filter: blur(26px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.28), inset 0 0 0 1px rgba(255,255,255,.12), 0 40px 80px -30px rgba(0,0,0,.85);
  transform: rotate(-2deg); }
.card::before { content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: linear-gradient(115deg, rgba(255,255,255,.18) 0%, transparent 32%); }
.id { display: flex; align-items: center; gap: 18px; }
.id img { width: 92px; height: 92px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 0 3px rgba(255,255,255,.18); }
.id b { display: block; font: 800 27px/1.05 Archivo, sans-serif; font-stretch: 112%; letter-spacing: -.01em; }
.id span { display: block; margin-top: 8px; font: 600 12px/1.45 'IBM Plex Mono', monospace; letter-spacing: .14em; color: ${LIME}; }
.rows { margin-top: 20px; }
.row { display: grid; grid-template-columns: 112px 1fr; gap: 12px; padding: 12px 0; border-top: 1px solid rgba(255,255,255,.12); align-items: baseline; }
.row i { font: 500 11px/1.4 'IBM Plex Mono', monospace; font-style: normal; letter-spacing: .14em; color: rgba(242,239,232,.6); }
.row p { font: 400 16px/1.35 Archivo, sans-serif; }
.row p b { color: ${LIME}; font-weight: 700; }
.certs { display: flex; flex-direction: column; gap: 7px; }
.certs div { display: flex; align-items: center; gap: 9px; font: 400 15px/1.25 Archivo, sans-serif; }
.certs small { margin-top: 2px; font: 600 11px/1 'IBM Plex Mono', monospace; letter-spacing: .14em; color: #e3b341; }
.chips { display: flex; gap: 8px; margin-top: 14px; }
.chips span { padding: 7px 12px; border-radius: 100px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.22); background: rgba(255,255,255,.05); font: 600 11px/1 'IBM Plex Mono', monospace; letter-spacing: .12em; }
.rabbit { position: absolute; left: 688px; top: 548px; opacity: .55; }
</style></head><body>
<div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div><div class="grain"></div>
<div class="left">
  <div class="who">DENNY RYANTO</div>
  <div class="eyebrow">PORTFOLIO 2026</div>
  <h1>Design leadership, measured in <span>outcomes.</span></h1>
</div>
<svg class="rabbit" viewBox="0 0 10 9" width="24" height="22" shape-rendering="crispEdges"><g fill="#f2efe8">${rabbit}</g></svg>
<div class="url">DENNYRYANTO.GITHUB.IO</div>
<div class="card">
  <div class="id"><img src="${HEADSHOT}" alt=""><div><b>Denny Ryanto</b><span>HEAD / AVP,<br>PRODUCT DESIGN</span></div></div>
  <div class="rows">
    <div class="row"><i>EXPERIENCE</i><p><b>15+ years</b> in digital product</p></div>
    <div class="row"><i>NOW</i><p>Product &amp; AI design consultant</p></div>
    <div class="row"><i>BOARD</i><p>Commissioner, Dash &amp; Lumio</p></div>
    <div class="row"><i>CERTIFIED</i><div class="certs"><div>${SEAL}AI-Native SDLC Playbook</div><div>${SEAL}Claude Code 101</div><div>${SEAL}AI Fluency: Framework &amp; Foundations</div><small>ANTHROPIC · 2026</small></div></div>
  </div>
  <div class="chips"><span>FINTECH</span><span>ENTERPRISE</span><span>CONSUMER</span></div>
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
