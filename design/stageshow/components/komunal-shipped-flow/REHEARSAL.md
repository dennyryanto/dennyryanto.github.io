# Rehearsal: Komunal, the shipped DepositoBPR flow

Gold: `phone-touch` (one phone in true points, touch cursor, in-app responses at UIKit speed, a loop that closes by putting the app back) and `payout-flow` for the reading time on
the payoff. Kept: the kit `Phone` at design size with the screens laid out in points, the touch cursor with press feedback on `data-target`s, the stage on the page's board ground, a compact design at 358.
Changed: four static phones became one phone; the screens are pushed (list to amount to instructions) and the success screen is a cover that slides up; DepositoBPR's blue stays inside the screens.

Beats: the product list (0.6s) · 1 a tap on the BPR Artha Sejahtera card pushes the amount screen · 2 a tap in the field, nine digits are typed, and the amount is checked as it goes: the Rp500 jt warning
opens, RTGS is chosen and recommended, the other three rails dim and take the heading "Tidak tersedia untuk Rp750 jt", the CTA becomes solid · 3 a tap on "Lanjut ke instruksi" pushes the instructions;
the countdown ticks twice, nothing is locked · 4 the waiting ring turns to a tick (the funds are detected without a tap) and the success screen comes up, its total counting up to Rp 790.500.000 · payoff held about 2s ·
a tap on "Kembali ke Beranda" slides the cover away over the list. Loop about 16s. The poster is the success screen.

Captured: widths 400 (wide design, 340 phone) and 390 (compact design, 326 phone), dark board ground, the poster at both widths, a 1s sheet of the whole loop at 390, the check beat at 100ms.

Film:
- `--gate` at the wide design and at 390: `rehearsal passed` both times. Both runs are "inconclusive: sampling gaps" (the machine is shared and slow while filming; the first scans ran at about 60ms intervals).
- `layout: div.kd-ok / div.kd-card.kd-sum leaves -204px / -281px below its last child` → stands. The success screen is parked below the phone while it is closed (`translate3d(0, 100%, 0)`), so the check measures its
  content against a window it is not in. On its own frames (the poster, the payoff) the same elements sit with their padding intact.
- `near-empty frames` (49 of 532 elements, 3 times in the loop) → stands. It is the success cover, which is opaque and covers the whole screen while it is up, so the elements beneath are not visible. It is the intended handoff.
- `jump:` / `settle snap:` on the screens at the dismissal → stands. The flow (list position, typed amount, warning, rails, countdown) is put back with `act.snap` while the opaque cover hides it, and the cover then leaves.
- `clipped:` lines on the screens parked at the right of the phone (the next screens in the push): they are outside the phone's window until pushed.
- `uneven padding` on the list's tab bar, `half-pixel glyph`, `touching` (the Rp beside the counting total), `lands on a transform`, `uneven: svg runs into the padding of the nav`, the text overlap of the warning during its opening →
  fixed (tab bar insets, even-sized icon boxes, a fixed gap, will-change on the card and the CTA, the back arrow's negative margin removed, the warning opening as clipped text rather than a dropping card).

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions:
- All drawn strings are the old ones (design/sections/komunal-shipped-flow.html). Added: a product-list card for BPR Artha Sejahtera, the bank of the flow, which the old list did not show (it listed Mitra Usaha Anda,
  Sahabat UMKM and Kita Centradana). It carries only strings from the flow ("12 Bulan", "6,75%", "ARO", the bank name); its minimum amount and its second line are placeholder bars. The card for BPR Kita Centradana is not drawn.
- The bank avatars (the "BD" mark and the sharia mark in the old list) are a plain building glyph, so no bank mark is redrawn.
- The success screen is a cover, and "Kembali ke Beranda" returns to the product list, because there is no Beranda screen in the source.
- The old caption strings ("1 Pick a product" to "4 Deposit active") are not drawn; the flow carries its order itself.
- The old block's tab bar is drawn with Lucide icons (a house for Beranda, the "Rp" tile for Produk, a wallet, a person), one set; the old block used its own glyphs.
- Capital-letter small labels (the old "NOMINAL PENEMPATAN" and similar) are sentence case, so every line can be 13.5pt or more at the phone's size.

Unresolved: the placeholder bars on the Artha card (minimum amount and place), which the owner should replace with real values if there are any. The instructions screen is the densest: it is full to its foot.

Not checked: frame rate on a real phone, the loop inside the built page, the light theme, Indonesian text at a larger system font size, the typed amount against a real keyboard (no keyboard is drawn).

Note after the site port: the wide design (400) is below `compact.below` (560), so the stage always draws the compact (358) design; the film runs above were taken in that state. See design/AUDIT.md, "Stageshow demos in the site".

Update 2026-11-06 (redrawn from the live app's screenshots, see design/AUDIT.md "Komunal in the live app's type and colours"):
the phone is the kit's `android` frame (status bar drawn inside each screen), screens at 412 wide; the first screen is the Detail BPR
page with product cards (a tap on the 12-month card), the old product list and its tab bar are gone; Poppins and Mulish and the app's
palette replace Archivo and the old blue; the success screen is a gradient header with the sheet over it. Same beats, strings and
loop. Re-checked: the four beats and the poster in the harness at 358 and 900, and in the built page (no console errors, both
fonts loaded). The rehearsal gate (`--gate`) was not re-run after the redraw. Placeholders: the BPR's city and its product cards.
