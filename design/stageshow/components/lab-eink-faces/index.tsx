import {
  Activity,
  BatteryMedium,
  CalendarCheck,
  CircleCheck,
  Cloud,
  Dumbbell,
  Flame,
  Footprints,
  Gauge,
  Heart,
  HeartPulse,
  History,
  Moon,
  PersonStanding,
  RefreshCw,
  Tag,
  TrendingUp,
  Trophy,
  Wind,
  Zap,
} from 'lucide-react'
import { Stage, States, type Act } from '../../kit'
import './eink.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'lab-eink-faces',
  case: 'Lab',
  title: 'E-ink faces',
  head: 'GARMIN DAILY BRIEF · 7.5″ E-INK PANEL',
  note: 'ILLUSTRATIVE',
  lead: 'A self-hosted service pulls my live Garmin biometrics on a schedule and renders them as a monochrome image for a 7.5″ e-ink panel: the same 800×480, 1-bit screen, a different face on each refresh.',
  layout: 'full',
  stageWidth: 944,
  notes: [
    ['One panel, one cause.', 'The panel is an 800×480 screen at 1:1 in a plain bezel, on the board. The thin line under it fills until the next refresh; when it is full the panel does what e-ink does, flashes black, then white, and draws the next face. The header band and the footer stay, the body changes.'],
    ['Only the frame is cyan.', 'Inside the panel there are three tones: ink, paper and one grey step. The accent, instrument cyan, marks the refresh line and the face number outside it.'],
    ['Face 2 is read from the live site.', 'Both faces come from the two photographed panels on the live case study. Face 2 shows today as 21 May, the same day as Face 1, so the two faces agree on the date; the live photo of Face 2 says 22 May.'],
    ['Not checked.', 'Frame rate on a real phone, the loop inside the built site, and the real Archivo and Plex Mono (the test machine falls back to Inter and DejaVu Sans Mono).'],
  ],
}

// The Garmin Daily Brief on its 7.5-inch panel (800 x 480, 1-bit). The panel
// is a device: a plain bezel on the page's board ground. Its two faces share a
// header band (date, weather, air quality, race predictions) and a footer
// (the week's numbers, the synced chip); the body between them is what
// changes. The change has a cause the viewer sees: a hairline under the panel
// fills across the refresh interval, and when it is full the panel does what
// e-ink does, flashes to black, then paper, and draws the next face. Face 1,
// hold, refresh, Face 2, hold, refresh, Face 1: the seam is a refresh too, so
// nothing rewinds. The poster is Face 1, the face the case study describes.
//
// Real strings: the two face names (the live captions), the panel's own text.

type S = { face: 1 | 2; flash: 0 | 1 | 2; line: number; lineOn: boolean }

const initial: S = { face: 1, flash: 0, line: 0, lineOn: true }
const poster: S = { face: 1, flash: 0, line: 0.6, lineOn: true }

const HOLD = 4600

async function refresh(a: Act<S>, to: 1 | 2) {
  a.mark('refresh')
  // The interval is full: the line fades, the panel flashes black, then paper
  await a.set({ lineOn: false })
  await a.wait(300)
  await a.set({ flash: 1 })
  await a.wait(420)
  await a.set({ face: to, flash: 2 })
  await a.wait(260)
  await a.set({ flash: 0 })
  await a.snap({ line: 0 })
  await a.wait(500)
  await a.set({ lineOn: true })
}

async function script(a: Act<S>) {
  // Face 1 holds while the interval fills
  await a.wait(500)
  a.mark('face1')
  await a.set({ line: 1 })
  await a.wait(HOLD)
  await refresh(a, 2)
  // Face 2 holds while the interval fills again
  a.mark('face2')
  await a.set({ line: 1 })
  await a.wait(HOLD)
  await refresh(a, 1)
  await a.wait(100)
}

