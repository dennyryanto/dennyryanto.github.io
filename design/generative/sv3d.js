/* sv3d: live 3D line-art signature visuals, drawn on canvas.
   No dependencies. Each scene is a heightfield of columns (plus a few loose
   boxes) drawn back to front with ink-filled faces, so hidden lines vanish.
   The camera turns about the vertical axis; callers drive the angle (e.g. from
   a GSAP ScrollTrigger). Rotation stays inside one quadrant (about 30°–60°),
   so the visible side faces are always +x and +y. */
(function (root) {
  'use strict';

  var PAL = { ink: '#161511', line: '#d1cec8', line2: '#797772', lime: '#c8f23c', flow: '#c8f23c' };
  // when animated, a second still layer draws every lime area dimmed; the reveal copies the lit layer over it through a growing clip
  var DIM = { ink: PAL.ink, line: PAL.line, line2: PAL.line2, lime: '#4b571e', flow: '#4b571e' };
  var C = PAL; // the palette of the pass being drawn
  var DEG = Math.PI / 180;

  function rng(seed) {
    var s = (seed >>> 0) || 1;
    return function () { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 1000003) / 1000003; };
  }

  // ---------- terrain ----------
  function Terrain(nx, ny) {
    this.nx = nx; this.ny = ny;
    this.h = []; this.kind = []; this.props = []; this.ticks = [];
    for (var i = 0; i < nx; i++) { this.h.push(new Array(ny).fill(0)); this.kind.push(new Array(ny).fill(0)); this.props.push([]); this.ticks.push(new Array(ny).fill(false)); for (var j = 0; j < ny; j++) this.props[i].push([]); }
    this.channels = []; this.leaders = []; this.scale = null; this.pin = null; this.panels = []; this.decals = {}; this.noRightDim = false; this.layers = [];
  }
  Terrain.prototype.at = function (i, j) { return (i < 0 || j < 0 || i >= this.nx || j >= this.ny) ? 0 : this.h[i][j]; };
  Terrain.prototype.set = function (i0, i1, j0, j1, h, kind) {
    for (var i = i0; i < i1; i++) for (var j = j0; j < j1; j++) { this.h[i][j] = typeof h === 'function' ? h(i, j) : h; if (kind != null) this.kind[i][j] = kind; }
  };
  // a channel: list of [i, j]; consecutive cells are neighbours; drops only where it moves +x or +y
  Terrain.prototype.channel = function (cells, o) { this.channels.push({ cells: cells, limeFrom: o && o.limeFrom != null ? o.limeFrom : (o && o.lime ? 0 : -1), dashed: !!(o && o.dashed), thin: !!(o && o.thin) }); };
  // a loose box sitting on a cell: x, y, z are world coordinates of its back-left-bottom corner
  Terrain.prototype.box = function (x, y, z, w, d, h, o) { var i = Math.min(this.nx - 1, Math.floor(x + w / 2)), j = Math.min(this.ny - 1, Math.floor(y + d / 2)); this.props[i][j].push({ x: x, y: y, z: z, w: w, d: d, h: h, lime: !!(o && o.lime) }); };
  // a UI plate: o = top-left corner, u = unit vector across, v = unit vector down the plate, w x h in world units (times k)
  // ops draw the product's interface on it in plate units (a across, b down); t gives it a slab edge; top = lies flat on a block
  Terrain.prototype.panel = function (spec) { this.panels.push(spec); };
  // flat marks printed on one cell's top, in cell units (0..1)
  Terrain.prototype.decal = function (i, j, ops) { (this.decals[i + ':' + j] = this.decals[i + ':' + j] || []).push.apply(this.decals[i + ':' + j], ops); };
  // floating slabs drawn above everything, in order: { x, y, z, w, d, t, ops, risers: [[x, y, 'flow' | 'line2'], ...] } (risers climb from the slab below)
  Terrain.prototype.layer = function (spec) { this.layers.push(spec); };
  Terrain.prototype.cyl = function (x, y, z, r, h) { var i = Math.min(this.nx - 1, Math.floor(x)), j = Math.min(this.ny - 1, Math.floor(y)); this.props[i][j].push({ cyl: true, x: x, y: y, z: z, r: r, h: h }); };
  function walk(path) { // expand corner points into a cell list
    var out = [path[0].slice()];
    for (var k = 1; k < path.length; k++) {
      var a = out[out.length - 1].slice(), b = path[k];
      while (a[0] !== b[0] || a[1] !== b[1]) { if (a[0] !== b[0]) a[0] += Math.sign(b[0] - a[0]); else a[1] += Math.sign(b[1] - a[1]); out.push(a.slice()); }
    }
    return out;
  }

  // ---------- scenes: each case's facts as terrain ----------
  var SCENES = {
    // LinkAja: many intakes at the back drain down tiers and merge into one self-service outflow
    linkaja: function (r) {
      var T = new Terrain(16, 9), tier = [3.1, 3.1, 2.7, 2.3, 2.3, 1.9, 1.6, 1.6, 1.25, 1.0, 0.8, 0.62, 0.46, 0.34];
      T.set(0, 14, 0, 9, function (i) { return tier[i]; });
      T.set(8, 14, 0, 9, function (i) { return tier[i]; }, 1);
      [1, 3, 5, 7].forEach(function (j, k) { T.set(0, 2, j, j + 1, 3.6 + 0.35 * k * r()); });
      T.set(14, 16, 4, 5, 0.16, 2);
      T.channel(walk([[0, 1], [4, 1], [4, 4]]));
      T.channel(walk([[0, 3], [6, 3], [6, 4]]));
      T.channel(walk([[0, 7], [3, 7], [3, 6], [9, 6], [9, 4]]));
      T.channel(walk([[0, 5], [7, 5], [7, 4]]));
      T.channel(walk([[2, 4], [15, 4]]), { limeFrom: 8 });
      // support tickets stacked on every intake
      [1, 3, 5, 7].forEach(function (j) { var h = T.h[1][j]; for (var k = 0; k < 3; k++) T.box(1.08 + 0.04 * k, j + 0.12 - 0.03 * k, h + 0.07 * k, 0.78, 0.76, 0.05); });
      // the outflow runs into the app: a self-service chat screen
      T.panel({ o: [16.4, 6.2, 3.25], k: 1.3, u: [0, -1, 0], v: [0, 0, -1], w: 2.6, h: 2.5, t: 0.1, ops: [
        ['rect', 0.18, 0.18, 2.42, 0.5, 's'], ['circ', 0.38, 0.34, 0.09, 'f2'], ['line', 0.6, 0.3, 1.4, 0.3, 's2'],
        ['rect', 0.22, 0.72, 1.6, 1.08, 's'], ['rect', 1.0, 1.22, 2.38, 1.58, 'L'], ['rect', 0.22, 1.72, 1.4, 2.0, 's'],
        ['rect', 0.18, 2.12, 2.1, 2.34, 's'], ['circ', 2.26, 2.23, 0.1, 'f']] });
      T.noRightDim = true;
      T.scale = { at: [0, 9], to: 3.8 };
      return T;
    },
    // Komunal: one shared source feeds three separate terraces; their lanes meet in one completion channel
    komunal: function (r) {
      var T = new Terrain(15, 11);
      T.set(0, 2, 0, 11, 2.9);
      var bands = [[0, 3, 2.2, 0.17], [4, 7, 2.0, 0.15], [8, 11, 2.35, 0.19]];
      bands.forEach(function (b) { T.set(2, 10, b[0], b[1], function (i) { return Math.max(0.7, b[2] - b[3] * (i - 2) - (i % 2) * 0.04); }); });
      T.set(10, 13, 0, 11, 0.5, 1);
      T.set(13, 15, 5, 6, 0.16, 2);
      T.channel(walk([[0, 1], [10, 1], [10, 5]]));
      T.channel(walk([[0, 9], [10, 9], [10, 5]]));
      T.channel(walk([[0, 5], [14, 5]]), { limeFrom: 11 });
      // the shared source is a design system: swatches, buttons, a toggle, type and cards on one sheet
      T.panel({ top: true, o: [0.12, 0.35, 2.905], u: [0, 1, 0], v: [1, 0, 0], w: 10.3, h: 1.75, ops: [
        ['rect', 0.3, 0.25, 0.85, 0.8, 'f'], ['rect', 1.05, 0.25, 1.6, 0.8, 'f2'], ['rect', 1.8, 0.25, 2.35, 0.8, 's'], ['rect', 2.55, 0.25, 3.1, 0.8, 'f'], ['rect', 3.3, 0.25, 3.85, 0.8, 'f2'], ['rect', 4.05, 0.25, 4.6, 0.8, 's'],
        ['rect', 5.1, 0.3, 6.6, 0.65, 's'], ['rect', 6.9, 0.3, 8.4, 0.65, 'f2'], ['rect', 8.8, 0.35, 9.7, 0.65, 's'], ['circ', 9.5, 0.5, 0.12, 'f'],
        ['line', 0.3, 1.15, 4.6, 1.15, 's'], ['line', 0.3, 1.38, 3.2, 1.38, 's2'], ['line', 0.3, 1.58, 3.8, 1.58, 's2'],
        ['rect', 5.1, 1.0, 6.6, 1.55, 's2'], ['rect', 6.75, 1.0, 8.25, 1.55, 's2'], ['rect', 8.4, 1.0, 9.9, 1.55, 's2']] });
      // the finish: a deposit-complete screen with a lime check
      T.panel({ o: [15.4, 6.3, 2.4], u: [0, -1, 0], v: [0, 0, -1], w: 1.6, h: 2.4, t: 0.08, ops: [
        ['circ', 0.8, 0.78, 0.34, 'Ls'], ['pl', [[0.62, 0.78], [0.75, 0.92], [1.0, 0.64]], 'Ls'],
        ['line', 0.35, 1.4, 1.25, 1.4, 's'], ['line', 0.5, 1.6, 1.1, 1.6, 's2'], ['rect', 0.3, 1.9, 1.3, 2.15, 'f2']] });
      T.noRightDim = true;
      T.scale = { at: [0, 11], to: 3.0 };
      return T;
    },
    // Dash · Lumio: one spine through a field of many small stations, each tapped into it
    dash: function (r) {
      var T = new Terrain(14, 9), spine = 4, st = [];
      T.set(0, 12, 0, 9, function (i, j) { return 0.95 - 0.13 * Math.floor(i / 2) - (j > spine ? 0.05 : 0); }, 1);
      for (var i = 0; i < 12; i++) for (var j = 0; j < 9; j++) {
        if (Math.abs(j - spine) <= 1) continue;
        var t = (i / 12) * 0.7 + (j / 9) * 0.3;
        if (r() < 0.42 - t * 0.12) { T.h[i][j] += (1.7 - 1.15 * t) * (0.86 + r() * 0.3); T.kind[i][j] = 0; st.push([i, j]); }
      }
      st.forEach(function (s, k) {
        if (k % 2) return;
        var j = s[1], dir = j < spine ? 1 : -1, cells = [];
        for (var y = j + dir; y !== spine; y += dir) { if (T.kind[s[0]][y] !== 1) { cells = []; break; } cells.push([s[0], y]); }
        if (cells.length) T.channel(cells);
      });
      T.set(12, 14, spine, spine + 1, 0.16, 2);
      var sp = []; for (var x = 0; x < 14; x++) sp.push([x, spine]);
      T.channel(sp, { limeFrom: 8 });
      // Dash: the restaurant floor printed on the plate, round tables with chairs
      var tables = 0;
      for (var ti = 11; ti >= 3 && tables < 7; ti--) for (var tj = 0; tj < 9 && tables < 7; tj++) {
        if (T.kind[ti][tj] === 1 && Math.abs(tj - spine) >= 2 && (ti + tj) % 2 === 0) { T.decal(ti, tj, [['circ', 0.5, 0.5, 0.24, 's'], ['circ', 0.14, 0.5, 0.07, 'f2'], ['circ', 0.86, 0.5, 0.07, 'f2'], ['circ', 0.5, 0.14, 0.07, 'f2'], ['circ', 0.5, 0.86, 0.07, 'f2']]); tables++; }
      }
      // Lumio: signage screens standing on the two tallest stations
      st.slice().sort(function (a, b) { return T.h[b[0]][b[1]] - T.h[a[0]][a[1]]; }).slice(0, 2).forEach(function (s) {
        var h = T.h[s[0]][s[1]];
        T.box(s[0] + 0.47, s[1] + 0.86, h, 0.06, 0.06, 0.12); // the post
        T.panel({ o: [s[0] - 0.1, s[1] + 0.92, h + 1.45], k: 1.5, u: [1, 0, 0], v: [0, 0, -1], w: 0.8, h: 0.9, t: 0.05, ops: [
          ['rect', 0.07, 0.07, 0.73, 0.83, 's'], ['pl', [[0.12, 0.74], [0.3, 0.47], [0.42, 0.6], [0.56, 0.38], [0.69, 0.56]], 's2'], ['circ', 0.24, 0.26, 0.07, 'f2']] });
      });
      // the delivery: an order ticket at the end of the spine, its ready bar lime
      T.panel({ o: [14.4, spine + 1.1, 2.0], u: [0, -1, 0], v: [0, 0, -1], w: 1.3, h: 2.0, t: 0.06, ops: [
        ['line', 0.2, 0.3, 1.1, 0.3, 's'], ['line', 0.2, 0.55, 0.9, 0.55, 's2'], ['line', 0.2, 0.75, 1.0, 0.75, 's2'], ['line', 0.2, 0.95, 0.8, 0.95, 's2'],
        ['rect', 0.2, 1.3, 1.1, 1.7, 'L']] });
      T.noRightDim = true;
      T.scale = { at: [0, 9], to: 2.8 };
      return T;
    },
    // Independent: rough, uneven blocks pass through stacked filter stages and leave as one clean slot
    independent: function (r) {
      var T = new Terrain(14, 7);
      T.set(0, 3, 0, 7, 2.4); T.set(3, 6, 0, 7, 1.8, 3); T.set(6, 8, 1, 7, 1.3); T.set(8, 10, 1, 6, 0.9, 3); T.set(10, 13, 2, 6, 0.42, 1);
      T.set(13, 14, 3, 4, 0.16, 2);
      // data sources: databases and rough, uneven blocks
      T.cyl(0.75, 1.3, 2.4, 0.34, 0.8); T.cyl(1.85, 3.4, 2.4, 0.34, 0.65); T.cyl(0.85, 5.5, 2.4, 0.34, 0.9);
      for (var k = 0; k < 9; k++) { var w = 0.35 + r() * 0.4, d = 0.35 + r() * 0.4; T.box(1.1 + r() * 1.5, 0.3 + r() * 5.6, 2.4, w, d, 0.3 + r() * 0.45); }
      for (k = 0; k < 4; k++) T.box(3.4 + r() * 2.0, 0.6 + r() * 5, 1.8, 0.32, 0.32, 0.32);
      for (var f = 0; f < 18; f++) T.box(6.55, 1.15 + f * 0.32, 1.3, 0.06, 0.16, 0.62);
      for (k = 0; k < 2; k++) T.box(8.3 + r() * 1.2, 1.6 + r() * 3, 0.9, 0.26, 0.26, 0.26);
      T.channel(walk([[10, 2], [12, 2]])); T.channel(walk([[10, 4], [12, 4]]));
      T.channel(walk([[10, 3], [13, 3]]), { limeFrom: 0 });
      // the clean slot ends at a decision card: title, evidence, confidence, approve / review
      T.panel({ o: [14.4, 5.2, 2.28], k: 1.2, u: [0, -1, 0], v: [0, 0, -1], w: 2.8, h: 1.9, t: 0.08, ops: [
        ['line', 0.2, 0.3, 1.6, 0.3, 's'], ['line', 0.2, 0.52, 2.4, 0.52, 's2'], ['line', 0.2, 0.7, 2.0, 0.7, 's2'],
        ['rect', 0.2, 0.95, 2.6, 1.1, 's2'], ['rect', 0.2, 0.95, 1.9, 1.1, 'f2'],
        ['rect', 0.2, 1.35, 1.2, 1.68, 'L'], ['rect', 1.35, 1.35, 2.45, 1.68, 's']] });
      T.noRightDim = true;
      T.scale = { at: [0, 7], to: 3.2 };
      return T;
    },
    // E-ink: a tower of data steps down tier by tier and settles into one thin plate
    eink: function (r) {
      var T = new Terrain(13, 7), grp = {};
      [[0, 3, 2.7, 0, 7], [3, 5, 1.85, 0, 6], [5, 7, 1.2, 1, 6], [7, 9, 0.72, 1, 5], [9, 11, 0.38, 2, 5]].forEach(function (t) {
        T.set(t[0], t[1], t[3], t[4], function (i, j) { var key = (i >> 1) + ':' + (j >> 1); if (!(key in grp)) grp[key] = (r() - 0.5) * 0.32; return t[2] * (1 + grp[key] * (t[2] > 1.5 ? 0.7 : 0.2)); });
      });
      T.set(11, 13, 3, 5, 0.1, 9);
      var ch = []; for (var i = 0; i < 11; i++) ch.push([i, 3]);
      T.channel(ch, { dashed: true });
      // the panel itself, standing on the plate: a 1-bit dashboard of blocks, bars and a calendar row
      T.panel({ o: [12.4, 5.36, 0.12 + 1.15 * 1.6], k: 1.6, u: [0, -1, 0], v: [0, 0, -1], w: 1.7, h: 1.15, t: 0.12, ops: [
        ['rect', 0.1, 0.1, 1.6, 1.05, 's'], ['rect', 0.16, 0.16, 1.54, 0.3, 'f2'],
        ['rect', 0.2, 0.38, 0.62, 0.62, 'f'], ['rect', 0.7, 0.38, 1.1, 0.62, 'f'],
        ['rect', 1.2, 0.5, 1.27, 0.62, 'f'], ['rect', 1.3, 0.42, 1.37, 0.62, 'f'], ['rect', 1.4, 0.46, 1.47, 0.62, 'f'],
        ['circ', 0.25, 0.8, 0.05, 'f'], ['circ', 0.43, 0.8, 0.05, 's'], ['circ', 0.61, 0.8, 0.05, 'f'], ['circ', 0.79, 0.8, 0.05, 'f'], ['circ', 0.97, 0.8, 0.05, 's'], ['circ', 1.15, 0.8, 0.05, 'f'], ['circ', 1.33, 0.8, 0.05, 's'],
        ['line', 0.2, 0.97, 1.5, 0.97, 's2']] });
      T.scale = { at: [0, 7], to: 2.9 };
      return T;
    },
    // Cockpit: a measured ridge narrows as it descends; one needle and pin stand at "you, now"
    cockpit: function (r) {
      var T = new Terrain(16, 6);
      for (var i = 0; i < 16; i++) {
        var ht = Math.max(0.35, 2.0 - Math.floor(i / 2) * 0.22), j0 = Math.min(3, Math.floor(i / 5)), j1 = 6 - Math.min(1, Math.floor(i / 10));
        for (var j = j0; j < j1; j++) T.h[i][j] = ht;
        T.ticks[i][j1 - 1] = true;
      }
      var ch = []; for (i = 0; i < 16; i++) ch.push([i, 4]);
      T.channel(ch);
      T.pin = [11, 4.5];
      // the instrument face at the end of the ridge: a gauge, a scale with a pointer, a trend line
      T.panel({ o: [16.4, 5.55, 2.24], k: 1.4, u: [0, -1, 0], v: [0, 0, -1], w: 2.8, h: 1.6, t: 0.08, ops: [
        ['arc', 0.75, 1.15, 0.55, 0, 180, 's'], ['ticks', 0.75, 1.15, 0.55, 0, 180, 12, 0.1, 's2'], ['line', 0.75, 1.15, 1.08, 0.72, 'Ls'], ['circ', 0.75, 1.15, 0.05, 'f'],
        ['line', 1.5, 1.15, 2.6, 1.15, 's'], ['ticks-h', 1.5, 2.6, 1.15, 11, 0.08, 's2'], ['pl', [[2.12, 0.98], [2.2, 1.08], [2.28, 0.98], [2.12, 0.98]], 'Ls'],
        ['pl', [[1.5, 0.6], [1.7, 0.5], [1.9, 0.55], [2.1, 0.35], [2.3, 0.42], [2.6, 0.3]], 's2']] });
      T.noRightDim = true;
      T.scale = { at: [0, 6], to: 2.2 };
      return T;
    }
  };

  // ---------- renderer ----------
  function Renderer(canvas, scene, opts) {
    opts = opts || {};
    this.cv = canvas; this.cx = this.main = canvas.getContext('2d');
    this.T = SCENES[scene](rng(opts.seed || 7));
    this.live = !!opts.live;
    var T = this.T, pl = null;
    for (var i = 0; i < T.nx; i++) for (var j = 0; j < T.ny; j++) if (T.kind[i][j] === 9) pl = pl ? [Math.min(pl[0], i), Math.max(pl[1], i + 1), Math.min(pl[2], j), Math.max(pl[3], j + 1), T.h[i][j]] : [i, i + 1, j, j + 1, T.h[i][j]];
    this.plate = pl; this.paths = this.flowPaths(); this.mover = !!(pl || this.paths.length || T.panels.some(hasAccent) || T.layers.some(hasAccent));
    if (T.pin) { var pi = Math.floor(T.pin[0]), lo = pi, hi = pi; while (T.at(lo - 1, Math.floor(T.pin[1])) === T.at(pi, Math.floor(T.pin[1]))) lo--; while (T.at(hi + 1, Math.floor(T.pin[1])) === T.at(pi, Math.floor(T.pin[1]))) hi++; this.pinSpan = Math.max(0, T.pin[0] - lo - 0.3); }
    this.yaw = 45; this.range = opts.range == null ? 10 : opts.range; this.elev = opts.elev || 30;
    this.pad = opts.pad || [0.08, 0.18]; // vertical, horizontal margins as a share of the canvas
    this.resize();
  }

  Renderer.prototype.resize = function () {
    var r = this.cv.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    this.W = Math.max(1, Math.round(r.width)); this.H = Math.max(1, Math.round(r.height));
    this.cv.width = Math.round(this.W * dpr); this.cv.height = Math.round(this.H * dpr);
    this.cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.lw = Math.max(0.7, this.W / 1100); // line weight unit, in CSS px
    this.fit();
  };

  // one scale and centre for the whole swing, so the drawing never zooms or clips while it turns
  Renderer.prototype.fit = function () {
    var T = this.T, b = [1e9, -1e9, 1e9, -1e9], self = this;
    this.k = 1; this.ox = 0; this.oy = 0;
    [-this.range, -this.range / 2, 0, this.range / 2, this.range].forEach(function (d) {
      self.cam(self.yaw + d);
      var add = function (x, y, z) { var p = self.P(x, y, z); b[0] = Math.min(b[0], p[0]); b[1] = Math.max(b[1], p[0]); b[2] = Math.min(b[2], p[1]); b[3] = Math.max(b[3], p[1]); };
      for (var i = 0; i < T.nx; i++) for (var j = 0; j < T.ny; j++) { var h = T.h[i][j]; if (h > 0) { add(i, j, h); add(i + 1, j, h); add(i, j + 1, h); add(i + 1, j + 1, 0); add(i + 1, j, 0); add(i, j + 1, 0); } }
      if (!T.noFurniture) { add(-1.3, T.ny, 0); add(0, T.ny + 1.95, 0); add(T.nx, T.ny + 1.95, 0); add(T.nx + 1.5, 0, 0); add(T.nx + 1.5, T.ny, 0); }
      if (T.scale) add(-1.3, T.ny, T.scale.to);
      T.layers.forEach(function (ly) { [0, ly.w].forEach(function (a) { [0, ly.d].forEach(function (b) { add(ly.x + a, ly.y + b, ly.z); add(ly.x + a, ly.y + b, ly.z + ly.t); }); }); });
      T.panels.forEach(function (pn) { var k = pn.k || 1; [[0, 0], [pn.w * k, 0], [0, pn.h * k], [pn.w * k, pn.h * k]].forEach(function (q) { add(pn.o[0] + pn.u[0] * q[0] + pn.v[0] * q[1], pn.o[1] + pn.u[1] * q[0] + pn.v[1] * q[1], pn.o[2] + pn.u[2] * q[0] + pn.v[2] * q[1]); }); });
    });
    var aw = this.W * (1 - 2 * this.pad[1]), ah = this.H * (1 - 2 * this.pad[0]);
    this.k = Math.min(aw / (b[1] - b[0]), ah / (b[3] - b[2]));
    this.ox = this.W / 2 - this.k * (b[0] + b[1]) / 2;
    this.oy = this.H / 2 - this.k * (b[2] + b[3]) / 2;
  };

  Renderer.prototype.cam = function (yaw) {
    this.c = Math.cos(yaw * DEG); this.s = Math.sin(yaw * DEG);
    this.se = Math.sin(this.elev * DEG); this.ce = Math.cos(this.elev * DEG);
    this.mx = this.T.nx / 2; this.my = this.T.ny / 2;
  };
  Renderer.prototype.P = function (x, y, z) {
    var dx = x - this.mx, dy = y - this.my, xr = dx * this.c - dy * this.s, yr = dx * this.s + dy * this.c;
    return [this.ox + xr * this.k, this.oy + (yr * this.se - z * this.ce) * this.k];
  };
  Renderer.prototype.depth = function (x, y) { var dx = x - this.mx, dy = y - this.my; return dx * this.s + dy * this.c; };

  // ---------- drawing primitives ----------
  Renderer.prototype.poly = function (pts, fill, stroke, w) {
    var g = this.cx; g.beginPath(); g.moveTo(pts[0][0], pts[0][1]);
    for (var k = 1; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
    g.closePath();
    if (fill) { g.fillStyle = fill; g.fill(); }
    if (stroke) { g.strokeStyle = stroke; g.lineWidth = w; g.stroke(); }
  };
  Renderer.prototype.seg = function (a, b, col, w) { var g = this.cx; g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.strokeStyle = col; g.lineWidth = w; g.stroke(); };

  Renderer.prototype.render = function (yaw) {
    this.cam(yaw == null ? this.yaw : yaw);
    if (!this.live) { this.pass(this.main, PAL); this.drawPin(this.T.pin && this.T.pin[0]); return; }
    // animated: the drawing goes straight to the page; only the small box the lime moves in is cached,
    // once lit and once dimmed, when the angle changes. Frames just copy between the two inside that box.
    this.pass(this.main, PAL);
    var D = this.dirty = this.moving();
    if (!D) return;
    var lit = this.layer('lit').cx; lit.setTransform(1, 0, 0, 1, 0, 0); lit.drawImage(this.cv, D[0], D[1], D[2], D[3], D[0], D[1], D[2], D[3]);
    if (this.mover) this.pass(this.layer('dim').cx, DIM, D);
    this.frame(this.t || 0);
  };

  function hasAccent(pn) { return (pn.ops || []).some(function (op) { var st = op[op.length - 1]; return st === 'L' || st === 'Ls'; }) || (pn.risers || []).some(function (r) { return r[2] === 'flow'; }); }

  // the device-pixel box that the moving lime can touch at this angle; frames repaint only this box
  Renderer.prototype.moving = function () {
    var T = this.T, self = this, b = [1e9, 1e9, -1e9, -1e9], add = function (x, y, z) { var q = self.P(x, y, z); b[0] = Math.min(b[0], q[0]); b[1] = Math.min(b[1], q[1]); b[2] = Math.max(b[2], q[0]); b[3] = Math.max(b[3], q[1]); };
    this.paths.forEach(function (pts) { pts.forEach(function (q) { add(q[0], q[1], q[2]); }); });
    if (this.plate) { var pl = this.plate; add(pl[0], pl[2], pl[4]); add(pl[1], pl[2], pl[4]); add(pl[0], pl[3], pl[4]); add(pl[1], pl[3], pl[4]); }
    if (T.pin) { var j = Math.floor(T.pin[1]), i = Math.floor(T.pin[0]), h = T.at(i, j); [0, 1].forEach(function (sg) { var x = T.pin[0] - sg * (self.pinSpan || 0); add(x, 0, h); add(x, T.ny, h); add(x, T.pin[1], h + 1.35); }); }
    var below = 0;
    T.layers.forEach(function (ly) { if (hasAccent(ly)) [0, ly.w].forEach(function (a) { [0, ly.d].forEach(function (b2) { add(ly.x + a, ly.y + b2, below); add(ly.x + a, ly.y + b2, ly.z + ly.t); }); }); below = ly.z + ly.t; });
    T.panels.forEach(function (pn) { if (!hasAccent(pn)) return; var k = pn.k || 1; [[0, 0], [pn.w * k, 0], [0, pn.h * k], [pn.w * k, pn.h * k]].forEach(function (q) { add(pn.o[0] + pn.u[0] * q[0] + pn.v[0] * q[1], pn.o[1] + pn.u[1] * q[0] + pn.v[1] * q[1], pn.o[2] + pn.u[2] * q[0] + pn.v[2] * q[1]); }); });
    if (b[0] > b[2]) return null;
    var pad = 0.45 * this.k, d = this.cv.width / this.W;
    var x0 = Math.max(0, Math.floor((b[0] - pad) * d)), y0 = Math.max(0, Math.floor((b[1] - pad) * d)), x1 = Math.min(this.cv.width, Math.ceil((b[2] + pad) * d)), y1 = Math.min(this.cv.height, Math.ceil((b[3] + pad) * d));
    return [x0, y0, Math.max(1, x1 - x0), Math.max(1, y1 - y0)];
  };

  Renderer.prototype.layer = function (name) {
    var l = this[name] || (this[name] = { cv: document.createElement('canvas') });
    if (l.cv.width !== this.cv.width || l.cv.height !== this.cv.height) { l.cv.width = this.cv.width; l.cv.height = this.cv.height; l.cx = null; }
    if (!l.cx) { l.cx = l.cv.getContext('2d'); }
    l.cx.setTransform(this.cv.width / this.W, 0, 0, this.cv.height / this.H, 0, 0);
    return l;
  };

  Renderer.prototype.pass = function (g, pal, box) {
    var T = this.T, self = this, L1 = 1.5 * this.lw, L2 = 0.8 * this.lw, LH = 0.6 * this.lw, dpr = this.cv.width / this.W, bx = null;
    this.cx = g; C = pal;
    g.lineCap = 'square'; g.lineJoin = 'miter';
    if (box) { bx = [box[0] / dpr, box[1] / dpr, (box[0] + box[2]) / dpr, (box[1] + box[3]) / dpr]; g.save(); g.beginPath(); g.rect(bx[0], bx[1], bx[2] - bx[0], bx[3] - bx[1]); g.clip(); }
    g.fillStyle = C.ink; g.fillRect(0, 0, this.W, this.H);
    // a cell whose screen box misses the clip box is skipped
    var misses = function (i, j) {
      if (!bx) return false;
      var h = T.h[i][j], x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
      [[i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]].forEach(function (c) { [0, h + 1.5].forEach(function (z) { var q = self.P(c[0], c[1], z); x0 = Math.min(x0, q[0]); x1 = Math.max(x1, q[0]); y0 = Math.min(y0, q[1]); y1 = Math.max(y1, q[1]); }); });
      return x1 < bx[0] || x0 > bx[2] || y1 < bx[1] || y0 > bx[3];
    };
    var cells = [];
    for (var i = 0; i < T.nx; i++) for (var j = 0; j < T.ny; j++) if (T.h[i][j] > 0) cells.push([this.depth(i + 0.5, j + 0.5), i, j]);
    cells.sort(function (a, b) { return a[0] - b[0]; });
    var list = cells.map(function (c) { return { d: c[0], i: c[1], j: c[2] }; });
    // a standing plate sorts by its nearest edge, so the terrain it stands in front of never paints over it
    T.panels.forEach(function (pn) { if (!pn.top) { var k = pn.k || 1; list.push({ d: Math.max(self.depth(pn.o[0], pn.o[1]), self.depth(pn.o[0] + pn.u[0] * pn.w * k, pn.o[1] + pn.u[1] * pn.w * k)) + 0.01, pn: pn }); } });
    list.sort(function (a, b) { return a.d - b.d; });
    for (var n = 0; n < list.length; n++) { if (list[n].pn) this.panel(list[n].pn, L1, L2); else if (!misses(list[n].i, list[n].j)) this.cell(list[n].i, list[n].j, L1, L2, LH); }
    T.panels.forEach(function (pn) { if (pn.top) self.panel(pn, L1, L2); });
    var below = 0;
    T.layers.forEach(function (ly) {
      (ly.risers || []).forEach(function (r) { self.seg(self.P(r[0], r[1], below), self.P(r[0], r[1], ly.z), r[2] === 'flow' ? C.flow : C.line2, r[2] === 'flow' ? L1 * 1.6 : L2); });
      self.box({ x: ly.x, y: ly.y, z: ly.z, w: ly.w, d: ly.d, h: ly.t }, L1, LH);
      self.ops(function (a, b) { return self.P(ly.x + a, ly.y + b, ly.z + ly.t); }, ly.ops || [], L1, L2);
      below = ly.z + ly.t;
    });
    if (!T.noFurniture) this.furniture(L2);
    if (box) g.restore();
    this.cx = this.main; C = PAL;
  };

  // ---------- the lime's reveal: the path a fill follows down the grooves ----------
  Renderer.prototype.flowPaths = function () {
    var T = this.T, out = [];
    T.channels.forEach(function (ch) {
      if (ch.limeFrom < 0) return;
      var pts = [];
      for (var p = ch.limeFrom; p < ch.cells.length; p++) {
        var c = ch.cells[p], i = c[0], j = c[1], h = T.at(i, j), e = grooveEnds(ch, p), nx = ch.cells[p + 1];
        if (p === ch.limeFrom) pts.push([e[0], e[1], h]);
        pts.push([i + 0.5, j + 0.5, h], [e[2], e[3], h]);
        if (nx && T.at(nx[0], nx[1]) < h) pts.push([e[2], e[3], T.at(nx[0], nx[1])]);
      }
      out.push(pts);
    });
    return out;
  };

  // the reveal plays once: lime fills the groove from source to outcome (or sweeps the plate, or the pin settles),
  // then the output's lime accent fades in. frame(t) is a pure function of t, so any redraw lands on the same state.
  var FILL = 1.8, GLOW = 0.5;
  Renderer.END = FILL + GLOW;
  function ease(u) { u = Math.max(0, Math.min(1, u)); return 1 - Math.pow(1 - u, 3); }

  Renderer.prototype.frame = function (t) {
    var T = this.T, g = this.main, self = this, dpr = this.cv.width / this.W, D = this.dirty, k = this.k;
    this.t = t;
    if (!D) return;
    var copy = function (layer) { g.setTransform(1, 0, 0, 1, 0, 0); g.drawImage(layer.cv, D[0], D[1], D[2], D[3], D[0], D[1], D[2], D[3]); g.setTransform(dpr, 0, 0, dpr, 0, 0); };
    var through = function (layer, shape) { g.save(); g.beginPath(); shape(); g.clip(); copy(layer); g.restore(); };
    var f = ease(t / FILL), glow = Math.max(0, Math.min(1, (t - FILL) / GLOW));
    if (!this.mover || glow >= 1) copy(this.lit);
    else {
      copy(this.dim);
      if (this.paths.length) through(this.lit, function () {
        var w = 0.3 * k;
        self.paths.forEach(function (pts) {
          var sp = pts.map(function (q) { return self.P(q[0], q[1], q[2]); }), wl = [0];
          for (var n = 1; n < pts.length; n++) wl.push(wl[n - 1] + Math.hypot(pts[n][0] - pts[n - 1][0], pts[n][1] - pts[n - 1][1], pts[n][2] - pts[n - 1][2]));
          var reach = f * wl[wl.length - 1];
          for (n = 1; n < pts.length && wl[n - 1] < reach; n++) {
            var a = wl[n - 1], b = wl[n]; if (b - a < 1e-6) continue;
            var A = sp[n - 1], B = sp[n], f1 = Math.min(1, (reach - a) / (b - a)), p1 = [A[0] + (B[0] - A[0]) * f1, A[1] + (B[1] - A[1]) * f1];
            var dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy) || 1, nx = -dy / L * w, ny = dx / L * w, ex = dx / L * w, ey = dy / L * w;
            g.moveTo(A[0] + nx - ex, A[1] + ny - ey); g.lineTo(p1[0] + nx, p1[1] + ny); g.lineTo(p1[0] - nx, p1[1] - ny); g.lineTo(A[0] - nx - ex, A[1] - ny - ey); g.closePath();
          }
        });
      });
      if (this.plate) {
        // the plate turns lime in one sweep, like a panel refresh
        var pl = this.plate, x1 = pl[0] + f * (pl[1] - pl[0]), Q = function (x, y) { return self.P(x, y, pl[4]); };
        if (f > 0) through(this.lit, function () { [Q(pl[0] - 0.05, pl[2] - 0.05), Q(x1, pl[2] - 0.05), Q(x1, pl[3] + 0.05), Q(pl[0] - 0.05, pl[3] + 0.05)].forEach(function (q, n) { if (n) g.lineTo(q[0], q[1]); else g.moveTo(q[0], q[1]); }); g.closePath(); });
      }
      if (glow > 0) { g.save(); g.globalAlpha = glow; copy(this.lit); g.restore(); }
    }
    // "you, now" slides in along its step and settles
    if (T.pin) this.drawPin(T.pin[0] - (this.pinSpan || 0) * (1 - f));
  };

  Renderer.prototype.cell = function (i, j, L1, L2, LH) {
    var T = this.T, h = T.h[i][j], hx = T.at(i + 1, j), hy = T.at(i, j + 1), kind = T.kind[i][j], self = this, P = function (x, y, z) { return self.P(x, y, z); };
    // +y face: the shadow side, hatched
    if (h > hy) {
      var f = [P(i, j + 1, hy), P(i + 1, j + 1, hy), P(i + 1, j + 1, h), P(i, j + 1, h)];
      this.poly(f, C.ink);
      var n = Math.max(1, Math.round(Math.abs(f[1][0] - f[0][0]) / (5.5 * this.lw)));
      for (var k = 1; k < n; k++) this.seg(P(i + k / n, j + 1, hy), P(i + k / n, j + 1, h), C.line2, LH);
      this.seg(f[0], f[1], C.line, L1);
      if (!(T.at(i - 1, j) === h && T.at(i - 1, j + 1) === hy)) this.seg(f[0], f[3], C.line, L1);
      if (!(T.at(i + 1, j) === h && T.at(i + 1, j + 1) === hy)) this.seg(f[1], f[2], C.line, L1);
    }
    // +x face: the lit side, clean
    if (h > hx) {
      var g2 = [P(i + 1, j, hx), P(i + 1, j + 1, hx), P(i + 1, j + 1, h), P(i + 1, j, h)];
      this.poly(g2, C.ink);
      this.seg(g2[0], g2[1], C.line, L1);
      if (!(T.at(i, j - 1) === h && T.at(i + 1, j - 1) === hx)) this.seg(g2[0], g2[3], C.line, L1);
      if (!(T.at(i, j + 1) === h && T.at(i + 1, j + 1) === hx)) this.seg(g2[1], g2[2], C.line, L1);
    }
    // top
    var t = [P(i, j, h), P(i + 1, j, h), P(i + 1, j + 1, h), P(i, j + 1, h)], lime = kind === 9;
    this.poly(t, lime ? C.lime : C.ink);
    var edge = function (a, b, nb) { if (nb !== h) self.seg(a, b, lime ? C.lime : C.line, L1); else if (kind === 1 || kind === 3) self.seg(a, b, C.line2, L2); };
    edge(t[0], t[1], T.at(i, j - 1)); edge(t[0], t[3], T.at(i - 1, j)); edge(t[1], t[2], hx); edge(t[3], t[2], hy);
    if (kind === 3) for (var q = 1; q < 4; q++) { this.seg(P(i + q / 4, j, h), P(i + q / 4, j + 1, h), C.line2, LH); this.seg(P(i, j + q / 4, h), P(i + 1, j + q / 4, h), C.line2, LH); }
    if (T.ticks[i][j]) for (var m = 0; m <= 10; m++) { var len = m % 5 === 0 ? 0.32 : 0.16; this.seg(P(i + m / 10, j + 1, h), P(i + m / 10, j + 1 - len, h), C.line2, L2); }
    // channels on this cell
    for (var c = 0; c < T.channels.length; c++) {
      var ch = T.channels[c];
      for (var p = 0; p < ch.cells.length; p++) if (ch.cells[p][0] === i && ch.cells[p][1] === j) this.groove(i, j, h, ch, p, L1);
    }
    // loose boxes on this cell, back to front
    var props = T.props[i][j].slice().sort(function (a, b) { return self.depth(a.x + a.w / 2, a.y + a.d / 2) - self.depth(b.x + b.w / 2, b.y + b.d / 2); });
    for (var b = 0; b < props.length; b++) { if (props[b].cyl) this.cylinder(props[b], L1, LH); else this.box(props[b], L1, LH); }
    var dec = T.decals[i + ':' + j];
    if (dec) this.ops(function (a, b2) { return self.P(i + a, j + b2, h + 0.004); }, dec, L1, L2);
  };

  Renderer.prototype.box = function (o, L1, LH) {
    var self = this, P = function (x, y, z) { return self.P(x, y, z); }, x0 = o.x, x1 = o.x + o.w, y0 = o.y, y1 = o.y + o.d, z0 = o.z, z1 = o.z + o.h;
    var fy = [P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1)], fx = [P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), P(x1, y0, z1)], ft = [P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1)];
    this.poly(fy, C.ink, C.line, L1 * 0.8);
    var n = Math.max(1, Math.round(Math.abs(fy[1][0] - fy[0][0]) / (5.5 * this.lw)));
    for (var k = 1; k < n; k++) this.seg(P(x0 + o.w * k / n, y1, z0), P(x0 + o.w * k / n, y1, z1), C.line2, LH);
    this.poly(fx, C.ink, C.line, L1 * 0.8);
    this.poly(ft, o.lime ? C.lime : C.ink, C.line, L1 * 0.8);
  };

  Renderer.prototype.panel = function (pn, L1, L2) {
    var self = this, o = pn.o, U = pn.u, V = pn.v, k = pn.k || 1, w = pn.w * k, h = pn.h * k;
    var n = [U[1] * V[2] - U[2] * V[1], U[2] * V[0] - U[0] * V[2], U[0] * V[1] - U[1] * V[0]]; // faces the viewer
    var Q = function (a, b, back) { var t = back ? -(pn.t || 0) : 0; a *= k; b *= k; return self.P(o[0] + U[0] * a + V[0] * b + n[0] * t, o[1] + U[1] * a + V[1] * b + n[1] * t, o[2] + U[2] * a + V[2] * b + n[2] * t); };
    if (pn.t) {
      // slab edges: the top, and whichever side turns toward the viewer
      this.poly([Q(0, 0), Q(pn.w, 0), Q(pn.w, 0, 1), Q(0, 0, 1)], C.ink, C.line, L1);
      var sideA = (U[0] + U[1]) > 0 ? pn.w : 0; // in plate units; Q scales
      this.poly([Q(sideA, 0), Q(sideA, pn.h), Q(sideA, pn.h, 1), Q(sideA, 0, 1)], C.ink, C.line, L1);
    }
    this.poly([Q(0, 0), Q(pn.w, 0), Q(pn.w, pn.h), Q(0, pn.h)], C.ink, C.line, L1);
    this.ops(function (a, b) { return Q(a, b); }, pn.ops, L1, L2);
  };

  // a tiny vocabulary for interfaces: rect, circ, line, pl (polyline), arc, ticks (radial), ticks-h
  Renderer.prototype.ops = function (M, ops, L1, L2) {
    var self = this, g = this.cx;
    var style = function (st) {
      if (st === 'f') return { fill: C.line };
      if (st === 'f2') return { fill: C.line2 };
      if (st === 'L') return { fill: C.flow }; // the output's lime accent
      if (st === 'Ls') return { stroke: C.flow, w: L2 * 2 };
      if (st === 's2') return { stroke: C.line2, w: L2 };
      return { stroke: C.line, w: L2 * 1.3 };
    };
    var path = function (pts, closed, sty) {
      g.beginPath(); g.moveTo(pts[0][0], pts[0][1]); for (var k = 1; k < pts.length; k++) g.lineTo(pts[k][0], pts[k][1]);
      if (closed) g.closePath();
      if (sty.fill) { g.fillStyle = sty.fill; g.fill(); } else { g.strokeStyle = sty.stroke; g.lineWidth = sty.w; g.stroke(); }
    };
    var ring = function (ca, cb, r, d0, d1, steps) { var out = []; for (var k = 0; k <= steps; k++) { var d = (d0 + (d1 - d0) * k / steps) * DEG; out.push(M(ca + r * Math.cos(d), cb - r * Math.sin(d))); } return out; };
    ops.forEach(function (op) {
      var t = op[0], sty;
      if (t === 'rect') { sty = style(op[5]); path([M(op[1], op[2]), M(op[3], op[2]), M(op[3], op[4]), M(op[1], op[4])], true, sty); }
      else if (t === 'circ') { sty = style(op[4]); path(ring(op[1], op[2], op[3], 0, 360, 28), true, sty); }
      else if (t === 'line') { sty = style(op[5]); path([M(op[1], op[2]), M(op[3], op[4])], false, sty); }
      else if (t === 'pl') { sty = style(op[2]); path(op[1].map(function (q) { return M(q[0], q[1]); }), false, sty); }
      else if (t === 'arc') { sty = style(op[6]); path(ring(op[1], op[2], op[3], op[4], op[5], 32), false, sty); }
      else if (t === 'ticks') { sty = style(op[8]); for (var k = 0; k <= op[6]; k++) { var d = (op[4] + (op[5] - op[4]) * k / op[6]) * DEG; path([M(op[1] + op[3] * Math.cos(d), op[2] - op[3] * Math.sin(d)), M(op[1] + (op[3] - op[7]) * Math.cos(d), op[2] - (op[3] - op[7]) * Math.sin(d))], false, sty); } }
      else if (t === 'ticks-h') { sty = style(op[6]); for (k = 0; k <= op[4]; k++) { var a = op[1] + (op[2] - op[1]) * k / op[4]; path([M(a, op[3]), M(a, op[3] - op[5] * (k % 5 === 0 ? 1.8 : 1))], false, sty); } }
    });
  };

  Renderer.prototype.cylinder = function (o, L1, LH) {
    var self = this, N = 32, top = [], bot = [], all = [];
    for (var k = 0; k < N; k++) { var a = k / N * Math.PI * 2, x = o.x + o.r * Math.cos(a), y = o.y + o.r * Math.sin(a); var pt = this.P(x, y, o.z + o.h), pb = this.P(x, y, o.z); top.push(pt); bot.push(pb); all.push(pt, pb); }
    // body: the convex outline of both rings
    all.sort(function (p, q) { return p[0] - q[0] || p[1] - q[1]; });
    var cross = function (o2, a, b) { return (a[0] - o2[0]) * (b[1] - o2[1]) - (a[1] - o2[1]) * (b[0] - o2[0]); }, lo = [], hi = [];
    all.forEach(function (p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); });
    for (var m = all.length - 1; m >= 0; m--) { var p = all[m]; while (hi.length >= 2 && cross(hi[hi.length - 2], hi[hi.length - 1], p) <= 0) hi.pop(); hi.push(p); }
    this.poly(lo.slice(0, -1).concat(hi.slice(0, -1)), C.ink, C.line, L1 * 0.8);
    // a database band: the front half of a ring a third of the way down
    var band = [];
    for (k = 0; k <= N / 2; k++) { var a2 = (k / N) * Math.PI * 2 - Math.PI / 4; band.push(this.P(o.x + o.r * Math.cos(a2), o.y + o.r * Math.sin(a2), o.z + o.h * 0.62)); }
    var g = this.cx; g.beginPath(); g.moveTo(band[0][0], band[0][1]); band.forEach(function (q) { g.lineTo(q[0], q[1]); }); g.strokeStyle = C.line2; g.lineWidth = L1 * 0.6; g.stroke();
    this.poly(top, C.ink, C.line, L1 * 0.8);
  };

  // where a groove enters and leaves its cell: [ax, ay, bx, by]
  function grooveEnds(ch, p) {
    var c = ch.cells[p], i = c[0], j = c[1], prev = ch.cells[p - 1], next = ch.cells[p + 1];
    var cx = i + 0.5, cy = j + 0.5, ax = cx, ay = cy, bx = cx, by = cy;
    if (prev) { if (prev[0] < i) ax = i; else if (prev[0] > i) ax = i + 1; else if (prev[1] < j) ay = j; else ay = j + 1; }
    if (next) { if (next[0] > i) bx = i + 1; else if (next[0] < i) bx = i; else if (next[1] > j) by = j + 1; else by = j; }
    else { if (prev && prev[1] !== j) by = prev[1] < j ? j + 0.97 : j + 0.03; else bx = i + 0.97; }
    if (!prev) { if (next && next[1] !== j) ay = next[1] > j ? j + 0.15 : j + 0.85; else ax = i + 0.15; }
    return [ax, ay, bx, by];
  }

  Renderer.prototype.groove = function (i, j, h, ch, p, L1) {
    var self = this, P = function (x, y, z) { return self.P(x, y, z); }, T = this.T;
    var next = ch.cells[p + 1], lime = ch.limeFrom >= 0 && p >= ch.limeFrom, w = 0.2, o = w / 2;
    var cx = i + 0.5, cy = j + 0.5, e4 = grooveEnds(ch, p), ax = e4[0], ay = e4[1], bx = e4[2], by = e4[3];
    var g = this.cx;
    if (ch.thin) { // a trace: one line on the surface instead of a groove
      var col = lime ? C.flow : C.line, tw = lime ? L1 * 2.2 : L1 * 0.7, nx2 = next && T.at(next[0], next[1]);
      this.seg(P(ax, ay, h), P(cx, cy, h), col, tw); this.seg(P(cx, cy, h), P(bx, by, h), col, tw);
      if (next && nx2 < h) this.seg(P(bx, by, h), P(bx, by, nx2), col, tw);
      return;
    }
    if (ch.dashed) g.setLineDash([7 * this.lw, 6 * this.lw]);
    [[ax, ay, cx, cy], [cx, cy, bx, by]].forEach(function (s) {
      if (s[0] === s[2] && s[1] === s[3]) return;
      var horiz = s[1] === s[3];
      var A = horiz ? [[s[0], s[1] - o], [s[2], s[3] - o]] : [[s[0] - o, s[1]], [s[2] - o, s[3]]];
      var B = horiz ? [[s[0], s[1] + o], [s[2], s[3] + o]] : [[s[0] + o, s[1]], [s[2] + o, s[3]]];
      if (lime) self.poly([P(A[0][0], A[0][1], h), P(A[1][0], A[1][1], h), P(B[1][0], B[1][1], h), P(B[0][0], B[0][1], h)], C.flow, C.flow, 1);
      else { self.seg(P(A[0][0], A[0][1], h), P(A[1][0], A[1][1], h), C.line, L1 * 0.9); self.seg(P(B[0][0], B[0][1], h), P(B[1][0], B[1][1], h), C.line, L1 * 0.9); }
    });
    g.setLineDash([]);
    if (next) {
      var nh = T.at(next[0], next[1]);
      if (nh < h && (next[0] > i || next[1] > j)) {
        var q = next[0] > i ? [P(i + 1, cy - o, nh), P(i + 1, cy + o, nh), P(i + 1, cy + o, h), P(i + 1, cy - o, h)] : [P(cx - o, j + 1, nh), P(cx + o, j + 1, nh), P(cx + o, j + 1, h), P(cx - o, j + 1, h)];
        if (lime) this.poly(q, C.flow, C.flow, 1);
        else { this.poly(q, C.ink); this.seg(q[0], q[3], C.line, L1 * 0.9); this.seg(q[1], q[2], C.line, L1 * 0.9); }
      }
    } else if (lime) {
      var e = o + 0.06;
      this.poly([P(i + 1, cy - e, h), P(i + 1, cy + e, h), P(i + 1, cy + e, h - 0.12), P(i + 1, cy - e, h - 0.12)], C.ink, C.flow, 1.2 * this.lw);
    }
  };

  Renderer.prototype.arrow = function (a, b, w) {
    this.seg(a, b, C.line2, w);
    var ang = Math.atan2(b[1] - a[1], b[0] - a[0]), L = 7 * this.lw, sp = 0.32, self = this;
    [[a, 0], [b, Math.PI]].forEach(function (pd) { var t = ang + pd[1], p = pd[0]; self.seg(p, [p[0] + Math.cos(t + sp) * L, p[1] + Math.sin(t + sp) * L], C.line2, w); self.seg(p, [p[0] + Math.cos(t - sp) * L, p[1] + Math.sin(t - sp) * L], C.line2, w); });
  };

  // unlabelled measurement: base dimension lines and a vertical scale
  Renderer.prototype.furniture = function (L2) {
    var T = this.T, nx = T.nx, ny = T.ny, self = this, P = function (x, y, z) { return self.P(x, y, z); }, off = 1.1;
    var br = [0], last = null;
    for (var i = 0; i < nx; i++) { var fh = 0; for (var j = ny - 1; j >= 0; j--) if (T.at(i, j) > 0) { fh = T.at(i, j); break; } var lv = Math.round(fh * 3); if (last !== null && lv !== last && i - br[br.length - 1] >= 2) br.push(i); last = lv; }
    if (nx - br[br.length - 1] < 2) br.pop(); br.push(nx);
    br.forEach(function (x) { self.seg(P(x, ny + 0.2, 0), P(x, ny + off + 0.35, 0), C.line2, L2); });
    for (var k = 1; k < br.length; k++) this.arrow(P(br[k - 1], ny + off, 0), P(br[k], ny + off, 0), L2);
    this.arrow(P(0, ny + off + 0.75, 0), P(nx, ny + off + 0.75, 0), L2);
    if (!T.noRightDim) {
      var jmin = ny, jmax = 0; for (j = 0; j < ny; j++) if (T.at(nx - 1, j) > 0) { jmin = Math.min(jmin, j); jmax = Math.max(jmax, j + 1); }
      this.seg(P(nx + 0.2, jmin, 0), P(nx + off + 0.35, jmin, 0), C.line2, L2);
      this.seg(P(nx + 0.2, jmax, 0), P(nx + off + 0.35, jmax, 0), C.line2, L2);
      this.arrow(P(nx + off, jmin, 0), P(nx + off, jmax, 0), L2);
    }
    if (T.scale) {
      var sx = T.scale.at[0], sy = T.scale.at[1], top = T.scale.to;
      this.seg(P(sx - 0.9, sy, 0), P(sx - 0.9, sy, top), C.line2, L2);
      for (k = 0; k <= Math.round(top * 10); k++) { var p = P(sx - 0.9, sy, k / 10), len = (k % 5 === 0 ? 9 : 4.5) * this.lw; this.seg(p, [p[0] - len, p[1]], C.line2, L2); }
    }
  };

  Renderer.prototype.drawPin = function (x) {
    var T = this.T, L1 = 1.5 * this.lw; if (!T.pin) return;
    var y = T.pin[1], i = Math.floor(x), j = Math.floor(y), h = T.at(i, j), j0 = j, j1 = j;
    while (T.at(i, j0 - 1) > 0) j0--; while (T.at(i, j1 + 1) > 0) j1++;
    this.seg(this.P(x, j0, h), this.P(x, j1 + 1, h), C.lime, L1 * 1.6);
    var base = this.P(x, y, h), top = this.P(x, y, h + 1.35), r = 0.28 * this.k;
    this.poly([[top[0] - r, top[1]], [top[0] + r, top[1]], base], C.lime, C.lime, 1);
    var g = this.cx; g.beginPath(); g.arc(top[0], top[1], r, 0, Math.PI * 2); g.fillStyle = C.lime; g.fill();
  };

  // ---------- mounting: lazy, scroll-scrubbed with GSAP when present ----------
  function mount(canvas, opts) {
    opts = opts || {};
    var scene = canvas.getAttribute('data-sv3d'), R = null, st = null, reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var raf = 0, last = 0, t = 0;
    // the reveal plays once, the first time the drawing is well in view, then the loop ends for good
    function tick(now) {
      raf = 0;
      t += Math.min(0.05, (now - last) / 1000) || 0; last = now;
      R.frame(Math.min(t, Renderer.END));
      if (t < Renderer.END) raf = requestAnimationFrame(tick);
    }
    function start() {
      R = new Renderer(canvas, scene, { range: opts.range, pad: opts.pad, seed: opts.seed, elev: opts.elev, live: !reduce });
      R.render(R.yaw);
      var G = window.gsap, S = window.ScrollTrigger;
      if (!reduce && G && S) {
        G.registerPlugin(S);
        st = S.create({ trigger: canvas, start: 'top bottom', end: 'bottom top', scrub: 0.6,
          onUpdate: function (self) { R.render(R.yaw + (self.progress - 0.5) * 2 * R.range); } });
        R.render(R.yaw + (st.progress - 0.5) * 2 * R.range);
      }
      if (R.live) {
        if (!(R.mover || R.T.pin) || !('IntersectionObserver' in window)) R.frame(Renderer.END);
        else { var seen = new IntersectionObserver(function (es) {
          if (!es[0].isIntersecting) return;
          seen.disconnect(); last = performance.now(); raf = requestAnimationFrame(tick);
        }, { threshold: 0.45 }); seen.observe(canvas); }
      }
      var rt = null;
      window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { R.resize(); R.render(st ? R.yaw + (st.progress - 0.5) * 2 * R.range : R.yaw); }, 120); });
    }
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); start(); } }, { rootMargin: '300px 0px' });
      io.observe(canvas);
    } else start();
  }

  root.SV3D = { mount: mount, Renderer: Renderer, scenes: Object.keys(SCENES), Terrain: Terrain, walk: walk, define: function (name, fn) { SCENES[name] = fn; } };
})(window);
