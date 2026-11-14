// Scene construction from demo/data/*.json. All geometry is generated here from the
// compact arrays written by scripts/11_build_demo_data.py. Units: metres, y up.
import * as THREE from 'three';

const DM = 0.1;

// ---------------------------------------------------------------------------- terrain
export class Terrain {
  constructor(t) {
    this.nx = t.nx; this.nz = t.nz; this.cell = t.cell; this.x0 = t.x0; this.z0 = t.z0;
    this.h = new Float32Array(t.h.length);
    this.wl = new Float32Array(t.wl.length);
    for (let i = 0; i < t.h.length; i++) {
      this.h[i] = t.h[i] * DM;
      this.wl[i] = t.wl[i] <= -9999 ? NaN : t.wl[i] * DM;
    }
    this.lc = Uint8Array.from(t.lc);
    this.xmax = this.x0 + (this.nx - 1) * this.cell;
    this.zmax = this.z0 + (this.nz - 1) * this.cell;
  }

  height(x, z) {
    const fx = Math.min(Math.max((x - this.x0) / this.cell, 0), this.nx - 1.001);
    const fz = Math.min(Math.max((z - this.z0) / this.cell, 0), this.nz - 1.001);
    const i = Math.floor(fx), j = Math.floor(fz), tx = fx - i, tz = fz - j;
    const k = j * this.nx + i, h = this.h;
    return h[k] * (1 - tx) * (1 - tz) + h[k + 1] * tx * (1 - tz) + h[k + this.nx] * (1 - tx) * tz + h[k + this.nx + 1] * tx * tz;
  }

  /** Water surface elevation at (x,z), or NaN when the point is dry land. */
  waterLevel(x, z) {
    const i = Math.round((x - this.x0) / this.cell), j = Math.round((z - this.z0) / this.cell);
    if (i < 0 || j < 0 || i >= this.nx || j >= this.nz) return NaN;
    const lvl = this.wl[j * this.nx + i];
    return lvl > this.height(x, z) ? lvl : NaN;
  }

  /** Highest of ground and water at (x,z). */
  surface(x, z) {
    const g = this.height(x, z), w = this.waterLevel(x, z);
    return w > g ? w : g;
  }
}

// value noise + fbm used for ground grain and roof/wall detail (cheap, no textures)
const NOISE_GLSL = `
float hz_h(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float hz_n(vec2 p){ vec2 i = mod(floor(p), 289.0), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);   // small hash inputs keep float precision
  return mix(mix(hz_h(i), hz_h(i + vec2(1, 0)), u.x), mix(hz_h(i + vec2(0, 1)), hz_h(i + vec2(1, 1)), u.x), u.y); }
float hz_fbm(vec2 p){ float a = 0.5, v = 0.0; for (int k = 0; k < 4; k++) { v += a * hz_n(p); p *= 2.03; a *= 0.5; } return v; }
`;

const LC_COLOR = {
  10: [0.34, 0.50, 0.28], 20: [0.47, 0.58, 0.36], 30: [0.52, 0.64, 0.40], 40: [0.62, 0.68, 0.42],
  50: [0.74, 0.71, 0.65], 60: [0.74, 0.67, 0.56], 80: [0.50, 0.52, 0.44], 90: [0.45, 0.58, 0.45], 95: [0.40, 0.55, 0.42],
};

