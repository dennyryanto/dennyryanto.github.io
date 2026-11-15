import type { ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import LinkAjaRouting from '../components/linkaja-routing'
import LinkAjaHome from '../components/linkaja-home'
import KomunalShippedFlow from '../components/komunal-shipped-flow'
import AiDecisionDesk from '../components/ai-decision-desk'
import AiChrona from '../components/ai-chrona'

// The five kept demos, as the site loads them. build_hifi.py puts a placeholder
// (`<div data-ss="<id>">`, with its two posters inside) where each one goes and the
// page's script calls mount() on it the first time its case study opens. Mounting
// replaces the posters.
const demos: Record<string, ComponentType> = {
  'linkaja-routing': LinkAjaRouting,
  'linkaja-home': LinkAjaHome,
  'komunal-shipped-flow': KomunalShippedFlow,
  'ai-decision-desk': AiDecisionDesk,
  'ai-chrona': AiChrona,
}

export function mount(el: HTMLElement) {
  const Demo = demos[el.dataset.ss ?? '']
  if (!Demo || el.dataset.ssOn) return
  el.dataset.ssOn = '1'
  createRoot(el).render(<Demo />)
  el.classList.add('ss-ready')
}
