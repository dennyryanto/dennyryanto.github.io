"""Turn the assembled hi-fi page into the live site: a static index.html plus assets/.

    python3 design/tools/build_site.py <workdir> <repo>

<workdir> is build_hifi.py's work directory (it reads <workdir>/portfolio-hifi.html and the
GSAP files in <workdir>/unpacked/assets/). Every inlined image moves into <repo>/assets/img/
under a content hash, GSAP is served from <repo>/assets/js/ instead of a CDN, and stack.js
becomes its own file. No runtime, no bundle: the page renders without JavaScript (every
drawer shows open), and JavaScript adds the drawers, the stacks and the motion.
"""
import base64, hashlib, os, re, shutil, sys

W, R = sys.argv[1], sys.argv[2]
here = os.path.dirname(os.path.abspath(__file__))
page = open(os.path.join(W, 'portfolio-hifi.html'), encoding='utf-8').read()

A = os.path.join(R, 'assets')
for d in ('img', 'js'):
    shutil.rmtree(os.path.join(A, d), ignore_errors=True)
    os.makedirs(os.path.join(A, d))

# ---- images: data URIs out to files, named by content so a rebuild keeps unchanged URLs ----
EXT = {'image/webp': 'webp', 'image/png': 'png', 'image/jpeg': 'jpg', 'image/svg+xml': 'svg', 'image/gif': 'gif', 'image/avif': 'avif'}
seen = {}


def out(m):
    mime, data = m.group(1), m.group(2)
    if data not in seen:
        raw = base64.b64decode(data)
        name = hashlib.sha1(raw).hexdigest()[:16] + '.' + EXT[mime]
        open(os.path.join(A, 'img', name), 'wb').write(raw)
        seen[data] = 'assets/img/' + name
    return seen[data]


page = re.sub(r'data:(image/[a-z+.-]+);base64,([A-Za-z0-9+/=]+)', out, page)
left = re.findall(r'data:[a-z]+/[a-z+.-]+;base64,', page)
assert not left, 'unhandled data URIs: %s' % set(left)

# ---- scripts: GSAP from the site's own copy, stack.js as a file ----
G = os.path.join(W, 'unpacked', 'assets')
shutil.copy(os.path.join(G, '6d0a4c1e-7b1f-4f5e-9a51-3c2f8e0b9a01.js'), os.path.join(A, 'js', 'gsap.min.js'))
shutil.copy(os.path.join(G, '6d0a4c1e-7b1f-4f5e-9a51-3c2f8e0b9a02.js'), os.path.join(A, 'js', 'ScrollTrigger.min.js'))
page = page.replace('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js', 'assets/js/gsap.min.js')
page = page.replace('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js', 'assets/js/ScrollTrigger.min.js')
stack = open(os.path.join(here, '..', 'generative', 'stack.js'), encoding='utf-8').read()
shutil.copy(os.path.join(here, '..', 'generative', 'stack.js'), os.path.join(A, 'js', 'stack.js'))
block = '<script>\n' + stack + '\n</script>'
assert page.count(block) == 1, 'stack.js block not found'
page = page.replace(block, '<script src="assets/js/stack.js"></script>')

# ---- images load as they come near the view (most sit in closed drawers); the headshot loads at once ----
page = re.sub(r'<img (?![^>]*\bloading=)(?![^>]*alt="Denny Ryanto")', '<img loading="lazy" decoding="async" ', page)

# ---- links: the resume is served next to the page and downloads ----
page = page.replace('href="https://dennyryanto.github.io/denny-ryanto-resume.pdf"', 'href="denny-ryanto-resume.pdf" download')

# ---- document: a real head with the live site's metadata ----
title, rest = page.split('</title>', 1)
assert title.startswith('<title>')
head, body = rest.split('<noscript>', 1)
HEAD = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Denny Ryanto · Head / AVP, Product Design</title>
<meta name="description" content="Portfolio of Denny Ryanto: product design leadership across fintech, enterprise and consumer platforms, with measurable business outcomes.">
<meta property="og:title" content="Denny Ryanto · Head / AVP, Product Design">
<meta property="og:description" content="Design leadership, measured in outcomes. LinkAja, Komunal, Dash, Lumio.">
<meta property="og:type" content="website">
<meta name="theme-color" content="#161511">
<style>html, body { margin: 0; background: #161511; } html { scroll-padding-top: 72px; }</style>
'''
site = HEAD + head.strip() + '\n</head>\n<body>\n<noscript>' + body.rstrip() + '\n</body>\n</html>\n'
open(os.path.join(R, 'index.html'), 'w', encoding='utf-8').write(site)

size = lambda p: sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(p) for f in fs)
print('index.html %d KB, %d images %d KB, js %d KB' % (len(site.encode()) // 1024, len(seen), size(os.path.join(A, 'img')) // 1024, size(os.path.join(A, 'js')) // 1024))
