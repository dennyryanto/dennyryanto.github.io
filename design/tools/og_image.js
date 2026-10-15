// The link-preview image (LinkedIn, Slack, X): a 1200x630 card in the site's own type and colours, written to
// assets/og-image.png. Fonts (and, for the video, the gold certificate seals) come from the built index.html, so run
// build_site.py first.
//   node design/tools/og_image.js [card|stats] [out.png]     (needs Playwright with its Chromium; card is the default)
//   node design/tools/og_image.js video [out.mp4]            (the card animated: 10s at 30fps, 1920x1008; needs ffmpeg)
//   FRAMES=1,3.5,8 node design/tools/og_image.js video <dir> (just those moments, in seconds, as PNGs: for checking the motion)
// stats: the headline over the four key numbers. card: the profile card alone as frosted glass, identity left and
// details right, running off the bottom edge. video: the same card building in (card, identity, rows, certificates)
// with the certificate seals spinning as on the site, then holding; for posting on LinkedIn, not part of the site.
// build_site.py adds the og:image tags that point at it; re-run this when the headline or the numbers change.
const path = require('path'), fs = require('fs');
const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');

const ROOT = path.resolve(__dirname, '..', '..');
const site = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const faces = (site.match(/@font-face\s*{[^}]*}/g) || []).join('\n');

// the accent as the built page uses it (theme.py has already run on index.html)
const HEADSHOT = (site.match(/<img[^>]*alt="Denny Ryanto"[^>]*src="([^"]+)"/) || site.match(/<img[^>]*src="([^"]+)"[^>]*alt="Denny Ryanto"/) || [, ''])[1];
const LIME = (site.match(/--lime:\s*([^;]+);/) || [, 'oklch(0.9 0.2 122)'])[1].trim();
// the certificates' spinning gold seals, exactly as the site draws them (video only; the still keeps its flat seal)
const SEAL_CSS = [...site.matchAll(/^\.gold-seal[^\n]*$/gm)].map(m => m[0]).join('\n') + '\n' +
  [...site.matchAll(/@keyframes gold-(?:spin|shimmer) \{[\s\S]*?\n\}/g)].map(m => m[0]).join('\n');
const goldSeal = (px, delay) => `<span aria-hidden="true" class="gold-seal" style="width:${px}px;height:${px}px;--spin-delay:${delay}s">` +
  '<i class="gs-back"></i><i class="gs-edge" style="--z:-1px"></i><i class="gs-edge" style="--z:0px"></i><i class="gs-edge" style="--z:1px"></i><i class="gs-front"></i></span>';
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

// the AI-native aura on the card's edge, a lime-to-green light: a crisp ring over a soft halo. The still holds it at one
// angle (--aura); the video turns it.
const AURA_CSS = `
@property --aura { syntax: '<angle>'; inherits: false; initial-value: 300deg; }
.aura, .aura-halo { position: absolute; left: 56px; right: 56px; top: 58px; height: 620px; border-radius: 28px; pointer-events: none; }
/* the ring: the gradient masked to the edge (the halo blurs its own ring, so the light stays on the edge, not on the glass) */
.aura, .aura-halo > i { background: conic-gradient(from var(--aura), oklch(0.9 0.2 122), oklch(0.72 0.16 160) 20%, oklch(0.72 0.16 160 / 0) 36%,
    oklch(0.9 0.2 122 / 0) 54%, oklch(0.72 0.16 160) 70%, oklch(0.9 0.2 122) 86%, oklch(0.9 0.2 122));
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; }
.aura { padding: 1.5px; z-index: 2; }
.aura-halo { filter: blur(16px); }
.aura-halo > i { position: absolute; inset: -6px; border-radius: 34px; padding: 10px; }
`;

