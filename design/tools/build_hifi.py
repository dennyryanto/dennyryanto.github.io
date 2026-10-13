"""Assemble the hi-fi mockup (opening, case 01 LinkAja in full, and the heroes of the other cases and labs) from the live site's rendered pieces."""
import base64, json, re, sys, os
from bs4 import BeautifulSoup

S = sys.argv[1]
HERE = os.path.dirname(os.path.abspath(__file__))
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

# ---------- fonts: the live site's own files, so the page never paints in a fallback and then reflows ----------
# (Google Fonts with font-display: swap made the headline gain a line ~100ms after load and shifted the page)
# Two families only: Archivo (one variable file for every weight and width) and IBM Plex Mono, latin subsets only.
# The live product mock-ups brought their own (Plus Jakarta Sans, Manrope, Sora); they are set in Archivo instead.
KEEP_FAMILIES, KEEP_SUBSETS = ('Archivo', 'IBM Plex Mono'), ('latin', 'latin-ext')
DROP_FAMILIES = re.compile(r'\b(Plus Jakarta Sans|Manrope|Sora)\b')


def fonts_css():
    tpl_html = open(os.path.join(S, 'unpacked', 'template.html'), encoding='utf-8').read()
    faces = {}
    for sub, body in re.findall(r'/\* ([\w-]+) \*/\s*@font-face \{([^}]*)\}', tpl_html):
        fam = re.search(r"font-family: '([^']+)'", body).group(1)
        if fam not in KEEP_FAMILIES or sub not in KEEP_SUBSETS:
            continue
        uid = re.search(r'url\("([0-9a-f-]+)"\)', body).group(1)
        rng = re.search(r'unicode-range: ([^;]+);', body).group(1)
        w = [int(x) for x in re.search(r'font-weight: ([^;]+);', body).group(1).split()]
        stretch = re.search(r'font-stretch: ([^;]+);', body)
        k = (fam, sub, uid)
        if k in faces:   # the same variable file listed once per weight: one face spanning them all
            faces[k]['w'] = [min(faces[k]['w'][0], w[0]), max(faces[k]['w'][-1], w[-1])]
        else:
            faces[k] = dict(w=[w[0], w[-1]], rng=rng, stretch=stretch.group(1) if stretch else None)
    out = []
    for (fam, sub, uid), f in faces.items():
        data = base64.b64encode(open(os.path.join(S, 'unpacked', 'assets', uid + '.woff2'), 'rb').read()).decode()
        wt = str(f['w'][0]) if f['w'][0] == f['w'][1] else '%d %d' % tuple(f['w'])
        out.append("/* %s %s */\n@font-face { font-family: '%s'; font-style: normal; font-weight: %s;%s font-display: swap; "
                   "src: url(data:font/woff2;base64,%s) format('woff2'); unicode-range: %s; }"
                   % (fam, sub, fam, wt, (' font-stretch: %s;' % f['stretch']) if f['stretch'] else '', data, f['rng']))
    return '\n'.join(out)


FONTS = fonts_css()

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
# a quiet index: a small heading, then per case the number, what it measures and one line of context
INDEX = [
    ('linkaja', '−80%', 'CS OPEX', str(icons[0]), '01', 'LinkAja',
     'Customer-service cost after self-service replaced agent tickets for 70M users.'),
    ('komunal', '+12<span class="mk-unit">PTS</span>', 'DEPOSIT FUNNEL', str(icons[1]), '02', 'Komunal',
     'Deposit-funnel completion after UX audits and a redesign of DepositoBPR.'),
    ('board', '~200K', 'CUSTOMERS / MONTH', str(icons[2]), '03', 'Dash · Lumio',
     'Diners ordering through Dash each month, across 30+ restaurant chains.'),
    ('ai', '0→1', 'AI-NATIVE BUILDS', spark, '04', 'Independent',
     'Products taken from concept to working software with multi-agent Claude Code.'),
]
idx_cells = []
for i, (cid, num, label, icon, n, co, ctx) in enumerate(INDEX):
    idx_cells.append(
        f'<a class="mk-idx" href="#{cid}" data-open="{cid}">'
        f'<div class="mk-dest"><span class="mk-dest-n">{n}</span><span class="mk-dest-co">{co}</span><span class="mk-arrow" aria-hidden="true">↓</span></div>'
        f'<div data-m="count" class="mk-idx-n">{num}</div>'
        f'<div class="mk-idx-l">{icon}<span>{label}</span></div>'
        f'<p class="mk-idx-c">{ctx}</p>'
        f'</a>')
