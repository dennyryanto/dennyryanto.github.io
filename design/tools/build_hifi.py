"""Assemble the hi-fi mockup (opening + case 01 LinkAja) from the live site's rendered pieces."""
import base64, re, sys, os
from bs4 import BeautifulSoup

S = sys.argv[1]
H = os.path.join(S, 'hifi')
read = lambda n: open(os.path.join(H, n + '.html'), encoding='utf-8').read()


def soup(html):
    s = BeautifulSoup(html, 'html.parser')
    for el in s.find_all(attrs={'data-dc-tpl': True}):
        del el['data-dc-tpl']
    return s


LIME = 'oklch(0.9 0.2 122)'

# ---------- CSS: the live site's rules minus runtime/global resets ----------
css = read('css')
drop = [r'^html, body \{[^\n]*\n', r'^#dc-root[^\n]*\n', r'^body \{[^\n]*\n', r'^\.sc-[^\n]*\n', r'^html\.sc-dc-streaming[^\n]*\n',
        r'^x-dc[^\n]*\n', r'^\.(fx|col|grid|ac|jc|jb|f1|noshrink|wrap|fw\d|fs\d+|upper|tc|nowrap|gap\d+|m0|mt\d+|mb\d+|posrel|posabs|round|ohide|bbox|pointer|w100|b0) \{[^\n]*\n']
for d in drop:
    css = re.sub(d, '', css, flags=re.M)
# play the chart bars only once the chart is on screen

# ---------- top bar ----------
top = soup(read('topbar'))
for a in top.find_all('a'):
    if a.get('download') is not None:
        del a['download']
        a['href'] = 'https://dennyryanto.github.io/denny-ryanto-resume.pdf'
        a['target'] = '_blank'
        a['rel'] = 'noopener'
for a in top.find_all('a', href='#work'):
    a['href'] = '#linkaja'

# ---------- hero ----------
hero = soup(read('hero'))
p = hero.find('p')
p.string = ('I lead product design where it moves the business. Across fintech, enterprise and consumer platforms '
            'I’ve turned design strategy into P&L results: lower cost to serve, higher conversion, and platforms '
            'used by tens of millions.')
for row in hero.find_all(attrs={'data-r': 'pc-row'}):
    label = row.find('div').get_text(strip=True)
    if label in ('BEFORE', 'FOCUS'):
        row.decompose()
head = base64.b64encode(open(os.path.join(S, 'unpacked/assets/92db9c4c-6c60-4494-a54f-0fdbf08a9132.webp'), 'rb').read()).decode()
slot = hero.find('image-slot')
img = hero.new_tag('img', src='data:image/webp;base64,' + head, alt='Denny Ryanto',
                   style='width:100%;height:100%;object-fit:cover;display:block')
slot.parent.replace_with(img)

# ---------- case index (replaces the stat band) ----------
brands = soup(read('brands'))
logo = {i.get('alt'): i['src'] for i in brands.find_all('img')}
stat = soup(read('stat'))
cells = stat.find(attrs={'data-r': re.compile('stat-row')}).find_all('div', recursive=False)
icons = [c.find('svg') for c in cells]
spark = ('<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" '
         'stroke-linejoin="round" style="color:%s"><path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 '
         '9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44'
         'l-1.58 6.14a.5.5 0 0 1-.96 0z"/></svg>') % LIME
INDEX = [
    ('linkaja', '−80%', 'CS OPEX', str(icons[0]), '01', 'LinkAja', '<img src="%s" alt="" class="mk-app">' % logo['LinkAja']),
    ('komunal', '+12<span class="mk-unit">PTS</span>', 'DEPOSIT FUNNEL', str(icons[1]), '02', 'Komunal', '<img src="%s" alt="" class="mk-app">' % logo['DepositoBPR by Komunal']),
    ('board', '~200K', 'CUSTOMERS / MONTH', str(icons[2]), '03', 'Dash · Lumio', '<img src="%s" alt="" class="mk-word">' % logo['Dash']),
    ('ai', '0→1', 'AI-NATIVE BUILDS', spark, '04', 'Independent', ''),
]
idx_cells = []
for i, (cid, num, label, icon, n, co, lg) in enumerate(INDEX):
    href = '#linkaja' if cid == 'linkaja' else '#mk-more'
    pad = '44px 32px 44px 0' if i == 0 else ('44px 0 44px 36px' if i == 3 else '44px 36px')
    border = 'border-right:1px solid rgba(242,239,232,.14);' if i < 3 else ''
    idx_cells.append(
        f'<a class="mk-idx" href="{href}" data-open="{cid}" style="padding:{pad};{border}">'
        f'<div data-r="stat-num" data-m="count" style="font:800 expanded clamp(58px,6.8vw,84px)/.9 Archivo;letter-spacing:-.04em;color:{LIME};white-space:nowrap">{num}</div>'
        f'<div style="margin-top:18px;display:flex;align-items:center;gap:8px;font:600 11px/1 \'IBM Plex Mono\',monospace;letter-spacing:.14em;color:rgba(242,239,232,.85)">{icon}<span>{label}</span></div>'
        f'<div class="mk-dest">{lg}<span class="mk-dest-n">{n}</span><span class="mk-dest-co">{co}</span><span class="mk-arrow" aria-hidden="true">↓</span></div>'
        f'</a>')
