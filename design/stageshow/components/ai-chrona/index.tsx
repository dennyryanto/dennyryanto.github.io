import { Avatar, Collapse, Connector, Phone, Spinner, Stage, States, Stream, type Act } from '../../kit'
import { ArrowRight, Bell, CalendarCheck, Check, ChevronLeft, ChevronRight, Send, Sparkles, X } from 'lucide-react'
import './chrona.css'
import type { Meta } from '../plan'
import aulia from './aulia.webp'
import laurens from './laurens.webp'
import putri from './putri.webp'
import me from './me.webp'

export const meta: Meta = {
  id: 'ai-chrona',
  case: 'Independent',
  title: 'Chrona product',
  head: 'FEATURED ENGAGEMENT, CHRONA · AI-FIRST SOCIAL PLANNING',
  note: 'DESIGN SYSTEM · PROTOTYPE · BUILT WITH CLAUDE CODE',
  lead: 'Chrona reads your week and your circle’s availability, then drafts the plan in one tap.',
  layout: 'split',
  stageWidth: 640,
  sizes: { wide: [560, 790], compact: [358, 570], below: 540 },
  notes: [
    ['One phone, one story.', 'The Today screen opens on its AI card: Aulia turns 30 on Saturday and the crew looks free. One tap on the card\'s own button drafts the plan inside the card (the time from the circle\'s free window, the message written out word by word), and a second tap sends it. This replaces the still screenshot with its static overlay.'],
    ['The outcome sits outside the phone.', 'Coral stays inside the app\'s screens. The lime is the card beside the phone: Invite sent, in under 120 seconds, plan on the calendar, joined to the Send button by a leader. It is the engine diagram\'s outcome, shown where it happens.'],
    ['The bold top line is gone.', 'The 3px coral line along the top of the AI card (from the old screenshot) was removed at the owner\'s request. The card keeps only the aura ring, and after the invite is sent the ring stays dim so the card still reads as the AI\'s.'],
    ['The aura glow.', 'The old live card wore an animated overlay, a coral light travelling round its edge. It is rebuilt in CSS on the AI card only: a crisp 1.5px coral ring over a soft blurred halo, both driven by a conic gradient whose angle is a registered property turning once every 7s. It is on from the first frame, runs while the card waits on the person, and settles once the invite is sent (dimmer ring, no halo, held at its angle). Reduced motion shows it held at one angle. The lime outcome card is unchanged.'],
    ['Phone column.', 'The compact design keeps the same phone, a little larger in points, and moves the outcome card onto the phone\'s lower margin (over the calendar filler) with a short leader from the button.'],
    ['Not from the live mock.', 'The live screen has no place for the brunch and no draft message. The message is written from the card\'s own words (Aulia turns 30, Saturday, 11:00 to 13:00); there is no place row. The four faces are cropped from the live screenshot.'],
  ],
}

// Chrona's Today screen. The magic-moment card is the whole story: one tap on
// "Plan brunch with Aulia, Laurens and Putri" drafts the plan inside the card
// (when, from the circle's free window; the message, written word by word)
// and the button becomes Send invite; a second tap sends it. The payoff holds:
// Invite sent, and beside the phone the outcome in the engine's words, an
// invite sent in under 120 seconds, the plan on the calendar, tied to the
// button by a leader. The card wears the old mock's aura glow, a coral light
// turning round its edge (a conic ring over a blurred halo); it runs while the
// card is waiting on the person, and settles (dims, halo off, held at its angle)
// once the invite is sent, because the card has done its job. The loop resets around its anchor: the outcome card and
// leader leave, the draft closes up and the button goes back to its first
// state, while the header, the card and its people stay.
//
// Real strings: October 2026, Day Week Month, Wed Oct 7 2026, TODAY,
// SATURDAY, the card's headline, the three people and their lines, the plan
// button; and from the engine diagram: invite sent, under 120 seconds, the
// plan on the calendar.

