// Scripted flight routes. Each route is a list of named waypoints (OSM objects exported in
// meta.route_points / meta.places) with a desired height above the surface. The planner turns them
// into a smooth path and then RAISES it wherever it would pass too close to buildings, citadel walls,
// bridge decks, the Trường Tiền arches or the Kỳ Đài flagpole, so the scripted UAV never flies
// through geometry. The "under Trường Tiền" route is the exception and keeps its hand-made path.
import * as THREE from 'three';
import { Solids } from './world.js';
import { truongTienPath } from './uav.js';

const GRADE = 0.32;          // max climb/descent: 32 m per 100 m flown
const CLEAR_OBST = 8;        // metres above any roof, wall, deck
const CLEAR_LAND = 15;       // metres above open ground (trees reach ~13 m)
const CLEAR_WATER = 3;       // metres above water (lets the river route skim the surface)
const STEP = 4;              // sampling step along the path

function P(meta, key) { return (meta.route_points && meta.route_points[key]) || (meta.places && meta.places[key]) || null; }

/** Route definitions. h = desired height above ground/water at that waypoint (metres). */
export function routeDefs(meta) {
  const dir = (a, b) => { const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1; return [dx / l, dz / l]; };
  const off = (p, d, m) => ({ x: p.x + d[0] * m, z: p.z + d[1] * m });
  const lerp = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t });
  const defs = [];

  // 1. Along the Perfume River
  const DV = P(meta, 'mid_da_vien'), NH = P(meta, 'mid_nguyen_hoang'), PX = P(meta, 'mid_phu_xuan'), TT = P(meta, 'mid_truong_tien'), CH = P(meta, 'con_hen');
  if (DV && PX && TT && CH) {
    const upstream = NH ? dir(DV, NH) : dir(PX, DV);
    defs.push({
      id: 'river', name: 'Dọc sông Hương', color: '#b58cf2', speed: 28,
      desc: 'Từ cầu Dã Viên xuôi dòng qua cầu Phú Xuân, cầu Trường Tiền tới Cồn Hến; có đoạn lướt sát mặt nước.',
      steps: [
        { at: off(DV, upstream, 320), h: 36 },
        { at: DV, h: 24, label: 'Cầu Dã Viên' },
        { at: lerp(DV, PX, 0.25), h: 7, river: true },
        { at: lerp(DV, PX, 0.5), h: 3.5, river: true, label: 'Lướt sát mặt sông' },
        { at: lerp(DV, PX, 0.75), h: 5, river: true },
        { at: PX, h: 20, label: 'Cầu Phú Xuân' },
        { at: lerp(PX, TT, 0.5), h: 4, river: true },
        { at: TT, h: 26, label: 'Cầu Trường Tiền' },
        { at: lerp(TT, CH, 0.35), h: 6, river: true },
        { at: lerp(TT, CH, 0.7), h: 9, river: true },
        { at: CH, h: 30, label: 'Cồn Hến' },
        { at: off(CH, dir(TT, CH), 260), h: 110 },
      ],
    });
  }

  // 2. Citadel and Imperial City
  const KD = P(meta, 'ky_dai'), NL = P(meta, 'nghenh_luong');
  const keys2 = ['phu_van_lau', 'ngo_mon', 'thai_hoa', 'tu_cam_thanh', 'kien_trung', 'duyet_thi', 'cua_hien_nhon', 'cua_dong_ba'];
  if (KD && NL && keys2.every((k) => P(meta, k))) {
    const pv = P(meta, 'phu_van_lau'), nm = P(meta, 'ngo_mon');
    const a0 = Math.atan2(pv.z - KD.z, pv.x - KD.x), a1 = Math.atan2(nm.z - KD.z, nm.x - KD.x);
    let sweep = ((a1 - a0) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI); if (sweep < Math.PI) sweep += 2 * Math.PI;
    const orbit = [];
    const nOrbit = Math.ceil(sweep / (Math.PI / 6));
    for (let i = 0; i <= nOrbit; i++) {
      const a = a0 + sweep * (i / nOrbit);
      orbit.push({ at: { x: KD.x + Math.cos(a) * 95, z: KD.z + Math.sin(a) * 95 }, h: 48, label: i === 0 ? 'Kỳ Đài (bay vòng quanh cột cờ)' : undefined });
    }
    const db = P(meta, 'cua_dong_ba'), hn = P(meta, 'cua_hien_nhon');
    defs.push({
      id: 'citadel', name: 'Kinh thành – Đại Nội', color: '#e1b54a', speed: 22,
      desc: 'Nghênh Lương Đình, Phu Văn Lâu, bay vòng Kỳ Đài, rồi theo trục Ngọ Môn – Điện Thái Hòa – Tử Cấm Thành, ra Cửa Đông Ba.',
      steps: [
        { at: off(NL, dir(KD, NL), 230), h: 10 },
        { at: NL, h: 14, label: 'Nghênh Lương Đình' },
        { at: pv, h: 20, label: 'Phu Văn Lâu' },
        ...orbit,
        { at: nm, h: 30, label: 'Ngọ Môn' },
        { at: P(meta, 'thai_hoa'), h: 28, label: 'Điện Thái Hòa' },
        { at: P(meta, 'tu_cam_thanh'), h: 26, label: 'Tử Cấm Thành' },
        { at: P(meta, 'kien_trung'), h: 24, label: 'Điện Kiến Trung' },
        { at: P(meta, 'duyet_thi'), h: 24, label: 'Duyệt Thị Đường' },
        { at: hn, h: 26, label: 'Cửa Hiển Nhơn' },
        { at: db, h: 30, label: 'Cửa Đông Ba' },
        { at: off(db, dir(hn, db), 260), h: 120 },
      ],
    });
  }

  // 3. City streets on both banks
  const keys3 = ['ga_hue', 'quoc_hoc', 'phu_cam', 'vincom', 'cong_vien_3_2', 'cho_dong_ba', 'cau_gia_hoi'];
  if (keys3.every((k) => P(meta, k))) {
    const g = P(meta, 'ga_hue'), q = P(meta, 'quoc_hoc'), gh = P(meta, 'cau_gia_hoi'), cdb = P(meta, 'cho_dong_ba');
    defs.push({
      id: 'city', name: 'Phố hai bờ', color: '#e0785f', speed: 30,
      desc: 'Ga Huế, Trường Quốc Học, Nhà thờ Phủ Cam, Vincom, công viên ven sông, qua sông tới Chợ Đông Ba và Cầu Gia Hội.',
      steps: [
        { at: off(g, dir(q, g), 240), h: 30 },
        { at: g, h: 34, label: 'Ga Huế' },
        { at: q, h: 32, label: 'Trường Quốc Học' },
        { at: P(meta, 'phu_cam'), h: 40, label: 'Nhà thờ Phủ Cam' },
        { at: P(meta, 'vincom'), h: 46, label: 'Vincom Plaza Huế' },
        { at: P(meta, 'cong_vien_3_2'), h: 22, label: 'Công viên 3 Tháng 2' },
        { at: cdb, h: 30, label: 'Chợ Đông Ba' },
        { at: gh, h: 22, label: 'Cầu Gia Hội' },
        { at: off(gh, dir(cdb, gh), 280), h: 110 },
      ],
    });
  }
  return defs;
}

