// Simulated street traffic: motorbikes, bicycles, cars, buses and pedestrians moving on the OSM road network.
//
// NOTHING here is observed traffic. There is no open real-time traffic feed for Huế; vehicle mix, speeds and the
// time-of-day density curve below are stated assumptions for illustration. "Real time" means the agents move in
// real time and the density follows the current clock in Huế (UTC+7) through that assumed curve.
//
// Agents live in a "bubble" around what the viewer looks at (camera target or UAV): an agent that leaves the bubble
// respawns on a road near the focus, so the streets in view stay busy without simulating the whole city.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const DM = 0.1;
// road group (scripts/11_build_demo_data.py ROAD_CLASS): 0 main, 1 residential, 2 service/track, 3 foot, 4 rail
const ROAD_Y = [0.34, 0.28, 0.22, 0.16];
const SPEED_K = [1.0, 0.75, 0.5, 0.4];              // share of free speed allowed on each road group
const VEH_WEIGHT = [1.0, 0.45, 0.12, 0];          // how strongly vehicles choose/spawn on each group
const PED_WEIGHT = [0.5, 0.6, 0.25, 1.0];

// ASSUMPTIONS (illustration only): vehicle mix and free speeds in m/s
export const VEHICLES = {
  moto: { name: 'Xe máy', share: 0.76, len: 1.9, wid: 0.75, v: [7.5, 11.0] },
  bike: { name: 'Xe đạp / xích lô', share: 0.05, len: 1.8, wid: 0.7, v: [3.0, 4.5] },
  car: { name: 'Ô tô', share: 0.15, len: 4.4, wid: 1.8, v: [8.5, 12.5] },
  bus: { name: 'Xe buýt / xe khách', share: 0.04, len: 10.5, wid: 2.5, v: [7.0, 9.5] },
};
// ASSUMED relative density by hour in Huế (0 = 00:00). Morning, noon and evening peaks; quiet after 22:00.
export const HOURLY = [0.10, 0.07, 0.05, 0.05, 0.08, 0.30, 0.75, 1.00, 0.85, 0.65, 0.62, 0.80,
  0.70, 0.55, 0.58, 0.68, 0.85, 1.00, 0.95, 0.80, 0.70, 0.55, 0.35, 0.18];

export function hueClock(now = new Date()) {
  const m = (now.getUTCHours() * 60 + now.getUTCMinutes() + 7 * 60) % 1440;
  return { minutes: m, label: `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}` };
}
export function densityAt(minutes) {
  const h = minutes / 60, i = Math.floor(h) % 24, f = h - Math.floor(h);
  return HOURLY[i] * (1 - f) + HOURLY[(i + 1) % 24] * f;
}

// ---------------------------------------------------------------------------- network
function buildNetwork(graph) {
  const edges = [], nodeId = new Map(), adj = [];
  const node = (x, z) => {
    const k = `${Math.round(x * 2)},${Math.round(z * 2)}`;
    let id = nodeId.get(k);
    if (id === undefined) { id = adj.length; nodeId.set(k, id); adj.push([]); }
    return id;
  };
  const add = (p, g, w, yOff, o, ban, cond) => {
    const n = p.length / 3;
    if (n < 2) return;
    const pts = new Float32Array(n * 3), cum = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      pts[i * 3] = p[i * 3] * DM; pts[i * 3 + 1] = p[i * 3 + 2] * DM + yOff; pts[i * 3 + 2] = p[i * 3 + 1] * DM;
      if (i) cum[i] = cum[i - 1] + Math.hypot(pts[i * 3] - pts[i * 3 - 3], pts[i * 3 + 2] - pts[i * 3 - 1]);
    }
    const len = cum[n - 1];
    if (len < 3) return;
    const e = { pts, cum, len, g, w, o, ban, cond, a: node(pts[0], pts[2]), b: node(pts[n * 3 - 3], pts[n * 3 - 1]) };
    const id = edges.length; edges.push(e); adj[e.a].push(id); if (e.b !== e.a) adj[e.b].push(id);
  };
  // traffic.json: OSM ways split at shared nodes (scripts/11_build_demo_data.py write_traffic_graph)
  for (const e of graph.edges) if (e.g <= 3) add(e.p, e.g, e.w, e.b ? 0.3 : ROAD_Y[e.g], e.o || 0, e.a || 0, e.c || null);
  return { edges, adj };
}