type Btn = 'plan' | 'send' | 'sending' | 'sent'
type S = { open: boolean; words: number; btn: Btn; sat: boolean; link: boolean }

const initial: S = { open: false, words: 0, btn: 'plan', sat: false, link: false }
const poster: S = { open: true, words: 99, btn: 'sent', sat: true, link: true }

const MESSAGE = 'Aulia turns 30 on Saturday. Birthday brunch, 11:00–13:00?'
const WORDS = MESSAGE.split(' ').length

async function script(a: Act<S>) {
  await a.wait(1100)
  a.mark('plan')
  await a.click({ at: 'btn', x: 0.9, y: 0.5 })
  a.put({ open: true, btn: 'send' })
  await a.wait(700)
  for (let i = 1; i <= WORDS; i++) {
    await a.wait(110)
    a.put({ words: i })
  }
  await a.wait(900)
  a.mark('send')
  await a.click({ at: 'btn', x: 0.9, y: 0.5 })
  a.put({ btn: 'sending' })
  await a.wait(900)
  a.mark('sent')
  a.put({ btn: 'sent' })
  await a.wait(300)
  a.put({ sat: true })
  await a.wait(900)
  a.put({ link: true })
  await a.wait(2800)
  // Exit around the anchor: what the story added leaves together
  a.mark('exit')
  a.put({ link: false })
  await a.wait(250)
  a.put({ sat: false })
  await a.wait(350)
  a.put({ open: false, btn: 'plan' })
  await a.wait(900)
  await a.snap({ words: 0 })
  await a.move(a.layout === 'wide' ? REST.wide : REST.compact)
  await a.wait(300)
}

const PEOPLE = [
  { name: 'Aulia', line: 'turns 30', src: aulia },
  { name: 'Laurens', line: 'free 11:00–13:00', src: laurens },
  { name: 'Putri', line: 'free all day', src: putri },
]

const IC = { strokeWidth: 2 }
const REST = { wide: { x: 500, y: 560 }, compact: { x: 342, y: 330 } }

