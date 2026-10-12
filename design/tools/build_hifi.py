"""Assemble the hi-fi mockup (opening, case 01 LinkAja in full, and the heroes of the other cases and labs) from the live site's rendered pieces."""
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
    href = '#' + cid
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
# signature visual: exploded layers drawn live in code (stack.js); the OPEX chart moves into the drawer
SV_ALT = ('Line drawing: three phone-shaped layers (support tickets, intents, and the chat screen as a wireframe). A lime ticket and a lime intent each '
          'send a thread straight up and land as the lime answer and quick reply in the chat.')
STACK_JS = open(os.path.join(S, 'stack.js'), encoding='utf-8').read()

STATS = [('−80%', 'CS OPEX', True), ('70M+', 'USERS · HOME REVAMP', False), ('~72%', 'CASES AUTOMATED', False)]
stats_html = '<div class="mk-stats">' + ''.join(
    f'<div class="mk-stat"><div data-m="count" class="mk-stat-n" style="color:{LIME if hi else "#f2efe8"}">{n}</div><div class="mk-stat-l">{l}</div></div>'
    for n, l, hi in STATS) + '</div>'

sub = ('Security and account issues could only be fixed by an agent, so support cost grew with every new user. '
       'Self-service flows and intent routing broke that link.')

# bullets as a two-column list inside the drawer
bullets['class'] = ['mk-bullets']
bullets['style'] = ''

toggle = ('<button type="button" class="mk-toggle" aria-expanded="false" aria-controls="d-linkaja">'
          '<span class="mk-t-label"><span class="mk-t-closed">Read the case study</span><span class="mk-t-open" aria-hidden="true">Close</span></span>'
          '<span class="mk-t-meta">4 outcomes · 4 diagrams · 6 screens · 3 min read</span>'
          '<span class="mk-t-icon" aria-hidden="true"><svg width="20" height="11" viewBox="0 0 20 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 10 9.5l8.5-8"/></svg></span>'
          '</button>')

drawer = ('<div class="mk-drawer" id="d-linkaja"><div class="mk-drawer-inner" inert><div class="mk-drawer-body">'
          '<div class="mk-block"><div class="mk-eyebrow">WHAT I DID</div>' + str(bullets) + '</div>'
          '<div class="mk-block">' + str(chart) + '</div>'
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
    + '<figure class="mk-sv"><canvas data-stack="linkaja" role="img" aria-label="' + SV_ALT + '"></canvas></figure>'
    + toggle + drawer +
    '</div></section>')