// spawn slots binned in a grid, denser on main roads
function buildSlots(net, weightOf, step) {
  const CELL = 150, cells = new Map();
  for (let ei = 0; ei < net.edges.length; ei++) {
    const e = net.edges[ei], wgt = weightOf[e.g];
    if (!wgt) continue;
    const spacing = step / wgt;
    for (let s = Math.random() * spacing; s < e.len; s += spacing) {
      const k = segAt(e, s), t = (s - e.cum[k]) / Math.max(1e-6, e.cum[k + 1] - e.cum[k]);
      const x = e.pts[k * 3] + (e.pts[k * 3 + 3] - e.pts[k * 3]) * t, z = e.pts[k * 3 + 2] + (e.pts[k * 3 + 5] - e.pts[k * 3 + 2]) * t;
      const key = `${Math.floor(x / CELL)},${Math.floor(z / CELL)}`;
      let c = cells.get(key); if (!c) { c = []; cells.set(key, c); }
      c.push(ei, s);
    }
  }
  return { CELL, cells };
}

function segAt(e, s) {
  let lo = 0, hi = e.cum.length - 2;
  while (lo < hi) { const m = (lo + hi + 1) >> 1; if (e.cum[m] <= s) lo = m; else hi = m - 1; }
  return lo;
}

// OSM access rules (scripts/11_build_demo_data.py access_rules): bit set = not allowed; timed bans by Huế clock
const ACCESS_BIT = { moto: 1, bike: 2, car: 4, bus: 8, ped: 16 };
export function allowed(kind, e, minutes) {
  const bit = ACCESS_BIT[kind];
  if (e.ban & bit) return false;
  if (e.cond) for (const [mask, spans] of e.cond) {
    if (!(mask & bit)) continue;
    for (const [a, b] of spans) if (minutes >= a && minutes < b) return false;
  }
  return true;
}
export function banText(e) {
  if (!e || !e.cond) return '';
  const name = (m) => [m & 4 ? 'ô tô' : '', m & 8 && !(m & 4) ? 'xe tải/xe khách' : '', m & 1 ? 'xe máy' : '', m & 2 ? 'xích lô/xe đạp' : ''].filter(Boolean).join(', ');
  const hm = (v) => `${String(Math.floor(v / 60) % 24).padStart(2, '0')}:${String(v % 60).padStart(2, '0')}`;
  return e.cond.map(([m, sp]) => `cấm ${name(m)} ${sp.map(([a, b]) => `${hm(a)}–${hm(b === 1440 ? 1439 : b)}`).join(', ')}`).join('; ');
}

