# dennyryanto.github.io

Denny Ryanto's portfolio, served by GitHub Pages from `index.html` and `assets/`.
Both are **generated**: don't edit them by hand. Change the content or layout in
`design/tools/build_hifi.py` and `design/tools/hifi_shell.html`, or the
signature visuals in `design/generative/stack.js`, then rebuild with
`build_hifi.py` and `build_site.py` (steps in the technical notes of
`design/AUDIT.md`). The old single-file bundle the content was taken from is kept
at `design/source/legacy-index.html`.

Colours: sources use the lime accent; `design/tools/theme.py` swaps it for the
site's current accent when both build scripts write their output. Change the
accent there, not in the sources.

Link previews (LinkedIn, Slack, X) use `assets/og-image.png`, rendered from the built
page by `node design/tools/og_image.js`; re-run it after `build_site.py` when the
headline or the key numbers change.

## Design decisions

Before any design or layout work, read `design/AUDIT.md`. It holds the design
audit findings, the agreed "section hero + expand to reveal" pattern, decisions
already made in review (toggle style, kept gold-seal animation, Background
expanded by default), open questions, and how the real site was built.

Mockups live in `design/mockups/`; tooling to unpack the old bundle, grab its
sections and rebuild the hi-fi and the site lives in `design/tools/`.
