"""Assemble the hi-fi mockup (opening, case 01 LinkAja in full, and the heroes of the other cases and labs) from the live site's rendered pieces."""
import base64, json, re, sys, os
from bs4 import BeautifulSoup, Comment
import theme   # the colour theme (design/tools/theme.py), applied to every page written here

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

# ---------- the Swiss pass (design/AUDIT.md, "Type C, grid 1") ----------
# Switzer outside the drawings (Archivo expanded for the headings), labels in sentence case with no tracking and no mono, and a hanging
# index: a label column three of twelve columns wide carries the number, the names, the dates, a diagram's title and
# its remark; everything else hangs from the fourth column. The captures and the section files spell their labels in
# capitals, so every one of them is listed here with what it says now ("|" starts a new line in the label column).
SAY = {
    # the opening and the profile card
    'EXPERIENCE': 'Experience', 'NOW': 'Now', 'BOARD': 'Board', 'CERTIFIED': 'Certified',
    'FINTECH': 'Fintech', 'ENTERPRISE': 'Enterprise', 'CONSUMER': 'Consumer',
    # key-number labels
    'CS OPEX': 'CS OPEX', 'USERS · HOME REVAMP': 'Users, home revamp', 'CASES AUTOMATED': 'Cases automated',
    'PTS · DEPOSIT FUNNEL': 'Points, deposit funnel', 'RELEASE CYCLE': 'Release cycle', 'SYSTEM · 3 ORGS': 'System, 3 orgs',
    'SPRINT · 3 DEPTS': 'Sprint, 3 departments', 'DASH CUSTOMERS / MO': 'Dash customers a month', 'DASH CHAINS': 'Dash chains',
    'LUMIO LOCATIONS': 'Lumio locations', 'PROTOTYPES W/ CLAUDE CODE': 'Prototypes with Claude Code',
    'ANTHROPIC CERTIFICATES': 'Anthropic certificates', 'AGENTIC WORKFLOWS': 'Agentic workflows', 'LIVE ON GCP': 'Live on GCP',
    '800×480 E-INK RENDER': '800×480 e-ink render', 'CLOUD SUBSCRIPTIONS': 'Cloud subscriptions',
    # index labels
    'DEPOSIT FUNNEL': 'Deposit funnel', 'CUSTOMERS / MONTH': 'Customers a month', 'AI-NATIVE BUILDS': 'AI-native builds',
    # diagram and mock-up titles (first line) and their notes
    'HOME SCREEN · AS IT SHIPS TODAY': 'Home screen|As it ships today', 'ILLUSTRATIVE': 'Illustrative',
    'CS OPEX AFTER SELF-SERVICE CTP REVAMP · INDEXED': 'CS OPEX after the self-service revamp|Indexed',
    'TICKET-DRIVEN → SELF-SERVICE': 'Ticket-driven to self-service',
    'THE PROBLEM AND THE FIX': 'The problem and the fix', 'AGENT TICKET → SOLVED IN-APP': 'Agent ticket to solved in-app',
    'SUPPORT MODEL, REDESIGNED': 'Support model, redesigned', 'IN-PERSON AGENTS → MAPPED, INTENT-ROUTED ASSIST': 'In-person agents to mapped, intent-routed assist',
    'INTENT ROUTING IN CHAT': 'Intent routing in chat',
    'SELF-SERVICE SCREENS THAT ABSORB THE VOLUME': 'Self-service screens that absorb the volume', 'MYPAYLATER · SHIPPED FLOW': 'MyPaylater|Shipped flow',
    'THE TRANSFORMATION · FOUR SHIFTS': 'The transformation|Four shifts', 'JUN 2024 – NOV 2025 · ILLUSTRATIVE': 'Jun 2024 – Nov 2025|Illustrative',
    'ONE DESIGN SYSTEM · THREE ORGS': 'One design system|Three orgs',
    'TOOLING MIGRATION · WEB DELIVERY': 'Tooling migration|Web delivery', 'SANITY → FRAMER': 'Sanity to Framer',
    'SPRINT SYNC · MARKETING, PRODUCT, ENGINEERING': 'Sprint sync|Marketing, Product, Engineering', 'TWO-WEEK SPRINTS · ILLUSTRATIVE': 'Two-week sprints|Illustrative',
    'PLACEMENT ROUTING · BEFORE AND AFTER': 'Placement routing|Before and after',
    'DEPOSIT PLACEMENT FUNNEL · VOLUME': 'Deposit placement funnel|Volume', 'DEPOSITOBPR · ILLUSTRATIVE VOLUMES': 'DepositoBPR|Illustrative volumes',
    'SHIPPED SCREEN + FLOW': 'Shipped screen and flow', 'DEPOSITOBPR · PRODUCT': 'DepositoBPR',
    'DASH ORDERING PLATFORM': 'Dash ordering platform', 'CUSTOMER TABLE APP': 'Customer table app',
    'DASH · CAPTAIN APP AND BACK OFFICE': 'Dash captain app and back office',
    'LUMIO · DIGITAL SIGNAGE NETWORK': 'Lumio digital signage network', 'VP DESIGN 2016–24 · COMMISSIONER 2021– · JAKARTA': 'VP Design 2016–24|Commissioner 2021–|Jakarta',
    'LUMIO · DIGITAL SIGNAGE CMS': 'Lumio digital signage CMS',
    'GOVERNANCE & OVERSIGHT': 'Governance and oversight', 'COMMISSIONER · DASH / LUMIO': 'Commissioner, Dash and Lumio',
    'ENTERPRISE AI · DATA-TO-DECISION WORKFLOW': 'Enterprise AI|Data-to-decision workflow',
    'FEATURED ENGAGEMENT, CHRONA · AI-FIRST SOCIAL PLANNING': 'Chrona|Featured engagement|AI-first social planning',
    'DESIGN SYSTEM · PROTOTYPE · BUILT WITH CLAUDE CODE': 'Design system, prototype, built with Claude Code',
    'FEATURED BUILD, GARMIN DAILY BRIEF · 7.5″ E-INK ATHLETE PANEL': 'Garmin Daily Brief|Featured build|7.5″ e-ink athlete panel',
    'PYTHON · FASTAPI · PILLOW · DOCKER · GCP': 'Python, FastAPI, Pillow, Docker, GCP',
    'PERSONAL CONCEPT, NOT AFFILIATED WITH GARMIN.': 'Personal concept, not affiliated with Garmin.',
    # captions on the boards
    'DASH · CAPTAIN / MANAGER APP': 'Dash captain and manager app', 'DASH · BACK-OFFICE CMS': 'Dash back-office CMS',
    'LIVE': 'Live', 'LED BILLBOARD': 'LED billboard', 'LED BILLBOARD CLUSTER': 'LED billboard cluster', 'INDOOR DISPLAY': 'Indoor display',
    'TRANSIT SCREEN': 'Transit screen', 'LUMIO · 150+ DISPLAY LOCATIONS AND GROWING': 'Lumio: 150+ display locations and growing',
    'THE PRODUCT': 'The product', 'HOW CHRONA WORKS': 'How Chrona works',
    'FACE 1 · READINESS, VITALS & TODAY’S SUGGESTION': 'Face 1: readiness, vitals and today’s suggestion',
    'FACE 2 · WEEKLY VOLUME, ACTIVITY CALENDAR & SLEEP': 'Face 2: weekly volume, activity calendar and sleep',
    'COMPANION BUILD · ESL SHOE TRACKER': 'Companion build: ESL shoe tracker', 'OPENEPAPERLINK': 'OpenEPaperLink', 'BLE AP · ESP32-S3': 'BLE AP, ESP32-S3',
    'CRON RENDER': 'Cron render',
    # background and contact
    'LEADERSHIP': 'Leadership', 'DESIGN': 'Design', 'AI & EMERGING TECH': 'AI and emerging tech', 'TOOLS': 'Tools',
    'GET IN TOUCH': 'Get in touch', 'CONNECT ON LINKEDIN': 'Connect on LinkedIn', 'DOWNLOAD RESUME (PDF)': 'Download resume (PDF)',
}


def say(text):
    t = ' '.join(text.replace('&amp;', '&').split())
    assert t in SAY, 'a label has no sentence-case form in SAY: %r' % t
    return SAY[t].replace('&', '&amp;')


def label_col(title='', notes=(), caps=(), level=3):
    # the label column: a title, quiet lines under it, then the remark that used to sit under the drawing
    # a real heading where the title heads a block; level 0 is a plain label (the section's own heading follows it)
    h = (('<h%d class="mk-lt">%s</h%d>' % (level, title, level)) if level else '<div class="mk-lt">%s</div>' % title) if title else ''
    h += ''.join('<div class="mk-ln">%s</div>' % n for n in notes if n)
    h += ''.join('<p class="mk-lc">%s</p>' % c for c in caps if c)
    return '<div class="mk-hl">' + h + '</div>'


def head_parts(*strings):
    # a head row's strings (a title, then a note) as (title, notes)
    lines = [l for st in strings if st for l in say(st).split('|')]
    return lines[0], lines[1:]


def unit(title, body, notes=(), caps=(), cls=''):
    # one block of a case study: its label column, and the body hanging from the fourth column
    return '<div class="mk-block mk-hang%s">%s<div class="mk-hb">%s</div></div>' % (' ' + cls if cls else '', label_col(title, notes, caps), body)


HEADFACE = "font-family: 'Archivo', 'Mk Arrows', system-ui, sans-serif; font-stretch: 125%"


def in_head(el, weight=800):
    # a captured heading kept as inline styles: Archivo expanded (wdth 125) at 800 instead of the text face
    st = re.sub(r'font-family:[^;]*;?', '', el['style'])
    st = re.sub(r'font-weight:[^;]*;?', '', st).strip().rstrip(';')
    el['style'] = '%s; font-weight: %d; %s;' % (st, weight, HEADFACE) if st else '%s; font-weight: %d;' % (HEADFACE, weight)


UNSAID = []


def swiss_inline(root, strict=False):
    # a captured piece outside a product screen (top bar, opening, background, contact, the captions on a board): its inline
    # mono labels become the site's label style in sentence case, and its type the site's one family. A product screen
    # (drawn at full size and scaled: data-fit, or an image-role drawing) is left as the product draws it.
    for el in ([root] if root.get('style') else []) + root.find_all(style=True):
        if el.get('data-fit') or el.find_parent(attrs={'data-fit': True}) or el.get('role') == 'img' or el.find_parent(attrs={'role': 'img'}):
            continue
        st = el['style']
        if 'IBM Plex Mono' in st:
            st = re.sub(r'font:[^;]*IBM Plex Mono[^;]*;?', '', st)
            st = re.sub(r'letter-spacing:[^;]*;?', '', st)
            el['class'] = el.get('class', []) + ['mk-lb']
            for t in el.find_all(string=True):
                x = ' '.join(t.split())
                if x and x.upper() == x and re.search(r'[A-Z]{2}', x):
                    if x in SAY:
                        t.replace_with(SAY[x].replace('|', ', '))
                    elif strict:
                        UNSAID.append(x)
        st = re.sub(r'font-stretch:[^;]*;?', '', st)
        st = re.sub(r'font-weight:\s*[78]00', 'font-weight: 500', st)
        st = re.sub(r'(font:\s*)[78]00\b', r'\g<1>500', st)
        st = st.replace('Archivo', "'Switzer', 'Mk Arrows', sans-serif")
        el['style'] = st.strip()
    return root