// ---------------------------------------------------------------------------- low-poly models (vertex colours)
function box(w, h, d, x, y, z, col) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(x, y, z);
  const c = new THREE.Color(col), n = g.attributes.position.count, a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  return g;
}
// models face -z (forward) and are later rotated to the heading; instance colour tints the "paint" parts (white)
const MODELS = {
  moto: () => mergeGeometries([
    box(0.16, 0.5, 0.5, 0, 0.25, -0.68, '#1d1d20'), box(0.16, 0.5, 0.5, 0, 0.25, 0.68, '#1d1d20'),   // wheels
    box(0.34, 0.42, 1.25, 0, 0.62, 0, '#ffffff'),                                                  // body (paint)
    box(0.42, 0.62, 0.32, 0, 1.12, 0.12, '#cfd3d8'), box(0.27, 0.27, 0.3, 0, 1.56, 0.08, '#ffffff'),  // rider, helmet
  ]),
  bike: () => mergeGeometries([
    box(0.08, 0.62, 0.62, 0, 0.31, -0.6, '#222'), box(0.08, 0.62, 0.62, 0, 0.31, 0.6, '#222'),
    box(0.1, 0.1, 1.15, 0, 0.66, 0, '#ffffff'),
    box(0.38, 0.6, 0.28, 0, 1.08, 0.1, '#ffffff'), box(0.22, 0.24, 0.24, 0, 1.5, 0.06, '#e2bf9b'),
  ]),
  car: () => mergeGeometries([
    box(1.78, 0.72, 4.3, 0, 0.62, 0, '#ffffff'),
    box(1.6, 0.56, 2.25, 0, 1.25, 0.25, '#3b4552'),
    box(1.82, 0.5, 0.62, 0, 0.3, -1.35, '#161616'), box(1.82, 0.5, 0.62, 0, 0.3, 1.35, '#161616'),
  ]),
  bus: () => mergeGeometries([
    box(2.5, 2.35, 10.5, 0, 1.55, 0, '#ffffff'),
    box(2.54, 0.9, 9.4, 0, 2.05, 0.3, '#2b3440'), box(2.3, 0.9, 0.06, 0, 2.05, -5.26, '#2b3440'),
    box(2.56, 0.62, 1.0, 0, 0.32, -3.4, '#161616'), box(2.56, 0.62, 1.0, 0, 0.32, 3.4, '#161616'),
  ]),
  ped: () => mergeGeometries([
    box(0.3, 0.82, 0.2, 0, 0.41, 0, '#3a3a44'),
    box(0.42, 0.62, 0.26, 0, 1.13, 0, '#ffffff'),
    box(0.22, 0.24, 0.22, 0, 1.58, 0, '#d9b38f'),
  ]),
};
const PAINT = {
  moto: ['#c8302c', '#2a63b5', '#1f1f22', '#e8e8e8', '#9aa1a8', '#2f7d4a', '#d9a520', '#7b3fa0'],
  bike: ['#f2f2f2', '#2a63b5', '#c8302c', '#4a8f5a'],
  car: ['#f2f2f2', '#f2f2f2', '#b9bec4', '#1d1f22', '#8a1f22', '#2d4a7a', '#7d7f80', '#d8d0bd'],
  bus: ['#f1c232', '#3c8a5a', '#e6e6e6', '#2b6cb0', '#c0392b'],
  ped: ['#e74c3c', '#3498db', '#f1c40f', '#ecf0f1', '#2ecc71', '#9b59b6', '#f39c12', '#ffffff', '#1abc9c', '#e84393'],
};

// ---------------------------------------------------------------------------- simulation
export class Traffic {
  constructor(graph, { phone = false } = {}) {
    this.net = buildNetwork(graph);
    this.vehSlots = buildSlots(this.net, VEH_WEIGHT, 14);
    this.pedSlots = buildSlots(this.net, PED_WEIGHT, 22);
    this.maxVeh = phone ? 700 : 2200; this.maxPed = phone ? 260 : 900;
    this.group = new THREE.Group(); this.group.name = 'traffic';
    this.mode = 'clock'; this.enabled = true; this.factor = 1;
    this.fixedMinutes = null;   // debug/test hook: pretend it is this many minutes past midnight in Huế
    this.focus = new THREE.Vector3(); this.radius = 800;
    this.meshes = {}; this.agents = [];
    const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
    const kinds = { ...VEHICLES, ped: { name: 'Người đi bộ', share: 1 } };
    const counts = {};
    for (const k of Object.keys(VEHICLES)) counts[k] = Math.ceil(this.maxVeh * VEHICLES[k].share);
    counts.ped = this.maxPed;
    for (const [k, c] of Object.entries(counts)) {
      const m = new THREE.InstancedMesh(MODELS[k](), mat, c);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.frustumCulled = false; m.castShadow = k !== 'ped'; m.receiveShadow = false;
      m.userData.kind = k; m.name = `traffic-${k}`;
      const col = new THREE.Color();
      for (let i = 0; i < c; i++) {
        const pal = PAINT[k];
        m.setColorAt(i, col.set(pal[(i * 7 + (i >> 3)) % pal.length]).offsetHSL(0, 0, (Math.random() - 0.5) * 0.08));
        this.agents.push({ kind: k, mesh: m, idx: i, ped: k === 'ped', spec: kinds[k], active: false, e: -1, dir: 1, s: 0, seg: 0,
          v: 0, vDes: 0, lat: 0, wait: 0, phase: Math.random() * 6.28, x: 0, y: -1e4, z: 0, h: 0 });
      }
      m.instanceColor.needsUpdate = true;
      this.meshes[k] = m; this.group.add(m);
    }
    this.vehAgents = this.agents.filter((a) => !a.ped);
    this.pedAgents = this.agents.filter((a) => a.ped);
    // round-robin activation order so every vehicle type thins out together
    this.vehAgents.sort((a, b) => (a.idx / this.meshes[a.kind].count) - (b.idx / this.meshes[b.kind].count));
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._p = new THREE.Vector3(); this._s = new THREE.Vector3(1, 1, 1);
    this._yAxis = new THREE.Vector3(0, 1, 0);
    this.buckets = new Map();
    this.clock = hueClock();
    this.stats = { veh: 0, ped: 0 };
  }

