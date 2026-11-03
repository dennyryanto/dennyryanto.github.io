import { Phone, Stage, type Act } from '../../kit'
import { Bus, Gamepad2, Gift, Headset, Heart, House, LayoutGrid, Mail, MoveRight, Plus, ReceiptText, ScanLine, Send, ShieldCheck, ShoppingBag, Smartphone, TicketPercent, Ticket, User, Wifi, Zap, FileText } from 'lucide-react'
import './home.css'
import { STREET } from './street'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'linkaja-home',
  case: 'LinkAja',
  title: 'Home screen as it ships today',
  head: 'HOME SCREEN · AS IT SHIPS TODAY',
  note: 'ILLUSTRATIVE',
  lead: 'The home-screen revamp I co-led for 70M+ users. At the time the goal was to refresh the design and unify the visual style, introducing updated icons and illustrations for a better user experience. Dashboards and research drove it, and it improved the information architecture, clarity and engagement. It is still the design in the app today.',
  layout: 'split',
  stageWidth: 400,
  notes: [
    ['One phone, one calm loop.', 'The screen is the shipped home as it stands: street illustration and headset in the header, balances, the four quick actions, the service grid, the promo area. The only thing that moves is the promo carousel, advancing the way a banner area does on its own, with the page dots following. After the third banner it comes round to the first, so nothing runs backwards.'],
    ['What replaces the old block.', 'The isometric phone, its extruded edge and the faint icon pattern on the board are gone: the phone is flat, and the page ground is the board. The product colour (LinkAja red) stays inside the screen.'],
    ['Placeholder banners.', 'The existing mockup drew one banner, "Bayar apa aja & di mana aja", and flagged its art as a placeholder. The second and third banners have no copy in the source, so they are plain art with a placeholder line pair. Give them real banners if the owner has them.'],
    ['Checked.', 'The rehearsal gate at both widths; reduced motion shows the screen on its first banner. Not checked: frame rate on a real phone, and the loop inside the built page.'],
  ],
}

// LinkAja's home screen as it ships today. A home is a still with a little life:
// the promo area advances on its own (banner 1, 2, 3, then round to 1), the page
// dots following, and nothing else moves. The carousel is an endless track with
// a copy of banner 1 at its end, so the loop continues forward and the reset is
// a snap between two identical frames. The poster is banner 1, the screen as it
// is in the app.
//
// Real strings (all from the existing mockup): Hai, Linka Jadid; Saldo Kamu
// Rp1.000.000; AKHLAK Poin 150.000; MyPaylater Aktifkan; the four quick actions;
// the eight services (Baru on Kirim ke E-Wallet); Spesial Hanya Untukmu!; the
// first banner; the five tabs.

type S = { i: number }
const initial: S = { i: 0 }
const poster: S = { i: 0 }

const STEP = 352 // banner 342 + 10 gap, in screen points

async function script(a: Act<S>) {
  await a.wait(1500)
  a.mark('next1')
  await a.set({ i: 1 })
  await a.wait(2400)
  a.mark('next2')
  await a.set({ i: 2 })
  await a.wait(2400)
  a.mark('wrap')
  await a.set({ i: 3 })
  await a.wait(1100)
  // The track holds a copy of the first banner at its end: snapping to the start is invisible
  await a.snap({ i: 0 })
  await a.wait(200)
}

const I = { size: 28, strokeWidth: 1.7 } as const
const T = { size: 26, strokeWidth: 1.8 } as const

const QUICK = [
  { label: 'Isi Saldo', icon: <ReceiptText {...I} />, badge: <Plus size={9} strokeWidth={3.4} /> },
  { label: 'Kirim Saldo', icon: <Smartphone {...I} />, badge: <MoveRight size={9} strokeWidth={3.2} /> },
  { label: 'Kode Tiket', icon: <Ticket {...I} /> },
  { label: 'Semua', icon: <LayoutGrid {...I} /> },
]

const SERVICES = [
  { label: 'Pulsa/Data', icon: <Wifi {...T} />, c: '#e8232b', bg: '#fde7e7' },
  { label: 'Listrik', icon: <Zap {...T} />, c: '#1196b0', bg: '#dcf5fa' },
  { label: 'Bis', icon: <Bus {...T} />, c: '#2f9d4a', bg: '#e0f4e6' },
  { label: 'Kirim ke E-Wallet', node: <>Kirim ke <span className="lh-nb">E-Wallet</span></>, icon: <Send {...T} />, c: '#2b59c3', bg: '#e3eafc', tag: 'Baru' },
  { label: 'Mgames', icon: <Gamepad2 {...T} />, c: '#d9791c', bg: '#fff0dc' },
  { label: 'Infaq', icon: <span className="lh-rp">Rp</span>, c: '#1c8a7a', bg: '#dbf3ee' },
  { label: 'Samsat', icon: <ShieldCheck {...T} />, c: '#c32a86', bg: '#fce4f2' },
  { label: 'Lainnya', icon: <LayoutGrid {...T} />, c: '#4b5563', bg: '#eceef3' },
]