export function buildTerrainMesh(T, photo) {
  const { nx, nz, cell } = T;
  const pos = new Float32Array(nx * nz * 3), col = new Float32Array(nx * nz * 3), uv = new Float32Array(nx * nz * 2);
  const tint = new Float32Array(nx * nz * 3);   // vertex colours used on top of the photo (river bed darkening only)
  const raw = new Float32Array(nx * nz * 3);
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const k = j * nx + i;
    pos[k * 3] = T.x0 + i * cell; pos[k * 3 + 1] = T.h[k]; pos[k * 3 + 2] = T.z0 + j * cell;
    uv[k * 2] = i / (nx - 1); uv[k * 2 + 1] = 1 - j / (nz - 1);   // image row 0 is the north edge (z0)
    const c = LC_COLOR[T.lc[k]] || LC_COLOR[50];   // palette is written in sRGB; vertex colours are linear
    raw[k * 3] = c[0] ** 2.2; raw[k * 3 + 1] = c[1] ** 2.2; raw[k * 3 + 2] = c[2] ** 2.2;
  }
  // 3x3 blur of land-cover colours + a little deterministic grain so the ground does not look like flat paint
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    let r = 0, g = 0, b = 0, n = 0;
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      const ii = i + di, jj = j + dj;
      if (ii < 0 || jj < 0 || ii >= nx || jj >= nz) continue;
      const q = (jj * nx + ii) * 3; r += raw[q]; g += raw[q + 1]; b += raw[q + 2]; n++;
    }
    const k = j * nx + i;
    const grain = 0.94 + 0.12 * (((i * 73856093) ^ (j * 19349663)) >>> 0) % 1000 / 1000;
    const wet = !Number.isNaN(T.wl[k]) && T.wl[k] > T.h[k] ? 0.72 : 1;   // darker river bed
    col[k * 3] = r / n * grain * wet; col[k * 3 + 1] = g / n * grain * wet; col[k * 3 + 2] = b / n * grain * wet;
    tint[k * 3] = tint[k * 3 + 1] = tint[k * 3 + 2] = wet;
  }
  const idx = new Uint32Array((nx - 1) * (nz - 1) * 6);
  let p = 0;
  for (let j = 0; j < nz - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
    idx[p++] = a; idx[p++] = c; idx[p++] = b; idx[p++] = b; idx[p++] = c; idx[p++] = d;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const colAttr = new THREE.BufferAttribute(photo ? tint : col, 3);
  g.setAttribute('color', colAttr);
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true, map: photo || null });
  // close-up grain so the 4 m photo does not look like a blurred print when flying low; fades out with distance
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vTerrW;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvTerrW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vTerrW;' + NOISE_GLSL)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float tDist = length(cameraPosition - vTerrW);
        float tFade = 1.0 - smoothstep(120.0, 900.0, tDist);
        vec2 tl = mod(vTerrW.xz, 600.0);
        float tg = hz_fbm(tl * 0.45) * 0.7 + hz_n(tl * 2.7) * 0.3;
        diffuseColor.rgb *= 1.0 + (tg - 0.5) * 0.22 * tFade;`);
  };
  const mesh = new THREE.Mesh(g, mat);
  mesh.name = 'terrain';
  mesh.receiveShadow = true;
  /** 'photo' = Sentinel-2 image, 'landcover' = ESA WorldCover colours */
  mesh.userData.setMode = (mode) => {
    const usePhoto = mode === 'photo' && !!photo;
    colAttr.array.set(usePhoto ? tint : col); colAttr.needsUpdate = true;
    mat.map = usePhoto ? photo : null; mat.needsUpdate = true;
  };
  return mesh;
}

// ---------------------------------------------------------------------------- polygon helpers
function ringToVec2(flat, scale = DM) {
  const out = [];
  for (let i = 0; i < flat.length; i += 2) out.push(new THREE.Vector2(flat[i] * scale, flat[i + 1] * scale));
  return out;
}

function signedArea(pts) {
  let a = 0;
  for (let i = 0, n = pts.length; i < n; i++) { const p = pts[i], q = pts[(i + 1) % n]; a += p.x * q.y - q.x * p.y; }
  return a / 2;
}

/** Growable mesh builder for small layers (walls, landmarks, piers). */
class Builder {
  constructor() { this.pos = []; this.nor = []; this.col = []; this.idx = []; }

  /** Extrude polygon (outer ring + holes, Vector2 in x/z) between y0 and y1. */
  extrude(rings, y0, y1, wallCol, topCol) {
    const [outer, ...holes] = rings;
    const base = this.pos.length / 3;
    const all = outer.concat(...holes);
    for (const v of all) { this.pos.push(v.x, y1, v.y); this.nor.push(0, 1, 0); this.col.push(topCol.r, topCol.g, topCol.b); }
    for (const f of THREE.ShapeUtils.triangulateShape(outer, holes)) {
      const [a, b, c] = f.map((i) => all[i]);
      const up = (b.y - a.y) * (c.x - a.x) - (b.x - a.x) * (c.y - a.y);      // y component of (b-a)x(c-a) in x/z space
      if (up >= 0) this.idx.push(base + f[0], base + f[1], base + f[2]); else this.idx.push(base + f[0], base + f[2], base + f[1]);
    }
    rings.forEach((ring, k) => this.walls(ring, y0, y1, wallCol, k > 0));
  }

  walls(ring, y0, y1, c, isHole = false) {
    const n = ring.length;
    // positive signed area in (x, z) = interior on the left of each edge = outward normal (dz, -dx); holes face the other way
    const flip = (signedArea(ring) > 0) === isHole;
    for (let i = 0; i < n; i++) {
      const p = ring[i], q = ring[(i + 1) % n];
      const dx = q.x - p.x, dz = q.y - p.y, len = Math.hypot(dx, dz) || 1;
      let nxn = dz / len, nzn = -dx / len;
      if (flip) { nxn = -nxn; nzn = -nzn; }
      const b = this.pos.length / 3;
      this.pos.push(p.x, y0, p.y, q.x, y0, q.y, q.x, y1, q.y, p.x, y1, p.y);
      for (let k = 0; k < 4; k++) { this.nor.push(nxn, 0, nzn); const s = k < 2 ? 0.78 : 1; this.col.push(c.r * s, c.g * s, c.b * s); }
      // triangle (b, b+1, b+2) has geometric normal (-dz, 0, dx): pick the winding that agrees with the outward normal
      if (-dz * nxn + dx * nzn > 0) this.idx.push(b, b + 1, b + 2, b, b + 2, b + 3); else this.idx.push(b, b + 2, b + 1, b, b + 3, b + 2);
    }
  }

  /** Oriented box given centre, half sizes, yaw axis (ux, uz) and vertical range. */
  box(cx, cz, ux, uz, halfL, halfW, y0, y1, c) {
    const vx = -uz, vz = ux;
    const ring = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => new THREE.Vector2(cx + ux * halfL * a + vx * halfW * b, cz + uz * halfL * a + vz * halfW * b));
    this.extrude([ring], y0, y1, c, c);
  }

  mesh(material) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setIndex(this.idx);
    return new THREE.Mesh(g, material || new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, shadowSide: THREE.BackSide }));
  }
}

function scaleRing(ring, s) {
  let cx = 0, cz = 0;
  for (const p of ring) { cx += p.x; cz += p.y; }
  cx /= ring.length; cz /= ring.length;
  return ring.map((p) => new THREE.Vector2(cx + (p.x - cx) * s, cz + (p.y - cz) * s));
}

// ---------------------------------------------------------------------------- collision solids
/** Prisms (polygon footprint x vertical range) in a uniform grid; used for collisions and picking. */
export class Solids {
  constructor(cell = 32) { this.cell = cell; this.map = new Map(); this.items = []; }

  add(rings, y0, y1, info) {
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    const outer = rings[0];
    for (let i = 0; i < outer.length; i += 2) { x0 = Math.min(x0, outer[i]); x1 = Math.max(x1, outer[i]); z0 = Math.min(z0, outer[i + 1]); z1 = Math.max(z1, outer[i + 1]); }
    const id = this.items.length;
    this.items.push({ rings, y0, y1, info });
    const c = this.cell;
    for (let i = Math.floor(x0 / c); i <= Math.floor(x1 / c); i++) for (let j = Math.floor(z0 / c); j <= Math.floor(z1 / c); j++) {
      const key = i * 100003 + j;
      let a = this.map.get(key); if (!a) { a = []; this.map.set(key, a); }
      a.push(id);
    }
    return id;
  }

  static inRing(r, x, z) {
    let inside = false;
    for (let i = 0, n = r.length, j = n - 2; i < n; j = i, i += 2) {
      const xi = r[i], zi = r[i + 1], xj = r[j], zj = r[j + 1];
      if ((zi > z) !== (zj > z) && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
    }
    return inside;
  }

  static inside(item, x, z) {
    if (!Solids.inRing(item.rings[0], x, z)) return false;
    for (let k = 1; k < item.rings.length; k++) if (Solids.inRing(item.rings[k], x, z)) return false;
    return true;
  }

  /** Topmost solid whose footprint contains (x,z); null if none. */
  pick(x, z) {
    const a = this.map.get(Math.floor(x / this.cell) * 100003 + Math.floor(z / this.cell));
    if (!a) return null;
    let best = null;
    for (const id of a) { const it = this.items[id]; if (Solids.inside(it, x, z) && (!best || it.y1 > best.y1)) best = it; }
    return best;
  }

  /** True when a sphere of radius r at (x,y,z) touches a solid (footprint test at 5 points). */
  hit(x, y, z, r) {
    const pts = [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r]];
    for (const [dx, dz] of pts) {
      const a = this.map.get(Math.floor((x + dx) / this.cell) * 100003 + Math.floor((z + dz) / this.cell));
      if (!a) continue;
      for (const id of a) {
        const it = this.items[id];
        if (y - r < it.y1 && y + r > it.y0 && Solids.inside(it, x + dx, z + dz)) return it;
      }
    }
    return null;
  }
}

// ---------------------------------------------------------------------------- water
export function buildWater(waterData, env) {
  const pos = [], idx = [];
  for (const w of waterData) {
    const rings = w.rings.map((r) => ringToVec2(r));
    const all = rings[0].concat(...rings.slice(1));
    const base = pos.length / 3, y = w.y * DM;
    for (const v of all) pos.push(v.x, y, v.y);
    for (const f of THREE.ShapeUtils.triangulateShape(rings[0], rings.slice(1))) idx.push(base + f[0], base + f[1], base + f[2]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  const mat = new THREE.ShaderMaterial({
    transparent: true, side: THREE.DoubleSide, depthWrite: false,
    uniforms: {
      uTime: { value: 0 }, uDeep: { value: new THREE.Color('#2f6f73') }, uShallow: { value: new THREE.Color('#5fa39a') },
      uSky: { value: env.skyColor.clone() }, uSun: { value: new THREE.Color('#fff2d0') }, uSunDir: { value: env.sunDir.clone() },
      uFogColor: { value: env.fogColor.clone() }, uFogNear: { value: env.fogNear }, uFogFar: { value: env.fogFar },
    },
    vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      uniform float uTime, uFogNear, uFogFar; uniform vec3 uDeep, uShallow, uSky, uSun, uSunDir, uFogColor; varying vec3 vW;
      float hgt(vec2 p){ return sin(p.x*0.21+uTime*1.1)*0.5 + sin(p.y*0.17-uTime*0.9)*0.5 + sin((p.x+p.y)*0.43+uTime*1.7)*0.25 + sin((p.x-p.y)*0.71-uTime*2.3)*0.12; }
      void main(){
        vec2 p = vW.xz; float e = 0.35;
        float hx = hgt(p + vec2(e, 0.0)) - hgt(p - vec2(e, 0.0)); float hz = hgt(p + vec2(0.0, e)) - hgt(p - vec2(0.0, e));
        vec3 n = normalize(vec3(-hx * 0.22, 1.0, -hz * 0.22));
        vec3 v = normalize(cameraPosition - vW);
        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        vec3 col = mix(uDeep, uShallow, 0.4 + 0.3 * n.x);
        col = mix(col, uSky, clamp(fres * 0.8 + 0.06, 0.0, 1.0));
        float spec = pow(max(dot(reflect(-uSunDir, n), v), 0.0), 80.0);
        col += uSun * spec * 0.55;
        float f = smoothstep(uFogNear, uFogFar, length(cameraPosition - vW));
        gl_FragColor = vec4(mix(col, uFogColor, f), 0.94);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(g, mat);
  mesh.name = 'water'; mesh.renderOrder = 2;
  return mesh;
}

// ---------------------------------------------------------------------------- ribbons (roads, decks)
/** Flat ribbon along pts [x,z,y,...]; returns arrays to append to a merged geometry. */
function ribbon(out, pts, width, yOff, scale = DM) {
  const n = pts.length / 3;
  if (n < 2) return;
  const base = out.pos.length / 3, hw = width / 2;
  for (let i = 0; i < n; i++) {
    const x = pts[i * 3] * scale, z = pts[i * 3 + 1] * scale, y = pts[i * 3 + 2] * scale;
    const a = Math.max(i - 1, 0), b = Math.min(i + 1, n - 1);
    let dx = (pts[b * 3] - pts[a * 3]) * scale, dz = (pts[b * 3 + 1] - pts[a * 3 + 1]) * scale;
    const len = Math.hypot(dx, dz) || 1; dx /= len; dz /= len;
    out.pos.push(x - dz * hw, y + yOff, z + dx * hw, x + dz * hw, y + yOff, z - dx * hw);
    out.nor.push(0, 1, 0, 0, 1, 0);
    if (i < n - 1) { const k = base + i * 2; out.idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3); }   // wound to face up
  }
}

function ribbonMesh(out, color, extra = {}) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(out.pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(out.nor, 3));
  g.setIndex(out.idx);
  return new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3, ...extra }));
}

const ROAD_STYLE = [  // group -> colour, y offset
  ['#565a61', 0.34], ['#666a70', 0.28], ['#777a7e', 0.22], ['#c7bfae', 0.16], ['#5a4a3c', 0.24],
];

export function buildRoads(roads) {
  const group = new THREE.Group(); group.name = 'roads';
  const outs = ROAD_STYLE.map(() => ({ pos: [], nor: [], idx: [] }));
  const lines = { pos: [], nor: [], idx: [] };
  for (const r of roads) {
    ribbon(outs[r.g], r.p, r.w, ROAD_STYLE[r.g][1]);
    if (r.g === 0 && r.w >= 9) ribbon(lines, r.p, 0.25, ROAD_STYLE[0][1] + 0.05);
  }
  outs.forEach((o, i) => { if (o.pos.length) group.add(ribbonMesh(o, ROAD_STYLE[i][0])); });
  if (lines.pos.length) group.add(ribbonMesh(lines, '#e6dfc8', { polygonOffsetFactor: -5, polygonOffsetUnits: -5 }));
  return group;
}

// ---------------------------------------------------------------------------- bridges
const DECK = { road: { th: 1.2, col: '#5d6168', side: '#8d9096' }, rail: { th: 1.4, col: '#5a4a3c', side: '#6f6a64' }, foot: { th: 0.45, col: '#a58e6d', side: '#8a7658' } };

export function buildBridges(bridges, T, meta) {
  const group = new THREE.Group(); group.name = 'bridges';
  const tops = { road: { pos: [], nor: [], idx: [] }, rail: { pos: [], nor: [], idx: [] }, foot: { pos: [], nor: [], idx: [] } };
  const body = new Builder();
  const decks = [];   // collision: {ax,az,bx,bz,halfW,yTop,yBot}
  const piers = [];   // collision: {cx,cz,ux,uz,halfL,halfW,y0,y1}
  const pierCol = new THREE.Color('#9a958c'), railCol = new THREE.Color('#c9cbd0');

  const addPier = (cx, cz, ux, uz, halfL, halfW, yTop) => {
    const y0 = T.height(cx, cz) - 1.0;
    if (yTop - y0 < 1.5) return;
    body.box(cx, cz, ux, uz, halfL, halfW, y0, yTop, pierCol);
    piers.push({ cx, cz, ux, uz, halfL, halfW, y0, y1: yTop });
  };

  for (const b of bridges) {
    for (const w of b.ways) {
      const st = DECK[w.kind], p = w.pts, n = p.length / 3, hw = w.width / 2;
      ribbon(tops[w.kind], p, w.width, 0.3);
      const sideCol = new THREE.Color(st.side);
      let run = 0, nextPier = 19;
      for (let i = 0; i < n - 1; i++) {
        const ax = p[i * 3] * DM, az = p[i * 3 + 1] * DM, ay = p[i * 3 + 2] * DM + 0.3;
        const bx = p[i * 3 + 3] * DM, bz = p[i * 3 + 4] * DM, by = p[i * 3 + 5] * DM + 0.3;
        const dx = bx - ax, dz = bz - az, len = Math.hypot(dx, dz);
        if (len < 0.05) continue;
        const ux = dx / len, uz = dz / len, cx = (ax + bx) / 2, cz = (az + bz) / 2, y = (ay + by) / 2;
        // deck body (sides + underside) and low parapets
        body.box(cx, cz, ux, uz, len / 2 + 0.02, hw, y - st.th, y - 0.02, sideCol);
        if (w.kind !== 'rail') for (const s of [-1, 1]) body.box(cx - uz * s * (hw - 0.1), cz + ux * s * (hw - 0.1), ux, uz, len / 2, 0.1, y, y + 1.0, railCol);
        decks.push({ ax, az, bx, bz, halfW: hw, yTop: y + 1.0, yBot: y - st.th, name: b.name, len: b.len, special: b.special, kind: w.kind });
        // generic piers every ~38 m where the deck is well above water
        if (!b.special && !w.beside_truss && w.kind !== 'foot' && b.len >= 60) {
          run += len;
          if (run >= nextPier) {
            const wl = T.waterLevel(cx, cz);
            if (!Number.isNaN(wl) && y - st.th - wl > 2.5) addPier(cx, cz, ux, uz, 1.1, hw * 0.8, y - st.th);
            nextPier += 38;
          }
        }
      }
    }
  }

  // --- Cầu Trường Tiền: 6 equal spans, through-arch trusses (parametric illustration) ---
  const tt = meta.truong_tien;
  let truss = null, ttInfo = null;
  if (tt) {
    const ax = tt.ax, az = tt.az, bx = tt.bx, bz = tt.bz, L = Math.hypot(bx - ax, bz - az);
    const ux = (bx - ax) / L, uz = (bz - az) / L, vx = -uz, vz = ux;
    const deckY = tt.deck_y + 0.3, girder = 1.2, rise = 9.0, half = 3.5, spans = tt.spans, S = L / spans;
    for (let k = 0; k <= spans; k++) addPier(ax + ux * S * k, az + uz * S * k, ux, uz, 1.6, 7.6, deckY - girder);
    const segs = [];
    const P = (s, lat, y) => new THREE.Vector3(ax + ux * s + vx * lat, y, az + uz * s + vz * lat);
    const panels = 12;
    for (let k = 0; k < spans; k++) for (const side of [-half, half]) {
      let prev = null;
      for (let i = 0; i <= panels; i++) {
        const t = i / panels, s = S * (k + t), yTop = deckY + rise * 4 * t * (1 - t);
        const top = P(s, side, yTop);
        if (prev) segs.push([prev, top, 0.42]);
        if (i > 0 && i < panels) segs.push([P(s, side, deckY), top, 0.2]);
        if (side > 0 && i > 0 && i < panels && yTop - deckY > 5.2) segs.push([P(s, -half, yTop), top, 0.24]);
        prev = top;
      }
    }
    truss = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: '#b7bcc2' }), segs.length);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), d = new THREE.Vector3();
    segs.forEach(([a, b, th], i) => {
      d.subVectors(b, a); const len = d.length();
      q.setFromUnitVectors(up, d.normalize());
      m.compose(new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5), q, new THREE.Vector3(th, len, th));
      truss.setMatrixAt(i, m);
    });
    truss.name = 'truss';
    ttInfo = { ax, az, ux, uz, vx, vz, L, S, spans, deckY, underside: deckY - girder, water: tt.water_y };
  }

  (['road', 'rail', 'foot']).forEach((k) => { if (tops[k].pos.length) group.add(ribbonMesh(tops[k], DECK[k].col, { polygonOffsetFactor: -1, polygonOffsetUnits: -1 })); });
  group.add(body.mesh());
  if (truss) group.add(truss);
  return { group, decks, piers, ttInfo };
}

/** Sphere vs bridge decks and piers. */
export function hitBridges(col, x, y, z, r) {
  for (const d of col.decks) {
    if (y - r > d.yTop || y + r < d.yBot) continue;
    const dx = d.bx - d.ax, dz = d.bz - d.az, l2 = dx * dx + dz * dz;
    let t = ((x - d.ax) * dx + (z - d.az) * dz) / l2; t = Math.max(0, Math.min(1, t));
    const px = d.ax + dx * t - x, pz = d.az + dz * t - z;
    if (px * px + pz * pz < (d.halfW + r) * (d.halfW + r)) return 'deck';
  }
  for (const p of col.piers) {
    if (y - r > p.y1 || y + r < p.y0) continue;
    const dx = x - p.cx, dz = z - p.cz;
    const a = dx * p.ux + dz * p.uz, b = -dx * p.uz + dz * p.ux;
    if (Math.abs(a) < p.halfL + r && Math.abs(b) < p.halfW + r) return 'pier';
  }
  return null;
}

// ---------------------------------------------------------------------------- buildings
const WALLS = ['#e8e0cd', '#e2d2b2', '#d8cab0', '#efe8d9', '#cdc5b6', '#e5d6a9', '#dcc9b4'].map((c) => new THREE.Color(c));
const ROOFS = ['#a5553b', '#b1654a', '#9a4f3b', '#a85f45', '#8d8882', '#7a848d', '#b06a4e'].map((c) => new THREE.Color(c));
const SRC_COL = ['#3f86b3', '#e2a23a', '#9b6fc2'].map((c) => new THREE.Color(c));      // OSM, Google, Microsoft
const HS_COL = ['#3f9c6b', '#e2a23a', '#c0564b'].map((c) => new THREE.Color(c));       // tag, ML estimate, default
export const SRC_NAME = ['OpenStreetMap (vẽ tay)', 'Google Open Buildings (học máy)', 'Microsoft ML Buildings (học máy)'];
export const HS_NAME = ['Thẻ OSM (chiều cao/số tầng)', 'Ước lượng học máy — Open Buildings 2.5D', 'Mặc định 4,5 m (không có dữ liệu)'];

export function buildBuildings(B, solids, tilesPerSide = 6, bounds) {
  const group = new THREE.Group(); group.name = 'buildings';
  const nB = B.n.length;
  const xz = new Float32Array(B.xz.length);
  for (let i = 0; i < xz.length; i++) xz[i] = B.xz[i] * DM;
  const off = new Uint32Array(nB + 1);
  for (let i = 0; i < nB; i++) off[i + 1] = off[i] + B.n[i] * 2;
  const tw = (bounds.xmax - bounds.xmin) / tilesPerSide, th = (bounds.zmax - bounds.zmin) / tilesPerSide;
  const tileOf = new Uint16Array(nB), vCount = new Uint32Array(tilesPerSide * tilesPerSide), iCount = new Uint32Array(tilesPerSide * tilesPerSide);
  for (let i = 0; i < nB; i++) {
    const n = B.n[i];
    let cx = 0, cz = 0;
    for (let k = off[i]; k < off[i + 1]; k += 2) { cx += xz[k]; cz += xz[k + 1]; }
    cx /= n; cz /= n;
    const ti = Math.min(tilesPerSide - 1, Math.max(0, Math.floor((cx - bounds.xmin) / tw))), tj = Math.min(tilesPerSide - 1, Math.max(0, Math.floor((cz - bounds.zmin) / th)));
    const t = tj * tilesPerSide + ti; tileOf[i] = t;
    vCount[t] += 5 * n; iCount[t] += 6 * n + 3 * (n - 2);
  }
  const tiles = [];
  for (let t = 0; t < vCount.length; t++) {
    tiles.push(vCount[t] ? { pos: new Float32Array(vCount[t] * 3), nor: new Int8Array(vCount[t] * 3), col: new Uint8Array(vCount[t] * 3), bt: new Int16Array(vCount[t] * 2), su: new Float32Array(vCount[t]), idx: new Uint32Array(iCount[t]), v: 0, i: 0, ranges: [] } : null);
  }
  const contour = [];
  for (let i = 0; i < nB; i++) {
    const T = tiles[tileOf[i]], n = B.n[i], y0 = B.base[i] * DM, y1 = y0 + B.h[i] * DM;
    const ring = xz.subarray(off[i], off[i + 1]);
    contour.length = 0;
    for (let k = 0; k < n; k++) contour.push(new THREE.Vector2(ring[k * 2], ring[k * 2 + 1]));
    const ccw = signedArea(contour) > 0;
    const v0 = T.v;
    const b0 = Math.round(y0 * 10), b1 = Math.round(y1 * 10);
    // roof
    for (let k = 0; k < n; k++) { const q = T.v * 3; T.pos[q] = ring[k * 2]; T.pos[q + 1] = y1; T.pos[q + 2] = ring[k * 2 + 1]; T.nor[q + 1] = 127; T.bt[T.v * 2] = b0; T.bt[T.v * 2 + 1] = b1; T.v++; }
    for (const f of THREE.ShapeUtils.triangulateShape(contour, [])) {
      const a = contour[f[0]], b = contour[f[1]], c = contour[f[2]];
      const upw = (b.y - a.y) * (c.x - a.x) - (b.x - a.x) * (c.y - a.y);
      T.idx[T.i++] = v0 + f[0]; T.idx[T.i++] = v0 + (upw >= 0 ? f[1] : f[2]); T.idx[T.i++] = v0 + (upw >= 0 ? f[2] : f[1]);
    }
    // walls; su = metres along the building's perimeter, so facade patterns are computed in small local numbers
    let perim = 0;
    for (let k = 0; k < n; k++) {
      const px = ring[k * 2], pz = ring[k * 2 + 1], qx = ring[((k + 1) % n) * 2], qz = ring[((k + 1) % n) * 2 + 1];
      const dx = qx - px, dz = qz - pz, len = Math.hypot(dx, dz) || 1;
      let nxn = dz / len, nzn = -dx / len; if (!ccw) { nxn = -nxn; nzn = -nzn; }
      const b = T.v;
      const put = (x, y, z) => { const q = T.v * 3; T.pos[q] = x; T.pos[q + 1] = y; T.pos[q + 2] = z; T.nor[q] = Math.round(nxn * 127); T.nor[q + 2] = Math.round(nzn * 127); T.bt[T.v * 2] = b0; T.bt[T.v * 2 + 1] = b1; T.v++; };
      put(px, y0, pz); put(qx, y0, qz); put(qx, y1, qz); put(px, y1, pz);
      T.su[b] = perim; T.su[b + 1] = perim + len; T.su[b + 2] = perim + len; T.su[b + 3] = perim; perim += len;
      if (-dz * nxn + dx * nzn > 0) { T.idx[T.i++] = b; T.idx[T.i++] = b + 1; T.idx[T.i++] = b + 2; T.idx[T.i++] = b; T.idx[T.i++] = b + 2; T.idx[T.i++] = b + 3; } else { T.idx[T.i++] = b; T.idx[T.i++] = b + 2; T.idx[T.i++] = b + 1; T.idx[T.i++] = b; T.idx[T.i++] = b + 3; T.idx[T.i++] = b + 2; }
    }
    T.ranges.push(i, v0, n);
    solids.add([ring], y0, y1, { type: 'building', index: i });
  }
  const material = new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.FrontSide, shadowSide: THREE.BackSide });
  const detail = { value: 1 };
  // procedural facades: storeys of 3.3 m with windows, an open shop front on the ground floor (tube houses),
  // clay-tile rows on warm roofs, weathering on concrete roofs. Faded out with distance to avoid shimmer.
  material.onBeforeCompile = (sh) => {
    sh.uniforms.uDetail = detail;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute vec2 aBT; attribute float aSU;\nvarying vec3 vBW; varying vec3 vBN; varying vec2 vBT; varying float vSU;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBW = (modelMatrix * vec4(transformed, 1.0)).xyz; vBN = normal; vBT = aBT * 0.1; vSU = aSU;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uDetail; varying vec3 vBW; varying vec3 vBN; varying vec2 vBT; varying float vSU;' + NOISE_GLSL)
      .replace('#include <color_fragment>', `#include <color_fragment>
        if (uDetail > 0.5) {
          float bDist = length(cameraPosition - vBW);
          float near = 1.0 - smoothstep(350.0, 1400.0, bDist);
          vec3 n = normalize(vBN);
          // interpolated varyings wobble in the last bits; round to whole decimetres before hashing,
          // otherwise the high-frequency hash turns that wobble into per-pixel speckle
          vec2 btq = mod(floor(vBT * 10.0 + 0.5), 113.0);
          float seed = hz_h(btq * vec2(0.731, 0.379) + 0.21);
          if (abs(n.y) < 0.5) {
            float u = vSU + seed * 3.0;
            float h = vBW.y - vBT.x;
            float storey = 3.3, fy = fract(h / storey), fl = floor(h / storey);
            float bay = 2.6 + seed * 1.2, fx = fract(u / bay);
            float win = step(0.24, fx) * step(fx, 0.76) * step(0.34, fy) * step(fy, 0.84);
            if (fl < 1.0) win = step(0.06, fx) * step(fx, 0.94) * step(0.04, fy) * step(fy, 0.80) * 0.9;   // shop front
            win *= step(0.7, vBT.y - vBW.y);                                                        // nothing in the parapet
            win *= step(2.4, vBT.y - vBT.x);                                                        // sheds stay plain
            float lit = hz_h(vec2(floor(u / bay), fl) + seed);
            vec3 glass = mix(vec3(0.10, 0.13, 0.16), vec3(0.34, 0.42, 0.50), clamp(0.5 + 0.45 * n.x + 0.2 * lit, 0.0, 1.0));
            diffuseColor.rgb = mix(diffuseColor.rgb, glass, win * 0.9 * near);
            diffuseColor.rgb *= mix(0.86, 1.0, 1.0 - near);                                         // average window darkness far away
            diffuseColor.rgb *= 0.9 + 0.1 * smoothstep(0.0, 1.2, h);                                 // grime at street level
            diffuseColor.rgb *= 0.94 + 0.12 * hz_fbm(vec2(u * 0.3, vBW.y * 0.6));                   // plaster stains
          } else {
            float warm = step(diffuseColor.g * 1.25, diffuseColor.r);
            vec2 rl = mod(vBW.xz, 500.0);                                   // local roof coordinates
            float rows = smoothstep(0.0, 0.18, fract(rl.x * 2.6 + rl.y * 0.4)) * 0.18 + 0.82;
            float conc = 0.86 + 0.24 * hz_fbm(rl * 0.35);
            diffuseColor.rgb *= mix(conc, rows * (0.92 + 0.12 * hz_n(rl * 0.9)), warm) * mix(1.0, 0.96, near);
          }
        }`);
  };
  const meshes = [];
  for (const T of tiles) {
    if (!T) continue;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(T.pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(T.nor, 3, true));
    g.setAttribute('color', new THREE.BufferAttribute(T.col, 3, true));
    g.setAttribute('aBT', new THREE.BufferAttribute(T.bt, 2));
    g.setAttribute('aSU', new THREE.BufferAttribute(T.su, 1));
    g.setIndex(new THREE.BufferAttribute(T.idx.subarray(0, T.i), 1));
    g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, material);
    mesh.castShadow = true; mesh.receiveShadow = true;
    mesh.userData.ranges = T.ranges;
    meshes.push(mesh); group.add(mesh);
  }

  function recolor(mode) {
    detail.value = mode === 'natural' ? 1 : 0;   // data-colour modes stay flat so the legend colours read cleanly
    const c = new THREE.Color();
    for (const mesh of meshes) {
      const col = mesh.geometry.attributes.color.array, R = mesh.userData.ranges;
      for (let r = 0; r < R.length; r += 3) {
        const i = R[r], v0 = R[r + 1], n = R[r + 2];
        const hsh = (i * 2654435761) >>> 0;
        let wall, roof;
        if (mode === 'source') { wall = roof = SRC_COL[B.src[i]]; } else if (mode === 'height') { wall = roof = HS_COL[B.hs[i]]; } else { wall = WALLS[hsh % WALLS.length]; roof = ROOFS[(hsh >>> 8) % ROOFS.length]; }
        const put = (v, base, s) => { c.copy(base).multiplyScalar(s); col[v * 3] = Math.min(255, c.r * 255); col[v * 3 + 1] = Math.min(255, c.g * 255); col[v * 3 + 2] = Math.min(255, c.b * 255); };   // linear values
        const flat = mode !== 'natural';
        for (let k = 0; k < n; k++) put(v0 + k, roof, flat ? 1.0 : 0.95);
        for (let k = 0; k < n; k++) { const b = v0 + n + k * 4; put(b, wall, flat ? 0.62 : 0.74); put(b + 1, wall, flat ? 0.62 : 0.74); put(b + 2, wall, flat ? 0.8 : 1); put(b + 3, wall, flat ? 0.8 : 1); }
      }
      mesh.geometry.attributes.color.needsUpdate = true;
    }
  }
  recolor('natural');
  return { group, recolor };
}

// ---------------------------------------------------------------------------- citadel walls and landmark sketches
export function buildWalls(walls, solids) {
  const b = new Builder();
  const rampart = new THREE.Color('#8f8274'), rampartTop = new THREE.Color('#7f8f66'), inner = new THREE.Color('#a39382'), innerTop = new THREE.Color('#8c7d6e');
  for (const w of walls) {
    const rings = w.rings.map((r) => ringToVec2(r));
    const y0 = w.base * DM, y1 = y0 + w.h * DM;
    b.extrude(rings, y0, y1, w.kind === 'rampart' ? rampart : inner, w.kind === 'rampart' ? rampartTop : innerTop);
    solids.add(w.rings.map((r) => Float32Array.from(r, (v) => v * DM)), y0, y1, { type: 'wall', kind: w.kind });
  }
  const m = b.mesh(); m.name = 'walls';
  return m;
}

export function buildLandmarks(meta, solids) {
  const group = new THREE.Group(); group.name = 'landmarks';
  const b = new Builder();
  const L = meta.landmarks || {};
  const col = (c) => new THREE.Color(c);
  const tier = (ring, s, y0, y1, wall, top, info) => {
    const r = scaleRing(ring, s);
    b.extrude([r], y0, y1, col(wall), col(top));
    const flat = new Float32Array(r.length * 2); r.forEach((p, i) => { flat[i * 2] = p.x; flat[i * 2 + 1] = p.y; });
    solids.add([flat], y0, y1, info);
  };
  if (L.ky_dai) {       // three stepped terraces, total 17.5 m (published); tier split and flagpole footing are assumptions
    const ring = ringToVec2(L.ky_dai.ring), y = L.ky_dai.base * DM, info = { type: 'landmark', key: 'ky_dai', name: 'Kỳ Đài' };
    tier(ring, 1.0, y, y + 5.6, '#8b7d70', '#a39686', info);
    tier(ring, 0.8, y + 5.6, y + 11.4, '#8b7d70', '#a39686', info);
    tier(ring, 0.62, y + 11.4, y + 17.5, '#8b7d70', '#a39686', info);
    let cx = 0, cz = 0; ring.forEach((p) => { cx += p.x; cz += p.y; }); cx /= ring.length; cz /= ring.length;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.42, 37, 10), new THREE.MeshLambertMaterial({ color: '#d8d4c8' }));
    pole.position.set(cx, y + 17.5 + 18.5, cz); group.add(pole);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(9, 6), new THREE.MeshLambertMaterial({ color: '#d5262e', side: THREE.DoubleSide }));
    flag.position.set(cx + 4.7, y + 17.5 + 33.6, cz); group.add(flag);
    const star = new THREE.Mesh(new THREE.CircleGeometry(1.6, 5), new THREE.MeshBasicMaterial({ color: '#f6d743', side: THREE.DoubleSide }));
    star.position.set(cx + 4.7, y + 17.5 + 33.6, cz + 0.03); star.rotation.z = Math.PI / 2; group.add(star);
    const star2 = star.clone(); star2.position.z = cz - 0.03; group.add(star2);
    group.userData.flag = flag;
  }
  if (L.ngo_mon) {      // U-shaped base ~5 m (published) + two-storey pavilion (proportions assumed)
    const ring = ringToVec2(L.ngo_mon.ring), y = L.ngo_mon.base * DM, info = { type: 'landmark', key: 'ngo_mon', name: 'Ngọ Môn' };
    tier(ring, 1.0, y, y + 5.3, '#9a8a79', '#b0a391', info);
    tier(ring, 0.88, y + 5.3, y + 9.3, '#9b3d2d', '#9b3d2d', info);
    tier(ring, 1.0, y + 9.3, y + 10.0, '#c9982c', '#d4a63a', info);
    tier(ring, 0.7, y + 10.0, y + 12.4, '#9b3d2d', '#9b3d2d', info);
    tier(ring, 0.84, y + 12.4, y + 13.2, '#c9982c', '#d4a63a', info);
  }
  if (L.thai_hoa) {     // hall with double roof (heights assumed)
    const ring = ringToVec2(L.thai_hoa.ring), y = L.thai_hoa.base * DM, info = { type: 'landmark', key: 'thai_hoa', name: 'Điện Thái Hòa' };
    tier(ring, 1.04, y, y + 1.4, '#a79c8c', '#b9ae9e', info);
    tier(ring, 0.94, y + 1.4, y + 7.0, '#9b3d2d', '#9b3d2d', info);
    tier(ring, 1.06, y + 7.0, y + 7.8, '#c9982c', '#d4a63a', info);
    tier(ring, 0.78, y + 7.8, y + 10.0, '#9b3d2d', '#9b3d2d', info);
    tier(ring, 0.92, y + 10.0, y + 11.0, '#c9982c', '#d4a63a', info);
  }
  group.add(b.mesh());
  return group;
}

// ---------------------------------------------------------------------------- trees
export function buildTrees(tr) {
  const n = tr.x.length, group = new THREE.Group(); group.name = 'trees';
  const crownG = new THREE.IcosahedronGeometry(1, 1), trunkG = new THREE.CylinderGeometry(0.16, 0.24, 1, 5);
  // jitter crown vertices once so instances don't look like perfect balls
  { const pa = crownG.attributes.position;
    for (let i = 0; i < pa.count; i++) {
      const x = pa.getX(i), y = pa.getY(i), z = pa.getZ(i);
      const key = (Math.round(x * 1000) * 73856093) ^ (Math.round(y * 1000) * 19349663) ^ (Math.round(z * 1000) * 83492791);
      const f = 0.86 + 0.28 * ((key >>> 0) % 1000) / 1000;      // same position -> same factor, so faces stay joined
      pa.setXYZ(i, x * f, y * f, z * f);
    }
    crownG.computeVertexNormals(); }
  const crown = new THREE.InstancedMesh(crownG, new THREE.MeshLambertMaterial({ flatShading: true }), n);
  crown.castShadow = true; crown.receiveShadow = true;
  const trunk = new THREE.InstancedMesh(trunkG, new THREE.MeshLambertMaterial({ color: '#6b5544' }), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  for (let i = 0; i < n; i++) {
    const x = tr.x[i] * DM, z = tr.z[i] * DM, y = tr.y[i] * DM, h = tr.h[i] * DM;
    const hsh = ((i + 1) * 2654435761) >>> 0, r = h * (0.26 + (hsh % 100) / 700);
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), (hsh % 628) / 100);
    m.compose(new THREE.Vector3(x, y + h * 0.66, z), q, new THREE.Vector3(r, h * 0.36, r)); crown.setMatrixAt(i, m);
    m.compose(new THREE.Vector3(x, y + h * 0.2, z), q, new THREE.Vector3(1, h * 0.42, 1)); trunk.setMatrixAt(i, m);
    c.setHSL(0.27 + ((hsh >>> 8) % 100) / 1400, 0.38 + ((hsh >>> 16) % 100) / 500, 0.26 + ((hsh >>> 4) % 100) / 900);
    crown.setColorAt(i, c);
  }
  crown.instanceColor.needsUpdate = true;
  group.add(crown, trunk);
  return group;
}

// ---------------------------------------------------------------------------- sky
export function buildSky(env) {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { uTop: { value: new THREE.Color('#5e97d0') }, uHorizon: { value: env.fogColor.clone() }, uSunDir: { value: env.sunDir.clone() }, uSun: { value: new THREE.Color('#fff1cf') } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `uniform vec3 uTop, uHorizon, uSunDir, uSun; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float t = pow(clamp(d.y, 0.0, 1.0), 0.55);
        vec3 col = mix(uHorizon, uTop, t); float s = max(dot(d, uSunDir), 0.0);
        col += uSun * (pow(s, 400.0) * 1.2 + pow(s, 12.0) * 0.18);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(11000, 24, 16), mat);
  sky.name = 'sky'; sky.renderOrder = -1;
  return sky;
}