index_html = ('<nav aria-label="Case index" data-r="stat-outer" style="border-top:1px solid rgba(242,239,232,.14);border-bottom:1px solid rgba(242,239,232,.14)">'
              '<div data-r="wrap stat-row" class="mk-index" style="max-width:1216px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,283px),1fr))">'
              + ''.join(idx_cells) + '</div></nav>')

# ---------- case 01: LinkAja ----------
la = soup(read('linkaja'))
wrap = la.find('div').find('div', recursive=False)
kids = wrap.find_all(recursive=False)
meta, intro, problem, chart, support, route, shots_head, shots = kids[:8]
for sp in meta.find_all('span'):
    if sp.get_text(strip=True) == '03 / LINKAJA':
        sp.string = '01 / LINKAJA'
h2 = intro.find('h2')
bullets = intro.find('h2').find_next_sibling('div')
# signature visual: the OPEX chart, full width, first in the hero
chart['style'] = re.sub(r'margin-top:\s*24px;?', '', chart['style'])
chart['class'] = chart.get('class', []) + ['mk-chart']
callout = BeautifulSoup('<div class="mk-chart-callout"><span data-m="count" class="mk-cc-n">−80%</span><span class="mk-cc-l">CUSTOMER-SERVICE OPEX · TICKETS DEFLECTED TO SELF-SERVICE</span></div>', 'html.parser')
chart.find('svg').insert_before(callout)
for el in (problem, support, route):
    el['style'] = re.sub(r'margin-top:\s*(44|24)px;?', '', el['style'])
shots_head['style'] = re.sub(r'margin-top:\s*40px;?', '', shots_head['style'])

STATS = [('70M+', 'USERS · HOME REVAMP', True), ('~72%', 'CASES AUTOMATED', True), ('4', 'SHIPS · PAYLATER, CHATBOT, LOYALTY, CTP', False)]
stats_html = '<div class="mk-stats">' + ''.join(
    f'<div class="mk-stat"><div data-m="count" class="mk-stat-n" style="color:{LIME if hi else "#f2efe8"}">{n}</div><div class="mk-stat-l">{l}</div></div>'
    for n, l, hi in STATS) + '</div>'

sub = ('Security and account issues could only be fixed by an agent, so support cost grew with every new user. '
       'Self-service flows and intent routing broke that link.')

# bullets as a two-column list inside the drawer
bullets['class'] = ['mk-bullets']
bullets['style'] = ''

toggle = ('<button type="button" class="mk-toggle" aria-expanded="false" aria-controls="d-linkaja">'
          '<span class="mk-t-copy"><span class="mk-t-label" data-closed="Read the case study" data-open="Close the case study">Read the case study</span>'
          '<span class="mk-t-meta">4 outcomes · 3 diagrams · 6 screens · 3 min read</span></span>'
          '<span class="mk-t-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 2v12"/><path d="M2 8h12"/></svg></span>'
          '</button>')

drawer = ('<div class="mk-drawer" id="d-linkaja"><div class="mk-drawer-inner" inert><div class="mk-drawer-body">'
          '<div class="mk-block"><div class="mk-eyebrow">WHAT I DID</div>' + str(bullets) + '</div>'
          '<div class="mk-block">' + str(problem) + '</div>'
          '<div class="mk-block">' + str(support) + '</div>'
          '<div class="mk-block">' + str(route) + '</div>'
          '<div class="mk-block">' + str(shots_head) + str(shots) + '</div>'
          '<button type="button" class="mk-close">Close the case study <span aria-hidden="true">↑</span></button>'
          '</div></div></div>')

case_html = (
    '<section id="linkaja" class="mk-case" style="border-top:1px solid rgba(242,239,232,.14)">'
    '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:88px 40px 72px">'
    + str(meta) +
    '<div class="mk-case-hero">'
    '<div>' + str(h2) + '</div>'
    '<div class="mk-case-side"><p class="mk-sub">' + sub + '</p>' + stats_html + '</div>'
    '</div>'
    + str(chart) + toggle + drawer +
    '</div></section>')

more_html = ('<section id="mk-more" style="border-top:1px solid rgba(242,239,232,.14)">'
             '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:56px 40px 120px">'
             '<div class="mk-eyebrow">NEXT IN THE MOCKUP</div>'
             '<div class="mk-next">'
             + ''.join(f'<div class="mk-next-row"><span class="mk-dest-n">{n}</span><span>{co}</span><span class="mk-next-s">Same pattern, not mocked yet</span></div>'
                       for _, _, _, _, n, co, _ in INDEX[1:]) +
             '</div></div></section>')

tpl = open(os.path.join(S, 'hifi_shell.html'), encoding='utf-8').read()
out = (tpl.replace('/*__SITE_CSS__*/', css)
          .replace('<!--__TOPBAR__-->', str(top))
          .replace('<!--__HERO__-->', str(hero))
          .replace('<!--__INDEX__-->', index_html)
          .replace('<!--__CASE__-->', case_html)
          .replace('<!--__MORE__-->', more_html))
open(os.path.join(S, 'portfolio-hifi.html'), 'w', encoding='utf-8').write(out)
print('bytes', len(out))
