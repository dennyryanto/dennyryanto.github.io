# Portfolio design audit and redesign plan

Started 2026-10-09. **Status: on hold.** The structure below is agreed, but the
work is paused until the other case studies are brought up to the polish level
of the Garmin "glass cockpit" section (see [On hold](#on-hold-why-and-what-unblocks-it)).

Live mockups (claude.ai artifacts, private to the owner):

- Wireframe: https://claude.ai/artifact/EHgn5hkwDuf3Y3MRPdvVCB
  (local copy: `design/mockups/wireframe.html`)
- Hi-fi, opening + case 01 LinkAja: https://claude.ai/artifact/DtpefKiKyb54R7UGPayvgr
  (local copy: `design/mockups/hifi-opening-linkaja.html`)

Both local copies are artifact bodies without a `<!doctype>`/`<head>` wrapper.
They render fine in a browser, in quirks mode.

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
  - a plain chevron (not an arrow) that gently bobs on a loop
  - on open, the label **crossfades** to "CLOSE" and the chevron **flips
    vertically** (scaleY), it does not rotate; the meta line dims
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

## Open decisions

- **Case order**: by impact (LinkAja first; recommended) or by date (newest
  first). The wireframe toolbar switches between them.
- **Default state**: all cases collapsed (current wireframe) or LinkAja open.
- **Duplicate numbers**: Komunal, Dash · Lumio and Independent still repeat
  their case-index number in the hero stats. LinkAja doesn't (its −80% lives in
  the chart callout). Make these consistent or keep the echo.

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

- `index.html` is a bundler export: a JSON `__bundler/template` plus a
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
  captures, using `hifi_shell.html`. It expects `<workdir>/hifi/*.html`,
  `<workdir>/hifi_shell.html` and `<workdir>/unpacked/assets/`.
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
