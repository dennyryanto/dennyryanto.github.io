import { Check, Collapse, Count, Phone, Stage, type Act } from '../../kit'
import { ArrowLeft, Check as Tick, ChevronDown, House, Landmark, Lock, Mail, RefreshCw, Search, TrendingUp, TriangleAlert, User, Wallet } from 'lucide-react'
import './flow.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'komunal-shipped-flow',
  case: 'Komunal',
  title: 'Shipped deposit flow',
  head: 'SHIPPED SCREEN + FLOW',
  note: 'DEPOSITOBPR · PRODUCT',
  lead: 'As shipped: the amount is checked as it is entered, the app recommends the one rail that works for this amount, bank and time, and nothing is locked while it waits for the funds.',
  layout: 'split',
  stageWidth: 400,
  sizes: { wide: [358, 718], compact: [358, 718], below: 560 }, // the wide design (400) is below `below`, so the stage always draws the compact one
  notes: [
    ['One phone, four screens.', 'The four screens that were side by side are one continuous flow: a product is picked from the list, the amount is entered and checked, the one rail that fits is recommended, the instructions wait for the funds, and the success screen arrives as the payoff. The loop closes when the success screen is dismissed over the list.'],
    ['What carries the story.', 'The amount is typed, the warning and the rail verdict appear because of it (RTGS is recommended, the other three leave the list as unavailable for Rp750 jt), the countdown ticks while nothing is locked, and the funds are detected without a tap. The success screen counts its total up.'],
    ['Changed from the old block.', 'The captions "1 Pick a product" to "4 Deposit active" are gone: the flow shows its own order. The bank avatars ("BD", the sharia mark) are a plain building glyph, since the old logos were not the product\'s to redraw. The product list gains a BPR Artha Sejahtera card, because the flow is about that bank and the list showed three others; its minimum amount and place are placeholder lines.'],
    ['Dismissal closes the loop.', 'The success screen is a cover: "Kembali ke Beranda" slides it away over the product list. The flow behind it was put back while it was hidden, so no screen is ever seen sliding backwards. It returns to the list rather than a Beranda screen, which the source does not have.'],
    ['Checked.', 'The rehearsal gate at both widths; reduced motion shows the success screen. Not checked: frame rate on a real phone, and the loop inside the built page.'],
  ],
}

// DepositoBPR as shipped, as one continuous flow on one phone. Beats: 1 the
// product list, a tap on BPR Artha Sejahtera pushes the amount screen; 2 the
// amount is entered (9 digits typed into the field) and checked as it goes: the
// warning for amounts over Rp500 jt appears and the rails settle, RTGS
// recommended and the other three unavailable for Rp750 jt; 3 a tap on "Lanjut
// ke instruksi" pushes the instructions, a countdown ticks, nothing is locked;
// 4 the funds are detected on their own (the waiting ring turns to a tick) and
// the success screen comes up as a cover, its total counting up. The payoff holds.
// The loop resets with a seen cause: a tap on "Kembali ke Beranda" dismisses the
// cover, and the screens it covered were put back while it hid them, so what it
// reveals is the product list again. The poster is the success screen.
//
// Real strings: all from design/sections/komunal-shipped-flow.html.

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

const REST = { x: 200, y: 690 }
const DIGITS = '750000000'

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
  await a.move(REST)
  await a.wait(150)
}

