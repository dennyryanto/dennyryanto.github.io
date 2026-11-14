import { Phone, Stage } from '../../kit'
import { ArrowRight, FileText, Mail, Signal, User, Wifi } from 'lucide-react'
import qris from './qris.svg'
import './home.css'
import { STREET } from './street'
import iLogo from './img/logo.webp'
import iHeart from './img/btn-heart.webp'
import iAgent from './img/btn-agent.webp'
import qIsi from './img/q-isi.webp'
import qKirim from './img/q-kirim.webp'
import qTarik from './img/q-tarik.webp'
import qSemua from './img/q-semua.webp'
import sPulsa from './img/svc-pulsa.webp'
import sListrik from './img/svc-listrik.webp'
import sKartu from './img/svc-kartu.webp'
import sEasycash from './img/svc-easycash.webp'
import sVoucher from './img/svc-voucher.webp'
import sInfaq from './img/svc-infaq.webp'
import sTv from './img/svc-tv.webp'
import sLainnya from './img/svc-lainnya.webp'
import banner from './img/banner.webp'
import promo from './img/promo.webp'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'linkaja-home',
  case: 'LinkAja',
  title: 'Home screen as it ships today',
  head: 'HOME SCREEN · AS IT SHIPS TODAY',
  note: 'FROM THE LIVE APP',
  lead: 'The home-screen revamp I co-led for 70M+ users. It is still the design in the app today.',
  layout: 'split',
  stageWidth: 400,
  sizes: { wide: [358, 736], compact: [358, 736], below: 560 }, // the wide design (400) is below `below`, so the stage always draws the compact one
  notes: [
    ['The real screen.', 'This is the home screen as it runs on an Android phone today, redrawn from a screenshot of the live app: the street header with the logo, the favourites and help buttons, the red balance card (Saldo Kamu, Saldo Bonus, Easycash), the four wallet actions, the eight services, the "Berbagi di setiap transaksi" banner and the first promo card of "Spesial Hanya Untukmu!" under the tab bar. The name and the balance are the author\'s own.'],
    ['What is real and what is redrawn.', 'The layout is measured from the screenshot, in the app\'s own type (Mulish). The service and wallet-action icons, the logo, the banner and the promo card are cropped from the screenshot at its resolution; the status bar, the balance card, the labels and the tab bar are drawn. The Bayar button carries the QRIS mark (Wikimedia Commons, "QRIS logo.svg"); the mark belongs to its owner.'],
    ['Still on purpose.', 'The screen does not move: there is one screenshot, so there is nothing real to advance to. The old animated promo carousel and its invented banners are gone.'],
    ['Not checked.', 'The loop inside the built page (there is none now), and Indonesian text at a larger system font size.'],
  ],
}

// LinkAja's home screen as it ships today, drawn from a screenshot of the live app (Android, 900 x 2000).
// The screen is laid out in screenshot pixels scaled to the Pixel frame's 412 pt (--k in home.css),
// so every position below is a number read off the screenshot. A still: one screenshot, nothing real to advance.
// Real strings: Hai, DENNY RYANTO; Saldo Kamu Rp9.701; Saldo Bonus 0; Easycash Cek di Sini; the four wallet
// actions; the eight services; the banner; Spesial Hanya Untukmu!; the five tabs.

const WALLET = [
  { label: 'Isi Saldo', src: qIsi, x: 132 },
  { label: 'Kirim Saldo', src: qKirim, x: 344 },
  { label: 'Tarik Saldo', src: qTarik, x: 556 },
  { label: 'Semua', src: qSemua, x: 768 },
]

const SERVICES = [
  { label: ['Pulsa/Data'], src: sPulsa },
  { label: ['Listrik'], src: sListrik },
  { label: ['Kartu Uang', 'Elektronik'], src: sKartu },
  { label: ['Pinjaman', 'Easycash'], src: sEasycash },
  { label: ['Voucher &', 'E-Wallet'], src: sVoucher },
  { label: ['Infaq'], src: sInfaq },
  { label: ['TV Kabel &', 'Internet'], src: sTv },
  { label: ['Lainnya'], src: sLainnya },
]

const COLS = [126, 342, 558, 774]

function Arrow() {
  return (
    <span className="lh-go" aria-hidden>
      <ArrowRight size={10} strokeWidth={3.4} />
    </span>
  )
}

