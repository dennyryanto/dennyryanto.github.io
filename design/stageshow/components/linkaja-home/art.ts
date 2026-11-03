// Art for the two invented placeholder banners (2 and 3): flat shapes in the banner's own colours,
// drawn into the banner's background so they never count as content. 342 x 140, like the banner.
const wrap = (body: string) => `<svg xmlns="http://www.w3.org/2000/svg" width="342" height="140" viewBox="0 0 342 140">${body}</svg>`

// Banner 2, top up: three coins, each a disc with a ring
export const COINS = wrap(
  '<circle cx="272" cy="40" r="33" fill="#f4934b"/><circle cx="272" cy="40" r="23" fill="none" stroke="#f59b58" stroke-width="5"/>' +
    '<circle cx="320" cy="118" r="24" fill="#f4934b"/><circle cx="320" cy="118" r="15" fill="none" stroke="#f59b58" stroke-width="4"/>' +
    '<circle cx="240" cy="110" r="15" fill="#f59b58"/>',
)

// Banner 3, bills in one place: three bills, tilted
export const BILLS = wrap(
  '<g transform="rotate(-12 282 41)"><rect x="236" y="14" width="92" height="54" rx="9" fill="#ec444b"/><rect x="246" y="48" width="44" height="8" rx="4" fill="#ed5157"/></g>' +
    '<g transform="rotate(9 307 112)"><rect x="270" y="90" width="74" height="44" rx="9" fill="#ed5157"/></g>' +
    '<g transform="rotate(14 239 113)"><rect x="222" y="96" width="34" height="34" rx="8" fill="#ec444b"/></g>',
)