// the video's build-in, layered over the card: every animation is paused and stepped frame by frame by the recorder
const ANIM_CSS = `
${SEAL_CSS}
@keyframes up { from { opacity: 0; transform: translateY(var(--dy, 16px)); } to { opacity: 1; transform: none; } }
@keyframes fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes fade3 { from { opacity: 0; } to { opacity: .22; } }
@keyframes drift1 { from { translate: 0 0; } to { translate: 40px 20px; } }
@keyframes drift2 { from { translate: 0 0; } to { translate: -36px -24px; } }
@keyframes drift3 { from { translate: 0 0; } to { translate: 30px -16px; } }
.g1 { animation: fade 1.4s ease-out both, drift1 10s ease-in-out both; }
.g2 { animation: fade 1.4s ease-out .2s both, drift2 10s ease-in-out both; }
.g3 { animation: fade3 1.4s ease-out .4s both, drift3 10s ease-in-out both; }
/* the aura rises with the card, comes up to full as the certificates land, and turns */
.aura, .aura-halo { --dy: 90px; animation: up 1s cubic-bezier(.2, .8, .3, 1) .4s both, aura-in 3.2s ease-out .6s both; }
.aura { animation: up 1s cubic-bezier(.2, .8, .3, 1) .4s both, aura-in 3.2s ease-out .6s both, aura-turn 6s linear infinite; }
.aura-halo > i { animation: aura-turn 6s linear infinite; }
@keyframes aura-turn { from { --aura: 0deg; } to { --aura: 360deg; } }
@keyframes aura-in { 0% { opacity: 0; } 40% { opacity: .35; } 100% { opacity: 1; } }
.top { animation: fade .7s ease-out .2s both; }
.card { --dy: 90px; animation: up 1s cubic-bezier(.2, .8, .3, 1) .4s both; }
.id > *, .row, .certs > div { animation: up .55s cubic-bezier(.2, .8, .3, 1) both; }
.id > :nth-child(1) { animation-delay: 1.1s; } .id > :nth-child(2) { animation-delay: 1.3s; }
.id > :nth-child(3) { animation-delay: 1.5s; } .id > :nth-child(4) { animation-delay: 1.7s; }
.row:nth-child(1) { animation-delay: 1.6s; } .row:nth-child(2) { animation-delay: 1.85s; }
.row:nth-child(3) { animation-delay: 2.1s; } .row:nth-child(4) { animation-delay: 2.35s; }
.certs > div:nth-child(1) { animation-delay: 2.6s; } .certs > div:nth-child(2) { animation-delay: 2.8s; } .certs > div:nth-child(3) { animation-delay: 3s; }
.gold-seal { animation-delay: calc(3.2s + var(--spin-delay, 0s)); }
/* tighter rows than the still, so the certificates clear the bottom edge with room to spare */
.row { padding: 16px 0 18px; }
.certs { gap: 8px; }
`;

const SEAL = '<svg width="18" height="18" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#e3b341"/><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#3a2a05" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CARD = anim => `<!doctype html><html><head><meta charset="utf-8"><base href="file://${ROOT}/">
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
  display: grid; grid-template-columns: 360px 1fr; column-gap: 64px;
  background: linear-gradient(160deg, rgba(255,255,255,.13), rgba(255,255,255,.04) 50%, rgba(255,255,255,.07));
  backdrop-filter: blur(30px) saturate(150%); -webkit-backdrop-filter: blur(30px) saturate(150%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.3), inset 0 0 0 1px rgba(255,255,255,.12), 0 40px 90px -30px rgba(0,0,0,.85); }
.card::before { content: ''; position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
  background: linear-gradient(120deg, rgba(255,255,255,.14) 0%, transparent 30%); }
.id { display: flex; flex-direction: column; padding-right: 32px; border-right: 1px solid rgba(255,255,255,.13); margin-right: -32px; }
.id img { width: 200px; height: 200px; border-radius: 50%; object-fit: cover; box-shadow: 0 0 0 4px rgba(255,255,255,.2); }
.id b { margin-top: 30px; font: 800 62px/.96 Archivo, sans-serif; font-stretch: 112%; letter-spacing: -.02em; }
.id span { margin-top: 18px; font: 600 19px/1.4 'IBM Plex Mono', monospace; letter-spacing: .14em; color: ${LIME}; }
.chips { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 26px; }
.chips i { font-style: normal; padding: 9px 14px; border-radius: 100px; box-shadow: inset 0 0 0 1px rgba(255,255,255,.24); background: rgba(255,255,255,.05);
  font: 600 14px/1 'IBM Plex Mono', monospace; letter-spacing: .12em; }