index_html = ('<nav aria-label="Case index" class="mk-index-nav">'
              '<div class="mk-index-wrap">'
              '<div class="mk-index">' + ''.join(idx_cells) + '</div></div></nav>')

# ---------- clients & brands, right under the case index ----------
clients = soup(read('clients'))
client_logos = ''.join('<div class="mk-client"><img src="%s" alt="%s"></div>' % (im['src'], im.get('alt', '')) for im in clients.find_all('img'))
clients_html = ('<section class="mk-clients" aria-label="Clients and brands"><div class="mk-clients-wrap">'
                '<div class="mk-clients-head"><span>Clients &amp; brands</span></div>'
                '<div class="mk-clients-grid">' + client_logos + '</div></div></section>')

# ---------- the Garmin glass cockpit: four screens for the fan, three close-ups ----------
labui = soup(read('labui'))
lab_imgs = labui.find_all('img')
FAN = [('Home, at a glance', 'Grouped by the question you’re asking: recovery, training, today.'),
       ('The same screen, dense', 'Density is a setting. Only the size changes.'),
       ('On a hard day', 'Colour appears only when something departs from normal.'),
       ('Training, plan first', 'This week’s sessions, then the load behind them.')]
fan_html = ('<div class="mk-fan" tabindex="0" role="group" aria-roledescription="carousel" aria-label="Garmin Connect concept screens">'
            '<div class="mk-fan-stage">' + ''.join(
                '<figure class="mk-fan-card" data-i="%d"><img src="%s" alt="Concept screen: %s"></figure>' % (i, lab_imgs[i]['src'], t) for i, (t, _) in enumerate(FAN)) +
            '</div><div class="mk-fan-foot"><div class="mk-fan-cap" aria-live="polite"></div><div class="mk-fan-ticks">' +
            ''.join('<button type="button" aria-label="Show %s"><i></i></button>' % t for t, _ in FAN) +
            '</div></div><script type="application/json" class="mk-fan-data">' + json.dumps(FAN) + '</script></div>')

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
STACK_JS = open(os.path.join(HERE, '..', 'generative', 'stack.js'), encoding='utf-8').read()

# key numbers: a centred band of three, each with the number, what it measures and one line of context
CONTEXT = {
    'CS OPEX': 'Customer-service cost after self-service replaced agent tickets.',
    'USERS · HOME REVAMP': 'People reached by the redesigned home screen.',
    'CASES AUTOMATED': 'Support cases now solved in the app, without an agent.',
    'PTS · DEPOSIT FUNNEL': 'Deposit-funnel completion after UX audits and a redesign.',
    'RELEASE CYCLE': 'Web releases went from weeks to days after the move to Framer.',
    'SYSTEM · 3 ORGS': 'One design system shared by Product, Engineering and Marketing.',
    'DASH CUSTOMERS / MO': 'Diners ordering through Dash every month.',
    'DASH CHAINS': 'Restaurant chains running on the Dash platform.',
    'LUMIO LOCATIONS': 'Signage locations on the Lumio network, and growing.',
    'PROTOTYPES W/ CLAUDE CODE': 'Products taken from concept to working software.',
    'ANTHROPIC CERTIFICATES': 'AI-native development, Claude Code and AI fluency.',
    'AGENTIC WORKFLOWS': 'Multi-agent builds with specialist sub-agents.',
    'LIVE ON GCP': 'Self-hosted, fetching fresh data every 30 minutes.',
    '800×480 E-INK RENDER': 'Dithered to one bit, rendered on fetch, not on request.',
    'CLOUD SUBSCRIPTIONS': 'Nothing to pay to keep it running.',
}


def keys_html(stats):
    return ('<div class="mk-keys">' + ''.join(
        f'<div class="mk-key"><div data-m="count" class="mk-key-n" style="color:{LIME if hi else "#f2efe8"}">{n}</div>'
        f'<div class="mk-key-l">{l}</div><p class="mk-key-c">{CONTEXT[l]}</p></div>'
        for n, l, hi in stats) + '</div>')


STATS = [('−80%', 'CS OPEX', True), ('70M+', 'USERS · HOME REVAMP', False), ('~72%', 'CASES AUTOMATED', False)]
stats_html = keys_html(STATS)

sub = ('Security and account issues could only be fixed by an agent, so support cost grew with every new user. '
       'Self-service flows and intent routing broke that link.')