function Nav({ title, step }: { title: string; step: string }) {
  return (
    <div className="kd-nav">
      <ArrowLeft size={22} strokeWidth={2.2} />
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

function Bank({ name, sub, aside, plain }: { name: string; sub?: string; aside?: React.ReactNode; plain?: boolean }) {
  return (
    <div className="kd-bank">
      <span className="kd-bank__ic">
        <Landmark size={22} strokeWidth={1.8} />
      </span>
      <span className="kd-bank__t">
        <b>{name}</b>
        {sub ? <small>{sub}</small> : plain ? null : <span className="kd-ph" style={{ width: 120 }} />}
      </span>
      {aside}
    </div>
  )
}

function Product({ min, term, rate, tag, bank, sub, target, bars }: { min?: string; term: string; rate: string; tag?: string; bank: string; sub?: string; target?: string; bars?: boolean }) {
  return (
    <div className="kd-prod" data-target={target} data-cursor={target ? 'pointer' : undefined}>
      {tag && <span className="kd-tag">{tag}</span>}
      <div className="kd-prod__top">
        <div>
          <div className="kd-prod__k">
            <span>
              Minimum
              <br />
              Penempatan
            </span>
            <span>{term}</span>
          </div>
          <div className="kd-prod__v">
            {bars ? <span className="kd-ph kd-ph--l" style={{ width: 118 }} /> : <span className="kd-prod__amt">{min}</span>}
            <span className="kd-rate">
              <TrendingUp size={17} strokeWidth={2.4} />
              {rate}
            </span>
          </div>
        </div>
        <span className="kd-aro">
          <RefreshCw size={14} strokeWidth={2.4} />
          ARO
        </span>
      </div>
      <div className="kd-hr" />
      <Bank
        name={bank}
        sub={bars ? undefined : sub}
        aside={
          <span className="kd-chev">
            <ChevronDown size={16} strokeWidth={2.4} />
          </span>
        }
      />
    </div>
  )
}

export default function KomunalFlow() {
  return (
    <Stage<S>
      width={400}
      height={755}
      compact={{ below: 560, width: 358, height: 718 }}
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
        return (
          <Phone width={layout === 'compact' ? 326 : 340} className="kd-phone">
            <div className="kd-app">
              {/* 1 · Product list */}
              <section className="kd-screen kd-list" data-back={s.step > 0 || undefined}>
                <div className="kd-list__head">
                  <span className="kd-list__t">Produk</span>
                  <span className="kd-list__search">
                    <Search size={20} strokeWidth={2.2} />
                    Cari Produk
                  </span>
                </div>
                <div className="kd-chips">
                  {['Bilyet Fisik', 'E-Deposito', 'Bunga Bulanan', 'BPRS Sya'].map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
                <div className="kd-cards">
                  <Product min="Rp5.000.000" term="3 Bulan" rate="6%" bank="BPR Mitra Usaha Anda" sub="Madiun · 120 Transaksi" />
                  <Product term="12 Bulan" rate="6,75%" bank="BPR Artha Sejahtera" target="card" bars />
                  <Product tag="Bagi Hasil Bulanan" min="Rp100.000.000" term="3 Bulan" rate="5,75%" bank="BPRS Sahabat UMKM" sub="Bali · 115 Transaksi" />
                </div>
                <nav className="kd-tabs">
                  <span className="kd-tab">
                    <House size={22} strokeWidth={1.8} />
                    Beranda
                  </span>
                  <span className="kd-tab" data-on>
                    <span className="kd-rp">Rp</span>
                    Produk
                  </span>
                  <span className="kd-tab">
                    <Wallet size={22} strokeWidth={1.8} />
                    Depositoku
                  </span>
                  <span className="kd-tab">
                    <User size={22} strokeWidth={1.8} />
                    Profil
                  </span>
                </nav>
              </section>

              {/* 2 · Amount and route check */}
              <section className="kd-screen kd-push" data-at={s.step === 0 ? 'right' : s.step === 1 ? 'in' : 'left'}>
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
                <div className="kd-ok">
                  <span className="kd-ok__disc">
                    <Tick size={34} strokeWidth={3} />
                  </span>
                  <b>Penempatan Berhasil</b>
                  <small>Dana diterima via RTGS · 10:42 WIB</small>
                </div>
                <div className="kd-body kd-body--ok">
                  <div className="kd-card kd-sum">
                    <Bank name="BPR Artha Sejahtera" plain aside={<span className="kd-active">Aktif</span>} />
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
        )
      }}
    </Stage>
  )
}

