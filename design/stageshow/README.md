# Stageshow demos

Product mock-ups from the portfolio, redrawn with the [Stageshow](https://benji.org/stageshow) kit (MIT, by Benji Taylor) as looping
React demos. Four are live on the site (a fifth, the LinkAja home, is now a before/after built from posters) (see `design/AUDIT.md`, "Stageshow demos in the site"); the rest were dropped or are on hold.

```
kit/                  the Stageshow kit, vendored from the skill (kit/LICENSE)
components/<id>/      one folder per demo: index.tsx (default export + meta), a stylesheet, REHEARSAL.md
components/plan.ts    the list of mock-ups and the Meta type
site/main.tsx         the entry the site bundle is built from; maps each placeholder id to its component
site/posters/         the finished frame of each demo, WebP, shown until the demo loads and without JavaScript
vite.site.config.ts   the site bundle (one module, one stylesheet)
review/, build_review.py   the review page, design/mockups/stageshow-components.html
harness/              a direct route for filming one component (?capture=<id>)
BRIEF.md              the brief the agents followed
```

```bash
cd design/stageshow
npm install --ignore-scripts
python3 build_posters.py   # when a demo's finished frame changed
python3 build_review.py    # the review page
```

The site build (`design/tools/build_hifi.py` and `build_site.py`) reads each demo's `meta` and posters, builds the bundle and copies it
to `assets/stageshow/`. See the AUDIT section for how it loads.

To work on a demo, install the skill into `.claude/skills/stageshow` (it is committed; run `npm install --ignore-scripts` there for
its film tools) and film it through the harness (`node scripts/film.mjs "<harness url>/?capture=<id>" --gate`). The skill's
`references/` hold the rules each film line enforces. Rules from `design/AUDIT.md` carry over: lime marks outcomes only, product colours
stay inside screens, nothing under 11px.
