import { Avatar, Bar, Check, Collapse, Connector, Icon, Phone, Row, Stage, Stamp, Thread, Bubble, type Act } from '../../kit'
import './routing.css'
import type { Meta } from '../plan'

export const meta: Meta = {
  id: 'linkaja-routing',
  case: 'LinkAja',
  title: 'Intent routing',
  head: 'INTENT ROUTING IN CHAT',
  note: 'ILLUSTRATIVE',
  lead: 'Frequent cases resolve in chat. Sensitive ones reach the right agent with the history attached.',
  layout: 'split',
  stageWidth: 598,
  sizes: { wide: [598, 380], compact: [358, 340], below: 560 },
  notes: [
    ['One phone, one story.', 'The chat builds message by message. A limit question is classified and resolved without an agent. Then the fraud report arrives, is classified, and is handed to a person. This replaces the two phones side by side.'],
    ['The consequence is shown where it lands.', 'The case drops into the agent queue with its chat history, transactions and account status attached. A leader ties it to the agent who joins the chat.'],
    ['Checked.', 'The rehearsal gate passes at the 390px phone column. At the desktop width its only finding is the phone side gutters against its 16px bottom gutter, which comes from keeping the shell whole. Reduced motion shows the finished chat.'],
    ['Not checked.', 'Frame rate on a real phone, and the loop inside the built site.'],
  ],
}

// LinkAja intent routing in chat. The chat is built message by message, so the
// viewer has the context before the sensitive case arrives: a limit question
// is classified, answered and resolved without an agent. Then a fraud report
// arrives, is classified, answered, and handed to a person. The consequence
// lands somewhere else: the case drops into the agent queue with its chat
// history, transactions and account status attached, tied back to the chat by a
// leader. The agent joins; the payoff holds. The loop resets around its anchor:
// everything the story added leaves in one reverse stagger while the date
// stamp, the composer and the queue stay. The poster is the finished chat.
//
// Real strings: two questions, two intent labels, two answers, the resolved
// line, the agent line, the queue title, the case and its three attachments.

type S = {
  me1: boolean
  chip1: boolean
  reply1: boolean
  typing1: boolean
  done1: boolean
  me: boolean
  chip: boolean
  reply: boolean
  typing: boolean
  agent: boolean
  queue: boolean
  att: number
  link: boolean
}

const initial: S = { me1: false, chip1: false, reply1: false, typing1: true, done1: false, me: false, chip: false, reply: false, typing: true, agent: false, queue: false, att: 0, link: false }
const poster: S = { me1: true, chip1: true, reply1: true, typing1: false, done1: true, me: true, chip: true, reply: true, typing: false, agent: true, queue: true, att: 3, link: true }

async function script(a: Act<S>) {
  // First case: asked, classified, answered, resolved without an agent
  await a.wait(700)
  a.mark('ask1')
  await a.set({ me1: true })
  await a.wait(650)
  a.mark('intent1')
  await a.set({ chip1: true })
  await a.wait(650)
  await a.set({ reply1: true })
  await a.wait(1000)
  await a.set({ typing1: false })
  await a.wait(800)
  a.mark('resolved')
  await a.set({ done1: true })
  await a.wait(1100)
  // Second case: a sensitive message, routed to a person
  a.mark('ask')
  await a.set({ me: true })
  await a.wait(700)
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
  // Exit around the anchor: what the story added leaves in one reverse
  // stagger; the stamp, the composer and the queue stay
  a.mark('exit')
  await a.set({ link: false })
  await a.wait(600)
  await a.stagger(['agent', 'queue', 'reply', 'chip', 'me', 'done1', 'reply1', 'chip1', 'me1'] as const, (k) => a.put({ [k]: false } as Partial<S>), 55)
  await a.wait(700)
  await a.snap({ att: 0, typing: true, typing1: true })
  await a.wait(100)
}

const ME = 'Ada transaksi yang bukan saya'

export default function LinkAjaRouting() {
  return (
    <Stage
      width={598}
      height={380}
      compact={{ below: 560, width: 358, height: 340 }}
      initial={initial}
      poster={poster}
      script={script}
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
            <Phone width={wide ? 340 : 326} className="lr-phone" wallpaper="#eef0f3">
              <Thread className="lr-thread">
                <Stamp>Hari ini 09.41</Stamp>
                <Collapse open={s.me1} reveal="drop" from="below">
                  <div className="lr-gap">
                    <Bubble from="me" tail>
                      Limit PayLater saya kok belum naik?
                    </Bubble>
                  </div>
                </Collapse>
                <Collapse open={s.chip1} reveal="drop" from="below">
                  <div className="lr-intent lr-gap">Intent · Limit</div>
                </Collapse>
                <Collapse open={s.reply1} reveal="drop" from="below">
                  <div className="lr-gap">
                    <Bubble from="them" tail typing={s.typing1}>
                      Limit dievaluasi tiap bulan.
                    </Bubble>
                  </div>
                </Collapse>
                <Collapse open={s.done1} reveal="drop" from="below">
                  <div className="lr-done">
                    <Icon name="check" size={14} stroke={2.4} />
                    Selesai tanpa agen
                  </div>
                </Collapse>
                <Collapse open={s.me} reveal="drop" from="below">
                  <div className="lr-gap">
                    <Bubble from="me" tail>
                      {ME}
                    </Bubble>
                  </div>
                </Collapse>
                <Collapse open={s.chip} reveal="drop" from="below">
                  <div className="lr-intent lr-gap">Intent · Indikasi fraud</div>
                </Collapse>
                <Collapse open={s.reply} reveal="drop" from="below">
                  <div className="lr-gap">
                    <Bubble from="them" tail typing={s.typing}>
                      Akunmu kami amankan dulu.
                    </Bubble>
                  </div>
                </Collapse>
                <Collapse open={s.agent} reveal="drop" from="below">
                  <div className="lr-agent lr-gap">
                    <Avatar name="Rina" size={26} />
                    <span data-target="agent">Rina, agen keamanan, bergabung</span>
                  </div>
                </Collapse>
              </Thread>
              <div className="lr-compose">
                <span className="lr-field">Tulis pesan</span>
                <span className="lr-send" aria-hidden>
                  <Icon name="send" size={16} filled />
                </span>
              </div>
            </Phone>
            {wide && (
              <div className="lr-queue">
                <div className="lr-queue__head">Agent queue</div>
                <Row lead={<Avatar plain size={28} />} title={<Bar w={92} h={8} />} subtitle={<Bar w={64} h={6} tone={2} />} pad={0} />
                <Row lead={<Avatar plain size={28} />} title={<Bar w={78} h={8} />} subtitle={<Bar w={52} h={6} tone={2} />} pad={0} />
                <Collapse open={s.queue} reveal="drop">
                  <div className="lr-case" data-target="case">
                    <Row lead={<Avatar name="Rina" size={28} />} title="Fraud suspected" subtitle="Handled by Rina" pad={0} />
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
