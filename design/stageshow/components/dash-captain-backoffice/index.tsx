import { Battery, BatteryLow, ChevronDown, LayoutDashboard, Link2, Menu as MenuIcon, Palette, Pencil, Tablet, Tag, Users, UtensilsCrossed } from 'lucide-react'
import { Roll, Stage, States, Window, type Act } from '../../kit'
import './captain.css'
import type { Meta } from '../plan'
import dashLogo from './dash-logo.svg'
import dashMark from './dash-mark.svg'
import dashWordmark from './dash-wordmark.svg'
import steak from './steak.webp'

export const meta: Meta = {
  id: 'dash-captain-backoffice',
  case: 'Dash · Lumio',
  title: 'Captain app and back office',
  head: 'DASH · CAPTAIN APP AND BACK OFFICE',
  note: 'TABLES · MENU',
  lead: 'Dash is a restaurant ordering platform: table, kitchen, captain and back-office apps, live across 30+ chains.',
  layout: 'full',
  stageWidth: 1100,
  notes: [
    ['The floor, live.', 'The captain app is the tablet in front: a table calls, its card lights amber and the Calling tab counts it, the captain taps it and it clears, then answers the call already waiting at table 11, and a new one comes in. Every state and label is one the old mockup already animated.'],
    ['The back office stays behind it.', 'The drawer shows no data passing between the two apps, so none is invented. The back office is the same restaurant (Trattoria Fiorella, Kemang) and the menu the tables order from, drawn still behind the tablet. Owner decision: if you want the link animated, say which change should travel (a menu item switched off, a device).'],
    ['What changed.', 'Both surfaces are rebuilt at a size where the type reads, the back office sits in a real window with its dark sidebar, and the tablet overlaps its sidebar edge. At 358 wide only the tablet is kept, cropped between table columns.'],
    ['Not checked.', 'Frame rate and touch on a real device, and the loop inside the built page.'],
  ],
}

// Dash's captain app (a tablet) in front of the back office (a window). The
// story is the floor: table 02 calls, the Calling tab counts it, the captain
// taps it and it clears, then answers the call already waiting at table 11,
// and a new call comes in there, which is where the loop began. The back
// office is context, still.
// The poster is the call raised.
//
// Real strings: Tables, JOIN TABLE, the four tabs, table numbers, VACANT,
// OCCUPIED, N ITEMS, CALLING, OFFLINE, battery levels, and every
// back-office label (copied from the old mockup).

type S = { c2: boolean; c11: boolean }
const initial: S = { c2: false, c11: true }
const poster: S = { c2: true, c11: true }

const REST = { wide: { x: 480, y: 450 }, compact: { x: 300, y: 512 } }

async function script(a: Act<S>) {
  await a.wait(1600)
  // 1. A second table calls: its card lights, the Calling tab counts it
  a.mark('call')
  await a.set({ c2: true })
  await a.wait(2800)
  // 2. The captain answers it, then the call that was already waiting
  a.mark('answer')
  await a.move({ at: 'table2', x: 0.5, y: 0.55 }, { duration: 900 })
  await a.wait(200)
  await a.click()
  await a.set({ c2: false })
  await a.wait(900)
  await a.move({ at: 'table11', x: 0.5, y: 0.55 }, { duration: 800 })
  await a.wait(200)
  await a.click()
  await a.set({ c11: false })
  await a.move(REST[a.layout], { duration: 800 })
  await a.wait(1500)
  // 3. Another call comes in, which is where the loop began
  a.mark('again')
  await a.set({ c11: true })
  await a.wait(2200)
}

