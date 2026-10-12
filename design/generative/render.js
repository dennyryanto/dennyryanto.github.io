const { chromium } = require(require('child_process').execSync('npm root -g').toString().trim() + '/playwright');
const fs = require('fs');
const [html, p5path, outDir, ...jobs] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1800, height: 1000 } });
  await ctx.route('**/p5.min.js', r => r.fulfill({ contentType: 'text/javascript', body: fs.readFileSync(p5path) }));
  await ctx.route('https://fonts.**', r => r.abort());
  for (const job of jobs) {
    const [scene, seed] = job.split(':');
    const p = await ctx.newPage();
    const errs = []; p.on('pageerror', e => errs.push(e.message));
    await p.goto('file://' + html + `?scene=${scene}&seed=${seed}`);
    await p.waitForFunction(() => window.__report, null, { timeout: 15000 }).catch(() => {});
    const rep = await p.evaluate(() => window.__report);
    const data = await p.evaluate(() => document.querySelector('canvas').toDataURL('image/png'));
    fs.writeFileSync(`${outDir}/sv-${scene}-${seed}.png`, Buffer.from(data.split(',')[1], 'base64'));
    console.log(scene, seed, JSON.stringify(rep), errs);
    await p.close();
  }
  await b.close();
})();
