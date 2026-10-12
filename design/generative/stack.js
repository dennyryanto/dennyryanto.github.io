/*
 * stack.js: the "exploded layers" signature visuals. Each case is drawn as the layers its product was built from,
 * floating one above another at a fixed angle. Lime marks the decision made on each layer, and a lime thread
 * carries it up to the next. Once in view, the stack builds once from the foundation up; decisions that did not
 * survive to the final layer dim, so one lime trail remains. Dependency-free canvas; no rotation.
 */
(function (root) {
  'use strict';
  var DEG = Math.PI / 180;
  var PAL = { ink: '#161511', line: '#d1cec8', line2: '#797772', lime: '#c8f23c', dead: '#4b571e' };

  // ---------- timing (seconds) ----------
  var STEP = 0.9, RISE = 0.5, DECIDE = 0.45, LIGHT = 0.3, THREAD = 0.6, FADE = 0.5;

  function ease(u) { u = Math.max(0, Math.min(1, u)); return 1 - Math.pow(1 - u, 3); }
  function hex(c) { return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)]; }
  function mix(a, b, u) { var A = hex(a), B = hex(b); u = Math.max(0, Math.min(1, u)); return 'rgb(' + A.map(function (v, i) { return Math.round(v + (B[i] - v) * u); }).join(',') + ')'; }

  // ---------- scenes ----------
  // layers: { x, y, w, d, z, t, ops, blocks: [[x, y, w, d, h], ...] } in world units, bottom first.
  // items: the decisions. { k: layer, at: [x, y], ops (relative to at; 'D' lime fill, 'Ds' lime stroke), up: thread to the
  // next layer, live: survives to the end }. Ops styles: f, f2 (fills), s, s2 (strokes); a tiny vocabulary of rect, circ, line, pl.
  var SCENES = {
    // LinkAja: support tickets → intents → conversation flows → the self-service chat
    linkaja: function () {
      var L = [], I = [], tk = [];
      for (var c = 0; c < 5; c++) for (var r = 0; r < 4; r++) {
        var tx = 0.45 + c * 2.0, ty = 0.45 + r * 1.62;
        tk.push(['rect', tx, ty, tx + 1.6, ty + 1.2, 's2'], ['line', tx + 0.2, ty + 0.35, tx + 1.25, ty + 0.35, 's2'], ['line', tx + 0.2, ty + 0.58, tx + 0.9, ty + 0.58, 's2']);
      }
      L.push({ x: 0, y: 0, w: 10.4, d: 7, z: 0, t: 0.2, ops: tk });
      var ticket = [['rect', -0.8, -0.6, 0.8, 0.6, 'Ds'], ['rect', -0.6, 0.2, 0.15, 0.4, 'D']];
      // which repeat tickets could be self-served
      I.push({ k: 0, at: [3.25, 1.05], ops: ticket, up: true, live: true }, { k: 0, at: [7.25, 5.91], ops: ticket, up: true, live: true },
        { k: 0, at: [7.25, 2.67], ops: ticket, up: true }, { k: 0, at: [3.25, 4.29], ops: ticket, up: true },
        { k: 0, at: [1.25, 5.91], ops: ticket }, { k: 0, at: [9.25, 1.05], ops: ticket });
      // intents: a network of nodes; the automatable ones light
      var nodes = [[3.25, 1.05], [7.25, 5.91], [7.25, 2.67], [3.25, 4.29], [1.6, 2.7], [5.3, 1.5], [5.4, 4.7], [9.0, 4.1]], net = [];
      [[0, 4], [0, 5], [4, 3], [3, 6], [5, 2], [2, 7], [6, 1], [7, 1], [5, 6], [2, 6]].forEach(function (e) { var a = nodes[e[0]], b = nodes[e[1]]; net.push(['line', a[0] - 0.8, a[1] - 0.3, b[0] - 0.8, b[1] - 0.3, 's2']); });
      nodes.slice(4).forEach(function (n) { net.push(['circ', n[0] - 0.8, n[1] - 0.3, 0.26, 's']); });
      L.push({ x: 0.8, y: 0.3, w: 9.2, d: 6.4, z: 2.1, t: 0.14, ops: net });
      var node = [['circ', 0, 0, 0.3, 'Ds'], ['circ', 0, 0, 0.13, 'D']];
      I.push({ k: 1, at: [3.25, 1.05], ops: node, up: true, live: true }, { k: 1, at: [7.25, 5.91], ops: node, up: true, live: true },
        { k: 1, at: [7.25, 2.67], ops: node }, { k: 1, at: [3.25, 4.29], ops: node, up: true });
      // conversation flows: one card per chosen intent; one does not make it
      var card = [['rect', -1.1, -0.72, 1.1, 0.72, 'Ds'], ['rect', -0.85, -0.48, -0.25, -0.16, 'D'], ['line', -0.25, -0.32, 0.2, -0.32, 'Ds'], ['rect', 0.2, -0.48, 0.85, -0.16, 's2'],
        ['line', -0.55, -0.16, -0.55, 0.16, 'Ds'], ['rect', -0.85, 0.16, -0.25, 0.48, 'D'], ['rect', 0.2, 0.16, 0.85, 0.48, 's2']];
      L.push({ x: 1.6, y: 0.05, w: 7.4, d: 6.9, z: 4.2, t: 0.14, ops: [['rect', 3.0, 2.6, 5.2, 4.0, 's2'], ['rect', 3.25, 2.85, 3.85, 3.15, 'f2'], ['rect', 4.3, 2.85, 4.95, 3.15, 's2'], ['rect', 3.25, 3.45, 3.85, 3.75, 's2']] });
      I.push({ k: 2, at: [3.25, 1.05], ops: card, up: true, live: true }, { k: 2, at: [7.25, 5.91], ops: card, up: true, live: true }, { k: 2, at: [3.25, 4.29], ops: card });
      // the chat: the survivors become its answer and its resolve action
      L.push({ x: 2.2, y: 0.15, w: 6.2, d: 6.75, z: 6.3, t: 0.16, ops: [
        ['rect', 0.25, 0.2, 5.95, 0.6, 's'], ['circ', 0.55, 0.4, 0.12, 'f2'], ['line', 0.85, 0.4, 2.2, 0.4, 's2'],
        ['rect', 2.6, 1.65, 5.9, 2.15, 's2'], ['rect', 0.3, 2.45, 3.6, 3.05, 's'], ['line', 0.55, 2.75, 3.2, 2.75, 's2'], ['rect', 2.2, 3.4, 5.9, 3.9, 's2'],
        ['rect', 0.25, 6.2, 5.95, 6.55, 's'], ['circ', 5.7, 6.375, 0.1, 'f']] });
      I.push({ k: 3, at: [3.25, 1.05], ops: [['rect', -0.8, -0.28, 2.6, 0.38, 'D']], live: true },
        { k: 3, at: [7.25, 5.91], ops: [['rect', -1.0, -0.26, 1.0, 0.26, 'D'], ['pl', [[-0.25, 0.0], [-0.06, 0.15], [0.28, -0.14]], 'ink']], live: true });
      return { layers: L, items: I };
    },

    // Independent: raw sources → signals → options → one decision card
    independent: function () {
      var L = [], I = [];
      L.push({ x: 0, y: 0, w: 10.4, d: 7, z: 0, t: 0.2, ops: [], blocks: [
        [0.6, 0.5, 0.7, 0.6, 0.5], [1.7, 0.9, 0.5, 0.5, 0.8], [2.6, 1.6, 0.8, 0.7, 0.4], [4.6, 0.6, 0.6, 0.5, 0.6], [6.1, 0.9, 0.9, 0.5, 0.35], [8.4, 0.6, 0.6, 0.7, 0.7],
        [0.8, 3.2, 0.6, 0.6, 0.9], [4.4, 2.7, 0.5, 0.9, 0.5], [7.1, 4.75, 0.6, 0.5, 0.55], [1.75, 5.35, 0.5, 0.5, 0.7], [5.6, 3.3, 0.7, 0.5, 0.7], [8.6, 2.6, 0.8, 0.6, 0.45], [9.1, 3.9, 0.5, 0.5, 0.6],
        [1.0, 5.3, 0.4, 0.5, 0.6], [3.4, 5.6, 0.8, 0.6, 0.4], [4.8, 5.0, 0.5, 0.5, 0.85], [6.4, 6.0, 0.7, 0.5, 0.5], [8.4, 5.6, 0.6, 0.6, 0.35]] });
      var pick = [['rect', -0.6, -0.5, 0.6, 0.5, 'Ds'], ['circ', 0.6, -0.5, 0.08, 'D']];
      // the sources worth using are picked; the thread leaves from the top of the block
      I.push({ k: 0, at: [3.0, 1.95], h: 0.4, ops: pick, up: true, live: true }, { k: 0, at: [7.4, 5.0], h: 0.55, ops: pick, up: true, live: true },
        { k: 0, at: [2.0, 5.6], h: 0.7, ops: pick, up: true }, { k: 0, at: [6.55, 1.15], ops: pick });
      // signals: a heat grid; patterns light
      var grid = [];
      for (var a = 0; a < 9; a++) for (var b = 0; b < 6; b++) { var x = 0.35 + a * 0.95, y = 0.3 + b * 0.95; grid.push(['rect', x, y, x + 0.75, y + 0.75, (a * 7 + b * 3) % 5 === 0 ? 'f2' : 's2']); }
      L.push({ x: 0.7, y: 0.4, w: 9.0, d: 6.2, z: 2.1, t: 0.14, ops: grid });
      var cluster = [['rect', -0.45, -0.45, 0.3, 0.3, 'D'], ['rect', 0.5, -0.45, 1.25, 0.3, 'Ds'], ['rect', -0.45, 0.5, 0.3, 1.25, 'Ds']];
      I.push({ k: 1, at: [3.0, 2.0], ops: cluster, up: true, live: true }, { k: 1, at: [7.4, 5.0], ops: cluster, up: true, live: true }, { k: 1, at: [2.0, 5.6], ops: cluster });
      // options: three proposals; one is dropped
      var opt = [['rect', -1.2, -0.75, 1.2, 0.75, 'Ds'], ['line', -0.95, -0.42, 0.4, -0.42, 'Ds'], ['rect', -0.95, -0.1, 0.95, 0.06, 's2'], ['rect', -0.95, -0.1, 0.35, 0.06, 'D'], ['rect', -0.95, 0.3, 0.95, 0.46, 's2']];
      L.push({ x: 1.4, y: 0.6, w: 7.8, d: 5.9, z: 4.2, t: 0.14, ops: [] });
      I.push({ k: 2, at: [3.0, 2.0], ops: opt, up: true, live: true }, { k: 2, at: [7.4, 5.0], ops: opt, up: true, live: true }, { k: 2, at: [5.3, 3.5], ops: opt });
      // the decision card: confidence and approval are what survived
      L.push({ x: 1.8, y: 0.7, w: 7.2, d: 5.6, z: 6.3, t: 0.16, ops: [
        ['line', 0.4, 0.45, 3.2, 0.45, 's'], ['line', 0.4, 0.75, 4.6, 0.75, 's2'], ['rect', 0.4, 1.17, 6.8, 1.43, 's2'],
        ['line', 0.4, 2.0, 6.2, 2.0, 's2'], ['line', 0.4, 2.3, 5.2, 2.3, 's2'], ['line', 0.4, 2.6, 5.8, 2.6, 's2'],
        ['rect', 2.6, 3.98, 4.4, 4.62, 's']] });
      I.push({ k: 3, at: [3.0, 2.0], ops: [['rect', -0.8, -0.13, 3.1, 0.13, 'D']], live: true },
        { k: 3, at: [7.4, 5.0], ops: [['rect', -0.9, -0.32, 0.9, 0.32, 'D']], live: true });
      return { layers: L, items: I };
    }
  };

  // ---------- renderer ----------
  function Renderer(canvas, scene, opts) {
    opts = opts || {};
    this.cv = canvas; this.cx = canvas.getContext('2d');
    this.S = SCENES[scene]();
    this.yaw = opts.yaw || 42; this.elev = opts.elev || 30;
    // the stack fans out: each layer rises and slides toward the right of the frame, so every layer's decisions stay in sight
    this.shift = this.S.shift || [1.9, -1.9];
    this.pad = opts.pad || [0.08, 0.16];
    var n = this.S.layers.length;
    this.END = (n - 1) * STEP + DECIDE + LIGHT + 0.3 + FADE;
    this.resize();
  }

  Renderer.prototype.resize = function () {
    var r = this.cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    this.W = Math.max(1, Math.round(r.width)); this.H = Math.max(1, Math.round(r.height));
    this.cv.width = Math.round(this.W * dpr); this.cv.height = Math.round(this.H * dpr);
    this.cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.lw = Math.max(0.7, this.W / 1100);
    this.fit();
  };

  Renderer.prototype.fit = function () {
    var S = this.S, self = this, b = [1e9, -1e9, 1e9, -1e9], mx = 0, my = 0, n = 0;
    S.layers.forEach(function (l, k) { mx += l.x + l.w / 2 + self.shift[0] * k; my += l.y + l.d / 2 + self.shift[1] * k; n++; });
    this.mx = mx / n; this.my = my / n;
    this.c = Math.cos(this.yaw * DEG); this.s = Math.sin(this.yaw * DEG); this.se = Math.sin(this.elev * DEG); this.ce = Math.cos(this.elev * DEG);
    this.k = 1; this.ox = 0; this.oy = 0;
    var add = function (x, y, z) { var p = self.P(x, y, z); b[0] = Math.min(b[0], p[0]); b[1] = Math.max(b[1], p[0]); b[2] = Math.min(b[2], p[1]); b[3] = Math.max(b[3], p[1]); };
    S.layers.forEach(function (l, k) { [0, l.w].forEach(function (a) { [0, l.d].forEach(function (d) { var q = self.Q(k, l.x + a, l.y + d, l.z); add(q[0], q[1], q[2]); add(q[0], q[1], l.z + l.t); }); }); });
    var l0 = S.layers[0]; add(l0.x - 0.9, l0.y + l0.d, 0);
    var aw = this.W * (1 - 2 * this.pad[1]), ah = this.H * (1 - 2 * this.pad[0]);
    this.k = Math.min(aw / (b[1] - b[0]), ah / (b[3] - b[2]));
    this.ox = this.W / 2 - this.k * (b[0] + b[1]) / 2; this.oy = this.H / 2 - this.k * (b[2] + b[3]) / 2;
  };

  Renderer.prototype.P = function (x, y, z) {
    var dx = x - this.mx, dy = y - this.my, xr = dx * this.c - dy * this.s, yr = dx * this.s + dy * this.c;
    return [this.ox + xr * this.k, this.oy + (yr * this.se - z * this.ce) * this.k];
  };
  // world point on layer k, after the fan-out shift (returns x, y, z for P)
  Renderer.prototype.Q = function (k, x, y, z) { return [x + this.shift[0] * k, y + this.shift[1] * k, z]; };
  Renderer.prototype.PQ = function (k, x, y, z) { var q = this.Q(k, x, y, z); return this.P(q[0], q[1], q[2]); };
  Renderer.prototype.depth = function (x, y) { return (x - this.mx) * this.s + (y - this.my) * this.c; };

  Renderer.prototype.poly = function (pts, fill, stroke, w) {
    var g = this.cx; g.beginPath(); g.moveTo(pts[0][0], pts[0][1]);
    for (var k = 1; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
    g.closePath();
    if (fill) { g.fillStyle = fill; g.fill(); }
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = w; g.stroke(); }
  };
  Renderer.prototype.seg = function (a, b, col, w) { var g = this.cx; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.strokeStyle = col; g.lineWidth = w; g.stroke(); };

  // a slab or block: the +y face hatched (shadow), the +x face clean, the top filled with ink to hide what is behind
  Renderer.prototype.box = function (x, y, z, w, d, h, L1, LH) {
    var self = this, P = function (a, b, c) { return self.P(a, b, c); }, x1 = x + w, y1 = y + d, z1 = z + h;
    var fy = [P(x, y1, z), P(x1, y1, z), P(x1, y1, z1), P(x, y1, z1)], fx = [P(x1, y, z), P(x1, y1, z), P(x1, y1, z1), P(x1, y, z1)], ft = [P(x, y, z1), P(x1, y, z1), P(x1, y1, z1), P(x, y1, z1)];
    this.poly(fy, PAL.ink, PAL.line, L1 * 0.8);
    var n = Math.max(1, Math.round(Math.abs(fy[1][0] - fy[0][0]) / (5.5 * this.lw)));
    for (var k = 1; k < n; k++) this.seg(P(x + w * k / n, y1, z), P(x + w * k / n, y1, z1), PAL.line2, LH);
    this.poly(fx, PAL.ink, PAL.line, L1 * 0.8);
    this.poly(ft, PAL.ink, PAL.line, L1 * 0.8);
  };

  // ops drawn flat on a surface; dc is the colour the decision styles take right now
  Renderer.prototype.ops = function (M, ops, L2, dc) {
    var g = this.cx;
    var style = function (st) {
      if (st === 'f') return { fill: PAL.line };
      if (st === 'f2') return { fill: PAL.line2 };
      if (st === 's2') return { stroke: PAL.line2, w: L2 };
      if (st === 'D') return { fill: dc.fill };
      if (st === 'Ds') return { stroke: dc.stroke, w: L2 * (dc.lit ? 2 : 1.3) };
      if (st === 'ink') return { stroke: PAL.ink, w: L2 * 2.2 };
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

  // the state of the build at time t: every layer, decision and thread is a pure function of t
  Renderer.prototype.render = function (t) {
    var S = this.S, g = this.cx, self = this, L1 = 1.5 * this.lw, L2 = 0.8 * this.lw, LH = 0.6 * this.lw, n = S.layers.length;
    var fadeAt = (n - 1) * STEP + DECIDE + LIGHT + 0.3, dead = ease((t - fadeAt) / FADE);
    g.setTransform(this.cv.width / this.W, 0, 0, this.cv.height / this.H, 0, 0);
    g.globalAlpha = 1; g.fillStyle = PAL.ink; g.fillRect(0, 0, this.W, this.H);
    g.lineCap = 'round'; g.lineJoin = 'round';
    // the stack's axis: a vertical scale whose ticks arrive with each layer
    var l0 = S.layers[0], ax = l0.x - 0.6, ay = l0.y + l0.d, top = 0;
    S.layers.forEach(function (l, k) { if (t >= k * STEP + RISE * 0.6) top = l.z + l.t; });
    if (top > 0) {
      this.seg(this.P(ax, ay, 0), this.P(ax, ay, top), PAL.line2, L2);
      S.layers.forEach(function (l, k) { if (t < k * STEP + RISE * 0.6) return; var p = self.P(ax, ay, l.z + l.t), len = 9 * self.lw; self.seg(p, [p[0] - len, p[1]], PAL.line2, L2); });
    }
    S.layers.forEach(function (l, k) {
      var t0 = k * STEP, rise = ease((t - t0) / RISE);
      if (t < t0) return;
      var z = l.z - 0.5 * (1 - rise);
      g.globalAlpha = rise;
      var sx = self.shift[0] * k, sy = self.shift[1] * k;
      self.box(l.x + sx, l.y + sy, z, l.w, l.d, l.t, L1, LH);
      var zt = z + l.t;
      self.ops(function (a, b) { return self.P(l.x + sx + a, l.y + sy + b, zt); }, l.ops || [], L2, { fill: PAL.line2, stroke: PAL.line });
      // this layer's decisions light up, then the ones that did not survive dim at the end
      var lit = ease((t - t0 - DECIDE) / LIGHT);
      S.items.forEach(function (it) {
        if (it.k !== k) return;
        var col = mix(PAL.line2, PAL.lime, lit), stroke = mix(PAL.line, PAL.lime, lit);
        if (!it.live && dead > 0) { col = mix(PAL.lime, PAL.dead, dead); stroke = col; }
        self.ops(function (a, b) { return self.P(it.at[0] + sx + a, it.at[1] + sy + b, zt); }, it.ops, L2, { fill: col, stroke: stroke, lit: lit > 0.5 });
      });
      // blocks standing on the slab, back to front
      (l.blocks || []).slice().sort(function (a, b) { return self.depth(a[0] + a[2] / 2, a[1] + a[3] / 2) - self.depth(b[0] + b[2] / 2, b[1] + b[3] / 2); })
        .forEach(function (b) { self.box(b[0] + sx, b[1] + sy, zt, b[2], b[3], b[4], L1, LH); });

      // threads climb from each carried decision toward the next layer, which then rises over their tips
      var nx = S.layers[k + 1];
      if (nx) {
        var grow = ease((t - t0 - DECIDE - LIGHT * 0.5) / THREAD);
        if (grow > 0) S.items.forEach(function (it) {
          if (it.k !== k || !it.up) return;
          var col = it.live || dead <= 0 ? PAL.lime : mix(PAL.lime, PAL.dead, dead);
          // a slanted thread from the decision to where it lands on the next layer
          var z0 = zt + (it.h || 0), a = self.PQ(k, it.at[0], it.at[1], z0), e = self.PQ(k + 1, it.at[0], it.at[1], nx.z), b = [a[0] + (e[0] - a[0]) * grow, a[1] + (e[1] - a[1]) * grow];
          self.seg(a, b, col, L1 * 1.3);
          g.beginPath(); g.arc(a[0], a[1], 2.6 * self.lw, 0, Math.PI * 2); g.fillStyle = col; g.fill();
        });
      }
      g.globalAlpha = 1;
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