function Home() {
  return (
    <svg className="lh-homeicon" viewBox="0 0 48 48" aria-hidden>
      <path d="M24 5 6 20v22h13V30h10v12h13V20z" fill="currentColor" opacity=".25" />
      <path d="M24 7 8 21v19h11V29h10v11h11V21z" fill="currentColor" />
      <circle cx="24" cy="21" r="4" fill="#fff" />
    </svg>
  )
}

export default function LinkAjaHome() {
  return (
    <Stage width={400} height={755} compact={{ below: 560, width: 358, height: 736 }} theme="dark" className="lh">
      {(_s, _rect, layout) => (
        <Phone width={layout === 'compact' ? 326 : 340} frame="android" status={false} className="lh-phone">
          <div className="lh-app">
            <div className="lh-street" style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(STREET)}")` }} />

            <div className="lh-sb">
              <span>20:47</span>
              <span className="lh-sb__g">
                <Wifi size={15} strokeWidth={2.2} />
                <Signal size={15} strokeWidth={2.2} />
                <span className="lh-batt">51</span>
              </span>
            </div>

            <img className="lh-logo" src={iLogo} alt="LinkAja" />
            <img className="lh-ibtn lh-ibtn--1" src={iHeart} alt="" />
            <img className="lh-ibtn lh-ibtn--2" src={iAgent} alt="" />

            <div className="lh-hero">
              <div className="lh-hero__hi">Hai, DENNY RYANTO</div>
              <div className="lh-bal lh-bal--1">
                <span className="lh-bal__k">Saldo Kamu</span>
                <span className="lh-bal__v">
                  Rp9.701
                  <Arrow />
                </span>
              </div>
              <div className="lh-bal lh-bal--2">
                <span className="lh-bal__k">Saldo Bonus</span>
                <span className="lh-bal__v">
                  <span className="lh-coin" aria-hidden>
                    L
                  </span>
                  0
                  <Arrow />
                </span>
              </div>
              <div className="lh-bal lh-bal--3">
                <span className="lh-bal__k">
                  <svg className="lh-ec" viewBox="0 0 24 24" aria-hidden>
                    <rect width="24" height="24" rx="6" fill="#19c25f" />
                    <path d="M8 7.2l1.2 2.4M15.5 7l-.5 2.6M6.8 12.4c2.4 4 8.4 4 10.4 0" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                  Easycash
                </span>
                <span className="lh-bal__v lh-bal__v--cta">
                  Cek di Sini
                  <Arrow />
                </span>
              </div>
            </div>

            <div className="lh-quick">
              {WALLET.map((q) => (
                <span key={q.label} className="lh-quick__i" style={{ ['--x' as string]: q.x - 35 }}>
                  <img src={q.src} alt="" />
                  <span>{q.label}</span>
                </span>
              ))}
            </div>

            {SERVICES.map((v, i) => (
              <span key={v.label.join(' ')} className="lh-svc" style={{ ['--x' as string]: COLS[i % 4], ['--y' as string]: i < 4 ? 846 : 1067 }}>
                <img src={v.src} alt="" />
                <span className="lh-svc__l">
                  {v.label.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </span>
              </span>
            ))}

            <img className="lh-banner" src={banner} alt="Berbagi di setiap transaksi" />

            <div className="lh-special">
              <div className="lh-special__t">Spesial Hanya Untukmu!</div>
              <img className="lh-promo" src={promo} alt="Easycash: cek limit sampai 100 juta" />
            </div>

            <nav className="lh-tabs">
              <span className="lh-tab lh-tab--on" style={{ ['--x' as string]: 97 }}>
                <Home />
                <span>Beranda</span>
              </span>
              <span className="lh-tab" style={{ ['--x' as string]: 274 }}>
                <FileText size={26} strokeWidth={1.6} />
                <span>Riwayat</span>
              </span>
              <span className="lh-tab lh-tab--pay" style={{ ['--x' as string]: 450 }}>
                <span>Bayar</span>
              </span>
              <span className="lh-tab" style={{ ['--x' as string]: 627 }}>
                <Mail size={26} strokeWidth={1.6} />
                <span>Pesan</span>
              </span>
              <span className="lh-tab" style={{ ['--x' as string]: 803 }}>
                <User size={26} strokeWidth={1.6} />
                <span>Profil</span>
              </span>
            </nav>
            <span className="lh-fab">
              <span className="lh-fab__frame" aria-hidden />
              <img className="lh-qris" src={qris} alt="QRIS" />
            </span>
          </div>
        </Phone>
      )}
    </Stage>
  )
}