def did_html(items):
    # "What I did": one list for every case, two columns on wide screens, neutral dash markers (lime stays for outcomes)
    return '<ul class="mk-list">' + ''.join('<li>' + b + '</li>' for b in items) + '</ul>'


# LinkAja's bullets come from the live site's markup; keep only their text so they render like every other case
la_did = [row.find_all('span')[-1].decode_contents() for row in bullets.find_all('div', recursive=False)]

toggle = ('<button type="button" class="mk-toggle" aria-expanded="false" aria-controls="d-linkaja">'
          '<span class="mk-t-label"><span class="mk-t-closed">Read the case study</span><span class="mk-t-open" aria-hidden="true">Close</span></span>'
          '<span class="mk-t-meta">%%READ%%</span>'
          '<span class="mk-t-icon" aria-hidden="true"><svg width="20" height="11" viewBox="0 0 20 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 10 9.5l8.5-8"/></svg></span>'
          '</button>')

# phone mockups: no Dynamic Island (at this scale it crowded every header), and the chat header gets the same back
# chevron as the other screens plus an online dot, on the 24px side margin the nav bars use
ISLAND = re.compile(r'<div style="[^"]*width: 116px; height: 33px[^"]*"></div>')
LA_BACK = ('<svg fill="none" height="22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" '
           'style="display: block; flex: none; margin: 0 -2px 0 -6px;" viewBox="0 0 24 24" width="22"><path d="m15 18-6-6 6-6"></path></svg>')
LA_DOT = '<span style="display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #5ee08f; margin-right: 6px; vertical-align: 1px;"></span>'


def polish_phones(html):
    html, n = ISLAND.subn('', html)
    head = '<div style="padding: 22px 22px 0px; display: flex; align-items: center; gap: 12px;">'
    html = html.replace(head, '<div style="padding: 18px 24px 0px; display: flex; align-items: center; gap: 12px;">' + LA_BACK)
    html = re.sub(r'''(opacity: 0\.85; margin-top: 4px;['"]>)Online</div>''', lambda m: m.group(1) + LA_DOT + 'Online</div>', html)
    return html, n


route_html, n_route = polish_phones(str(route))
shots_html, n_shots = polish_phones(str(shots))
assert n_route == 2 and n_shots == 4, (n_route, n_shots)
assert (route_html.count(LA_BACK), route_html.count(LA_DOT)) == (2, 2), (route_html.count(LA_BACK), route_html.count(LA_DOT))

drawer = ('<div class="mk-drawer" id="d-linkaja"><div class="mk-drawer-inner mk-shut"><div class="mk-drawer-body">'
          '<div class="mk-block mk-keys-block"><div class="mk-eyebrow">KEY NUMBERS</div>' + stats_html + '</div>'
          '<div class="mk-block"><div class="mk-eyebrow">WHAT I DID</div>' + did_html(la_did) + '</div>'
          '<div class="mk-block">' + str(chart) + '</div>'
          '<div class="mk-block">' + str(problem) + '</div>'
          '<div class="mk-block">' + str(support) + '</div>'
          '<div class="mk-block">' + route_html + '</div>'
          '<div class="mk-block">' + str(shots_head) + shots_html + '</div>'
          '<button type="button" class="mk-close">Close the case study <span aria-hidden="true">↑</span></button>'
          '</div></div></div>')



# who each company is, in a line under the hero's description (the labs and the independent work need none)
ABOUT_CO = {
    'linkaja': [('LinkAja', 'an Indonesian digital payments and e-wallet app used by 70M+ people.')],
    'komunal': [('Komunal Indonesia', 'a regulated fintech. Its DepositoBPR platform lets people place deposits with rural banks.')],
    'board': [('Dash', 'a restaurant ordering platform: table, kitchen, captain and back-office apps, live across 30+ chains.'),
              ('Lumio', 'a cloud platform that gives digital-signage owners business metrics and sells their screen time, across 150+ locations.')],
}


def about_html(cid):
    return ''.join('<p class="mk-about"><b>' + n + '</b> is ' + t + '</p>' for n, t in ABOUT_CO.get(cid, []))


