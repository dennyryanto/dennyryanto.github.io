# Rehearsal: Chrona product (the Today card drafts and sends the plan)

Gold: `phone-touch` (phone pinned from the top, off the bottom; touch taps; a card that is one object) and `messages` (a button that works through states in one slot);
`device-pair` for the outcome card beside the phone. Kept: the kit `Phone`, `Collapse`, `Stream`, `States`, `Connector`, the touch cursor. Changed: the product's own look
(warm paper, coral, Archivo), the card that grows in place instead of an `Expand` to a second screen, the outcome card in the page's lime outside the screen.

Beats (about 13s): the Today screen opens on the card from the live site (Aulia turns 30 on Saturday, the crew looks free) ·
1 a tap on "Plan brunch with Aulia, Laurens and Putri" · 2 the plan drafts inside the card: when (Sat 11:00–13:00, from the free window), the message written word by word;
the button becomes Send invite · 3 a tap sends it: Sending, then Invite sent · payoff: the outcome card arrives beside the phone, Invite sent, in under 120 seconds,
plan on the calendar, tied to the button by a leader; held 2.8s · exit: leader and card leave, the draft closes, the button returns to its first state; the header, the
card and its people stay. The poster is the finished state.

Captured: wide 640 and 390 (compact), dark ground (the page board), reduced-motion poster at both widths, the exit at 120ms, two loops of the gate sheet at each width.

Compact design: the same phone with the top crop below the nav (status bar and the October 2026 row off the top), the outcome card over the calendar filler at the foot
with a short leader from the button. "Plan on the calendar" is dropped there for room.

Film:
- 390: `rehearsal passed`.
- Wide: `framing: div.ss-phone runs off the bottom but sits off center` stands. The phone is set left so the outcome card has the right-hand column; centring it would need a stage about
  740 wide and squeeze the lead copy. The card is narrower than 0.3 of the stage and straddles the phone's bezel (it covers no content), as in the LinkAja pilot. Every other wide line is cleared.
- `half-pixel glyph` on the button's icons: fixed by fixing the label boxes at an even width.
- `jump` on the button (about 2px) at each tap: the press feedback (a 2% scale). Left, it is the kit's own pressed state.
- `manual: same-box content change: ss-connector`: looked at in the exit and the arrival frames; the leader draws on after the card has settled, as meant.
- `loop seam: cursor does not end where it starts`: fixed by moving the finger to rest at the end of the script.

Aura glow (added later, at the owner's request): the old live card wore an animated coral light round its edge (`assets/img/4b0231e1fab5f6f6.webp`, 165 frames; read at frames 0, 20, 40 ... 164: a coral arc
about half the perimeter long, soft tail, travelling clockwise, with a faint halo outside the edge). Rebuilt in CSS on the AI card only: a registered `@property --cr-aura` angle animated 0 to 360deg every 7s, read by a
conic gradient that is a 1.5px masked ring above the card and, blurred 11px and thicker, a halo behind it (shows outside the edge only; absolute inside a wrapper that is the card's box, so no layout and no text
covered). Coral `#d4552e` / `#ec7b52`, never lime. On from the first frame. It settles when the button reads Invite sent: the halo fades out, the ring dims to 50% and the turning pauses where it is (the card has done
its job; the lime outcome card takes over), and it resumes when the button resets to its first state at the loop's exit. Loop beats and timing unchanged (about 13s). Reduced motion: no animation, held at 63deg
(the light on the upper left of the card), and the settled state keeps its full ring and 80% halo, because the still is the only frame those viewers get. Checked on the peach card at 700 and 390, at several points
of the loop (opening, drafting, send, settled) and in the reduced-motion poster at both widths. Film: no new line at either width (390 `rehearsal passed`; wide only the framing line above). Not checked: the aura's cost
on a low-end phone (the blur repaints as the angle turns), and `@property` in browsers without it (the ring then sits at its initial angle, static).

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the live screen has no place for the brunch and no drafted message. The message is written from the card's own words and the free window (Laurens 11:00–13:00),
there is no place row, and the "plan on the calendar" and "in under 120 seconds" strings come from the engine diagram's caption. The four faces are cropped from the live screenshot
(`assets/img/726fc9bd995db237.webp`), ring included, at 2x; they are the faces the live mock already shows.

Unresolved: the phone's coral is sampled by eye from the live screenshot (#d4552e), not read from the app's tokens. The tab bar and "New plan" button of the live screen are cropped off the bottom.

Not checked: frame rate and touch on a real phone, the loop inside the built page, other themes, system font scaling, the fresh-eye review.
