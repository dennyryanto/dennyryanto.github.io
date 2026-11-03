import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../kit/stageshow.css'
import './review.css'
import LinkAjaRouting from '../components/linkaja-routing'

// The page is static HTML; React only draws the stages. The width switch
// narrows the frame so a stage falls back to its compact design, as it would
// in a phone column. Replay remounts the demo at its story boundary.
function Stage() {
  const [run, setRun] = useState(0)
  useEffect(() => {
    const button = document.getElementById('replay')
    const again = () => setRun((n) => n + 1)
    button?.addEventListener('click', again)
    return () => button?.removeEventListener('click', again)
  }, [])
  return <LinkAjaRouting key={run} />
}

createRoot(document.getElementById('lr-stage')!).render(
  <StrictMode>
    <Stage />
  </StrictMode>,
)

const frame = document.getElementById('lr-frame')
const widths = [document.getElementById('w-desk'), document.getElementById('w-phone')]
widths.forEach((button) =>
  button?.addEventListener('click', () => {
    const phone = button === widths[1]
    frame?.toggleAttribute('data-phone', phone)
    widths.forEach((b) => b?.setAttribute('aria-pressed', String(b === button)))
  }),
)
