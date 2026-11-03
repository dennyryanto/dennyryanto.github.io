#!/usr/bin/env python3
"""Regenerate site/posters/*.webp: the finished frame of each kept demo, at its wide and its compact design.

The site shows them where a demo goes until the demo's bundle loads (and for good without JavaScript).
Needs the harness's dependencies (npm install --ignore-scripts) and a global Playwright with Chromium.
Re-run it whenever a demo's finished frame changes, then rebuild the site.

    python3 design/stageshow/build_posters.py
"""
import os, subprocess, tempfile, time, urllib.request
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'site', 'posters')
PORT = 5391
os.makedirs(OUT, exist_ok=True)
tmp = tempfile.mkdtemp()
server = subprocess.Popen(['npx', 'vite', 'harness', '--config', 'harness/vite.config.ts', '--port', str(PORT), '--host', '127.0.0.1', '--strictPort'],
                          cwd=HERE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    for _ in range(60):
        try:
            urllib.request.urlopen('http://127.0.0.1:%d/' % PORT); break
        except Exception:
            time.sleep(.5)
    subprocess.run(['node', os.path.join(HERE, 'site', 'posters.mjs'), 'http://127.0.0.1:%d' % PORT, tmp], check=True)
finally:
    server.terminate()
# a stage whose wide design is narrower than its compact threshold never uses the wide one (kit/stage.tsx picks the layout
# from the container's width, which is capped at the wide design's width); it gets one poster
for f in sorted(os.listdir(tmp)):
    im = Image.open(os.path.join(tmp, f)).convert('RGB')
    dest = os.path.join(OUT, f.replace('.png', '.webp'))
    im.save(dest, 'WEBP', quality=80, method=6)
    print('%-34s %4dx%-4d %3d KB' % (os.path.basename(dest), im.width, im.height, os.path.getsize(dest) // 1024))
from PIL import ImageChops, ImageStat
for f in sorted(os.listdir(OUT)):
    if f.endswith('-wide.webp'):
        c = os.path.join(OUT, f.replace('-wide', '-compact'))
        a, b = Image.open(os.path.join(OUT, f)).convert('RGB'), Image.open(c).convert('RGB')
        if a.size == b.size and sum(ImageStat.Stat(ImageChops.difference(a, b)).mean) < 1.5:
            os.remove(os.path.join(OUT, f))
            print('%s matches the compact poster; one file kept' % f)