const FACE_NAME: Record<1 | 2, string> = {
  1: 'Readiness, vitals & today’s suggestion',
  2: 'Weekly volume, activity calendar & sleep',
}

function Header() {
  return (
    <div className="ei-head">
      <div className="ei-h ei-h--date">
        <span className="ei-cap">THURSDAY · 16:00</span>
        <span className="ei-big">21 MAY</span>
        <span className="ei-sm">PRODUCTIVE PHASE</span>
      </div>
      <div className="ei-h ei-h--wx">
        <Cloud size={28} strokeWidth={2} className="ei-hicon" />
        <div className="ei-stack">
          <span className="ei-cap">MOSTLY CLEAR · WQ</span>
          <span className="ei-big">33°C</span>
          <span className="ei-sm">Wind 19 km/h</span>
        </div>
      </div>
      <div className="ei-h ei-h--aq">
        <span className="ei-cap ei-cap--icon">
          <Wind size={15} strokeWidth={2.2} />
          AIR QUALITY
        </span>
        <span className="ei-aq">
          <span className="ei-big">57</span>
          <span className="ei-chip ei-chip--paper">MODERATE</span>
        </span>
      </div>
      <div className="ei-h ei-h--race">
        <span className="ei-cap">RACE PREDICTIONS</span>
        <span className="ei-big">
          <small>FM</small> 4:15:45
        </span>
        <span className="ei-sm">HM 1:53:21 · 10K 48:55 · 5K 23:20</span>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="ei-foot">
      <div className="ei-f">
        <PersonStanding size={17} strokeWidth={2.2} />
        <span>
          <em>7-DAY RUN</em>
          <b>6.1 km</b>
        </span>
      </div>
      <div className="ei-f">
        <Dumbbell size={17} strokeWidth={2.2} />
        <span>
          <em>STRENGTH</em>
          <b>3x</b> this week
        </span>
      </div>
      <div className="ei-f">
        <Activity size={17} strokeWidth={2.2} />
        <span>
          <em>LOAD</em>
          <b>467</b> Optimal
        </span>
      </div>
      <div className="ei-f">
        <Footprints size={17} strokeWidth={2.2} />
        <span>
          <em>STEPS</em>
          <b>11,619</b> / 7k
        </span>
      </div>
      <span className="ei-chip ei-chip--synced">
        <RefreshCw size={14} strokeWidth={2.4} />
        SYNCED 09:49
      </span>
    </div>
  )
}

function Metric({ icon, label, value, unit, bar, status, sub, trend }: { icon: React.ReactNode; label: string; value: string; unit?: string; bar: number; status: string; sub?: string; trend?: boolean }) {
  return (
    <div className="ei-metric">
      <span className="ei-cap ei-cap--icon">
        {icon}
        {label}
      </span>
      <span className="ei-num">
        {value}
        {unit && <small>{unit}</small>}
      </span>
      <span className="ei-bar" data-heavy={trend || undefined}>
        <i style={{ width: `${bar * 100}%` }} />
      </span>
      <span className="ei-status">
        {trend ? <TrendingUp size={15} strokeWidth={2.4} /> : <CircleCheck size={15} strokeWidth={2.4} />}
        {status}
      </span>
      {sub && <span className="ei-sm ei-sub">{sub}</span>}
    </div>
  )
}

