import { Avatar, Bar, Check, Collapse, Connector, Phone, Row, Stage, Stamp, Thread, Bubble, type Act } from '../../kit'
import { ChevronRight } from 'lucide-react'
import './routing.css'
import mInfo from '../linkaja-home/img/m-info.webp'
import mTrx from '../linkaja-home/img/m-trx.webp'
import mNon from '../linkaja-home/img/m-non.webp'
import mReq from '../linkaja-home/img/m-req.webp'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'linkaja-routing',
  case: 'LinkAja',
  title: 'Intent routing',
  head: 'INTENT ROUTING IN CHAT',
  note: 'CHAT AS IN THE APP',
  lead: 'The support chat offers its options as an inline card. One tap is classified, and the case reaches the right agent with the history attached.',
  layout: 'split',
  stageWidth: 598,
  sizes: { wide: [598, 470], compact: [358, 450], below: 560 },
  notes: [
    ['The real chat.', 'The bot greets by name and offers its four options as one inline card: Informasi seputar LinkAja, Keluhan mengenai transaksi, Keluhan mengenai non-transaksi, Permintaan. The composer is locked ("Silakan klik menu yang tersedia"), so the card is the only way in. The greeting, the card, its icons and the composer line are taken from a screenshot of the live app.'],
    ['One tap is the routing.', 'A tap on "Keluhan mengenai transaksi" is the user\'s message, and it is classified at once, with no free text to interpret. This replaces the earlier version, where a typed fraud report was classified.'],
    ['The consequence is shown where it lands.', 'The case drops into the agent queue with its chat history, transactions and account status attached. A leader ties it to the agent who joins the chat. The queue and the agent are illustrative: they are not a screen from the real agent tool.'],
    ['Checked.', 'Reduced motion shows the finished chat. Not checked: frame rate on a real phone, the loop inside the built site, and Indonesian text at a larger system font size.'],
  ],
}

// LinkAja intent routing in chat, from the live support chat: the bot greets by name and offers its options as an
// inline card (the composer is locked, so the card is the only way in). One tap on "Keluhan mengenai transaksi" is
// the user's message and is classified; the case drops into the agent queue with its history, transactions and
// account status attached, tied back to the chat by a leader, and the agent joins. The loop resets around its
// anchor: everything the story added leaves in one reverse stagger while the date stamp, the composer and the queue
// stay. The poster is the finished chat.
//
// Real strings (screenshot): the stamp, the greeting, the card's four options, the composer line. Illustrative:
// the intent label, the reply, the agent line and the queue.

type S = {
  greet: boolean
  card: boolean
  pick: boolean
  me: boolean
  chip: boolean
  reply: boolean
  typing: boolean
  agent: boolean
  queue: boolean
  att: number
  link: boolean
}

const initial: S = { greet: false, card: false, pick: false, me: false, chip: false, reply: false, typing: true, agent: false, queue: false, att: 0, link: false }
const poster: S = { greet: true, card: true, pick: true, me: true, chip: true, reply: true, typing: false, agent: true, queue: true, att: 3, link: true }

const REST = { wide: { x: 500, y: 430 }, compact: { x: 300, y: 410 } }

async function script(a: Act<S>) {
  // The bot greets and offers its options as one inline card
  await a.wait(700)
  a.mark('greet')
  await a.set({ greet: true })
  await a.wait(800)
  a.mark('card')
  await a.set({ card: true })
  await a.wait(1100)
  // One tap is the message, and it is classified at once
  a.mark('tap')
  await a.click('trx')
  a.put({ pick: true })
  await a.wait(350)
  await a.set({ me: true })
  await a.wait(650)
  a.mark('intent')
  await a.set({ chip: true })
  await a.wait(700)
  await a.set({ reply: true })
  await a.wait(1000)
  a.mark('reply')
  await a.set({ typing: false })
  await a.wait(900)
  a.mark('handoff')
  await a.set({ queue: true })
  await a.wait(700)
  await a.stagger([1, 2, 3], (n) => a.put({ att: n }), 110)
  await a.wait(800)
  a.mark('join')
  await a.set({ agent: true })
  await a.wait(900)
  await a.set({ link: true })
  await a.wait(2600)
  // Exit around the anchor: what the story added leaves in one reverse stagger; the stamp, the composer and the queue stay
  a.mark('exit')
  await a.set({ link: false })
  await a.move(a.layout === 'wide' ? REST.wide : REST.compact)
  await a.wait(300)
  await a.stagger(['agent', 'queue', 'reply', 'chip', 'me', 'card', 'greet'] as const, (k) => a.put({ [k]: false } as Partial<S>), 55)
  await a.wait(700)
  await a.snap({ att: 0, typing: true, pick: false })
  await a.wait(100)
}

