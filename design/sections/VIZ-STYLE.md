# Diagram and chart style

Every diagram, chart and graph inside a case-study drawer speaks one design language. The references are
`komunal-design-system.html` (one design system, three orgs) and `ai-decision-desk.html` (enterprise AI,
data to decision); `komunal-placement-routing.html` is built on them too. Read those three before changing a visual.

Product screens (phones, tablets, the Dash and Lumio apps, the Garmin renders, the Chrona phone) show each
product's own look and keep their own colours. Only the frame and labels around them follow this file.

## Tokens

Declare them on the component's wrapper with its own prefix (`--xyz-panel`, ...), values exactly as here.

The accent is written as lime here; `design/tools/theme.py` swaps it for the site's current accent at build time.

| Token | Value | Use |
|---|---|---|
| panel | `#1a1b1f` | the board every diagram sits on |
| node | `#232429` | boxes, cards, steps inside the board |
| tile | `#2b2c32` | chips, inner tiles, tracks, rails |
| line | `rgba(255, 255, 255, .08)` | hairlines, box rings (`box-shadow: 0 0 0 1px`) |
| ink / ink-2 / ink-3 | `#f2f2f4` / `#c2c3cb` / `#8b8d98` | text: primary, secondary, muted labels |
| edge | `#4a4d57` | resting connectors and axes |
| grey mark | `#6b6e78` | "before" values, neutral bars |
| lime | `oklch(0.9 0.2 122)` | outcomes and decisions only |
| amber | `#fdb022` | needs attention: the problem, a failure, a block |

No other hues in a diagram: no red, blue, green, pink. A "problem / before" state is amber; something that
is not a failure (a human agent, an escalation, an alternative) is neutral grey, never red. Lime is never
decoration: not every icon, arrow or border. It marks the result, the chosen path, the number that moved.

## Anatomy

- Head row above the board: `display:flex; justify-content:space-between; margin-bottom:18px`; spans in
  `600 11px/1.3 'IBM Plex Mono'`, `letter-spacing:.14em`, colour `rgba(242,239,232,.6)`; the first (the title,
  upper case) in lime; the second a short note on the right (`ILLUSTRATIVE`, a range, a source).
- Board: `border-radius:14px; background:panel; box-shadow:0 0 0 1px line, 0 30px 60px -30px rgba(0,0,0,.9); padding:16px`
  (more if the content wants air). Boxes inside: `border-radius:12px` (10 for small ones), `background:node`,
  ring `0 0 0 1px line`. Chips: `border-radius:6px`, tile background, `500 11px 'IBM Plex Mono'`.
- Caption under the board, outside it: `margin:14px 0 0; max-width:72ch; 400 14px/1.55 Archivo; colour rgba(242,239,232,.6)`.
- Status line (optional, inside the board): an 8px dot plus `500 12px 'IBM Plex Mono'` text in ink-2; the dot is
  lime with a `0 0 0 4px` lime/.15 halo for a good state, amber for a problem.
- Type: Archivo and IBM Plex Mono only, never name a typeface in visible text. Nothing under 11px (in screen
  pixels, not scaled mock-ups). Titles in boxes `600 13–15px Archivo`; values `700–800 Archivo`; labels mono 11px caps.

## Marks

- Flat. No 3D extrusions, bevels, side faces or perspective boxes on bars, ribbons or stacks.
- Bars: rounded data end (4px), 2px gap between neighbours, neutral grey (`#6b6e78` or tile) for the context
  and lime only for the bar or segment that is the outcome. Axes and gridlines: `line` or `edge`, 1px.
- Lines: 2px, round caps and joins; points 6–8px with a 2px panel-coloured ring; end value labelled.
- Connectors: resting = `edge`, 1.5px, dashed `4 6`; the active path = lime 2.5px with a 7px lime glow at
  `.13` opacity; arrowheads small and in the connector colour. No solid grey arrows.
- Icons: 14–16px line icons in ink-2 inside a tile chip; lime only on the outcome's icon.

## Motion

Optional, but when a visual moves it follows the references:
- Markup is the finished state, so the page is complete without JavaScript.
- The script resets to the start state and plays once the board is at least 40% in view; pause when off screen or
  the tab is hidden.
- Anything that shows, hides or changes text (labels, values, status lines, chat bubbles) plays once and holds its
  finished state while on screen, so there is time to read it; it replays only after the board has left the screen
  and come back (owner: "if it's related to text then it should be revised"). Purely graphic motion (packets on a
  path, a dot circling, rain) may loop.
- `prefers-reduced-motion: reduce` keeps the finished state, no animation.
- No layout shift: heights never change while it plays. Self-contained `<style>` + `<script>` in the file,
  class prefix unique to the component, no globals, no libraries.
- A drawer can be shut when the page loads (`.mk-drawer:not(.open)`): do not measure layout at parse time;
  measure on view or on the drawer's `mk-open` event (see `komunal-design-system.html`).

## Layout

Works from 360px to 1440px wide. Below ~900px rows stack, side-by-side lanes become one column, nothing scrolls
sideways (an inner horizontal scroller is fine only for a wide canvas, as in the decision desk).

## Previewing a piece on its own

```
python3 design/tools/build_hifi.py <scratch> # with COMPONENT=<file name without .html>
COMPONENT=linkaja-opex-chart python3 design/tools/build_hifi.py <scratch>   # writes <scratch>/component-linkaja-opex-chart.html
```
