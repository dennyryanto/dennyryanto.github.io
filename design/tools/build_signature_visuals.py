"""Build the signature-visual language board from captured crops."""
import base64, io, sys, os
from PIL import Image

S = sys.argv[1]
SV = os.path.join(S, 'sv')
A = os.path.join(S, 'unpacked', 'assets')


def uri(path, maxw=None, maxh=None, q=80, crop=None):
    im = Image.open(path).convert('RGB')
    if crop:
        im = im.crop(crop)
    if maxw and im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    if maxh and im.height > maxh:
        im = im.resize((round(im.width * maxh / im.height), maxh), Image.LANCZOS)
    b = io.BytesIO()
    im.save(b, 'WEBP', quality=q, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(b.getvalue()).decode(), im.width / im.height


sv = lambda n: os.path.join(SV, n)
img = {}
img['cur_linkaja'] = uri(sv('linkaja.png'), 1400)
img['cur_komunal'] = uri(sv('komunal.png'), 760)
img['cur_dash'] = uri(sv('dash.png'), 1000)
img['cur_chrona'] = uri(sv('chrona.png'), maxh=900)
img['cur_eink'] = uri(sv('eink.png'), 1100)
img['cur_garmin'] = uri(sv('garminClose.png'), 1300)
img['pay1'] = uri(sv('pay1.png'), 380)
img['pay2'] = uri(sv('pay2.png'), 380)
img['depoA'] = uri(sv('depoA.png'), 380)
img['depoB'] = uri(sv('depoB.png'), 380)
img['dash'] = uri(sv('dashScreen.png'), 1100)
img['captain'] = uri(sv('captain.png'), 900)
img['backoffice'] = uri(sv('backoffice.png'), 900)
img['chrona'] = uri(sv('chronaScreen.png'), 460)
img['desk'] = uri(sv('desk.png'), 1300)
img['eink1'] = uri(sv('einkFace1.png'), 1000)
img['eink2'] = uri(sv('einkFace2.png'), 1000, crop=(12, 0, 810, 494))
img['gx1'] = uri(os.path.join(A, '6375b3f1-1be7-411e-8a37-b2a0e05d0d04.webp'), 420)
img['gx2'] = uri(os.path.join(A, '7a2ff901-e4de-4c5b-aab2-c0607b34f7c0.webp'), 420)
img['gx3'] = uri(os.path.join(A, '1d24e0f1-6589-472c-a954-da676305d07f.webp'), 420)
# the OPEX chart, cropped to the plot (drops the card's header line)
img['opex'] = uri(sv('linkaja.png'), 1400, crop=(0, 90, 2432, 744))


# ---- Komunal funnel, redrawn in the LinkAja chart grammar ----
def funnel_svg():
    vals = [100, 84, 71, 61, 55]
    labels = ['OPEN APP', 'REGISTER', 'VERIFY KYC', 'FUND', 'COMPLETE']
    base, top, bw, gap, x0 = 232, 40, 74, 44, 46
    out = ['<svg viewBox="0 0 1000 280" role="img" aria-label="Deposit funnel, redrawn: 100, 84, 71, 61 and 55 percent of users at each step, with plus 12 points completion after the revamp" style="display:block;width:100%;height:auto">',
           '<g font-family="IBM Plex Mono, monospace">',
           '<line x1="30" y1="%d" x2="720" y2="%d" stroke="rgba(242,239,232,.18)" stroke-width="1.5"/>' % (base, base)]
    for i in range(0, 101, 25):
        y = base - (base - top) * i / 100
        out.append('<line x1="22" y1="%.1f" x2="30" y2="%.1f" stroke="rgba(242,239,232,.25)"/>' % (y, y))
    for i, v in enumerate(vals):
        x = x0 + i * (bw + gap)
        h = (base - top) * v / 100
        y = base - h
        last = i == len(vals) - 1
        if last:
            front, topc, side = 'oklch(0.9 0.2 122)', 'oklch(0.97 0.13 122)', 'oklch(0.6 0.15 122)'
        else:
            k = 0.12 + i * 0.03
            front, topc, side = 'rgba(242,239,232,%.2f)' % k, 'rgba(242,239,232,%.2f)' % (k + .14), 'rgba(242,239,232,%.2f)' % (k * .55)
        d = 10
        out.append('<polygon points="%d,%.1f %d,%.1f %d,%d %d,%d" fill="%s"/>' % (x + bw, y, x + bw + d, y - 7, x + bw + d, base - 7, x + bw, base, side))
        out.append('<polygon points="%d,%.1f %d,%.1f %d,%.1f %d,%.1f" fill="%s"/>' % (x, y, x + d, y - 7, x + bw + d, y - 7, x + bw, y, topc))
        out.append('<rect x="%d" y="%.1f" width="%d" height="%.1f" fill="%s"/>' % (x, y, bw, h, front))
        out.append('<text x="%d" y="%.1f" font-size="15" font-weight="600" fill="%s">%d%%</text>' % (x, y - 16, 'oklch(0.9 0.2 122)' if last else 'rgba(242,239,232,.75)', v))
        out.append('<text x="%d" y="%d" font-size="11.5" fill="rgba(242,239,232,.45)">%s</text>' % (x, base + 22, labels[i]))
    out += ['<line x1="752" y1="30" x2="752" y2="232" stroke="rgba(242,239,232,.14)"/>',
            '<text x="784" y="120" font-size="56" font-weight="800" font-family="Archivo, sans-serif" fill="oklch(0.9 0.2 122)" letter-spacing="-2">+12 pts</text>',
            '<text x="786" y="152" font-size="13" font-weight="600" fill="rgba(242,239,232,.7)">DEPOSIT FUNNEL COMPLETION</text>',
            '<text x="786" y="174" font-size="12" fill="rgba(242,239,232,.45)">55% END TO END AFTER</text>',
            '<text x="786" y="192" font-size="12" fill="rgba(242,239,232,.45)">THE UX REVAMP</text>',
            '</g></svg>']
    return ''.join(out)


FUNNEL = funnel_svg()

# ---- heroes: current crop + panes (front first). A = glass camera, B = flat row ----
# A: l/t = position in % of the 21:9 stage, h = height in % of stage; back = set back and turned
HEROES = [
    dict(n='01', co='LinkAja', what='OPEX chart in front, MyPaylater screens behind', cur='cur_linkaja', curfit='contain', panes=[
        dict(k='opex', A=dict(l=4, t=24, h=46), B=dict(h=42)),
        dict(k='pay1', A=dict(l=56, t=12, h=78, back=1), B=dict(h=74)),
        dict(k='pay2', A=dict(l=68, t=12, h=78, back=2), B=dict(h=74)),
    ]),
    dict(n='02', co='Komunal', what='Funnel redrawn in the chart grammar, Deposito screens behind', cur='cur_komunal', curfit='contain', panes=[
        dict(svg=FUNNEL, ar=1000 / 280, A=dict(l=4, t=24, h=44), B=dict(h=40)),
        dict(k='depoA', A=dict(l=56, t=12, h=78, back=1), B=dict(h=74)),
        dict(k='depoB', A=dict(l=68, t=12, h=78, back=2), B=dict(h=74)),
    ]),
    dict(n='03', co='Dash · Lumio', what='Ordering iPad screen in front, Captain and back office behind', cur='cur_dash', curfit='contain', panes=[
        dict(k='dash', A=dict(l=5, t=10, h=80), B=dict(h=58)),
        dict(k='captain', A=dict(l=44, t=15, h=68, back=1), B=dict(h=44)),
        dict(k='backoffice', A=dict(l=58, t=19, h=60, back=2), B=dict(h=38)),
    ]),
    dict(n='04', co='Independent', what='Chrona in front, the decision desk behind', cur='cur_chrona', curfit='contain', panes=[
        dict(k='chrona', A=dict(l=7, t=6, h=88), B=dict(h=86)),
        dict(k='desk', A=dict(l=20, t=24, h=50, back=1), B=dict(h=34)),
    ]),
    dict(n='Lab', co='E-ink panel', what='The panel face as a pane, the second face behind; the photo moves to the drawer', cur='cur_eink', curfit='cover', panes=[
        dict(k='eink1', A=dict(l=5, t=12, h=76), B=dict(h=66)),
        dict(k='eink2', A=dict(l=46, t=18, h=64, back=1), B=dict(h=56)),
    ]),
    dict(n='Lab', co='Garmin cockpit', what='The reference: three cockpit screens in the same camera', cur='cur_garmin', curfit='contain', panes=[
        dict(k='gx1', A=dict(l=12, t=5, h=90), B=dict(h=86)),
        dict(k='gx2', A=dict(l=34, t=5, h=90, back=1), B=dict(h=86)),
        dict(k='gx3', A=dict(l=54, t=5, h=90, back=2), B=dict(h=86)),
    ]),
]


def pane_html(p):
    if 'svg' in p:
        inner, ar = '<div class="chart">' + p['svg'] + '</div>', p['ar']
    else:
        src, ar = img[p['k']]
        inner = '<img src="%s" alt="">' % src
    a = p['A']
    cls = 'pane back b%d' % a['back'] if a.get('back') else 'pane front'
    return ('<div class="%s" style="--ar:%.4f;--l:%s%%;--t:%s%%;--h:%s%%;--hb:%s%%">%s</div>'
            % (cls, ar, a['l'], a['t'], a['h'], p['B']['h'], inner))


tiles = []
for h in HEROES:
    cur, _ = img[h['cur']]
    tiles.append(
        '<figure class="hero">'
        '<div class="stage">'
        '<img class="cur fit-%s" src="%s" alt="Current %s signature visual">' % (h['curfit'], cur, h['co']) +
        '<div class="panes">' + ''.join(pane_html(p) for p in h['panes']) + '</div>'
        '</div>'
        '<figcaption><span class="num">%s</span><strong>%s</strong><span class="what">%s</span></figcaption>' % (h['n'], h['co'], h['what']) +
        '</figure>')

INVENTORY = [
    ('LinkAja', 'cur_linkaja', 'contain', [('Stage', 'Ink card'), ('View', 'Flat chart'), ('Accent', 'Lime'), ('Frame', 'Bordered card')]),
    ('Komunal', 'cur_komunal', 'contain', [('Stage', 'Navy card'), ('View', 'Flat chart'), ('Accent', 'Blue'), ('Frame', 'Bordered card')]),
    ('Dash · Lumio', 'cur_dash', 'contain', [('Stage', 'Black'), ('View', 'Flat device'), ('Accent', 'Yellow'), ('Frame', 'iPad bezel')]),
    ('Independent', 'cur_chrona', 'contain', [('Stage', 'White'), ('View', 'Flat device'), ('Accent', 'Coral'), ('Frame', 'iPhone bezel')]),
    ('E-ink panel', 'cur_eink', 'cover', [('Stage', 'Lifestyle photo'), ('View', 'Photograph'), ('Accent', 'Warm wood'), ('Frame', 'None')]),
    ('Garmin cockpit', 'cur_garmin', 'contain', [('Stage', 'Blue glass'), ('View', '3D perspective'), ('Accent', 'Blue pointer'), ('Frame', 'Glass slab')]),
]
inv = ''.join(
    '<div class="inv"><div class="inv-img"><img class="fit-%s" src="%s" alt="Current %s visual"></div><div class="inv-body"><strong>%s</strong><dl>%s</dl></div></div>'
    % (fit, img[k][0], co, co, ''.join('<dt>%s</dt><dd>%s</dd>' % (a, b) for a, b in rows))
    for co, k, fit, rows in INVENTORY)

tpl = open(os.path.join(S, 'sv_shell.html'), encoding='utf-8').read()
html = (tpl.replace('<!--INVENTORY-->', inv)
           .replace('<!--HEROES-->', ''.join(tiles))
           .replace('<!--FUNNEL_AFTER-->', FUNNEL)
           .replace('%%KOMUNAL_BEFORE%%', img['cur_komunal'][0])
           .replace('%%OPEX%%', img['cur_linkaja'][0]))
open(os.path.join(S, 'signature-visuals.html'), 'w', encoding='utf-8').write(html)
print('bytes', len(html))
