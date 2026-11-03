import { Connector, Stage, type Act } from '../../kit'
import './shoe.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'lab-shoe-tracker',
  case: 'Lab',
  title: 'Shoe tracker',
  head: 'COMPANION BUILD · ESL SHOE TRACKER',
  note: 'ILLUSTRATIVE',
  lead: 'A tiny electronic shelf label on the shoe rack shows each pair’s total mileage, life used and last run, so I know when to retire them. Same lean pipeline as the panel: JSON, Python render, display, driven over BLE by an OpenEPaperLink access point.',
  layout: 'split',
  stageWidth: 560,
  notes: [
    ['One record, one label.', 'The label hangs from the rack edge, the record sits under it. A cron tick lights the render chip, a line labelled BLE draws to the label, the label does a full e-ink refresh (black, paper) and redraws its life bar to 43%, the share of 342 of an 800 km cap. The record’s km and cap values light up while the bar fills.'],
    ['Only derived numbers.', 'Every figure is on the live case study: 342 km, 800 km cap, 43%, 457 km left, Apr 16, 2026. The JSON keys are placeholders and the record shows only the four fields the label reads.'],
    ['The label is 1-bit.', 'Ink, paper and one grey step; no cyan inside it. The accent sits on the cron chip, the BLE line and the two lit values.'],
    ['Not checked.', 'Frame rate on a real phone, the loop inside the built site, and the real Archivo and Plex Mono (the test machine falls back to Inter and DejaVu Sans Mono).'],
  ],
}

// The ESL shoe tracker, as the live case study describes it: a tiny e-ink shelf
// label per running shoe, driven by a cron render over BLE. One record becomes
// one label. Beats: a cron tick lights the render chip; a line labelled BLE
// draws from the record to the label; the label does a full e-ink refresh
// (black, then paper) and redraws its life bar to 43%, with the km and cap
// values that make it lit on the record; the payoff holds. Everything the
// story added leaves in one reverse stagger and the finished label stays: the
// loop opens and closes on the same label. The poster is the finished label.
//
// Real strings: the label's own words and the record's four fields.

type S = { tick: boolean; link: boolean; flash: 0 | 1 | 2; bar: boolean; note: boolean; hi: boolean }

const initial: S = { tick: false, link: false, flash: 0, bar: true, note: true, hi: false }
const poster: S = { tick: true, link: true, flash: 0, bar: true, note: true, hi: true }

async function script(a: Act<S>) {
  await a.wait(1100)
  a.mark('tick')
  await a.set({ tick: true })
  await a.wait(800)
  a.mark('ble')
  await a.set({ link: true })
  await a.wait(1500)
  // A full refresh: black, then paper; the bar and its note are gone under it
  a.mark('refresh')
  await a.set({ flash: 1 })
  await a.wait(420)
  await a.set({ flash: 2, bar: false, note: false })
  await a.wait(260)
  await a.set({ flash: 0 })
  await a.wait(650)
  a.mark('draw')
  await a.set({ bar: true, hi: true })
  await a.wait(1000)
  await a.set({ note: true })
  await a.wait(3200)
  // Exit around the anchor: the label stays, what the story added leaves
  a.mark('exit')
  await a.set({ hi: false })
  await a.wait(300)
  await a.stagger(['link', 'tick'] as const, (k) => a.put({ [k]: false } as Partial<S>), 120)
  await a.wait(900)
}

export default function ShoeTracker() {
  return (
    <Stage width={560} height={524} compact={{ below: 560, width: 358, height: 472 }} initial={initial} poster={poster} script={script} play="loop" theme="dark" className="sh">
      {(s, rect, layout) => {
        void layout
        const j = rect('json')
        const l = rect('label')
        const from = { x: j.x + j.width / 2, y: j.y }
        const to = { x: l.x + l.width / 2, y: l.y + l.height }
        return (
          <>
            <div className="sh-rack" />
            <div className="sh-tag" data-target="label">
              <span className="sh-tab sh-tab--l" />
              <span className="sh-tab sh-tab--r" />
              <div className="sh-screen" aria-label="E-ink shelf label">
                <div className="sh-brand">NIKE</div>
                <div className="sh-model">Alphafly Next% 2</div>
                <div className="sh-colour">Volt / Black / University Gold</div>
                <div className="sh-rule" />
                <div className="sh-mid">
                  <div className="sh-total">
                    <b>342</b>
                    <span>KM TOTAL</span>
                  </div>
                  <div className="sh-life">
                    <span className="sh-cap">SHOE LIFE · 800 KM CAP</span>
                    <span className="sh-track">
                      <i style={{ width: s.bar ? '43%' : '0%' }} />
                      <u style={{ left: s.bar ? '43%' : '0%', opacity: s.bar ? 1 : 0 }} />
                      <span className="sh-note" data-on={s.note || undefined}>43% · 457 km left</span>
                    </span>
                  </div>
                </div>
                <div className="sh-rule" />
                <div className="sh-last">
                  <span className="sh-cap">LAST RUN</span>
                  <b>APR 16, 2026</b>
                </div>
                <div className="sh-flash" data-flash={s.flash} />
              </div>
            </div>
            <div className="sh-json" data-target="json">
              <div className="sh-json__head">
                <span>JSON</span>
                <span className="sh-chip" data-on={s.tick || undefined}>CRON RENDER</span>
              </div>
              <div className="sh-json__code">
                <div>{'{'}</div>
                <div className="sh-ln"><s>"shoe"</s>: <em>"Alphafly Next% 2"</em>,</div>
                <div className="sh-ln sh-ln--hi" data-on={s.hi || undefined}><s>"km"</s>: <span>342</span>,</div>
                <div className="sh-ln sh-ln--hi" data-on={s.hi || undefined}><s>"cap"</s>: <span>800</span>,</div>
                <div className="sh-ln"><s>"last_run"</s>: <em>"2026-04-16"</em></div>
                <div>{'}'}</div>
              </div>
            </div>
            {j.width > 0 && l.width > 0 && <Connector from={from} to={to} route="v" label="BLE" show={s.link} />}
          </>
        )
      }}
    </Stage>
  )
}