def split_hero(h2_html, sub_html, fig_html, toggle_html, flip, cid=''):
    # compact hero: title and description beside the diagram, sides alternating down the page; the toggle sits centred
    # under the hero, at the bottom of the section
    return ('<div class="mk-split' + (' flip' if flip else '') + '">'
            '<div class="mk-split-text">' + h2_html + '<p class="mk-sub">' + sub_html + '</p>'
            + (('<div class="mk-abouts">' + about_html(cid) + '</div>') if cid in ABOUT_CO else '') + '</div>'
            + fig_html + '</div>' + toggle_html)


# what each toggle promises: minutes to read the full case study, measured on the live site's sections
# (words at 230 a minute, plus 8s per image up to 8 and about 30s for a section's diagrams)
READ = {'linkaja': 3, 'komunal': 2, 'board': 4, 'ai': 2, 'lab': 2, 'lab-ui': 2}


toggle = toggle.replace('%%READ%%', '%d min read' % READ['linkaja'])
case_html = (
    '<section id="linkaja" class="mk-case" style="border-top:1px solid rgba(242,239,232,.14)">'
    '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:88px 40px 72px">'
    + str(meta)
    + split_hero(str(h2), sub, '<figure class="mk-sv"><canvas data-stack="linkaja" role="img" aria-label="' + SV_ALT + '"></canvas></figure>', toggle, False, 'linkaja')
    + drawer +
    '</div></section>')

# ---------- the other cases and the two labs: hero, signature visual and a short drawer ----------
BRIEF = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
FLASK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>'
CASES = [
    dict(id='komunal', flip=True, n='02 / KOMUNAL INDONESIA', role='SENIOR MANAGER, PRODUCT DESIGN &amp; PM OVERSIGHT · JUN 2024 – NOV 2025', icon=BRIEF,
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
         sub='I founded and ran a B2B product company for eight years, and have sat on its board since 2021.',
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
         alt='Line drawing: three desktop-shaped layers (siloed data sources, demand signals as bars against a dashed confidence threshold, and the workflow builder as a wireframe of node cards and curved connectors). The lime warehouse store lands as its cleaned row in the Sources node; the one signal above the threshold lands as the lime path and the decision node with its approve button.',
         pair=[('ENTERPRISE AI · DATA TO DECISION', 'independent'),
               ('FEATURED · CHRONA', 'chrona', 'Line drawing: three phone-shaped layers (your week, your friends’ free time, and the drafted plan as a wireframe). A lime free evening and the lime overlap where everyone is free land as the plan’s lime time and its lime send button.')],
         bullets=['Enterprise AI: a data-to-decision workflow that validates and cleans siloed legacy data, then puts live decisions in front of the people running the business.',
                  'Agentic orchestration: multi-agent Claude Code builds with specialist sub-agents for brand, exploration, prototyping and shipping, including Chrona, an AI-first social-planning app.',
                  'Advisory and mentorship: AI-augmented UX strategy and design systems for businesses; coaching designers on AI tooling in their daily work.']),
    dict(id='lab', scene='eink', flip=True, n='LAB / BUILT WITH AI', role='PERSONAL R&amp;D · CLAUDE CODE · 2024 – PRESENT', icon=FLASK,
         h2='Shipping real products with AI, end to end.',
         sub='A self-hosted service pulls my live Garmin biometrics every 30 minutes and renders a 1-bit athlete brief for a 7.5″ e-ink panel on my nightstand.',
         stats=[('24/7', 'LIVE ON GCP', True), ('1-BIT', '800×480 E-INK RENDER', False), ('$0', 'CLOUD SUBSCRIPTIONS', False)],
         alt='Line drawing: three panel-shaped layers (live data feeds, the 1-bit layout, and Face 1 of the e-ink panel as a wireframe: header band, four metric cards, today’s suggestion, recovery and footer stats). The lime HRV feed and the lime suggestion block land as the panel’s lime HRV status and suggestion title.',
         bullets=['Garmin Connect API: live biometrics, races, sleep and readiness, fetched on a schedule.',
                  'FastAPI fetcher with a SQLite cache, so a Garmin outage never blanks the display.',
                  'Pillow renderer: an 800×480 canvas converted to 1-bit with Floyd–Steinberg dithering, rendered on fetch.',
                  'TRMNL DIY kit (ESP32) on the nightstand; everything behind it designed and built with Claude Code.']),
    dict(id='lab-ui', scene='cockpit', fan=True, n='LAB / AI-ASSISTED UI', role='PERSONAL CONCEPT · GARMIN CONNECT', icon=FLASK,
         h2='What if Garmin Connect read like a cockpit?',
         sub='Dark display glass, fine graduated scales and one pointer that always means you, now. AI widened the exploration; the direction and every call stayed mine.',
         alt='Line drawing: three phone-shaped layers (terrain, a wall of instruments, and the app’s glass display as a wireframe). Your lime position and the lime reading that matters land as the lime pointer and value.',
         bullets=['Home, at a glance: grouped by the question you are asking (recovery, training, today).',
                  'Density is a setting: the same screen, dense, where only the size changes.',
                  'On a hard day, colour appears only when something departs from normal.',
                  'Training, plan first: this week’s sessions, then the load behind them.']),
]


