# Rehearsal: LinkAja home screen as it ships today

Gold: `phone-touch` for the phone (one phone, true points, touch-sized type) and `phones`/`static-card` for how little needs to move. Kept: the kit `Phone`
at design size with the screen laid out in points, the stage on the board ground, a compact design at 358. Changed: no card, no wash, no cursor (nothing is being
pointed at), the product's own look inside the screen, and the story is a calm carousel instead of a card opening.

Beats: the finished home on banner 1 (1.5s) · 1 the promo area advances to banner 2, the page-dot pill follows · 2 on to banner 3 · 3 on to a copy of banner 1 at the
end of the track, so the loop continues forward · the snap back to the start swaps two identical frames. Loop about 14.5s. The poster is banner 1, the screen as it is
in the app. No cursor: the advance has a cause the viewer knows (a banner area rotating by itself) and nothing is being pointed at.

Captured: widths 400 (wide design, 340 phone) and 390 (compact design, 326 phone), dark board ground, reduced motion (poster, both widths), the wrap and the dot pill
in a 150ms sheet.

Film:
- `--gate` at the wide design and at 390: `rehearsal passed`. Both runs end "inconclusive: sampling gaps" (the machine is shared); that alone is not a failure.
- `jump:` and `settle snap:` at the wrap (about 15.4s): stands. It is the intended reset: the track holds a copy of banner 1 after banner 3, the loop scrolls onto the copy,
  and `act.snap({ i: 0 })` moves the track back by exactly one copy while the two frames are identical (same banner, same dot). Nothing is hidden or marked; the finding is the swap itself.
  I looked at the frames either side of it in the 150ms sheet and found no change.
- Three banners (2 and 3 invented): the gate again passes at the wide design and at 390. A first version drew the coins and bills as child elements, which raised `uneven padding` on the banner (art cut by the
  banner's edge); moving the art into the background, as banner 1 does, cleared it. The wrap `jump:` lines now list the extra banner elements (all at the same +804px swap between two identical frames, see below); no other new line.
- `clipped:` on "top up jadi gampang" (banner 2's line, offscreen in the track at the start and cut by the promo edge as it slides): the same carousel-edge line as banners' lines below.
- `clipped:` on the third balance card ("MyPaylater", "Aktifkan") and on the banner lines of banners 2 and 3 (offscreen in the track): the balance cards are a horizontal scroller whose third card
  is cut by the hero's edge on purpose, with its words whole; the banner lines are in the next banners, cut by the promo area as in any carousel.
- `uneven padding` (hero, banners, tab bar), `onion skin` (banner discs), `small text` ("Baru" at 8.4px in compact) → fixed: the banner discs are drawn into the banner's own background in opaque
  colours, the Bayar button is a sibling of the tab bar rather than a child pulled up out of it, the hero pads 20px on top and left, and every small line is 13pt or more.
- `framing:` / `uneven gutters`: did not appear. The phone is whole, 24px from the top and the foot of the stage, because the shell and the tab bar (with the Bayar button) are part of what ships; a crop through
  the tab bar would cut a control.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the street illustration, the wordmark tile ("Link Aja!" as drawn in the old mockup) and all the strings come from `design/sections/linkaja-home.html`. The icons are Lucide, one set at one stroke
weight; the old block's hand-drawn glyphs and the agent face are replaced by the set's Headset, Heart and service icons (the headset icon was asked for; the face was my reading of "agent icon" in the old block).
The coin on AKHLAK Poin loses its letter. LinkAja's real mark is not in the repo, so the wordmark tile stays as the old mockup drew it.
Banners 2 and 3 had no copy in the source (art and a placeholder line pair). At the owner's request I invented them, in banner 1's voice and layout: banner 2 "Isi saldo kapan aja, langsung dari HP" / "top up jadi gampang" (orange,
three coins, Lucide Wallet in the tile with a plus badge); banner 3 "Semua tagihan di satu tempat" / "dari listrik sampai internet" (deep red, three tilted bills, Lucide ReceiptText with a check badge). The copy makes no claim of
figures, prices, dates or partners; no brand mark. The art is flat shapes in the banner's own tints, drawn into the banner's background as an SVG (`art.ts`) like banner 1's discs. They are placeholders for the owner to replace
with the real banners; `meta.notes` says so. Banner 2's gradient is a little deeper than before (#dc3a1f to #f2802b) so the white copy keeps contrast.

Unresolved: the promo copy of banners 2 and 3 is invented and should be replaced by real banners. Banner lines are the one place where bars sit where the eye lands.

Not checked: frame rate on a real phone, the loop inside the built page, the light theme, Indonesian text at a larger system font size, the review page at 1120 wide beside its caption.

Owner request after review: the Bayar button shows the QRIS logo instead of a generic scan icon. Source: Wikimedia Commons, "QRIS logo.svg" (retrieved 2026-11-03), cropped to the mark, editor metadata removed, shown white on the red button at 44px wide. Trademark of its owner; replace with the official asset if available. Not re-gated after this change (one image inside an existing button).

Note after the site port: the wide design (400) is below `compact.below` (560), so the stage always draws the compact (358) design; the film runs above were taken in that state. See design/AUDIT.md, "Stageshow demos in the site".
