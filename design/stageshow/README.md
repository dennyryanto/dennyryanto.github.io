# Stageshow component rebuilds

The portfolio's product mockups redrawn with the [Stageshow](https://benji.org/stageshow) kit (MIT, by Benji Taylor), one looping demo at a time.
This folder is a staging area: the finished designs are collected on a review page, and ported into `design/tools/build_hifi.py` and
`design/tools/hifi_shell.html` after approval. The site itself is still generated; nothing here is shipped yet.

```
kit/           the Stageshow kit, vendored from the skill (kit/LICENSE)
components/    one folder per rebuilt component: index.tsx, a stylesheet, REHEARSAL.md
review/        the review page (static HTML, React only draws the stages)
build_review.py  bundles review/ and writes design/mockups/stageshow-components.html
```

Build the review page:

```bash
cd design/stageshow
npm install --ignore-scripts
python3 build_review.py
```

Work on a component with the skill's playground and film tools: install the skill into `.claude/skills/stageshow`
(`npx skills add benjitaylor/skills --skill stageshow`, or clone `benjitaylor/skills`), copy the component folder into its `examples/`, run
`node scripts/film.mjs "<playground>/?capture=<name>" --gate`, and copy it back. The skill's SKILL.md and `references/` hold the rules each film line enforces.

Status is on the review page. Rules from `design/AUDIT.md` carry over: lime marks outcomes only, product colours stay inside screens, nothing under 11px.