# ---------- the live site's own case content, moved into each drawer ----------
def live_kids(name):
    # the section's content blocks: descend through single-child wrappers, then take the children
    node = soup(read(name)).find()
    while len(node.find_all(recursive=False)) == 1:
        node = node.find(recursive=False)
    return node.find_all(recursive=False)


def blocks(*els):
    return ''.join('<div class="mk-block">' + str(e) + '</div>' for e in els)


kom, ai_, brd, lab_, lui = live_kids('komunal'), live_kids('ai'), live_kids('board'), live_kids('lab'), live_kids('labui')


def without_ds(row):
    # the live row pairs "Tooling migration" with the old "One design system · three orgs" tree; the tree is replaced
    for card in row.find_all(recursive=False):
        if 'ONE DESIGN SYSTEM' in card.get_text(' ', strip=True).upper():
            card.decompose()
    return row


def with_shipped_flow(row):
    # the funnel row's old two-phone "shipped screen + flow" panel becomes the four-phone flow with the routing (design/sections/)
    panel = next(d for d in row.find_all('div') if 'SHIPPED SCREEN + FLOW' in d.get_text(' ', strip=True)
                 and 'min-height: 340px' in (d.get('style') or ''))
    # four phones need the full width: the flow spans the whole grid row, so the funnel takes the row above to itself
    cell = soup('<div style="grid-column: 1 / -1; min-width: 0;"></div>').div
    cell.append(soup(open(os.path.join(HERE, '..', 'sections', 'komunal-shipped-flow.html'), encoding='utf-8').read()))
    grid = panel.parent
    panel.replace_with(cell)
    # one column: the funnel panel takes its own full row, laid out as funnel | volume so its charts keep their scale
    grid['style'] = re.sub(r'grid-template-columns:[^;]*;', 'grid-template-columns: minmax(0, 1fr);', grid.get('style', ''))
    fun = next(d for d in grid.find_all('div', recursive=False) if 'Deposit Placement Funnel' in d.get_text())
    head, chart, vol, spacer, note = fun.find_all(recursive=False)
    a_col = soup('<div class="kfun-a"></div>').div
    head.insert_before(a_col); a_col.append(head.extract()); a_col.append(chart.extract())
    fun['class'] = 'kfun'; vol['class'] = 'kfun-b'; spacer['class'] = 'kfun-sp'; note['class'] = 'kfun-n'
    grid.insert(0, soup('''<style>
.kfun { display: grid !important; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); column-gap: 32px; align-items: start; }
.kfun > .kfun-b { margin-top: 0 !important; padding-top: 0 !important; border-top: 0 !important; padding-left: 32px; border-left: 1px solid rgba(255, 255, 255, .08); align-self: stretch; }
.kfun > .kfun-sp { display: none; }
.kfun > .kfun-n { grid-column: 1 / -1; margin-top: 18px; }
@media (max-width: 899px) {
  .kfun { grid-template-columns: minmax(0, 1fr); }
  .kfun > .kfun-b { margin-top: 16px !important; padding-top: 18px !important; border-top: 1px solid rgba(255, 255, 255, .08) !important; padding-left: 0; border-left: 0; }
}
</style>'''))
    return row


