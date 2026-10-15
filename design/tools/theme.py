"""The site's colour theme, applied to the finished page by build_hifi.py and build_site.py.

The page and its sections are written in the original warm theme (near-black #161511, cream ink, lime accent);
this maps those neutrals onto the Marshland palette and keeps the lime accent, which marks outcomes and
decisions only. Product screens (phones, the Dash and Lumio apps, the Garmin renders), the amber "needs
attention" colour and the Claude crab's orange are not in the map, so they keep their own colours.

Marshland: 50 #fafafa · 100 #f4f5f5 · 200 #e3e8e7 · 300 #d3d9d8 · 400 #9eadaa · 500 #6e7d7a · 600 #4f5e5b
           700 #3d4846 · 800 #262b2a · 900 #171c1b · 950 #080c0b
"""
import re

RULES = [
    # ink: cream becomes 50, alphas kept
    (re.compile(r'(rgba?\(\s*)242,\s*239,\s*232\b'), r'\g<1>250, 250, 250'),
    (re.compile(r'#f2efe8', re.I), '#fafafa'),
    # page and card backgrounds: the page stays as dark as before (900), cards sit a step darker
    (re.compile(r'#161511', re.I), '#171c1b'),
    (re.compile(r'(rgba?\(\s*)22,\s*21,\s*17\b'), r'\g<1>23, 28, 27'),   # incl. the sticky top bar's tint
    (re.compile(r'rgb\(16, ?15, ?9\)'), 'rgb(16, 21, 20)'),
    (re.compile(r'#16150f', re.I), '#080c0b'),
    # diagram tokens (design/sections/VIZ-STYLE.md)
    (re.compile(r'#1a1b1f', re.I), '#1e2322'),   # panel: between 900 and 800
    (re.compile(r'#232429', re.I), '#262b2a'),   # node: 800
    (re.compile(r'#2b2c32', re.I), '#2d3432'),   # tile: 800 toward 700
    (re.compile(r'#f2f2f4', re.I), '#fafafa'),   # ink: 50
    (re.compile(r'#c2c3cb', re.I), '#d3d9d8'),   # ink-2: 300
    (re.compile(r'#8b8d98', re.I), '#8b9a97'),   # ink-3: 400 toward 500
    (re.compile(r'#4a4d57', re.I), '#4f5e5b'),   # edge: 600
    (re.compile(r'#6b6e78', re.I), '#6e7d7a'),   # grey mark (context bars): 500
    # the generative stacks' line colours
    (re.compile(r'#d1cec8', re.I), '#d3d9d8'),
    (re.compile(r'#797772', re.I), '#6e7d7a'),
]


def apply(text):
    for pat, rep in RULES:
        text = pat.sub(rep, text)
    return text