// ---------------------------------------------------------------------------- planner
function makeObstacles(world, meta) {
  const { solids, terrain: T, bridgeCol, tt } = world;
  const ring = [[0, 0]];
  for (let k = 0; k < 8; k++) ring.push([Math.cos(k * Math.PI / 4) * 12, Math.sin(k * Math.PI / 4) * 12]);
  const kd = meta.places && meta.places.ky_dai;
  return (x, z) => {
    let top = -Infinity;
    for (const [dx, dz] of ring) { const it = solids.pick(x + dx, z + dz); if (it && it.y1 > top) top = it.y1; }
    for (const d of bridgeCol.decks) {
      const ex = d.bx - d.ax, ez = d.bz - d.az, l2 = ex * ex + ez * ez || 1;
      let t = ((x - d.ax) * ex + (z - d.az) * ez) / l2; t = Math.max(0, Math.min(1, t));
      const q = Math.hypot(d.ax + ex * t - x, d.az + ez * t - z);
      if (q < d.halfW + 12 && d.yTop > top) top = d.yTop;
    }
    if (tt) {   // Trường Tiền arches rise ~9 m above the deck
      const s = (x - tt.ax) * tt.ux + (z - tt.az) * tt.uz, c = Math.abs((x - tt.ax) * tt.vx + (z - tt.az) * tt.vz);
      if (s > -10 && s < tt.L + 10 && c < 16) top = Math.max(top, tt.deckY + 9.5);
    }
    if (kd && Math.hypot(x - kd.x, z - kd.z) < 14) top = Math.max(top, (kd.ground || 0) + 17.5 + 37 + 1);   // Kỳ Đài flagpole
    const w = T.waterLevel(x, z), g = T.height(x, z);
    const surf = Number.isNaN(w) ? g : w;
    return { surf, wet: !Number.isNaN(w), top };
  };
}

