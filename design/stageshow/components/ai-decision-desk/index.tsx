import type { ReactNode } from 'react'
import { Check, Collapse, Connector, Count, Meter, Phone, Stage, States, Stream, Window, type Act } from '../../kit'
import { Database, ListChecks, Split, TrendingUp, User, Workflow, Check as Tick } from 'lucide-react'
import './desk.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'ai-decision-desk',
  case: 'Independent',
  title: 'Decision desk',
  head: 'ENTERPRISE AI · DATA-TO-DECISION WORKFLOW',
  note: 'ILLUSTRATIVE',
  lead: 'A weekly replenishment run: four siloed sources are cleaned and reconciled, an LLM scores demand against lead time, and only a high-confidence call reaches the operator, ready to approve.',
  layout: 'full',
  stageWidth: 1064,
  sizes: { wide: [1064, 520], compact: [358, 560], below: 640 },
  notes: [
    ['One run is the story.', 'The workflow canvas runs once, left to right: each node lights, does its work and ticks. The confidence reaches 0.86, clears the 0.80 threshold, and the decision card rises in with its confidence bar and Approve. The lime is the decision only: the chosen branch, the card and Approve.'],
    ['What changed from the section.', 'The loop plays the confident run only (the low-confidence run to the planner needs a second scene and would take the loop past 16 seconds). The decision card gains the confidence bar the brief asked for, drawn from the 0.86 and 0.80 the source already has. The orange letter badge became a plain icon and the sparkle on the LLM step became a trend icon. The lit path is the builder\'s blue; lime is kept for the outcome.'],
    ['Phone column.', 'The compact design is a run log, not a squeezed canvas: each step opens while it works and folds to its header and tick, and the decision card is there from the first frame, dimmed.'],
    ['Checked / not checked.', 'See REHEARSAL.md. Frame rate on a real device and the loop inside the built page were not checked.'],
  ],
}

// The enterprise AI decision desk, rebuilt as one run on a workflow canvas
// (the section's comment: a canvas in the style of a workflow builder, no
// name or logo, illustrative, dark). Inputs feed the nodes in order, each node
// lights, works and ticks; the confidence rolls to 0.86, clears the 0.80
// threshold at IF/ELSE, and the decision card rises in with its confidence
// bar and Approve / Review. The payoff holds. The loop resets around its
// anchor: the card and the lit path leave, then each node's figures fade out
// from the right (decision first), snap back to idle while hidden, and fade
// in as waiting. The window, the nodes and their names never leave.
//
// Real strings (all from the section): the four sources, the three figures,
// the LLM note, the threshold, the decision and its reason, Approve, Review,
// the planner note, the run label.

type St = 'idle' | 'run' | 'done' | 'skip'

type S = {
  src: St
  clean: St
  llm: St
  gate: St
  dec: St
  rev: St
  tags: number
  dupesOk: boolean
  n1: number
  n2: number
  n3: number
  words: number
  conf: number
  chosen: boolean
  e1: boolean
  e2: boolean
  e3: boolean
  e4: boolean
  card: boolean
  cv: number
  label: 'Ready' | 'Running…' | 'Ran in 2.4s'
  hid: number
}

const initial: S = {
  src: 'idle', clean: 'idle', llm: 'idle', gate: 'idle', dec: 'idle', rev: 'idle',
  tags: 0, dupesOk: false, n1: 0, n2: 0, n3: 47, words: 0, conf: 0, chosen: false,
  e1: false, e2: false, e3: false, e4: false, card: false, cv: 0, label: 'Ready', hid: 0,
}
const poster: S = {
  src: 'done', clean: 'done', llm: 'done', gate: 'done', dec: 'done', rev: 'skip',
  tags: 4, dupesOk: true, n1: 312, n2: 1840, n3: 0, words: 99, conf: 0.86, chosen: true,
  e1: true, e2: true, e3: true, e4: true, card: true, cv: 0.86, label: 'Ran in 2.4s', hid: 0,
}