  setMode(mode) { this.mode = mode; }
  setEnabled(on) { this.enabled = on; this.group.visible = on; }
  targetFactor() {
    if (this.mode === 'low') return 0.3;
    if (this.mode === 'mid') return 0.65;
    if (this.mode === 'high') return 1.0;
    return densityAt(this.clock.minutes);
  }

  spawn(a, slots) {
    const { CELL, cells } = slots, R = this.radius;
    for (let tries = 0; tries < 24; tries++) {
      const r = R * Math.sqrt(Math.random()), t = Math.random() * Math.PI * 2;
      const c = cells.get(`${Math.floor((this.focus.x + Math.cos(t) * r) / CELL)},${Math.floor((this.focus.z + Math.sin(t) * r) / CELL)}`);
      if (!c) continue;
      const j = (Math.random() * (c.length / 2)) | 0;
      const e = this.net.edges[c[j * 2]];
      if (!allowed(a.kind, e, this.clock.minutes)) continue;
      this.place(a, c[j * 2], c[j * 2 + 1], !a.ped && e.o ? e.o : (Math.random() < 0.5 ? 1 : -1));
      return true;
    }
    return false;
  }

  place(a, ei, s, dir) {
    const e = this.net.edges[ei], sp = a.spec;
    a.e = ei; a.s = s; a.dir = dir; a.seg = segAt(e, s); a.active = true;
    if (a.ped) {
      a.vDes = 1.0 + Math.random() * 0.5; a.wait = Math.random() < 0.18 ? 3 + Math.random() * 15 : 0;
      a.lat = e.g === 3 ? (Math.random() - 0.5) * e.w * 0.6 : (Math.random() < 0.5 ? -1 : 1) * (e.w / 2 + 0.8 + Math.random() * 0.8);
    } else {
      a.vDes = (sp.v[0] + Math.random() * (sp.v[1] - sp.v[0])) * SPEED_K[e.g];
      const half = e.w / 2;
      if (e.o) a.lat = (Math.random() * 2 - 1) * Math.max(0, half - sp.wid / 2 - 0.3);     // one-way: whole width
      else if (a.kind === 'moto' || a.kind === 'bike') a.lat = half < 2.2 ? half * 0.45 : half * (0.25 + Math.random() * 0.6);
      else a.lat = half < 2.2 ? half * 0.3 : Math.min(half - sp.wid / 2 - 0.2, Math.max(sp.wid / 2 + 0.3, half * 0.45));
      if (!e.o && (a.kind === 'moto' || a.kind === 'bike')) a.lat = Math.min(a.lat, half - 0.4);
    }
    a.v = a.vDes * (0.5 + Math.random() * 0.5);
  }

