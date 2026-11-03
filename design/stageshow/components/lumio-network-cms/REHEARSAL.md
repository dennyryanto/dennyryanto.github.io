# Rehearsal: Lumio network and CMS

Gold: `overlap` (a front object whose edge crosses the window's edge over empty padding only) with `many-of-one` for the stepped column of location photos running off the stage. Kept: the CMS Screens page (stats, tile
names, campaign names, resolutions, uptimes, ONLINE badges), the location photos with LIVE badges, names and kinds, the creatives the old Lumio network cycled through, the navy sidebar and blue accent inside the CMS, the
repo's Lumio logo SVG, resized copies of the photos in `img/`. Changed: the old drawer's two figures (CMS, network) are one, so the screens answer the CMS; the CMS is a real window; the stat cards lost
their small charts; the tile grid is three columns and shows two rows.

Beats: 1 two campaigns are playing (Senopati on the highway billboard, Kelapa Gading in the supermarket) · 2 the manager picks Gatot Subroto and the highway billboard crossfades to that car creative ·
3 picks Premium Supermarket and the supermarket screen crossfades to the produce creative · 4 picks Kelapa Gading and Senopati again, which puts both screens back. Each creative is also the photo on its tile, which is what ties
tile to screen. Loop about 15s. The poster is both screens changed. At 358 wide only the highway beat runs (Senopati, Gatot Subroto, Senopati), about 11s.

Captured: widths 1100 (wide) and 390 (compact: the CMS row that changes on top, the highway card below, both off the right edge), dark ground, reduced motion (poster = both changed), the loop and the seam, the
reset clicks.

Film:
- `rehearsal passed` at both widths.
- First wide version failed `framing: runs off the bottom but sits off center` and a twin-satellite line: fixed by letting the first location card cross the window's right edge over the window's empty right padding, and stepping the
  others right so the three do not stack at one edge. Real words are whole everywhere; the third card shows only its photo and LIVE badge above the bottom crop, its name is below the crop.
- First compact version failed four `framing` lines (a card and a window stacked with different gutters): fixed by putting the CMS on top at the 16px gutter and the card under it, both off the right edge over page margin and photo only.
- `layout: div.lm-page leaves -39px below its last child` (wide): the page continues below the window, which is cropped by the stage; not a never-intentional line.
- `near aligned` lines (ONLINE against names, LIVE against place names): fixed by sharing one inset; a few flagged earlier were removed.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the three locations are Highways, Supermarkets and City Streets; Public Transport is left out for room. "Picking" a tile publishes its campaign to its screen: the drawer has no publish control, so the click on the
tile stands for it and no new string is added. The old network cards crossfaded their creatives on a timer; here a pick causes the change.

Unresolved: the stat cards' labels run to two lines at the CMS's width (DISPLAYS / ONLINE and so on); they keep their words but not the old one-line look. The compact design drops the supermarket and city cards and the second beat.

Not checked: frame rate and mouse behaviour in the built page, the light look, the cursor against the real 1160px board width (the stage is designed at 1100).