# ---------- CSS: the live site's rules minus runtime/global resets ----------
css = read('css')
drop = [r'^html, body \{[^\n]*\n', r'^#dc-root[^\n]*\n', r'^body \{[^\n]*\n', r'^\.sc-[^\n]*\n', r'^html\.sc-dc-streaming[^\n]*\n',
        r'^x-dc[^\n]*\n', r'^\s*\.gx-(?:track|stage)\b[^\n]*\}\n',   # the old scroll-pinned cockpit, replaced by the fan
        r'^\.(fx|col|grid|ac|jc|jb|f1|noshrink|wrap|fw\d|fs\d+|upper|tc|nowrap|gap\d+|m0|mt\d+|mb\d+|posrel|posabs|round|ohide|bbox|pointer|w100|b0) \{[^\n]*\n']
for d in drop:
    css = re.sub(d, '', css, flags=re.M)
# play the chart bars only once the chart is on screen

# ---------- fonts: the live site's own files, so the page never paints in a fallback and then reflows ----------
# (Google Fonts with font-display: swap made the headline gain a line ~100ms after load and shifted the page)
# Two families only: Archivo (one variable file for every weight and width) and IBM Plex Mono, latin subsets only.
# The live product mock-ups brought their own (Plus Jakarta Sans, Manrope, Sora); they are set in Archivo instead.
KEEP_FAMILIES, KEEP_SUBSETS = ('IBM Plex Mono',), ('latin', 'latin-ext')
# Archivo is dropped from the captures (their uses become the site's text face), except where it is written as the heading stack
# (Archivo followed by Mk Arrows: HEADFACE and the --head token), which is the site's own and stays.
DROP_FAMILIES = re.compile(r'\b(Plus Jakarta Sans|Manrope|Sora|Archivo(?![\'"]?,\s*[\'"]Mk Arrows))\b')


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


# DepositoBPR's own two families, for the Komunal design system and the shipped-flow demo: Poppins (headings, numbers, buttons)
# and Mulish (body and labels), latin subsets, self-hosted from design/fonts (the live app is set in the same pair)
LATIN = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
APP_FONTS = [('Poppins', '500', 'poppins-500.woff2'), ('Poppins', '600', 'poppins-600.woff2'), ('Poppins', '700', 'poppins-700.woff2'),
             ('Mulish', '400 800', 'mulish-var.woff2')]
# The site's type pair, self-hosted from design/fonts: Archivo (headings, big numbers, the wordmark; Google Fonts, SIL Open Font
# License 1.1; the latin variable file cut to wght 500 to 900 and wdth 100 to 125, set at wdth 125 and weight 700 or 800) and
# Switzer (everything else; Fontshare, ITF Free Font License; wght 100 to 900, latin). Neither has the arrows
# U+2190-2193, so 'Mk Arrows' (a 1 KB subset of Inter Tight, arrows only) follows them in every font stack.
# The captures' own use of Archivo is rewritten to Switzer by one_type() below, which runs on their CSS and inline styles only,
# never on these @font-face rules or the heading rules of hifi_shell.html. IBM Plex Mono stays registered for the drawings.
ARROWS = 'U+2190-2193'
# (family, subset label, weights, file, unicode-range, font-stretch range). None = no restriction: the Fontshare files do not cover every codepoint of
# LATIN (no U+2191 / U+2193, no general-punctuation spaces), so a range that names them would be a claim the file cannot keep.
SITE_FONTS = [('Switzer', 'latin', '100 900', 'switzer-var.woff2', None, None),
              ('Archivo', 'latin', '500 900', 'archivo-var.woff2', None, '100% 125%'),
              ('Mk Arrows', 'arrows', '100 900', 'arrows.woff2', ARROWS, None)]


def app_fonts_css():
    out = []
    for fam, wt, f in APP_FONTS:
        data = base64.b64encode(open(os.path.join(HERE, '..', 'fonts', f), 'rb').read()).decode()
        out.append("/* %s latin */\n@font-face { font-family: '%s'; font-style: normal; font-weight: %s; font-display: swap; "
                   "src: url(data:font/woff2;base64,%s) format('woff2'); unicode-range: %s; }" % (fam, fam, wt, data, LATIN))
    for fam, sub_, wt, f, rng, stretch in SITE_FONTS:
        data = base64.b64encode(open(os.path.join(HERE, '..', 'fonts', f), 'rb').read()).decode()
        out.insert(0, "/* %s %s */\n@font-face { font-family: '%s'; font-style: normal; font-weight: %s;%s font-display: swap; "
                   "src: url(data:font/woff2;base64,%s) format('woff2');%s }" % (fam, sub_, fam, wt, ' font-stretch: %s;' % stretch if stretch else '', data, ' unicode-range: %s;' % rng if rng else ''))
    return '\n'.join(out)


FONTS = app_fonts_css() + '\n' + fonts_css()

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
top.find(attrs={'data-r': 'topbar'}).name = 'header'      # the banner landmark
for n in top.find_all('nav'):
    n['aria-label'] = 'Primary'
# the same links, set as the site's labels: brand, sections, then the ways to reach me
TOP_SAY = {'DENNY RYANTO': 'Denny Ryanto', 'WORK': 'Work', 'LAB': 'Lab', 'CONTACT': 'Contact', 'DENNY.RYANTO@GMAIL.COM': 'denny.ryanto@gmail.com',
           'LINKEDIN': 'LinkedIn', 'RESUME (PDF) ↓': 'Resume (PDF)'}
for a in top.find_all('a'):
    a.string = TOP_SAY[a.get_text(' ', strip=True)]
    del a['style']
top_wrap = top.find(attrs={'data-r': 'wrap'})
top_wrap['class'] = ['mk-top']
del top_wrap['style']
top_brand, top_nav, top_reach = top_wrap.find_all(recursive=False)
top_brand['class'] = ['mk-brand']
del top_nav['style']
top_reach['class'] = ['mk-top-r']
del top_reach['style']

def portable(html):
    # The product screens are drawn at their real size (375px phones, 1024 / 1440px tablets and desktops) and scaled
    # into their frames with an inline transform of scale(100cqw / <width>). Dividing a length by a length is typed
    # arithmetic, which older Safari does not support, so it dropped the transform and the screens did not show.
    # tan(atan2(a, b)) gives the same unitless a / b and works in Safari 16.4+, Chrome and Firefox.
    # The captures spell the ratio two ways, calc(100cqw / 375px) and calc(100cqw * (1 / 375px)); both become the tan form.
    # Safari still sized them at about two thirds (it resolves the container units in the transform differently), so
    # each scaled screen is also marked data-fit="<its width>" and the page script sets the exact scale from its frame's
    # measured width (hifi_shell.html); the CSS stays as the fallback without JavaScript.
    # Only inline styles are handled (the marker goes on the element); no stylesheet in the page scales by cqw.
    n = r'(\d+(?:\.\d+)?)\s*px'
    html = re.sub(r'calc\(\s*100cqw\s*\*\s*\(\s*1\s*/\s*' + n + r'\s*\)\s*\)', r'tan(atan2(100cqw, \1px))', html)
    html = re.sub(r'calc\(\s*100cqw\s*/\s*' + n + r'\s*\)', r'tan(atan2(100cqw, \1px))', html)
    return re.sub(r'<(div|span)\b(?![^>]*\bdata-fit=)([^>]*?tan\(atan2\(100cqw,\s*(\d+(?:\.\d+)?)px\)\)[^>]*)>', r'<\1 data-fit="\3"\2>', html)


def section(name):
    # a piece that lives in the repo (design/sections/<name>.html), edited there instead of in the capture
    return soup(open(os.path.join(HERE, '..', 'sections', name + '.html'), encoding='utf-8').read())


def figure_unit(name):
    # a diagram from design/sections as a unit: its head row and the remarks under it move to the label column
    sp = section(name)
    wrap = sp.find('div', class_=re.compile(r'-wrap$'))
    head = wrap.find('div', class_=re.compile(r'-head$'), recursive=False)
    assert head is not None, 'no head row in ' + name
    title, notes = head_parts(*[x.get_text(strip=True) for x in head.find_all('span')])
    head.decompose()
    caps = []
    for c in wrap.find_all('p', class_=re.compile(r'-(cap|note)$'), recursive=False):
        caps.append(c.decode_contents())
        c.decompose()
    if wrap.get('style'):
        del wrap['style']
    return unit(title, str(sp), notes, caps)


CLOSE = '<div class="mk-hang mk-end"><div class="mk-hb"><button type="button" class="mk-close">Close the case study</button></div></div>'


# ---------- hero ----------
hero = soup(read('hero'))
p = hero.find('p')
p.string = ('I lead product design and the transformations that make it stick. Across fintech, enterprise and consumer '
            'platforms I’ve turned design strategy into P&L results and rebuilt how teams design, plan and ship: lower '
            'cost to serve, higher conversion, and platforms used by tens of millions.')
for row in hero.find_all(attrs={'data-r': 'pc-row'}):
    label = row.find('div').get_text(strip=True)
    if label in ('BEFORE', 'FOCUS'):
        row.decompose()
    elif label == 'EXPERIENCE':
        row.find(string=' in digital product').replace_with(' in digital product and transformation')
    if row.parent is not None:
        # the row labels were 50% cream, 4.4:1 on the card's lightest point; 58% measures 5.6:1 and stays quieter than the values (88%)
        lab = row.find('div')
        lab['style'] = lab['style'].replace('rgba(242, 239, 232, 0.5)', 'rgba(242, 239, 232, 0.58)')
# the certificates' issuer line shows Anthropic's own wordmark (from @lobehub/icons-static-svg, cropped to the letters), then the year
ANTHROPIC_WORDMARK = ('<svg role="img" aria-label="Anthropic" viewBox="2 2 178.6 20" height="9" width="80" fill="currentColor" style="display: block; flex: none;">'
                      '<path d="%s"></path></svg>')