  nextEdge(a) {
    const net = this.net, e = net.edges[a.e], at = a.dir > 0 ? e.b : e.a;
    const opts = net.adj[at], weights = a.ped ? PED_WEIGHT : VEH_WEIGHT;
    // heading at the end of the current edge
    const n = e.pts.length / 3, i1 = a.dir > 0 ? n - 1 : 0, i0 = a.dir > 0 ? n - 2 : 1;
    const hx = (e.pts[i1 * 3] - e.pts[i0 * 3]), hz = (e.pts[i1 * 3 + 2] - e.pts[i0 * 3 + 2]), hl = Math.hypot(hx, hz) || 1;
    let total = 0; const cand = [];
    for (const oi of opts) {
      if (oi === a.e) continue;
      const o = net.edges[oi], w = weights[o.g];
      if (!w) continue;
      const fwd = o.a === at ? 1 : -1, m = o.pts.length / 3;
      if (!a.ped && o.o && o.o !== fwd) continue;      // OSM one-way: no entry against the tagged direction
      if (!allowed(a.kind, o, this.clock.minutes)) continue;   // OSM access, incl. timed bans (e.g. cars on Trường Tiền)
      const j0 = fwd > 0 ? 0 : m - 1, j1 = fwd > 0 ? 1 : m - 2;
      const ox = o.pts[j1 * 3] - o.pts[j0 * 3], oz = o.pts[j1 * 3 + 2] - o.pts[j0 * 3 + 2], ol = Math.hypot(ox, oz) || 1;
      const cos = (hx * ox + hz * oz) / (hl * ol);
      const wt = w * (0.15 + (1 + cos) * 0.5) * (a.ped ? 1 : 1 + (o.w >= 9 ? 0.6 : 0));
      cand.push(oi, fwd, wt); total += wt;
    }
    if (!total) return false;                      // dead end (e.g. edge of the pilot area)
    let r = Math.random() * total;
    for (let k = 0; k < cand.length; k += 3) {
      r -= cand[k + 2];
      if (r <= 0 || k + 3 >= cand.length) {
        const o = net.edges[cand[k]];
        const keepLat = a.lat; this.place(a, cand[k], cand[k + 1] > 0 ? 0 : o.len, cand[k + 1]);
        if (!a.ped) a.v = Math.min(a.v, a.vDes); else a.lat = o.g === 3 ? keepLat * 0.3 : a.lat;
        return true;
      }
    }
    return false;
  }

  /** focus: where the viewer looks; viewDist: camera distance to it. */
  update(dt, focus, viewDist, t) {
    if (!this.enabled) return;
    this.clock = this.fixedMinutes == null ? hueClock() : { minutes: this.fixedMinutes, label: `${String(Math.floor(this.fixedMinutes / 60)).padStart(2, '0')}:${String(this.fixedMinutes % 60).padStart(2, '0')}` };
    this.focus.copy(focus);
    this.radius = THREE.MathUtils.clamp(viewDist * 1.15, 380, 1500);
    this.factor += (this.targetFactor() - this.factor) * Math.min(1, dt * 0.8);
    const nVeh = Math.round(this.vehAgents.length * this.factor), nPed = Math.round(this.pedAgents.length * Math.max(0.1, this.factor));
    const R2 = (this.radius * 1.2) ** 2;
    let spawned = 0;
    const activate = (list, n, slots) => {
      for (let i = 0; i < list.length; i++) {
        const a = list[i];
        if (i >= n) { if (a.active) { a.active = false; this.hide(a); } continue; }
        const far = a.active && ((a.x - focus.x) ** 2 + (a.z - focus.z) ** 2 > R2);
        if ((!a.active || far) && spawned < 400) { spawned++; if (!this.spawn(a, slots)) { a.active = false; this.hide(a); } }
      }
    };
    activate(this.vehAgents, nVeh, this.vehSlots);
    activate(this.pedAgents, nPed, this.pedSlots);

    // car following: same edge and direction, overlapping lateral position
    const B = this.buckets; B.clear();
    for (const a of this.vehAgents) {
      if (!a.active) continue;
      const key = a.e * 2 + (a.dir > 0 ? 1 : 0);
      let l = B.get(key); if (!l) { l = []; B.set(key, l); } l.push(a);
    }
    for (const l of B.values()) {
      if (l.length < 2) { if (l.length) l[0].lead = null; continue; }
      l.sort((p, q) => (q.s - p.s) * q.dir);      // front first
      for (let i = 0; i < l.length; i++) {
        const a = l[i]; a.lead = null;
        for (let j = i - 1; j >= Math.max(0, i - 6); j--) {
          const b = l[j];
          if (Math.abs(b.lat - a.lat) < (a.spec.wid + b.spec.wid) / 2 + 0.15) { a.lead = b; break; }
        }
      }
    }
    let cv = 0, cp = 0;
    const net = this.net;
    for (const a of this.agents) {
      if (!a.active) continue;
      const e = net.edges[a.e];
      if (a.ped) {
        cp++;
        if (a.wait > 0) { a.wait -= dt; a.v = 0; } else { a.v = a.vDes; if (Math.random() < dt * 0.01) a.wait = 2 + Math.random() * 10; }
      } else {
        cv++;
        let target = a.vDes;
        const remain = a.dir > 0 ? e.len - a.s : a.s, deg = net.adj[a.dir > 0 ? e.b : e.a].length;
        if (deg >= 3 && remain < 14) target *= 0.55 + 0.45 * (remain / 14);   // slow down at junctions
        if (a.lead) {
          const gap = (a.lead.s - a.s) * a.dir - (a.lead.spec.len + a.spec.len) / 2;
          const safe = (a.kind === 'moto' || a.kind === 'bike' ? 0.8 : 2.0) + a.v * (a.kind === 'moto' ? 0.45 : 0.9);
          if (gap < safe) target = Math.min(target, a.lead.v * Math.max(0, gap / safe));
          if (gap < 0.3) target = 0;
        }
        a.v += THREE.MathUtils.clamp(target - a.v, -7 * dt, 2.6 * dt);
      }
      a.s += a.dir * a.v * dt;
      if (a.s < 0 || a.s > e.len) {
        const over = a.dir > 0 ? a.s - e.len : -a.s;
        if (!this.nextEdge(a)) { if (!this.spawn(a, a.ped ? this.pedSlots : this.vehSlots)) { a.active = false; this.hide(a); continue; } }
        else a.s += a.dir * over;
      }
      this.pose(a, t);
    }
    this.stats.veh = cv; this.stats.ped = cp;
    for (const m of Object.values(this.meshes)) m.instanceMatrix.needsUpdate = true;
  }

