# Brief: signature visuals for a design portfolio (technical line art)

Copy everything below the line into the image agent. It works with any
image-generation tool. Section 8 has tool-specific notes.

---

## 1. Your role and the job

You are an illustrator and art director producing a matched set of hero
images for the portfolio of Denny Ryanto, Head / AVP of Product Design. Each
case study on the site opens with one large "signature visual". You will
replace those screenshots with **illustrated visual analogues**: drawings
that express what each project achieved, without showing the product's UI.
The real numbers and screens stay in the page text and in a detail drawer
below each image, so your images never need to show them.

The six images must read as **one family**: same technique, palette, line
weights, camera and composition rules, as if one hand drew them all in one
sitting.

## 2. The style: fixed for every image

**Technique: technical line art.** Fine monoline drawing in the manner of an
engineering plate, a patent drawing or an instrument maker's diagram, drawn
in light ink on dark paper.
- Construction: precise geometry, true circles and arcs, parallel hatching
  used sparingly for the few surfaces that need tone.
- Vocabulary: graduated scales, tick marks, dimension lines with
  arrowheads, centre marks, leader lines, section cuts, exploded views,
  dashed hidden lines. All **unlabelled**: ticks and leaders with no letters
  or numerals.
- Line weights, at 2560px width:
  - primary outlines 2px
  - secondary and construction lines 1px
  - hatching 0.75px
  - Keep these identical across the set.
- Fills: none, or very low-contrast flat fills one step off the background.
  No gradients, glows, bloom, textures, grain, drop shadows or 3D rendering.

**Palette: exact values.**

| Role | Hex | Use |
|---|---|---|
| Background | `#161511` | Flat, edge to edge, no vignette, no texture |
| Primary line | `#d1cec8` | Main outlines (warm off-white) |
| Secondary line | `#797772` | Construction, hatching, scales |
| Faint line | `#4d4c47` | Grids and hidden lines |
| Accent | `#c8f23c` | Lime: **one element only** (see below) |

**The lime rule.** Every image contains exactly one lime element, and it
marks **the outcome**: the lowered needle, the path that now flows freely,
the part that changed. It covers 5% of the image area or less. Nothing else
is lime.

**Camera.** Use one of two projections and keep it consistent across the
set: a 30° isometric view, or a flat front elevation. No perspective
vanishing points and no dramatic angles.

**Composition.**
- Canvas 21:9, delivered at **2560 × 1097 px**.
- **Mobile-safe centre**: the key subject must sit inside the central 4:5
  area (about 878 × 1097 px, horizontally centred), because phones crop to it.
- Keep at least 8% clear margin on every edge.
- The outer thirds may hold supporting construction lines, scales or a
  secondary detail, but nothing essential.
- Generous negative space: the drawing should occupy roughly 35–55% of the
  canvas.

**Mood.** Calm, precise, quiet confidence. Clever but not cute, and never
cartoonish.

**Never include:**
- text, letters, numerals, logos or brand marks
- screens, phones, laptops, UI or dashboards
- people, hands, faces or silhouettes
- photographs or photoreal rendering
- emoji-like icons, clip-art, stock metaphors (light bulbs, rockets,
  handshakes, puzzle pieces, gears as decoration)
- colour other than the five values above

## 3. The cases: facts to draw from

Use these facts to invent the metaphors. Do not put the numbers in the
image.

1. **LinkAja**, Indonesia's national e-wallet, 70M+ users.
   - Customer-service operating cost fell by about 80% after self-service
     security and account flows replaced agent tickets.
   - About 72% of cases are now resolved automatically by intent-routed chat.
   - The sensitive ~28% go to a human agent with full context attached.
   - Also co-led the home-screen redesign for 70M+ users.
2. **Komunal / DepositoBPR**, a regulated deposit marketplace.
   - Created the company's first shared design system, one source of
     components and tokens for Product, Engineering and Marketing.
   - Moved web delivery from a legacy platform to Framer: release cycles went
     from weeks to days.
   - Deposit-funnel completion rose about 12 percentage points.
   - Fully ISO / OJK compliant.
3. **Dash · Lumio**: founder, VP of Design, now commissioner on both boards.
   - Dash: B2B restaurant ordering (table ordering, kitchen, captain and
     POS) live across 30+ chains, about 200K customers a month.
   - Lumio: a digital-signage network across 150+ locations.
4. **Independent: AI-native design practice.**
   - Builds data-to-decision workflows for enterprise AI.
   - Runs multi-agent design-to-code builds.
   - Designed Chrona, an AI social planner that drafts plans with friends.
   - Coaches designers to work with AI.