/** Move a point onto open water: the water cell within 300 m that is farthest from the banks (nearer is better). */
function snapToWater(T, x, z) {
  let best = null, bestScore = -Infinity;
  const isWet = (px, pz) => !Number.isNaN(T.waterLevel(px, pz));
  for (let dx = -300; dx <= 300; dx += 12) for (let dz = -300; dz <= 300; dz += 12) {
    const px = x + dx, pz = z + dz;
    if (!isWet(px, pz)) continue;
    let bank = 150;
    for (let k = 0; k < 8 && bank > 0; k++) {
      const ca = Math.cos(k * Math.PI / 4), sa = Math.sin(k * Math.PI / 4);
      for (let r = 10; r < bank; r += 10) if (!isWet(px + ca * r, pz + sa * r)) { bank = r; break; }
    }
    const score = bank - 0.35 * Math.hypot(dx, dz);
    if (score > bestScore) { bestScore = score; best = { x: px, z: pz }; }
  }
  return best || { x, z };
}

export function planRoute(def, world, meta) {
  const T = world.terrain, obst = makeObstacles(world, meta);
  const wps = def.steps.map((s) => {
    const p = s.river ? snapToWater(T, s.at.x, s.at.z) : s.at;
    const o = obst(p.x, p.z);
    return { x: p.x, z: p.z, y: o.surf + s.h, label: s.label };
  });
  const base = new THREE.CatmullRomCurve3(wps.map((w) => new THREE.Vector3(w.x, w.y, w.z)), false, 'centripetal');
  const n = Math.max(20, Math.ceil(base.getLength() / STEP));
  const pts = base.getSpacedPoints(n);
  const floor = pts.map((p) => {
    const o = obst(p.x, p.z);
    return Math.max(o.surf + (o.wet ? CLEAR_WATER : CLEAR_LAND), o.top + CLEAR_OBST);
  });
  const ds = base.getLength() / n;
  let y = pts.map((p, i) => Math.max(p.y, floor[i]));
  const slope = () => {
    for (let i = n - 1; i >= 0; i--) if (i < n) y[i] = Math.max(y[i], y[i + 1] - GRADE * ds);   // climb before obstacles
    for (let i = 1; i <= n; i++) y[i] = Math.max(y[i], y[i - 1] - GRADE * ds);                 // descend gently after them
  };
  slope();
  for (let pass = 0; pass < 4; pass++) {
    y = y.map((v, i) => (i === 0 || i === n ? v : 0.25 * y[i - 1] + 0.5 * v + 0.25 * y[i + 1]));
    y = y.map((v, i) => Math.max(v, floor[i]));
    slope();
  }
  const keep = [];
  for (let i = 0; i <= n; i += 3) keep.push(new THREE.Vector3(pts[i].x, y[i], pts[i].z));
  if (keep[keep.length - 1].distanceTo(pts[n]) > 1) keep.push(new THREE.Vector3(pts[n].x, y[n], pts[n].z));
  return finish(def, keep, wps);
}

