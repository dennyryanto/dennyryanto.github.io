import { Check, Collapse, Count, Phone, Stage, type Act } from '../../kit'
import { ArrowLeft, BatteryFull, Banknote, Check as Tick, ChevronRight, Clock, Heart, Landmark, Lock, Mail, MapPin, RefreshCw, Share2, Signal, TriangleAlert, Wallet, Wifi } from 'lucide-react'
import './flow.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'komunal-shipped-flow',
  case: 'Komunal',
  title: 'Shipped deposit flow',
  head: 'SHIPPED SCREEN + FLOW',
  note: 'DEPOSITOBPR · PRODUCT',
  lead: 'As shipped, in the app\'s own type and colours: the amount is checked as it is entered, the app recommends the one rail that works for this amount, bank and time, and nothing is locked while it waits for the funds.',
  layout: 'full',
  stageWidth: 820,
  sizes: { wide: [820, 750], compact: [358, 736], below: 620 },
  notes: [
    ['One phone, four screens.', 'The four screens that were side by side are one continuous flow: a product is picked from the BPR\'s detail page, the amount is entered and checked, the one rail that fits is recommended, the instructions wait for the funds, and the success screen arrives as the payoff. The loop closes when the success screen is dismissed over the detail page.'],
    ['Drawn from the live app.', 'The phone is an Android, as the app is, and the screens follow its screenshots: Poppins for headings, amounts and buttons, Mulish for body text and labels, the blue gradient of the home card and the BPR header, the pale blue ground, bordered white cards, the tinted product band with the amount in blue and the rate in green, pill tags. The same tokens are in the design system board above.'],
    ['What carries the story.', 'The amount is typed, the warning and the rail verdict appear because of it (RTGS is recommended, the other three leave the list as unavailable for Rp750 jt), the countdown ticks while nothing is locked, and the funds are detected without a tap. The success screen counts its total up.'],
    ['Changed from the old block.', 'The captions "1 Pick a product" to "4 Deposit active" are gone: the flow shows its own order. The first screen is now the BPR detail page with its product cards, as the live app has it, in place of the old product list. The bank avatars are a plain building glyph, since the logos are not the product\'s to redraw. BPR Artha Sejahtera\'s city and its three products (minimum amounts and the other two tenors and rates) are placeholders; only the 12-month, 6,75% product comes from the flow.'],
    ['Dismissal closes the loop.', 'The success screen is a cover: "Kembali ke Beranda" slides it away over the detail page. The flow behind it was put back while it was hidden, so no screen is ever seen sliding backwards.'],
    ['Checked.', 'The rehearsal gate at both widths; reduced motion shows the success screen. Not checked: frame rate on a real phone, and Indonesian text at a larger system font size.'],
  ],
}

// DepositoBPR as shipped, as one continuous flow on one phone (an Android, like the live app). Beats: 1 the
// BPR's detail page, a tap on its 12-month product pushes the amount screen; 2 the
// amount is entered (9 digits typed into the field) and checked as it goes: the
// warning for amounts over Rp500 jt appears and the rails settle, RTGS
// recommended and the other three unavailable for Rp750 jt; 3 a tap on "Lanjut
// ke instruksi" pushes the instructions, a countdown ticks, nothing is locked;
// 4 the funds are detected on their own (the waiting ring turns to a tick) and
// the success screen comes up as a cover, its total counting up. The payoff holds.
// The loop resets with a seen cause: a tap on "Kembali ke Beranda" dismisses the
// cover, and the screens it covered were put back while it hid them, so what it
// reveals is the detail page again. The poster is the success screen.
//
// Strings: from design/sections/komunal-shipped-flow.html; the look (Poppins and Mulish, the blue gradient, the
// product cards) is taken from screenshots of the live app.

type S = {
  step: number // 0 list, 1 amount, 2 instructions
  cover: boolean // the success screen
  focus: boolean
  n: number // digits typed
  warn: boolean
  rails: boolean
  cta: boolean
  sec: number // seconds left in the sending window
  found: boolean
  total: number
}

const initial: S = { step: 0, cover: false, focus: false, n: 0, warn: false, rails: false, cta: false, sec: 17112, found: false, total: 0 }
const poster: S = { step: 2, cover: true, focus: true, n: 9, warn: true, rails: true, cta: true, sec: 17108, found: true, total: 790500000 }

