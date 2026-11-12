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

- A "Lab" band (`LAB_BAND`) introduces the two personal builds ahead of the e-ink case. Its line is new copy, approved by the owner:
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
its scroll motion (`hifi_shell.html`). The owner confirmed this is how they want it (they like it as is).

**LinkAja home screen (owner comments: "bring in the current LinkAja app screenshot, especially the home screen"; then
"this looks nothing like the screens in the routing in chat. the image is low res, recreate if necessary. match the phone
shells mockup").** A "Home screen · as it ships today" block sits after "What I did" in the LinkAja drawer. A cropped website render was too low-res and did not match the other phones, so the screen is recreated in HTML and CSS as `design/sections/linkaja-home.html`, in the same phone shell as the intent-routing chat and the shipped screens (375x812 canvas, scaled to fit). Owner direction on the next rounds: it should read as a showcase, but the first isometric version with rings, a red wash and glass plates was "too much", and showing two screens with the same contents was redundant. So the block is one phone shot as a true isometric close-up (CSS 3D with no perspective, `rotateX(54deg) rotateZ(-36deg)`, fourteen extrusion layers for the glass edge), bleeding off the bottom-right corner of a flush board with the caption on the left; no supergraphics or gradients, matching the Garmin cockpit glass. The "redrawn" remarks are dropped from the page. The screen's header carries a pale street-scene illustration (kiosk, elevated train, towers, a scooter), drawn as an inline SVG background after the one in the current app, and a headset agent icon, since the redesign introduced updated icons and illustrations. The board behind the phone carries a faint outline pattern of the redesign's icons and small illustrations (a kiosk, a scooter, sparkles), a few per cent white on the dark ground, tiled from an inline SVG (`_pattern()` in `build_hifi.py`) as a straight 4 x 3 lattice of upright motifs laid on the same isometric plane as the phone (`.mk-home-floor`, same `rotateX(54deg) rotateZ(-36deg)`), so its rows run at the phone's angle rather than scattered at random; the owner asked for this after the earlier supergraphics were judged too much, so keep it at this strength. The caption carries the background the owner gave (two short paragraphs, nothing invented): the revamp was to refresh the design and unify the visual style, introducing updated icons and illustrations for a better user experience; the work was driven by dashboards and research and improved information architecture, clarity and engagement (both from the site's own "What I did" copy); and it is still the design in the app today (owner: "the design is still using my revamped design"). The 70M+ figure is the Key numbers one. An earlier one-line version was cut to avoid describing the obvious; the owner then asked for more context.

**Infographic sizing (owner: "this section looks rather large for the information it holds ... let's see some design options").**
An options review ranked every drawer infographic by height against what it says; the owner took the recommendations.
The LinkAja OPEX chart is now a one-line strip (`linkaja-opex-chart.html`): the -80%, one lime line from month 1 (index 100)
to month 12 (about 20), both ends labelled, 109px for the board (the block was 342px); it still draws in once on view. Only the
known facts are drawn: the months between have no values. The Komunal tooling migration is a one-row band
(`komunal-tooling-migration.html`): the same two cards, marks and colours on one row, 93px for the board (175px before).
The rest of the review's trims were then done (block heights at 1440px, before to after): Sprint sync 800 to 589 (the opening
paragraph and the three result tiles are folded into the caption); One design system 642 to 523 (tighter cards, and the library
is one slim row under the three surfaces rather than beside them, because its connectors run up from its top edge to each
card); Placement routing 914 to 887 (the placement card is drawn once, above the two lanes, and the route check is wider with
one line per rail; it is still tall because that step carries the content, and the "what it moved" tiles repeat the funnel
below, which is the next cut if it should shrink further); Intent routing block unchanged in height (the phones set it) but
the ~72% / ~28% bar is gone, so the split is drawn once, in the support model. Content: the figures were checked and agree
(Key numbers, headline, chart and the support model say -80%, 70M+ and ~72%); an earlier note about -75% / 66M+ / ~68% came
from reading Key numbers while its count-up was still running, and was wrong.

**Lab accent (owner picked option A from the lab colour options).** The lab case studies (`lab`, `lab-ui`) use instrument cyan,
`oklch(0.84 0.12 215)` / `#5bdefb` (11.6:1 on the page ground), instead of lime: lime marks outcomes on the case studies and the
lab has none to report. It covers the "LAB" label and number, the stack canvases (via `data-accent` and the `palette` option that
`stack.js` already had, so the other stacks keep lime), the drawer titles, key numbers, connectors and status dots, and the Garmin
diagrams. Mechanics: `lab_accent()` in `build_hifi.py` swaps the lime literals in the lab cases' finished markup, and `.mk-lab`
in `hifi_shell.html` re-points `--lime`. Neutrals, amber for problems, nav and every other case are unchanged. Known trade-off:
the Garmin concept's own screens use a blue pointer; the frame cyan is lighter and greener, but they sit close in that drawer.
If the site accent changes in `theme.py`, the lab stays cyan on purpose.

**Still open:** the remaining px font sizes; two console warnings from GSAP ("target not found"); one 815KB image
(confirm it is lazy-loaded); no `robots.txt` or Person structured data.

## Stageshow demos in the site (2026-11-03)

