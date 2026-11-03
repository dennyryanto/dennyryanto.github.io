import { StrictMode, useEffect, useState, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import '../kit/stageshow.css'
import './review.css'
import { CASES, PLAN, type Meta } from '../components/plan'

// The page is a registry: every folder in components/ that exports `meta` and a
// default component gets a section. Nothing here changes when one is added.
type Entry = { default: ComponentType; meta: Meta }
const found = Object.values(import.meta.glob<Entry>('../components/*/index.tsx', { eager: true })).filter((m) => m.meta)
const built = new Map(found.map((m) => [m.meta.id, m]))

function Case({ entry, run }: { entry: Entry; run: number }) {
  const { meta } = entry
  const Demo = entry.default
  const split = meta.layout === 'split'
  return (
    <section id={meta.id} className="rv-case" aria-labelledby={`${meta.id}-t`}>
      <div className="rv-frame" data-frame>
        <div className="rv-board" data-layout={meta.layout} style={split ? ({ '--stage-w': `${meta.stageWidth}px` } as React.CSSProperties) : undefined}>
          <div className="rv-left">
            <div className="rv-head"><span id={`${meta.id}-t`}>{meta.head}</span><span>{meta.note ?? 'ILLUSTRATIVE'}</span></div>
            {meta.lead && <p className="rv-copy">{meta.lead}</p>}
          </div>
          <div className="rv-stage" aria-label={`Looping demo: ${meta.title}`}><Demo key={run} /></div>
        </div>
      </div>
      <div className="rv-notes">
        <h3>{meta.case} · {meta.title}</h3>
        <ul>{meta.notes.map(([k, v]) => <li key={k}><b>{k}</b> {v}</li>)}</ul>
      </div>
    </section>
  )
}

function App() {
  const [run, setRun] = useState(0)
  const [phone, setPhone] = useState(false)
  useEffect(() => {
    const again = () => setRun((n) => n + 1)
    const desk = () => setPhone(false)
    const narrow = () => setPhone(true)
    const on = (id: string, f: () => void) => document.getElementById(id)?.addEventListener('click', f)
    on('replay', again); on('w-desk', desk); on('w-phone', narrow)
    return () => { for (const [id, f] of [['replay', again], ['w-desk', desk], ['w-phone', narrow]] as const) document.getElementById(id)?.removeEventListener('click', f) }
  }, [])
  useEffect(() => {
    document.getElementById('w-desk')?.setAttribute('aria-pressed', String(!phone))
    document.getElementById('w-phone')?.setAttribute('aria-pressed', String(phone))
    document.querySelectorAll('[data-frame]').forEach((el) => el.toggleAttribute('data-phone', phone))
  }, [phone])
  return (
    <>
      {CASES.map((c) => {
        const items = PLAN.filter((p) => p.case === c && built.has(p.id))
        return items.length ? (
          <div key={c} className="rv-group">
            <h2 className="rv-case-name">{c}</h2>
            {items.map((p) => <Case key={p.id} entry={built.get(p.id)!} run={run} />)}
          </div>
        ) : null
      })}
    </>
  )
}

function Queue() {
  const left = PLAN.filter((p) => !built.has(p.id))
  return (
    <>
      <h2 id="q-title">On hold</h2>
      <div className="rv-groups">
        {CASES.map((c) => {
          const items = left.filter((p) => p.case === c)
          return items.length ? (
            <div key={c}>
              <h3>{c}</h3>
              <ul>{items.map((p) => <li key={p.id}>{p.title}{p.wave === 2 && <span className="rv-tag">diagram</span>}</li>)}</ul>
            </div>
          ) : null
        })}
      </div>
    </>
  )
}

createRoot(document.getElementById('cases')!).render(<StrictMode><App /></StrictMode>)
createRoot(document.getElementById('queue')!).render(<StrictMode><Queue /></StrictMode>)
const count = document.getElementById('count')
if (count) count.innerHTML = `<b>${built.size}</b> rebuilt · ${PLAN.length - built.size} diagrams on hold`
