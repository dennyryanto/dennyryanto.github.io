import json, re, sys, base64, gzip, os
src, out = sys.argv[1], sys.argv[2]
html = open(src, encoding='utf-8').read()
def block(t):
    m = re.search(r'<script type="__bundler/%s">\s*(.*?)\s*</script>' % re.escape(t), html, re.S)
    return m.group(1)
manifest = json.loads(block('manifest'))
template = json.loads(block('template'))
ext = json.loads(block('ext_resources'))
open(os.path.join(out,'template.html'),'w').write(template)
rows=[]
for u,e in manifest.items():
    data = base64.b64decode(e['data'])
    if e.get('compressed'): data = gzip.decompress(data)
    ext_ = e['mime'].split('/')[-1].split('+')[0].replace('javascript','js')
    p = os.path.join(out,'assets',f'{u}.{ext_}')
    os.makedirs(os.path.dirname(p),exist_ok=True)
    open(p,'wb').write(data)
    rows.append((len(data), e['mime'], u, template.count(u)))
for r in sorted(rows, reverse=True): print(*r)
print(json.dumps(ext))
