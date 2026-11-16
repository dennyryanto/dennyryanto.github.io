import { Phone, Stage } from '../../kit'
import { Bus, ChevronRight, CreditCard, Droplet, FileText, Heart, LayoutGrid, Mail, Plus, Shield, Signal, Smartphone, Tv, User, UserSquare2, Wifi, Zap, House } from 'lucide-react'
import './before.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'linkaja-home-before',
  case: 'LinkAja',
  title: 'Home screen before the revamp',
  head: 'HOME SCREEN · BEFORE THE REVAMP',
  note: 'REDRAWN',
  lead: 'The home screen before the revamp, redrawn from low-resolution screenshots.',
  layout: 'split',
  stageWidth: 400,
  sizes: { wide: [358, 736], compact: [358, 736], below: 560 }, // always the compact design, like linkaja-home
  notes: [
    ['Redrawn from low-resolution screenshots.', 'The original captures were too small to use, so this screen is redrawn from them: the layout, the strings (Linka Jadid, Rp 1.000.000, Saldo Bonus 10.000, Kirim Uang, Isi Saldo, Kode Tiket, the eight services) and the look of the icons (filled glyphs, all in one red-to-blue gradient) follow the screenshots; the exact drawings do not. It is a still, shown as a shadow behind the live screen.'],
  ],
}

// The home screen before the revamp, redrawn for the before/after beside the live screen (linkaja-home). Same stage,
// frame and size as that one so the two overlay exactly. A still: no script. Positions are in points (412 wide).

// The old service icons: filled glyphs, all in the one red-to-blue gradient the old app used (owner), with white details
const G = { size: 28, strokeWidth: 1.6, color: '#fff', fill: 'url(#lb-grad)' } as const

const SERVICES = [
  { label: ['Pulsa/Data'], icon: <Smartphone {...G} /> },
  { label: ['Listrik'], icon: <Zap {...G} /> },
  { label: ['PDAM'], icon: <Droplet {...G} /> },
  { label: ['TV Kabel'], icon: <Tv {...G} /> },
  { label: ['Asuransi'], icon: <Shield {...G} /> },
  { label: ['Kartu Uang', 'Elektronik'], icon: <CreditCard {...G} />, tag: 'Baru' },
  { label: ['Transportasi'], icon: <Bus {...G} /> },
  { label: ['Semua'], icon: <LayoutGrid {...G} /> },
]

const ACTIONS = ['Kirim Uang', 'Isi Saldo', 'Kode Tiket', 'Semua']

const TABS = [
  { label: 'Beranda', icon: <House size={22} strokeWidth={2.2} />, on: true },
  { label: 'Riwayat', icon: <FileText size={22} strokeWidth={1.4} /> },
  null,
  { label: 'Pesan', icon: <Mail size={22} strokeWidth={1.4} /> },
  { label: 'Akun', icon: <User size={22} strokeWidth={1.4} /> },
]

export default function LinkAjaHomeBefore() {
  return (
    <Stage width={400} height={755} compact={{ below: 560, width: 358, height: 736 }} theme="dark" className="lb">
      {(_s, _rect, layout) => (
        <Phone width={layout === 'compact' ? 326 : 340} frame="android" status={false} className="lb-phone">
          <div className="lb-app">
            <div className="lb-sb">
              <span>9:41</span>
              <span className="lb-sb__g">
                <Wifi size={15} strokeWidth={2.2} />
                <Signal size={15} strokeWidth={2.2} />
                <span className="lb-batt">100%</span>
              </span>
            </div>

            <div className="lb-head">
              <span className="lb-avatar" aria-hidden>
                <User size={18} strokeWidth={1.6} />
              </span>
              <span className="lb-name">Linka Jadid</span>
              <span className="lb-hi">
                <UserSquare2 size={20} strokeWidth={1.5} />
                <Heart size={20} strokeWidth={1.5} fill="currentColor" />
              </span>
            </div>

            <div className="lb-card">
              <span className="lb-logo">
                <span>Link</span>
                <span>Aja!</span>
              </span>
              <div className="lb-bal">Rp 1.000.000</div>
              <div className="lb-bonus">
                Saldo Bonus 10.000 <ChevronRight size={12} strokeWidth={2.6} />
              </div>
              <div className="lb-acts">
                {ACTIONS.map((a) => (
                  <span key={a} className="lb-act">
                    <span className="lb-act__ic">
                      <span>Rp</span>
                    </span>
                    {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="lb-pay">
              <CreditCard size={20} strokeWidth={1.4} />
              <span className="lb-pay__t">
                <b>Tambah Metode Pembayaran</b>
                <span>Hubungkan kartu debit &amp; sumber dana lain</span>
              </span>
              <Plus size={16} strokeWidth={2.4} />
            </div>

            <svg width="0" height="0" aria-hidden style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="lb-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#e8232b" />
                  <stop offset="1" stopColor="#2a6fc9" />
                </linearGradient>
              </defs>
            </svg>
            <div className="lb-grid">
              {SERVICES.map((v) => (
                <span key={v.label.join(' ')} className="lb-svc">
                  <span className="lb-svc__ic">
                    {v.icon}
                    {v.tag && <span className="lb-new">{v.tag}</span>}
                  </span>
                  <span className="lb-svc__l">
                    {v.label.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </span>
                </span>
              ))}
            </div>

            <div className="lb-ban">
              <span className="lb-ban__pill">Layanan Syariah</span>
              <span className="lb-ban__h">
                PILIHAN TRANSAKSI
                <br />
                UNTUK KENYAMANAN HATI
              </span>
              <span className="lb-ban__ph" aria-hidden />
            </div>
            <div className="lb-dots">
              {[0, 1, 2, 3, 4].map((d) => (
                <span key={d} className="lb-dot" data-on={d === 0 || undefined} />
              ))}
            </div>

            <nav className="lb-tabs">
              {TABS.map((t, k) =>
                t ? (
                  <span key={t.label} className="lb-tab" data-on={t.on || undefined}>
                    {t.icon}
                    <span>{t.label}</span>
                  </span>
                ) : (
                  <span key={k} className="lb-tab lb-tab--pay">
                    <span className="lb-tab__gap" />
                    <span>Bayar</span>
                  </span>
                ),
              )}
            </nav>
            <span className="lb-fab">
              <span className="lb-fab__q" aria-hidden />
            </span>
          </div>
        </Phone>
      )}
    </Stage>
  )
}