issuer = hero.find(string='ANTHROPIC · 2026').parent
issuer['style'] += ' display: flex; align-items: center; gap: 7px;'
issuer.clear()
issuer.append(soup(ANTHROPIC_WORDMARK % 'M38.247 15.874L29.553 2.338H24.86v19.337h4.002V8.139l8.694 13.536h4.693V2.338h-4.003v13.536zm7.313-9.807h6.487v15.608h4.14V6.067h6.487v-3.73H45.56v3.73zm33.686 3.978h-9.109V2.338h-4.14v19.337h4.14v-7.9h9.109v7.9h4.14V2.338h-4.14v7.707zm13.39-3.978h5.108c2.043 0 3.12.746 3.12 2.155 0 1.408-1.077 2.154-3.12 2.154h-5.107v-4.31zm12.37 2.155c0-3.647-2.679-5.884-7.068-5.884h-9.443v19.337h4.142v-7.57h4.61l4.142 7.57h4.583l-4.586-8.146c2.302-.885 3.62-2.75 3.62-5.307zm12.686 9.91c-3.257 0-5.244-2.32-5.244-6.104 0-3.84 1.987-6.16 5.244-6.16 3.23 0 5.189 2.32 5.189 6.16 0 3.784-1.96 6.105-5.189 6.105zm0-16.132c-5.575 0-9.522 4.144-9.522 10.028 0 5.828 3.947 9.972 9.522 9.972 5.547 0 9.466-4.144 9.466-9.972C127.158 6.144 123.24 2 117.692 2zm22.59 8.929h-5.109V6.067h5.11c2.043 0 3.12.829 3.12 2.43 0 1.603-1.077 2.432-3.12 2.432zm.194-8.591h-9.445v19.337h4.142v-7.017h5.303c4.39 0 7.07-2.32 7.07-6.16 0-3.84-2.68-6.16-7.07-6.16zm35.108 12.839c-.718 1.878-2.153 2.956-4.113 2.956-3.257 0-5.244-2.32-5.244-6.105 0-3.84 1.987-6.16 5.244-6.16 1.96 0 3.395 1.077 4.113 2.955h4.388C178.896 4.68 175.667 2 171.472 2c-5.576 0-9.523 4.144-9.523 10.028 0 5.828 3.947 9.972 9.522 9.972 4.223 0 7.453-2.707 8.529-6.823h-4.416zm-26.39-12.84l7.705 19.338h4.225L153.42 2.338h-4.225zM9.277 14.024l2.636-6.796 2.637 6.796H9.276zm.428-11.685L2 21.675h4.307l1.576-4.06h8.06l1.575 4.06h4.307L14.121 2.338H9.704z'))
issuer.append(soup('<span>2026</span>'))
# "measured in outcomes.": each letter of the lime word rolls through a few digits and lands on its letter, left to
# right, like the count-ups in the case studies. The markup is the finished word (split into letters only so the roll
# can't shift the layout), and screen readers get the plain word. Reduced motion keeps it still.
hero_h1 = hero.find(attrs={'data-r': 'hero-h1'})
oc_letters = ''.join('<span class="ol">%s</span>' % ch for ch in 'outcomes')
oc_word, oc_style, oc_script = [n for n in soup("""<span style="color: oklch(0.9 0.2 122);"><span class="oc"><span class="oc-sr">outcomes</span><span class="oc-l" aria-hidden="true">""" + oc_letters + """</span></span>.</span>
<style>
.oc { white-space: nowrap; }
.oc-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
.ol { display: inline-block; position: relative; clip-path: inset(.07em -40% -.12em -40%); }
.ol-s { display: block; position: relative; }
.ol-d { position: absolute; left: 50%; bottom: 100%; transform: translateX(-50%); display: flex; flex-direction: column; }
.ol-d i { font-style: normal; display: block; height: .98em; line-height: .98; text-align: center; font-variant-numeric: tabular-nums; }
</style>
<script>
(function () {
  var word = document.querySelector('.oc-l'); if (!word || !word.animate) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var ls = [].slice.call(word.querySelectorAll('.ol')), busy = false;
  ls.forEach(function (l) {
    var s = document.createElement('span'); s.className = 'ol-s';
    while (l.firstChild) s.appendChild(l.firstChild);
    var d = document.createElement('span'); d.className = 'ol-d'; s.appendChild(d); l.appendChild(s);
  });
  function roll() {
    if (busy) return; busy = true;
    ls.forEach(function (l, k) {
      var s = l.firstChild, d = s.lastChild, n = 6 + k, html = '';
      for (var j = 0; j < n; j++) html += '<i>' + Math.floor(Math.random() * 10) + '</i>';
      d.innerHTML = html;
      var a = s.animate([{ transform: 'translateY(' + (n * .98) + 'em)' }, { transform: 'translateY(0)' }],
        { duration: 700 + k * 110, delay: 120 + k * 45, easing: 'cubic-bezier(.16, .84, .3, 1)', fill: 'backwards' });
      if (k === ls.length - 1) a.onfinish = function () { busy = false; };
    });
  }
  var played = false;
  new IntersectionObserver(function (es) {
    if (es[0].isIntersecting && !played) { played = true; roll(); }
  }, { threshold: .6 }).observe(word);
  word.parentNode.addEventListener('pointerenter', roll);
})();
</script>""").contents if n.name]
hero_h1.find('span').replace_with(oc_word)
for t in hero_h1.find_all(string=lambda x: 'measured in' in x):   # keep the original break: "measured in" / "outcomes."
    pre, post = t.split('measured in', 1)
    t.replace_with(soup(pre + '<span style="white-space: nowrap;">measured in</span>' + post))
hero_h1.insert_after(oc_script)
hero_h1.insert_after(oc_style)
head = base64.b64encode(open(os.path.join(S, 'unpacked/assets/92db9c4c-6c60-4494-a54f-0fdbf08a9132.webp'), 'rb').read()).decode()
slot = hero.find('image-slot')
img = hero.new_tag('img', src='data:image/webp;base64,' + head, alt='Denny Ryanto',
                   style='width:100%;height:100%;object-fit:cover;display:block')
slot.parent.replace_with(img)

# ---------- easter egg: ten quick taps on the profile card flip it over to a fun fact, with a burst of lime sparks ----------
# the card's frame (padding, border, radius, background) moves onto its two faces so the whole card can turn in 3D;
# the outer <aside> keeps its size and place, so nothing on the page moves
card = hero.find(attrs={'data-r': 'profile-card'})
FRAME = ('padding', 'border', 'border-radius', 'background')
decls = [d.strip() for d in card['style'].split(';') if d.strip()]
frame = '; '.join(d for d in decls if d.split(':')[0].strip() in FRAME)
card['style'] = '; '.join(d for d in decls if d.split(':')[0].strip() not in FRAME) + ';'
card['tabindex'] = '0'
flip = soup('<div class="ee-in"><div class="ee-front"></div></div>').div
front = flip.div
for ch in list(card.contents):
    front.append(ch.extract())
front['style'] = frame
flip.append(soup("""<div class="ee-back" aria-hidden="true" style="%s">
<div class="ee-eyebrow">Easter egg, 1 of 3</div>
<div class="ee-title">You found it.</div>
<p>Ten taps? Okay, you&rsquo;re officially curious. Here&rsquo;s something that&rsquo;s not on my CV: I&rsquo;m a huge sci-fi movie nerd.</p>
<p>Long before I knew UI/UX was a job, I&rsquo;d pause films just to stare at the screens in the background: ship consoles, HUDs, interfaces that didn&rsquo;t exist yet. Wondering who designs those is how I ended up designing real ones.</p>
<p>Thanks for poking around. You&rsquo;re my kind of person.</p>
<button type="button" class="ee-close">Flip back <span aria-hidden="true">&#8634;</span></button>
</div>""" % frame).div)
card.append(flip)
card.insert_before(Comment("""
  Hey there, code explorer.
  You found the easter egg the hard way. Respect.
  The easy way: tap my profile card 10 times, quickly.

  Since you are already here, a fun fact: sci-fi movies are why I got into UI/UX.
  I used to pause films just to study the screens in the background, the ship
  consoles and HUDs, and wonder who designed them. Now I design the real ones.

  If you like digging this deep, say hi: denny.ryanto@gmail.com
  Denny
"""))
card.insert_after(soup("""<style>
[data-r="profile-card"] { perspective: 1400px; border-radius: 18px; -webkit-tap-highlight-color: transparent; }
/* the site's card padding and header spacing now belong to the faces, so the card keeps its live size */
[data-r="profile-card"] { padding: 0 !important; }
[data-r="profile-card"] > div.ee-in:first-child { margin-bottom: 0 !important; }
@media (min-width: 1181px) {
  .ee-front, .ee-back { padding: 22px 24px !important; }
  .ee-front > div:first-child { margin-bottom: 14px !important; }
}
@media (max-width: 480px) { .ee-front, .ee-back { padding: 22px 18px !important; } }
[data-r="profile-card"]:focus-visible { outline: 2px solid oklch(0.9 0.2 122); outline-offset: 3px; }
.ee-in { position: relative; transform-style: preserve-3d; transition: transform .75s cubic-bezier(.3, .7, .2, 1); }
.ee-front, .ee-back { box-sizing: border-box; -webkit-backface-visibility: hidden; backface-visibility: hidden; }
.ee-back { position: absolute; inset: 0; transform: rotateY(180deg); display: flex; flex-direction: column; gap: 10px;
  background: linear-gradient(rgba(242, 239, 232, .06), rgba(242, 239, 232, .02)), #161511 !important; overflow: hidden; }
.ee-eyebrow { font: 400 13px/1.3 'Switzer', 'Mk Arrows', sans-serif; color: oklch(0.9 0.2 122); }
/* the only way back: a button, so an extra eleventh tap can't flip the card before the message is read */
.ee-close { margin-top: auto; align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; padding: 9px 14px; border-radius: 999px;
  border: 1px solid oklch(0.9 0.2 122 / .55); background: oklch(0.9 0.2 122 / .08); color: oklch(0.9 0.2 122); cursor: pointer;
  font: 500 13px/1 'Switzer', 'Mk Arrows', sans-serif; transition: background-color .2s, border-color .2s; }
.ee-close span { font-size: 14px; letter-spacing: 0; }
.ee-close:hover { background: oklch(0.9 0.2 122 / .16); border-color: oklch(0.9 0.2 122); }
.ee-close:focus-visible { outline: 2px solid oklch(0.9 0.2 122); outline-offset: 2px; }
.ee-title { font: 500 22px/1.1 'Switzer', 'Mk Arrows', sans-serif; letter-spacing: -.02em; color: #f2efe8; }
.ee-back p { margin: 0; font: 400 14px/1.5 'Switzer', 'Mk Arrows', sans-serif; color: rgba(242, 239, 232, .82); }
[data-r="profile-card"].ee-flipped .ee-in { transform: rotateY(180deg); }
/* the hint: one small wobble on the seventh tap */
@keyframes ee-wobble { 0%, 100% { transform: rotate(0); } 20% { transform: rotate(-2.2deg); } 45% { transform: rotate(1.8deg); } 70% { transform: rotate(-.9deg); } }
[data-r="profile-card"].ee-wobble .ee-in { animation: ee-wobble .5s ease-in-out; }
.ee-spark { position: fixed; z-index: 60; width: 10px; height: 10px; margin: -5px 0 0 -5px; border-radius: 50%; pointer-events: none;
  background: oklch(0.93 0.2 122); box-shadow: 0 0 10px 2px oklch(0.9 0.2 122 / .75); }
.ee-spark.s { width: 3px; height: 14px; margin: -7px 0 0 -1.5px; border-radius: 2px; }
@media (prefers-reduced-motion: reduce) {
  .ee-in { transition: none; transform-style: flat; }
  .ee-back { transform: none; opacity: 0; transition: opacity .3s; }
  [data-r="profile-card"].ee-flipped .ee-in { transform: none; }
  [data-r="profile-card"].ee-flipped .ee-back { opacity: 1; }
}
</style>
<script>
(function () {
  var card = document.querySelector('[data-r="profile-card"]'); if (!card) return;
  var front = card.querySelector('.ee-front'), back = card.querySelector('.ee-back');
  var n = 0, last = 0, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var close = back.querySelector('.ee-close');
  function flip(on) {
    card.classList.toggle('ee-flipped', on);
    front.setAttribute('aria-hidden', on ? 'true' : 'false'); back.setAttribute('aria-hidden', on ? 'false' : 'true');
    close.tabIndex = on ? 0 : -1;
    if (on) setTimeout(function () { close.focus({ preventScroll: true }); }, reduce ? 0 : 700); else card.focus({ preventScroll: true });
  }
  close.tabIndex = -1;
  close.addEventListener('click', function (e) { e.stopPropagation(); n = 0; flip(false); });
  function sparks() {
    var r = card.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    // dots and short streaks fly out from the card's edge, hold their size, then fade
    for (var i = 0; i < 36; i++) {
      var d = document.createElement('i'); d.className = 'ee-spark' + (i % 3 ? '' : ' s');
      var a = Math.PI * 2 * i / 36 + Math.random() * .3, ex = Math.cos(a), ey = Math.sin(a);
      var sx = cx + ex * r.width * .45, sy = cy + ey * r.height * .4;
      d.style.left = sx + 'px'; d.style.top = sy + 'px'; document.body.appendChild(d);
      var dist = 90 + Math.random() * 160, s = .7 + Math.random() * .7, rot = 'rotate(' + (a * 180 / Math.PI + 90) + 'deg)';
      d.animate([{ transform: 'translate(0,0) ' + rot + ' scale(' + s + ')', opacity: 1 },
                 { transform: 'translate(' + ex * dist * .75 + 'px,' + ey * dist * .75 + 'px) ' + rot + ' scale(' + s + ')', opacity: 1, offset: .55 },
                 { transform: 'translate(' + ex * dist + 'px,' + (ey * dist + 30) + 'px) ' + rot + ' scale(.2)', opacity: 0 }],
                { duration: 1000 + Math.random() * 600, easing: 'cubic-bezier(.15,.6,.3,1)' }).onfinish = (function (el) { return function () { el.remove(); }; })(d);
    }
  }
  function tap() {
    if (card.classList.contains('ee-flipped')) return;   // only the button flips it back
    var now = Date.now(); n = now - last > 1500 ? 1 : n + 1; last = now;
    if (n === 7 && !reduce) { card.classList.remove('ee-wobble'); void card.offsetWidth; card.classList.add('ee-wobble'); }
    if (n >= 10) { n = 0; flip(true); if (!reduce && card.animate) sparks(); }
  }
  card.addEventListener('click', function (e) { if (!e.target.closest('a, button')) tap(); });
  card.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target === card) { e.preventDefault(); tap(); } });
})();
</script>"""))

