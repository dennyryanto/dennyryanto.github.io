"""The site's colour theme, applied to the finished page by build_hifi.py and build_site.py.

The sources are written in the original theme: warm near-black #161511, cream ink and a lime accent that marks
outcomes and decisions only. This file swaps the accent (now aqua, below); the neutrals, the amber "needs attention"
colour, product screens and the Claude crab's orange stay as they are.
"""
import re

# the accent: aqua, oklch(0.86 0.12 200) = #5ce9f0. Every lime the sources use (oklch(L C 122), with any "/ alpha"
# after it, including the lighter glow and darker shades) moves to hue 200 at the same relative lightness and chroma.
def _aqua(m):
    L, C = float(m.group(1)), float(m.group(2))
    return 'oklch(%s %s 200' % (round(L - 0.04, 3), round(C * 0.6, 3))


RULES = [
    (re.compile(r'oklch\(([\d.]+) ([\d.]+) 122\b'), _aqua),
    (re.compile(r'#c8f23c|#c8f135', re.I), '#5ce9f0'),       # the stacks' and the favicon's lime
    (re.compile(r'rgb\(24, ?32, ?3\)'), 'rgb(0, 27, 31)'),  # text set on the accent (was a dark olive)
    (re.compile(r'#182003', re.I), '#001b1f'),
]


def apply(text):
    for pat, rep in RULES:
        text = pat.sub(rep, text)
    return text