LIVE = {
    # the design system story (design/sections/), the tooling migration (its old design-system card removed),
    # then why placements dropped off (placement routing, design/sections/) right before the funnel it lifted
    'komunal': blocks(soup(open(os.path.join(HERE, '..', 'sections', 'komunal-design-system.html'), encoding='utf-8').read()),
                      without_ds(kom[2]),
                      soup(open(os.path.join(HERE, '..', 'sections', 'komunal-placement-routing.html'), encoding='utf-8').read()),
                      with_shipped_flow(kom[3])),
    'board': blocks(brd[1].find_all(recursive=False)[1],    # the Dash table app (was beside the intro)
                    brd[2], brd[3], brd[4]),                # captain + back office, Lumio, governance
    # the decision desk lives in the repo (design/sections/) so it can be polished; Chrona still comes from the capture
    'ai': blocks(soup(open(os.path.join(HERE, '..', 'sections', 'ai-decision-desk.html'), encoding='utf-8').read()), ai_[3]),
    'lab': blocks(lab_[2]),                                 # Garmin Daily Brief: faces, architecture, shoe tracker
}
# the cockpit: the write-up beside its headline on the live site, and the not-affiliated note under the close-ups
lui_intro = lui[0].find_all(recursive=False)[1].find_all(recursive=False)[1]
lui_note = lui[2].find_all(recursive=False)[2]
# the close-ups keep the live site's isometric tiles: each screen tilted as a slab and cropped in its frame
closeups_html = str(lui[2].find_all(recursive=False)[1])
QUESTION = '<div class="mk-block"><div class="mk-eyebrow">THE QUESTION</div>' + str(lui_intro) + '</div>'


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
    stats = keys_html(c['stats']) if c.get('stats') else ''
    meta = ('<div style="display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:26px;flex-wrap:wrap">'
            f'<div style="display:flex;align-items:center;gap:10px;font:600 12px/1 \'IBM Plex Mono\',monospace;letter-spacing:.16em;color:{LIME}">{c["icon"]}<span>{c["n"]}</span></div>'
            f'<div style="font:500 11px/1 \'IBM Plex Mono\',monospace;letter-spacing:.1em;color:rgba(242,239,232,.6)">{c["role"]}</div></div>')
    h2 = ('<h2 style="margin:0;font:800 46px/1.04 Archivo;font-stretch:112%;letter-spacing:-.02em;text-wrap:balance">' + c['h2'] + '</h2>')
    did = did_html(c['bullets'])
    tog = ('<button type="button" class="mk-toggle" aria-expanded="false" aria-controls="d-' + c['id'] + '">'
           '<span class="mk-t-label"><span class="mk-t-closed">Read the case study</span><span class="mk-t-open" aria-hidden="true">Close</span></span>'
           '<span class="mk-t-meta">%%READ%%</span>'
           '<span class="mk-t-icon" aria-hidden="true"><svg width="20" height="11" viewBox="0 0 20 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 10 9.5l8.5-8"/></svg></span>'
           '</button>')
    dr = ('<div class="mk-drawer" id="d-' + c['id'] + '"><div class="mk-drawer-inner mk-shut"><div class="mk-drawer-body">'
          + (('<div class="mk-block"><div class="mk-eyebrow">THE SCREENS</div>' + fan_html + '</div>' + QUESTION +
              '<div class="mk-block"><div class="mk-eyebrow">THE INSTRUMENT CRAFT, UP CLOSE</div>' + closeups_html + str(lui_note) + '</div>') if c.get('fan') else '') +
          # the cockpit concept has no outcome numbers to report (owner: "we don't need this")
          ('' if c.get('fan') else '<div class="mk-block mk-keys-block"><div class="mk-eyebrow">KEY NUMBERS</div>' + stats + '</div>') +
          '<div class="mk-block"><div class="mk-eyebrow">WHAT I DID</div>' + did + '</div>'
          + LIVE.get(c['id'], '') +
          '<button type="button" class="mk-close">Close the case study <span aria-hidden="true">↑</span></button>'
          '</div></div></div>')
    tog = tog.replace('%%READ%%', '%d min read' % READ[c['id']])
    return ('<section id="' + c['id'] + '" class="mk-case" style="border-top:1px solid rgba(242,239,232,.14)">'
            '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:88px 40px 72px">' + meta
            + (('<div class="mk-case-hero"><div>' + h2 + '</div><div class="mk-case-side"><p class="mk-sub">' + c['sub'] + '</p></div></div>' + figure(c) + tog)
               if 'pair' in c else split_hero(h2, c['sub'], figure(c), tog, c.get('flip', False), c['id']))
            + dr + '</div></section>')


more_html = ''.join(case_section(c) for c in CASES)