type Card = { n: string; pct: number; kind: 'vacant' | 'items' | 'occupied' | 'offline' | 'calling'; items?: string }
const CARDS: Card[] = [
  { n: '01', pct: 82, kind: 'vacant' },
  { n: '02', pct: 79, kind: 'vacant' },
  { n: '03', pct: 88, kind: 'items', items: '10 ITEMS' },
  { n: '04', pct: 91, kind: 'items', items: '8 ITEMS' },
  { n: '05', pct: 76, kind: 'occupied' },
  { n: '06', pct: 84, kind: 'vacant' },
  { n: '07', pct: 12, kind: 'offline' },
  { n: '08', pct: 88, kind: 'vacant' },
  { n: '09', pct: 80, kind: 'vacant' },
  { n: '10', pct: 67, kind: 'items', items: '6 ITEMS' },
  { n: '11', pct: 43, kind: 'calling' },
  { n: '12', pct: 95, kind: 'vacant' },
]

function Battery_({ pct }: { pct: number }) {
  const low = pct < 20
  return (
    <span className="cb-batt" data-low={low || undefined}>
      {pct}%
      {low ? <BatteryLow size={14} strokeWidth={1.8} /> : <Battery size={14} strokeWidth={1.8} />}
    </span>
  )
}

function Table({ c, s }: { c: Card; s: S }) {
  const live = c.n === '02' ? s.c2 : c.n === '11' ? s.c11 : null
  if (live !== null) {
    const id = c.n === '02' ? 'table2' : 'table11'
    return (
      <div className="cb-t" data-state={live ? 'calling' : 'vacant'} data-ring={live ? 'true' : undefined} data-target={id} data-cursor="pointer">
        <Battery_ pct={c.pct} />
        <div className="cb-t__c">
          <div className="cb-t__n">{c.n}</div>
          <States
            value={live ? 'calling' : 'vacant'}
            states={{ vacant: <span className="cb-lbl">VACANT</span>, calling: <span className="cb-pill" data-tone="amber">CALLING</span> }}
          />
        </div>
      </div>
    )
  }
  const state = c.kind === 'items' || c.kind === 'occupied' ? 'occupied' : c.kind
  return (
    <div className="cb-t" data-state={state}>
      <Battery_ pct={c.pct} />
      <div className="cb-t__c">
        <div className="cb-t__n">{c.n}</div>
        {c.kind === 'vacant' && <span className="cb-lbl">VACANT</span>}
        {c.kind === 'items' && <span className="cb-pill" data-tone="blue">{c.items}</span>}
        {c.kind === 'occupied' && <span className="cb-pill" data-tone="blue">OCCUPIED</span>}
        {c.kind === 'offline' && <span className="cb-lbl" data-tone="red">OFFLINE</span>}
      </div>
    </div>
  )
}

function Captain({ s }: { s: S }) {
  return (
    <div className="cb-ipad">
      <div className="cb-screen">
        <header className="cb-top">
          <span className="cb-top__t"><MenuIcon size={18} strokeWidth={2} />Tables</span>
          <img className="cb-top__logo" src={dashLogo} alt="Dash" />
          <span className="cb-join"><Link2 size={14} strokeWidth={2} />JOIN TABLE</span>
        </header>
        <div className="cb-tabs">
          <span data-on>All Tables</span>
          <span>Occupied</span>
          <span>Vacant</span>
          <span>
            Calling
            <i className="cb-count" data-zero={!(s.c2 || s.c11) || undefined}><Roll variant="fade">{String((s.c2 ? 1 : 0) + (s.c11 ? 1 : 0) || 1)}</Roll></i>
          </span>
        </div>
        <div className="cb-grid">
          {CARDS.map((c) => (
            <Table key={c.n} c={c} s={s} />
          ))}
        </div>
      </div>
    </div>
  )
}

const MODS = [
  ['C-01', 'Patatine Fritte', 'Included'],
  ['C-02', 'Verdure Grigliate', '+ IDR 15'],
  ['C-03', 'Purè di Patate', '+ IDR 12'],
  ['C-04', 'Insalata Mista', '+ IDR 18'],
]
const NAV = [
  { label: 'Dashboards', Icon: LayoutDashboard },
  { label: 'Devices', Icon: Tablet },
  { label: 'Menu Items', Icon: UtensilsCrossed, on: true },
  { label: 'Themes', Icon: Palette },
  { label: 'Brands', Icon: Tag },
  { label: 'Accounts', Icon: Users },
]