function finish(def, points, wps) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
  const length = curve.getLength();
  const samples = curve.getSpacedPoints(Math.ceil(length / 10));
  // waypoint labels -> fraction of the path (nearest sample)
  const labels = [];
  for (const w of wps) {
    if (!w.label) continue;
    let bi = 0, bd = Infinity;
    samples.forEach((p, i) => { const d = Math.hypot(p.x - w.x, p.z - w.z); if (d < bd) { bd = d; bi = i; } });
    labels.push({ name: w.label, u: bi / (samples.length - 1), x: w.x, z: w.z, y: samples[bi].y });
  }
  labels.sort((a, b) => a.u - b.u);
  // flight time with the UAV's slow-down for low passes over water (see Uav.update)
  let seconds = 0;
  for (let i = 1; i < samples.length; i++) seconds += samples[i].distanceTo(samples[i - 1]) / def.speed;
  return { ...def, points, curve, length, labels, seconds, minY: Math.min(...samples.map((p) => p.y)), maxY: Math.max(...samples.map((p) => p.y)) };
}

/** The original hand-made pass under Cầu Trường Tiền, wrapped as a route. */
export function underBridgeRoute(tt, T) {
  const pts = truongTienPath(tt, T);
  const def = { id: 'under', name: 'Luồn dưới cầu Trường Tiền', color: '#9fd27f', speed: 17, desc: 'Hạ sát mặt sông, chạm nước, luồn qua nhịp 3 rồi vòng lại qua nhịp 4.' };
  const c = { x: tt.ax + tt.ux * tt.S * 3, z: tt.az + tt.uz * tt.S * 3 };
  return finish(def, pts, [{ ...c, label: 'Gầm cầu Trường Tiền – nhịp 3' }, { x: tt.ax + tt.ux * tt.S * 3.5, z: tt.az + tt.uz * tt.S * 3.5, label: 'Gầm cầu – nhịp 4' }]);
}

/** Visible path (tube + always-on-top line) and waypoint beads for a planned route. */
export function routeMesh(route) {
  const g = new THREE.Group(); g.name = `route-${route.id}`;
  const tube = new THREE.Mesh(new THREE.TubeGeometry(route.curve, Math.max(40, Math.ceil(route.length / 8)), 11, 8, false),
    new THREE.MeshBasicMaterial({ color: route.color, transparent: true, opacity: 0.85, depthWrite: false }));
  tube.renderOrder = 3; g.add(tube);
  // thin line drawn over everything so the path stays readable where buildings hide the tube
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(route.curve.getSpacedPoints(Math.ceil(route.length / 10))),
    new THREE.LineBasicMaterial({ color: route.color, transparent: true, opacity: 0.9, depthTest: false }));
  line.renderOrder = 6; g.add(line);
  const beads = new THREE.Group();
  const bead = new THREE.SphereGeometry(13, 16, 12);
  for (const l of route.labels) {
    const m = new THREE.Mesh(bead, new THREE.MeshBasicMaterial({ color: route.color }));
    m.position.set(l.x, l.y, l.z); beads.add(m);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 1, 6), new THREE.MeshBasicMaterial({ color: route.color, transparent: true, opacity: 0.55 }));
    stem.scale.y = Math.max(1, l.y - 2); stem.position.set(l.x, l.y / 2 + 1, l.z); beads.add(stem);
  }
  g.add(beads);
  g.userData = { tube, line, beads };
  return g;
}

export { Solids };
