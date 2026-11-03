import { Calendar, ChartColumn, Clapperboard, CirclePlus, LayoutDashboard, ListVideo, MapPin, Megaphone, Monitor } from 'lucide-react'
import { Stage, Window, type Act } from '../../kit'
import './lumio.css'
import type { Meta } from '../plan'
import logo from './lumio-logo.svg'
import sHighway from './img/s-highway.webp'
import sCity from './img/s-city.webp'
import sMarket from './img/s-market.webp'
import cRamadan from './img/c-ramadan.webp'
import cCar from './img/c-car.webp'
import cRetail from './img/c-retail.webp'
import cVeg from './img/c-veg.webp'
import tSenopati from './img/t-senopati.webp'
import tKelapa from './img/t-kelapa.webp'
import tPremium from './img/t-premium.webp'
import tTransport from './img/t-transport.webp'
import tSudirman from './img/t-sudirman.webp'
import tGatot from './img/t-gatot.webp'

export const meta: Meta = {
  id: 'lumio-network-cms',
  case: 'Dash · Lumio',
  title: 'Lumio network and CMS',
  head: 'LUMIO · DIGITAL SIGNAGE CMS',
  note: '150+ DISPLAY LOCATIONS AND GROWING',
  lead: 'Lumio is a cloud platform that gives digital-signage owners business metrics and sells their screen time, across 150+ locations.',
  layout: 'full',
  stageWidth: 1100,
  notes: [
    ['One campaign, the screen it plays on.', 'In the CMS a campaign is picked; the billboard it belongs to changes to that creative. Gatot Subroto (Automotive Launch) turns the highway billboard to the car film; Premium Supermarket (FMCG Weekly Deals) turns the supermarket screen to the produce film. Picking Senopati and Kelapa Gading puts them back, which is the loop reset.'],
    ['What came from the drawer.', 'The CMS screens page, its stats, tiles, campaign names and uptimes, and the four location photos with their LIVE badges. The creatives on the screens are the ones the old Lumio network cycled through; each is also the photo on its CMS tile, which is what ties them.'],
    ['What changed.', 'The two old drawer figures are one: the network photos sit beside the CMS and respond to it. The stat cards lost their small charts. The tile grid is three columns and cropped so the type reads. Locations are Highways, Supermarkets and City Streets; Public Transport is left out. At 358 wide one location card sits over the CMS row that changes it.'],
    ['Not checked.', 'Frame rate, and the loop inside the built page.'],
  ],
}

// Lumio: a CMS window and the screens it publishes to. Two campaigns are
// playing; the manager picks Gatot Subroto's, and the highway billboard turns
// to that creative; then Premium Supermarket's, and the supermarket screen
// follows. Picking the first two again puts both back, so the loop resets by
// the same gesture it ran on. The poster is both screens changed.
//
// Real strings: Screens, Jakarta network · 24 displays, This week, New
// Campaign, the four stats, six tiles with their cities, resolutions,
// campaigns and uptimes, ONLINE, LIVE, Highways, LED BILLBOARD, Supermarkets,
// INDOOR DISPLAY, the sidebar labels.

type S = { a: 'senopati' | 'gatot'; b: 'kelapa' | 'premium' }
const initial: S = { a: 'senopati', b: 'kelapa' }
const poster: S = { a: 'gatot', b: 'premium' }

const REST = { wide: { x: 470, y: 440 }, compact: { x: 300, y: 350 } }

async function script(a: Act<S>) {
  await a.wait(1500)
  // 1. A campaign is picked; its screen follows
  a.mark('pick-a')
  await a.move({ at: 'gatot', x: 0.5, y: 0.35 })
  await a.wait(250)
  await a.click()
  await a.set({ a: 'gatot' })
  await a.wait(2400)
  if (a.layout === 'wide') {
    // 2. Another campaign, another screen
    a.mark('pick-b')
    await a.move({ at: 'premium', x: 0.5, y: 0.35 })
    await a.wait(250)
    await a.click()
    await a.set({ b: 'premium' })
    await a.wait(2600)
    // The first two go back, one gesture each
    a.mark('back')
    await a.move({ at: 'kelapa', x: 0.5, y: 0.35 })
    await a.wait(250)
    await a.click()
    await a.set({ b: 'kelapa' })
    await a.wait(700)
  } else {
    await a.wait(700)
  }
  await a.move({ at: 'senopati', x: 0.5, y: 0.35 })
  await a.wait(250)
  await a.click()
  await a.set({ a: 'senopati' })
  await a.move(REST[a.layout], { duration: 800 })
  await a.wait(1600)
}

type Tile = { id: string; name: string; res: string; campaign: string; pct: number; img: string; online?: boolean }
const TILES: Tile[] = [
  { id: 'senopati', name: 'Senopati', res: '1080p', campaign: 'Ramadan Campaign 2026', pct: 99.9, img: tSenopati },
  { id: 'kelapa', name: 'Kelapa Gading', res: '1080p', campaign: 'Retail Q3 Rotation', pct: 99.7, img: tKelapa },
  { id: 'premium', name: 'Premium Supermarket', res: '1080p', campaign: 'FMCG Weekly Deals', pct: 100, img: tPremium },
  { id: 'transport', name: 'Transport', res: '720p', campaign: 'Public Service & Ads', pct: 98.6, img: tTransport },
  { id: 'sudirman', name: 'Sudirman', res: '1080p', campaign: 'Corporate Brand Loop', pct: 99.5, img: tSudirman },
  { id: 'gatot', name: 'Gatot Subroto', res: '1080p', campaign: 'Automotive Launch', pct: 99.2, img: tGatot },
]
const ORDER_WIDE = ['senopati', 'kelapa', 'premium', 'transport', 'sudirman', 'gatot']
// Narrow: the two creatives the highway billboard plays come first
const ORDER_COMPACT = ['senopati', 'gatot']

