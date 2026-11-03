# Rehearsal: ESL shoe tracker

Gold: `stacked-cards` (two components at one width and left edge, the lower one run off the bottom) with the hanging label as the hero. Kept: one width for both,
the record's filler (its padding and closing brace) cut by the stage's foot, nothing else cut. Changed: the top card is a 1-bit e-ink shelf label on a rack edge;
the two are joined by a Connector labelled BLE.

Beats: 1 a cron tick lights the CRON RENDER chip on the record · 2 a line labelled BLE draws from the record up to the label · 3 the label does a full e-ink refresh
(black, then paper) with its life bar and the note under it gone · 4 the bar fills to 43% (342 of an 800 km cap) and "43% · 457 km left" arrives; the record's km and cap
lines light while it fills · payoff held 3.2s · the BLE line, the chip and the highlights leave in one stagger; the finished label stays, so the loop closes on its first frame.
Loop about 11s. Poster: the finished label with the line drawn and the chip lit.

Captured: widths 560 (wide, split layout) and 390 (compact, 358 stage), the board ground, reduced-motion poster, the loop as 36-frame gate sheets and a 10-frame sheet at 390.

Film:
- `uneven gutters` on the label and the record (a side-by-side layout, then a centered one) → fixed by the stacked layout: both are 22px from the sides at 560, and the
  record runs off the bottom. A first stacked version tried a record with the card's own width of 474 against a 560 stage and was flagged; the label is now 516 wide.
- `framing: runs only 23px past the bottom` → fixed by giving the record 60px of empty bottom padding so it runs well past; its four fields stay whole.
- `loose stack` on "SHOE LIFE · 800 KM CAP" over "43% · 457 km left" (35px apart with the bar between) → fixed: the note is positioned under the bar inside its track.
- `clipped: near aligned: span "JSON" and s "shoe" start 10px apart` → not gated, stands. The header label sits at the card's padding, the code lines are indented by one
  level on purpose.
- `rehearsal passed` at 560 and at 390.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: every figure is on the live case study (342 km, 800 km cap, 43%, 457 km left, Apr 16, 2026, Nike Alphafly Next% 2, Volt / Black / University Gold). The four JSON
keys are placeholders; only the fields the label reads are shown. The Python render step between the record and the line is not drawn; the chip names the cron, the line names BLE.
"One label per shoe" is not drawn as a rack of labels, because only one pair is documented. The rack edge is a plain slab, not a drawing of a shelf.

Unresolved: the label's refresh is two steps (black, paper) for legibility in a loop.

Not checked: frame rate and touch on a real phone, the loop inside the built page, the real Archivo and IBM Plex Mono, a light theme, the label beside the e-ink faces on one page.
