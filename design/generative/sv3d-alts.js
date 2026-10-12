/* Alternative forms for the signature visuals, sketched on LinkAja. Loads after sv3d.js and adds three scenes. */
(function () {
  var Terrain = SV3D.Terrain, walk = SV3D.walk;

  // A · Exploded layers: the product's own interface, pulled apart into the layers it replaced and the one it became
  SV3D.define('alt-layers', function () {
    var T = new Terrain(12, 8), tickets = [];
    for (var a = 0; a < 6; a++) for (var b = 0; b < 4; b++) { var x = 0.45 + a * 1.55, y = 0.45 + b * 1.35; tickets.push(['rect', x, y, x + 1.25, y + 1.0, (a * 4 + b) % 9 === 4 ? 'f2' : 's2'], ['line', x + 0.18, y + 0.3, x + 0.9, y + 0.3, 's2']); }
    // the queue: a sheet of support tickets
    T.layer({ x: 0.5, y: 1, z: 0, w: 10, d: 6, t: 0.18, ops: tickets });
    // routing: many nodes converging on one answer
    T.layer({ x: 1.6, y: 1.6, z: 1.9, w: 7.6, d: 4.6, t: 0.14, risers: [[2.6, 2.4, 'line2'], [3.4, 5.4, 'line2'], [6.2, 2.0, 'line2'], [8.6, 5.8, 'line2']], ops: [
      ['circ', 1.0, 0.8, 0.22, 's'], ['circ', 1.8, 3.8, 0.22, 's'], ['circ', 4.6, 0.4, 0.22, 's'], ['circ', 7.0, 4.2, 0.22, 's'],
      ['pl', [[1.0, 0.8], [3.0, 1.9], [4.6, 2.3]], 's2'], ['pl', [[1.8, 3.8], [3.2, 2.9], [4.6, 2.3]], 's2'], ['pl', [[4.6, 0.4], [4.6, 2.3]], 's2'], ['pl', [[7.0, 4.2], [5.8, 3.0], [4.6, 2.3]], 's2'],
      ['circ', 4.6, 2.3, 0.34, 'f2']] });
    // the outcome: the self-service chat, its answer lime
    T.layer({ x: 4.2, y: 2.4, z: 3.9, w: 3.6, d: 3.0, t: 0.12, risers: [[6.2, 3.9, 'flow']], ops: [
      ['rect', 0.2, 0.2, 3.4, 0.55, 's'], ['circ', 0.42, 0.37, 0.1, 'f2'], ['rect', 0.25, 0.8, 2.1, 1.25, 's'], ['rect', 1.3, 1.45, 3.35, 1.9, 'L'], ['rect', 0.25, 2.05, 1.8, 2.35, 's'], ['rect', 0.2, 2.5, 3.0, 2.8, 's'], ['circ', 3.2, 2.65, 0.11, 'f']] });
    T.noFurniture = true;
    return T;
  });

  // B · Circuit board: intakes are chips, traces merge through one router into a lime connector
  SV3D.define('alt-board', function () {
    var T = new Terrain(16, 9), dedupe = function (q, n, arr) { return !(n && q[0] === arr[n - 1][0] && q[1] === arr[n - 1][1]); };
    T.set(0, 16, 0, 9, 0.3);
    function chip(x, y, w, d, h, legs) {
      T.box(x, y, 0.3, w, d, h);
      for (var k = 0; k < legs; k++) { var lx = x + (k + 0.5) * w / legs - 0.06; T.box(lx, y - 0.14, 0.3, 0.12, 0.14, 0.06); T.box(lx, y + d, 0.3, 0.12, 0.14, 0.06); }
    }
    // four intakes: chips along the left edge, each with its trace into the router
    [1, 3, 5, 7].forEach(function (j) {
      chip(0.4, j + 0.2, 1.9, 0.6, 0.28, 5);
      T.channel(walk([[2, j], [4, j], [4, 4], [6, 4]].filter(dedupe)), { thin: true });
      T.channel(walk([[2, j], [3, j], [3, j < 4 ? j + 1 : j - 1]].filter(dedupe)), { thin: true });
    });
    // the router: one big chip
    chip(6.2, 2.5, 3.0, 3.0, 0.45, 8);
    // housekeeping traces, small parts and vias, for the density of a real board
    T.channel(walk([[2, 0], [12, 0], [12, 2]]), { thin: true }); T.channel(walk([[5, 8], [13, 8], [13, 6]]), { thin: true }); T.channel(walk([[10, 2], [10, 1], [14, 1]]), { thin: true }); T.channel(walk([[10, 6], [10, 7], [15, 7]]), { thin: true });
    [[11, 5], [12, 5.3], [11, 2.6], [7, 7.1], [8, 7.1], [14, 2.2]].forEach(function (c) { T.box(c[0] + 0.2, c[1] + 0.25, 0.3, 0.5, 0.25, 0.16); });
    [[11, 6], [14, 7], [9, 7], [12, 3], [5, 1], [5, 7]].forEach(function (c) { T.decal(c[0], c[1], [['circ', 0.5, 0.5, 0.13, 's'], ['circ', 0.5, 0.5, 0.05, 'f2']]); });
    // the outcome: one lime trace into the connector, which lights when it arrives
    T.channel(walk([[9, 4], [14, 4]]), { lime: true, thin: true });
    T.box(14.3, 3.1, 0.3, 1.4, 2.8, 0.55, { lime: true });
    T.scale = { at: [0, 9], to: 1.2 };
    return T;
  });

  // C · Floor plan: the journey as rooms; four intake rooms, a hall of agent desks, one lime route out to self-service
  SV3D.define('alt-plan', function () {
    var T = new Terrain(16, 12), H = 0.12, WH = 0.6, th = 0.12;
    T.set(0, 16, 0, 12, H, 1);
    // walls are cut into one-cell pieces so each draws with the cell it stands on
    function wallX(x, y0, y1, gaps) { for (var y = y0; y < y1; y++) if ((gaps || []).indexOf(y) < 0) T.box(x - th / 2, y, H, th, 1, WH); }
    function wallY(y, x0, x1, gaps) { for (var x = x0; x < x1; x++) if ((gaps || []).indexOf(x) < 0) T.box(x, y - th / 2, H, 1, th, WH); }
    wallY(0.06, 0, 12); wallX(0.06, 0, 12);
    [3, 6, 9].forEach(function (y) { wallY(y, 0, 3); });
    wallX(3, 0, 12, [1, 4, 7, 10]);
    wallX(5, 0, 12, [6]); wallY(2, 5, 12); wallY(10, 5, 12);
    wallX(12, 2, 10, [6]);
    wallY(4, 12, 16); wallY(8, 12, 16);
    // agent desks fill the hall, the way it used to work
    for (var i = 6; i < 11; i++) for (var j = 3; j < 10; j++) if (j !== 6 && (i + j) % 2 === 0) T.box(i + 0.2, j + 0.3, H, 0.6, 0.4, 0.32);
    // tickets queue in each intake room
    [1, 4, 7, 10].forEach(function (j) { for (var k = 0; k < 3; k++) T.box(0.5 + 0.04 * k, j - 0.2 - 0.03 * k, H + 0.06 * k, 0.8, 0.6, 0.05); });
    [1, 4, 7, 10].forEach(function (j) { T.channel(walk([[1, j], [4, j], [4, 6]].filter(function (q, n, arr) { return !(n && q[0] === arr[n - 1][0] && q[1] === arr[n - 1][1]); }))); });
    T.channel(walk([[4, 6], [15, 6]]), { limeFrom: 7 });
    T.panel({ o: [16.2, 7.4, 2.2], u: [0, -1, 0], v: [0, 0, -1], w: 2.8, h: 2.2, t: 0.08, ops: [
      ['rect', 0.18, 0.18, 2.62, 0.48, 's'], ['rect', 0.22, 0.65, 1.6, 0.98, 's'], ['rect', 1.0, 1.12, 2.58, 1.45, 'L'], ['rect', 0.18, 1.75, 2.3, 2.0, 's'], ['circ', 2.48, 1.87, 0.1, 'f']] });
    T.noRightDim = true;
    return T;
  });
})();