# ---------- the opening on the grid: the label column, the headline from the fourth column, then the text beside the card ----------
hero_wrap = hero.find(attrs={'data-r': re.compile('hero-row')})
hero_left = hero_wrap.find('div', recursive=False)
hero_left.find('div', recursive=False).decompose()          # the mono kicker: its two facts move to the label column
avail = hero_left.find('a', attrs={'data-r': 'avail'})
avail.string = 'Open to Head / AVP roles in Jakarta'
avail['class'] = ['mk-avail']
del avail['style']
p['class'] = ['mk-lede']
del p['style']
hero_h1['class'] = ['mk-h1']
del hero_h1['style']
del hero_h1['data-r']
swiss_inline(card)
in_head(card.find(string=lambda t: t.strip() == 'Denny Ryanto').parent)   # the card's name
card['style'] = re.sub(r'(flex|width|margin-top):[^;]*;?\s*', '', card['style'])
for el in card.find_all(string=lambda t: t.strip() == 'HEAD / AVP,'):   # the card's title line, two lines in capitals
    title_line = el.parent
    title_line.clear()
    title_line.append('Head / AVP, Product Design')
hero_new = soup('<div data-r="wrap" class="mk-open mk-hang">' + label_col('', ['Portfolio 2026', 'Head / AVP, Product Design'])
                + '<div class="mk-open-h"></div><div class="mk-open-text"></div></div>').div
slot_h, slot_t = hero_new.find(class_='mk-open-h'), hero_new.find(class_='mk-open-text')
for n in list(hero_left.contents):
    (slot_t if n is p or n is avail else slot_h).append(n.extract())
hero_left.decompose()
for n in list(hero_wrap.contents):
    hero_new.append(n.extract())
hero_wrap.replace_with(hero_new)

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
    ('komunal', '+12<span class="mk-unit">pts</span>', 'DEPOSIT FUNNEL', str(icons[1]), '02', 'Komunal',
     'A design and delivery transformation: one system, one sprint, and a deposit funnel that completes more often.'),
    ('board', '~200K', 'CUSTOMERS / MONTH', str(icons[2]), '03', 'Dash and Lumio',
     'Diners ordering through Dash each month, across 30+ restaurant chains.'),
    ('ai', '0→1', 'AI-NATIVE BUILDS', spark, '04', 'Independent',
     'Products taken from concept to working software with multi-agent Claude Code.'),
]
idx_cells = []
for i, (cid, num, label_, icon, n, co, ctx) in enumerate(INDEX):
    idx_cells.append(
        f'<a class="mk-idx" href="#{cid}" data-open="{cid}">'
        f'<div class="mk-dest"><span class="mk-dest-n">{n}</span><span class="mk-dest-co">{co}</span></div>'
        f'<div data-m="count" class="mk-idx-n">{num}</div>'
        f'<div class="mk-idx-l">{say(label_)}</div>'
        f'<p class="mk-idx-c">{ctx}</p>'
        f'</a>')
index_html = ('<nav aria-label="Case index" class="mk-index-nav">'
              '<div class="mk-index-wrap">'
              '<div class="mk-index">' + ''.join(idx_cells) + '</div></div></nav>')

# ---------- clients & brands, right under the case index ----------
clients = soup(read('clients'))
# Rainbow's raster logo carried a tagline and a filled box (which the white filter turned into a solid block): use the redrawn vector
RAINBOW_SVG = open(os.path.join(HERE, '..', 'sections', 'logo-rainbow.svg'), encoding='utf-8').read()
clients.find('img', alt='Rainbow logo')['src'] = 'data:image/svg+xml;base64,' + base64.b64encode(RAINBOW_SVG.encode('utf-8')).decode('ascii')
LOGO_SCALE = {'MAP logo': 1.15, 'Jasamarga logo': 1.6, 'Summarecon logo': 1.35, 'Galeries Lafayette logo': 1.2, 'Genki Sushi logo': 1.5}
client_logos = ''.join('<div class="mk-client"><img src="%s" alt="%s" style="--s:%s"></div>' % (im['src'], im.get('alt', ''), LOGO_SCALE.get(im.get('alt', ''), 1)) for im in clients.find_all('img'))
# the white rabbit that roams the page (design/sections/egg-matrix.html places it at <!--RABBIT--> and moves it); 2px pixels
RABBIT_ROWS = ['..X.X.....', '..X.X.....', '..XXX.....', '.XXXXX....', '.XEXXX....', '..XXXXXX..', '.XXXXXXXX.', '.XXXXXXXXX', '..XX..XX..']
RABBIT = ('<button type="button" class="mx-rabbit" tabindex="-1" aria-label="A white rabbit. Follow it.">'
          '<svg viewBox="0 0 10 9" width="20" height="18" shape-rendering="crispEdges" aria-hidden="true">'
          + '<g fill="#f2efe8">' + ''.join('<rect x="%d" y="%d" width="1" height="1"/>' % (x, y) for y, row in enumerate(RABBIT_ROWS) for x, c in enumerate(row) if c == 'X') + '</g>'
          + '<g fill="#161511">' + ''.join('<rect x="%d" y="%d" width="1" height="1"/>' % (x, y) for y, row in enumerate(RABBIT_ROWS) for x, c in enumerate(row) if c == 'E') + '</g></svg></button>')
clients_html = ('<section class="mk-clients" aria-label="Clients and brands"><div class="mk-clients-wrap mk-hang">'
                + label_col('', ['Clients and brands']) +
                '<div class="mk-hb"><div class="mk-clients-grid">' + client_logos + '</div></div></div></section>')

# ---------- the Garmin glass cockpit: four screens for the fan, three close-ups ----------
labui = soup(read('labui'))
lab_imgs = labui.find_all('img')
FAN = [('Home, at a glance', 'Grouped by the question you’re asking: recovery, training, today.'),
       ('The same screen, dense', 'Density is a setting. Only the size changes.'),
       ('On a hard day', 'Colour appears only when something departs from normal.'),
       ('Training, plan first', 'This week’s sessions, then the load behind them.')]
