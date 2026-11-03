# Rehearsal: Dash table app (iPad ordering)

Gold: `hero-demo` for the gesture story (a cursor does one satisfying thing and the result appears under its hand) and its corner-bleed crop; `phone-touch` for the
touch cursor. The kit has no tablet frame, so the iPad is a plain CSS bezel (see Assumptions). Kept from the old mockup: the restaurant, every string and price, the six
dish photos (resized copies in `img/`), the yellow inside the screen, Georgia on the wordmark and dish headings only, the ADDED pill, the order bar. Changed: the tablet
is cropped off the top and right (whole at the bottom-left with its rounded corner) so the type reads at its real size; the diner now also presses Send to kitchen,
which the old mockup never did; the stage sits on the page's board ground.

Beats: 1 the diner taps Margherita (touch press on the card) and it is marked ADDED · 2 the order bar rises with `1 ITEM · IDR 85` · 3 the diner presses SEND TO KITCHEN ·
payoff: the bar steps from yellow to a dark settled state and its label swaps to a check and SENT TO KITCHEN, held 2.6s · exit: the bar leaves, then ADDED clears.
Loop about 11s. The poster is the sent order.

Captured: widths 640 (wide design) and 390 (compact design: a different crop, 2 dish columns, the bar spanning the screen), dark ground, reduced motion (poster = the sent
order), the send press at 120ms and at `--slow 6 --every 40`, the opening and the loop seam.

Film:
- `rehearsal passed` at both widths.
- `uneven: img runs into the bottom padding of div.dt-ipad` (wide, every frame) and `clipped:` on the same image before `data-crop`: the second row of dish photos runs off the
  bottom of the screen like a scrolling menu. It is faded by a mask over the last 64px and the screen carries `data-crop`. Deliberate, not hidden: the photos are filler, no word is cut.
- `vanishes with no exit: span.ss-swap__in "SEND TO KITCHEN →"` (both widths, at real speed): at `--slow 6 --every 40` the label fades over the swap with no jump; the line comes from
  sampling gaps (inconclusive coverage) and does not appear in the slowed film. Left as is.
- `near aligned: TRATTORIA and STARTERS` (header, off stage above the crop) was fixed by aligning the brand to the category column; it is not on stage anyway.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the iPad is a hand-drawn bezel (black glass, 12px, a hairline rim) because the kit has none; the header, MY ORDERS badge and left categories follow the live mockup but the header sits
above the crop. SENT TO KITCHEN is the one new string (the sent state needs a word). The MY ORDERS badge fills on ADDED but is off stage in the crop, so it carries no beat.

Unresolved: the crop hides the restaurant wordmark (TRATTORIA FIORELLA) and the MY ORDERS badge; the yellow category tile, Georgia headings and the dish photos carry the identity. Owner call: crop lower
to bring the wordmark in (the bar then has less room) or keep it.

Not checked: frame rate and touch on a real device, the loop inside the built page, other looks (light), the real iPad's proportions beside the old bezel.
