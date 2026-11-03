# Rehearsal: Dash captain app and back office

Gold: `overlap` for the composition (a smaller object in front of a window, its edge landing on the window's sidebar) with `device-pair`'s idea of two devices telling one system.
Kept: both screens' strings, tables, states, battery levels, the menu item and its modifiers, the Dash marks (the repo's own SVGs), the blue/amber/green inside the captain app, the navy
back-office sidebar, the steak photo (resized copy). Changed: both are rebuilt at a size where 11px+ type reads; the back office is a real Window with its own bar (breadcrumb, Preview,
Save changes) and the captain is an iPad in front; the loop tells one story.

Beats: 1 table 02 calls (its card turns amber, the CALLING pill swaps in, the halo pulses three times, the Calling tab rolls 1 to 2) · 2 the captain taps 02 and it clears (tab back to 1)
· 3 the captain taps table 11, the call that was already waiting, and it clears (the tab badge goes) · 4 a new call arrives at 11, which is where the loop began.
Loop about 14s. The poster is the call raised, with 11 already calling.

Captured: widths 1100 (wide design) and 390 (compact: the tablet alone, held in portrait with 3 columns, because 4 columns do not fit 358 without slicing a card), dark ground, reduced motion,
the answer beat, the loop and the seam. Table 11's halo pulses all the time, as it does in the old mockup.

Film:
- Wide `uneven gutters: div.cb-ipad sits 24px from the left, 576px from the right and 28px from the bottom` stands. The tablet is a satellite straddling the back-office window's left edge, laid over the window's
  sidebar; the check only waives a satellite whose centre lies over another surface. Moving the window under its centre would hide the form's labels. This is the same line the pilot explains.
- `near aligned` lines (table numbers against VACANT labels, Menu Items against AVAILABLE): centred card content and two unrelated columns; not on one reading edge.
- `uneven padding` on the table cards: fixed by raising the tablet to 412px tall so each card holds 17px above and 16px below its content; none left.
- `jump` on table 11 at the answer press: fixed with a transition on the press scale. `half-pixel glyph` on the battery: fixed with a fixed even width.
- `rehearsal passed` at 390. At 1100 the gate fails only on the gutter line above.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the iPad is a plain CSS bezel (no tablet frame in the kit). The sidebar of the back office is mostly under the tablet, so only the top strip with the traffic lights and a sliver show; its
labels (Dashboards, Devices, Menu Items, ...) are in the markup but hidden by the overlap. The unused string JUST VACATED (table 05 in the old mockup) is not shown: it did not fit a 100px card and
belonged to a second story.

Unresolved (owner decision): the drawer shows no data passing between the captain app and the back office, so none is drawn. The back office is still context, the same restaurant (Trattoria Fiorella,
Kemang) and the menu the tables order from. If you want the link animated, say which change should travel (a menu item switched off, a device going offline) and it becomes a second beat on the laptop.

Not checked: frame rate and touch on a real device, the loop inside the built page, the light look.