const TABS = [
  { label: 'Beranda', icon: <House size={24} strokeWidth={2} />, on: true },
  { label: 'Riwayat', icon: <FileText size={24} strokeWidth={1.7} /> },
  null,
  { label: 'Pesan', icon: <Mail size={24} strokeWidth={1.7} /> },
  { label: 'Akun', icon: <User size={24} strokeWidth={1.7} /> },
]

function Arrow() {
  return (
    <span className="lh-go" aria-hidden>
      <MoveRight size={11} strokeWidth={3.2} />
    </span>
  )
}

export default function LinkAjaHome() {
  return (
    <Stage<S>
      width={400}
      height={755}
      compact={{ below: 560, width: 358, height: 718 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme="dark"
      className="lh"
    >
      {(s, _rect, layout) => (
        <Phone width={layout === 'compact' ? 326 : 340} className="lh-phone">
          <div className="lh-app">
            <div className="lh-street" style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(STREET)}")` }} />

            <div className="lh-top">
              <span className="lh-logo">
                <span>Link</span>
                <span>Aja!</span>
              </span>
              <span className="lh-icons">
                <span className="lh-ibtn">
                  <Heart size={22} strokeWidth={1.6} fill="currentColor" />
                </span>
                <span className="lh-ibtn">
                  <Headset size={24} strokeWidth={1.8} />
                </span>
              </span>
            </div>

            <div className="lh-hero">
              <div className="lh-hero__hi">Hai, Linka Jadid</div>
              <div className="lh-hero__cards">
                <div className="lh-bal">
                  <span className="lh-bal__k">Saldo Kamu</span>
                  <span className="lh-bal__v">
                    Rp1.000.000
                    <Arrow />
                  </span>
                </div>
                <div className="lh-bal">
                  <span className="lh-bal__k">AKHLAK Poin</span>
                  <span className="lh-bal__v">
                    <span className="lh-coin" aria-hidden />
                    150.000
                    <Arrow />
                  </span>
                </div>
                <div className="lh-bal">
                  <span className="lh-bal__k">MyPaylater</span>
                  <span className="lh-bal__v lh-bal__v--cta">Aktifkan</span>
                </div>
              </div>
            </div>

            <div className="lh-quick">
              {QUICK.map((q) => (
                <span key={q.label} className="lh-quick__i">
                  <span className="lh-quick__ic">
                    {q.icon}
                    {q.badge && <span className="lh-badge">{q.badge}</span>}
                  </span>
                  <span>{q.label}</span>
                </span>
              ))}
            </div>

            <div className="lh-grid">
              {SERVICES.map((v) => (
                <span key={v.label} className="lh-svc">
                  <span className="lh-svc__ic" style={{ background: v.bg, color: v.c }}>
                    {v.icon}
                    {v.tag && <span className="lh-new">{v.tag}</span>}
                  </span>
                  <span className="lh-svc__l">{'node' in v ? v.node : v.label}</span>
                </span>
              ))}
            </div>

            <div className="lh-promo__title">Spesial Hanya Untukmu!</div>
            <div className="lh-promo">
              <div className="lh-track" style={{ transform: `translateX(${-s.i * STEP}px)` }}>
                <div className="lh-ban lh-ban--1">
                  <span className="lh-ban__h">
                    Bayar apa aja &amp;
                    <br />
                    di mana aja
                  </span>
                  <span className="lh-ban__s">praktis selalu ada LinkAja!</span>
                  <span className="lh-ban__tile">
                    <ShoppingBag size={26} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="lh-ban lh-ban--2">
                  <span className="lh-ban__lines">
                    <span className="lh-pl" style={{ width: 168 }} />
                    <span className="lh-pl lh-pl--s" style={{ width: 112 }} />
                  </span>
                  <span className="lh-ban__tile">
                    <Gift size={26} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="lh-ban lh-ban--3">
                  <span className="lh-ban__lines">
                    <span className="lh-pl" style={{ width: 150 }} />
                    <span className="lh-pl lh-pl--s" style={{ width: 96 }} />
                  </span>
                  <span className="lh-ban__tile">
                    <TicketPercent size={26} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="lh-ban lh-ban--1" aria-hidden>
                  <span className="lh-ban__h">
                    Bayar apa aja &amp;
                    <br />
                    di mana aja
                  </span>
                  <span className="lh-ban__s">praktis selalu ada LinkAja!</span>
                  <span className="lh-ban__tile">
                    <ShoppingBag size={26} strokeWidth={1.8} />
                  </span>
                </div>
              </div>
            </div>
            <div className="lh-dots">
              {[0, 1, 2].map((d) => (
                <span key={d} className="lh-dot" data-on={s.i % 3 === d || undefined} />
              ))}
            </div>

            <nav className="lh-tabs">
              {TABS.map((t, k) =>
                t ? (
                  <span key={t.label} className="lh-tab" data-on={t.on || undefined}>
                    {t.icon}
                    <span>{t.label}</span>
                  </span>
                ) : (
                  <span key={k} className="lh-tab lh-tab--pay">
                    <span className="lh-tab__gap" />
                    <span>Bayar</span>
                  </span>
                ),
              )}
            </nav>
            <span className="lh-fab">
              <ScanLine size={26} strokeWidth={2} />
            </span>
          </div>
        </Phone>
      )}
    </Stage>
  )
}
