# Rehearsal: Decision desk (enterprise AI, data to decision)

Gold: `dark-hero` (depth from surface steps on black, one lit colour, a status that changes on its own mark), `story` (related objects joined by connectors),
`choreography` (retained content that changes in place) and `subscriptions` (a consequence that lands somewhere else, a reset around an anchor).
Kept: the wide-hero crop (window inset on three sides, off the bottom), the kit `Window`, `Connector`, `Count`, `Stream`, `Check`, `Meter`.
Changed: everything else is this product, from `design/sections/ai-decision-desk.html`: its node names, rows, figures, LLM note, threshold, decision and run labels.

Beats (about 13s): 1 the canvas waits, every node idle · 2 Sources run, the four tags tick, Warehouse sheets flags DUPES · 3 Clean & validate rolls
312, 1,840 and 0, the flag clears · 4 Demand signals streams its note while the confidence counts to 0.86 · 5 IF/ELSE takes the IF branch (0.86 clears 0.80),
Planner review steps back · 6 the decision card rises in with its confidence bar (a tick at 0.80), Approve and Review; the run pill reads Ran in 2.4s ·
payoff holds 3s · exit: the card and lit path leave, each node's figures fade out from the right (decision first), reset while hidden, and return as waiting.
The poster is the finished run.

Colour: the builder's blue is the run (ring, lit edges); the lime is the decision only (the chosen IF port, the edge into the card, the card, the bar, Approve).
Product tile colours stay inside the canvas.

Captured: wide 1064 (the board's stage width) and 390 (compact), dark theme on the page's board ground, reduced-motion poster at both widths, the exit at 150ms,
three loops of the gate sheet at each width.

Compact design: not a squeezed canvas. It is the builder on a phone (the source's own narrow layout stacks the nodes in one column): each step opens while it
works and folds to its header with the tick, and the decision card is there from the first frame, dimmed. Type is set larger than the wide design because the
phone draws its screen at about 0.8. Planner review is left out of the phone (it is skipped in this run anyway).

Film:
- Wide: `rehearsal passed`. Remaining non-gating lines: `jump: ss-check__fill / __arc` (a tick's disc growing, 2 to 5px, one frame each: the kit's own mark, sampling gaps at 4 cores) and
  `near-empty frames: 49 of 486 elements` around the reset. That count is dominated by the `Count` digit strips (30 spans per digit) that are hidden on purpose while
  the figures are reset; the frame is the node frames with their names and labels, not an empty frame (checked in the 150ms exit sheet).
  `appears with no entrance: span.ss-count`: the same strips, restored while their node's figures are still at opacity 0 (they come back by the 350ms fade of the node's figures).
- 390: `rehearsal failed: 2 lines`, both from the compact accordion, one fixed, one stands.
  - `loose stack: div.dd-port` fixed by joining the two ports into one tile.
  - `loose list: rows inside div.dd-canvas sit 160px apart for 41px of row` stands. It is the open step: while Sources, Clean or Demand signals work, their
    body is open between two folded headers, so the neighbours are one open body apart for about a second each. This is the accordion the compact design is made of
    (a run log that opens the working step), not a list with loose rows; at rest every header is 10px from the next. I considered the alternative (one detail
    panel under a fixed list) but did not build it: it swaps content in a slot, and it would need a taller stage.
  - `steps in its box` on the folded headers: cleared with a lasting layer (`will-change: transform`).
  - `settle snap 0.9px` on the Decision node in the first compact version: gone after the switch to the phone frame.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the content is illustrative. The confidence bar is new: it draws the 0.86 and the 0.80 threshold the source already states. The orange letter badge in the source's
toolbar became a plain workflow icon (an invented mark), and the sparkle on the LLM step became a trend icon (no sparkle as generic AI decoration). The low-confidence run
(0.62, to the planner) is not in the loop: it would be a second scene and take the loop past 16s.

Unresolved: whether the owner wants the low-confidence run as a second scene. The wide window's lower third is empty dot grid below the Sources node and the rail, which reads as canvas.

Not checked: frame rate and touch on a real phone, the loop inside the built page, the light theme, system font scaling, the fresh-eye review.
