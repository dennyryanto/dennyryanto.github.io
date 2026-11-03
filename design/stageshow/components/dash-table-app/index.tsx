import { CupSoda, IceCreamCone, Pizza, ReceiptText, Salad, ShoppingBag, Soup, Utensils, CircleHelp, Check as CheckIcon } from 'lucide-react'
import { Stage, Swap, type Act } from '../../kit'
import './table.css'
import type { Meta } from '../plan'
import hero from './img/hero.webp'
import d1 from './img/d1.webp'
import d2 from './img/d2.webp'
import d3 from './img/d3.webp'
import d4 from './img/d4.webp'
import d5 from './img/d5.webp'
import d6 from './img/d6.webp'

export const meta: Meta = {
  id: 'dash-table-app',
  case: 'Dash · Lumio',
  title: 'Dash table app',
  head: 'DASH ORDERING PLATFORM',
  note: 'CUSTOMER TABLE APP',
  lead: 'Dash is a restaurant ordering platform: table, kitchen, captain and back-office apps, live across 30+ chains.',
  layout: 'split',
  stageWidth: 640,
  notes: [
    ['One order, one tablet.', 'The diner taps a pizza on the table iPad. It is marked ADDED, the order bar rises with the item and its price, and Send to kitchen turns into a sent state. The old mockup ran the same first half on a timer; this one ends with the order leaving the table.'],
    ['What stayed.', 'The restaurant, the menu strings, the prices, the photos (resized copies) and the yellow inside the screen. Georgia stays only on the restaurant wordmark and dish headings, as before.'],
    ['What is new.', 'The tablet is cropped to the menu so the type reads at its real size, and the diner now presses Send to kitchen. "Sent to kitchen" is the one new string.'],
    ['Not checked.', 'Frame rate and touch on a real device, and the loop inside the built page.'],
  ],
}

// Dash's customer table app on an iPad. A diner picks a pizza, the order bar
// rises with the running total, the diner sends it, and the bar confirms.
// The tablet is cropped to the menu, off the top and the right, whole at the
// bottom-left with its rounded corner, so the order bar and the dish grid read
// at real size. The poster is the sent order.
//
// Real strings: the category labels, Customers' choice, the hero dish and its
// price, Le Classiche and its line, six dishes with prices, ADDED, 1 ITEM,
// IDR 85, SEND TO KITCHEN. New: SENT TO KITCHEN.

type S = { added: boolean; bar: boolean; sent: boolean }
const REST = { wide: { x: 580, y: 378 }, compact: { x: 320, y: 360 } }
const initial: S = { added: false, bar: false, sent: false }
const poster: S = { added: true, bar: true, sent: true }

async function script(a: Act<S>) {
  await a.wait(900)
  a.mark('tap')
  await a.move({ at: 'margherita', x: 0.6, y: 0.5 })
  await a.wait(250)
  await a.click()
  await a.set({ added: true })
  await a.wait(500)
  a.mark('bar')
  await a.set({ bar: true })
  await a.wait(1400)
  a.mark('send')
  await a.move({ at: 'send', x: 0.5, y: 0.7 })
  await a.wait(250)
  await a.click()
  await a.set({ sent: true })
  await a.move(REST[a.layout], { duration: 700 })
  await a.wait(2600)
  // The order is away: the bar leaves, the card clears, the menu is as it was
  a.mark('exit')
  await a.set({ bar: false })
  await a.wait(350)
  await a.set({ added: false })
  await a.wait(500)
  await a.set({ sent: false })
  await a.wait(900)
}

const DISHES = [
  { id: 'margherita', name: 'Margherita', price: 'IDR 85', img: d1 },
  { id: 'formaggi', name: 'Quattro Formaggi', price: 'IDR 98', img: d2 },
  { id: 'diavola', name: 'Diavola', price: 'IDR 105', img: d3 },
  { id: 'capricciosa', name: 'Capricciosa', price: 'IDR 108', img: d4 },
  { id: 'ortolana', name: 'Ortolana', price: 'IDR 95', img: d5 },
  { id: 'salsiccia', name: 'Salsiccia e Friarielli', price: 'IDR 112', img: d6 },
]

const CATS = [
  { label: 'STARTERS', Icon: Soup },
  { label: 'SALAD', Icon: Salad },
  { label: 'PIZZA', Icon: Pizza, on: true },
  { label: 'PASTA', Icon: Utensils },
  { label: 'DESSERTS', Icon: IceCreamCone },
  { label: 'DRINKS', Icon: CupSoda },
]

export default function DashTableApp() {
  return (
    <Stage
      width={640}
      height={420}
      compact={{ below: 560, width: 358, height: 400 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      theme="dark"
      cursor={{ at: REST, style: 'touch', idle: false }}
      className="dt"
    >
      {(s) => (
        <div className="dt-ipad">
          <div className="dt-screen" data-crop>
            <header className="dt-top">
              <div className="dt-brand">
                <span className="dt-brand__k">TRATTORIA</span>
                <span className="dt-brand__n">FIORELLA</span>
              </div>
              <div className="dt-nav">
                <span className="dt-nav__i" data-on={s.sent || s.added || undefined}>
                  <ShoppingBag size={20} strokeWidth={1.8} />
                  MY ORDERS
                  <i className="dt-badge" data-on={s.added || undefined}>1</i>
                </span>
                <span className="dt-nav__i"><ReceiptText size={20} strokeWidth={1.8} />MY BILL</span>
                <span className="dt-nav__i"><CircleHelp size={20} strokeWidth={1.8} />HELP</span>
              </div>
            </header>
            <div className="dt-body">
              <nav className="dt-cats">
                {CATS.map(({ label, Icon, on }) => (
                  <span key={label} className="dt-cat" data-on={on || undefined}>
                    <Icon size={22} strokeWidth={1.8} />
                    {label}
                  </span>
                ))}
              </nav>
              <main className="dt-main">
                <div className="dt-eyebrow">CUSTOMERS’ CHOICE</div>
                <div className="dt-feature">
                  <div className="dt-hero">
                    <img src={hero} alt="" />
                    <div className="dt-hero__t">
                      <span className="dt-serif">Quattro Stagioni</span>
                      <span className="dt-price">IDR 115</span>
                    </div>
                  </div>
                  <div className="dt-pick"><img src={d1} alt="" /></div>
                </div>
                <div className="dt-h">Le Classiche</div>
                <div className="dt-sub">Pizza napoletana tradizionale, forno a legna</div>
                <div className="dt-grid">
                  {DISHES.map((d) => (
                    <div key={d.id} className="dt-dish" data-target={d.id === 'margherita' ? 'margherita' : undefined}>
                      <div className="dt-dish__img">
                        <img src={d.img} alt="" />
                        {d.id === 'margherita' && (
                          <span className="dt-added" data-on={s.added || undefined}>ADDED</span>
                        )}
                      </div>
                      <div className="dt-dish__n">{d.name}</div>
                      <div className="dt-dish__p">{d.price}</div>
                    </div>
                  ))}
                </div>
              </main>
              <div className="dt-bar" data-on={s.bar || undefined} data-sent={s.sent || undefined}>
                <span className="dt-bar__l"><b>1</b> ITEM · IDR 85</span>
                <span className="dt-bar__r" data-target="send">
                  <Swap id={s.sent ? 'sent' : 'send'}>
                    {s.sent ? (
                      <span className="dt-bar__sent"><span className="dt-check"><CheckIcon size={16} strokeWidth={2.6} /></span>SENT TO KITCHEN</span>
                    ) : (
                      <span>SEND TO KITCHEN →</span>
                    )}
                  </Swap>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Stage>
  )
}
