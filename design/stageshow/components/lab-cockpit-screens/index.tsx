import { Phone, Stage, States, type Act } from '../../kit'
import './cockpit.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'lab-cockpit-screens',
  case: 'Lab',
  title: 'Cockpit screens',
  head: 'GARMIN CONNECT CONCEPT · FOUR SCREENS',
  note: 'PERSONAL CONCEPT',
  lead: 'Dark display glass, fine graduated scales and one pointer that always means you, now. Four concept screens, the front one swiped to the back in turn.',
  layout: 'full',
  stageWidth: 960,
  notes: [
    ['The fan is the live site’s fan.', 'Four glass screens in depth, the front one swiped off and rejoining at the back, as the drawer does every 4.5 seconds. Here the swipe is caused by a thin line under the caption that fills over the hold; four swipes bring the fan back to where it started, so the loop has no reset.'],
    ['The screens are the real concept screens.', 'The four 780×1688 images from the site, re-encoded at 600 wide (about 160 KB in all) and held inside the kit’s bare phone, which only rounds and shadows them. The captions are the live site’s own.'],
    ['Cyan frames, blue stays inside.', 'The line, the counter and the active tick are instrument cyan, the lab accent. The blue pointer lives inside the screens, as in the drawer.'],
    ['Not built here.', 'The three isometric close-ups below the fan on the live drawer. Not checked: frame rate on a real phone, the loop inside the built site, and the real Archivo and Plex Mono (the test machine falls back to Inter and DejaVu Sans Mono).'],
  ],
}

// The Garmin cockpit concept: four glass screens in depth. The front one is
// swiped off and rejoins at the back, then the next. A thin line under the
// caption fills over the hold; when it is full the front screen leaves, the
// caption turns to the next screen's words as the others move up, and the
// line starts again. Four swipes bring the fan back to its first order, so the
// loop closes on the opening frame with nothing reset. The poster is the first
// screen at the front with the line part full.
//
// Real strings: the four screen titles and lines from the live fan, the
// counter, and the not-affiliated note.

const SCREENS = [
  { src: new URL('./screens/home.webp', import.meta.url).href, title: 'Home, at a glance', line: 'Grouped by the question you’re asking: recovery, training, today.' },
  { src: new URL('./screens/dense.webp', import.meta.url).href, title: 'The same screen, dense', line: 'Density is a setting. Only the size changes.' },
  { src: new URL('./screens/hard-day.webp', import.meta.url).href, title: 'On a hard day', line: 'Colour appears only when something departs from normal.' },
  { src: new URL('./screens/training.webp', import.meta.url).href, title: 'Training, plan first', line: 'This week’s sessions, then the load behind them.' },
]

type S = { n: number; out: boolean; line: number }

const initial: S = { n: 0, out: false, line: 0 }
const poster: S = { n: 0, out: false, line: 0.6 }

const HOLD = 2500

async function script(a: Act<S>) {
  await a.wait(300)
  for (let k = 1; k <= 4; k++) {
    a.mark(`hold${k}`)
    await a.set({ line: 1 })
    await a.wait(HOLD)
    // The line is full: the front screen is swiped off
    a.mark(`swipe${k}`)
    await a.set({ out: true })
    await a.wait(480)
    // It rejoins at the back; the others move up and the caption follows
    await a.snap({ line: 0 })
    await a.set({ n: k, out: false })
    await a.wait(780)
  }
  // Four swipes put the fan back in its first order
  await a.snap({ n: 0 })
}

export default function CockpitScreens() {
  return (
    <Stage
      width={960}
      height={540}
      compact={{ below: 560, width: 358, height: 500 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme="dark"
      className="ck"
    >
      {(s, _rect, layout) => {
        const cur = s.n % 4
        return (
          <>
            <div className="ck-copy">
              <States
                value={String(cur)}
                align="start"
                states={Object.fromEntries(
                  SCREENS.map((sc, i) => [
                    String(i),
                    <div key={i} className="ck-cap">
                      <span className="ck-n">0{i + 1} / 04</span>
                      <span className="ck-title">{sc.title}</span>
                      <span className="ck-line">{sc.line}</span>
                    </div>,
                  ]),
                )}
              />
              <div className="ck-ticks" aria-hidden>
                {SCREENS.map((_, i) => (
                  <span key={i} className="ck-tick" data-on={i === cur || undefined}>
                    <i style={i === cur ? { transform: `scaleX(${s.line})`, transitionDuration: s.line === 1 ? `${HOLD}ms` : '0ms' } : undefined} />
                  </span>
                ))}
              </div>
            </div>
            <div className="ck-note">PERSONAL CONCEPT, NOT AFFILIATED WITH GARMIN.</div>
            <div className="ck-fan" role="group" aria-label="Garmin Connect concept screens">
              {SCREENS.map((sc, i) => {
                const slot = (((i - s.n) % 4) + 4) % 4
                return (
                  <div key={sc.title} className="ck-card" data-slot={slot} data-out={(slot === 0 && s.out) || undefined}>
                    <Phone frame="bare" width={250} status={false} island={false} dark>
                      <img className="ck-img" src={sc.src} alt={`Concept screen: ${sc.title}`} draggable={false} />
                    </Phone>
                  </div>
                )
              })}
            </div>
          </>
        )
      }}
    </Stage>
  )
}
