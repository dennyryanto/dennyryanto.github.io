# Portfolio design audit and redesign plan

Started 2026-10-09. **Status: built (2026-10-12), not yet pushed.** The
redesign is now the real site: `index.html` plus `assets/`, generated from the
live content (see [The real site](#the-real-site-2026-10-12)). The old bundle
is kept as `design/source/legacy-index.html`, which the grab tools read.

Live mockups (claude.ai artifacts, private to the owner):

- Wireframe: https://claude.ai/artifact/EHgn5hkwDuf3Y3MRPdvVCB
  (local copy: `design/mockups/wireframe.html`)
- Hi-fi, now the whole page with every drawer filled: https://claude.ai/artifact/DtpefKiKyb54R7UGPayvgr
  (no local copy any more: the hi-fi is the same assembly as `index.html`,
  with its images inlined)

The wireframe's local copy is an artifact body without a `<!doctype>`/`<head>`
wrapper. It renders fine in a browser, in quirks mode.

## The problem

The site reads as dense. Every section is shown at full depth, so nothing
stands out and the page is very long.

Measured on the live `index.html` (2026-10-09):

| | Desktop 1440×900 | Mobile 390×844 |
|---|---|---|
| Total length | 22 screens | 40 screens |
| Work starts | screen 2 | screen 3.5 |
| Lab starts | screen 13 | screen 25 |
| Contact starts | screen 21 | screen 39 |
| Text elements under 12px | 309 | 312 |
| Small mono labels | 209 | 209 |

Section heights, in screens (desktop / mobile): Komunal 1.8 / 3.8 · AI practice
2.4 / 5.9 · LinkAja 3.6 / 6.7 · Executive & Board 3.3 / 5.2 · Lab e-ink 2.0 / 3.9
· Lab Garmin cockpit **5.0 / 6.7** · Earlier work + Clients + Career +
Capabilities 1.7 / 3.4 combined.

## Findings

1. **Every case has the same anatomy, all fully expanded**: eyebrow, H2, 3–4
   bullets, a 2×2 stat grid, then 2–6 full visuals. A skimming reader can't
   tell the summary from the detail.
2. **Bullets and stat tiles repeat each other.** For example, Komunal's
   "weeks → days", "1 system", "+12 pts" and "ISO/OJK" each appear as a bullet,
   as a tile, and again in the diagrams.
3. **Headline numbers repeat across the page**: −80% four times (stat band,
   LinkAja H2, chart, ideogram); 70M+ three times; ~200K, 30+ and 150+ two or
   three times each; certifications three times (profile card, AI case,
   capabilities); career history three times (profile card "Before", case
   headers, Career band).
4. **Proportion is off.** The Garmin cockpit, a personal concept, is the longest
   section (5 screens) and outweighs LinkAja, the strongest paid result.
5. **The lime accent and small mono labels are everywhere**, so the accent no
   longer marks anything. Much small text sits at 50–60% opacity, which is hard
   to read on phones.
6. **The order is unclear.** It isn't chronological (Komunal 2024, Independent
   2025–, LinkAja 2021), and the hero's "measured in outcomes" claim leans on
   LinkAja's numbers, which sit third.
7. **Navigation only has Work / Lab / Contact.** There is no way to jump to a
   case, which matters more once cases collapse.
8. **The page ends in four thin bands** (Earlier work, Clients, Career,
   Capabilities), each with its own layout.
9. **"In short" mostly repeats the hero subhead.**
10. Separate issue: `index.html` is a 7.9MB single-file bundle that shows
    "Unpacking…" and needs JavaScript to render anything (slow first paint, poor
    link previews). Collapsing sections doesn't fix this.

## The agreed pattern: section hero + expand to reveal

Each section keeps a **hero** visible and puts the detail in a **drawer**
behind a toggle.

- **Hero layout** (same for every case): label line with company and dates;
  H2 on the left; one line of context and three numbers on the right; one
  signature visual full width underneath.
- **Drawer**: outcome bullets, diagrams, remaining device mockups. It ends with
  a centered "Close" control that collapses the case and returns to its top.
- **Toggle**, as iterated in wireframe comments:
  - no box, border or fill; centered text only
  - label in spaced all-caps (e.g. "READ THE CASE STUDY"), with a small caps
    meta line under it ("4 POINTS · 9 VISUALS")
  - in the hi-fi the label and chevron are **lime** (owner request, to make
    the control more obvious); hover lifts them to off-white; the meta line
    stays grey
  - a plain chevron (not an arrow) that gently bobs on a 1.8s loop; the
    label stays still (the idle pulse was tried and removed at the owner's
    request)
  - on open, the chevron **flips vertically** (scaleY over 0.5s), it does
    not rotate; the label swap is **synced to the flip**: the old label fades
    out while the chevron folds flat, "CLOSE" fades in as it unfolds (pure
    opacity, no movement); the meta line dims over the same 0.5s
  - reduced motion: no bob, instant swaps
- **Deep links**: `#linkaja` (or any case id) opens that case directly.
- **Stat band → case index**: four cells, each a headline number plus "NN
  Company ↓", that scroll to and open their case. On phones it is a 2×2 grid.
- **Profile card**: Experience, Now, Board, Certified. "Before" and "Focus"
  rows are dropped. **Keep the spinning gold seals** on the certificates (owner
  request); the certificates appear only here, not in the AI case or the
  Background chips.
- **"In short"** is folded into the hero subhead (first person).
- **Background section** merges Earlier work, Career and Capabilities. It
  **starts expanded** (owner request). The career timeline is its hero.
- **Clients & brands** (owner request, "don't be modest"): all 12 logos sit in
  an always-visible strip right under the case index, 6 per row on desktop and
  3 on phones, with no borders. They are no longer at the bottom of the page.
- **Type floor (F5)**: nothing smaller than 11px. Number labels under stats
  are sentence case at 13px, not tiny mono caps; mono is kept for dates,
  captions and the toggle. The wireframe meets this (it had 97 text items at
  10–10.5px before).
- **Garmin hero (F4)**: the 3D fan sits in the section hero at a fixed height
  and runs on a timer and clicks (see below). It is built in the wireframe
  as grey cards.

The wireframe's notes layer tags each design note with the finding it answers
(F1–F10) and ends with an "Audit coverage" table showing each finding's status.

Section plan:

| Section | Hero shows | Drawer holds |
|---|---|---|
| LinkAja | 70M+ users, ~72% automated, 4 ships; OPEX chart with the −80% callout | bullets (incl. Customer Champion Award), problem/fix ideogram, support model, intent-routing chat card, MyPaylater ×4 |
| Komunal | +12 pts, weeks → days, 1 system; deposit funnel chart | bullets, tooling migration, design system diagram, deposit volume, Deposito phones |
| Dash · Lumio | 30+ chains, ~200K/mo, 150+ locations; Dash ordering iPad | bullets, Captain app, back office, Lumio locations, Lumio CMS, governance cards |
| Independent / AI | MCP, 0→1, 1:1; Chrona phone | bullets, decision desk, Chrona features, habit loop, engine |
| Lab: e-ink | 24/7, 800×480, $0; nightstand photo | faces, architecture, deployment, shoe tracker |
| Lab: Garmin | the question + the 3D fan (see below) | close-ups, write-up |
| Clients & brands | all 12 logos, always visible, under the case index | (no drawer) |
| Background | career timeline | earlier work, capabilities, education (open by default) |

Estimated length with all sections collapsed: about 9 screens on desktop
(22 today) and about 10 on mobile (40 today).

## Signature visual language (proposal, 2026-10-11)

Board: https://claude.ai/artifact/NHRRxLpkyrSA2HU9GbQwCB
(local copy: `design/mockups/signature-visuals.html`)

The six hero visuals come from six different worlds:

| Hero | Stage | View | Accent | Frame |
|---|---|---|---|---|
| LinkAja OPEX chart | ink card | flat chart | lime | bordered card |
| Komunal funnel | navy card | flat chart | blue | bordered card |
| Dash ordering iPad | black | flat device | yellow | iPad bezel |
| Chrona phone | white | flat device | coral | iPhone bezel |
| E-ink panel | lifestyle photo | photograph | warm wood | none |
| Garmin cockpit | blue glass | 3D perspective | blue pointer | glass slab |

Proposed language, **A · Instrument glass** (recommended), taken from the
cockpit:

1. **One stage**: page ink with the cockpit's radial glow
   (`#1c222c → #12151a → #161511`), no cards or borders.
2. **One material**: bezel-less glass panes, 12–14px radius, 1px cool edge
   `rgba(190,210,235,.22)`, faint top sheen, long soft shadow. No
   phone/iPad/laptop frames.
3. **One camera**: perspective 1400px; front pane −6°; panes behind −24° at
   z −120 / −230px, brightness .8 / .66.
4. **One front pane** carries the story; up to two behind it. Only the front
   pane runs live animation.
5. **Brand inside, system outside**: LinkAja red, Dash yellow and Chrona coral
   stay inside their screens; outside them only ink, warm grey, and lime for
   the outcome.
6. **One chart grammar**: warm grey for steps or "before", lime for the
   outcome only, a graduated baseline, one callout number on the right (like
   LinkAja's −80%). Komunal's blue funnel is redrawn to match on the board.
7. **Screens, not scenes**: no lifestyle photos in heroes. The e-ink face is
   shown as a pane; the nightstand photo moves into the drawer.

Alternative **B · Flat specimen**: same stage, panes and rules, laid flat side
by side with no perspective. Calmer, less character.

Open: A or B; brand color only inside screens; photos out of heroes; still
panes now, timed fans later (still on hold).

Tooling: `design/tools/capture-signature-visuals.js` and
`capture-secondary-screens.js` grab the crops from the live site (serve the
repo on :8765); `build_signature_visuals.py` + `signature_visuals_shell.html`
build the board.

## Illustrated signature visuals (route 2, 2026-10-12)

A second route to a shared visual language: replace the hero screenshots with
illustrated visual analogues made by an image-generation agent. Brief:
`design/prompts/signature-visuals-agent-brief.md`.

Decisions from the interview:
- **Explore three directions first**: metaphor object, environment, and
  sculptural data. The LinkAja test round has 2 variants each, and then the
  chosen direction is rolled out to all six.
- **Style**: technical line art (engineering-plate monoline, unlabelled
  scales and leaders).
- **Colours**: flat site ink `#161511` background; lines `#d1cec8` /
  `#797772` / `#4d4c47`; exactly one lime `#c8f23c` element marking the
  outcome.
- **Exclusions**: no screens, UI, text or numbers, and no people.
- **Format**: 21:9 at 2560×1097, with the key subject inside a central 4:5
  mobile-safe area.
- **Tool-agnostic**, with notes for Midjourney, GPT image and Gemini.
- **The agent proposes the LinkAja metaphors itself.**

**Round 1 result (2026-10-12):** chosen **Direction C · Sculptural data,
variant 2**, a stepped flow-density cascade. Saved as
`design/signature-visuals/sv-linkaja-c-2.jpg`; it is the style master.

Checks on the master:
- **Passes:** the background is flat and matches `#161511` (within JPEG
  noise); lime covers 0.3% of the image; clean 30° isometric view; no text.
- **Fails, fixed in round 2:**
  - It's 1584×672 instead of 2560×1097.
  - The top leader lines come within 5% of the edge instead of 8%. (Leader
    lines were later removed from `sv3d.js` entirely.)
  - The lime sits outside the centred 4:5 area, so the mobile crop is set
    per image instead. The master's crop centre is about 73%.

Round 2 instructions: `design/prompts/signature-visuals-round-2.md`.

**In the hi-fi (2026-10-12):** the master now sits in the LinkAja hero as the
signature visual.
- **Placement and edges:** straight on the page ink with no frame. The
  JPEG's near-black ground is snapped to `#161511` and the edges are
  feathered, so no box shows.
- **Phone crop:** 4:5 at `object-position: 85%`, so the whole lime outflow
  stays in view.
- **Motion:** it wipes in left to right, following the flow, on first view.
- **Moved into the drawer:** the OPEX chart is now the first diagram there.
- **Hero numbers:** now −80% (lime, the outcome), 70M+ and ~72%.
- **Toggle:** updated to the agreed style (no box, caps, chevron bob and
  flip, crossfade, pulse).

`build_hifi.py` expects the master at `<workdir>/sv-master.jpg`.

### Round 2 review (2026-10-12)

All six round 2 images are in `design/signature-visuals/` (`sv-*-c*.jpg`),
each 1584×672.

| Case | Lime | Margins | Phone crop centre | Verdict |
|---|---|---|---|---|
| LinkAja r2 | 0.24% | ✓ | 66% | ✓ new style master |
| Komunal | 0.41% | bottom ~6% | 68% | ✓ |
| Dash · Lumio | 0.70%, a line | ✗ fills the frame | none fits | ✗ re-render |
| Independent | 0.24% | ✓ | 58% | ✓ |
| E-ink | 2.44% | ✓ | 74% | ⚠ lime too heavy |
| Cockpit | 0.03% | ✓ | 62% | ⚠ lime too light |

Target lime weight across the set: about 0.2–0.7% of the image. Round 3 fix
list: `design/prompts/signature-visuals-round-3.md`.

### Fallback: generated visuals (Measured Descent, 2026-10-12)

The owner's rule: if the agent's images are still unsatisfactory, make them
in code. Generator: `design/generative/measured-descent.html`, a p5.js
seeded heightfield drawn as a hidden-line isometric, plus its philosophy
`measured-descent.md`. Published at
https://claude.ai/artifact/GEK7WCrJjzUxNi2b3LN43S.

- **Cases:** Dash · Lumio, E-ink and Cockpit.
- **Output:** native 2560×1097 PNGs with the exact palette.
- **Line weights:** 3px primary, 1.5px secondary, 1.1px hatch.
- **Camera:** a 2:1-style dimetric, close to the masters.
- **Checks:** it measures the lime share and the phone crop centre, and
  reports whether the lime fits one 4:5 window.
- **Renders** (seed 12345) are in `design/signature-visuals/generated/`:

| Case | Lime | Phone crop centre |
|---|---|---|
| Dash · Lumio | 0.18% | 64% |
| E-ink | 0.64% | 67% |
| Cockpit | 0.14% | 62% |

- **Headless rendering:** `node design/generative/render.js <html> <local
  p5.min.js> <outdir> dash:12345 eink:12345 cockpit:12345`.
- **Style difference:** these are cleaner and sparser than the agent's
  drawings. If they replace only some images, the set mixes two levels of
  detail; generating all six would keep it uniform.

### Signature visuals as live code: `sv3d.js` (2026-10-12, current direction)

Owner's call: instead of images (from the agent or the PNG generator), draw
the signature visuals in code on the page, in 3D, turned gently by scroll
with GSAP.

- **Renderer:** `design/generative/sv3d.js`. It is a dependency-free canvas
  renderer, about 45KB raw and **14KB gzipped**. Each scene is a heightfield of
  columns plus a few loose boxes. A real 3D projection with a yaw camera
  draws them back to front by depth, and faces are filled with the page
  ink so hidden lines disappear. It adds hatched shadow faces, grooves that
  flow only downhill, one lime outcome, and unlabelled measurement lines
  (base dimensions and a vertical scale only; leader lines were removed in
  review as purposeless). It uses the exact palette, and line weights scale
  with the canvas width.
- **Each scene carries a piece of its own product** (review comment: the six
  "look all too similar"). The UI is drawn in neutral cream and grey line;
  lime stays the one outcome.
  - `linkaja`: ticket stacks on the intakes; the outflow ends at a standing
    chat screen.
  - `komunal`: a design-system sheet (swatches, buttons, toggle, type, cards)
    lies on the source block.
  - `dash`: round tables with chairs printed on the floor plate (Dash), and
    signage screens on the two tallest stations (Lumio).
  - `independent`: databases among the rough inputs; the lime slot ends at a
    decision card (confidence bar, approve and review buttons).
  - `eink`: the e-ink panel stands on the lime plate, with a 1-bit dashboard.
  - `cockpit`: an instrument face (gauge, scale with pointer, trend line) at
    the end of the ridge.
  - Primitives: `T.panel` (a standing or flat UI plate, depth-sorted with
    the terrain by its nearest edge), `T.decal` (marks printed on a cell top)
    and `T.cyl` (a database cylinder). They share a small op vocabulary:
    rect, circ, line, polyline, arc, radial ticks, scale ticks.
- **Scenes (all six):** `linkaja`, `komunal`, `dash`, `independent`,
  `eink`, `cockpit`.
- **Motion:** `SV3D.mount(canvas, {range: 10})` sets up a ScrollTrigger from
  `top bottom` to `bottom top` with `scrub: 0.6`. The yaw goes 35°→55°
  across the pass. It redraws only on scroll updates.
- **Lime reveal, once** (owner: "only needs to be animated once, not a
  continuous river, like an initial flow"). The first time a drawing is 45%
  in view, the lime fills its groove from source to outcome over 1.8s (the
  e-ink plate sweeps lime; the cockpit pin slides into place). Then the
  output's lime accent fades in over 0.5s and the loop ends for good.
  Reduced motion shows the finished state.
  - **Lime at every output** (owner's ask): LinkAja's chat answer bubble,
    Komunal's deposit-complete check (a new screen at the channel end),
    Dash's order-ticket ready bar (a new ticket at the spine end),
    Independent's approve button, the cockpit's gauge needle and pointer.
    E-ink's output is the lime plate itself. In panel ops, `L` (fill) and
    `Ls` (stroke) mark the accent.
  - How it stays cheap: on each angle change the drawing goes straight to
    the page, and only the box holding the lime and its output is cached
    twice (lit, and dimmed, where the dim copy redraws only cells inside
    that box). A frame copies the dim box, then the lit box through a clip
    that grows along the groove, so occlusion stays right. This adds about
    1ms to a scroll redraw.
- **Alternatives to the terraces** (owner: "still looks too familiar"):
  `design/mockups/signature-alternatives.html`, built from
  `design/generative/sv3d-alternatives.shell.html` with
  `sv3d-alts.js`. It shows LinkAja four ways: the current terrace, plus three
  new forms.
  - **A · Exploded layers** (recommended): the product's UI floats in
    layers (tickets → routing → chat), with a lime thread climbing to the
    answer.
  - **B · Circuit board:** intake chips, traces, and one lime trace into a
    lime connector.
  - **C · Floor plan** (runner-up): intake rooms, a hall of agent desks, and
    a lime route to self-service.
  - New engine pieces for these: `T.layer` (floating slabs with risers),
    thin `channel` traces, `T.noFurniture`, and `SV3D.define`.
  - Awaiting the owner's pick.
- **Loading cost:**
  - The scene initialises only when it comes within 300px of the screen.
  - Density is capped at 2×.
  - Reduced motion draws it once, still.
  - The frame fit is fixed across the whole swing, so the drawing never
    zooms or clips as it turns.
  - Measured at about 6–9ms per scroll redraw on desktop at 2× density
    (about 1ms of that is caching the lime box), and about 4ms on a
    phone-sized screen. An animation frame is two small image copies.
- **Phones:** the whole drawing re-fits a 4:3 canvas; nothing is cropped.
- **Review page:** `design/mockups/signature-visuals-3d.html`
  (https://claude.ai/artifact/6ryNCr4A5hHemwqWdGS4FQ). It is built from
  `design/generative/sv3d-review.shell.html` with `sv3d.js` inlined.
- **Hi-fi:** the LinkAja hero now uses `<canvas data-sv3d="linkaja">`
  instead of the image, so the page dropped from 330KB to 266KB.
  `build_hifi.py` inlines `sv3d.js` from `<workdir>/sv3d.js`.
- **For the live site:** load `sv3d.js` once, after GSAP, and add one canvas
  per hero. The agent's images and the PNG generator remain as references
  only.

### Exploded layers: `stack.js` (2026-10-12, chosen direction, iteration 2)

Owner's pick from the alternatives: A · Exploded layers. The terraces
(`sv3d.js`, the 3D review page) stay as they are.

- **Owner's brief:** no rotation. The build animates from the foundation
  layer to the final layer. Lime marks the decision made on each layer, and
  the decisions render on the final layer.
- **Iteration 1 (dropped):** four layers fanned up to the right, several
  candidates per layer, and dead ends dimmed to olive. Owner: it "keeps
  building to the right"; simplify the approach and the diagram.
- **Iteration 2 (current), simplified:**
  - Three identical slabs, stacked straight up and centred: where it
    started, where it was decided, the product.
  - Low camera (yaw 40°, elevation 26°) and gaps of 2.9 units, so the lower
    layers stay readable without any sideways drift.
  - Each lower layer lights one lime decision among neutral grey content.
    Its thread rises straight up, piercing the layer above with a lime dot.
  - Where it meets the top layer, the decision becomes solid lime UI.
  - No dimming, no hatching, no axis.
- **Renderer:** `design/generative/stack.js`. It is standalone and
  dependency-free (no GSAP), about 22KB raw and 7KB gzipped with all seven scenes.
  - Scenes are data: `w`, `d`, `gap`, `layers` (flat ops, optional blocks)
    and `picks` (`k`, `at`, `h`, `ops` on its own layer, `land` on the top
    layer).
  - Lock flicker (review comment: "flicker effect on locked/finalized
    decisions"). When a decision locks, and when it lands on the top layer,
    the lime strikes like a lamp: eight uneven on/off steps over 0.36s,
    then it holds. The pattern is a fixed table in `stack.js`, so every
    replay matches. Its thread climbs only once the lock holds.
  - Timeline: a layer every 0.95s (rise 0.45s, lock at +0.4s, flicker
    0.36s), threads climb 0.45s, and it is done in about 2.8s. Frames are full redraws (about 4ms
    in the headless test) only while building.
  - Plays once at 45% in view; reduced motion shows the finished stack.
    `mount()` returns `{ replay }`.
- **Built:**
  - LinkAja: tickets → intents → chat. The decisions land as the answer
    bubble and the quick reply.
  - Independent: sources → signals → decision card. The decisions land as
    the confidence bar and the approve button.
- **Platform-shaped stacks** (owner: "represent the work's platform: desktop,
  tablet, mobile"; "the final layer represents the final screen in a simple
  wireframe way"). Every slab takes the device's footprint (`DEVICE` in
  `stack.js`):
  - Mobile (4.6 × 9.4): LinkAja, Komunal (DepositoBPR), Chrona, Cockpit
    (Garmin Connect).
  - Tablet (9.2 × 6.9): Dash ordering.
  - Desktop (10 × 6.25): the decision desk.
  - E-ink panel (10.4 × 6.6): the 800 × 480 screen plus its bezel.

  The top layer gets the device's chrome (`chrome()`: phone notch, status
  marks and home bar; tablet camera; browser bar with three dots and an
  address field; double panel bezel). It shows the final screen as a
  simple wireframe, with image placeholders as crossed boxes (`img` op).
  Mobile stacks use a taller gap (3.4).
- **All six built** (owner: "build the other four cases in this style").
  Each is three layers; the two lower ones each lock one lime decision, and
  both land as lime UI on top:
  - `komunal`: design system (a shared component) → deposit funnel (the
    step that leaked) → deposit screen (lime button and progress).
  - `dash`: restaurant floor (a table) → menu (a dish) → order screen (lime
    send-to-kitchen bar and added item).
  - `eink`: data feeds (HRV) → the 1-bit layout's regions (today's
    suggestion) → Face 1 exactly as `garmin-daily-brief` renders it
    (owner: "doesn't represent how the final e-ink display looks; check the
    other repo"). That means: the inverted header band (date, weather, AQI,
    status chip), four metric cards (label, big number, bar, status), Today's
    suggestion, Recovery rows with pills, and footer stats with the synced
    chip. It is mapped pixel for pixel from the 800×480 renderer
    (`e-ink-display/server/renderer.py`, fixture `normal.json`) inside a
    TRMNL bezel. Lime lands on the HRV "balanced" pill and the suggestion
    title. Then simplified (owner: "the final layer looks too detailed
    compared to the others"): it now keeps only Face 1's skeleton at the
    density of the other final screens. That is the inverted header band
    with its two dividers, four cards (big number block + bar), the
    suggestion title and one line, three recovery lines and the footer
    rule. The `k` style draws ink marks inside the filled band.
  - `cockpit`: terrain (your position) → instruments (the reading that
    matters) → glass display (lime pointer on the strip and lime value).
- **Hi-fi now uses this style:** `design/mockups/hifi-opening-linkaja.html`
  (artifact DtpefKiKyb54R7UGPayvgr) shows the opening, LinkAja in full and
  heroes for the other five.
  - The other five are Komunal, Dash · Lumio (`#board`), Independent
    (`#ai`), the e-ink lab (`#lab`) and the cockpit lab (`#lab-ui`).
  - Each hero has its meta line, headline, sub, three stats, a stack canvas,
    and a toggle with a short "what I did" drawer (full drawers not mocked
    yet). Copy comes from the live site.
  - The toggle/drawer script now works per `.mk-case`, and the case index
    opens the matching section.
  - `build_hifi.py` inlines `stack.js` (the hi-fi no longer loads
    `sv3d.js`; the terraces live on their own review page).
- **Chrona too** (owner: "also tell the Chrona story"): `chrona` is your week
  (one free evening) → your circle's free time (where it overlaps) → the
  drafted plan (lime time and lime send button). In the hi-fi, the
  Independent section shows two stacks side by side (`.mk-sv-pair`, each
  21:18 with a mono caption: "Enterprise AI · data to decision" and
  "Featured · Chrona"); they stack vertically on phones. The sub now names
  both stories.
- **Review page:** `design/mockups/exploded-layers.html`, built from
  `design/generative/stack-review.shell.html` (LinkAja, Independent and
  Chrona).

### Wireframe v2: hi-fi decisions brought back (2026-10-12)

Owner: "get back to the wireframe mockup and implement the changes".

- **Signature visuals.** Every hero placeholder is now the live exploded-layer
  stack (`stack.js`, inlined between `/*STACK:BEGIN*/` and `/*STACK:END*/`;
  refresh with `python3 design/tools/inline_stack.py design/mockups/wireframe.html`).
  - It is drawn in the wireframe's own greys via the new `palette` option
    (paper, ink-2, ink-3). Decisions are solid ink here, lime in the hi-fi.
  - It follows light/dark and redraws on a theme change (`redraw()`).
  - Independent shows the decision-desk and Chrona stacks side by side.
  - New note 11 explains the system.
- **What the stacks displaced moves into the drawers.** The LinkAja OPEX
  chart, the Komunal funnel chart and the e-ink nightstand photo each become
  a drawer visual.
- **Cockpit:** its hero is a stack like every other section. The 3D fan of
  screens moves to the top of its drawer and still autoplays while on screen.
  Note 5 and the F4 audit row are updated. This reverses where the fan
  sat in v1, so it is up for review.
- Page length: about 11.5 window heights collapsed at 1440 × 900.
- **Clean heroes** (owner: "keep the metrics folded inside the case study;
  make the signature section clean with a brief description of what it's
  about"). Each hero is now the headline, one line on what the work is about,
  and the stack. The three key numbers open the drawer as a "Key numbers"
  block, and the toggle meta counts them. This also settles F3's duplicate
  numbers: the case index is the only place a headline number shows before
  a drawer opens.
- **Same changes in the hi-fi** (owner: "apply the same changes to the
  hifi"):
  - The case index drops its logos (LinkAja, DepositoBPR and Dash marks),
    keeping the number, its label and the "01 Linkaja ↓" link line.
  - Every hero is the headline, one line and the stack.
  - The three stats open each drawer under a "Key numbers" eyebrow, and the
    toggle meta counts them.
  - Page size: 266KB → 209KB, since the embedded logo images are gone.
- **Quieter case index with context** (hi-fi; owner: "too conspicuous, trim
  it and add more context"). Changes from the old lime-number band:
  - Numbers drop from 58–84px lime to 30–40px off-white. Lime stays only
    on the case number ("01").
  - Each cell leads with "01 LinkAja ↓", then the number, what it
    measures, and one sentence of context.
  - A small heading reads "Selected work · four outcomes".
  - Padding is tighter: the band is about 236px tall at 1440px.
  - It is two by two below 1000px.
  - It now uses its own CSS instead of the live site's stat-band rules.
- **Compact split heroes, alternating sides** (hi-fi; owner: "more compact:
  description under the title, diagrams inline, the expand button under the
  description; alternate sides for a more dynamic layout; Independent keeps
  its layout").
  - Each hero is a two-column grid (5 : 7). One column holds the title,
    description and the toggle (left-aligned, chevron beside the label,
    meta under it). The other holds the stack at 5:4.
  - The sides alternate: LinkAja text-left, Komunal right, Dash left,
    e-ink right, cockpit left (`.mk-split` / `.flip`, `split_hero()` in
    `build_hifi.py`).
  - Independent keeps its full-width two-stack layout.
  - A section is about 746px tall at 1440 × 900.
  - Below 900px it stacks as title, description, stack, then toggle.
- **Wireframe synced** (owner: "apply the same changes to the
  wireframe"). It gets the same quieter case index:
  - a "Selected work · four outcomes" heading;
  - each cell reads "01 LinkAja ↓", then the number at 26–34px, its label
    and one line of context;
  - the case numbers re-number with the By impact / By date toggle.

  It also gets the same compact split heroes (`.case-split`, `.flip`):
  - The sides alternate in reading order, recomputed whenever the order
    changes.
  - Independent's two-up hero sits outside the alternation, so the
    sequence matches the hi-fi: L R L (pair) R L.
  - Notes 4 and 7 are updated.
  - Collapsed length is about 11.2 screens at 1440 × 900.
- **Hi-fi: clients strip and the cockpit fan** (owner: "I didn't see the
  clients & brands section in the hi-fi"; "build the Garmin glass cockpit
  fan").
  - Clients & brands sits right under the case index, as in the wireframe.
    It shows the 12 live-site logos with a heading and a one-line sub, on
    borderless tiles, 6/4/3 columns. Every logo is rendered as one light
    mark (`brightness(0) invert(1)`), so dark and light originals read the
    same. Rainbow's logo carries its own background, so it shows as a light
    box.
  - The cockpit drawer opens with "The screens": the fan of the four real
    concept screens (780×1688), stacked in depth.
    - The front screen swipes off and rejoins at the back every 4.5s, only
      while the fan is on screen.
    - It pauses on hover or focus and steps with the lime ticks, arrow keys,
      a swipe or a click.
    - The caption shows "01 / 04", the title and one line.
    - Reduced motion turns autoplay off.
  - Below the fan, "The instrument craft, up close" shows the three
    close-ups with captions. The toggle meta reads "4 screens · 3 close-ups
    · 3 numbers".
  - The assets are grabbed from the live site into `hifi/clients.html` and
    `hifi/labui.html` (data URIs). The page is now about 1MB, mostly those
    screens and logos.
- **Toggle back at the bottom, read time only** (hi-fi; owner: "put this
  back at the bottom of each section; just show the read time").
  - The toggle sits centred under the split hero again; the hero itself is
    one row (text beside the diagram).
  - Its meta line is only the read time, measured on the live site's full
    sections (words at 230 a minute, plus a little per image and diagram):
    LinkAja 3, Komunal 2, Dash · Lumio 4, Independent 2, e-ink 2,
    cockpit 2 min (`READ` in `build_hifi.py`).
- **Opening scrolls you in** (owner: "clicking read doesn't scroll"). Opening
  a drawer glides the toggle up under the top bar, so the drawer fills the
  view; with reduced motion it jumps instead. This applies to the hi-fi and
  the wireframe.
- **Turnable stacks** (owner: "let the user interact with the diagrams,
  limited to a constrained amount of left, right, up, down rotation").
  `stack.js` adds a `turnable()` behaviour to every mounted stack, in the
  hi-fi, the wireframe and the review page:
  - Dragging turns it up to ±18° left/right and tilts it 10° down to 16°
    up, clamped in `Renderer.view()`. Arrow keys do the same when the
    canvas has focus.
  - The stack follows the pointer, not a mirror of it (owner: "don't
    mirror/reverse the user's dragging gesture"): dragging right swings
    the near edge right, dragging down brings it down. Arrow keys match.
  - Letting go eases it back to rest over 0.7s; with reduced motion it
    stays where it was left.
  - The frame is fitted over the whole allowed range, so turning never
    zooms or clips.
  - Touch keeps vertical page scrolling (`touch-action: pan-y`), so on
    phones horizontal drags turn it.
  - The build animation and the turn combine: it can be turned while it
    builds.
  - Options: `turn: { yaw, up, down }`, or `interactive: false` to switch
    it off.
- **One "What I did" list** (owner: "audit the what I did section, it
  seems to have a different approach on the bullets"). LinkAja kept the
  live site's markup: two columns, lime dashes, 15px. The other cases used
  a plain one-column disc list at 16px. Every case now renders through
  `did_html()` in `build_hifi.py` as one `.mk-list`: two columns on wide
  screens and one on phones, at 16px, with grey dash markers. The dashes
  are no longer lime, because lime marks outcomes only. The wireframe
  already used one placeholder for every case.
- **Cockpit drawer balanced** (owner: the fan "veered to the left, left
  heavy"; the close-ups need "more space between the screens, and zoom out
  a bit").
  - The fan's cards used a fixed `left: 14%`, so the group sat 173px from
    the left edge and 461px from the right. `centre()` in the shell now
    lays the fan out at rest, measures it and shifts the cards so the
    whole group is centred. It runs on load and on resize. The
    perspective origin moves with the cards (it stays 60% across the
    front card), so the fan keeps its shape.
  - The three close-ups are capped at 300px wide (280px on phones) and
    centred in their columns, with 56px between them instead of 16px.
  - The wireframe has the same three changes:
    - its fan uses the same `centre()`;
    - the close-up placeholders are portrait, capped at 300px and spaced
      56px apart;
    - every case's "Outcome bullets" placeholder is now a two-column
      "What I did" dash list, like the hi-fi.
- **Key numbers redesigned** (owner: "anemic and left-aligned on desktop;
  center them and come up with another design"). Both mockups now use a
  centred, full-width band with a rule above and below. It has three equal
  columns divided by vertical rules, and each column has:
  - the number, large (hi-fi 44–68px, the lead one lime; wireframe
    36–52px);
  - its label in mono;
  - one line of context (`CONTEXT` in `build_hifi.py`; the third stat
    field in the wireframe).

  The band stacks into rows below 700px.

## The real site (2026-10-12)

The owner asked to "build the real thing" once the wireframe and hi-fi were in
sync. `index.html` is no longer a bundler export. It is a static page
generated from the live site's own content, laid out as the hi-fi.

What it is:

- **Every drawer is filled with the live case content.** The mockups had stub
  drawers. Each drawer now has the key numbers, "What I did", and then the
  live section's own blocks:

  | Case | Live blocks in the drawer |
  |---|---|
  | Komunal | tooling migration, design system, deposit funnel and volume, Deposito phones |
  | Dash · Lumio | the Dash table app, the captain app and back office, the Lumio network and CMS, governance |
  | Independent | the decision desk, Chrona with its habit loop and engine |
  | e-ink lab | the faces, architecture, deployment, shoe tracker |
  | Garmin cockpit | the fan, "The question" write-up, the close-ups and the not-affiliated note |

  - The Dash table app used to bleed past the page edge; inside the drawer it
    sits in the column.
- **The Background section.** The career timeline is the hero, and it starts
  open with:
  - earlier work;
  - capabilities;
  - the degree (the certificates stay in the profile card only).

  "Let's talk" closes the page.
- **Type floor (F5) enforced in the build.** Any inline or stylesheet font
  size under 11px is lifted to 11px (161 elements). Text drawn inside SVG
  diagrams is left alone, since it scales with the drawing. Measured: no
  visible text under 11px outside SVG.
- **No runtime (F10).** Plain HTML and CSS, with images as files in
  `assets/img/` (named by content hash). It uses:
  - GSAP 3.15 from `assets/js/` (the site's own copy, not a CDN);
  - `assets/js/stack.js`.
- **Works without JavaScript.** A `<noscript>` rule shows every drawer open
  and hides the toggles. With JavaScript, closed drawers are made `inert` at
  load (not in the markup), so the content is never unreachable.
- **Lazy images.** Every image except the headshot loads as it nears the view.

Measured against the old bundle:

| | Old `index.html` | New site |
|---|---|---|
| First load | 7.9MB, one file | about 586KB |
| Length, desktop | 22 screens | 9.3 screens, collapsed |
| Length, phone | 40 screens | 12.5 screens, collapsed |

Checked:

- no console errors and no failed requests;
- deep links such as `#lab` open their case;
- the toggles open and scroll;
- no horizontal overflow at 390px or 1440px.

How to rebuild (see the technical notes): grab, then `build_hifi.py`, then
`build_site.py`.

Review round on the full hi-fi (2026-10-12), applied to the site and the
wireframe:

- **Stacks build one at a time, on arrival** (owner: "start playing when the
  user arrives at the section, don't execute the animation simultaneously").
  - A stack starts once 75% of it is on screen, or once it fills 60% of a
    short screen. Before, it started at 45%.
  - A page-wide queue in `stack.js` lets only one stack build at a time.
  - A queued stack the reader has scrolled away from gives up its turn and
    builds when they come back.
  - The Independent pair builds left, then right.
  - The canvas exposes `data-stack-state` (`waiting`, `playing`, `done`) for
    tests.
- **Cockpit close-ups keep the live isometric tiles** (owner: "retain the
  isometric thumbnails just like on the live site"). The drawer uses the live
  `gx-grid` markup and CSS: each screen is tilted as a slab and cropped in a
  4:5 frame. The gaps are 40px, keeping the earlier "more space" request.
- **The fan is zoomed in** (owner: "zoomed in a bit more, it's okay to have
  some bleed at the bottom"). The cards are about 30% larger, up to 330px on
  desktop and 56vw on phones. The stage height is unchanged, so the screens
  run off its bottom edge.
- **Background explains the companies** (owner: Appsindo "is basically a
  software house or an agency; also needs a brief summary about the
  companies"):
  - each timeline entry has one line on what the company is;
  - "Earlier work" opens with a sentence saying Appsindo is a software house
    and that the four projects are client work.
- **The case index heading is gone** (owner: "remove these"). "Selected work
  · four outcomes / Each opens its case study" is removed from the hi-fi, the
  site and the wireframe; the four cells stand alone.
- **The live scroll motion is back** (owner: "the parallax animation is gone
  when scrolling? check on the live site"). The hi-fi had re-implemented only
  part of the live `motion.js`. `liveMotion()` in the shell now ports the rest,
  per drawer once it has opened and settled (and once for the page outside
  the drawers):
  - the desktop parallax: `data-m="parallax"` moves from +24 to −24px with
    scroll, at 1024px and wider;
  - the cockpit close-up slabs drift from 5% to −5% inside their frames;
  - the entrances: `draw` (bars grow, lines draw), `reveal` and `stagger`;
  - the routing bar: scrubbed on desktop, played once on smaller screens.
  Measured: the parallax runs from +24 to −24px and the slab drift crosses 0
  mid-view, both still correct after other drawers above have opened.
- **Who each company is** (owner: "a brief description about the companies
  such as LinkAja, Komunal, Dash and Lumio"). The LinkAja, Komunal and
  Dash · Lumio heroes carry a quieter line under the description, after a
  short rule, saying what the company is. The Board subhead no longer
  repeats it: "I founded and ran a B2B product company for eight years, and
  have sat on its board since 2021." The wireframe shows the same lines.
- **Animation glitches fixed** (owner: "there are some animation glitches
  all over the site, check"). Found by a scripted read of the site at 1440px
  and 390px that records layout shifts, anything kept invisible on screen,
  and anything that fades after it was shown:
  - *The page jumped at load.* Fonts came from Google Fonts with
    `font-display: swap`. About 100ms in, Archivo replaced the fallback,
    the headline gained a line (+86px) and the index rewrapped. The fonts
    are now the live site's own files: inlined in the hi-fi, and in
    `assets/fonts/` on the site with the latin Archivo and Plex Mono
    preloaded.
  - *Too many fonts* (owner: "that's way too much fonts used"). The page
    uses only Archivo (one variable file) and IBM Plex Mono, latin and
    latin-ext subsets: 8 files, 227KB, of which only the 4 latin ones load.
    The live mock-ups' Plus Jakarta Sans, Manrope and Sora are set in
    Archivo, in CSS, inline styles and SVG `font-family` attributes alike.
    Georgia is kept in the Dash restaurant mock-up as the restaurant's own
    serif; it's a system font.
  - *Numbers counted while hidden.* Counts in drawers were measured at load,
    with the drawer shut, so they ran out of sight. They now count when
    their block rises in.
  - *A drawer stayed blank while it opened.* The blocks were hidden at once,
    but their rise-in only started after the 0.55s expansion. They now rise
    in as the drawer grows past them.
  - *Entrances played twice.* The stagger, `ba` and bar animations ran when
    a block rose in, then again when the drawer settled. Each effect now
    has one owner:
    - `entrances()` plays them once: with the block's rise-in in a drawer
      you open, and by scroll position on the page and in Background;
    - `liveMotion()` only builds the continuous effects.
  - *Parallax and slab drift snapped* when they were built. `follow()` now
    glides them to their scroll position over 0.6s.
  - *The opening flashed on phones.* The page paints before the
    end-of-page script runs, so the headline, intro and headshot showed,
    vanished and rose in. An inline script before the page adds
    `mk-pending`, which hides the pieces that rise in (the opening, the case
    headers, the index numbers) until GSAP holds them. A 3s timer releases
    them regardless, and reduced motion never hides them.
- **No key numbers for the cockpit** (owner: "we don't need this"). The
  Garmin concept has no outcomes to count, so its drawer goes straight from
  the screens, the question and the close-ups to "What I did".
- **Clients strip without its subline** (owner: "remove this"). "12 brands,
  from payments and e-commerce to retail and streaming" is gone from the
  hi-fi, the site and the wireframe; the strip has only its label.
- **Bug fixed on the way.** Removing the old flat close-up CSS left an
  unclosed `@media (max-width: 600px) {`, which pulled every rule after it
  into phone-only. It was caught before any publish or site build. All style
  blocks now balance.

## Lighthouse round (2026-10-12)

The owner ran PageSpeed Insights (mobile) on the live site. The same audit was
run locally on the same files, served gzipped like GitHub Pages:

| Mobile | Before | After |
|---|---|---|
| Performance | 62 | 96 |
| Accessibility | 96 | 100 |
| Best practices | 96 | 100 |
| SEO | 100 | 100 |
| FCP / LCP | 2.7s / 3.6s | 1.5s / 2.6s |
| Total blocking time | 830ms | 80ms |
| Speed index | 5.1s | 1.5s |
| Main-thread work | 8.8s | 1.8s |

What fixed it:

- **Shut drawers skip rendering.** Most of the page's 2,793 elements sit in
  closed drawers, yet they were styled and laid out, and ScrollTrigger
  re-measured them (one 763ms task). A drawer that has finished collapsing
  now gets `.mk-shut` (`content-visibility: hidden`). The class ships in the
  markup and comes off the moment the drawer opens. The no-JS rule overrides
  it, so every drawer still shows without JavaScript. The cockpit fan now
  centres itself on `mk-open`, since a shut drawer has no layout to measure.
- **The opening paints at once.** The opening paragraph is the largest
  element on first paint, and holding it back for a rise-in made LCP late.
  The opening no longer animates; the case headers still rise in.
- **No forced `ScrollTrigger.refresh()` at load.** New triggers measure
  themselves when they are created.
- **Contrast.** The meta line under an open toggle no longer dims to .45; it
  read 2.08:1 under the Background toggle.
- **Favicon.** `assets/favicon.svg` has three stacked slabs with the top one
  lime. It also ends the console 404 for `/favicon.ico`.
- **Lighter images.** PNGs (the client logos, a few screens) are re-encoded
  as WebP when that is smaller. The headshot ships at 208px (2x its 104px
  display): 6.9KB instead of 15.9KB.

Not fixable from the repo: GitHub Pages sets `Cache-Control: max-age=600` on
everything, so "use efficient cache lifetimes" stays flagged. File names are
content hashes, so a CDN with long caching could be put in front later.
Minifying `stack.js` would save about 4KB, not worth a build dependency.

## Impeccable audit and polish round (2026-10-27)

An audit of the built site with the Impeccable skill (15/20, no blockers), then a design critique (17/24) and a
polish pass. Tracker: https://claude.ai/artifact/9gDuAXrcAVR92KQuDSsSXu. Preview: Portfolio Hi-Fi v2,
https://claude.ai/artifact/4RueWNnvUFU4onFqKDnCUo. Shipped as PR #37.

**Audit fixes**

- **Stacks: blank until their turn is accepted.** A faint ghost of the finished slabs, and a soft lime glow under each
  stack, were tried and removed (owner: "the build should appear one step at a time, do not show the outlines of upcoming
  build; preserve the original animation sequence"). The build sequence, build-on-arrival and the one-at-a-time queue are
  exactly as before; a stack stays empty until its turn. With JavaScript off the empty canvases are hidden.
- **Footnote contrast** (the Komunal routing note, .45 to .6) and a 3px full-strength ring on the profile card. The card
  always had a ring, on its inner `.ee-in`; the first audit misread it.
- **Landmarks:** `header`, labelled primary nav, `main` around hero to contact, `footer`, a skip link, and real headings
  for "Let's talk" and the drawer titles (`role="heading"`).
- **Touch targets:** the small mono links get 44px hit areas through `::after`; the Close controls are 44px tall.
- **Escape** closes the case study the focus is in and hands focus back to its toggle.
- **Type in rem** for the shell CSS and the page's own inline text (`rem()` in `build_hifi.py`). Product mock-ups and the
  captured site CSS keep px, because they scale as drawings. About 327 px declarations remain.

**Polish**

- **Stacks** are larger (frame padding `[0.03, 0.05]`), bleed 40px toward the page edge, and use brighter secondary lines
  (`line2` #9d9a92) and heavier strokes (`W / 900`). No glow or stage behind them.
- **Toggle:** 15px label, and the meta line says what is inside (`TEASE` in `build_hifi.py`), in the body face.
- **Type:** `--fg-2` .78, `--fg-3` .64; small labels 12px; the drawer's "KEY NUMBERS / WHAT I DID" kickers are
  sentence-case headings (`HEADINGS`); the case header line is the lime number plus the cream name.
- **Drawers:** 64px between blocks. **Clients:** no tile fills, brighter marks, optical size per logo (`LOGO_SCALE`), and the
  logos cascade in once when the strip comes into view: the first row from the right, the second from the left, and so on
  (owner, from a comment on the artifact). Reduced motion and no JavaScript leave them in place.
- **A lead outcome numeral in each hero was tried and reverted** (owner: "put the metrics inside the case study, respect
  AUDIT.md"). Heroes stay clean: headline, one line, the stack. The numbers live in the drawer's Key numbers.

**Lab hero**

- A "Lab" band (`LAB_BAND`) introduces the two personal builds ahead of the e-ink case. Its line is new copy, so check it:
  "Personal builds, made with Claude Code: real software on my own hardware, and a concept for an app I use every day."
- Each lab hero has a spec line (`SPEC`): hardware and design specs only, never outcomes, so the metrics stay inside.
- A faint workbench grid sits behind both lab cases (`.mk-lab`). Their canvases take `data-clear` and draw on a
  transparent ground so the grid shows through.

**Drawer stage (one shared panel)**

- The diagrams already shared one board (`design/sections/VIZ-STYLE.md`). The captured mock-ups and photos now sit on the
  same board, with the same head row (lime title, note on the right): `stage()` and `.mk-board` in `build_hifi.py` and
  the shell. Covered: Dash table app, captain app and back office, Lumio network and CMS, Chrona product, the two e-ink
  faces, the shoe tracker (flush) and the cockpit fan (flush, so it runs off the bottom edge) and close-ups.
- Nothing is boxed twice: the stage replaces the captured frames and captions, and product colours stay inside the screens.

**Background:** the toggle and its Close buttons are gone (owner: "remove this entirely, since it's just a small row").
Earlier work, capabilities and education are simply always open under the timeline; a drawer with no toggle still gets
its scroll motion (`hifi_shell.html`).

**LinkAja home screen (owner comment: "bring in the current LinkAja app screenshot, especially the home screen").** A
"Home screen · as it ships today" block sits after "What I did" in the LinkAja drawer, on the shared board. The image is
the screen cropped from the render on linkaja.id (retrieved 2026-10-27), saved as `design/sections/linkaja-home.webp`;
the store screenshots were promo frames with other logos over the screen, so they were not used. The image is LinkAja's
(c) and the block carries the source line. The caption ("Still the home screen I co-led the redesign of: ...") is new
copy, so check it. To refresh the image, re-crop the screen from the website render and replace the file.

**Still open:** the remaining px font sizes; two console warnings from GSAP ("target not found"); one 815KB image
(confirm it is lazy-loaded); no `robots.txt` or Person structured data.

## Section mockups (2026-10-13)

One section at a time can be polished in isolation:

- `SECTION=<case id> python3 design/tools/build_hifi.py <workdir>` writes
  `<workdir>/section-<id>.html`, containing only that section with its case
  study open.
- The first one is Independent consulting (`SECTION=ai`), published at
  https://claude.ai/artifact/9aoEWd4gAhPedgSMt6ACBE.
- Its enterprise AI "decision desk" now lives in the repo as
  `design/sections/ai-decision-desk.html`, the editable source that
  `build_hifi.py` reads instead of the live-site capture. Chrona still comes
  from the capture.

## Open decisions

- **Cockpit fan placement**: top of the drawer (wireframe v2) or back in the
  hero beside or instead of the stack.

- **Case order**: by impact (LinkAja first; recommended) or by date (newest
  first). The wireframe toolbar switches between them.
- **Default state**: all cases collapsed (current wireframe) or LinkAja open.

## On hold: why, and what unblocks it

The Garmin cockpit's 3D fan (a tilted `preserve-3d` stack of glass screens that
turns and swipes each screen away) is scroll-scrubbed today. That is why it
pins the page for about 3.7 screens (`.gx-track.is-anim` is 100vh + 2.7×100vh).

Agreed direction for Garmin (**option 2**): keep the fan in the hero at a
fixed height of about one screen, driven by a timer and clicks instead of
scroll position. Same 3D look and same screens. In the wireframe (v8) it
advances every 4.5s, pauses on hover or focus, steps with ticks, arrow keys
or a swipe, plays only while on screen, and opens the drawer when the front
screen is clicked.

The owner then asked to apply the fan to **every** section hero instead of
hiding visuals in drawers. Plan for that:

- Each hero gets a fan of 3–5 cards built from that section's visuals.
  Background gets no fan.
- Every card uses one glass frame at about 16:10 so mixed charts, phones and
  laptops stack cleanly.
- It auto-advances every 4–5s; pauses on hover or focus; supports click, arrow
  keys and swipe; shows a caption and ticks; reduced motion means static with
  manual stepping.
- The front card turns nearly flat to stay legible. Only the front card runs
  its live animation.
- Clicking the front card opens the drawer and scrolls to that visual at full
  size. The fan is a preview; the drawer stays the readable version.
- To avoid repetition, the fans zig-zag (alternate tilt and side) and only the
  section in view animates.
- For performance, off-screen fans pause and fans build lazily near the
  viewport.

**Why it's on hold:** to look right next to the cockpit, the other works'
visuals need to reach the same polish first. The owner wants to iterate on
those before continuing. Resume from here.

## Technical notes for whoever picks this up

- **Rebuilding the site.**
  1. Serve the repo: `python3 -m http.server 8765`.
  2. Grab the live sections from `design/source/legacy-index.html`. For a
     fresh work directory, unpack the bundle there first (`unpack.py`), since
     `build_site.py` takes GSAP from `<workdir>/unpacked/assets/`. Then run:
     - `grab-sections.js`
     - `grab-clients-cockpit.js`
     - `grab-site.js <workdir>`
  3. `python3 design/tools/build_hifi.py <workdir>` assembles the page; it
     writes `<workdir>/portfolio-hifi.html`, the hi-fi artifact.
  4. `python3 design/tools/build_site.py <workdir> .` writes `index.html` and
     `assets/`.

  `build_hifi.py` reads `stack.js` and `hifi_shell.html` from the repo; only
  the captures come from the work directory. Copy or edit content in the
  captures or in `build_hifi.py`, never in `index.html`, which is generated.
- `design/source/legacy-index.html` (the old site) is a bundler export: a JSON `__bundler/template` plus a
  `__bundler/manifest` of gzip+base64 assets keyed by UUID, unpacked at runtime
  by a dc-runtime (React). Motion uses GSAP 3.15 + ScrollTrigger (bundled) and
  `motion.js` (`data-m="count|reveal|stagger|ba|bar|scrub|parallax|draw"`).
- `design/tools/unpack.py <index.html> <outdir>` extracts `template.html` and
  every asset.
- To capture rendered sections with images inlined: serve the repo
  (`python3 -m http.server 8765`), then run
  `node design/tools/grab-sections.js <outdir>`. It runs with reduced motion so
  no GSAP from-states leak into the markup. It picks sections by child index of
  `[data-r="page"]`; update the indices if sections move.
- `design/tools/build_hifi.py <workdir>` builds the hi-fi mockup from those
  captures, using `hifi_shell.html`. It expects `<workdir>/hifi/*.html` and
  `<workdir>/unpacked/assets/`.
- `design/tools/measure-sections.js` prints per-section heights in screens.
- Gotchas found while building the mockups:
  - `position: sticky` (the cockpit stage) breaks inside an `overflow: hidden`
    drawer. Unclip the drawer once its open transition ends.
  - Call `ScrollTrigger.refresh()` after a drawer opens. For reveals inside a
    drawer, prefer IntersectionObserver, because ScrollTrigger's cached
    positions go stale while the drawer height animates.
  - The chart bars already use a CSS scroll-driven animation
    (`animation-timeline: view()`). Don't pause or override them.
  - The site CSS targets `[data-r~="stat-row"] > div`, so new index cells that
    are `<a>` need their own container-query rules.
