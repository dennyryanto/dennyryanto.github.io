"""The site's colour theme, applied to the finished page by build_hifi.py and build_site.py.

The page and its sections are written in the original warm theme (near-black #161511, cream ink, lime accent);
this maps those theme colours onto the Blumine palette. Product screens (phones, the Dash and Lumio apps, the
Garmin renders), the amber "needs attention" colour and the Claude crab's orange are not in the map, so they keep
their own colours.

Blumine: 50 #f4f8fb · 100 #e7f0f7 · 200 #cae0ed · 300 #9bc7de · 400 #66aaca · 500 #428fb5 · 600 #317398
         700 #285b79 · 800 #254f67 · 900 #234357 · 950 #182b39
"""
import re

ACCENT = 'oklch(0.806 0.057 231.1)'        # 300 #9bc7de: outcomes and decisions (was lime)
ACCENT_LIGHT = 'oklch(0.894 0.03 233.6)'   # 200 #cae0ed: the bright core of sparks (was a lighter lime)

RULES = [
    # accent: every lime, keeping any "/ alpha" that follows
    (re.compile(r'oklch\(0\.93 0\.2 122'), ACCENT_LIGHT[:-1]),
    (re.compile(r'oklch\(0\.9 0\.2 122'), ACCENT[:-1]),
    (re.compile(r'#c8f23c|#c8f135', re.I), '#9bc7de'),
    # text set on the accent (was a dark olive on lime)
    (re.compile(r'rgb\(24, ?32, ?3\)'), 'rgb(24, 43, 57)'),
    (re.compile(r'#182003', re.I), '#182b39'),
    # ink: cream becomes 50, alphas kept
    (re.compile(r'(rgba?\(\s*)242,\s*239,\s*232\b'), r'\g<1>244, 248, 251'),
    (re.compile(r'#f2efe8', re.I), '#f4f8fb'),
    # page and card backgrounds
    (re.compile(r'#161511', re.I), '#182b39'),
    (re.compile(r'(rgba?\(\s*)22,\s*21,\s*17\b'), r'\g<1>24, 43, 57'),   # incl. the sticky top bar's tint
    (re.compile(r'rgb\(16, ?15, ?9\)'), 'rgb(20, 35, 47)'),
    (re.compile(r'#16150f', re.I), '#14232f'),
    # diagram tokens (design/sections/VIZ-STYLE.md)
    (re.compile(r'#1a1b1f', re.I), '#1c3545'),   # panel: between 950 and 900
    (re.compile(r'#232429', re.I), '#234357'),   # node: 900
    (re.compile(r'#2b2c32', re.I), '#254f67'),   # tile: 800
    (re.compile(r'#f2f2f4', re.I), '#f4f8fb'),   # ink: 50
    (re.compile(r'#c2c3cb', re.I), '#cae0ed'),   # ink-2: 200
    (re.compile(r'#8b8d98', re.I), '#8ea6b5'),   # ink-3: 200 toward 950
    (re.compile(r'#4a4d57', re.I), '#3a6a87'),   # edge: between 600 and 700
    (re.compile(r'#6b6e78', re.I), '#285b79'),   # grey mark (context bars): 700, so the 300 outcome stands out
    # the generative stacks' line colours
    (re.compile(r'#d1cec8', re.I), '#cae0ed'),
    (re.compile(r'#797772', re.I), '#5f8299'),
]


def apply(text):
    for pat, rep in RULES:
        text = pat.sub(rep, text)
    return text