const OPTIONS = [
  { id: 'info', label: 'Informasi seputar LinkAja', src: mInfo },
  { id: 'trx', label: 'Keluhan mengenai transaksi', src: mTrx },
  { id: 'non', label: 'Keluhan mengenai non-transaksi', src: mNon },
  { id: 'req', label: 'Permintaan', src: mReq },
] as const

export default function LinkAjaRouting() {
  return (
    <Stage
      width={598}
      height={470}
      compact={{ below: 560, width: 358, height: 450 }}
      initial={initial}
      poster={poster}
      script={script}
      cursor={{ at: REST, style: 'touch' }}
      play="loop"
      theme="dark"
      className="lr"
    >
      {(s, rect, layout) => {
        const wide = layout === 'wide'
        const r = wide ? rect('agent') : null
        const c = wide ? rect('case') : null
        return (
          <>
            <Phone width={wide ? 340 : 326} frame="android" status={false} wallpaper="#f3f4fa" className="lr-phone">
              <Thread className="lr-thread">
                <Stamp>Obrolan dimulai at 20:49</Stamp>
                <Collapse open={s.greet} reveal="drop" from="below">
                  <div className="lr-gap">
                    <Bubble from="them" tail={false}>
                      Hai <b>DENNY RYANTO</b>, mohon maaf atas kendala yang kamu alami, berikut adalah beberapa informasi kendala yang bisa kamu pilih.
                    </Bubble>
                  </div>
                </Collapse>
                <Collapse open={s.card} reveal="drop" from="below">
                  <div className="lr-gap">
                    <div className="lr-menu">
                      {OPTIONS.map((o) => (
                        <div key={o.id} className="lr-opt" data-picked={(o.id === 'trx' && s.pick) || undefined} data-target={o.id === 'trx' ? 'trx' : undefined} data-cursor={o.id === 'trx' ? 'pointer' : undefined}>
                          <img src={o.src} alt="" />
                          <span>{o.label}</span>
                          <ChevronRight size={18} strokeWidth={2.4} />
                        </div>
                      ))}
                    </div>
                  </div>
                </Collapse>
                <Collapse open={s.me} reveal="drop" from="below">
                  <div className="lr-gap">
                    <Bubble from="me" tail>
                      Keluhan mengenai transaksi
                    </Bubble>
                  </div>
                </Collapse>
                <Collapse open={s.chip} reveal="drop" from="below">
                  <div className="lr-intent lr-gap">Intent · Keluhan transaksi</div>
                </Collapse>
                <Collapse open={s.reply} reveal="drop" from="below">
                  <div className="lr-gap">
                    <Bubble from="them" tail typing={s.typing}>
                      Kami teruskan ke tim transaksi.
                    </Bubble>
                  </div>
                </Collapse>
                <Collapse open={s.agent} reveal="drop" from="below">
                  <div className="lr-agent lr-gap">
                    <Avatar name="Rina" size={26} />
                    <span data-target="agent">Rina, agen transaksi, bergabung</span>
                  </div>
                </Collapse>
              </Thread>
              <div className="lr-compose">
                <span className="lr-field">Silakan klik menu yang tersedia</span>
              </div>
            </Phone>
            {wide && (
              <div className="lr-queue">
                <div className="lr-queue__head">Agent queue</div>
                <Row lead={<Avatar plain size={28} />} title={<Bar w={92} h={8} />} subtitle={<Bar w={64} h={6} tone={2} />} pad={0} />
                <Row lead={<Avatar plain size={28} />} title={<Bar w={78} h={8} />} subtitle={<Bar w={52} h={6} tone={2} />} pad={0} />
                <Collapse open={s.queue} reveal="drop">
                  <div className="lr-case" data-target="case">
                    <Row lead={<Avatar name="Rina" size={28} />} title="Transaction case" subtitle="Handled by Rina" pad={0} />
                    <div className="lr-att">
                      {["Chat history", "Transactions", "Account status"].map((t, i) => (
                        <div key={t} className="lr-att__row" data-on={s.att > i || undefined}>
                          <Check on={s.att > i} size={14} />
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </Collapse>
              </div>
            )}
            {wide && r && c && <Connector from={{ x: r.x + r.width, y: r.y + r.height / 2 }} to={{ x: c.x, y: c.y + 22 }} route="curve" show={s.link} />}
          </>
        )
      }}
    </Stage>
  )
}