const REST = { wide: { x: 620, y: 650 }, compact: { x: 200, y: 690 } }
const DIGITS = '750000000'

// The flow's four beats, beside the phone on the wide design: each lights up as the demo reaches it and the last (the outcome) is lime
const STEPS = [
  ['Pick a product', 'A tap on the 12-month product of BPR Artha Sejahtera opens the amount screen.'],
  ['Enter the amount', 'It is checked as it is typed: over Rp500 jt raises a warning.'],
  ['One rail recommended', 'RTGS fits Rp750 jt and the other three drop out. Nothing is locked while it waits for the funds.'],
  ['Deposit active', 'The funds are detected on their own and the deposit starts.'],
]
const activeStep = (s: S) => (s.found || s.cover ? 3 : s.step === 2 ? 2 : s.step === 1 ? 1 : 0)

const group = (digits: string) => digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
const two = (n: number) => String(n).padStart(2, '0')

async function script(a: Act<S>) {
  await a.wait(600)
  a.mark('pick')
  await a.click('card')
  a.put({ step: 1 })
  await a.wait(700)
  a.mark('amount')
  await a.click('field')
  a.put({ focus: true })
  await a.wait(150)
  for (let n = 1; n <= 9; n++) {
    a.put({ n })
    await a.wait(60)
  }
  await a.wait(150)
  a.mark('check')
  a.put({ warn: true })
  await a.wait(350)
  a.put({ rails: true })
  await a.wait(450)
  a.put({ cta: true })
  await a.wait(700)
  a.mark('next')
  await a.click('cta')
  a.put({ step: 2 })
  await a.wait(1000)
  a.put((s) => ({ sec: s.sec - 1 }))
  await a.wait(1000)
  a.put((s) => ({ sec: s.sec - 1 }))
  await a.wait(400)
  a.mark('found')
  a.put({ found: true })
  await a.wait(650)
  a.mark('success')
  a.put({ cover: true })
  await a.wait(700)
  a.put({ total: 790500000 })
  await a.wait(2100)
  a.mark('back')
  await a.click('back')
  // The cover hides everything under it: put the flow back while it does
  await a.snap({ step: 0, focus: false, n: 0, warn: false, rails: false, cta: false, sec: 17112, found: false })
  await a.wait(120)
  a.put({ cover: false })
  await a.wait(550)
  await a.snap({ total: 0 })
  await a.move(a.layout === 'wide' ? REST.wide : REST.compact)
  await a.wait(150)
}

function StatusBar({ time }: { time: string }) {
  return (
    <div className="kd-sb">
      <span>{time}</span>
      <span className="kd-sb__g">
        <Wifi size={16} strokeWidth={2.2} />
        <Signal size={16} strokeWidth={2.2} />
        <BatteryFull size={19} strokeWidth={2} />
      </span>
    </div>
  )
}

function Nav({ title, step }: { title: string; step: string }) {
  return (
    <div className="kd-nav">
      <ArrowLeft size={24} strokeWidth={2.2} />
      <span className="kd-nav__t">{title}</span>
      <span className="kd-nav__s">{step}</span>
    </div>
  )
}

function Prog({ on }: { on: number }) {
  return (
    <div className="kd-prog">
      {[0, 1, 2].map((i) => (
        <i key={i} data-on={i < on || undefined} />
      ))}
    </div>
  )
}

function Bank({ name, sub, aside, size = 'm' }: { name: string; sub?: string; aside?: React.ReactNode; size?: 'm' | 'l' }) {
  return (
    <div className="kd-bank" data-size={size}>
      <span className="kd-bank__ic">
        <Landmark size={size === 'l' ? 28 : 22} strokeWidth={1.8} />
      </span>
      <span className="kd-bank__t">
        <b>{name}</b>
        {sub && <small>{sub}</small>}
      </span>
      {aside}
    </div>
  )
}

function Tag({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="kd-tag">
      <i>{icon}</i>
      {children}
    </span>
  )
}