fan_html = ('<div class="mk-fan" tabindex="0" role="group" aria-roledescription="carousel" aria-label="Garmin Connect concept screens">'
            '<div class="mk-fan-stage">' + ''.join(
                '<figure class="mk-fan-card" data-i="%d"><img src="%s" alt="Concept screen: %s"><i class="mk-fan-shade" aria-hidden="true"></i></figure>' % (i, lab_imgs[i]['src'], t) for i, (t, _) in enumerate(FAN)) +
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
    'PTS · DEPOSIT FUNNEL': 'Deposit-funnel completion after route-first funding and UX audits.',
    'RELEASE CYCLE': 'Web releases went from weeks to days, shipped by design in Framer.',
    'SYSTEM · 3 ORGS': 'One design system shared by Product, Engineering and Marketing.',
    'SPRINT · 3 DEPTS': 'Marketing, Product and Engineering on one two-week sprint.',
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
    return ('<div class="mk-keys" style="--n:%d">' % len(stats) + ''.join(
        f'<div class="mk-key"><div data-m="count" class="mk-key-n" style="color:{LIME if hi else "#f2efe8"}">{n}</div>'
        f'<div class="mk-key-l">{say(l)}</div><p class="mk-key-c">{CONTEXT[l]}</p></div>'
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

# ---------- one stage for every mock-up and photo in a drawer ----------
# The diagrams already sit on one board (design/sections/VIZ-STYLE.md: 14px corners, #1a1b1f, flat: no ring, no shadow).
# The captured product screens and photos get the same: a head row (lime title, a note on the right), the board, and nothing
# framed twice. Product colours stay inside the screens.
def drop_style(el, *props):
    st = el.get('style', '')
    for p in props:
        st = re.sub(r'(^|;)\s*' + re.escape(p) + r'\s*:[^;]*', r'\1', st)
    el['style'] = st.strip('; ')


def board(inner, flush=False):
    return '<div class="mk-board' + (' flush' if flush else '') + '">' + inner + '</div>'


def stage(inner, head=None, caps=(), flush=False, after=''):
    # a drawing on the board, with its title and note (and any remark) in the label column; `after` continues under the board
    title, notes = head_parts(*head) if head else ('', [])
    return unit(title, board(inner, flush) + after, notes, caps)


def spans(row):
    return [s.get_text(strip=True) for s in row.find_all('span')]


# ---------- Stageshow demos (design/stageshow) ----------
# Five mock-ups are looping React demos rebuilt with the Stageshow kit: LinkAja's routing chat and home screen, the Komunal shipped
# flow, the enterprise AI decision desk and Chrona. Their code is one lazy bundle (design/stageshow/vite.site.config.ts; build_site.py
# copies it to assets/stageshow/). Here each gets a placeholder holding its space, with the finished frame (a poster, from
# design/stageshow/build_posters.py) inside it: the page is complete without JavaScript, and nothing shifts when the demo loads.
# The page's script mounts the demo the first time its case study opens. Copy, sizes and heads come from the component's own meta.
import html as _html
SS = os.path.join(HERE, '..', 'stageshow')
SS_LABELS = {
    'linkaja-routing': 'Demo: a limit question is resolved in chat, then a fraud report is routed to a security agent and lands in the agent queue',
    'linkaja-home': 'Demo: the LinkAja home screen as it ships today, with its promo banners advancing',
    'komunal-shipped-flow': 'Demo: a deposit placed in the DepositoBPR app, from the product list to the success screen',
    'ai-decision-desk': 'Demo: an enterprise AI workflow run, from four data sources to a reorder decision ready to approve',
    'ai-chrona': 'Demo: Chrona drafts and sends a birthday brunch plan in two taps',
}
SS_RULES = []
# a stage whose drawing stops short of its frame (design px on the left, right): in the side-by-side layout the column is the drawing's
# width and the frame bleeds out by the inset (in %, so it holds when the frame scales), so the drawing's edge, not the frame's, meets
# the board's padding like the text on the other side
SS_INSET = {}   # was for the text-beside-frame layout; the frame is centred on its board now and the text hangs in the label column
# a full-width stage whose panel sits inside the stage (design px): the lead above lines up with the panel's edge, not the stage's
SS_LEAD_INSET = {}


def ss_meta(id):
    src = open(os.path.join(SS, 'components', id, 'index.tsx'), encoding='utf-8').read()

    def text(key):
        m = re.search(r'\b' + key + r": '((?:[^'\\]|\\.)*)'", src)
        return re.sub(r'\\(.)', r'\1', m.group(1)) if m else None
    sz = re.search(r'sizes: \{ wide: \[(\d+), (\d+)\], compact: \[(\d+), (\d+)\], below: (\d+) \}', src)
    assert sz, 'no sizes in the meta of ' + id
    w, h, cw, ch_, below = map(int, sz.groups())
    return dict(head=text('head'), note=text('note') or 'ILLUSTRATIVE', lead=text('lead'), wide=(w, h), compact=(cw, ch_), below=below,
                stage_w=int(re.search(r'stageWidth: (\d+)', src).group(1)))


def ss_mount(id):
    m = ss_meta(id)

    def poster(kind, size):
        f = os.path.join(SS, 'site', 'posters', '%s-%s.webp' % (id, kind))
        if not os.path.exists(f):
            return ''
        data = base64.b64encode(open(f, 'rb').read()).decode()
        return '<img class="ss-poster ss-poster-%s" alt="" width="%d" height="%d" src="data:image/webp;base64,%s">' % (kind, size[0], size[1], data)
    wide, compact = poster('wide', m['wide']), poster('compact', m['compact'])
    assert compact, 'run design/stageshow/build_posters.py: no poster for ' + id
    sel = '.ss-mount[data-ss="%s"]' % id
    if id in SS_INSET:
        fw = m['wide'][0]; li, ri = SS_INSET[id]; rest = 1 - (li + ri) / fw
        SS_RULES.append('@container (min-width: 861px) { %s { margin-left: -%.2f%%; margin-right: -%.2f%%; } }' % (sel, 100 * li / fw / rest, 100 * ri / fw / rest))
    if id in SS_LEAD_INSET:
        SS_RULES.append('@container (min-width: %dpx) { .ss-box:has(%s) .ss-lead-full { margin-left: %dpx; } }' % (m['below'], sel, SS_LEAD_INSET[id]))
    frame = lambda w, h: '%s .ss-frame { max-width: %dpx; aspect-ratio: %d / %d; }' % (sel, w, w, h)
    if wide:
        SS_RULES.append(frame(*m['wide']))
        SS_RULES.append('@container (max-width: %.2fpx) { %s %s .ss-poster-wide { display: none; } %s .ss-poster-compact { display: block; } }'
                        % (m['below'] - .02, frame(*m['compact']), sel, sel))
    else:   # a stage whose wide design is narrower than its threshold only ever draws the compact one
        SS_RULES.append(frame(*m['compact']))
        SS_RULES.append('%s .ss-poster-compact { display: block; }' % sel)
    return ('<div class="ss-mount" data-ss="%s" role="img" aria-label="%s"><div class="ss-frame">%s%s</div></div>'
            % (id, _html.escape(SS_LABELS[id], quote=True), wide, compact))


def ss_stage(id, full=False):
    m = ss_meta(id)
    return stage('<div class="ss-box">' + ss_mount(id) + '</div>', (m['head'], m['note']), caps=[_html.escape(m['lead'])])


toggle = ('<button type="button" class="mk-toggle" aria-expanded="false" aria-controls="d-linkaja">'
          '<span class="mk-t-label"><span class="mk-t-closed">Read the case study</span><span class="mk-t-open" aria-hidden="true">Close</span></span>'
          '<span class="mk-t-icon" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 20 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 10 9.5l8.5-8"/></svg></span>'
          '<span class="mk-t-meta">%%READ%%</span>'
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


shots_html, n_shots = polish_phones(str(shots))
assert n_shots == 4, n_shots
# laid out like Komunal's shipped screens (.ksf-* in hifi_shell.html): lime header, one panel, numbered captions, a note below
LA_STEPS = ['Onboarding', 'Active limit', 'Application status', 'Self-service FAQ']
phones = [col.find(recursive=False) for col in soup(shots_html).find('div', attrs={'data-r': 'grid4'}).find_all(recursive=False)]
assert len(phones) == len(LA_STEPS)
shots_html = unit(*head_parts('SELF-SERVICE SCREENS THAT ABSORB THE VOLUME', 'MYPAYLATER · SHIPPED FLOW')[:1],
                  '<div class="ksf-panel"><div class="ksf-row" data-m="parallax">' + ''.join(
                      '<figure class="ksf-step">%s<figcaption><b>%d</b> %s</figcaption></figure>' % (ph, i + 1, t) for i, (ph, t) in enumerate(zip(phones, LA_STEPS))) +
                  '</div></div>', head_parts('SELF-SERVICE SCREENS THAT ABSORB THE VOLUME', 'MYPAYLATER · SHIPPED FLOW')[1])


# LinkAja's home screen as it ships today and the routing chat are Stageshow demos (design/stageshow), placed below.
LA_HOME = ss_stage('linkaja-home')
LA_ROUTING = ss_stage('linkaja-routing')

drawer = ('<div class="mk-drawer" id="d-linkaja"><div class="mk-drawer-inner mk-shut"><div class="mk-drawer-body">'
          + unit('Key numbers', stats_html) + unit('What I did', did_html(la_did)) + LA_HOME
          # the diagrams live in design/sections/ so they share one design language (design/sections/VIZ-STYLE.md)
          + figure_unit('linkaja-opex-chart') + figure_unit('linkaja-problem-fix') + figure_unit('linkaja-support-model')
          + LA_ROUTING + shots_html + CLOSE +
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


# the label column of each case: its number (or "Lab"), its name, then the role and the dates on their own lines
META = {
    'linkaja': ('01', 'LinkAja', ['Product Design Lead', 'Sep 2021 – Jun 2023']),
    'komunal': ('02', 'Komunal Indonesia', ['Senior Manager, Product Design &amp; PM Oversight', 'Jun 2024 – Nov 2025']),
    'board': ('03', 'Executive and board', ['Dash Inovasi Abadi', 'Lumio Inovasi Technology', 'Nov 2016 – present']),
    'ai': ('04', 'Independent consulting', ['Product &amp; AI Design Consultant', 'Nov 2025 – present']),
    'lab': ('Lab', 'Built with AI', ['Personal R&amp;D with Claude Code', '2025 – present']),
    'lab-ui': ('Lab', 'AI-assisted UI', ['Personal concept', 'Garmin Connect']),
}


def meta_html(cid):
    num, name, lines = META[cid]
    return ('<div class="mk-hl mk-meta"><div class="mk-lt"><span class="mk-meta-n">%s</span> %s</div>' % (num, name)
            + ''.join('<div class="mk-ln">%s</div>' % l for l in lines) + '</div>')


# what is inside each case study, said on its toggle
TEASE = {'linkaja': 'Home screen today, OPEX chart, support model, intent routing, shipped screens',
         'komunal': 'Transformation map, design system, sprint, routing, funnel, shipped flow',
         'board': 'Dash ordering and back office, Lumio signage, governance',
         'ai': 'Decision desk, Chrona product, habit loop, engine',
         'lab': 'Faces, architecture, deployment, shoe tracker',
         'lab-ui': 'Four screens, the question, close-ups'}


# what the two lab builds are made of, one line under the description: specs, not outcomes (the numbers stay in the drawer)
SPEC = {'lab': ['7.5″ e-ink panel', 'TRMNL DIY kit', 'ESP32'], 'lab-ui': ['4 concept screens', 'Dark glass', 'One pointer']}


def spec_html(cid):
    return ('<ul class="mk-spec">' + ''.join('<li>%s</li>' % t for t in SPEC[cid]) + '</ul>') if cid in SPEC else ''


# the two lab cases share a band: personal builds, as opposed to the client work above them
LAB_BAND = ('<div class="mk-lab-band"><div class="mk-lab-wrap mk-hang"><div class="mk-hl"></div><div class="mk-hb"><div class="mk-lab-t" role="heading" aria-level="2">Lab</div>'
            '<p>Personal builds, made with Claude Code: real software on my own hardware, and a concept for an app I use every day.</p></div></div></div>')


def split_hero(h2_html, sub_html, fig_html, toggle_html, flip, cid=''):
    # the case hero on the grid: label column, then title and description (columns 4 to 8) beside the drawing (9 to 12);
    # the toggle hangs from the fourth column under it
    return ('<div class="mk-hang mk-hero">' + meta_html(cid) +
            '<div class="mk-split-text">' + h2_html + '<p class="mk-sub">' + sub_html + '</p>' + spec_html(cid)
            + (('<div class="mk-abouts">' + about_html(cid) + '</div>') if cid in ABOUT_CO else '') + '</div>'
            + fig_html + '</div><div class="mk-hang mk-tog"><div class="mk-hb">' + toggle_html + '</div></div>')


H2 = '<h2 class="mk-h2">%s</h2>'


# what each toggle promises: minutes to read the full case study, measured on the built page with it open. Words are counted in
# the case study's reading copy and diagram labels at 230 a minute; text inside the animated demos ([data-ss], which hold every
# frame of their loop) and inside scaled product screens (UI, not copy) is left out. Then 8s per image up to 8 (each scaled product
# screen counts as one image), 30s per demo, and about 30s for a case study with diagrams from design/sections/.
# Re-measured 2026-11-11 after the copy trim and corrected the same day (numbers in design/AUDIT.md).
READ = {'linkaja': 3, 'komunal': 5, 'board': 2, 'ai': 3, 'lab': 2, 'lab-ui': 2}


toggle = toggle.replace('%%READ%%', '%d min read. %s.' % (READ['linkaja'], TEASE['linkaja']))
case_html = (
    '<section id="linkaja" class="mk-case" style="border-top:1px solid rgba(242,239,232,.14)">'
    '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:80px 40px 48px">'
    + split_hero(H2 % h2.get_text(' ', strip=True), sub, '<figure class="mk-sv"><canvas data-stack="linkaja" role="img" aria-label="' + SV_ALT + '"></canvas></figure>', toggle, False, 'linkaja')
    + drawer +
    '</div></section>')

# ---------- the other cases and the two labs: hero, signature visual and a short drawer ----------
BRIEF = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
FLASK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>'
CASES = [
    dict(id='komunal', flip=True, n='02 / KOMUNAL INDONESIA', role='SENIOR MANAGER, PRODUCT DESIGN &amp; PM OVERSIGHT · JUN 2024 – NOV 2025', icon=BRIEF,
         h2='Transformed how a regulated fintech designs, plans and ships.',
         sub='In 17 months I moved Product, Engineering and Marketing onto one design system, one release platform and one sprint, and used that footing to lift deposit-funnel completion by about 12 points.',
         # one number per shift: the outcome first, then the system, delivery and operating model in the map's order
         stats=[('+12', 'PTS · DEPOSIT FUNNEL', True), ('1', 'SYSTEM · 3 ORGS', False), ('W→D', 'RELEASE CYCLE', False), ('1', 'SPRINT · 3 DEPTS', False)],
         alt='Line drawing: three phone-shaped layers (the design system, the deposit funnel, and the deposit screen as a wireframe). A lime shared component and the lime redesigned funnel step land as the lime deposit button and progress bar.',
         # the transformation, one bullet per shift, in the order of the map at the top of the drawer
         bullets=['Design system: created the company’s first shared system, one source of foundations, components and tokens across Product, Engineering and Marketing.',
                  'Delivery: championed the move from the legacy Sanity platform to Framer for web components, cutting release cycles from weeks to days.',
                  'Operating model: put Marketing, Product and Engineering on one two-week sprint (one request form, one cut-off, shared ceremonies), with ISO / OJK compliance kept in step.',
                  'Product: led UX audits and a funding-flow redesign that lifted DepositoBPR deposit-funnel completion by roughly 12 percentage points.']),
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
         pair=[('Enterprise AI, data to decision', 'independent'),
               ('Chrona', 'chrona', 'Line drawing: three phone-shaped layers (your week, your friends’ free time, and the drafted plan as a wireframe). A lime free evening and the lime overlap where everyone is free land as the plan’s lime time and its lime send button.')],
         bullets=['Enterprise AI: a data-to-decision workflow that validates and cleans siloed legacy data, then puts live decisions in front of the people running the business.',
                  'Agentic orchestration: multi-agent Claude Code builds with specialist sub-agents for brand, exploration, prototyping and shipping, including Chrona, an AI-first social-planning app.',
                  'Advisory and mentorship: AI-augmented UX strategy and design systems for businesses; coaching designers on AI tooling in their daily work.']),
    dict(id='lab', scene='eink', flip=True, n='LAB / BUILT WITH AI', role='PERSONAL R&amp;D · CLAUDE CODE · 2025 – PRESENT', icon=FLASK,
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


kom, ai_, brd, lab_, lui = live_kids('komunal'), live_kids('ai'), live_kids('board'), live_kids('lab'), live_kids('labui')

# the Lumio eyebrow was blue; drawer labels are lime titles (design/sections/VIZ-STYLE.md)
for sp in brd[3].find_all('span', string='LUMIO · DIGITAL SIGNAGE NETWORK'):
    sp['style'] = sp['style'].replace('rgb(95, 176, 255)', 'oklch(0.9 0.2 122)')


def panel(root, text):
    # the smallest framed element (a border or background in its style) holding the text
    found = [e for e in root.find_all(True) if text in e.get_text(' ', strip=True)
             and ('border' in (e.get('style') or '') or 'background' in (e.get('style') or ''))]
    return min(found, key=lambda e: len(str(e)))


# Chrona's and the Garmin brief's diagram panels come from design/sections/, the photos around them from the capture
for root, text, name in ((ai_[3], 'PRODUCT VISION', 'ai-chrona-loop'), (ai_[3], 'THE ENGINE', 'ai-chrona-engine'),
                         (lab_[2], 'DATA PIPELINE', 'lab-garmin-pipeline'), (lab_[2], 'LIVE DEPLOYMENT', 'lab-garmin-deploy')):
    panel(root, text).replace_with(section(name))

# Dash: the customer table app (its caption becomes the head row)
dash_col = brd[1].find_all(recursive=False)[1]
cap = dash_col.find('span', attrs={'data-r': 'bleed-cap'})
dash_title = [t.strip() for t in cap.get_text(strip=True).split('·')]
cap.decompose()
DASH_APP = stage(str(dash_col), (dash_title[0], dash_title[1] if len(dash_title) > 1 else ''))
# Dash: the captain app and the back office, side by side on one board, each keeping its caption
drop_style(brd[2], 'margin-top')
swiss_inline(brd[2], strict=True)
DASH_TOOLS = stage(str(brd[2]), ('DASH · CAPTAIN APP AND BACK OFFICE',))
# Lumio: the live network (photos), then the CMS, each on its own board
l_head, l_grid, l_cap, l_cms = brd[3].find_all(recursive=False)[:4]
l_t = spans(l_head)
cms_cap = l_cms.find('span', recursive=False)   # the caption under the screen, not a span inside it
cms_title = cms_cap.get_text(strip=True)
cms_cap.decompose()
drop_style(l_cms, 'margin-top')
swiss_inline(l_grid, strict=True)
swiss_inline(l_cap, strict=True)
LUMIO = stage(str(l_grid) + str(l_cap), (l_t[0], l_t[1])) + stage(str(l_cms), (cms_title,))
# Chrona: the product (phone and write-up) on a board under the engagement's head row; its two diagrams already are boards
ch = ai_[3].find_all(recursive=False)
c_t = spans(ch[0])
drop_style(ch[1], 'margin-top')
fig = ch[1].find('figure')
assert fig is not None and ch[1].get('data-r') == 'stack2', 'the Chrona product block changed shape'
fig.replace_with(soup(ss_mount('ai-chrona')))
del ch[1]['data-r']
ch[1]['class'] = ['ss-chrona']
ch[1]['style'] = ''
drop_style(ch[2], 'margin-top')
swiss_inline(ch[1], strict=True)
CHRONA = stage('<div class="ss-box">' + str(ch[1]) + '</div>', (c_t[0], c_t[1]), after='<div class="mk-after">' + str(ch[2]) + '</div>')
# Garmin brief: the two e-ink faces on a board (the build's write-up above it), the diagrams, then the shoe tracker on a flush board
lk = lab_[2].find_all(recursive=False)
g_t = spans(lk[0])
shoe = lk[4]
drop_style(shoe, 'margin-top', 'background', 'border', 'border-radius')
shoe['class'] = ['mk-board', 'flush']
drop_style(lk[3], 'margin-top')
swiss_inline(lk[2], strict=True)
swiss_inline(shoe, strict=True)
GARMIN = stage(str(lk[2]), (g_t[0], g_t[1]), after='<div class="mk-after">' + str(lk[3]) + '</div><div class="mk-after">' + str(shoe) + '</div>')

LIVE = {
    # the transformation map first (four shifts), then one diagram per shift in its order: the design system, the tooling
    # migration, the sprint, then why placements dropped off (placement routing) right before the funnel it lifted
    'komunal': ''.join(figure_unit(n) for n in ('komunal-transformation', 'komunal-design-system', 'komunal-tooling-migration', 'komunal-sprint-sync',
                                                 'komunal-placement-routing', 'komunal-funnel')) + ss_stage('komunal-shipped-flow', full=True),
    'board': DASH_APP + DASH_TOOLS + LUMIO + figure_unit('board-governance'),
    # the decision desk lives in the repo (design/sections/); Chrona's photos come from the capture, its two diagrams from the repo
    'ai': ss_stage('ai-decision-desk', full=True) + CHRONA,
    'lab': GARMIN,      # Garmin Daily Brief: faces, architecture, shoe tracker
}
# the cockpit: the write-up beside its headline on the live site, and the not-affiliated note under the close-ups
lui_intro = lui[0].find_all(recursive=False)[1].find_all(recursive=False)[1]
lui_note = lui[2].find_all(recursive=False)[2]
# the close-ups keep the live site's isometric tiles: each screen tilted as a slab and cropped in its frame
closeups_html = str(lui[2].find_all(recursive=False)[1])
QUESTION = unit('The question', str(lui_intro))


# The lab has its own accent, instrument cyan (owner picked it from the lab colour options): lime stays for outcomes on the case
# studies, and the lab has none to report. It is applied to the lab case's finished markup, and the canvases carry it as data-accent.
LAB_OKLCH, LAB_HEX = '0.84 0.12 215', '#5bdefb'


def lab_accent(h):
    return re.sub(r'oklch\(0\.9[0-9]* 0\.2[0-9]* 122', 'oklch(' + LAB_OKLCH, h)


def figure(c):
    if 'pair' not in c:
        # tablet, desktop and panel stacks are wide, so their frame is 5:4; the phone stacks stand in 4:5
        return '<figure class="mk-sv' + (' mk-sv-wide' if c.get('scene') in ('dash', 'eink') else '') + '"><canvas data-stack="' + c.get('scene', c['id']) + '"' + (' data-clear data-accent="' + LAB_HEX + '"' if c['id'] in SPEC else '') + ' role="img" aria-label="' + c['alt'] + '"></canvas></figure>'
    # two stories in one section: side by side in the wide frame, stacked on phones
    cells = ''
    for p in c['pair']:
        alt = p[2] if len(p) > 2 else c['alt']
        cells += ('<figure class="mk-sv"><canvas data-stack="' + p[1] + '" role="img" aria-label="' + alt + '"></canvas>'
                  '<figcaption class="mk-sv-cap">' + p[0] + '</figcaption></figure>')
    return '<div class="mk-sv-pair">' + cells + '</div>'


def case_section(c):
    stats = keys_html(c['stats']) if c.get('stats') else ''
    h2 = H2 % c['h2']
    did = did_html(c['bullets'])
    tog = ('<button type="button" class="mk-toggle" aria-expanded="false" aria-controls="d-' + c['id'] + '">'
           '<span class="mk-t-label"><span class="mk-t-closed">Read the case study</span><span class="mk-t-open" aria-hidden="true">Close</span></span>'
           '<span class="mk-t-icon" aria-hidden="true"><svg width="16" height="9" viewBox="0 0 20 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1.5 1.5 10 9.5l8.5-8"/></svg></span>'
           '<span class="mk-t-meta">%%READ%%</span>'
           '</button>')
    dr = ('<div class="mk-drawer" id="d-' + c['id'] + '"><div class="mk-drawer-inner mk-shut"><div class="mk-drawer-body">'
          + ((unit('The screens', board(fan_html, flush=True)) + QUESTION +
              unit('The instrument craft, up close', board(closeups_html), [say(lui_note.get_text(' ', strip=True))])) if c.get('fan') else '') +
          # the cockpit concept has no outcome numbers to report (owner: "we don't need this")
          ('' if c.get('fan') else unit('Key numbers', stats)) +
          unit('What I did', did)
          + LIVE.get(c['id'], '') + CLOSE +
          '</div></div></div>')
    tog = tog.replace('%%READ%%', '%d min read. %s.' % (READ[c['id']], TEASE[c['id']]))
    lab = c['id'] in SPEC
    out = (('' if c['id'] != 'lab' else LAB_BAND) +
            '<section id="' + c['id'] + '" class="mk-case' + (' mk-lab' if lab else '') + '" style="' + ('' if c['id'] == 'lab' else 'border-top:1px solid rgba(242,239,232,.14)') + '">'
            '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:80px 40px 48px">'
            + split_hero(h2, c['sub'], figure(c), tog, False, c['id'])
            + dr + '</div></section>')
    return lab_accent(out) if lab else out


more_html = ''.join(case_section(c) for c in CASES)

# ---------- background: the career timeline as its hero, then earlier work, capabilities and education, always open (no toggle) ----------
career, earlier, caps = live_kids('career'), live_kids('earlier'), live_kids('capabilities')
edu = caps[1].find_all(recursive=False)[-1]   # the degree; the certificates live only in the profile card
# transformation leadership leads the leadership capabilities (the Komunal case is told as one)
for t in caps[0].find_all(string=lambda t: t.startswith('Product Strategy & Discovery')):
    t.replace_with('Transformation Leadership · ' + t)
# one line on what each company is, under the role in the timeline
ABOUT = {
    ('2011–16', 'Appsindo Technology'): 'A software house and agency building apps for retail, F&amp;B and entertainment brands.',
    ('2016–24', 'Dash · Lumio'): 'The B2B product company I founded: Dash for restaurant ordering, Lumio for turning signage screens into revenue.',
    ('2021–', 'Dash · Lumio'): 'My board seat: strategy, governance, financial health and risk.',
    ('2021–23', 'LinkAja'): 'An Indonesian digital payments and e-wallet app used by 70M+ people.',
    ('2024–25', 'Komunal Indonesia'): 'A regulated fintech whose DepositoBPR platform lets people place deposits with rural banks. I led its design and delivery transformation.',
    ('2025–', 'Independent'): 'Product and AI design consulting for businesses and design teams.',
}
for row in career[1].find_all(recursive=False):
    sp = row.find_all('span')
    key = (sp[0].get_text(strip=True), sp[1].get_text(strip=True))
    row.append(BeautifulSoup('<span class="mk-co-about">' + ABOUT[key] + '</span>', 'html.parser'))
swiss_inline(career[1])
swiss_inline(earlier[1])
swiss_inline(caps[0])
for row in career[1].find_all(recursive=False):
    for t in row.find_all(string=lambda t: ' · ' in t):
        t.replace_with(t.replace('Dash · Lumio', 'Dash and Lumio').replace(' · ', ', '))
for d in earlier[1].find_all('svg'):
    d.decompose()
# capabilities: a plain heading per group, one capability a line
for grp in caps[0].find_all(recursive=False):
    hd, body = grp.find_all(recursive=False)
    for sv in hd.find_all('svg'):
        sv.decompose()
    hd.attrs = {'class': ['mk-cap-h']}
    items = [x.strip() for x in body.get_text(' ', strip=True).split('·')]
    body.replace_with(soup('<ul class="mk-cap-l">' + ''.join('<li>%s</li>' % i.replace('&', '&amp;') for i in items) + '</ul>'))
caps[0].attrs = {'class': ['mk-caps']}
career[1].attrs = {'class': ['mk-career']}
bg_html = (
    '<section id="background" class="mk-case mk-bg" style="border-top:1px solid rgba(242,239,232,.14)">'
    '<div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:80px 40px 48px">'
    '<div class="mk-hang mk-hero">' + label_col('Background', ['2011 – present'], level=0) +
    '<div class="mk-hb"><h2 class="mk-h2">Fifteen years across four companies.</h2>' + str(career[1]) + '</div></div>'
    '<div class="mk-drawer open" id="d-background"><div class="mk-drawer-inner settled"><div class="mk-drawer-body">'
    + unit('Earlier work', str(earlier[1]), ['2011–2016', 'Appsindo Technology'],
           ['Appsindo Technology is a software house and agency that designs and builds apps for its clients. Four of the products I designed there.'])
    + unit('Capabilities', str(caps[0]))
    + unit('Education', '<div class="mk-edu">B.A. Graphic Design, Pelita Harapan University, 2004–08</div>') +
    '</div></div></div></div></section>')
assert 'GRAPHIC DESIGN' in edu.get_text(' ', strip=True) and '2004–08' in edu.get_text(' ', strip=True), 'the degree line changed'
contact = soup(read('contact')).find()
for a in contact.find_all('a'):
    if a.get('download') is not None:   # as in the top bar: a plain link in the hi-fi (build_site.py makes it a download on the site)
        del a['download']
        a['href'] = 'https://dennyryanto.github.io/denny-ryanto-resume.pdf'
        a['target'] = '_blank'
        a['rel'] = 'noopener'

# ---------- easter egg: when the footer comes into view, a pixel crab (Claude) scuttles in along its top rule ----------
# Claude Code's mascot, pixel for pixel from its startup logo (the block characters "▐▛███▜▌ / ▝▜█████▛▘ / ▘▘ ▝▝"):
# each terminal quadrant is one tall pixel (1 x 2 units, 3px wide on screen). Tapping it walks through three lines in a
# speech bubble; the next tap snaps its arms, throws the card egg's lime sparks and it runs off. It stands on the rule,
# so nothing in the layout moves; it needs JS (hidden without it); reduced motion shows it already in place.
CRAB_BODY = ['...XXXXXXXXXXXX...',
             '...XXEXXXXXXEXX...',
             '.AAXXXXXXXXXXXXAA.',
             '...XXXXXXXXXXXX...']
CRAB_LEGS = (['....X.X....X.X....'], ['.....X.X....X.X...'])


def pixels(rows, y0=0, keep='X'):
    return ''.join('<rect x="%d" y="%d" width="1" height="2"/>' % (x, 2 * (y0 + y))
                   for y, row in enumerate(rows) for x, c in enumerate(row) if c in keep)


CLAUDE_ORANGE = '#d77757'
crab_svg = ('<svg class="cc-svg" viewBox="0 0 18 10" width="72" height="40" shape-rendering="crispEdges" aria-hidden="true">'
            '<g fill="%s">%s</g>' % (CLAUDE_ORANGE, pixels(CRAB_BODY))
            + '<g class="cc-claws" fill="%s">%s</g>' % (CLAUDE_ORANGE, pixels(CRAB_BODY, 0, 'A'))
            + '<g class="cc-eyes" fill="#16150f">%s</g>' % pixels(CRAB_BODY, 0, 'E')
            + ''.join('<g class="cc-legs cc-legs-%d" fill="%s">%s</g>' % (k, CLAUDE_ORANGE, pixels(legs, 4)) for k, legs in enumerate(CRAB_LEGS))
            + '</svg>')
swiss_inline(contact)
c_wrap = contact.find(attrs={'data-r': 'wrap'})
c_left, c_foot = c_wrap.find_all(recursive=False)
c_kicker = c_left.find('div', recursive=False)
c_kicker.decompose()
for a_ in c_left.find_all('a'):
    for sv in a_.find_all('svg'):
        sv.decompose()
c_foot.clear()
c_foot.attrs = {'class': ['mk-foot']}
c_foot.append(soup('<span>PORTFOLIO 2026</span><span>Head / AVP, Product Design</span>'))
c_left.attrs = {'class': ['mk-hb', 'mk-contact']}
c_wrap.attrs = {'data-r': 'wrap', 'class': ['mk-hang', 'mk-contact-wrap']}
c_wrap.insert(0, soup(label_col('', ['What I’m looking for'])))
contact['style'] = contact.get('style', '') + ' position: relative;'
contact.append(Comment("""
  Psst, code explorer. The little orange crab on this line is Claude, who built this site with me.
  Scroll all the way down and tap it a few times.

  And if you'd rather type: press ~ (or tap the _ after PORTFOLIO 2026) and ask the right question.
"""))
for node in list(soup('<div class="cc-track"><div class="cc" hidden><div class="cc-bubble" role="status" aria-live="polite"></div>'
                    '<button type="button" class="cc-crab" aria-label="Claude the crab. Tap to chat.">' + crab_svg + '</button></div></div>'
                    """<style>
.cc-track { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: min(1216px, 100%); height: 0; padding: 0 40px; box-sizing: border-box; pointer-events: none; }
.cc { position: absolute; right: 40px; bottom: 0; }
.cc-crab { display: block; padding: 0; border: 0; background: none; cursor: pointer; pointer-events: auto; -webkit-tap-highlight-color: transparent; }
.cc-crab:focus-visible { outline: 2px solid oklch(0.9 0.2 122); outline-offset: 4px; border-radius: 4px; }
.cc-svg { display: block; overflow: visible; }
.cc-legs-1 { visibility: hidden; }
.cc.walk .cc-legs-0 { animation: cc-a .16s steps(1) infinite; }
.cc.walk .cc-legs-1 { animation: cc-b .16s steps(1) infinite; }
@keyframes cc-a { 0% { visibility: visible; } 50% { visibility: hidden; } }
@keyframes cc-b { 0% { visibility: hidden; } 50% { visibility: visible; } }
.cc.blink .cc-eyes { fill: #d77757; }
.cc.snap .cc-claws { animation: cc-snap .32s steps(1) 2; }
@keyframes cc-snap { 50% { transform: translateY(-2px); } }
.cc-bubble { position: absolute; right: -6px; bottom: calc(100% + 12px); width: max-content; max-width: min(280px, calc(100vw - 40px)); padding: 10px 12px;
  border-radius: 10px; background: #232429; box-shadow: 0 0 0 1px rgba(255, 255, 255, .08), 0 16px 32px -16px rgba(0, 0, 0, .9);
  font: 500 12px/1.5 'IBM Plex Mono', monospace; letter-spacing: .02em; color: #f2f2f4; text-align: left;
  opacity: 0; transform: translateY(4px); transition: opacity .2s, transform .2s; pointer-events: none; }
.cc-bubble::after { content: ''; position: absolute; right: 20px; top: 100%; border: 6px solid transparent; border-top-color: #232429; }
.cc-bubble.on { opacity: 1; transform: none; pointer-events: auto; }
.cc-bubble a { color: oklch(0.9 0.2 122); text-decoration: none; white-space: nowrap; }
.cc-bubble a:hover { text-decoration: underline; }
@media (max-width: 760px) { .cc-track { padding: 0 20px; } .cc { right: 20px; } }
</style>
<script>
(function () {
  var box = document.querySelector('.cc'), sec = document.getElementById('contact'); if (!box || !sec) return;
  var crab = box.querySelector('.cc-crab'), bub = box.querySelector('.cc-bubble');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, step = 0, gone = false, idle = null;
  function px() { return Math.max(0, document.documentElement.scrollHeight - innerHeight).toLocaleString('en-US'); }
  var LINES = [
    function () { return 'Hi, I\\u2019m Claude. Denny and I built this site together.'; },
    function () { return 'You scrolled ' + px() + 'px to get here. I walked it sideways.'; },
    function () { return 'He brings the taste, I bring the claws. <a href="mailto:denny.ryanto@gmail.com">Say hi \\u2192</a>'; },
    function () { window.dispatchEvent(new Event('mx-hint')); return 'Psst: there\\u2019s a terminal down here. Ask it the right question.'; }
  ];
  function say(k) { bub.classList.remove('on'); setTimeout(function () { bub.innerHTML = LINES[k](); bub.classList.add('on'); }, bub.innerHTML ? 140 : 0); }
  function walk(from, to, ms, done) {
    if (reduce || !box.animate) { done && done(); return; }
    box.classList.add('walk');
    box.animate([{ transform: 'translateX(' + from + 'px)' }, { transform: 'translateX(' + to + 'px)' }], { duration: ms, easing: 'cubic-bezier(.35, .1, .4, 1)', fill: 'forwards' })
      .onfinish = function () { box.classList.remove('walk'); done && done(); };
  }
  function life() {   // a blink every few seconds, a claw snap now and then
    if (reduce) return;
    idle = setInterval(function () {
      box.classList.add('blink'); setTimeout(function () { box.classList.remove('blink'); }, 140);
      if (Math.random() < .3) { box.classList.remove('snap'); void box.offsetWidth; box.classList.add('snap'); }
    }, 3200);
  }
  function arrive() {
    box.hidden = false;
    var dist = box.getBoundingClientRect().right + 20;
    walk(-dist, 0, Math.max(1600, dist / .45), function () { life(); setTimeout(function () { say(0); }, 300); });
  }
  function sparks() {
    var r = crab.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    for (var i = 0; i < 24; i++) {
      var d = document.createElement('i'); d.className = 'ee-spark' + (i % 3 ? '' : ' s');
      var a = Math.PI * 2 * i / 24 + Math.random() * .3, ex = Math.cos(a), ey = Math.sin(a), dist = 50 + Math.random() * 90, s = .5 + Math.random() * .5;
      var rot = 'rotate(' + (a * 180 / Math.PI + 90) + 'deg)';
      d.style.left = cx + 'px'; d.style.top = cy + 'px'; document.body.appendChild(d);
      d.animate([{ transform: 'translate(0,0) ' + rot + ' scale(' + s + ')', opacity: 1 },
                 { transform: 'translate(' + ex * dist + 'px,' + (ey * dist + 20) + 'px) ' + rot + ' scale(.2)', opacity: 0 }],
                { duration: 800 + Math.random() * 500, easing: 'cubic-bezier(.15,.6,.3,1)' }).onfinish = (function (el) { return function () { el.remove(); }; })(d);
    }
  }
  function leave() {
    gone = true; clearInterval(idle); bub.classList.remove('on');
    if (reduce || !box.animate) { box.hidden = true; return; }
    box.classList.remove('snap'); void box.offsetWidth; box.classList.add('snap'); sparks();
    setTimeout(function () { walk(0, innerWidth - box.getBoundingClientRect().left + 20, 900, function () { box.hidden = true; }); }, 450);
  }
  crab.addEventListener('click', function () {
    if (gone) return;
    step += 1;
    if (step < LINES.length) say(step); else leave();
  });
  bub.addEventListener('click', function (e) { if (!e.target.closest('a')) crab.click(); });
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (es) {
    if (es[0].isIntersecting) { io.disconnect(); arrive(); }
  }, { threshold: .35 });
  io.observe(sec);
})();
</script>""").contents):
    contact.append(node)
in_head(contact.find(string='Let’s talk.').parent)
contact.find(string='Let’s talk.').parent.attrs.update({'role': 'heading', 'aria-level': '2'})   # a heading for heading navigation, same look
contact.find(string=lambda x: x.strip() == 'PORTFOLIO 2026').parent.parent.name = 'footer'        # the contentinfo landmark
for t in contact.find_all(string=lambda x: x.strip() == 'PORTFOLIO 2026'):   # the terminal's cursor (egg-matrix)
    t.insert_after(soup('<button type="button" class="mx-cursor" aria-label="Open the terminal">_</button>').button)
    t.replace_with('Portfolio 2026')
more_html += bg_html + str(contact) + str(section('egg-matrix')).replace('<!--RABBIT-->', RABBIT)

# ---------- type floor (audit F5): nothing under 11px, except text drawn inside SVG diagrams, which scales with them ----------
FONT_PX = re.compile(r'(font(?:-size)?\s*:[^;"]*?)(\d+(?:\.\d+)?)px')


def lift(decl):
    return FONT_PX.sub(lambda m: m.group(1) + ('11' if float(m.group(2)) < 11 else m.group(2)) + 'px', decl)


FONT_SIZE = re.compile(r'(font-size\s*:\s*)([^;"]*)')
FONT_SHORT = re.compile(r'(font\s*:[^;"]*?)(\d+(?:\.\d+)?)px')


def rem(decl):
    # type sizes follow the reader's browser font-size setting: 16px is 1rem, so nothing moves at the default
    decl = FONT_SIZE.sub(lambda m: m.group(1) + re.sub(r'(\d+(?:\.\d+)?)px', lambda n: '%grem' % (float(n.group(1)) / 16), m.group(2)), decl)
    return FONT_SHORT.sub(lambda m: m.group(1) + '%grem' % (float(m.group(2)) / 16), decl)


def floor_type(html, to_rem=False):
    sp = BeautifulSoup(html, 'html.parser')
    n = 0
    for el in sp.find_all(style=True):
        if el.name == 'svg' or el.find_parent('svg'):
            continue
        new = lift(el['style'])
        # the page's own text goes to rem; a mock-up (an image-role drawing or a scaled screen) keeps its px, as one unit
        if to_rem and not (el.get('role') == 'img' or el.find_parent(attrs={'role': 'img'}) or el.get('data-fit') or el.find_parent(attrs={'data-fit': True})):
            new = rem(new)
        if new != el['style']:
            el['style'] = new
            n += 1
    return str(sp), n


css = lift(css)
more_html, lifted = floor_type(portable(more_html), True)
case_html, lifted2 = floor_type(portable(case_html))
top_html, lifted3 = floor_type(str(top), True)
hero_html, lifted4 = floor_type(str(hero), True)
print('type: floored to 11px and/or converted to rem on', lifted + lifted2 + lifted3 + lifted4, 'elements')

# the mock-ups' own font families (and the Archivo the captures were set in) become the site's family, in the stylesheet and in inline styles alike
SITE_STACK = "'Switzer', 'Mk Arrows'"


def one_type(html):
    # The stack has single quotes. Inside a single-quoted style attribute they would end the attribute early and drop what
    # follows, so there it is written with double quotes (this tag's attribute quote decides, not the declaration).
    def stack_for(m):
        s0 = m.string
        tag = s0[s0.rfind('<', 0, m.start()):m.start()]
        return SITE_STACK.replace("'", '"') if re.search(r"\bstyle='[^']*$", tag) else SITE_STACK
    html = re.sub(r'(font(?:-family)?\s*:[^;{}<>]*?)([\'"]?)' + DROP_FAMILIES.pattern + r'\2', lambda m: m.group(1) + stack_for(m), html)
    # SVG text names its family in an attribute
    return re.sub(r'(font-family="[^"]*?)([\'"]?)' + DROP_FAMILIES.pattern + r'\2', lambda m: m.group(1) + SITE_STACK, html)


css = one_type(css)
css += '\n/* Stageshow demo placeholders (ss_mount) */\n' + '\n'.join(SS_RULES) + '\n'
# the LinkAja chats play their conversation once and hold it, so there is time to read it, instead of clearing it every 14s;
# linkaja-intent-routing.html starts them when the phones come into view (without JavaScript they play on load and hold)
assert css.count('91% { opacity: 1; transform: none; }\n  96%, 100% { opacity: 0; transform: none; }') == 11
css = css.replace('91% { opacity: 1; transform: none; }\n  96%, 100% { opacity: 0; transform: none; }', '91%, 100% { opacity: 1; transform: none; }')
assert css.count('infinite normal both running chat-') == 13
css = css.replace('infinite normal both running chat-', '1 normal both running chat-')
for _ in range(3):   # a declaration can name more than one of them
    more_html, case_html, top_html, hero_html = one_type(more_html), one_type(case_html), one_type(top_html), one_type(hero_html)

tpl = open(os.path.join(HERE, 'hifi_shell.html'), encoding='utf-8').read()
tpl = rem(tpl)
assert not UNSAID, 'labels with no sentence-case form in SAY: %r' % sorted(set(UNSAID))
for piece in (more_html, case_html):
    assert 'mk-eyebrow' not in piece and 'mk-stagehead' not in piece, 'an old drawer title is left'


def fixes(html):
    # decorative drawings are hidden from assistive tech unless they carry a name of their own
    def hide(m):
        tag = m.group(0)
        return tag if re.search(r'\b(aria-hidden|aria-label|aria-labelledby|role)=', tag) else tag[:-1] + ' aria-hidden="true">'
    return re.sub(r'<svg\b[^>]*>', hide, html)


out = (tpl.replace('/*__FONTS__*/', FONTS).replace('/*__SITE_CSS__*/', css)
          .replace('<!--__TOPBAR__-->', top_html)
          .replace('<!--__HERO__-->', hero_html)
          .replace('<!--__INDEX__-->', index_html + clients_html)
          .replace('<!--__CASE__-->', case_html)
          .replace('<!--__MORE__-->', more_html)
          .replace('/*STACK*/', STACK_JS))
out = fixes(out)
open(os.path.join(S, 'portfolio-hifi.html'), 'w', encoding='utf-8').write(theme.apply(portable(out)))

# ---------- one piece on its own, for polishing it in isolation: COMPONENT=<file in design/sections, no extension> ----------
COMPONENT = os.environ.get('COMPONENT')
if COMPONENT:
    piece = open(os.path.join(HERE, '..', 'sections', COMPONENT + '.html'), encoding='utf-8').read()
    body = ('<section class="mk-case" id="preview"><div data-r="wrap" style="max-width:1216px;margin:0 auto;padding:64px 40px 72px">'
            + piece + '</div></section>')
    name = ' '.join(w.capitalize() for w in COMPONENT.split('-'))
    page = (tpl.replace('<title>Portfolio Hi-Fi</title>', '<meta charset="utf-8">\n<title>%s</title>' % name)
               .replace('/*__FONTS__*/', FONTS).replace('/*__SITE_CSS__*/', css)
               .replace('<!--__TOPBAR__-->', '').replace('<!--__HERO__-->', '').replace('<!--__INDEX__-->', '')
               .replace('<!--__CASE__-->', '').replace('<!--__MORE__-->', body).replace('/*STACK*/', STACK_JS))
    open(os.path.join(S, 'component-%s.html' % COMPONENT), 'w', encoding='utf-8').write(theme.apply(portable(page)))
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
    page = (tpl.replace('<title>Portfolio Hi-Fi</title>', '<meta charset="utf-8">\n<title>%s Section</title>' % sec['n'].split('/')[-1].strip().title().replace('&Amp;', '&amp;'))
               .replace('/*__FONTS__*/', FONTS).replace('/*__SITE_CSS__*/', css)
               .replace('<!--__TOPBAR__-->', '').replace('<!--__HERO__-->', '').replace('<!--__INDEX__-->', '')
               .replace('<!--__CASE__-->', '').replace('<!--__MORE__-->', one).replace('/*STACK*/', STACK_JS))
    open(os.path.join(S, 'section-%s.html' % SECTION), 'w', encoding='utf-8').write(theme.apply(portable(page)))
    print('section', SECTION, len(page), 'bytes')
print('bytes', len(out), 'read times', re.findall(r'(\d+) min read', out))