const NOTE = 'Compares cover against lead time and the sales trend for each SKU.'
const WORDS = NOTE.split(' ').length
const NODES = ['src', 'clean', 'llm', 'gate', 'dec'] as const

async function script(a: Act<S>) {
  await a.wait(900)
  // Sources
  a.mark('sources')
  a.put({ src: 'run', label: 'Running…' })
  for (let i = 1; i <= 4; i++) {
    await a.wait(190)
    a.put({ tags: i })
  }
  await a.wait(260)
  a.put({ src: 'done', e1: true })
  await a.wait(620)
  // Clean and validate: the figures roll, the duplicate flag clears
  a.mark('clean')
  a.put({ clean: 'run', n1: 312, n2: 1840, n3: 0 })
  await a.wait(620)
  a.put({ dupesOk: true })
  await a.wait(560)
  a.put({ clean: 'done', e2: true })
  await a.wait(640)
  // Demand signals: the note streams while the confidence counts up
  a.mark('signals')
  a.put({ llm: 'run', conf: 0.86 })
  for (let i = 1; i <= WORDS; i++) {
    await a.wait(88)
    a.put({ words: i })
  }
  await a.wait(240)
  a.put({ llm: 'done', e3: true })
  await a.wait(640)
  // IF/ELSE: the confidence clears 0.80, the branch to the decision is chosen
  a.mark('gate')
  a.put({ gate: 'run' })
  await a.wait(450)
  a.put({ chosen: true })
  await a.wait(300)
  a.put({ gate: 'done', rev: 'skip', e4: true })
  await a.wait(750)
  // The decision rises in with its confidence bar
  a.mark('decision')
  a.put({ dec: 'run' })
  await a.wait(380)
  a.put({ dec: 'done', card: true, cv: 0.86, label: 'Ran in 2.4s' })
  await a.wait(3000)
  // Exit around the anchor: the card and the lit path leave, then each
  // node's figures fade out from the right, reset while hidden, and return
  a.mark('exit')
  a.put({ card: false, dec: 'idle', rev: 'idle', chosen: false, e4: false, e3: false, e2: false, e1: false, label: 'Ready' })
  await a.wait(300)
  await a.stagger([1, 2, 3, 4, 5], (n) => a.put({ hid: n }), 70)
  await a.wait(550)
  await a.snap({ ...initial, hid: 5 })
  await a.wait(150)
  await a.set({ hid: 0 })
  await a.wait(500)
}

const SOURCES: [string, string | null][] = [
  ['Legacy ERP', 'orders'],
  ['Sales CRM', 'accounts'],
  ['Warehouse sheets', null],
  ['POS exports', 'daily'],
]

function Tag({ state, fix }: { state: 'wait' | 'ok' | 'fix'; fix?: boolean }) {
  const states = fix ? { wait: '…', ok: 'OK', fix: 'DUPES' } : { wait: '…', ok: 'OK', fix: 'OK' }
  return (
    <span className="dd-tag dd-dyn" data-tone={state}>
      <States value={state} states={states} align="center" />
    </span>
  )
}

function Status({ st, time, big }: { st: St; time?: string; big?: boolean }) {
  return (
    <span className="dd-st dd-dyn">
      <span className="dd-st__t" data-on={(st === 'done' && !!time) || undefined}>{time}</span>
      <Check on={st === 'done'} pending={st === 'run'} size={big ? 18 : 14} />
    </span>
  )
}

function Head({ tile, icon, title, st, time, big }: { tile: string; icon: ReactNode; title: string; st: St; time?: string; big?: boolean }) {
  return (
    <div className="dd-nh">
      <span className="dd-ico" style={{ background: tile }}>{icon}</span>
      <span className="dd-nt">{title}</span>
      <Status st={st} time={time} big={big} />
    </div>
  )
}