# ---------- the other cases and the two labs: hero, signature visual and a short drawer ----------
BRIEF = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
FLASK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>'
CASES = [
    dict(id='komunal', n='02 / KOMUNAL INDONESIA', role='SENIOR MANAGER, PRODUCT DESIGN &amp; PM OVERSIGHT · JUN 2024 – NOV 2025', icon=BRIEF,
         h2='Rebuilt how a regulated fintech ships design.',
         sub='One shared design system for Product, Engineering and Marketing, and a redesigned deposit funnel that now completes about 12 points more often.',
         stats=[('+12', 'PTS · DEPOSIT FUNNEL', True), ('W→D', 'RELEASE CYCLE', False), ('1', 'SYSTEM · 3 ORGS', False)],
         alt='Line drawing: three phone-shaped layers (the design system, the deposit funnel, and the deposit screen as a wireframe). A lime shared component and the lime redesigned funnel step land as the lime deposit button and progress bar.',
         bullets=['Championed the move from the legacy Sanity platform to Framer for web components, cutting release cycles from weeks to days.',
                  'Created the company’s first shared design system: one source of foundations, components and tokens across Product, Engineering and Marketing.',
                  'Led UX audits and redesigns that lifted DepositoBPR deposit-funnel completion by roughly 12 percentage points.',
                  'Oversaw ISO / OJK compliance workflows without slowing UX delivery; standardised sprint rituals and PRD templates.']),
    dict(id='board', scene='dash', n='03 / EXECUTIVE &amp; BOARD', role='DASH INOVASI ABADI · LUMIO INOVASI TECHNOLOGY · NOV 2016 – PRESENT', icon=BRIEF,
         h2='Board-level judgment, design-level craft.',
         sub='I founded and ran a B2B product company for eight years: Dash, the restaurant ordering platform behind 30+ chains, and Lumio, which turns signage networks into revenue.',
         stats=[('~200K', 'DASH CUSTOMERS / MO', True), ('30+', 'DASH CHAINS', False), ('150+', 'LUMIO LOCATIONS', False)],
         alt='Line drawing: three tablet-shaped layers (the restaurant floor, the menu, and the ordering screen as a wireframe). A lime table and a lime dish land as the lime send-to-kitchen bar and the added item.',
         bullets=['Founder &amp; Director, Dash Inovasi Abadi (2016–2024): a B2B product company serving SME and enterprise F&amp;B and retail brands.',
                  'Product vision behind the Dash ordering platform: real-time table, kitchen, captain and back-office modules, live across 30+ chains and ~200,000 customers a month.',
                  'VP of Design, Lumio: a cloud platform that gives digital-signage owners business metrics and maximises content-slot revenue across 150+ locations.',
                  'Commissioner at Dash and Lumio since 2021: strategy, governance, financial health and risk; primary representative to investors.']),
    dict(id='ai', scene='independent', n='04 / INDEPENDENT CONSULTING', role='PRODUCT &amp; AI DESIGN CONSULTANT · NOV 2025 – PRESENT', icon=BRIEF,
         h2='Making design teams AI-native.',
         sub='A data-to-decision workflow that puts live, AI-driven decisions in front of the people running a business, and Chrona, an AI-first social-planning app built with multi-agent Claude Code.',
         stats=[('0→1', 'PROTOTYPES W/ CLAUDE CODE', True), ('3', 'ANTHROPIC CERTIFICATES', False), ('MCP', 'AGENTIC WORKFLOWS', False)],
         alt='Line drawing: three desktop-shaped layers (raw data sources, a grid of signals, and the decision desk as a browser wireframe). A lime source and a lime signal land as the lime confidence bar and approve button.',
         pair=[('ENTERPRISE AI · DATA TO DECISION', 'independent'),
               ('FEATURED · CHRONA', 'chrona', 'Line drawing: three phone-shaped layers (your week, your friends’ free time, and the drafted plan as a wireframe). A lime free evening and the lime overlap where everyone is free land as the plan’s lime time and its lime send button.')],
         bullets=['Enterprise AI: a data-to-decision workflow that validates and cleans siloed legacy data, then puts live decisions in front of the people running the business.',
                  'Agentic orchestration: multi-agent Claude Code builds with specialist sub-agents for brand, exploration, prototyping and shipping, including Chrona, an AI-first social-planning app.',
                  'Advisory and mentorship: AI-augmented UX strategy and design systems for businesses; coaching designers on AI tooling in their daily work.']),
    dict(id='lab', scene='eink', n='LAB / BUILT WITH AI', role='PERSONAL R&amp;D · CLAUDE CODE · 2024 – PRESENT', icon=FLASK,
         h2='Shipping real products with AI, end to end.',
         sub='A self-hosted service pulls my live Garmin biometrics every 30 minutes and renders a 1-bit athlete brief for a 7.5″ e-ink panel on my nightstand.',
         stats=[('24/7', 'LIVE ON GCP', True), ('1-BIT', '800×480 E-INK RENDER', False), ('$0', 'CLOUD SUBSCRIPTIONS', False)],
         alt='Line drawing: three panel-shaped layers (live data feeds, the 1-bit render, and the e-ink panel’s screen as a wireframe). The lime readiness feed and the lime surviving block land as the panel’s lime number and suggestion.',
         bullets=['Garmin Connect API: live biometrics, races, sleep and readiness, fetched on a schedule.',
                  'FastAPI fetcher with a SQLite cache, so a Garmin outage never blanks the display.',
                  'Pillow renderer: an 800×480 canvas converted to 1-bit with Floyd–Steinberg dithering, rendered on fetch.',
                  'TRMNL DIY kit (ESP32) on the nightstand; everything behind it designed and built with Claude Code.']),
    dict(id='lab-ui', scene='cockpit', n='LAB / AI-ASSISTED UI', role='PERSONAL CONCEPT · GARMIN CONNECT', icon=FLASK,
         h2='What if Garmin Connect read like a cockpit?',
         sub='Dark display glass, fine graduated scales and one pointer that always means you, now. AI widened the exploration; the direction and every call stayed mine.',
         stats=[('1', 'POINTER · YOU, NOW', True), ('4', 'SCREENS DESIGNED', False), ('3', 'INSTRUMENT CLOSE-UPS', False)],
         alt='Line drawing: three phone-shaped layers (terrain, a wall of instruments, and the app’s glass display as a wireframe). Your lime position and the lime reading that matters land as the lime pointer and value.',
         bullets=['Home, at a glance: grouped by the question you are asking (recovery, training, today).',
                  'Density is a setting: the same screen, dense, where only the size changes.',
                  'On a hard day, colour appears only when something departs from normal.',
                  'Training, plan first: this week’s sessions, then the load behind them.']),
]


