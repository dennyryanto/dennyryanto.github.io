// The link-preview image (LinkedIn, Slack, X): a 1200x630 card in the site's own type and colours, written to
// assets/og-image.png. Fonts come from the built index.html's @font-face rules, so run build_site.py first.
//   node design/tools/og_image.js            (needs Playwright with its Chromium)
// build_site.py adds the og:image tags that point at it; re-run this when the headline or the numbers change.
const path = require('path'), fs = require('fs');
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');

const ROOT = path.resolve(__dirname, '..', '..');
const site = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const faces = (site.match(/@font-face\s*{[^}]*}/g) || []).join('\n');

// the accent as the built page uses it (theme.py has already run on index.html)
const LIME = (site.match(/--lime:\s*([^;]+);/) || [, 'oklch(0.9 0.2 122)'])[1].trim();
const RABBIT = ['..X.X.....', '..X.X.....', '..XXX.....', '.XXXXX....', '.XEXXX....', '..XXXXXX..', '.XXXXXXXX.', '.XXXXXXXXX', '..XX..XX..'];
const rabbit = RABBIT.map((r, y) => [...r].map((c, x) => c === 'X' ? `<rect x="${x}" y="${y}" width="1" height="1"/>` : '').join('')).join('');

const html = `<!doctype html><html><head><meta charset="utf-8"><base href="file://${ROOT}/">
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

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const tmp = path.join(ROOT, 'design', 'tools', '.og-image.html');
  fs.writeFileSync(tmp, html);
  await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200);
  const missing = await p.evaluate(() => ['Archivo', 'IBM Plex Mono'].filter(f => !document.fonts.check('800 20px "' + f + '"') && !document.fonts.check('500 20px "' + f + '"')));
  await p.screenshot({ path: path.join(ROOT, 'assets', 'og-image.png') });
  fs.unlinkSync(tmp); await b.close();
  console.log('assets/og-image.png written', missing.length ? '(fonts missing: ' + missing.join(', ') + ')' : '(fonts ok)');
})();