Five product mock-ups are now looping React demos built with the [Stageshow](https://benji.org/stageshow) kit (MIT), in
`design/stageshow/`. They replace the sections they were rebuilt from.

| Demo (`design/stageshow/components/<id>`) | Where | Replaces |
|---|---|---|
| `linkaja-routing` | LinkAja drawer | `sections/linkaja-intent-routing.html` (two chat phones) |
| `linkaja-home` | LinkAja drawer | `sections/linkaja-home.html` (the isometric phone) |
| `komunal-shipped-flow` | Komunal drawer | `sections/komunal-shipped-flow.html` (four screens side by side) |
| `ai-decision-desk` | Independent drawer | `sections/ai-decision-desk.html` |
| `ai-chrona` | Independent drawer | the Chrona screenshot with its animated overlay (the write-up beside it stays) |

The replaced `sections/` files stay in the repo for reference; `build_hifi.py` no longer reads them.

**Owner decisions from review**
- Kept these five; the Dash, Lumio and Lab rebuilds were dropped (those keep their current mock-ups), and the infographics
  (wave 2: OPEX chart, funnel, support model, tooling migration, the Garmin pipeline and so on) are on hold.
- Komunal: the added BPR Artha Sejahtera card and the plain building glyph in place of the bank marks are fine.
- Chrona: the drafted message and the free window are fine. The **aura glow** is kept (the old animated overlay, a coral light
  travelling round the AI card's edge, rebuilt in CSS as a ring over a halo). After the invite is sent the ring stays dim, so the
  card still reads as the AI's. The bold coral line along the top of the card is gone.
- LinkAja home: promo banners 2 and 3 are invented placeholders (generic copy, no figures) to replace with the real ones. The
  Bayar button carries the QRIS logo (Wikimedia Commons "QRIS logo.svg", cropped to the mark, white); swap in the official asset.
- LinkAja routing: the agent queue card is in English (an agent-side surface); the phone stays in Indonesian.

**How they are built into the page**
- `design/stageshow/vite.site.config.ts` bundles the five into one ES module plus one stylesheet (about 123KB and 22KB gzipped;
  the kit's brand-mark registry is stubbed out). `build_site.py` runs it, applies `theme.py` to the output, names the files by
  content hash and copies them to `assets/stageshow/`.
- `build_hifi.py` puts a placeholder (`ss_mount()`) where each demo goes: a box with the demo's aspect ratio for both its designs,
  holding the finished frame as a poster (`design/stageshow/build_posters.py`, WebP files in `site/posters/`). Copy, heads and
  sizes are read from each component's `meta`.
- The page's script loads the bundle the first time a case study that holds a demo opens (also on a deep link), then mounts each
  placeholder in it. Nothing loads before that, so the first load did not get heavier; without JavaScript the posters stand in
  and the page still reads in full.
- Measured on the built page, mobile profile at 4x CPU slowdown, median of three, before and after: FCP 344 and 324ms, LCP 372
  and 328ms, total blocking time 1100 and 510ms, layout shift 0 and 0, `index.html` 587KB and 476KB (the old Chrona screenshot
  and the isometric home block are gone). Opening a case study adds one stylesheet and one module request.
- Phones get the 358px column the compact designs were drawn for: the board's side padding moves onto the text
  (`.mk-board:has(> .ss-box)` in `hifi_shell.html`).

**Quirk to know about.** `kit/stage.tsx` picks the layout from the width of its fit box, which is capped at the wide design's
width. `linkaja-home` has a 400px wide design under a 560px threshold, so it always draws its compact (358px) design; its
`meta.sizes` say so and it ships one poster. (`komunal-shipped-flow` now has a real wide design, 820px with the step rail beside the
phone, and ships two posters.) The review lines in a REHEARSAL.md were taken in that state.

**Changing a demo.** Edit it in `design/stageshow/components/<id>/`, run `python3 design/stageshow/build_posters.py` if its
finished frame changed, then rebuild (below). The review page `design/mockups/stageshow-components.html`
(`python3 design/stageshow/build_review.py`) shows the same components outside the site.

## Komunal in the live app's type and colours (2026-11-06)

The Komunal design system board and the shipped-flow demo were redrawn from four screenshots of the live DepositoBPR app (Beranda,
BPR list, Detail BPR). Read from them:

- **Two typefaces, not one.** Poppins (500/600/700) for headings, amounts, buttons and bank names; Mulish (400-800) for body text,
  labels and tags. Sizes were calibrated by measuring the same strings in both (a heading is about 1.3x the body).
- **Palette** (sampled): primary `#255ADC`, the sky gradient `#359DFF > #2C7CEF > #275EDF` (home card, headers, main button),
  ink `#0E1D30`, grey `#656A72`, ground `#E9EFFD`, product band `#F7FAFF`, line `#E4E7EE`, interest rate / success `#3FC89A`,
  "Buka" `#3AC149`. `#158A66` is the same green darkened for small text on white (the app's green is about 2:1 there).
- **Shapes:** cards 20, buttons and inputs 16, icon tiles 12, tags and chips fully round; white cards with a 1.5px line on the pale
  blue ground; the floating tab bar and the gradient header with a white sheet over it.

Where it lives:

| What | Where |
|---|---|
| The font files (latin subsets of Poppins 500/600/700 and Mulish variable) | `design/fonts/` |
| Registered on the page | `build_hifi.py` (`APP_FONTS`); `build_site.py` moves them to `assets/fonts/` with the other faces. Not preloaded: they load when the Komunal drawer first shows them. |
| Registered for the demo harness (posters, filming) | `design/stageshow/harness/fonts.css` |
| Design system board | `sections/komunal-design-system.html`: tokens on `.kds-wrap`, offer card drawn as the app draws a product, before = each team's own typeface, blue, radius; after = the app's tokens |
| Shipped-flow demo | `stageshow/components/komunal-shipped-flow/` (`flow.css` carries the same tokens as `--kd-*`) |

Changes to the demo: an **Android** frame (the app is one; the kit's `android` frame, own status bar drawn in each screen), screens laid
out at 412 wide; the first screen is the live **Detail BPR** page with its product cards in place of the old product list; the
success screen has the app's gradient header with the sheet over it; amount, rails and instructions keep their logic and strings.
The Mulish italic ("minimum penempatan" is italic in the app) is not shipped, to save 32KB; it is set upright.

Placeholders to replace with real values: BPR Artha Sejahtera's city (Semarang) and its product cards other than the 12-month, 6,75%
one (minimums Rp5, 10, 25 and 50 jt; 3, 24 and 36 months; 6,25%, 7,00% and 7,25%). The 12-month card's minimum (Rp10 jt) is a placeholder too.
The board's type specimens are labelled "heading" and "body": typefaces are still never named in visible text (VIZ-STYLE.md).

## Board side-padding audit (2026-11-06)

Every `.mk-board` in the built page was screenshotted at 1440, 1024 and 390 and the first and last columns that differ from the
board ground were measured (the DOM boxes are not a good proxy: stage backgrounds and rounded corners count as content). Found and fixed:

| Board | Before (left / right) | Cause | Fix |
|---|---|---|---|
| Chrona | 40 / 28 | `.cr-phone { left: 12px }` in the stage | `left: 0`, the outcome card moved 12px with it (`chrona.css`); poster regenerated |
| Dash tablet and laptop | 28 / 17 | the laptop's hinge lip is `width: 104%; margin-left: -2%`, so it overhung its column | `div:has(> [style*="width: 104%"]) { padding-inline: 2% }` in `hifi_shell.html` |
| LinkAja home | 178 / 215 | the column was the 400px stage width, the phone is 358 with a 16px inset in it | `SS_INSET` in `build_hifi.py`: column the width of the drawing, frame bleeds out by the inset |
| LinkAja chat | 79 / 122 | the agent card stops 43px short of its frame | same, 43px on the right, in % so it scales |
| Decision desk | 76 / 99 | the lead lined up with the stage edge, the panel is 24px inside it | `SS_LEAD_INSET` |

Left alone: the lab's e-ink photo and the lab cockpit (full-bleed images by design); the phone-width Chrona and Komunal (the stage runs
edge to edge on purpose). Residual: LinkAja chat between about 900 and 1100px wide, where the demo is on its compact design and the
frame does not fill its column (35px, was 51).

## Copy trim and Swiss type/grid options (2026-11-11)

Owner: "too much copy, too many remarks after a diagram or a project showcase"; wants options for typography and layout,
"aiming for a minimalistic clean swiss grid layout".

**Copy trim (built into the site).** Rule: a diagram has its title; a remark under it stays only if it says something the
drawing cannot (a disclaimer, a fact), in one or two short sentences.

| Where | Before | Now |
|---|---|---|
| LinkAja problem / fix | two paragraphs beside the board (they repeated the hero line) | gone; the board has a head row and sets before and after side by side |
| LinkAja support model | closing caption | gone (the diagram already says "not a blanket bot") |
| LinkAja shipped screens | "As shipped: ..." caption | gone |
| LinkAja home, routing (demo leads) | 4 sentences; 2 long ones | 2 short sentences each |
| Komunal transformation map, tooling migration | closing captions | gone (both repeated "What I did") |
| Komunal design system, sprint sync, placement routing | 3 to 4 sentence captions | 2 short sentences |
| Komunal routing note, funnel caption | long notes | the NDA / "lift is actual" disclaimers only |
| Komunal shipped flow, decision desk, Chrona (demo leads) | 1 to 2 long sentences | 1 short sentence |
| Chrona engine | caption | gone; the habit loop keeps "North Star: the share of invites sent through Chrona." |
| E-ink lab | intro paragraph above the faces (repeated the hero line) | gone |

Left alone: Key numbers context lines, "What I did", the company lines, the cockpit's "The question" write-up, the
shoe tracker text, every "ILLUSTRATIVE" tag and the "not affiliated with Garmin" line. These are the next candidates if it
should go further.

**Type and grid options (the owner picked C × 1; built, see the next section).** `design/mockups/type-grid-options.html`
(https://claude.ai/artifact/HHQayFJuMsUMDfZpdapivi; refresh its stack copy with `inline_stack.py`). One live preview of the
opening, the case index and the LinkAja case, redrawn by any pair, with a 12-column overlay.

- Type: **A** Archivo at normal width (no new files, mono caps kept); **B** Geist + Geist Mono; **C** Inter Tight only,
  labels in sentence case, no mono (recommended).
- Grid: **1** Hanging index, a label column of three with content hanging from column 4 (recommended); **2** Poster, very
  large flush-left headlines; **3** Register, the work as a table whose rows open, which drops the separate outcome band.

## Swiss build: type C on grid 1 (2026-11-11)

The owner picked **C × 1** from the options page and asked to fold in the cheap fixes from a Hallmark audit
(`Nutlope/hallmark` v2.0.0, `audit` verb, run on the built page). The audit's main finding was typographic: tracked
mono capitals on nearly every label (its gates 67 and 64), kickers above headings (54) and middle-dot strings (63).

**Type.** One family outside the drawings: Inter Tight at first (replaced by Switzer and Clash Grotesk the same day, see
"Type pair" below), a variable file for 400 to 600 in `design/fonts/`, the only font preloaded. Two weights (400 text, 500 heads and names). Labels are sentence case, 13px, untracked; no mono on the site
itself. `SAY` in `build_hifi.py` lists every label the captures and section files spell in capitals with what it says
now; the build stops if one is missing. Scale: 13 label, 14 to 18 text, 15 label titles, heads `clamp(30px, 3.4vw, 46px)`,
the headline `clamp(40px, 6.2vw, 84px)`, key numbers `clamp(40px, 5vw, 64px)`.

**The drawings are restyled too** (owner: "let's restyle the drawings"). Archivo is gone from the page.
- Diagrams (`design/sections/`, all but the terminal easter egg): Switzer (first Inter Tight), labels in sentence case, no tracking, no
  dot-joined strings. Mono stays only where it is the material: the design-system board's token names, the terminal,
  and type inside product screens.
- Captions on the boards that came from the captures (Dash, Lumio, the e-ink faces, the shoe tracker, the Chrona
  write-up) go through `swiss_inline(..., strict=True)` and `SAY`.
- Product screens (drawn at full size and scaled, or image-role drawings) keep their own design; only their stand-in
  family changed from Archivo to the site's text face. Their capitals are the product's, not the site's.
- The five demos set their page-face text in the site's text face (`--ss-font`); the harness loads it and the posters were
  regenerated.
- (Superseded by the type pair below: the file was our own subset of the variable Inter Tight, latin plus the arrows,
  declared for 400 to 800.) Page fonts: 12 files, 250KB, one preloaded
  (was 14 files, 411KB).
- The link-preview image (`og_image.js`) uses the same type and was re-rendered.

**Grid.** Twelve columns in the 1216px column, 24px gutters (`.mk-hang` in `hifi_shell.html`). The label column is
columns 1 to 3 (`.mk-hl`); everything else hangs from column 4 (`.mk-hb`). Below 900px it is one column, label first.

| Piece | Label column | From column 4 |
|---|---|---|
| Opening | Portfolio 2026, the role | headline (4 to 12), then the text (4 to 8) beside the profile card (9 to 12) |
| Case index | none: four cells of three columns, no icons, no vertical rules | |
| Clients | "Clients and brands" | the logos |
| Case hero | number (lime), name, role, dates, one a line | title and description (4 to 8), the stack (9 to 12); toggle under them |
| Case study units | the title, quiet note lines, and the remark that used to sit under the drawing | the numbers, the list, or the board |
| Background | "Background", the years | headline, the timeline three columns a company |
| Contact | "What I'm looking for" | "Let's talk", the text, the buttons, the footer line |

Units are built by `unit()`, `stage()` and `figure_unit()` in `build_hifi.py`; `figure_unit()` lifts a section file's
`-head` row and top-level `-cap` / `-note` paragraphs into the label column, so the section files are unchanged in shape.

**Earlier decisions this replaces** (they followed from the pick, flag any to restore):
- The toggle is left-aligned at column 4 with the chevron before the label, no longer centred caps. The bob, the flip and
  the label crossfade are kept. Its line reads "3 min read. Home screen today, …".
- Key numbers are left-aligned on the grid, no centred band or vertical rules.
- Heroes no longer alternate sides: the text is always at column 4 and the stack at column 9.
- "What I did" is one column at a reading measure, without dash markers.
- The case index has no icons; the capabilities are one a line instead of dot-joined.
- The "Lab" band title is at head size, not 84px.
Kept as they were: the profile card with its spinning seals and its easter egg, the stacks and their build, the drawers'
behaviour, deep links, the lab's cyan accent, every drawing.

**Cheap fixes folded in.**
- Decorative SVGs get `aria-hidden` unless they carry a name (`fixes()` in `build_hifi.py`; 51 on the old page).
- `overflow-x: clip` on `html` and `body`.
- The travelling dots in the problem/fix board and placement routing move by `transform` (a track the size of the
  connector carries the dot). (The funnel bars now do too, see the 2026-11-11 phone note below.)
- The scissors character in the sprint diagram is an SVG; the governance block's `h4`s are `h3`s; the design-system
  swatches wrap three a row so their names fit; a straight apostrophe is curled.
- The focus ring sits on the profile card itself, not its inner face.
- `:active` states on the links and the toggle; tabular figures on the numbers.

Not changed, with reasons: the Hallmark findings inside product screens (pure white, the Komunal "before" gradient, low
contrast in mock UI), the "hidden at rest" classes (all script-scoped: `kop-pre`, `idle`), the 883 colour literals (how
the page is assembled), the word budget (a portfolio, not a landing page). 

Checked on the built page: no console errors or failed requests; no horizontal overflow at 1440 or 390; the opening fits
1280 × 800; deep link, index link, toggle, Escape and focus return work; a stack builds on arrival; the LinkAja demos mount.
Static linter counts, before to after: unlabelled SVGs 51 to 0, tracked-caps labels 106 to about 83 and mono labels 30 to 27
(what is left is inside the drawings and in unused captured CSS), dot strings 19 to 7.

**The hi-fi artifact is one page, updated in place** (owner: "so we don't have to keep adding new artifacts"). It is
"Portfolio Hi-Fi", https://claude.ai/artifact/4RueWNnvUFU4onFqKDnCUo (it was "Portfolio Hi-Fi v2"; the title no longer
carries a version). To publish an iteration: build, copy `<workdir>/portfolio-hifi.html` and the two files in
`assets/stageshow/` into one folder, replace `%%SS_JS%%` and `%%SS_CSS%%` in the page with `stageshow/<file>`, and
publish to that URL with the two bundle files as supporting files, so the demos run in the artifact too.

### Type pair: Clash Grotesk and Switzer (2026-11-11)

The site's family is now a pair instead of Inter Tight: **Clash Grotesk** for headings, big numbers and the wordmark
(`--head` in `hifi_shell.html`: `.mk-h1`, `.mk-h2`, `.mk-lab-t`, `.mk-key-n`, `.mk-idx-n`, `.mk-brand`, `.mk-fan-cap strong`,
the profile card's name and the "Let's talk." heading, plus the name, headline and numbers in `og_image.js`), and
**Switzer** for everything else, diagrams and demos included (`--display`, `--ss-font`).

- Why: the owner wanted more character, and Hallmark's font guidance lists Inter-family faces as the unchosen default.
- Source: both are Fontshare variable fonts (Clash Grotesk wght 200 to 700, Switzer wght 100 to 900), ITF Free Font
  License, self-hosted as `design/fonts/clash-grotesk-var.woff2` and `switzer-var.woff2`. Latin only, so the latin-ext file
  is gone. Both faces are preloaded; the case studies' own faces still load on demand.
- Arrows: neither face has U+2190-2193 (the site uses them in the 0 to 1 mark, W to D and "Fund to Complete"). `design/fonts/arrows.woff2`
  (about 1 KB, `pyftsubset` of the old Inter Tight file, unicodes U+2190-2193) is registered as `Mk Arrows` with that
  `unicode-range` and follows the family in every font stack, so arrows draw in a matching face, not a system fallback.
  It is not preloaded. The Inter Tight files were deleted.
- The two Fontshare faces are registered without a `unicode-range` because they do not cover every codepoint the old range
  named (no U+2191 and U+2193, no general-punctuation spaces).
- Neither face has tabular figures; `font-variant-numeric: tabular-nums` stays in the CSS but does nothing for them.
- Heading metrics: weight 500, letter-spacing -.02em; the headline sets on exactly two lines at 1280 and 1440px.

### Heading face: Archivo expanded replaces Clash Grotesk (2026-11-12)

The owner compared nine heading faces on `design/mockups/display-type-options.html` (each set at the same sizes as the site, with a
side-by-side of the headline) and picked **option F, Archivo expanded**. Clash Grotesk is gone from the build.

- Face: Archivo, one variable file (`design/fonts/archivo-var.woff2`, Google Fonts latin, SIL Open Font License 1.1) cut with fonttools
  to wght 500 to 900 and wdth 100 to 125, 59 KB (the full file is 90 KB). Registered in `SITE_FONTS` with `font-weight: 500 900` and
  `font-stretch: 100% 125%`; it is the preloaded heading face. `--head` is `'Archivo', 'Mk Arrows', system-ui, sans-serif`.
- A font-family token cannot carry the width, so every rule that reads `--head` sets `font-stretch: 125%` after its `font` shorthand
  (the shorthand resets it), and the two captured headings kept as inline styles (the card's name, "Let's talk.") get the same
  declaration from `in_head()` in `build_hifi.py`. Weight 800 for the headline, h2s, key numbers, index numbers and lab title; 700 for the
  wordmark and the fan caption.
- `DROP_FAMILIES` still strips Archivo from the captures and mock-ups (they become Switzer, as before), but its Archivo branch skips the
  heading stack (Archivo followed by Mk Arrows), so the new rules and inline styles survive `one_type()`. Checked on the built page:
  every element whose computed family starts with Archivo is a heading element (brand, h1 and its `.ol` letters, h2s, key and index
  numbers, lab title, card name, "Let's talk.", fan caption).
- Sizes, before to after (about 70% of Clash for the headline, about 80% for the rest, as on the options page; Archivo expanded 800
  is much wider): headline `clamp(40px, 6.2vw, 84px)` to `clamp(28px, 4.3vw, 59px)` (27 to 40px from 7.7vw under 600px), line height
  .98; h2 `clamp(30px, 3.4vw, 46px)`/1.04 to `clamp(23px, 2.5vw, 34px)`/1.08; key numbers and lab title `clamp(40px, 5vw, 64px)` to
  `clamp(32px, 4vw, 51px)`; index numbers `clamp(30px, 3.2vw, 40px)` to `clamp(24px, 2.6vw, 32px)` (phone 26 to 30 becomes 22 to 26);
  wordmark 15px/500 to 14px/700; fan caption 22px/500 to 18px/700 (19 to 16 on phones). Letter spacing stays -.02em (-.01em on the
  wordmark). The opening still fits 1280 x 800 (headline bottom 264 to 215, card bottom 792 to 743).
- The link-preview card (`og_image.js`, both variants) uses the same face; the video variant's name, headline and numbers moved to
  Archivo 800 at 17, 72 and 32px. `assets/og-image.png` was re-rendered. The Clash line in `design/stageshow/harness/fonts.css` was
  removed (nothing in the demos used it).
- Matrix easter egg (`design/sections/egg-matrix.html`): its canvas headline is set in `800 40px Archivo`, which used to fall back to
  Arial Black and now draws in real Archivo at normal width. Checked at 1440 and 390 against the old fallback: still legible, centred and
  inside the canvas (the font size is fitted to the grid width), only a little narrower and lighter, so nothing was changed. The terminal and
  profile-card eggs open, close and flip as before, and none of them names Clash.
- Rolling "outcomes": the roll's clip window was cut `.07em` below the top of each letter slot, tuned for Clash, and the rolling digits
  (Archivo expanded 800, 41 to 47px at 1440) were wider than most slots and overlapped their neighbours. The window is now exactly the
  slot (`clip-path: inset(0 -.2em)`, was `inset(.07em -40% -.12em -40%)`), so no glyph inside its slot is cut and no neighbouring digit
  peeks in, and the rolling digits use `font-stretch: 100%` (the settled letters stay expanded). Layout is unchanged: the h1 and every slot
  sit where they do with the roll disabled.
- Two follow-ups. The profile card's row labels (Experience, Now, Board, Certified) were 50% cream inline in the capture, which the
  Impeccable detector measured at 4.4 to 4.49:1 on the card's gradient; `build_hifi.py` now rewrites them to 58% (about 5.7:1 sampled
  on the lightest point behind the labels at 1440 and 390; the values beside them stay at 88%). The h2 max went from 34px to 32px
  (`clamp(23px, 2.5vw, 32px)`), which brings the Komunal h2 from 4 lines to 3 at 1440 (the hero text column is 493px there and the h2
  has no narrower max-width; it already had `text-wrap: balance`); LinkAja was already 2 lines at 1440, and nothing at 1280, 1024
  or 390 changed.

### Phone check of the drawings, funnel bars, read times (2026-11-11)

**Phone check.** All six case studies opened one at a time at 390 x 844 (spot-check 360), reduced motion, demos `ss-ready`;
every `.mk-block` screenshotted at 2x and looked at, plus a script for right-edge overflow, text under 11px outside product
screens, clipped text, overlapping text boxes and board side padding. Result: the diagrams hold up. No horizontal overflow, no
text under 11px outside product screens, no board with uneven side padding, no connector pointing at nothing. Fixed one thing:
in the sprint sync, the 12px request dots (plus halo) on a ~170px track merged into blobs at 360 and 390, so a request
disappeared; `@container (max-width: 420px)` in `komunal-sprint-sync.html` makes them 9px. Desktop is pixel-identical.
Left for a decision (not changed): Chrona's compact stage crops the top of the phone by design (`top: -90px` in `chrona.css`);
two Product dots in the sprint sync still touch (their data positions are 10px apart on the track); in the Dash back office
and Lumio CMS mock-ups the main pane above the content is blank, at every width (product screens); the checker's remaining
"overlap" hits are line boxes of wrapped text and clipped parts of the demos, not visible collisions.

**Funnel bars.** `komunal-funnel.html` no longer animates `height`. Each bar keeps its full height and scales from its
foot (`transform: scaleY(0)` in the idle state); the value label is now a sibling of the bar, not inside it, and travels the
same distance with the same curve, duration and stagger (`translate(-50%, calc(var(--p) * 1.5px))` in the idle state), so it rides
the bar top without being scaled. Same timing, finished state and reduced-motion behaviour; the markup is still the final state,
so the page is complete without script. One visible difference: the 4px top corners are scaled with the bar while it grows.

**Read times** (`READ` in `build_hifi.py`), re-measured on the built page with the case study open. Words in the reading copy and
diagram labels at 230 a minute, leaving out text inside the animated demos (`[data-ss]` holds every frame of the loop) and inside
scaled product screens; 8s per image up to 8, each scaled product screen counting as one image; 30s per demo; 30s for the case
studies with drawings from `design/sections/` (linkaja, komunal, ai, lab; not board or lab-ui). Words / images / demos, unrounded
minutes, old to new: Linkaja 308 / 4 / 2, 3.37 min, 3 to 3; Komunal 810 / 0 / 1, 4.52, 7 to 5; Board 244 / 8 (18 counted, capped) / 0,
2.13, 4 to 2; AI 342 / 0 / 2, 2.99, 3 to 3; Lab 347 / 3 / 0, 2.41, 3 to 2; Lab UI 197 / 7 / 0, 1.79, 2 to 2. Note: the built page has
no element carrying `data-fit` (the build's regex and the page script's `[data-fit]` find nothing in the output), so the scaled
screens were identified by their computed `scale()` transform.

## Impeccable polish pass (2026-11-11)

A final quality pass with Impeccable (`pbakaus/impeccable` 4.8.2, its `polish` command), on the built page at 1440, 1024,
768 and 390. Polish preserves the look and fixes what is unfinished; it is not a redesign. The detector ran once, at the end.

**Fixed**
- **One page gutter.** Between 601 and 820px the case index, the clients strip and the top bar kept a 40px gutter while the
  sections had already dropped to 24px, so their left edges disagreed. Every wrap now reads one token, `--pad`
  (40px, 24px from 820, 16px from 480), in step with the captured `[data-r~="wrap"]` rule.
- **Profile card on small laptops.** From 901 to 1180px four columns were too narrow for the card (every row wrapped and
  the card ran far below the text). It now sits under the text, both from column 4.
- **Skip link hover.** The captured stylesheet turns every hovered link lime, which is the skip link's own ground: lime
  on lime. It keeps its ink on hover.
- **Diagram text contrast.** The diagrams' quietest ink (`#8b8d98`) read 4.2:1 on their tile ground; it is `#9d9fab` now
  (about 5.3:1), in all 16 section files.
- **Heading levels.** The label column's titles are real `h3`s instead of `div`s with a heading role, so no level is
  skipped anywhere (61 headings, checked with every case study open).
- **Browser surfaces.** The scrollbar, form accents and the tap flash take the page's colours (`scrollbar-color`,
  `accent-color`, `-webkit-tap-highlight-color`); text selection was already themed.
- **Clean-up.** The unused rules of the old scroll-pinned cockpit are dropped from the captured stylesheet (they left a
  second sticky element in it), `blocks()` is removed from `build_hifi.py`, and the `tabular-nums` declarations are gone
  because neither face has tabular figures.

**Detector findings left alone, with reasons**
(The glow, nested-card, cramped-padding and grid items below were later adjusted at the owner's request; see "Glow, nested cards, lab grid and style attributes".)
- *Low contrast, tiny text, wide tracking, flat hierarchy:* all the remaining ones are inside product screens (LinkAja,
  Dash, Lumio, the Komunal app), which are shown as designed.
- *Nested cards and cramped padding:* the diagrams' node cards on their board, and screens set flush in device frames.
  That is the drawings' established language (`design/sections/VIZ-STYLE.md`), not page structure.
- *Coloured glow:* the lit connectors and travelling dots in the diagrams, and the terminal easter egg's green. Impeccable
  counts a zero-offset coloured halo as decoration; here it marks the "lit" path. Left for the owner to decide.
- *Grid background:* the lab's faint workbench grid, an earlier owner decision.
- *Images at opacity 0:* the demo posters and crossfades, which are meant to be hidden until used.
- *Case numbers 01 to 04:* Impeccable discourages section numbers unless the sequence carries information. Here they tie
  each case to its cell in the index, so they stay.

## Safari safeguard for scaled screens, made to take effect (2026-11-11)

**What was wrong.** The product screens (four LinkAja phones at 375px, the Dash tablets at 1024px, the Dash and Lumio
laptops at 1440px) are drawn at full size and scaled into their frames with an inline
`transform: scale(calc(100cqw / 375px))`. `portable()` in `build_hifi.py` was meant to rewrite that to
`tan(atan2(100cqw, 375px))` (typed length / length arithmetic is not supported by older Safari) and mark each screen
`data-fit="<width>"` so the page script sets an exact scale. Its regex only knew `calc(100cqw * (1 / 375px))`, a spelling
the markup does not use, so the built page had no `data-fit` and no `tan(atan2(`, the script found nothing, and
`floor_type()`'s `data-fit` test never matched either.

**What changed.**
- `portable()` also rewrites `calc(100cqw / Npx)` (whitespace-tolerant) and marks every inline scale `data-fit`. All eight
  screens in the page now carry it. No stylesheet scales by `cqw` (the one other `cqw` rule is the background video's cover
  sizing, which is not a scale), and the stageshow sources have none, so nothing else needed the marker.
- `floor_type()` now runs on markup that has been through `portable()`, so its `data-fit` test works: product screens keep
  their px sizes instead of being converted to rem. At the default 16px root the pixels are the same (checked: the built
  page differs only by rem-to-px inside screens, and no font size inside a screen is under the 11px floor); with a larger
  browser font size the screens no longer re-flow inside their fixed-size drawing.
- The page script (`hifi_shell.html`) measures the frame's fractional content width (not the rounded `clientWidth`),
  sets `scale(w / fit)` on load, on `ResizeObserver` and window `resize`, and refits a case study's screens when it opens
  (`mk-open`; a shut drawer is `content-visibility: hidden` and measures 0 until it opens). It also works without
  `ResizeObserver`. The screen's parent is the frame that has `container-type: size`, with no padding or border, and the
  transform origin is left top.

**Tested (Chromium only).** Screen widths at 1440 and 390 with the case studies open, before and after: identical
(within 0.01px), and the element screenshots are pixel-identical apart from animated content. A browser that ignores the CSS
scale was simulated by stripping every `cqw` transform before the page script runs (Playwright `addInitScript` plus a
`MutationObserver`): on the new build all 8 screens land within 1px of their frame at 1440 and 390, after resizing
(1024, 700, 390, 1440) and for case studies that were closed at load; on the previous build the same test fails for all of
them (screens stay at full size). Playwright WebKit is not installed here, so **this has not been verified in real Safari**.
Found here and fixed in the next section: in the built markup the font-family rewrite leaves unescaped single quotes inside some single-quoted
`style` attributes on the screens' wrappers, which cuts those attributes short (the font stack and whatever follows it, such as
`display: flex`, on all eight); it predated this change.

## Glow, nested cards, lab grid and style attributes (2026-11-11)

The advisor settled the findings the polish pass left open. All changes are in the sources; `index.html` and `assets/` were rebuilt.

**Lime glows removed from the diagrams.** Kept: solid lime fills, strokes and dots, the 1px and 1.5px lime outlines, the terminal
easter egg and the profile-card spark, everything inside product screens and demos, focus rings, the generative stack.
Removed: the 5px translucent outer ring and the long blurred drop under lit nodes (`.ce-ai`, `.ce-out`, the `s2`/`s4` states, `.dfy-node.dfy-out`,
`.kds-lib`, `.kpr-node.win`, `.ktm-card.win`, `.lsm-card.win`, `.cl-n.on`); the `drop-shadow` on travelling dots (`.ce-pk`, `.cl-dot`, `.dfy-packet`,
`.kds-dot`, the circles in `.lsm-edges`); the 4px halo around the status dots (`.kds-status`, `.kpr-lane.good`, `.kss-good`, `.ktf-dot`, `.gpd-st`, `.lpf-row.after`,
`.lsm-lane.after`) and the end-point ring on the funnel line (`.kfl-pt.end`); the check disc ring (`.lpf-check`); the glows on lit connectors (`.kpr-link b::after`,
`.lpf-dot::after`, `.kss-cut`, `.gpp-seg.lit`, `.lpf-c.lit::before`); and the wide faint under-stroke on lit lines (`.glow` in the support model, design system and decision desk,
`.ce-g`, `.cl-trail.g`, `.kop-glow`, now `display: none`). The decision desk's amber packet and amber connector halo went with the lime ones so the diagram stays consistent;
other amber and blue halos (sprint dots, product-screen blue) were left. Site level: `hifi_shell.html` had no lime glow. The captured stylesheet still carries
`loop-dot` and `loop-node-hit` rules from the old bundle (a glow); nothing on the page uses them.

**Nested cards.** Surveyed with a script (boxed ancestors with a fill, ring or four borders, three levels deep, product screens excluded). Panel, lane, node
occurred in the placement routing, sprint sync, funnel and support model; panel, tile, picture in the transformation board; panel, library, group in the design system.
Fixes: every `.mk-board`, diagram board and `.ksf-panel` is a flat panel (same fill, no ring, no long shadow); lanes lost their boxes and are separated by a hairline in the
column gap (or the row gap when stacked), lane padding is vertical only so nodes line up with the board's own padding; the transformation board's four tiles are hairline quadrants
and the before/after pictures are the cards; the design system library's four groups are hairline columns inside the one library card. Left: panel, surface, product card
in the design system (the white card is a product screen); chips and pills inside nodes; the Dash and Lumio frames.

**Lab grid.** The faint 48px grid behind the lab (`.mk-lab::before`) is gone; plain page surface.

**Sprint sync.** The two Product dots at 47% and 57% are at 45% and 59%; the smallest gap between dots in a row is 99, 11 and 7px at 1440, 390 and 360 wide (the halo was what made them touch).

**Funnel bars** reveal with `clip-path: inset(... round 4px 4px 0 0)` instead of `scaleY`, so the top corners stay round all the way; reduced motion and no script show the final state; the value labels still travel by transform.

**Chrona on a phone: left as it is.** At 390 the compact stage is 358 x 570 and the phone is 326 x 685 with `top: -90px`, so the notch and the last 25px are cut off. Showing all of it
means a taller stage and a new placement of the outcome card, the cursor rest points and the posters, which is the demo's own layout (`chrona.css`, `index.tsx`), not the placement in `build_hifi.py`.

**Padding.** Measured text against its nearest boxed ancestor at 1440 and 390. Raised: the placement routing's route options, amount row, nodes and shared card; the design system's surface header;
the narrow-board padding in the funnel, support model, transformation and placement routing (12px 14px; the flat lanes had made it look like 10px). Judged fine: chips, pills and tags
(17 to 28px high on purpose), the profile card's tag pills, small labels inside the miniature pictures, the 28px step badges.

**Style attributes (bug).** `one_type()` wrote the site font stack, which contains single quotes, into single-quoted `style` attributes, which cut the attribute short.
It now writes the stack with double quotes when the attribute is single-quoted. Affected attributes in the built page: 9 before (8 scaled screens and one amber label in Dash), 0 after.
The scaled screens now keep what followed the font: `display: flex` and the backgrounds, so the LinkAja phones fill their frames (the CTA sits at the foot), the Fiorella menu
tablet and the Dash tablet are full height and the Dash and Lumio laptops show their content where the main pane was blank.

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
  0. Once: `cd design/stageshow && npm install --ignore-scripts` (the Stageshow demos are bundled with Vite). After changing a
     demo's finished frame, `python3 design/stageshow/build_posters.py`.
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
     `assets/` (including `assets/stageshow/`, built from `design/stageshow`).

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
