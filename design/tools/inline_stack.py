"""Refresh the copy of design/generative/stack.js inlined in a page between /*STACK:BEGIN*/ and /*STACK:END*/."""
import os, re, sys

here = os.path.dirname(os.path.abspath(__file__))
js = open(os.path.join(here, '..', 'generative', 'stack.js'), encoding='utf-8').read()
for path in sys.argv[1:]:
    s = open(path, encoding='utf-8').read()
    s, n = re.subn(r'/\*STACK:BEGIN\*/.*?/\*STACK:END\*/', lambda m: '/*STACK:BEGIN*/\n' + js + '\n/*STACK:END*/', s, flags=re.S)
    assert n == 1, path
    open(path, 'w', encoding='utf-8').write(s)
    print(path, len(s))
