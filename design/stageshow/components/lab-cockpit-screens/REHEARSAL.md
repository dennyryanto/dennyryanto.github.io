# Rehearsal: Garmin cockpit concept, four glass screens

Gold: `tilted-stack` for the idea of one object in several layers with the front one the only one that is read, and `stacked-cards` for the run-off at the foot. Built as the
live drawer's own fan (a `preserve-3d` stack: translateX 62% steps, translateZ -170px steps, rotateY -8 then -32 degrees, a dimmer filter with depth) so the owner's fan
decision stands. Kept: front screen readable, the others dimmed in depth, the stack running off the bottom. Changed: the swipe has a seen cause and the loop has no reset.

Beats: 1 the front screen holds and a thin cyan line under the caption fills over 2.5s · 2 the line is full, the front screen swipes up and out · 3 it rejoins at the back
while the others move up one slot and the caption turns to the next screen's words · repeat for four screens. Four swipes bring the fan to its first order, so the loop
closes on the opening frame with nothing reset. Loop about 14.5s. Poster: Home, at a glance, at the front with the line part full.

Captured: widths 960 (wide) and 390 (compact, 358 stage), the board ground, reduced-motion posters at both widths, the loop as a 20-frame sheet at 450ms and 36-frame gate
sheets at both widths.

Film:
- `framing: ... ends N px short / runs only N px past` on the back screens at 390 → fixed. The checker takes the front screen's top gap as the gutter, so in a first version
  with the words above the fan the gutter read as 200px. The compact design now puts the fan at the top (24px gutter), runs it off the bottom behind a caption foot, and keeps
  every back screen either 18px or more inside the right edge or well past it.
- `satellite div.ck-copy sits 0px from the left edge` → fixed: the caption foot is a full-width footer band with a hairline border instead of a shadow, so it is not a satellite.
- `phone cut on the left (26px)` during the swipe at 390 → fixed: in the compact design the swiped screen leaves straight up (32px) instead of up and left.
- `rehearsal passed` at 960 and at 390.

Review: the fresh-eye review (`references/review.md`) was not run in this session.

Assumptions: the screens are the four 780x1688 concept images from the live site (`assets/img/3f70b3f31ada682f.webp`, `d3cc19609238a8bc.webp`, `668b175521f00b32.webp`,
`851336f1b2e9a8f2.webp`), re-encoded at 600x1299, quality 80, about 160KB for the four (the folder is 176KB). The kit's bare phone only rounds and shadows them; it draws no status
bar or island over them. The captions and the not-affiliated note are the live site's own strings. The fan's four screens and their order are the live fan's.

Unresolved: at 390 the back screens show about 40px each; they read as a fan but not as screens. The compact design leans on the front screen. The three isometric close-ups
on the live drawer are not rebuilt here.

Not checked: frame rate and touch on a real phone (the swipe uses CSS 3D transforms with `will-change`; text in the screens is bitmap and looks slightly soft while a screen is in
motion), the loop inside the built page, the real Archivo and IBM Plex Mono, the live site's hover, key and click stepping (this is a looping scene, not the interactive fan).