export default function Chrona() {
  return (
    <Stage<S>
      width={560}
      height={790}
      compact={{ below: 540, width: 358, height: 570 }}
      initial={initial}
      poster={poster}
      script={script}
      play="loop"
      cursor={{ style: 'touch', at: REST }}
      theme="dark"
      className="cr"
    >
      {(s, rect, layout) => {
        const wide = layout === 'wide'
        const btn = rect('btn')
        const sat = rect('sat')
        return (
          <>
            <Phone width={wide ? 360 : 326} className="cr-phone">
              <div className="cr-app">
                <header className="cr-head">
                  <span className="cr-bell"><Bell size={21} {...IC} /><i /></span>
                  <span className="cr-month">October 2026</span>
                  <Avatar size={34} src={me} name="Denny" />
                </header>
                <div className="cr-seg">
                  <span data-on>Day</span>
                  <span>Week</span>
                  <span>Month</span>
                </div>
                <div className="cr-date">
                  <ChevronLeft size={20} strokeWidth={2} className="cr-chev" />
                  <b>Wed, Oct 7</b>
                  <span>· 2026</span>
                  <ChevronRight size={20} strokeWidth={2} className="cr-chev" />
                  <i>TODAY</i>
                </div>
                <div className="cr-aura" data-aura={s.btn === 'sent' ? 'rest' : 'on'}>
                <span className="cr-aura__halo" aria-hidden><i /></span>
                <div className="cr-card" data-target="card" data-open={s.open || undefined}>
                  <div className="cr-eyebrow">
                    <Sparkles size={18} {...IC} />
                    <span>SATURDAY</span>
                    <em><X size={16} strokeWidth={2.2} /></em>
                  </div>
                  <div className="cr-title">Aulia turns 30 on Saturday, and the crew looks free. Birthday brunch?</div>
                  <div className="cr-chips">
                    {PEOPLE.map((p) => (
                      <span key={p.name} className="cr-chip">
                        <Avatar size={34} src={p.src} name={p.name} />
                        <span>
                          <b>{p.name}</b>
                          <small>{p.line}</small>
                        </span>
                      </span>
                    ))}
                  </div>
                  <Collapse open={s.open}>
                    <div className="cr-plan">
                      <div className="cr-when"><small>When</small><b>Sat 11:00–13:00</b></div>
                      <div className="cr-msg">
                        <small>Message</small>
                        <p><Stream text={MESSAGE} count={s.words} /></p>
                      </div>
                    </div>
                  </Collapse>
                  <div className="cr-btn" data-state={s.btn} data-target="btn">
                    <States
                      value={s.btn}
                      states={{
                        plan: <span className="cr-btn__l"><ArrowRight size={18} {...IC} />Plan brunch with Aulia, Laurens and Putri</span>,
                        send: <span className="cr-btn__l" style={{ width: 126, justifyContent: 'center' }}><Send size={18} {...IC} />Send invite</span>,
                        sending: <span className="cr-btn__l" style={{ width: 126, justifyContent: 'center' }}><Spinner size={18} />Sending</span>,
                        sent: <span className="cr-btn__l" style={{ width: 126, justifyContent: 'center' }}><Check size={18} strokeWidth={2.6} />Invite sent</span>,
                      }}
                    />
                  </div>
                </div>
                <span className="cr-aura__ring" aria-hidden />
                </div>
                <div className="cr-hours">
                  {['00.00', '01.00', '02.00', '03.00', '04.00', '05.00'].map((h) => (
                    <div key={h}><span>{h}</span><i /></div>
                  ))}
                </div>
              </div>
              {/* The app's own bottom bar and New plan button (chrona/mockups/index.html: .TabBar, .TodayFab) */}
              <div className="cr-fab" data-hide={s.open || undefined}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M12 5v14M5 12h14" /></svg>
                <span>New plan</span>
              </div>
              <nav className="cr-tabs" aria-hidden>
                <span data-on>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="3" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  Today
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5" /><path d="M14.5 20c0-2 1.7-3.5 3.5-3.5s3.5 1.5 3.5 3.5" /></svg>
                  Circle
                </span>
                <span className="cr-tabs__fab">
                  <i>
                    <svg viewBox="0 0 100 100" aria-hidden>
                      <rect width="100" height="100" fill="#D2592F" />
                      <circle cx="50" cy="50" r="28" fill="#DD7E5A" />
                      <circle cx="50" cy="50" r="15" fill="#fff" />
                      <rect x="50" y="45" width="50" height="10" fill="#fff" />
                    </svg>
                  </i>
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 8l9 6 9-6" /></svg>
                  Invites
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-7 4 14 2-7h6" /></svg>
                  Pulse
                </span>
              </nav>
            </Phone>
            <div className="cr-sat-slot" style={wide ? { top: Math.max(0, btn.y + btn.height / 2 - 118) } : undefined}>
              <Collapse open={s.sat} reveal="drop">
                <div className="cr-sat" data-target="sat">
                  <div className="cr-sat__top">
                    <span className="cr-sat__tick"><Check size={16} strokeWidth={3} /></span>
                    <b>Invite sent</b>
                    <small>in under 120 seconds</small>
                  </div>
                  <div className="cr-sat__row"><CalendarCheck size={16} {...IC} />Plan on the calendar</div>
                </div>
              </Collapse>
            </div>
            {wide ? (
              <Connector route="curve" from={{ x: btn.x + btn.width, y: btn.y + btn.height / 2 }} to={{ x: sat.x, y: sat.y + 30 }} show={s.link} />
            ) : (
              <Connector route="straight" from={{ x: btn.x + btn.width / 2, y: btn.y + btn.height }} to={{ x: sat.x + sat.width / 2, y: sat.y }} show={s.link} />
            )}
          </>
        )
      }}
    </Stage>
  )
}