const STATS: [string, string, string?][] = [
  ['DISPLAYS ONLINE', '23', '/ 24'],
  ['NETWORK UPTIME', '99.8%'],
  ['ACTIVE CAMPAIGNS', '8'],
  ['IMPRESSIONS TODAY', '1.24M'],
]

function TileCard({ t, on }: { t: Tile; on: boolean }) {
  return (
    <div className="lm-tile" data-sel={on || undefined} data-target={t.id} data-cursor="pointer">
      <div className="lm-tile__img">
        <img src={t.img} alt="" />
        <span className="lm-online"><i />ONLINE</span>
        <code className="lm-res">{t.res}</code>
      </div>
      <div className="lm-tile__t">
        <div className="lm-tile__n"><b>{t.name}</b></div>
        <div className="lm-tile__c">{t.campaign}</div>
        <div className="lm-tile__u"><span><i style={{ width: `${t.pct}%` }} /></span><b>{t.pct === 100 ? '100%' : `${t.pct}%`}</b></div>
      </div>
    </div>
  )
}

function Location({ scene, label, sub, box, a, b, bOn, className, hot }: { scene: string; label: string; sub: string; box?: [number, number, number, number]; a?: string; b?: string; bOn?: boolean; className?: string; hot?: boolean }) {
  return (
    <div className={`lm-loc${className ? ` ${className}` : ''}`} data-hot={hot || undefined}>
      <div className="lm-loc__scene">
        <img src={scene} alt="" />
        {box && (
          <span className="lm-ov" aria-hidden style={{ left: `${box[0]}%`, top: `${box[1]}%`, width: `${box[2]}%`, height: `${box[3]}%` }} data-b={bOn || undefined}>
            <img src={a} alt="" />
            <img src={b} alt="" />
          </span>
        )}
      </div>
      <span className="lm-live"><i />LIVE</span>
      <div className="lm-loc__t"><b>{label}</b><code>{sub}</code></div>
    </div>
  )
}

const NAV = [
  { label: 'Dashboard', Icon: LayoutDashboard },
  { label: 'Screens', Icon: Monitor, on: true },
  { label: 'Content', Icon: Clapperboard },
  { label: 'Playlists', Icon: ListVideo },
  { label: 'Campaigns', Icon: Megaphone },
  { label: 'Analytics', Icon: ChartColumn },
  { label: 'Locations', Icon: MapPin },
]

function Cms({ s, wide }: { s: S; wide: boolean }) {
  const ids = wide ? ORDER_WIDE : ORDER_COMPACT
  const tiles = ids.map((id) => TILES.find((t) => t.id === id)!)
  const sel = (id: string) => id === s.a || (wide && id === s.b)
  const actions = (
    <span className="lm-actions">
      <span className="lm-btn"><Calendar size={14} strokeWidth={1.8} />This week</span>
      <span className="lm-btn" data-primary><CirclePlus size={14} strokeWidth={1.8} />New Campaign</span>
    </span>
  )
  const body = (
    <div className="lm-page">
      {wide && (
        <div className="lm-stats">
          {STATS.map(([l, v, u]) => (
            <div key={l}><em>{l}</em><b data-blue={l === 'IMPRESSIONS TODAY' || undefined}>{v}{u && <small>{u}</small>}</b></div>
          ))}
        </div>
      )}
      <div className="lm-grid">
        {tiles.map((t) => <TileCard key={t.id} t={t} on={sel(t.id)} />)}
      </div>
    </div>
  )
  if (!wide) {
    return (
      <Window className="lm-win" title="Screens" toolbar={undefined} body={{ className: 'lm-body' }}>
        {body}
      </Window>
    )
  }
  return (
    <Window
      className="lm-win"
      sidebarWidth={150}
      sidebar={
        <div className="lm-side">
          <div className="lm-side__logo"><img src={logo} alt="Lumio" /></div>
          <nav>
            {NAV.map(({ label, Icon, on }) => (
              <span key={label} data-on={on || undefined}><Icon size={16} strokeWidth={1.8} />{label}</span>
            ))}
          </nav>
          <div className="lm-side__me">
            <span className="lm-side__av">DR</span>
            <span><b>Denny Ryanto</b><i>VP of Design</i></span>
          </div>
        </div>
      }
      lead={<span className="lm-head"><b>Screens</b><i>Jakarta network · 24 displays</i></span>}
      toolbar={actions}
      body={{ className: 'lm-body' }}
    >
      {body}
    </Window>
  )
}

export default function LumioNetworkCms() {
  return (
    <Stage
      width={1100}
      height={500}
      compact={{ below: 640, width: 358, height: 489 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme="dark"
      cursor={{ at: REST, idle: false }}
      className="lm"
    >
      {(s, _rect, layout) => {
        const wide = layout === 'wide'
        return (
          <>
            <Cms s={s} wide={wide} />
            <Location scene={sHighway} label="Highways" sub="LED BILLBOARD" box={[37.1, 11.5, 25.8, 23.1]} a={cRamadan} b={cCar} bOn={s.a === 'gatot'} className="lm-loc--1" hot={s.a === 'gatot'} />
            {wide && (
              <>
                <Location scene={sMarket} label="Supermarkets" sub="INDOOR DISPLAY" box={[65.3, 8.7, 10.3, 36.4]} a={cRetail} b={cVeg} bOn={s.b === 'premium'} className="lm-loc--2" hot={s.b === 'premium'} />
                <Location scene={sCity} label="City Streets" sub="LED BILLBOARD CLUSTER" className="lm-loc--3" />
              </>
            )}
          </>
        )
      }}
    </Stage>
  )
}

