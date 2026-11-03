# Brief for whoever rebuilds a mockup

You rebuild existing portfolio mockups as looping Stageshow demos. The pilot, `components/linkaja-routing/`, is the reference for quality,
structure and how to report. Read it (index.tsx, routing.css, REHEARSAL.md) before you start. An advisor reviews what you hand back.

## Rules that decide the outcome

1. **Read the skill first.** `.claude/skills/stageshow/SKILL.md`, then `references/craft.md`, `framing.md`, `motion.md`, `rehearse.md`, `verify.md`,
   `kit.md` (the parts you use), `looks.md` and `products.md` when you draw a recognisable product. The gold examples are in
   `.claude/skills/stageshow/examples/`. The skill's bar is the product designer who is judged on the page: if yours is emptier, flatter or smaller
   than the closest gold, that is the first fix.
2. **Start from the closest gold example.** Copy its folder, keep its structure and crop, replace its content. Choose the layout from the table in
   `framing.md`.
3. **Keep what the owner decided** (`design/AUDIT.md`, read the sections it cites for your case):
   - Product colours stay inside product screens (LinkAja red, Dash yellow, Chrona coral, Garmin blue). Outside the screens: ink, warm grey, and the
     accent. The accent marks outcomes only. It is lime `oklch(0.9 0.2 122)`, set as `--ss-accent` on the stage. The two lab cases use instrument
     cyan `oklch(0.84 0.12 215)` instead.
   - Nothing under 11px on screen. Fonts: Archivo and IBM Plex Mono only (`--ss-font: Archivo, system-ui, sans-serif`; Georgia stays only where a
     restaurant mockup already uses it). No named typefaces in visible text.
   - The stage sits on the page's board ground `#1a1b1f` (`background: var(--xx-ground, #1a1b1f)`, and the review page sets the variable to
     `transparent`). No plate under the hero, no frame around the stage.
   - Use the existing copy and facts. Do not invent numbers, names or features. Where you must write placeholder words, keep them plain and few.
     Indonesian strings stay Indonesian.
   - The mockup is illustrative. Do not draw another company's real logo unless the existing mockup does; if it does, use `BrandMark` or the file
     already in the repo. No invented marks (a letter in a coloured square).
4. **One story per demo**, 10 to 16 seconds, three to five beats, a payoff that holds, a reset around an anchor. A looping stage needs no cursor:
   use one only when pointing is the story. Every motion has a cause. Read `motion.md`, Story and Loops, before you write the script.
5. **Every demo ships a `compact` design** at 358 wide if it can sit in a phone column (most do). A redesign, not a squeeze.
6. **Honesty.** Do not clear a film line by hiding, removing or marking the thing it points at. Fix the cause, or say in REHEARSAL.md exactly why a
   line stands. Say what you did not check.

## Where the current mockup is

- `design/sections/<name>.html` is the editable source of the mockups that live in the repo. Read the comment at its top for the story.
- Mockups captured from the old site (Dash, Lumio, Chrona, e-ink, shoe tracker, cockpit) exist only inside the built page. Serve the repo
  (`cd <repo root> && python3 -m http.server <your port + 100>`), open `index.html#<case id>` in headless Chromium, open the case's drawer by
  clicking its toggle, and screenshot or read the markup. Case ids: `linkaja`, `komunal`, `board` (Dash and Lumio), `ai`, `lab`, `lab-ui`.
  Do not edit `index.html` or anything under `assets/`.
- Playwright and Chromium are installed (`require('playwright')` works from any directory; Chromium is at
  `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`). Take screenshots a person will see at `deviceScaleFactor: 2`.

## Your workspace

You run in a git worktree on your own branch. First:

```bash
REPO=/home/user/dennyryanto.github.io
cp -al $REPO/design/stageshow/node_modules design/stageshow/node_modules
cp -al $REPO/.claude/skills/stageshow/node_modules .claude/skills/stageshow/node_modules
```

(Hard links, so no extra disk.) Put everything for a component in `design/stageshow/components/<id>/`:

```
index.tsx      default export the component; export const meta: Meta (see components/plan.ts)
<name>.css     all rules scoped under one root class, prefix of your choosing (see routing.css); @keyframes outside
REHEARSAL.md   the template in .claude/skills/stageshow/references/verify.md, Hand over; be specific
```

Small images or data URIs are fine inside your folder (keep a folder under 300KB). **Do not touch** `kit/`, `review/`, `harness/`, `plan.ts`,
`package.json`, `build_review.py`, another component's folder, `CLAUDE.md`, `index.html`, `assets/` or anything under `design/` outside your folder.
Use the id from your assignment as the folder name and as `meta.id`.

## Filming

Serve the harness on your port (restart it whenever you add a component folder, because the folder list is read at start; stop it by its PID, never
with `pkill -f`):

```bash
cd design/stageshow && (npx vite harness --config harness/vite.config.ts --port <PORT> --host 127.0.0.1 > $SCRATCH/vite.log 2>&1 &)
export CHROME_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome
cd ../../.claude/skills/stageshow
node scripts/film.mjs "http://127.0.0.1:<PORT>/?capture=<id>" --every 1000 --count 16 --out $SCRATCH/<id>-sheet.png   # the loop
node scripts/film.mjs "http://127.0.0.1:<PORT>/?capture=<id>" --reduced --still --out $SCRATCH/<id>-poster.png        # the poster
node scripts/film.mjs "http://127.0.0.1:<PORT>/?capture=<id>" --gate --out $SCRATCH/<id>-gate.png                      # wide
node scripts/film.mjs "http://127.0.0.1:<PORT>/?capture=<id>" --gate --width 390 --out $SCRATCH/<id>-gate-390.png      # compact
```

`SCRATCH` is a folder you make under `/tmp/claude-0/-home-user-dennyryanto-github-io/31078ba8-9fff-528a-a5ac-fbc4b64a04dc/scratchpad/<your name>/`.
Read every image you make (the Read tool shows PNGs). The machine has four cores shared with other agents, so filming reports "inconclusive: sampling
gaps" often; that alone is not a failure. `--gate` must end `rehearsal passed` at both widths, or each line it names must be fixed or explained.
Known false positives from the pilot are listed in its REHEARSAL.md. Typecheck with `cd design/stageshow && npx tsc --noEmit -p .`.

## Hand over

Commit only your folders on your branch (`git add design/stageshow/components/<id>`; message ends with the trailers in the system reminder if one
is given, otherwise none). Do not push, merge or open a PR. Your final message, short and plain:

- per component: the id, the story in one line, the loop length, and the gate result at both widths;
- what you changed from the old mockup and why, and any decision the owner should make;
- what you did not check or could not fix, and any film line that stands;
- the branch name and the absolute path of your worktree.