function BackOffice() {
  return (
    <Window
      className="cb-win"
      sidebarWidth={170}
      sidebar={
        <div className="cb-side">
          <div className="cb-side__brand">
            <span className="cb-side__mark"><img src={dashMark} alt="" /></span>
            <span>
              <img className="cb-side__word" src={dashWordmark} alt="Dash" />
              <span className="cb-side__sub">BACK OFFICE</span>
            </span>
          </div>
          <div className="cb-side__pick">
            <span>Trattoria Fiorella<ChevronDown size={14} strokeWidth={2} /></span>
            <span>Kemang · Jakarta<ChevronDown size={14} strokeWidth={2} /></span>
          </div>
          <nav className="cb-side__nav">
            {NAV.map(({ label, Icon, on }) => (
              <span key={label} data-on={on || undefined}><Icon size={16} strokeWidth={1.8} />{label}</span>
            ))}
          </nav>
          <div className="cb-side__me">
            <span className="cb-side__av">DR</span>
            <span><b>Denny Ryanto</b><i>Administrator</i></span>
          </div>
        </div>
      }
      lead={
        <span className="cb-crumb">
          <span>Menu Items</span> / <b>Bistecca alla Fiorentina</b>
        </span>
      }
      toolbar={
        <span className="cb-actions">
          <span className="cb-btn">Preview</span>
          <span className="cb-btn" data-primary>Save changes</span>
        </span>
      }
      body={{ className: 'cb-body' }}
    >
      <div className="cb-bo">
        <div className="cb-bo__l">
          <div className="cb-photo">
            <img src={steak} alt="" />
            <span className="cb-avail"><i />AVAILABLE</span>
          </div>
          <div className="cb-fields">
            <div><em>CATEGORY</em><b>Secondi</b></div>
            <div><em>PRICE</em><b data-blue>IDR 285</b></div>
            <div><em>PREP TIME</em><b>25 min</b></div>
            <div className="cb-fields__st">
              <span><em>STATUS</em><b data-green>Available</b></span>
              <span className="cb-tog"><i /></span>
            </div>
          </div>
          <div className="cb-desc">
            <em>DESCRIPTION</em>
            Dry-aged Florentine T-bone, grilled over oak and finished with rosemary, sea salt and Tuscan olive oil. Served with your choice of contorni.
          </div>
        </div>
        <div className="cb-bo__r">
          <em className="cb-mod">MODIFIERS</em>
          <div className="cb-card">
            <div className="cb-card__h">
              <span><b>Contorni</b><i>Choose up to 2 · Required</i></span>
              <span className="cb-edit"><Pencil size={12} strokeWidth={2} />Edit</span>
            </div>
            {MODS.map(([id, name, price]) => (
              <div key={id} className="cb-mrow">
                <span>{id}</span>
                <span>{name}</span>
                <span data-inc={price === 'Included' || undefined}>{price}</span>
              </div>
            ))}
          </div>
          <div className="cb-card">
            <div className="cb-card__h">
              <span><b>Cottura</b><i>Doneness · Required</i></span>
              <span className="cb-edit"><Pencil size={12} strokeWidth={2} />Edit</span>
            </div>
            <div className="cb-chips"><span>Al Sangue</span><span data-on>Media</span><span>Ben Cotta</span></div>
          </div>
        </div>
      </div>
    </Window>
  )
}

export default function DashCaptainBackoffice() {
  return (
    <Stage
      width={1100}
      height={480}
      compact={{ below: 640, width: 358, height: 546 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme="dark"
      cursor={{ at: REST, style: 'touch', idle: false }}
      className="cb"
    >
      {(s, _rect, layout) => (
        <>
          {layout === 'wide' && <BackOffice />}
          <Captain s={s} />
        </>
      )}
    </Stage>
  )
}