def figure(c):
    if 'pair' not in c:
        return '<figure class="mk-sv"><canvas data-stack="' + c.get('scene', c['id']) + '" role="img" aria-label="' + c['alt'] + '"></canvas></figure>'
    # two stories in one section: side by side in the wide frame, stacked on phones
    cells = ''
    for p in c['pair']:
        alt = p[2] if len(p) > 2 else c['alt']
        cells += ('<figure class="mk-sv"><canvas data-stack="' + p[1] + '" role="img" aria-label="' + alt + '"></canvas>'
                  '<figcaption class="mk-sv-cap">' + p[0] + '</figcaption></figure>')
    return '<div class="mk-sv-pair">' + cells + '</div>'


def case_section(c):
    stats = '<div class="mk-stats">' + ''.join(
        f'<div class="mk-stat"><div data-m="count" class="mk-stat-n" style="color:{LIME if hi else "#f2efe8"}">{n}</div><div class="mk-stat-l">{l}</div></div>'
        for n, l, hi in c['stats']) + '</div>'
    meta = ('<div style="display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:26px;flex-wrap:wrap">'
            f'<div style="display:flex;align-items:center;gap:10px;font:600 12px/1 \'IBM Plex Mono\',monospace;letter-spacing:.16em;color:{LIME}">{c["icon"]}<span>{c["n"]}</span></div>'
            f'<div style="font:500 11px/1 \'IBM Plex Mono\',monospace;letter-spacing:.1em;color:rgba(242,239,232,.6)">{c["role"]}</div></div>')
    h2 = ('<h2 style="margin:0;font:800 46px/1.04 Archivo;font-stretch:112%;letter-spacing:-.02em;text-wrap:balance">' + c['h2'] + '</h2>')
    did = '<ul class="mk-list">' + ''.join('<li>' + b + '</li>' for b in c['bullets']) + '</ul>'
    tog = ('<button type="button" class="mk-toggle" aria-expanded="false" aria-controls="d-' + c['id'] + '">'
           '<span class="mk-t-label"><span class="mk-t-closed">Read the case study</span><span class="mk-t-open" aria-hidden="true">Close</span></span>'
           '<span class="mk-t-meta">' + str(len(c['bullets'])) + ' outcomes · full drawer not mocked yet</span>'
           '<span class="mk-t-icon" aria-hidden="true"><svg width="20" height="11" viewBox="0 0 20 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 10 9.5l8.5-8"/></svg></span>'
           '</button>')
    dr = ('<div class="mk-drawer" id="d-' + c['id'] + '"><div class="mk-drawer-inner" inert><div class="mk-drawer-body">'
          '<div class="mk-block"><div class="mk-eyebrow">WHAT I DID</div>' + did + '</div>'
          '<button type="button" class="mk-close">Close the case study <span aria-hidden="true">↑</span></button>'
          '</div></div></div>')
    return ('<section id="' + c['id'] + '" class="mk-case" style="border-top:1px solid rgba(242,239,232,.14)">'
            '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:88px 40px 72px">' + meta +
            '<div class="mk-case-hero"><div>' + h2 + '</div><div class="mk-case-side"><p class="mk-sub">' + c['sub'] + '</p>' + stats + '</div></div>'
            + figure(c) +
            tog + dr + '</div></section>')


more_html = ''.join(case_section(c) for c in CASES)

tpl = open(os.path.join(S, 'hifi_shell.html'), encoding='utf-8').read()
out = (tpl.replace('/*__SITE_CSS__*/', css)
          .replace('<!--__TOPBAR__-->', str(top))
          .replace('<!--__HERO__-->', str(hero))
          .replace('<!--__INDEX__-->', index_html)
          .replace('<!--__CASE__-->', case_html)
          .replace('<!--__MORE__-->', more_html)
          .replace('/*STACK*/', STACK_JS))
open(os.path.join(S, 'portfolio-hifi.html'), 'w', encoding='utf-8').write(out)
print('bytes', len(out))