# ---------- background: the career timeline as its hero, earlier work and capabilities in a drawer that starts open ----------
career, earlier, caps = live_kids('career'), live_kids('earlier'), live_kids('capabilities')
edu = caps[1].find_all(recursive=False)[-1]   # the degree; the certificates live only in the profile card
# one line on what each company is, under the role in the timeline
ABOUT = {
    ('2011–16', 'Appsindo Technology'): 'A software house: an agency designing and building apps for retail, F&amp;B and entertainment brands.',
    ('2016–24', 'Dash · Lumio'): 'My B2B product company: Dash for restaurant ordering, Lumio for revenue from signage networks.',
    ('2021–', 'Dash · Lumio'): 'A board seat: strategy, governance, financial health and risk.',
    ('2021–23', 'LinkAja'): 'An Indonesian digital payments app used by 70M+ people.',
    ('2024–25', 'Komunal Indonesia'): 'A regulated fintech behind DepositoBPR, for placing deposits with rural banks.',
    ('2025–', 'Independent'): 'Product and AI design consulting for businesses and design teams.',
}
for row in career[1].find_all(recursive=False):
    sp = row.find_all('span')
    key = (sp[0].get_text(strip=True), sp[1].get_text(strip=True))
    row.append(BeautifulSoup('<span class="mk-co-about">' + ABOUT[key] + '</span>', 'html.parser'))
bg_html = (
    '<section id="background" class="mk-case mk-bg" style="border-top:1px solid rgba(242,239,232,.14)">'
    '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:88px 40px 72px">'
    '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:26px;flex-wrap:wrap">'
    f'<div style="font:600 12px/1 \'IBM Plex Mono\',monospace;letter-spacing:.16em;color:{LIME}">BACKGROUND</div>'
    '<div style="font:500 11px/1 \'IBM Plex Mono\',monospace;letter-spacing:.1em;color:rgba(242,239,232,.6)">2011 – PRESENT</div></div>'
    '<h2 style="margin:0 0 36px;font:800 clamp(32px,3.4vw,44px)/1.04 Archivo;font-stretch:112%;letter-spacing:-.02em;text-wrap:balance">Fifteen years across four companies.</h2>'
    + str(career[1]) +
    '<button type="button" class="mk-toggle" aria-expanded="true" aria-controls="d-background">'
    '<span class="mk-t-label"><span class="mk-t-closed" aria-hidden="true">Show full background</span><span class="mk-t-open">Close</span></span>'
    '<span class="mk-t-meta">Earlier work · capabilities · education</span>'
    '<span class="mk-t-icon" aria-hidden="true"><svg width="20" height="11" viewBox="0 0 20 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 10 9.5l8.5-8"/></svg></span>'
    '</button>'
    '<div class="mk-drawer open" id="d-background"><div class="mk-drawer-inner settled"><div class="mk-drawer-body">'
    + '<div class="mk-block"><div class="mk-eyebrow">EARLIER WORK · 2011–2016 · APPSINDO TECHNOLOGY</div>'
    '<p class="mk-context">Appsindo Technology is a software house, an agency that designs and builds apps for its clients. '
    'Four of the client products I designed there:</p>' + str(earlier[1]) + '</div>' +
    '<div class="mk-block"><div class="mk-eyebrow">CAPABILITIES</div>' + str(caps[0]) + '</div>'
    '<div class="mk-block"><div class="mk-eyebrow">EDUCATION</div><div class="mk-edu">' + edu.get_text(' ', strip=True) + '</div></div>'
    '<button type="button" class="mk-close">Close the background <span aria-hidden="true">↑</span></button>'
    '</div></div></div></div></section>')
contact = soup(read('contact')).find()
for a in contact.find_all('a'):
    if a.get('download') is not None:
        a['href'] = 'https://dennyryanto.github.io/denny-ryanto-resume.pdf'
more_html += bg_html + str(contact)

# ---------- type floor (audit F5): nothing under 11px, except text drawn inside SVG diagrams, which scales with them ----------
FONT_PX = re.compile(r'(font(?:-size)?\s*:[^;"]*?)(\d+(?:\.\d+)?)px')


def lift(decl):
    return FONT_PX.sub(lambda m: m.group(1) + ('11' if float(m.group(2)) < 11 else m.group(2)) + 'px', decl)


def floor_type(html):
    sp = BeautifulSoup(html, 'html.parser')
    n = 0
    for el in sp.find_all(style=True):
        if el.name == 'svg' or el.find_parent('svg'):
            continue
        new = lift(el['style'])
        if new != el['style']:
            el['style'] = new
            n += 1
    return str(sp), n


css = lift(css)
more_html, lifted = floor_type(more_html)
case_html, lifted2 = floor_type(case_html)
top_html, lifted3 = floor_type(str(top))
hero_html, lifted4 = floor_type(str(hero))
print('type floor: lifted', lifted + lifted2 + lifted3 + lifted4, 'elements to 11px')

