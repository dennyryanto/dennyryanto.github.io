"""The site's colour theme, applied to the finished page by build_hifi.py and build_site.py.

The sources are written in the original theme: warm near-black #161511, cream ink and a lime accent that marks
outcomes and decisions only. This file swaps the accent when it changes; the neutrals, the amber "needs attention"
colour, product screens and the Claude crab's orange stay as they are. With no rules, the page is the original.
"""
import re

RULES = [
    # accent swaps go here, e.g. (re.compile(r'oklch\(0\.9 0\.2 122'), 'oklch(...'), keeping any "/ alpha" after it
]


def apply(text):
    for pat, rep in RULES:
        text = pat.sub(rep, text)
    return text
