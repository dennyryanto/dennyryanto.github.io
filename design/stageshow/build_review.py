#!/usr/bin/env python3
"""Build the review page: vite bundles review/ to one JS and one CSS file, then this
inlines both into design/mockups/stageshow-components.html (an artifact body: title,
meta, style, markup, script; the artifact tool adds the doctype and head).

    cd design/stageshow && npm install --ignore-scripts && python3 build_review.py
"""
import pathlib
import re
import subprocess

here = pathlib.Path(__file__).resolve().parent
out = here.parent / 'mockups' / 'stageshow-components.html'

subprocess.run(['npx', 'vite', 'build', '--config', 'vite.config.ts'], cwd=here, check=True)
build = here / '.build'
html = (build / 'index.html').read_text()
js = (build / 'app.js').read_text()
css = (build / 'app.css').read_text()

head = re.search(r'<head>(.*?)</head>', html, re.S).group(1)
body = re.search(r'<body>(.*?)</body>', html, re.S).group(1)
head = re.sub(r'<script[^>]*></script>|<link rel="stylesheet"[^>]*crossorigin[^>]*app[^>]*>|<meta charset[^>]*>|<meta name="viewport"[^>]*>', '', head)
body = re.sub(r'<script[^>]*></script>', '', body)
# A literal </script> inside the bundle would end the inline tag early
js = js.replace('</script', '<\\/script')

page = f'{head.strip()}\n<style>\n{css}\n</style>\n{body.strip()}\n<script type="module">\n{js}\n</script>\n'
out.write_text(page)
print(f'{out.relative_to(here.parent.parent)}  {len(page) / 1024:.0f} KB')