5. **Lab · e-ink athlete panel.** A self-hosted service turns daily Garmin
   training data into a 1-bit e-ink brief on the nightstand: zero power to
   hold the image, readable in daylight, refreshed on a schedule.
6. **Lab · Garmin cockpit concept.** A redesign of Garmin Connect that reads
   training data like an aircraft instrument panel: dark glass, fine
   graduated scales, one pointer that always means "you, now".

## 4. Three directions to test

- **A · Metaphor object.** One invented instrument or object that embodies
  the outcome. It is not a literal picture of the product. Think of a precision
  device an instrument maker might build to show what changed.
- **B · Environment.** The place where the work changed something, drawn as
  an empty technical elevation or section: a floor plan, a counter, a room, a
  route. No people and no screens.
- **C · Sculptural data.** The core mechanism or change as an abstract,
  measured structure: flows, channels, stacked forms, splits, before and after
  states.

## 5. Round 1: direction test, LinkAja only

1. For **each** direction (A, B, C), propose **three** metaphors for
   LinkAja. Give each one line, plus one line on how it maps to the facts
   (cost drop, self-service, intent routing).
2. Pick the strongest metaphor per direction and say why in one sentence.
3. Render **2 variants** of each chosen metaphor: **6 images** in total,
   all to the style in section 2.
4. Present them grouped by direction. For each image give:
   - the file name
   - a one-sentence rationale
   - the exact prompt you used
   - which single element is lime, and why it is "the outcome"

Then **stop and wait** for a choice of direction and variant.

## 6. Round 2: the full set

After a direction and a winning LinkAja variant are chosen:

1. Treat the winning image as the **style master**. Use it as a reference
   image or style reference for every other image, and quote its prompt's
   style section word for word in each new prompt.
2. Propose three metaphors per remaining case (cases 2–6) in the chosen
   direction, pick one each, and render **2 variants** per case.
3. Lay out all six chosen images side by side and run the consistency
   checklist in section 7 across the whole set before delivering. Re-render
   any image that breaks the set.

## 7. Delivery and checks

**Files.**
- PNG, sRGB, 2560 × 1097.
- Named `sv-{case}-{direction}-{variant}.png`, for example
  `sv-linkaja-a-1.png`. Cases: `linkaja`, `komunal`, `dash-lumio`,
  `independent`, `eink`, `cockpit`.

**Check every image before delivering:**
- [ ] Background is flat `#161511` at all four corners and edges (sample
      them)
- [ ] No letters, numerals, logos, screens, people or hands anywhere
      (zoom in on the scales and ticks)
- [ ] Exactly one lime element, at 5% of the area or less, and it marks the
      outcome
- [ ] Only the five palette colours appear
- [ ] Line weights match the style master
- [ ] The key subject sits inside the central 4:5 safe area; the 8% margins
      are clear
- [ ] Same projection (isometric 30° or elevation) as the rest of the set

If the tool cannot hit exact hex values, keep the background perfectly flat
and uniform so it can be colour-corrected afterwards, and say so.

## 8. Tool notes

- **Midjourney**:
  - Add `--ar 21:9 --style raw --stylize 50`.
  - In round 2, add `--sref` with the round 1 winner's URL and keep
    `--sw` high.
  - Put the "never include" items in `--no`.
  - Upscale to 2560px wide.
- **ChatGPT / GPT image** and **Gemini / Imagen**:
  - Attach the round 1 winner as a reference in round 2 and say "match the
    reference's line technique, weights, palette and camera exactly; change
    only the subject".
  - Restate the no-text rule in every prompt.
- **Any tool**:
  - Open each prompt with the style block (section 2, condensed) and
    follow it with the subject.
  - Keep the subject description concrete: name the object, its parts and
    which part is lime.

**Per-image prompt template:**

```
Technical line-art illustration, engineering-plate style, fine monoline,
light warm off-white lines (#d1cec8, secondary #797772, faint #4d4c47) on a
flat #161511 background, edge to edge. 30° isometric [or: front
elevation]. Unlabelled graduated scales, tick marks, dimension lines and
leader lines; sparse parallel hatching; no gradients, no shading, no
texture. Exactly one element in lime #c8f23c: [THE OUTCOME ELEMENT].
Subject: [OBJECT / SCENE / STRUCTURE, its parts and how they relate].
Composition: 21:9, subject centred inside the middle 4:5 area, generous
negative space, 8% clear margins. No text, no letters, no numbers, no
logos, no screens, no UI, no people, no hands, no photorealism.
```
