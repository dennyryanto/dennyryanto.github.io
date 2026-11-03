import { Avatar, Bar, Check, Collapse, Connector, Icon, Phone, Row, Stage, Stamp, Thread, Bubble, type Act } from '../../kit'
import './routing.css'

// LinkAja intent routing in chat. The first case is already resolved when the
// loop opens (a finished screen that works as a still). Then a sensitive
// message arrives: it is classified, answered, and handed to a person. The
// consequence lands somewhere else: the case drops into the agent queue with
// its chat history, transactions and account status attached, tied back to
// the message by a connector. The agent joins the chat; the payoff holds.
// The loop resets around its anchor: what the story added leaves in one reverse
// stagger while the first resolved case, the composer and the queue stay.
//
// Real strings: two questions, two intent labels, two answers, the resolved
// line, the agent line, the queue title, the case and its three attachments.

type S = {
  me: boolean
  chip: boolean
  reply: boolean
  typing: boolean
  agent: boolean
  queue: boolean
  att: number
  link: boolean
}

const initial: S = { me: false, chip: false, reply: false, typing: true, agent: false, queue: false, att: 0, link: false }
const poster: S = { me: true, chip: true, reply: true, typing: false, agent: true, queue: true, att: 3, link: true }

async function script(a: Act<S>) {
  // The opening holds: the first case, resolved without an agent
  await a.wait(1200)
  a.mark('ask')
  await a.set({ me: true })
  await a.wait(800)
  a.mark('intent')
  await a.set({ chip: true })
  await a.wait(800)
  await a.set({ reply: true })
  await a.wait(1300)
  a.mark('reply')
  await a.set({ typing: false })
  await a.wait(1100)
  a.mark('handoff')
  await a.set({ queue: true })
  await a.wait(750)
  await a.stagger([1, 2, 3], (n) => a.put({ att: n }), 110)
  await a.wait(900)
  a.mark('join')
  await a.set({ agent: true })
  await a.wait(900)
  await a.set({ link: true })
  await a.wait(2800)
  // Exit around the anchor: what the story added leaves in one reverse
  // stagger, the resolved case, the composer and the queue stay
  a.mark('exit')
  await a.set({ link: false })
  await a.wait(600)
  await a.stagger(['agent', 'queue', 'reply', 'chip', 'me'] as const, (k) => a.put({ [k]: false } as Partial<S>), 70)
  await a.wait(700)
  await a.snap({ att: 0, typing: true })
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
                <Bubble from="me" tail>
                  Limit PayLater saya kok belum naik?
                </Bubble>
                <div className="lr-intent">Intent · Limit</div>
                <Bubble from="them" tail>
                  Limit dievaluasi tiap bulan. Tagihanmu lunas.
                </Bubble>
                <div className="lr-done">
                  <Icon name="check" size={14} stroke={2.4} />
                  Selesai tanpa agen
                </div>
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
                <div className="lr-queue__head">Antrean agen</div>
                <Row lead={<Avatar plain size={28} />} title={<Bar w={92} h={8} />} subtitle={<Bar w={64} h={6} tone={2} />} pad={0} />
                <Row lead={<Avatar plain size={28} />} title={<Bar w={78} h={8} />} subtitle={<Bar w={52} h={6} tone={2} />} pad={0} />
                <Collapse open={s.queue} reveal="drop">
                  <div className="lr-case" data-target="case">
                    <Row lead={<Avatar name="Rina" size={28} />} title="Indikasi fraud" subtitle="Rina menangani" pad={0} />
                    <div className="lr-att">
                      {['Riwayat chat', 'Transaksi', 'Status akun'].map((t, i) => (
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
