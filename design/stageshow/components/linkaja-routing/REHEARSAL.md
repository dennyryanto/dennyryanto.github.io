# Rehearsal: LinkAja intent routing in chat

Gold: `messages` for the phone (top and bottom bleed, composer, `Thread` and `Bubble`, typing that grows into the reply) and `device-pair` for the satellite
(a phone with a smaller second surface). Kept: the phone's crop, the Thread glide, the kit's bubble geometry. Changed: the product's look (LinkAja red bubbles,
white replies), the stage ground (the page board), a second surface (the agent queue) joined to the chat by a leader, and a loop that resets around its anchor.

Beats: 1 the resolved limit case is on screen (a finished still) · 2 the fraud message arrives · 3 its intent is classified · 4 the reply types, then grows ·
5 the case lands in the agent queue and its three attachments tick on · 6 the agent joins the chat · payoff: a leader ties the agent's line to the case, held 2.8s ·
exit in one reverse stagger, the resolved case, composer and queue stay. Loop about 12s.

Captured: widths 598 (wide design) and 390 (compact design, phone only, no queue), dark ground (the stage sits on the page's board), reduced motion (poster = the
finished state), the exit beat at 120ms, the opening and the loop seam.

Film:
- `uneven gutters` on `div.ss-phone`, `framing:` → fixed. The phone now bleeds off the top and the bottom (`bottom: -30px`), so the composer sits 32px above the edge.
- `uneven gutters` on `div.lr-queue` → fixed. The satellite is narrower than 0.3 of the stage and straddles the phone's bezel only, over no bubble.
- `fat row` on the 3-line replies → fixed by keeping every reply to one or two lines.
- `settle snap` 3.6px after the reply grew → fixed. It was a three-line reply; a one-line reply grows without the step (the gold messages example is one line).
- `jump` on the connector at the agent's arrival and at the exit → fixed. It links the agent's line (which never moves) and fades before the thread collapses.
- `steps in its box`, `lands on a transform` → fixed with a lasting layer (`will-change: transform`).
- `manual: same-box content change: ss-connector` at 6.2s → looked at: the line draws on from the agent's line to the case row, as meant.
- `rehearsal passed` at the wide design and at 390.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the copy is illustrative. The intent labels, the queue and the attachment names come from the site's own section; the replies are shortened to one or two lines.
The queue is generic; it is not a screen from LinkAja's real agent tool.

Unresolved: the top of the chat fades under the stage edge, so an earlier question ghosts at the top of the poster. It reads as a scrolling chat, but it is the first thing to judge.
The opening shows about 90px of empty screen above the date stamp.

Not checked: frame rate and touch on a real phone, the loop inside the built page, the other looks (light theme), Indonesian text at a larger system font size.
