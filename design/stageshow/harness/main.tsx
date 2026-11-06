import { StrictMode, type ComponentType } from 'react'
import { createRoot } from 'react-dom/client'
import { StillContext } from '../kit/reduced-motion'
import '../kit/stageshow.css'
import './fonts.css'

// A direct route for filming one component: /?capture=<folder name>.
// `&still=1` renders the reduced-motion poster (film.mjs --still / --reduced).
// New component folders are found at server start: restart the dev server
// after adding one.
const modules = import.meta.glob<{ default: ComponentType }>('../components/*/index.tsx')
const params = new URLSearchParams(location.search)
const name = params.get('capture') ?? ''
const load = modules[`../components/${name}/index.tsx`]
const root = createRoot(document.getElementById('root')!)
if (!load) {
  root.render(<p role="alert" style={{ color: '#f2f2f4', font: '14px system-ui' }}>Unknown component "{name}". Known: {Object.keys(modules).map((k) => k.split('/')[2]).join(', ')}</p>)
} else {
  load().then(({ default: Demo }) =>
    root.render(
      <StrictMode>
        <div id="example">
          <StillContext.Provider value={params.get('still') === '1'}>
            <Demo />
          </StillContext.Provider>
        </div>
      </StrictMode>,
    ),
  )
}