# the mock-ups' own font families become Archivo, in the stylesheet and in inline styles alike
def one_type(html):
    html = re.sub(r'(font(?:-family)?\s*:[^;{}<>]*?)' + DROP_FAMILIES.pattern, lambda m: m.group(1) + 'Archivo', html)
    # SVG text names its family in an attribute
    return re.sub(r'(font-family="[^"]*?)' + DROP_FAMILIES.pattern, lambda m: m.group(1) + 'Archivo', html)


css = one_type(css)
for _ in range(3):   # a declaration can name more than one of them
    more_html, case_html, top_html, hero_html = one_type(more_html), one_type(case_html), one_type(top_html), one_type(hero_html)

tpl = open(os.path.join(HERE, 'hifi_shell.html'), encoding='utf-8').read()
out = (tpl.replace('/*__FONTS__*/', FONTS).replace('/*__SITE_CSS__*/', css)
          .replace('<!--__TOPBAR__-->', top_html)
          .replace('<!--__HERO__-->', hero_html)
          .replace('<!--__INDEX__-->', index_html + clients_html)
          .replace('<!--__CASE__-->', case_html)
          .replace('<!--__MORE__-->', more_html)
          .replace('/*STACK*/', STACK_JS))
open(os.path.join(S, 'portfolio-hifi.html'), 'w', encoding='utf-8').write(out)

# ---------- one piece on its own, for polishing it in isolation: COMPONENT=<file in design/sections, no extension> ----------
COMPONENT = os.environ.get('COMPONENT')
if COMPONENT:
    piece = open(os.path.join(HERE, '..', 'sections', COMPONENT + '.html'), encoding='utf-8').read()
    body = ('<section class="mk-case" id="preview"><div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:64px 40px 72px">'
            + piece + '</div></section>')
    name = ' '.join(w.capitalize() for w in COMPONENT.split('-'))
    page = (tpl.replace('<title>Portfolio Hi-Fi v1</title>', '<meta charset="utf-8">\n<title>%s</title>' % name)
               .replace('/*__FONTS__*/', FONTS).replace('/*__SITE_CSS__*/', css)
               .replace('<!--__TOPBAR__-->', '').replace('<!--__HERO__-->', '').replace('<!--__INDEX__-->', '')
               .replace('<!--__CASE__-->', '').replace('<!--__MORE__-->', body).replace('/*STACK*/', STACK_JS))
    open(os.path.join(S, 'component-%s.html' % COMPONENT), 'w', encoding='utf-8').write(page)
    print('component', COMPONENT, len(page), 'bytes')

# ---------- one section on its own, case study open, for polishing it in isolation: SECTION=ai ----------
SECTION = os.environ.get('SECTION')
if SECTION:
    sec = next(c for c in CASES if c['id'] == SECTION)
    one = case_section(sec)
    one = (one.replace('<div class="mk-drawer" id="d-%s">' % SECTION, '<div class="mk-drawer open" id="d-%s">' % SECTION)
              .replace('<div class="mk-drawer-inner mk-shut">', '<div class="mk-drawer-inner settled">', 1)
              .replace('aria-expanded="false"', 'aria-expanded="true"', 1)
              .replace('<span class="mk-t-closed">', '<span class="mk-t-closed" aria-hidden="true">', 1)
              .replace('<span class="mk-t-open" aria-hidden="true">', '<span class="mk-t-open">', 1))
    one, _ = floor_type(one_type(one))
    page = (tpl.replace('<title>Portfolio Hi-Fi v1</title>', '<meta charset="utf-8">\n<title>%s Section</title>' % sec['n'].split('/')[-1].strip().title().replace('&Amp;', '&amp;'))
               .replace('/*__FONTS__*/', FONTS).replace('/*__SITE_CSS__*/', css)
               .replace('<!--__TOPBAR__-->', '').replace('<!--__HERO__-->', '').replace('<!--__INDEX__-->', '')
               .replace('<!--__CASE__-->', '').replace('<!--__MORE__-->', one).replace('/*STACK*/', STACK_JS))
    open(os.path.join(S, 'section-%s.html' % SECTION), 'w', encoding='utf-8').write(page)
    print('section', SECTION, len(page), 'bytes')
print('bytes', len(out), 'read times', re.findall(r'(\d+) min read', out))