// A product of the BPR, as the detail page draws it: the minimum amount in blue on a tinted band, the rate in green, the tenor, then its tags
function Product({ min, term, rate, target }: { min: string; term: string; rate: string; target?: string }) {
  return (
    <div className="kd-prod" data-target={target} data-cursor={target ? 'pointer' : undefined}>
      <div className="kd-prod__band">
        <div>
          <span className="kd-prod__amt">{min}</span>
          <span className="kd-prod__min">minimum penempatan</span>
        </div>
        <div className="kd-prod__kv">
          <span>
            <small>Bunga</small>
            <b className="kd-rate">{rate}</b>
          </span>
          <span>
            <small>Tenor</small>
            <b>{term}</b>
          </span>
        </div>
      </div>
      <div className="kd-prod__tags">
        <Tag icon={<Banknote size={15} strokeWidth={2} />}>E-Deposito</Tag>
        <Tag icon={<RefreshCw size={14} strokeWidth={2.4} />}>ARO</Tag>
      </div>
    </div>
  )
}

export default function KomunalFlow() {
  return (
    <Stage<S>
      width={820}
      height={750}
      compact={{ below: 620, width: 358, height: 736 }}
      initial={initial}
      poster={poster}
      script={script}
      cursor={{ at: REST, style: 'touch' }}
      play="loop"
      theme="dark"
      className="kd"
    >
      {(s, _rect, layout) => {
        const shown = group(DIGITS.slice(0, s.n))
        const h = Math.floor(s.sec / 3600)
        const m = Math.floor((s.sec % 3600) / 60)
        const sec = s.sec % 60
        const wide = layout !== 'compact'
        const now = activeStep(s)
        return (
          <>
          {wide && (
            <ol className="kd-rail">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="kd-beat" data-state={i < now ? 'done' : i === now ? 'on' : 'next'} data-last={i === 3 || undefined}>
                  <span className="kd-beat__n">{i < now || (i === 3 && now === 3) ? <Tick size={18} strokeWidth={2.8} /> : i + 1}</span>
                  <b>{t}</b>
                  <p>{d}</p>
                </li>
              ))}
            </ol>
          )}
          <Phone width={layout === 'compact' ? 326 : 340} frame="android" status={false} className="kd-phone">
            <div className="kd-app">
              {/* 1 · The BPR's detail page: pick a product */}
              <section className="kd-screen kd-list" data-back={s.step > 0 || undefined}>
                <StatusBar time="10:41" />
                <div className="kd-top">
                  <div className="kd-nav kd-nav--d">
                    <ArrowLeft size={24} strokeWidth={2.2} />
                    <span className="kd-nav__t">Detail BPR</span>
                    <span className="kd-nav__ic">
                      <Heart size={24} strokeWidth={2.2} />
                      <Share2 size={22} strokeWidth={2.2} />
                    </span>
                  </div>
                  <Bank
                    size="l"
                    name="BPR Artha Sejahtera"
                    sub="Semarang"
                    aside={
                      <span className="kd-chev">
                        <ChevronRight size={22} strokeWidth={2.4} />
                      </span>
                    }
                  />
                </div>
                <div className="kd-hours">
                  <span className="kd-lb">Jam Operasional</span>
                  <div className="kd-hours__r">
                    <span className="kd-hours__ic">
                      <Clock size={22} strokeWidth={2} />
                    </span>
                    <span className="kd-hours__t">
                      <b>Senin - Jumat</b>
                      <b className="kd-hours__h">07:00 - 15:00</b>
                    </span>
                    <span className="kd-open">Buka</span>
                  </div>
                </div>
                <div className="kd-sheet">
                  <h3 className="kd-h">Produk BPR ini</h3>
                  <div className="kd-cards">
                    <Product min="Rp5.000.000" term="3 Bulan" rate="6,25%" />
                    <Product min="Rp10.000.000" term="12 Bulan" rate="6,75%" target="card" />
                    <Product min="Rp25.000.000" term="24 Bulan" rate="7,00%" />
                    <Product min="Rp50.000.000" term="36 Bulan" rate="7,25%" />
                  </div>
                </div>
              </section>

              {/* 2 · Amount and route check */}
              <section className="kd-screen kd-push" data-at={s.step === 0 ? 'right' : s.step === 1 ? 'in' : 'left'}>
                <StatusBar time="10:41" />
                <Nav title="Penempatan" step="Langkah 2 dari 3" />
                <Prog on={2} />
                <div className="kd-body">
                  <div className="kd-card kd-pr">
                    <Bank name="BPR Artha Sejahtera" sub="Deposito 12 bulan · 6,75% p.a." />
                  </div>
                  <div className="kd-card kd-amt">
                    <span className="kd-lb">Nominal penempatan</span>
                    <div className="kd-amt__v" data-focus={s.focus || undefined} data-target="field" data-cursor="ibeam">
                      {s.n === 0 ? <span className="kd-amt__ph">Rp</span> : <span>Rp {shown}</span>}
                      <i className="kd-caret" data-on={s.focus && s.n < 9 || undefined} />
                    </div>
                    <div className="kd-src">
                      Dari <b>Mandiri ···· 4821</b>
                      <span className="kd-chg">Ubah</span>
                    </div>
                    <Collapse open={s.warn}>
                      <div className="kd-warn">
                        <TriangleAlert size={18} strokeWidth={2.2} />
                        <span>Nominal di atas Rp500 jt. Pastikan limit transfer Anda mencukupi.</span>
                      </div>
                    </Collapse>
                  </div>
                  <div className="kd-lb kd-lb--out">Cara transfer</div>
                  <div className="kd-opt" data-on={s.rails || undefined}>
                    <span className="kd-rd" />
                    <span className="kd-opt__t">
                      <b>
                        RTGS
                        <em data-on={s.rails || undefined}>Direkomendasikan</em>
                      </b>
                      <small>Rp100 jt ke atas · masuk hari ini</small>
                      <Collapse open={s.rails}>
                        <small className="kd-opt__more">Kirim sebelum 15:00 WIB</small>
                      </Collapse>
                    </span>
                  </div>
                  <div className="kd-na" data-dim={s.rails || undefined}>
                    <Collapse open={s.rails}>
                      <div className="kd-nah">Tidak tersedia untuk Rp750 jt</div>
                    </Collapse>
                    {[
                      ['BI-FAST', 'Maks. Rp250 jt / transfer'],
                      ['VA Mandiri', 'Maks. Rp30 jt / hari'],
                      ['VA Permata', 'Antarbank maks. Rp25 jt'],
                    ].map(([n, l]) => (
                      <div key={n} className="kd-nar">
                        <b>{n}</b>
                        <span>{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="kd-foot">
                  <div className="kd-free">
                    <Lock size={16} strokeWidth={2.2} />
                    Belum ada dana yang dikunci
                  </div>
                  <div className="kd-cta" data-ready={s.cta || undefined} data-target="cta">
                    Lanjut ke instruksi
                  </div>
                </div>
              </section>

              {/* 3 · Instructions: nothing is locked */}
              <section className="kd-screen kd-push" data-at={s.step < 2 ? 'right' : 'in'}>
                <StatusBar time="10:41" />
                <Nav title="Transfer via RTGS" step="Langkah 3 dari 3" />
                <Prog on={3} />
                <div className="kd-body">
                  <div className="kd-card kd-cd">
                    <div className="kd-cd__row">
                      <div>
                        <span className="kd-lb">Batas kirim RTGS</span>
                        <b className="kd-cd__d">Hari ini, 15:00 WIB</b>
                      </div>
                      <div className="kd-cd__t">
                        {[
                          [h, 'jam'],
                          [m, 'menit'],
                          [sec, 'detik'],
                        ].map(([v, u], i) => (
                          <span key={u as string} className="kd-cd__u">
                            {i > 0 && <i>:</i>}
                            <span>
                              <b>
                                <Count value={v as number} format={(n) => two(Math.round(n))} duration={450} />
                              </b>
                              <small>{u}</small>
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="kd-cd__bar">
                      <i style={{ width: `${(s.sec / 25200) * 100}%` }} />
                    </div>
                  </div>
                  <div className="kd-card kd-inst">
                    <div className="kd-irow">
                      <div>
                        <span className="kd-lb">Nominal</span>
                        <span className="kd-v2">Rp 750.000.000</span>
                      </div>
                      <span className="kd-copy">Salin</span>
                    </div>
                    <div className="kd-irow">
                      <div>
                        <span className="kd-lb">Rekening tujuan</span>
                        <b>PT BPR Artha Sejahtera</b>
                        <small>0123 4567 890</small>
                      </div>
                      <span className="kd-copy">Salin</span>
                    </div>
                    <div className="kd-irow">
                      <div>
                        <span className="kd-lb">Berita transfer</span>
                        <b className="kd-code">DEP-7F3K</b>
                        <small>Wajib, agar dana langsung tercocokkan</small>
                      </div>
                      <span className="kd-copy">Salin</span>
                    </div>
                  </div>
                  <div className="kd-card kd-steps">
                    <b>Cara transfer</b>
                    {['Di aplikasi Mandiri, pilih Transfer › RTGS', 'Isi nominal dan rekening tujuan persis', 'Tulis kode DEP-7F3K di berita transfer'].map((st, i) => (
                      <div key={st} className="kd-st">
                        <i>{i + 1}</i>
                        {st}
                      </div>
                    ))}
                  </div>
                  <div className="kd-warn kd-warn--static">
                    <TriangleAlert size={18} strokeWidth={2.2} />
                    <span>Pastikan limit transfer harian Anda minimal Rp750 jt.</span>
                  </div>
                </div>
                <div className="kd-foot">
                  <div className="kd-auto">
                    <span className="kd-auto__mark">
                      <Check on={s.found} pending={!s.found} size={26} />
                    </span>
                    <span>
                      <b>Menunggu dana masuk</b>
                      <small>Terdeteksi otomatis · tidak ada yang dikunci</small>
                    </span>
                  </div>
                  <div className="kd-ghost">Ganti cara transfer</div>
                </div>
              </section>

              {/* 4 · Success, a cover over the flow */}
              <section className="kd-screen kd-cover" data-up={s.cover || undefined}>
                <StatusBar time="10:42" />
                <div className="kd-ok">
                  <span className="kd-ok__disc">
                    <Tick size={34} strokeWidth={3} />
                  </span>
                  <b>Penempatan Berhasil</b>
                  <small>Dana diterima via RTGS · 10:42 WIB</small>
                </div>
                <div className="kd-body kd-body--ok">
                  <div className="kd-card kd-sum">
                    <Bank name="BPR Artha Sejahtera" sub="Deposito 12 bulan" aside={<span className="kd-active">Aktif</span>} />
                    <div className="kd-sum__row">
                      <div>
                        <span className="kd-lb">Pokok Deposito</span>
                        <span className="kd-v2">Rp 750.000.000</span>
                      </div>
                    </div>
                    <div className="kd-sum__due">
                      <span>Jatuh tempo</span>
                      <b>14 Jul 2026</b>
                    </div>
                  </div>
                  <div className="kd-mat">
                    <div className="kd-mh">Estimasi saat jatuh tempo</div>
                    <div className="kd-mr">
                      <span>Pokok deposito</span>
                      <b>Rp 750.000.000</b>
                    </div>
                    <div className="kd-mr">
                      <span>Bunga 6,75% · 12 bulan</span>
                      <b>+ Rp 50.625.000</b>
                    </div>
                    <div className="kd-mr">
                      <span>Pajak bunga 20%</span>
                      <b className="kd-neg">&#8722; Rp 10.125.000</b>
                    </div>
                    <div className="kd-mt">
                      <span>Total diterima</span>
                      <b>
                        <span className="kd-rp2">Rp</span>
                        <Count value={s.total} format={(n) => group(String(Math.round(n)))} duration={900} stagger={40} />
                      </b>
                    </div>
                    <div className="kd-mn">Bunga bersih Rp 40.500.000 setelah pajak</div>
                  </div>
                  <div className="kd-card kd-next">
                    <b>Langkah selanjutnya</b>
                    <div className="kd-next__r">
                      <span className="kd-next__ic">
                        <Mail size={20} strokeWidth={1.8} />
                      </span>
                      Sertifikat dikirim ke email Anda
                    </div>
                    <div className="kd-next__r">
                      <span className="kd-next__ic">
                        <Wallet size={20} strokeWidth={1.8} />
                      </span>
                      Kelola aktif di menu Depositoku
                    </div>
                  </div>
                </div>
                <div className="kd-foot">
                  <div className="kd-cta">Lihat Portofolio</div>
                  <div className="kd-alt" data-target="back">
                    Kembali ke Beranda
                  </div>
                </div>
              </section>
            </div>
          </Phone>
          </>
        )
      }}
    </Stage>
  )
}

