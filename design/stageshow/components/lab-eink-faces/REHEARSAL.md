# Rehearsal: Garmin Daily Brief on the 7.5-inch e-ink panel

Gold: `static-card` for the hero and its one satellite (the face label straddles the bezel's lower edge, over chrome only); `close-up` for the idea that the
panel is drawn at its own scale (800x480 at 1:1, 0.815 in the compact crop). Kept: one device whole on the board ground, one satellite, the quiet hierarchy.
Changed: the screen is a 1-bit panel (ink `#0f0f0e`, paper `#ebeae5`, one grey `#a09f99`, no cyan inside it); the story is a refresh with a visible cause.

Beats: 1 Face 1 holds while a cyan line under the panel fills (the interval to the next refresh) · 2 the line is full, the panel flashes black, then paper, and Face 2
is under it · 3 Face 2 holds while the line fills again · 4 a second refresh brings Face 1 back. The header band and the footer stay, the body changes. Loop about
11.5s; the seam is a refresh too, so nothing rewinds. Poster: Face 1 with the line part full.

Captured: widths 944 (wide) and 390 (compact, 358 stage), dark ground (the stage sits on the page's board), reduced-motion poster, the loop as 36-frame gate sheets
at both widths, the two refresh flashes at 500ms in the sheets.

Film:
- `uneven padding` on `div.ei-screen`, `div.ei-faces`, `div.ei-mid`, `div.ei-sidecard`, `div.ei-metric` (header content 7px from the top, rows 10 to 11px from an edge,
  metric card 6px from its foot) → fixed, not explained. The header went to 92px, the body to 330px, the cards got 13px of top padding and 16px under their last line.
- `framing: ... cut by the crop` at 390 (footer "LOAD", Face 1's header third block, Face 2's calendar) → fixed by laying the compact crop out to the second card's edge:
  the header columns are 200/200 in the compact design, Face 2's calendar moves to the first column there, the footer packs left. The panel is whole in height at 390 and
  cut only at its right edge, on a card boundary.
- `loose stack` on the weekly bars' value and week label (53px apart) → fixed: the value sits on its own bar, positioned above it.
- `appears with no entrance` / `vanishes with no exit` on the two faces → fixed: they crossfade over 0.2s while the black flash covers the panel.
- `appears, then moves: i is fully visible with 96% of its travel still to go` (the refresh line): stands. The line is a progress fill; its track is always there and the
  fill grows from 0 for 4.6s, linear. It is not an object arriving.
- `jump: i width +3.6px` (the pager): stands. The pager segment is 14px; the film reads the active segment swapping colour with the face as a width step. Nothing resizes.
- `uneven:` and `near-tangent:` on the panel's hairlines and header block padding: not gated. The panel is a screen, not a card: its cells share 1.5px rules by design.
- `rehearsal passed` at 944 and at 390 (the last runs after the final edit).

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: both faces come from the two photographed panels on the live case study (text read off the photographs). The header band and footer are shared by the
faces, as they are in the renderer. Face 2's calendar shows today as 21 May (the header's date) so the faces agree; in the live photo Face 2 says 22 May and rings the 22nd.
"HR 14" on the photographed treadmill line is cut off in the photo, so the line stops at "51:02". The face names under the panel are the live captions.

Unresolved: the e-ink flash is two steps (black, paper); a real panel flashes more than once. Kept to two so the loop reads in a thumbnail.

Not checked: frame rate and touch on a real phone, the loop inside the built page, the real Archivo and IBM Plex Mono (this machine falls back to Inter and DejaVu Sans Mono,
so widths are a little narrower than the page will draw them; the panel has slack of about 8%), a light theme, Face 2 at the wide width beside a camera push-in.
