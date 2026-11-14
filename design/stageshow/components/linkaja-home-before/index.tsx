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
    ['Redrawn from low-resolution screenshots.', 'The original captures were too small to use, so this screen is redrawn from them: the layout, the strings (Linka Jadid, Rp 1.000.000, Saldo Bonus 10.000, Kirim Uang, Isi Saldo, Kode Tiket, the eight services) and the look of the icons (small, bare glyphs in mixed colours and weights) follow the screenshots; the exact drawings do not. It is a still, built only to be compared with the live screen beside it.'],
  ],
}

// The home screen before the revamp, redrawn for the before/after beside the live screen (linkaja-home). Same stage,
// frame and size as that one so the two overlay exactly. A still: no script. Positions are in points (412 wide).

const G = { size: 26 } as const

const SERVICES = [
  { label: ['Pulsa/Data'], icon: <Smartphone {...G} strokeWidth={1.4} />, c: '#e8602b' },
  { label: ['Listrik'], icon: <Zap {...G} strokeWidth={2.6} fill="currentColor" />, c: '#e8232b' },
  { label: ['PDAM'], icon: <Droplet {...G} strokeWidth={1.8} fill="currentColor" />, c: '#2a6fc9' },
  { label: ['TV Kabel'], icon: <Tv {...G} strokeWidth={2.2} />, c: '#2a8fc9' },
  { label: ['Asuransi'], icon: <Shield {...G} strokeWidth={1.2} fill="currentColor" />, c: '#e8892b' },
  { label: ['Kartu Uang', 'Elektronik'], icon: <CreditCard {...G} strokeWidth={1.6} />, c: '#d4262e', tag: 'Baru' },
  { label: ['Transportasi'], icon: <Bus {...G} strokeWidth={2.4} />, c: '#e8602b' },
  { label: ['Semua'], icon: <LayoutGrid {...G} strokeWidth={1.2} />, c: '#d4262e' },
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

            <div className="lb-grid">
              {SERVICES.map((v) => (
                <span key={v.label.join(' ')} className="lb-svc">
                  <span className="lb-svc__ic" style={{ color: v.c }}>
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
