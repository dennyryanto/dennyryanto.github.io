/*
 * stack.js: the "exploded layers" signature visuals. Each case is three identical slabs stacked straight up: what
 * the product started from, the decision layer in between, and the product itself. Each lower layer makes one lime
 * decision; its thread rises straight up and lands on the top layer as lime UI. Once in view, the stack builds once
 * from the foundation up. Fixed camera, no rotation, dependency-free canvas.
 */
(function (root) {
  'use strict';
  var DEG = Math.PI / 180;
  var PAL = { ink: '#161511', line: '#d1cec8', line2: '#797772', lime: '#c8f23c' };

  // ---------- timing (seconds) ----------
  var STEP = 0.95, RISE = 0.45, DECIDE = 0.4, LIGHT = 0.42, CLIMB = 0.45;

  // a locked decision strikes like a lamp: a few uneven flickers, then it holds. [until (s after lock), level]; 1 = lime
  var FLICKER = [[0.04, 1], [0.09, 0.12], [0.12, 0.85], [0.2, 0.08], [0.24, 1], [0.28, 0.3], [0.33, 0.95], [0.36, 0.45]];
  function flick(u) {
    if (u < 0) return 0;
    for (var i = 0; i < FLICKER.length; i++) if (u < FLICKER[i][0]) return FLICKER[i][1];
    return 1;
  }

  function ease(u) { u = Math.max(0, Math.min(1, u)); return 1 - Math.pow(1 - u, 3); }
  function hex(c) { return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)]; }
  function mix(a, b, u) { var A = hex(a), B = hex(b); u = Math.max(0, Math.min(1, u)); return 'rgb(' + A.map(function (v, i) { return Math.round(v + (B[i] - v) * u); }).join(',') + ')'; }

  // ---------- scenes ----------
  // w, d: the slab footprint, shared by every layer; gap: the rise between layers.
  // layers: { ops, blocks: [[x, y, w, d, h], ...] } bottom first; the last layer is the product.
  // picks: one decision per lower layer. { k, at: [x, y], h (thread starts on a block top), ops: the mark on its own
  // layer, land: what it becomes on the top layer }, both relative to at. Styles: f, f2 fills; s, s2 strokes;
  // D, Ds lime once decided. Ops: rect, circ, line, pl.
  var SCENES = {
    // LinkAja: a queue of tickets → the intents behind them → the self-service chat
    linkaja: function () {
      var tickets = [];
      for (var c = 0; c < 4; c++) for (var r = 0; r < 3; r++) { var x = 0.4 + c * 2.15, y = 0.35 + r * 1.85; tickets.push(['rect', x, y, x + 1.7, y + 1.3, 's2'], ['line', x + 0.25, y + 0.4, x + 1.2, y + 0.4, 's2']); }
      var nodes = [[1.5, 1.5], [4.6, 1.1], [6.4, 4.2], [2.6, 4.5], [7.6, 1.8], [4.8, 3.3]], net = [];
      [[0, 1], [0, 3], [1, 5], [1, 4], [5, 2], [3, 5], [4, 2]].forEach(function (e) { net.push(['line', nodes[e[0]][0], nodes[e[0]][1], nodes[e[1]][0], nodes[e[1]][1], 's2']); });
      nodes.forEach(function (n, i) { if (i !== 2) net.push(['circ', n[0], n[1], 0.28, 's']); });
      return { w: 9, d: 6, gap: 2.9,
        layers: [
          { ops: tickets },
          { ops: net },
          { ops: [['rect', 0.4, 0.35, 8.6, 0.95, 's'], ['circ', 0.75, 0.65, 0.14, 'f2'], ['rect', 4.0, 1.35, 8.6, 1.95, 's2'], ['rect', 0.4, 5.1, 8.6, 5.6, 's'], ['circ', 8.25, 5.35, 0.12, 'f']] }
        ],
        picks: [
          // the repeat question worth automating → the chat's answer
          { k: 0, at: [2.55, 3.3], ops: [['rect', -0.85, -0.65, 0.85, 0.65, 'Ds'], ['rect', -0.6, -0.25, 0.35, 0.0, 'D']], land: [['rect', -2.15, -0.38, 2.6, 0.38, 'D']] },
          // the intent it maps to → the quick reply that resolves it
          { k: 1, at: [6.4, 4.2], ops: [['circ', 0, 0, 0.36, 'Ds'], ['circ', 0, 0, 0.16, 'D']], land: [['rect', -1.3, -0.3, 1.3, 0.3, 'D']] }
        ] };
    },

    // Independent: raw sources → the signal that matters → the decision card
    independent: function () {
      var grid = [];
      for (var a = 0; a < 6; a++) for (var b = 0; b < 4; b++) { var x = 0.45 + a * 1.4, y = 0.4 + b * 1.35; grid.push(['rect', x, y, x + 1.1, y + 1.05, (a * 5 + b * 3) % 7 === 0 ? 'f2' : 's2']); }
      return { w: 9, d: 6, gap: 2.9,
        layers: [
          { ops: [], blocks: [[0.7, 0.6, 0.8, 0.7, 0.5], [3.6, 0.7, 0.7, 0.6, 0.8], [6.3, 0.9, 0.9, 0.6, 0.4], [3.7, 3.1, 0.6, 0.6, 0.6], [5.6, 2.0, 0.6, 0.6, 0.9], [0.9, 4.3, 0.6, 0.7, 0.7], [7.2, 4.0, 0.8, 0.7, 0.5], [3.4, 4.6, 0.7, 0.5, 0.4]] },
          { ops: grid },
          { ops: [['line', 0.6, 0.75, 4.2, 0.75, 's'], ['line', 0.6, 1.15, 6.2, 1.15, 's2'], ['line', 0.6, 2.0, 7.4, 2.0, 's2'], ['line', 0.6, 2.35, 6.2, 2.35, 's2'], ['rect', 0.6, 3.28, 8.4, 3.52, 's2'], ['rect', 3.0, 4.67, 5.0, 5.27, 's']] }
        ],
        picks: [
          // the one source worth trusting → the confidence it gives
          { k: 0, at: [4.0, 3.4], h: 0.6, ops: [['rect', -0.6, -0.6, 0.6, 0.6, 'Ds']], land: [['rect', -3.4, -0.12, 1.6, 0.12, 'D']] },
          // the signal that settles it → approve
          { k: 1, at: [6.6, 4.975], ops: [['rect', -0.55, -0.525, 0.55, 0.525, 'D']], land: [['rect', -1.0, -0.3, 1.0, 0.3, 'D']] }
        ] };
    },

    // Komunal: the shared design system → the deposit funnel → the deposit screen
    komunal: function () {
      var ds = [];
      for (var i = 0; i < 7; i++) ds.push(['rect', 0.5 + i * 1.15, 0.45, 1.3 + i * 1.15, 1.25, ['f', 'f2', 's', 'f2', 's2', 'f', 's'][i]]);
      ds.push(['rect', 0.5, 1.75, 2.6, 2.25, 's'], ['rect', 2.9, 1.75, 5.0, 2.25, 'f2'], ['rect', 5.3, 1.75, 8.5, 2.25, 's2'],
        ['rect', 0.5, 2.8, 2.9, 5.5, 's2'], ['line', 0.8, 3.2, 2.3, 3.2, 's2'], ['line', 0.8, 3.5, 1.9, 3.5, 's2'],
        ['rect', 3.3, 2.8, 5.7, 5.5, 's2'], ['line', 3.6, 3.2, 5.1, 3.2, 's2'], ['line', 3.6, 3.5, 4.7, 3.5, 's2'],
        ['rect', 6.1, 2.8, 8.5, 5.5, 's2'], ['line', 6.4, 3.2, 7.9, 3.2, 's2'], ['line', 6.4, 3.5, 7.5, 3.5, 's2']);
      var funnel = [], len = [8.0, 7.1, 6.5, 0, 4.6, 4.4];
      len.forEach(function (l, r) { var y = 0.55 + r * 0.95; funnel.push(['rect', 0.5, y - 0.16, 8.5, y + 0.16, 's2']); if (l) funnel.push(['rect', 0.5, y - 0.16, 0.5 + l, y + 0.16, 's']); });
      return { w: 9, d: 6, gap: 2.9,
        layers: [
          { ops: ds },
          { ops: funnel },
          { ops: [['line', 0.6, 0.6, 3.4, 0.6, 's'], ['rect', 0.6, 1.0, 8.4, 1.9, 's'], ['line', 0.9, 1.45, 3.6, 1.45, 's'], ['line', 0.6, 2.35, 6.8, 2.35, 's2'], ['line', 0.6, 2.7, 5.4, 2.7, 's2'],
            ['rect', 0.5, 3.35, 8.5, 3.55, 's2'], ['rect', 3.4, 4.6, 5.6, 5.3, 's']] }
        ],
        picks: [
          // the shared component, adopted by all three orgs → the deposit button
          { k: 0, at: [7.3, 4.6], ops: [['rect', -1.0, -0.3, 1.0, 0.3, 'D']], land: [['rect', -1.15, -0.35, 1.15, 0.35, 'D']] },
          // the funnel step that leaked, redesigned → the completed progress
          { k: 1, at: [3.0, 3.4], ops: [['rect', -2.5, -0.16, 3.0, 0.16, 'D']], land: [['rect', -2.5, -0.1, 3.0, 0.1, 'D']] }
        ] };
    },

    // Dash · Lumio: the restaurant floor → the menu → the order sent to the kitchen
    dash: function () {
      var floor = [['rect', 0.4, 0.25, 8.6, 0.55, 's2']];
      [1.3, 3.4, 5.5, 7.6].forEach(function (x) { [1.5, 3.2, 4.9].forEach(function (y) {
        if (Math.abs(x - 3.4) < 0.1 && Math.abs(y - 4.9) < 0.1) return;
        floor.push(['circ', x, y, 0.42, 's'], ['circ', x - 0.62, y, 0.08, 'f2'], ['circ', x + 0.62, y, 0.08, 'f2'], ['circ', x, y - 0.62, 0.08, 'f2'], ['circ', x, y + 0.62, 0.08, 'f2']);
      }); });
      var menu = [];
      for (var c = 0; c < 4; c++) for (var r = 0; r < 3; r++) { var x = 0.4 + c * 2.15, y = 0.35 + r * 1.85; menu.push(['rect', x, y, x + 1.8, y + 1.4, 's2'], ['rect', x + 0.2, y + 0.2, x + 0.75, y + 0.75, 'f2'], ['line', x + 0.95, y + 0.35, x + 1.6, y + 0.35, 's2']); }
      return { w: 9, d: 6, gap: 2.9,
        layers: [
          { ops: floor },
          { ops: menu },
          { ops: [['rect', 0.4, 0.3, 8.6, 0.9, 's'], ['circ', 0.75, 0.6, 0.13, 'f2'], ['line', 0.6, 1.6, 5.0, 1.6, 's2'], ['line', 0.6, 2.2, 4.4, 2.2, 's2'], ['rect', 6.0, 1.35, 8.5, 1.9, 's2'], ['line', 0.6, 3.6, 5.2, 3.6, 's2']] }
        ],
        picks: [
          // the table → its order goes to the kitchen
          { k: 0, at: [3.4, 4.9], ops: [['circ', 0, 0, 0.42, 'Ds'], ['circ', 0, 0, 0.16, 'D'], ['circ', -0.62, 0, 0.08, 'D'], ['circ', 0.62, 0, 0.08, 'D'], ['circ', 0, -0.62, 0.08, 'D'], ['circ', 0, 0.62, 0.08, 'D']], land: [['rect', -2.8, -0.34, 1.6, 0.34, 'D']] },
          // the dish → added to the order
          { k: 1, at: [7.35, 2.75], ops: [['rect', -0.9, -0.7, 0.9, 0.7, 'Ds'], ['rect', -0.6, 0.2, 0.3, 0.45, 'D']], land: [['rect', -1.35, -0.3, 1.15, 0.3, 'D']] }
        ] };
    },

    // E-ink: live data feeds → the 1-bit render → the panel on the nightstand
    eink: function () {
      var feeds = [];
      [0.8, 2.0, 3.2, 4.4, 5.4].forEach(function (y, r) {
        feeds.push(['circ', 0.85, y, 0.2, 's'], ['line', 1.35, y, 3.0, y, 's2']);
        if (r !== 2) feeds.push(['pl', [[4.0, y + 0.2], [4.8, y - 0.1], [5.6, y + 0.12], [6.4, y - 0.25], [7.2, y], [8.4, y - 0.2]], 's2']);
      });
      var dith = [['rect', 0.5, 0.45, 4.3, 2.75, 's'], ['rect', 4.7, 0.45, 8.5, 2.75, 's'], ['rect', 0.5, 3.15, 8.5, 5.55, 's']];
      for (var a = 0; a < 14; a++) for (var b = 0; b < 4; b++) if ((a + b) % 2 === 0) { var x = 0.85 + a * 0.55, y = 0.75 + b * 0.5; dith.push(['rect', x, y, x + 0.12, y + 0.12, 'f2']); }
      return { w: 9, d: 6, gap: 2.9,
        layers: [
          { ops: feeds },
          { ops: dith },
          { ops: [['rect', 0.35, 0.3, 8.65, 5.7, 's'], ['line', 0.8, 0.8, 3.6, 0.8, 's'], ['rect', 0.8, 1.3, 2.6, 2.4, 'f2'], ['rect', 6.2, 1.3, 8.2, 2.4, 'f2'], ['line', 0.8, 5.25, 4.4, 5.25, 's2']] }
        ],
        picks: [
          // readiness: the one feed the morning needs → the big number on the panel
          { k: 0, at: [6.2, 3.2], ops: [['pl', [[-2.2, 0.2], [-1.4, -0.1], [-0.6, 0.12], [0.2, -0.25], [1.0, 0], [2.2, -0.2]], 'Ds'], ['circ', 2.2, -0.2, 0.12, 'D']], land: [['rect', -3.2, -0.55, -0.6, 0.55, 'D']] },
          // the block that survives 1-bit → today's suggestion
          { k: 1, at: [6.5, 4.4], ops: [['rect', -1.7, -0.9, 1.7, 0.9, 'Ds'], ['rect', -1.4, -0.55, 0.6, -0.25, 'D'], ['rect', -1.4, 0.05, 1.2, 0.35, 'D']], land: [['rect', -1.8, -0.3, 1.8, 0.3, 'D']] }
        ] };
    },

    // Cockpit: terrain (where you are) → a wall of instruments → one graduated strip with one pointer
    cockpit: function () {
      var terr = [];
      [[2.2, 1.8, [0.5, 1.0, 1.5]], [6.8, 2.4, [0.4, 0.9, 1.4, 1.9]], [4.6, 4.6, [0.45, 0.9]]].forEach(function (h) { h[2].forEach(function (r) { terr.push(['circ', h[0], h[1], r, 's2']); }); });
      var inst = [];
      [1.6, 4.4, 7.2].forEach(function (x) { [1.6, 4.2].forEach(function (y) {
        if (Math.abs(x - 7.2) < 0.1 && Math.abs(y - 4.2) < 0.1) return;
        inst.push(['circ', x, y, 0.6, 's'], ['line', x, y, x + 0.35, y - 0.4, 's2'], ['line', x - 0.6, y + 0.95, x + 0.6, y + 0.95, 's2']);
      }); });
      var strip = [['rect', 0.6, 3.5, 5.6, 3.7, 's2']];
      for (var i = 0; i <= 25; i++) strip.push(['line', 0.6 + i * 0.2, 3.5, 0.6 + i * 0.2, 3.5 - (i % 5 === 0 ? 0.3 : 0.15), 's2']);
      return { w: 9, d: 6, gap: 2.9,
        layers: [
          { ops: terr },
          { ops: inst },
          { ops: [['line', 0.6, 0.7, 3.2, 0.7, 's'], ['pl', [[0.6, 2.2], [1.6, 1.8], [2.6, 2.0], [3.6, 1.4], [4.6, 1.7], [5.6, 1.2]], 's2'], ['rect', 6.1, 1.0, 8.4, 2.4, 's2']].concat(strip) }
        ],
        picks: [
          // you, now: your position → the pointer on the strip
          { k: 0, at: [2.8, 3.6], ops: [['circ', 0, 0, 0.32, 'Ds'], ['circ', 0, 0, 0.11, 'D']], land: [['rect', -0.05, -0.55, 0.05, 0.35, 'D'], ['rect', -0.16, -0.75, 0.16, -0.5, 'D']] },
          // the reading that matters today → its value, lit
          { k: 1, at: [7.2, 4.2], ops: [['circ', 0, 0, 0.6, 'Ds'], ['line', 0, 0, 0.35, -0.4, 'Ds'], ['circ', 0, 0, 0.1, 'D'], ['rect', -0.6, 0.85, 0.6, 1.05, 'D']], land: [['rect', -1.1, -0.3, 1.1, 0.3, 'D']] }
        ] };
    }
  };

  // ---------- renderer ----------
  function Renderer(canvas, scene, opts) {
    opts = opts || {};
    this.cv = canvas; this.cx = canvas.getContext('2d');
    this.S = SCENES[scene]();
    this.yaw = opts.yaw || 40; this.elev = opts.elev || 26;
    this.pad = opts.pad || [0.08, 0.16];
    var n = this.S.layers.length;
    this.END = (n - 1) * STEP + DECIDE + LIGHT + 0.05;
    this.resize();
  }

  Renderer.prototype.resize = function () {
    var r = this.cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    this.W = Math.max(1, Math.round(r.width)); this.H = Math.max(1, Math.round(r.height));
    this.cv.width = Math.round(this.W * dpr); this.cv.height = Math.round(this.H * dpr);
    this.lw = Math.max(0.7, this.W / 1100);
    this.fit();
  };

  Renderer.prototype.fit = function () {
    var S = this.S, self = this, b = [1e9, -1e9, 1e9, -1e9], top = (S.layers.length - 1) * S.gap + 0.12;
    this.mx = S.w / 2; this.my = S.d / 2;
    this.c = Math.cos(this.yaw * DEG); this.s = Math.sin(this.yaw * DEG); this.se = Math.sin(this.elev * DEG); this.ce = Math.cos(this.elev * DEG);
    this.k = 1; this.ox = 0; this.oy = 0;
    [0, S.w].forEach(function (x) { [0, S.d].forEach(function (y) { [0, top].forEach(function (z) { var p = self.P(x, y, z); b[0] = Math.min(b[0], p[0]); b[1] = Math.max(b[1], p[0]); b[2] = Math.min(b[2], p[1]); b[3] = Math.max(b[3], p[1]); }); }); });
    var aw = this.W * (1 - 2 * this.pad[1]), ah = this.H * (1 - 2 * this.pad[0]);
    this.k = Math.min(aw / (b[1] - b[0]), ah / (b[3] - b[2]));
    this.ox = this.W / 2 - this.k * (b[0] + b[1]) / 2; this.oy = this.H / 2 - this.k * (b[2] + b[3]) / 2;
  };

  Renderer.prototype.P = function (x, y, z) {
    var dx = x - this.mx, dy = y - this.my, xr = dx * this.c - dy * this.s, yr = dx * this.s + dy * this.c;
    return [this.ox + xr * this.k, this.oy + (yr * this.se - z * this.ce) * this.k];
  };
  Renderer.prototype.depth = function (x, y) { return (x - this.mx) * this.s + (y - this.my) * this.c; };

  Renderer.prototype.poly = function (pts, fill, stroke, w) {
    var g = this.cx; g.beginPath(); g.moveTo(pts[0][0], pts[0][1]);
    for (var k = 1; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
    g.closePath();
    if (fill) { g.fillStyle = fill; g.fill(); }
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = w; g.stroke(); }
  };
  Renderer.prototype.seg = function (a, b, col, w) { var g = this.cx; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.strokeStyle = col; g.lineWidth = w; g.stroke(); };
  Renderer.prototype.dot = function (p, r, col) { var g = this.cx; g.beginPath(); g.arc(p[0], p[1], r, 0, Math.PI * 2); g.fillStyle = col; g.fill(); };

  // a slab or block: two visible sides and a top, filled with ink so what is behind disappears
  Renderer.prototype.box = function (x, y, z, w, d, h, L) {
    var self = this, P = function (a, b, c) { return self.P(a, b, c); }, x1 = x + w, y1 = y + d, z1 = z + h;
    this.poly([P(x, y1, z), P(x1, y1, z), P(x1, y1, z1), P(x, y1, z1)], PAL.ink, PAL.line, L);
    this.poly([P(x1, y, z), P(x1, y1, z), P(x1, y1, z1), P(x1, y, z1)], PAL.ink, PAL.line, L);
    this.poly([P(x, y, z1), P(x1, y, z1), P(x1, y1, z1), P(x, y1, z1)], PAL.ink, PAL.line, L);
  };

  // flat marks on a surface; dc is the colour decision styles have right now
  Renderer.prototype.ops = function (M, ops, L2, dc) {
    var g = this.cx;
    var style = function (st) {
      if (st === 'f') return { fill: PAL.line };
      if (st === 'f2') return { fill: PAL.line2 };
      if (st === 's2') return { stroke: PAL.line2, w: L2 };
      if (st === 'D') return { fill: dc.fill };
      if (st === 'Ds') return { stroke: dc.stroke, w: L2 * 2 };
      return { stroke: PAL.line, w: L2 * 1.3 };
    };
    var path = function (pts, closed, sty) {
      g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (var k = 1; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
      if (closed) g.closePath();
      if (sty.fill) { g.fillStyle = sty.fill; g.fill(); } else { g.strokeStyle = sty.stroke; g.lineWidth = sty.w; g.stroke(); }
    };
    ops.forEach(function (op) {
      var t = op[0];
      if (t === 'rect') path([M(op[1], op[2]), M(op[3], op[2]), M(op[3], op[4]), M(op[1], op[4])], true, style(op[5]));
      else if (t === 'line') path([M(op[1], op[2]), M(op[3], op[4])], false, style(op[5]));
      else if (t === 'pl') path(op[1].map(function (q) { return M(q[0], q[1]); }), false, style(op[2]));
      else if (t === 'circ') { var pts = []; for (var k = 0; k < 28; k++) { var a = k / 28 * Math.PI * 2; pts.push(M(op[1] + op[3] * Math.cos(a), op[2] + op[3] * Math.sin(a))); } path(pts, true, style(op[4])); }
    });
  };

  // the build at time t: every slab, decision and thread is a pure function of t (the flicker too, so replays match)
  Renderer.prototype.render = function (t) {
    var S = this.S, g = this.cx, self = this, dpr = this.cv.width / this.W, L1 = 1.4 * this.lw, L2 = 0.8 * this.lw, n = S.layers.length, T = 0.12;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.globalAlpha = 1; g.fillStyle = PAL.ink; g.fillRect(0, 0, this.W, this.H);
    g.lineCap = 'round'; g.lineJoin = 'round';
    var lit = function (k) { return flick(t - k * STEP - DECIDE); };
    var neutral = { fill: PAL.line2, stroke: PAL.line };
    S.layers.forEach(function (l, k) {
      var t0 = k * STEP; if (t < t0) return;
      var rise = ease((t - t0) / RISE), z = k * S.gap - 0.4 * (1 - rise), zt = z + T, top = k === n - 1;
      var on = function (x, y) { return function (a, b) { return self.P(x + a, y + b, zt); }; };
      g.globalAlpha = rise;
      self.box(0, 0, z, S.w, S.d, T, L1);
      self.ops(on(0, 0), l.ops || [], L2, neutral);
      S.picks.forEach(function (p) {
        if (p.k === k) { var u = lit(k); self.ops(on(p.at[0], p.at[1]), p.ops, L2, { fill: mix(PAL.line2, PAL.lime, u), stroke: mix(PAL.line, PAL.lime, u) }); }
        else if (p.k < k && !top) self.dot(self.P(p.at[0], p.at[1], zt), 2.6 * self.lw, PAL.lime); // a decision from below passing through
        else if (top) { var a = lit(k); if (a > 0) { g.globalAlpha = rise * a; self.ops(on(p.at[0], p.at[1]), p.land, L2, { fill: PAL.lime, stroke: PAL.lime }); g.globalAlpha = rise; } }
      });
      (l.blocks || []).slice().sort(function (a, b) { return self.depth(a[0] + a[2] / 2, a[1] + a[3] / 2) - self.depth(b[0] + b[2] / 2, b[1] + b[3] / 2); })
        .forEach(function (b) { self.box(b[0], b[1], zt, b[2], b[3], b[4], L1 * 0.85); });
      g.globalAlpha = 1;
      // every decision made so far climbs straight up through the gap above this layer
      if (top) return;
      var climb = ease((t - t0 - DECIDE - LIGHT) / CLIMB), zn = (k + 1) * S.gap;
      if (climb > 0) S.picks.forEach(function (p) {
        if (p.k > k) return;
        var z0 = zt + (p.k === k ? (p.h || 0) : 0), a = self.P(p.at[0], p.at[1], z0), b = self.P(p.at[0], p.at[1], z0 + (zn - z0) * climb);
        self.seg(a, b, PAL.lime, L1 * 1.2);
        if (p.k === k) self.dot(a, 2.6 * self.lw, PAL.lime);
      });
    });
  };

  // ---------- mounting: lazy; builds once when well in view; reduced motion shows the finished stack ----------
  function mount(canvas, opts) {
    opts = opts || {};
    var scene = canvas.getAttribute('data-stack'), R = null, t = 0, raf = 0, last = 0, played = false;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function tick(now) {
      raf = 0; t += Math.min(0.05, (now - last) / 1000) || 0; last = now;
      R.render(Math.min(t, R.END));
      if (t < R.END) raf = requestAnimationFrame(tick);
    }
    function play() { if (raf) cancelAnimationFrame(raf); t = 0; played = true; last = performance.now(); raf = requestAnimationFrame(tick); }
    function start() {
      R = new Renderer(canvas, scene, opts);
      if (reduce || !('IntersectionObserver' in window)) { t = R.END; R.render(t); }
      else {
        R.render(0);
        var seen = new IntersectionObserver(function (es) { if (es[0].isIntersecting && !played) { seen.disconnect(); play(); } }, { threshold: 0.45 });
        seen.observe(canvas);
      }
      var rt = null;
      window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { R.resize(); R.render(Math.min(t, R.END)); }, 120); });
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); start(); } }, { rootMargin: '300px 0px' });
      io.observe(canvas);
    } else start();
    return { replay: function () { if (R && !reduce) play(); } };
  }

  root.STACK = { mount: mount, Renderer: Renderer, scenes: Object.keys(SCENES), define: function (name, fn) { SCENES[name] = fn; } };
})(window);
