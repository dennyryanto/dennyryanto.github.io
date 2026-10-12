/*
 * stack.js: the "exploded layers" signature visuals. Each case is three identical slabs in the shape of its platform
 * (mobile, tablet, desktop, e-ink panel), stacked straight up: what the product started from, the decision layer in
 * between, and the final screen as a simple wireframe. Each lower layer makes one lime
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
  // Each stack takes the shape of the work's platform: every slab shares the device's footprint (w x d, with y running
  // down the screen), and the top layer is the final screen as a simple wireframe inside that device's chrome.
  // layers: { ops, blocks: [[x, y, w, d, h], ...] } bottom first. picks: one decision per lower layer
  // { k, at: [x, y], h (thread starts on a block top), ops: its mark, land: what it becomes on the final screen }.
  // Styles: f, f2 fills; s, s2 strokes; D, Ds lime once decided. Ops: rect, circ, line, pl, img (a wireframe image box).
  var DEVICE = { mobile: [4.6, 9.4], tablet: [9.2, 6.9], desktop: [10, 6.25], panel: [10.4, 6.6] };
  function scene(device, layers, picks) { var f = DEVICE[device]; return { device: device, w: f[0], d: f[1], gap: device === 'mobile' ? 3.4 : 2.9, layers: layers, picks: picks }; }

  var SCENES = {
    // LinkAja · mobile: a queue of tickets → the intents behind them → the self-service chat
    linkaja: function () {
      var tickets = [];
      for (var c = 0; c < 2; c++) for (var r = 0; r < 5; r++) { var x = 0.35 + c * 2.05, y = 0.4 + r * 1.8; if (c === 0 && r === 3) continue; tickets.push(['rect', x, y, x + 1.85, y + 1.5, 's2'], ['line', x + 0.25, y + 0.45, x + 1.35, y + 0.45, 's2']); }
      var nodes = [[1.2, 1.2], [3.3, 2.1], [1.5, 3.8], [3.2, 5.1], [1.1, 8.4], [2.2, 6.0]], net = [];
      [[0, 1], [0, 2], [1, 3], [2, 3], [3, 5], [5, 4], [2, 5]].forEach(function (e) { net.push(['line', nodes[e[0]][0], nodes[e[0]][1], nodes[e[1]][0], nodes[e[1]][1], 's2']); });
      net.push(['line', 2.2, 6.0, 3.3, 7.7, 's2']);
      nodes.forEach(function (n) { net.push(['circ', n[0], n[1], 0.26, 's']); });
      return scene('mobile', [
        { ops: tickets },
        { ops: net },
        { ops: [['circ', 0.75, 1.15, 0.22, 'f2'], ['line', 1.15, 1.15, 2.6, 1.15, 's'], ['line', 0.3, 1.6, 4.3, 1.6, 's2'],
          ['rect', 0.5, 2.1, 3.0, 2.8, 's2'], ['rect', 1.7, 3.2, 4.1, 3.8, 's2'], ['rect', 0.5, 4.3, 3.2, 5.6, 's2'],
          ['rect', 0.45, 8.35, 3.75, 8.85, 's'], ['circ', 3.98, 8.6, 0.17, 'f']] }
      ], [
        // the repeat question worth automating → the chat's answer
        { k: 0, at: [1.275, 6.55], ops: [['rect', -0.92, -0.75, 0.92, 0.75, 'Ds'], ['rect', -0.67, -0.3, 0.33, -0.05, 'D']], land: [['rect', -0.8, -0.45, 1.85, 0.45, 'D']] },
        // the intent it maps to → the quick reply that resolves it
        { k: 1, at: [3.3, 7.7], ops: [['circ', 0, 0, 0.32, 'Ds'], ['circ', 0, 0, 0.14, 'D']], land: [['rect', -0.95, -0.28, 0.85, 0.28, 'D']] }
      ]);
    },

    // Komunal · mobile (DepositoBPR): the shared design system → the deposit funnel → the deposit screen
    komunal: function () {
      var ds = [];
      for (var i = 0; i < 4; i++) ds.push(['rect', 0.45 + i * 0.95, 0.5, 1.15 + i * 0.95, 1.2, ['f', 'f2', 's', 'f2'][i]]);
      ds.push(['rect', 0.45, 1.6, 2.2, 2.05, 's'], ['rect', 2.4, 1.6, 4.15, 2.05, 'f2'], ['rect', 0.45, 2.45, 4.15, 2.9, 's2'],
        ['rect', 0.45, 3.4, 2.2, 6.1, 's2'], ['img', 0.65, 3.6, 2.0, 4.8], ['line', 0.65, 5.2, 1.9, 5.2, 's2'],
        ['rect', 2.4, 3.4, 4.15, 6.1, 's2'], ['img', 2.6, 3.6, 3.95, 4.8], ['line', 2.6, 5.2, 3.85, 5.2, 's2'],
        ['rect', 0.45, 8.1, 4.15, 8.6, 's']);
      var funnel = [], len = [3.7, 3.3, 3.0, 2.7, 0, 2.0, 1.9];
      len.forEach(function (l, r) { var y = 0.75 + r * 1.25; funnel.push(['rect', 0.4, y - 0.16, 4.2, y + 0.16, 's2']); if (l) funnel.push(['rect', 0.4, y - 0.16, 0.4 + l, y + 0.16, 's']); });
      return scene('mobile', [
        { ops: ds },
        { ops: funnel },
        { ops: [['pl', [[0.75, 1.0], [0.55, 1.2], [0.75, 1.4]], 's'], ['line', 1.1, 1.2, 2.8, 1.2, 's'],
          ['rect', 0.45, 1.75, 4.15, 3.2, 's'], ['line', 0.75, 2.2, 2.0, 2.2, 's2'], ['line', 0.75, 2.75, 3.4, 2.75, 's'],
          ['line', 0.5, 3.8, 4.1, 3.8, 's2'], ['line', 0.5, 4.3, 3.2, 4.3, 's2'], ['line', 0.5, 4.8, 3.7, 4.8, 's2'],
          ['rect', 0.4, 5.6, 4.2, 5.8, 's2'], ['line', 1.2, 8.55, 3.4, 8.55, 's2']] }
      ], [
        // the shared component, adopted by all three orgs → the deposit button
        { k: 0, at: [2.3, 7.5], ops: [['rect', -1.85, -0.3, 1.85, 0.3, 'D']], land: [['rect', -1.85, -0.32, 1.85, 0.32, 'D']] },
        // the funnel step that leaked, redesigned → the completed progress
        { k: 1, at: [2.0, 5.7], ops: [['rect', -1.6, -0.16, 2.2, 0.16, 'D']], land: [['rect', -1.6, -0.1, 1.6, 0.1, 'D']] }
      ]);
    },

    // Dash · tablet: the restaurant floor → the menu → the ordering screen
    dash: function () {
      var floor = [['rect', 0.4, 0.3, 8.8, 0.6, 's2']];
      [1.3, 3.5, 5.7, 7.9].forEach(function (x) { [1.6, 3.6, 5.6].forEach(function (y) {
        if (x === 7.9 && y === 5.6) return;
        floor.push(['circ', x, y, 0.45, 's'], ['circ', x - 0.66, y, 0.08, 'f2'], ['circ', x + 0.66, y, 0.08, 'f2'], ['circ', x, y - 0.66, 0.08, 'f2'], ['circ', x, y + 0.66, 0.08, 'f2']);
      }); });
      var menu = [];
      [1.4, 2.975, 4.525, 6.075, 7.7].forEach(function (cx) { [2.425, 5.175].forEach(function (cy) {
        if (cx === 4.525 && cy === 5.175) return;
        menu.push(['rect', cx - 0.675, cy - 1.1, cx + 0.675, cy + 1.1, 's2'], ['img', cx - 0.5, cy - 0.9, cx + 0.5, cy + 0.2], ['line', cx - 0.5, cy + 0.6, cx + 0.3, cy + 0.6, 's2']);
      }); });
      var screen = [['line', 0.35, 0.85, 8.85, 0.85, 's2'], ['line', 0.6, 0.6, 2.4, 0.6, 's'], ['line', 1.95, 0.85, 1.95, 6.55, 's2']];
      [1.4, 2.0, 2.6, 3.2, 3.8].forEach(function (y, i) { screen.push(['line', 0.6, y, i === 0 ? 1.6 : 1.3, y, i === 0 ? 's' : 's2']); });
      [2.975, 4.525, 6.075].forEach(function (cx) { [2.425, 5.175].forEach(function (cy) {
        screen.push(['rect', cx - 0.675, cy - 1.225, cx + 0.675, cy + 1.225, 's2'], ['img', cx - 0.5, cy - 1.05, cx + 0.5, cy + 0.1], ['line', cx - 0.5, cy + 0.55, cx + 0.3, cy + 0.55, 's2']);
      }); });
      screen.push(['rect', 7.0, 1.2, 8.8, 6.5, 's'], ['line', 7.2, 1.6, 8.2, 1.6, 's'], ['line', 7.2, 2.2, 8.6, 2.2, 's2'], ['line', 7.2, 2.6, 8.3, 2.6, 's2'], ['line', 7.2, 3.0, 8.5, 3.0, 's2']);
      return scene('tablet', [{ ops: floor }, { ops: menu }, { ops: screen }], [
        // the table → its order goes to the kitchen
        { k: 0, at: [7.9, 5.6], ops: [['circ', 0, 0, 0.45, 'Ds'], ['circ', 0, 0, 0.16, 'D'], ['circ', -0.66, 0, 0.08, 'D'], ['circ', 0.66, 0, 0.08, 'D'], ['circ', 0, -0.66, 0.08, 'D'], ['circ', 0, 0.66, 0.08, 'D']], land: [['rect', -0.8, -0.3, 0.8, 0.3, 'D']] },
        // the dish → added to the order
        { k: 1, at: [4.525, 5.175], ops: [['rect', -0.675, -1.1, 0.675, 1.1, 'Ds'], ['rect', -0.45, 0.45, 0.25, 0.75, 'D']], land: [['rect', -0.675, -1.225, 0.675, 1.225, 'Ds'], ['rect', -0.45, 0.75, 0.45, 1.05, 'D']] }
      ]);
    },

    // Independent · desktop: raw sources → the signal that matters → the decision desk
    independent: function () {
      var grid = [];
      for (var a = 0; a < 7; a++) for (var b = 0; b < 4; b++) { var x = 0.4 + a * 1.4, y = 0.4 + b * 1.35; if (a === 4 && b === 3) continue; grid.push(['rect', x, y, x + 1.1, y + 1.05, (a * 5 + b * 3) % 7 === 0 ? 'f2' : 's2']); }
      return scene('desktop', [
        { ops: [], blocks: [[0.7, 0.6, 0.8, 0.7, 0.5], [3.6, 0.7, 0.7, 0.6, 0.8], [6.3, 0.9, 0.9, 0.6, 0.4], [8.6, 1.4, 0.6, 0.6, 0.6], [3.7, 3.1, 0.6, 0.6, 0.6], [5.6, 2.0, 0.6, 0.6, 0.9], [0.9, 4.3, 0.6, 0.7, 0.7], [7.4, 3.9, 0.8, 0.7, 0.5], [3.4, 4.8, 0.7, 0.5, 0.4], [8.8, 4.9, 0.5, 0.5, 0.5]] },
        { ops: grid },
        { ops: [['line', 0.3, 1.05, 2.0, 1.05, 's2'], ['line', 2.0, 0.8, 2.0, 5.95, 's2'], ['line', 0.6, 1.5, 1.6, 1.5, 's'], ['line', 0.6, 2.0, 1.4, 2.0, 's2'], ['line', 0.6, 2.5, 1.5, 2.5, 's2'], ['line', 0.6, 3.0, 1.3, 3.0, 's2'],
          ['line', 2.4, 1.3, 5.6, 1.3, 's'], ['line', 2.4, 1.75, 7.4, 1.75, 's2'], ['line', 2.4, 2.15, 6.6, 2.15, 's2'],
          ['rect', 2.4, 3.28, 9.4, 3.52, 's2'], ['rect', 4.0, 4.675, 5.4, 5.275, 's'], ['img', 8.0, 4.3, 9.4, 5.6]] }
      ], [
        // the one source worth trusting → the confidence it gives
        { k: 0, at: [4.0, 3.4], h: 0.6, ops: [['rect', -0.6, -0.6, 0.6, 0.6, 'Ds']], land: [['rect', -1.6, -0.12, 2.4, 0.12, 'D']] },
        // the signal that settles it → approve
        { k: 1, at: [6.55, 4.975], ops: [['rect', -0.55, -0.525, 0.55, 0.525, 'D']], land: [['rect', -0.95, -0.3, 0.95, 0.3, 'D']] }
      ]);
    },

    // Chrona · mobile: your week → your circle's free time → the plan, drafted in one tap
    chrona: function () {
      var week = [];
      for (var c = 0; c < 7; c++) for (var r = 0; r < 8; r++) {
        var x = 0.35 + c * 0.56, y = 0.6 + r * 1.05;
        if (c === 2 && r === 5) continue;
        week.push(['rect', x, y, x + 0.48, y + 0.9, (c * 3 + r * 5) % 4 === 0 || (c + r) % 5 === 1 ? 'f2' : 's2']);
      }
      var free = [];
      for (c = 0; c < 7; c++) {
        var cx = 0.59 + c * 0.56;
        [-0.14, 0, 0.14].forEach(function (o, f) {
          var top = 0.7 + ((c * 7 + f * 3) % 6) * 0.9, bot = top + 1.4 + ((c + f * 2) % 3) * 1.1;
          if (c === 5) { top = 5.6; bot = 8.9; }
          free.push(['rect', cx + o - 0.04, top, cx + o + 0.04, Math.min(9.0, bot), 's2']);
        });
      }
      return scene('mobile', [
        { ops: week },
        { ops: free },
        { ops: [['line', 0.6, 1.15, 2.4, 1.15, 's'], ['circ', 3.9, 1.15, 0.18, 'f2'],
          ['rect', 0.45, 1.6, 4.15, 8.7, 's'], ['img', 0.7, 1.85, 3.9, 3.9], ['line', 0.7, 4.4, 3.2, 4.4, 's'], ['line', 0.7, 4.85, 3.7, 4.85, 's2'], ['line', 0.7, 5.25, 2.9, 5.25, 's2'],
          ['circ', 0.95, 7.0, 0.16, 's'], ['circ', 1.35, 7.0, 0.16, 's'], ['circ', 1.75, 7.0, 0.16, 's']] }
      ], [
        // the evening that is free in your week → the plan's time
        { k: 0, at: [1.71, 6.3], ops: [['rect', -0.24, -0.45, 0.24, 0.45, 'Ds'], ['rect', -0.12, -0.08, 0.12, 0.08, 'D']], land: [['rect', -1.0, -0.26, 1.0, 0.26, 'D']] },
        // where everyone's free time overlaps → send the plan, one tap
        { k: 1, at: [3.39, 7.9], ops: [['rect', -0.25, -0.35, 0.25, 0.35, 'D']], land: [['rect', -2.95, -0.32, 0.75, 0.32, 'D']] }
      ]);
    },

    // E-ink · the TRMNL panel: live data feeds → the 1-bit layout → Face 1 as the panel renders it (garmin-daily-brief)
    eink: function () {
      // the panel's 800x480 screen sits inside a bezel; px() maps the renderer's pixel layout onto the slab
      var K = 0.011875, O = 0.45, X = function (v) { return O + v * K; };
      function px(ops) {
        return ops.map(function (op) {
          var t = op[0];
          if (t === 'rect' || t === 'line') return [t, X(op[1]), X(op[2]), X(op[3]), X(op[4]), op[5]];
          if (t === 'circ') return [t, X(op[1]), X(op[2]), op[3] * K, op[4]];
          return op;
        });
      }
      var feeds = [];
      [1.0, 2.1, 3.2, 4.29, 5.5].forEach(function (y, r) {
        feeds.push(['circ', 1.1, y, 0.2, 's'], ['line', 1.6, y, 3.4, y, 's2']);
        if (r !== 3) feeds.push(['pl', [[4.4, y + 0.2], [5.4, y - 0.1], [6.4, y + 0.12], [7.4, y - 0.22], [8.4, y], [9.4, y - 0.2]], 's2']);
      });
      // the layout's regions, before anything is drawn in them, with the dither the renderer will apply
      var layout = px([['rect', 0, 0, 800, 72, 's'], ['rect', 0, 72, 800, 232, 's'], ['line', 200, 72, 200, 232, 's2'], ['line', 400, 72, 400, 232, 's2'], ['line', 600, 72, 600, 232, 's2'],
        ['rect', 0, 232, 800, 426, 's'], ['line', 440, 232, 440, 426, 's2'], ['rect', 0, 426, 800, 480, 's']]);
      for (var a = 0; a < 26; a++) for (var b = 0; b < 3; b++) if ((a + b) % 2 === 0 && !(a < 15 && b > 0)) layout.push(['rect', X(30 * a + 18), X(100 + b * 40), X(30 * a + 24), X(106 + b * 40), 'f2']);
      // Face 1 as the panel shows it: header band, four metric cards, today's suggestion, recovery, footer stats
      var face = [['rect', 0, 0, 800, 72, 'f2'], ['line', 15, 17, 110, 17, 'k'], ['line', 15, 37, 100, 37, 'kb'], ['line', 15, 60, 130, 60, 'k'],
        ['line', 163, 10, 163, 62, 'k'], ['circ', 200, 38, 14, 'k'], ['line', 228, 17, 330, 17, 'k'], ['line', 228, 37, 290, 37, 'kb'], ['line', 228, 60, 340, 60, 'k'],
        ['line', 405, 10, 405, 62, 'k'], ['line', 455, 17, 535, 17, 'k'], ['line', 455, 37, 495, 37, 'kb'], ['rect', 458, 50, 536, 63, 'f'], ['rect', 678, 12, 792, 34, 'f'], ['line', 580, 60, 690, 60, 'k'],
        ['line', 200, 72, 200, 232, 's2'], ['line', 400, 72, 400, 232, 's2'], ['line', 600, 72, 600, 232, 's2'], ['line', 0, 232, 800, 232, 's'],
        ['line', 440, 232, 440, 426, 's2'], ['line', 0, 426, 800, 426, 's'],
        ['line', 15, 252, 168, 252, 's2'], ['line', 15, 309, 108, 309, 's2'], ['rect', 15, 330, 77, 347, 's'], ['line', 15, 388, 248, 388, 's2'],
        ['line', 455, 252, 540, 252, 's2'], ['rect', 748, 278, 787, 292, 's'],
        ['line', 115, 434, 115, 474, 's2'], ['line', 222, 434, 222, 474, 's2'], ['line', 335, 434, 335, 474, 's2'], ['rect', 660, 440, 787, 466, 's']];
      [[65, 0.82], [65, 0.6], [70, 0.86], [140, 0.5]].forEach(function (c, i) {
        var x0 = 200 * i;
        face.push(['line', x0 + 15, 94, x0 + 150, 94, 's2'], ['rect', x0 + 15, 116, x0 + 15 + c[0], 160, 'f2'],
          ['rect', x0 + 15, 172, x0 + 182, 178, 's2'], ['rect', x0 + 15, 172, x0 + 15 + 167 * c[1], 178, 'f2'], ['line', x0 + 15, 192, x0 + 110, 192, 's2']);
      });
      [285, 323, 361, 399].forEach(function (y) { face.push(['circ', 461, y, 6, 's2'], ['line', 478, y, 512, y, 's2'], ['rect', 530, y - 8, 598, y + 8, 'f2']); });
      [20, 132, 240, 352].forEach(function (x) { face.push(['circ', x, 452, 7, 's2'], ['line', x + 20, 441, x + 75, 441, 's2'], ['line', x + 20, 459, x + 70, 459, 's']); });
      return scene('panel', [{ ops: feeds }, { ops: layout }, { ops: px(face) }], [
        // HRV, the feed recovery hangs on → the BALANCED pill
        { k: 0, at: [X(746), X(323.5)], ops: [['pl', [[-4.9, 0.2], [-3.9, -0.1], [-2.9, 0.12], [-1.9, -0.22], [-0.9, 0.05], [0, 0]], 'Ds'], ['circ', 0, 0, 0.12, 'D']], land: [['rect', -41 * K, -7.5 * K, 41 * K, 7.5 * K, 'D']] },
        // the block that holds up in 1-bit → today's suggestion, the panel's headline
        { k: 1, at: [X(77.5), X(278)], ops: [['rect', -77.5 * K, -46 * K, 362.5 * K, 148 * K, 'Ds'], ['rect', -62.5 * K, -10 * K, 62.5 * K, 10 * K, 'D']], land: [['rect', -62.5 * K, -10 * K, 62.5 * K, 10 * K, 'D']] }
      ]);
    },

    // Cockpit · mobile (Garmin Connect): terrain (where you are) → a wall of instruments → one graduated strip with one pointer
    cockpit: function () {
      var terr = [];
      [[1.5, 2.0, [0.5, 1.0]], [3.1, 4.2, [0.4, 0.9, 1.3]], [3.0, 8.3, [0.35, 0.75]], [0.9, 7.6, [0.4]]].forEach(function (h) { h[2].forEach(function (r) { terr.push(['circ', h[0], h[1], r, 's2']); }); });
      var inst = [];
      [1.25, 3.35].forEach(function (x) { [1.3, 3.5, 5.7, 7.9].forEach(function (y) {
        if (x === 3.35 && y === 7.9) return;
        inst.push(['circ', x, y, 0.62, 's'], ['line', x, y, x + 0.35, y - 0.42, 's2'], ['line', x - 0.6, y + 0.95, x + 0.6, y + 0.95, 's2']);
      }); });
      var screen = [['line', 0.6, 1.15, 2.6, 1.15, 's'], ['circ', 3.9, 1.15, 0.18, 'f2'],
        ['rect', 0.45, 1.7, 4.15, 4.2, 's2'], ['pl', [[0.7, 3.6], [1.3, 3.2], [1.9, 3.4], [2.5, 2.7], [3.1, 3.0], [3.9, 2.4]], 's2'],
        ['rect', 0.5, 5.5, 4.1, 5.7, 's2'], ['rect', 0.45, 7.35, 4.15, 8.45, 's2'], ['line', 0.75, 7.9, 2.0, 7.9, 's2']];
      for (var i = 0; i <= 18; i++) screen.push(['line', 0.5 + i * 0.2, 5.5, 0.5 + i * 0.2, 5.5 - (i % 5 === 0 ? 0.3 : 0.15), 's2']);
      return scene('mobile', [{ ops: terr }, { ops: inst }, { ops: screen }], [
        // you, now: your position → the pointer on the strip
        { k: 0, at: [1.6, 5.6], ops: [['circ', 0, 0, 0.3, 'Ds'], ['circ', 0, 0, 0.1, 'D']], land: [['rect', -0.05, -0.5, 0.05, 0.3, 'D'], ['rect', -0.16, -0.72, 0.16, -0.48, 'D']] },
        // the reading that matters today → its value, lit
        { k: 1, at: [3.35, 7.9], ops: [['circ', 0, 0, 0.62, 'Ds'], ['line', 0, 0, 0.35, -0.42, 'Ds'], ['circ', 0, 0, 0.1, 'D'], ['rect', -0.6, 0.85, 0.6, 1.05, 'D']], land: [['rect', -0.7, -0.28, 0.6, 0.28, 'D']] }
      ]);
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
      if (st === 'k') return { stroke: PAL.ink, w: L2 * 1.2 }; // marks inside an inverted (filled) band
      if (st === 'kb') return { stroke: PAL.ink, w: L2 * 3 };
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
      else if (t === 'img') { var st = style('s2'); path([M(op[1], op[2]), M(op[3], op[2]), M(op[3], op[4]), M(op[1], op[4])], true, st); path([M(op[1], op[2]), M(op[3], op[4])], false, st); path([M(op[3], op[2]), M(op[1], op[4])], false, st); }
      else if (t === 'circ') { var pts = []; for (var k = 0; k < 28; k++) { var a = k / 28 * Math.PI * 2; pts.push(M(op[1] + op[3] * Math.cos(a), op[2] + op[3] * Math.sin(a))); } path(pts, true, style(op[4])); }
    });
  };

  // the device around the final screen: a screen inset plus the platform's own furniture
  function chrome(device, w, d) {
    if (device === 'mobile') return [['rect', 0.22, 0.22, w - 0.22, d - 0.22, 's'], ['rect', w / 2 - 0.45, 0.42, w / 2 + 0.45, 0.62, 'f2'], ['line', 0.5, 0.52, 1.0, 0.52, 's2'], ['line', w - 1.0, 0.52, w - 0.5, 0.52, 's2'], ['line', w / 2 - 0.7, d - 0.42, w / 2 + 0.7, d - 0.42, 's']];
    if (device === 'tablet') return [['rect', 0.3, 0.3, w - 0.3, d - 0.3, 's'], ['circ', w / 2, 0.16, 0.05, 'f2']];
    if (device === 'desktop') return [['rect', 0.22, 0.22, w - 0.22, d - 0.22, 's'], ['line', 0.22, 0.75, w - 0.22, 0.75, 's2'], ['circ', 0.5, 0.48, 0.07, 'f2'], ['circ', 0.75, 0.48, 0.07, 'f2'], ['circ', 1.0, 0.48, 0.07, 'f2'], ['rect', 2.6, 0.38, 7.4, 0.58, 's2']];
    return [['rect', 0.45, 0.45, w - 0.45, d - 0.45, 's'], ['rect', 0.2, 0.2, w - 0.2, d - 0.2, 's2']]; // the TRMNL bezel around 800x480
  }

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
      if (top) self.ops(on(0, 0), chrome(S.device, S.w, S.d), L2, neutral);
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