function FaceOne() {
  return (
    <div className="ei-body">
      <div className="ei-metrics">
        <Metric icon={<Zap size={15} strokeWidth={2.2} />} label="TRAINING READINESS" value="61" bar={0.61} status="MODERATE TO TRAIN" sub="Fully recovered · 05:28" />
        <Metric icon={<BatteryMedium size={15} strokeWidth={2.2} />} label="BODY BATTERY" value="61" bar={0.61} status="GOOD" />
        <Metric icon={<Gauge size={15} strokeWidth={2.2} />} label="VO2 MAX" value="50" unit="mL" bar={0.82} status="EXCELLENT" />
        <Metric icon={<Flame size={15} strokeWidth={2.2} />} label="ENDURANCE SCORE" value="5846" bar={1} status="STABLE" trend />
      </div>
      <div className="ei-mid">
        <div className="ei-suggest">
          <span className="ei-cap ei-cap--icon">
            <CalendarCheck size={15} strokeWidth={2.2} />
            TODAY’S SUGGESTION
          </span>
          <span className="ei-run">
            <Footprints size={26} strokeWidth={2.2} />
            Easy Run
          </span>
          <span className="ei-sm">50 min · Zone 2 — Aerobic Base</span>
          <span className="ei-chip ei-chip--ink">
            <Tag size={14} strokeWidth={2.2} />~ BASE
          </span>
          <div className="ei-last">
            <span className="ei-sm">
              <History size={15} strokeWidth={2.2} />
              Treadmill Running · 8.6 km · 51:02
            </span>
            <span className="ei-sm">
              <Trophy size={15} strokeWidth={2.2} />
              10K PR · 48:33 · 14 February 2026
            </span>
          </div>
        </div>
        <div className="ei-recover">
          <span className="ei-cap ei-cap--icon">
            <HeartPulse size={15} strokeWidth={2.2} />
            RECOVERY
          </span>
          <div className="ei-rrow">
            <span className="ei-rl"><Moon size={14} strokeWidth={2.2} />SLEEP</span>
            <b>7h 17m</b>
            <span className="ei-sm">90/100</span>
            <span className="ei-chip ei-chip--ink">GOOD</span>
          </div>
          <div className="ei-rrow">
            <span className="ei-rl"><Activity size={14} strokeWidth={2.2} />HRV</span>
            <b>80 ms</b>
            <span />
            <span className="ei-chip ei-chip--ink">BALANCED</span>
          </div>
          <div className="ei-rrow">
            <span className="ei-rl"><Heart size={14} strokeWidth={2.2} />RHR</span>
            <b>38 bpm</b>
          </div>
          <div className="ei-rrow">
            <span className="ei-rl"><Wind size={14} strokeWidth={2.2} />RESP</span>
            <b>12.0 brpm</b>
          </div>
          <div className="ei-rrow">
            <span className="ei-rl"><Gauge size={14} strokeWidth={2.2} />FACTOR</span>
            <b>Stress</b>
            <span />
            <span className="ei-chip ei-chip--line">MODERATE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const WEEKS: { v: number; w: string; now?: boolean }[] = [
  { v: 8.6, w: 'W-3' },
  { v: 23.4, w: 'W-2' },
  { v: 7.7, w: 'W-1' },
  { v: 14.7, w: 'W-0', now: true },
]

// R run, S strength, number plain, T today, . future
const CAL: (string | number)[][] = [
  [27, 28, 29, 30, 1, 2, 'S'],
  ['R', 'S', 6, 'S', 'S', 'R', 10],
  ['S', 12, 'R', 14, 15, 'S', 17],
  ['R', 19, 'S', 'T', 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
]

function FaceTwo() {
  return (
    <div className="ei-body ei-body--two">
      <div className="ei-weekly">
        <span className="ei-cap ei-cap--icon">
          <Footprints size={15} strokeWidth={2.2} />
          WEEKLY KM
        </span>
        <span className="ei-num ei-num--m">14.7 km</span>
        <span className="ei-sm">this week · avg 13.3/wk</span>
        <div className="ei-bars">
          {WEEKS.map((b) => (
            <div key={b.w} className="ei-col">
              <i className="ei-colbar" data-now={b.now || undefined} style={{ height: `${(b.v / 23.4) * 150}px` }}>
                <span className="ei-val">{b.v}</span>
              </i>
              <span className="ei-sm">{b.w}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ei-calendar">
        <span className="ei-cap ei-cap--icon">
          <CalendarCheck size={15} strokeWidth={2.2} />
          ACTIVITY — MAY 2026
        </span>
        <div className="ei-days">
          {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="ei-cal">
          {CAL.flat().map((c, i) => {
            if (c === 'R' || c === 'S') {
              return (
                <span key={i} className="ei-dot" data-kind="on">
                  {c === 'R' ? <Footprints size={17} strokeWidth={2.4} /> : <Dumbbell size={17} strokeWidth={2.4} />}
                </span>
              )
            }
            if (c === 'T') return <span key={i} className="ei-dot" data-kind="today">21</span>
            return (
              <span key={i} className="ei-dot" data-kind={i > 24 ? 'ring' : 'plain'}>
                {c}
              </span>
            )
          })}
        </div>
      </div>
      <div className="ei-side">
        <div className="ei-sidecard">
          <span className="ei-cap ei-cap--icon">
            <Moon size={15} strokeWidth={2.2} />
            SLEEP NEEDED
          </span>
          <span className="ei-num ei-num--m">8h 30m</span>
          <span className="ei-sm">+40m more than usual</span>
        </div>
        <div className="ei-sidecard">
          <span className="ei-cap ei-cap--icon">
            <Moon size={15} strokeWidth={2.2} />
            SLEEP SCORE
          </span>
          <div className="ei-spark">
            <span className="ei-num ei-num--m">90</span>
            <span className="ei-mini">
              {[0.7, 0.6, 0.85, 0.55, 0.6, 0.9, 0.2].map((h, i) => (
                <i key={i} style={{ height: `${h * 30}px` }} />
              ))}
            </span>
          </div>
          <span className="ei-sm">last night · avg 86</span>
        </div>
        <div className="ei-sidecard">
          <span className="ei-cap ei-cap--icon">
            <Flame size={15} strokeWidth={2.2} />
            ENDURANCE
          </span>
          <div className="ei-spark">
            <span className="ei-num ei-num--m">5846</span>
            <span className="ei-mini">
              {[0.15, 0.15, 0.8, 0.7, 0.75, 0.15].map((h, i) => (
                <i key={i} style={{ height: `${h * 30}px` }} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EinkFaces() {
  return (
    <Stage
      width={944}
      height={620}
      compact={{ below: 560, width: 358, height: 524 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme="dark"
      className="ei"
    >
      {(s, _rect, layout) => {
        const compact = layout === 'compact'
        return (
          <>
            <div className="ei-device">
              <div className="ei-bezel">
                <div className="ei-screen" aria-label="E-ink panel, 800 by 480">
                  <Header />
                  <div className="ei-faces">
                    <div className="ei-face" data-on={s.face === 1 || undefined}>
                      <FaceOne />
                    </div>
                    <div className="ei-face" data-on={s.face === 2 || undefined}>
                      <FaceTwo />
                    </div>
                  </div>
                  <Footer />
                  <div className="ei-flash" data-flash={s.flash} />
                </div>
              </div>
            </div>
            <div className="ei-label" data-compact={compact || undefined}>
              <div className="ei-label__row">
                <span className="ei-pager" aria-hidden>
                  <i data-on={s.face === 1 || undefined} />
                  <i data-on={s.face === 2 || undefined} />
                </span>
                <States
                  value={String(s.face)}
                  align="start"
                  states={{
                    '1': (
                      <span className="ei-label__text">
                        <b>FACE 1</b> · {FACE_NAME[1]}
                      </span>
                    ),
                    '2': (
                      <span className="ei-label__text">
                        <b>FACE 2</b> · {FACE_NAME[2]}
                      </span>
                    ),
                  }}
                />
              </div>
              <span className="ei-line" data-on={s.lineOn || undefined}>
                <i style={{ transform: `scaleX(${s.line})`, transitionDuration: s.line === 1 ? `${HOLD}ms` : '0ms' }} />
              </span>
            </div>
          </>
        )
      }}
    </Stage>
  )
}