.rows { display: flex; flex-direction: column; }
.row { padding: 22px 0 24px; border-top: 1px solid rgba(255,255,255,.13); }
.row:first-child { padding-top: 4px; border-top: 0; }
.row i { display: block; font: 500 15px/1 'IBM Plex Mono', monospace; font-style: normal; letter-spacing: .16em; color: rgba(242,239,232,.62); }
.row p { margin-top: 10px; font: 400 34px/1.15 Archivo, sans-serif; letter-spacing: -.005em; }
.row p b { color: ${LIME}; font-weight: 700; }
.certs { margin-top: 12px; display: flex; flex-direction: column; gap: 10px; }
.certs div { display: flex; align-items: center; gap: 12px; font: 400 27px/1.2 Archivo, sans-serif; }
.certs svg { width: 27px; height: 27px; flex: none; }
${AURA_CSS}
${anim ? ANIM_CSS : ''}
</style></head><body>
<div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div><div class="grain"></div>
<div class="top"><span class="url">DENNYRYANTO.GITHUB.IO</span><svg viewBox="0 0 10 9" width="22" height="20" shape-rendering="crispEdges" style="opacity:.6"><g fill="#f2efe8">${rabbit}</g></svg></div>
<div class="aura-halo"><i></i></div><div class="card">
  <div class="id">
    <img src="${HEADSHOT}" alt="">
    <b>Denny Ryanto</b>
    <span>HEAD / AVP,<br>PRODUCT DESIGN</span>
    <div class="chips"><i>FINTECH</i><i>ENTERPRISE</i><i>CONSUMER</i></div>
  </div>
  <div class="rows">
    <div class="row"><i>EXPERIENCE</i><p><b>15+ years</b> in digital product and transformation</p></div>
    <div class="row"><i>NOW</i><p>Product &amp; AI design consultant</p></div>
    <div class="row"><i>BOARD</i><p>Commissioner, Dash &amp; Lumio</p></div>
    <div class="row"><i>CERTIFIED · ANTHROPIC 2026</i><div class="certs"><div>${anim ? goldSeal(27, '0.00') : SEAL}AI-Native SDLC Playbook</div><div>${anim ? goldSeal(27, '-0.45') : SEAL}Claude Code 101</div><div>${anim ? goldSeal(27, '-0.90') : SEAL}AI Fluency: Framework &amp; Foundations</div></div></div>
  </div>
</div>
<div class="aura"></div>
</body></html>`;

const VARIANT = process.argv[2] || 'card';
const video = VARIANT === 'video', FPS = 30, SECONDS = 10, SCALE = 1.6;   // 1920x1008: LinkedIn plays 1.91:1 as is
const OUT = path.resolve(process.argv[3] || (video ? 'linkedin-card.mp4' : path.join(ROOT, 'assets', 'og-image.png')));
const html = video ? CARD(true) : VARIANT === 'card' ? CARD(false) : STATS;

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: video ? SCALE : 1 });
  const tmp = path.join(ROOT, 'design', 'tools', '.og-image.html');
  fs.writeFileSync(tmp, html);
  await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200);
  const missing = await p.evaluate(() => ['Archivo', 'IBM Plex Mono'].filter(f => !document.fonts.check('800 20px "' + f + '"') && !document.fonts.check('500 20px "' + f + '"')));
  if (!video) {
    await p.screenshot({ path: OUT });
  } else {
    // step every animation (the build-in, the drifting glows, the spinning seals) to each frame's time, then encode
    const dir = fs.mkdtempSync(path.join(require('os').tmpdir(), 'og-video-'));
    await p.evaluate(() => document.getAnimations().forEach(a => a.pause()));
    if (process.env.FRAMES) {
      fs.mkdirSync(OUT, { recursive: true });
      for (const t of process.env.FRAMES.split(',')) {
        await p.evaluate(ms => document.getAnimations().forEach(a => { a.currentTime = ms; }), +t * 1000);
        await p.screenshot({ path: path.join(OUT, 'frame-' + t + 's.png') });
      }
    }
    for (let f = 0; f < (process.env.FRAMES ? 0 : FPS * SECONDS); f++) {
      await p.evaluate(ms => document.getAnimations().forEach(a => { a.currentTime = ms; }), f * 1000 / FPS);
      await p.screenshot({ path: path.join(dir, String(f).padStart(4, '0') + '.png') });
    }
    if (!process.env.FRAMES) require('child_process').execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(dir, '%04d.png'),
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', OUT]);
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.unlinkSync(tmp); await b.close();
  console.log(path.relative(ROOT, OUT) + ' written (' + VARIANT + ')', missing.length ? '(fonts missing: ' + missing.join(', ') + ')' : '(fonts ok)');
})();