  pose(a, t) {
    const e = this.net.edges[a.e];
    a.s = THREE.MathUtils.clamp(a.s, 0, e.len);
    let k = a.seg;
    while (k < e.cum.length - 2 && a.s > e.cum[k + 1]) k++;
    while (k > 0 && a.s < e.cum[k]) k--;
    a.seg = k;
    const p = e.pts, sl = Math.max(1e-6, e.cum[k + 1] - e.cum[k]), f = (a.s - e.cum[k]) / sl;
    const dx = (p[k * 3 + 3] - p[k * 3]) / sl, dz = (p[k * 3 + 5] - p[k * 3 + 2]) / sl;
    const fx = dx * a.dir, fz = dz * a.dir;               // travel direction
    const rx = -fz, rz = fx;                              // right-hand side (traffic drives on the right)
    a.x = p[k * 3] + (p[k * 3 + 3] - p[k * 3]) * f + rx * a.lat;
    a.z = p[k * 3 + 2] + (p[k * 3 + 5] - p[k * 3 + 2]) * f + rz * a.lat;
    a.y = p[k * 3 + 1] + (p[k * 3 + 4] - p[k * 3 + 1]) * f;
    if (a.ped && a.v > 0) a.y += Math.abs(Math.sin(t * 7 + a.phase)) * 0.05;
    a.h = Math.atan2(-fx, -fz);                           // model faces -z
    this._p.set(a.x, a.y, a.z); this._q.setFromAxisAngle(this._yAxis, a.h);
    this._m.compose(this._p, this._q, this._s);
    a.mesh.setMatrixAt(a.idx, this._m);
  }

  hide(a) {
    a.y = -1e4; this._m.makeScale(0, 0, 0); a.mesh.setMatrixAt(a.idx, this._m);
  }

  /** UAV collision: nearest active vehicle or pedestrian within reach, or null. */
  hit(x, y, z, r) {
    for (const a of this.agents) {
      if (!a.active) continue;
      const top = a.kind === 'bus' ? 3.0 : a.kind === 'car' ? 1.6 : 1.75;
      if (y - r > a.y + top || y + r < a.y) continue;
      const dx = x - a.x, dz = z - a.z, fx = -Math.sin(a.h), fz = -Math.cos(a.h);
      const along = dx * fx + dz * fz, side = -dx * fz + dz * fx;
      const hl = (a.spec.len || 0.4) / 2, hw = (a.spec.wid || 0.45) / 2;
      if (Math.abs(along) < hl + r && Math.abs(side) < hw + r) return a;
    }
    return null;
  }

  /** for click info: the agent behind an InstancedMesh hit */
  agentFor(mesh, instanceId) { return this.agents.find((a) => a.mesh === mesh && a.idx === instanceId) || null; }

  /** ambient level 0..1 for the sound: how many vehicles are close to (x, z) */
  nearby(x, z, r = 60) {
    let n = 0; const r2 = r * r;
    for (const a of this.vehAgents) if (a.active && (a.x - x) ** 2 + (a.z - z) ** 2 < r2) n++;
    return n;
  }
}
