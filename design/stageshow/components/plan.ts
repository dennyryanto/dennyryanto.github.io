// The 25 mockups, in site order. A component is "built" when
// components/<id>/index.tsx exists and exports `meta`. Wave 1 is product UI;
// wave 2 is the infographics (design/sections/VIZ-STYLE.md), held until wave 1 is reviewed.
export const CASES = ['LinkAja', 'Komunal', 'Dash · Lumio', 'Independent', 'Lab'] as const
export type CaseName = (typeof CASES)[number]

export const PLAN: { id: string; case: CaseName; title: string; wave: 1 | 2 }[] = [
  { id: 'linkaja-routing', case: 'LinkAja', title: 'Intent routing', wave: 1 },
  { id: 'linkaja-home', case: 'LinkAja', title: 'Home screen as it ships', wave: 1 },
  { id: 'linkaja-support-model', case: 'LinkAja', title: 'Support model', wave: 2 },
  { id: 'linkaja-problem-fix', case: 'LinkAja', title: 'Problem and fix', wave: 2 },
  { id: 'linkaja-opex', case: 'LinkAja', title: 'OPEX chart', wave: 2 },
  { id: 'komunal-shipped-flow', case: 'Komunal', title: 'Shipped deposit flow', wave: 1 },
  { id: 'komunal-transformation', case: 'Komunal', title: 'Transformation', wave: 2 },
  { id: 'komunal-placement-routing', case: 'Komunal', title: 'Placement routing', wave: 2 },
  { id: 'komunal-sprint-sync', case: 'Komunal', title: 'Sprint sync', wave: 2 },
  { id: 'komunal-design-system', case: 'Komunal', title: 'Design system', wave: 2 },
  { id: 'komunal-funnel', case: 'Komunal', title: 'Deposit funnel', wave: 2 },
  { id: 'komunal-tooling-migration', case: 'Komunal', title: 'Tooling migration', wave: 2 },
  { id: 'dash-table-app', case: 'Dash · Lumio', title: 'Dash table app', wave: 1 },
  { id: 'dash-captain-backoffice', case: 'Dash · Lumio', title: 'Captain app and back office', wave: 1 },
  { id: 'lumio-network-cms', case: 'Dash · Lumio', title: 'Lumio network and CMS', wave: 1 },
  { id: 'board-governance', case: 'Dash · Lumio', title: 'Governance', wave: 2 },
  { id: 'ai-decision-desk', case: 'Independent', title: 'Decision desk', wave: 1 },
  { id: 'ai-chrona', case: 'Independent', title: 'Chrona product', wave: 1 },
  { id: 'ai-chrona-loop', case: 'Independent', title: 'Habit loop', wave: 2 },
  { id: 'ai-chrona-engine', case: 'Independent', title: 'Engine', wave: 2 },
  { id: 'lab-eink-faces', case: 'Lab', title: 'E-ink faces', wave: 1 },
  { id: 'lab-shoe-tracker', case: 'Lab', title: 'Shoe tracker', wave: 1 },
  { id: 'lab-cockpit-screens', case: 'Lab', title: 'Cockpit screens', wave: 1 },
  { id: 'lab-garmin-pipeline', case: 'Lab', title: 'Garmin pipeline', wave: 2 },
  { id: 'lab-garmin-deploy', case: 'Lab', title: 'Garmin deployment', wave: 2 },
]

/** What every component folder exports next to its default component. */
export interface Meta {
  /** Matches a PLAN id and the folder name. */
  id: string
  case: CaseName
  title: string
  /** Uppercase label in the board's head row, lime. */
  head: string
  /** The muted note on the right of the head row. */
  note?: string
  /** One or two sentences beside (split) or under (full) the head row, the site's own copy. */
  lead?: string
  /** split: lead left, stage right. full: the stage spans the board. */
  layout: 'split' | 'full'
  /** The stage's design width, which sets the stage column in split layout. */
  stageWidth: number
  /** Short review notes: [bold lead-in, sentence]. Include what was checked and what was not. */
  notes: [string, string][]
}