export default function DecisionDesk() {
  return (
    <Stage<S>
      width={1064}
      height={520}
      compact={{ below: 640, width: 358, height: 560 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme="dark"
      className="dd"
    >
      {(s, rect, layout) => {
        const wide = layout === 'wide'
        const IC = { size: wide ? 14 : 17, strokeWidth: 2 }
        const hid = (i: number) => (s.hid > 4 - i || undefined)
        // Each node's body: the same markup in both designs. In the compact
        // design it opens while the node works and folds to its header after.
        const sources = (
          <div className="dd-nb">
            {SOURCES.map(([name, detail], i) => {
              const fix = i === 2
              const state = i >= s.tags ? 'wait' : fix && !s.dupesOk ? 'fix' : 'ok'
              return (
                <div key={name} className="dd-row">
                  <span><b>{name}</b>{detail ? ` · ${detail}` : ''}</span>
                  <Tag state={state} fix={fix} />
                </div>
              )
            })}
          </div>
        )
        const clean = (
          <div className="dd-nb">
            <div className="dd-row"><span>Duplicates removed</span><b className="dd-dyn"><Count value={s.n1} duration={900} /></b></div>
            <div className="dd-row"><span>SKUs reconciled</span><b className="dd-dyn"><Count value={s.n2} duration={900} /></b></div>
            <div className="dd-row"><span>Rows failing checks</span><b className="dd-dyn"><Count value={s.n3} duration={900} /></b></div>
          </div>
        )
        const llm = (
          <div className="dd-nb">
            <div className="dd-row"><span>Step</span><code>LLM</code></div>
            <div className="dd-note dd-dyn"><Stream text={NOTE} count={s.words} /></div>
            <div className="dd-row"><span>Confidence</span><b className="dd-dyn"><Count value={s.conf} format={(n) => n.toFixed(2)} duration={1000} /></b></div>
          </div>
        )
        const gate = (
          <div className="dd-nb">
            <div className="dd-ports">
              <div className="dd-port" data-chosen={s.chosen || undefined} data-target="port-true"><i className="dd-hl dd-dyn" /><span>IF</span><span>confidence ≥ 0.80</span></div>
              <div className="dd-port" data-passed={s.chosen || undefined} data-target="port-false"><span>ELSE</span><span>to a planner</span></div>
            </div>
          </div>
        )
        const dec = (
          <div className="dd-nb">
            <div className="dd-dec" data-on={s.card || undefined}>
              <small>INVENTORY · HIGH CONFIDENCE</small>
              <strong>Reorder top-selling SKUs, east warehouse</strong>
              <p>4 days of cover against a 6-day lead time.</p>
              <div className="dd-conf dd-dyn">
                <span>Confidence</span>
                <b><Count value={s.cv} format={(n) => n.toFixed(2)} duration={900} /></b>
                <div className="dd-conf__bar">
                  <Meter value={s.cv} />
                  <i className="dd-conf__tick" />
                </div>
              </div>
              <div className="dd-btns"><span className="yes" data-target="approve">Approve</span><span className="no">Review</span></div>
            </div>
          </div>
        )
        const node = (key: (typeof NODES)[number], i: number, st: St, head: ReactNode, body: ReactNode, cls = '') => (
          <div key={key} className={`dd-node dd-n-${key}${cls}`} data-st={st} data-hid={hid(i)} data-target={`n-${key}`}>
            {head}
            {wide ? body : <Collapse open={st === 'run' || key === 'dec'}>{body}</Collapse>}
          </div>
        )
        const nodes = (
          <>
            {node('src', 0, s.src, <Head tile="#155eef" icon={<Database {...IC} />} title="Sources" st={s.src} time="0.2s" big={!wide} />, sources)}
            {node('clean', 1, s.clean, <Head tile="#2e90fa" icon={<ListChecks {...IC} />} title="Clean & validate" st={s.clean} time="0.6s" big={!wide} />, clean)}
            {node('llm', 2, s.llm, <Head tile="#6172f3" icon={<TrendingUp {...IC} />} title="Demand signals" st={s.llm} time="1.1s" big={!wide} />, llm)}
            {node('gate', 3, s.gate, <Head tile="#06aed4" icon={<Split {...IC} />} title="IF/ELSE" st={s.gate} time="0.1s" big={!wide} />, gate)}
            {node('dec', 4, s.dec, <Head tile="#f79009" icon={<Tick {...IC} />} title="Decision" st={s.dec} time="0.4s" big={!wide} />, dec, ' dd-out')}
          </>
        )
        const lead = (
          <>
            <span className="dd-crumb">
              <Workflow size={15} strokeWidth={2} />
              <span>Ops copilot</span>
              <small>/ Weekly replenishment</small>
            </span>
            {wide && (
              <span className="dd-tabs">
                <span data-on>Orchestrate</span>
                <span>Logs</span>
                <span>Monitoring</span>
              </span>
            )}
          </>
        )
        const toolbar = (
          <>
            <span className="dd-run">
              <i />
              <States value={s.label} states={{ Ready: 'Ready', 'Running…': 'Running…', 'Ran in 2.4s': 'Ran in 2.4s' }} align="start" />
            </span>
            {wide && <span className="dd-pub">Publish</span>}
          </>
        )
        if (!wide) {
          return (
            <Phone width={326} dark wallpaper="#1f2025" className="dd-phone">
              <div className="dd-appbar">{lead}{toolbar}</div>
              <div className="dd-canvas dd-canvas--c">{nodes}</div>
            </Phone>
          )
        }
        // Wide: the nodes sit on their canvas coordinates; the edges are drawn
        // between measured node and port rects, over everything
        const n = (k: string) => rect(`n-${k}`)
        const out = (k: string) => ({ x: n(k).x + n(k).width, y: n(k).y + 22 })
        const into = (k: string) => ({ x: n(k).x, y: n(k).y + 22 })
        const down = (k: string) => ({ x: n(k).x + n(k).width / 2, y: n(k).y + n(k).height })
        const up = (k: string) => ({ x: n(k).x + n(k).width / 2, y: n(k).y })
        const port = (k: string) => ({ x: n('gate').x + n('gate').width, y: rect(k).y + rect(k).height / 2 })
        const base = { route: 'curve' as const, dots: 'none' as const, dashed: true, show: true, className: 'dd-base' }
        const lit = { route: 'curve' as const, className: 'dd-e' }
        return (
          <>
            <Window className="dd-win" lead={lead} toolbar={toolbar} body={{ className: 'dd-canvas' }}>
              {nodes}
              <div className="dd-node dd-n-rev" data-st={s.rev} data-hid={hid(4)} data-target="n-rev">
                <div className="dd-nh">
                  <span className="dd-ico" style={{ background: '#667085' }}><User {...IC} /></span>
                  <span className="dd-nt">Planner review</span>
                  <span className="dd-st dd-dyn"><span className="dd-st__t" />{s.rev === 'skip' ? <i className="dd-dash" /> : <Check on={false} size={14} />}</span>
                </div>
                <div className="dd-nb">
                  <div className="dd-note">Low-confidence calls wait here for a person.<span className="dd-dyn" data-on={s.rev === 'skip' || undefined}> Skipped this run.</span></div>
                </div>
              </div>
              <div className="dd-rail" aria-hidden>
                <span data-on>Select</span>
                <span>Hand</span>
                <span>100%</span>
              </div>
            </Window>
            <Connector {...base} from={out('src')} to={into('clean')} />
            <Connector {...base} route="straight" from={down('clean')} to={up('llm')} />
            <Connector {...base} from={out('llm')} to={into('gate')} />
            <Connector {...base} from={port('port-false')} to={into('rev')} />
            <Connector {...lit} from={out('src')} to={into('clean')} show={s.e1} />
            <Connector {...lit} route="straight" from={down('clean')} to={up('llm')} show={s.e2} />
            <Connector {...lit} from={out('llm')} to={into('gate')} show={s.e3} />
            <Connector {...lit} className="dd-e dd-e--lime" from={port('port-true')} to={into('dec')} show={s.e4} />
          </>
        )
      }}
    </Stage>
  )
}

