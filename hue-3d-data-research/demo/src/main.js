// Huế 3D pilot — browser demo. Explore mode (map controls), manual UAV flight, scripted pass under Cầu Trường Tiền.
import * as THREE from 'three';
import { MapControls } from 'three/examples/jsm/controls/MapControls.js';
import {
  Terrain, Solids, buildTerrainMesh, buildWater, buildRoads, buildBridges, buildBuildings,
  buildWalls, buildLandmarks, buildTrees, buildSky, SRC_NAME, HS_NAME,
} from './world.js';
import { WaterFx } from './fx.js';
import { Uav, Input, truongTienPath, ACTION_NAME } from './uav.js';
import { RotorSound } from './audio.js';
import { routeDefs, planRoute, underBridgeRoute, routeMesh } from './routes.js';

const $ = (id) => document.getElementById(id);
const fmt = (v, d = 1) => (Number.isFinite(v) ? v.toLocaleString('vi-VN', { minimumFractionDigits: d, maximumFractionDigits: d }) : '—');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function status(msg) { const el = $('loading-step'); if (el) el.textContent = msg; }

async function loadJson(name, label) {
  status(`Đang tải ${label}…`);
  const r = await fetch(`data/${name}.json`);
  if (!r.ok) throw new Error(`Không tải được data/${name}.json (HTTP ${r.status})`);
  return r.json();
}

async function main() {
  const meta = await loadJson('meta', 'thông tin cảnh');
  const [terrainD, waterD, roadsD, bridgesD, buildingsD, wallsD, treesD] = [
    await loadJson('terrain', 'địa hình'), await loadJson('water', 'mặt nước'), await loadJson('roads', 'đường'),
    await loadJson('bridges', 'cầu'), await loadJson('buildings', 'công trình'), await loadJson('walls', 'tường thành'), await loadJson('trees', 'cây'),
  ];
  status('Đang dựng cảnh 3D…');
  await new Promise((r) => setTimeout(r, 30));

  // ------------------------------------------------------------------ renderer, scene
  const canvas = $('view');
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch (e) {
    throw new Error('Trình duyệt này không bật được WebGL. Hãy thử Chrome, Edge, Firefox hoặc Safari bản mới.');
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 700 ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  const env = { skyColor: new THREE.Color('#a9c8e2'), fogColor: new THREE.Color('#cfdbe0'), sunDir: new THREE.Vector3(-0.45, 0.62, -0.64).normalize(), fogNear: 1400, fogFar: 7800 };
  scene.background = env.fogColor;
  scene.fog = new THREE.Fog(env.fogColor, env.fogNear, env.fogFar);
  const camera = new THREE.PerspectiveCamera(50, 1, 0.3, 14000);
  scene.add(new THREE.HemisphereLight('#dfeaf2', '#7b6f5a', 1.25));
  const sun = new THREE.DirectionalLight('#fff3dc', 2.1); sun.position.copy(env.sunDir).multiplyScalar(1000); scene.add(sun);

  const T = new Terrain(terrainD);
  const bounds = { xmin: meta.frame.xmin, xmax: meta.frame.xmax, zmin: meta.frame.zmin, zmax: meta.frame.zmax };
  const solids = new Solids(32);
  const sky = buildSky(env); scene.add(sky);
  const terrainMesh = buildTerrainMesh(T); scene.add(terrainMesh);
  const water = buildWater(waterD, env); scene.add(water);
  const roads = buildRoads(roadsD); scene.add(roads);
  const bridges = buildBridges(bridgesD, T, meta); scene.add(bridges.group);
  const buildings = buildBuildings(buildingsD, solids, 6, bounds); scene.add(buildings.group);
  const walls = buildWalls(wallsD, solids); scene.add(walls);
  const landmarks = buildLandmarks(meta, solids); scene.add(landmarks);
  const trees = buildTrees(treesD); scene.add(trees);
  const fx = new WaterFx(scene);

  const world = { terrain: T, solids, bridgeCol: { decks: bridges.decks, piers: bridges.piers } };
  const uav = new Uav(world, fx); scene.add(uav.model);
  // compile every shader now (UAV, spray, ripples included) so entering flight mode does not stall on first use
  status('Đang lập lộ trình bay…');
  await new Promise((r) => setTimeout(r, 20));
  const routes = [];
  for (const def of routeDefs(meta)) routes.push(planRoute(def, { ...world, tt: bridges.ttInfo }, meta));
  if (bridges.ttInfo) routes.push(underBridgeRoute(bridges.ttInfo, T));
  for (const r of routes) { r.mesh = routeMesh(r); scene.add(r.mesh); }
  fx.rings.forEach((r) => { r.mesh.visible = true; });
  status('Đang chuẩn bị đồ họa…');
  renderer.compile(scene, camera);
  fx.rings.forEach((r) => { r.mesh.visible = false; });
  routes.forEach((r) => { r.mesh.visible = false; });
  uav.model.visible = false;
  const input = new Input();
  const sound = new RotorSound();

  // ------------------------------------------------------------------ explore controls
  const controls = new MapControls(camera, canvas);
  controls.enableDamping = true; controls.dampingFactor = 0.08; controls.screenSpacePanning = false;
  controls.minDistance = 25; controls.maxDistance = 6500; controls.maxPolarAngle = Math.PI * 0.47;
  const P = meta.places;
  const home = () => {
    const tt = P.truong_tien, nm = P.ngo_mon;
    controls.target.set((tt.x + nm.x) / 2, 6, (tt.z + nm.z) / 2);
    camera.position.set(controls.target.x + 820, 520, controls.target.z + 980);
  };
  home(); controls.update();

  let fly = null;   // camera tween
  function flyTo(tx, ty, tz, dist, azimuth, elev) {
    const to = new THREE.Vector3(tx, ty, tz);
    const pos = new THREE.Vector3(tx + Math.sin(azimuth) * Math.cos(elev) * dist, ty + Math.sin(elev) * dist, tz + Math.cos(azimuth) * Math.cos(elev) * dist);
    fly = { t: 0, dur: reduceMotion ? 0.01 : 1.6, p0: camera.position.clone(), p1: pos, q0: controls.target.clone(), q1: to };
  }

  // ------------------------------------------------------------------ labels
  const labelDefs = [
    ['truong_tien', 'Cầu Trường Tiền'], ['phu_xuan', 'Cầu Phú Xuân'], ['da_vien', 'Cầu Dã Viên'],
    ['ngo_mon', 'Ngọ Môn'], ['ky_dai', 'Kỳ Đài'], ['thai_hoa', 'Điện Thái Hòa'],
  ];
  const labels = [];
  const labelLayer = $('labels');
  for (const [k, text] of labelDefs) {
    if (!P[k]) continue;
    const el = document.createElement('div'); el.className = 'label'; el.textContent = text; labelLayer.appendChild(el);
    const h = k === 'ky_dai' ? 58 : k === 'ngo_mon' ? 20 : k.endsWith('hoa') ? 17 : 16;
    labels.push({ el, p: new THREE.Vector3(P[k].x, (P[k].ground || 0) + h, P[k].z), when: () => mode === 'explore' || mode === 'manual' });
  }
  if (P.truong_tien && P.phu_xuan) {
    const el = document.createElement('div'); el.className = 'label label-river'; el.textContent = 'Sông Hương'; labelLayer.appendChild(el);
    labels.push({ el, p: new THREE.Vector3((P.truong_tien.x + P.phu_xuan.x) / 2 + 120, 3, (P.truong_tien.z + P.phu_xuan.z) / 2 + 60), when: () => mode !== 'auto' });
  }
  const v3 = new THREE.Vector3();
  function updateLabels() {
    const show = $('opt-labels').checked;
    const w = renderer.domElement.clientWidth, h = renderer.domElement.clientHeight;
    for (const L of labels) {
      v3.copy(L.p).project(camera);
      const d = camera.position.distanceTo(L.p);
      const vis = show && (!L.when || L.when()) && v3.z < 1 && Math.abs(v3.x) < 1.05 && Math.abs(v3.y) < 1.05 && d < (L.far || 4200);
      L.el.hidden = !vis;
      if (vis) L.el.style.transform = `translate(${(v3.x * 0.5 + 0.5) * w}px, ${(-v3.y * 0.5 + 0.5) * h}px) translate(-50%, -100%)`;
    }
  }

  // ------------------------------------------------------------------ modes
  let mode = 'explore', view = 'chase';
  const isFlying = () => mode === 'manual' || mode === 'auto';   // 'explore' and 'routes' use the map camera
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  const tt = bridges.ttInfo;

  let current = null;      // route being flown or previewed
  function showRoutes() {
    for (const r of routes) {
      const on = mode === 'routes' || (mode === 'auto' && r === current);
      const u = r.mesh.userData, dim = mode === 'routes' && current && r !== current;
      r.mesh.visible = on;
      u.tube.visible = mode === 'routes';                 // in flight the tube would fill the camera: keep only the waypoint beads
      u.line.visible = mode === 'routes';
      u.tube.material.opacity = dim ? 0.22 : 0.85; u.line.material.opacity = dim ? 0.25 : 0.95;
      u.beads.visible = !dim;
    }
    document.querySelectorAll('.route-card').forEach((c) => c.classList.toggle('selected', !!current && c.dataset.route === current.id));
  }
  function fitRoute(r) {
    const pts = r ? r.curve.getSpacedPoints(60) : routes.flatMap((x) => x.curve.getSpacedPoints(30));
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const p of pts) { x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); z0 = Math.min(z0, p.z); z1 = Math.max(z1, p.z); }
    const span = Math.max(x1 - x0, z1 - z0), az = 0.5;
    // the route list covers the left of the screen on wide layouts: aim a bit to the left so the path sits right of centre
    const shift = window.innerWidth > 720 ? -0.28 * span : 0;
    flyTo((x0 + x1) / 2 + Math.cos(az) * shift, 8, (z0 + z1) / 2 - Math.sin(az) * shift, span * 1.3 + 300, az, 0.95);
  }
  function startRoute(r) {
    current = r;
    setMode('auto');
  }

  function setMode(m) {
    mode = m;
    document.querySelectorAll('[data-mode]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === m || (b.dataset.mode === 'routes' && m === 'auto'))));
    const flying = m === 'manual' || m === 'auto';
    controls.enabled = !flying; uav.model.visible = flying; input.active = m === 'manual';
    $('hud').hidden = !flying; $('places').hidden = m !== 'explore'; $('routes').hidden = m !== 'routes'; $('keys').hidden = m !== 'manual';
    $('route-progress').hidden = m !== 'auto'; $('yaw-row').hidden = m !== 'manual';
    showRoutes();
    document.body.classList.toggle('flying', flying);
    $('sticks').hidden = m !== 'manual';
    if (flying) { $('layers').classList.remove('open'); $('btn-layers').setAttribute('aria-expanded', 'false'); }
    // keyboard focus must be on the scene, not on the button just clicked or a layer radio
    if (flying) { if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur(); canvas.focus({ preventScroll: true }); }
    if (m === 'explore') {
      const p = uav.pos; if (p.lengthSq() > 0) flyTo(p.x, Math.max(p.y, 4), p.z, 260, 0.6, 0.55);
      return;
    }
    if (m === 'routes') { uav.auto = null; if (!current) current = routes[0]; showRoutes(); fitRoute(current); return; }
    if (m === 'manual' && !uav.auto && (uav.pos.lengthSq() === 0 || mode === 'manual')) {
      if (!uav.started && tt) {
        const s = 1, x = tt.ax + tt.ux * tt.S * 2.5 + tt.vx * s * 210, z = tt.az + tt.uz * tt.S * 2.5 + tt.vz * s * 210;
        uav.place(x, tt.water + 22, z, Math.atan2(tt.vx * s, tt.vz * s));
        uav.started = true;
      }
      uav.auto = null;
    }
    if (m === 'auto') {
      if (!current) current = routes[0];
      const r = current;
      uav.startAuto(r.points, r.speed); uav.started = true; uav.yawRate = 0;
      const d = r.points[1].clone().sub(r.points[0]); uav.yaw = Math.atan2(-d.x, -d.z);
      $('rp-name').textContent = r.name; $('rp-name').style.setProperty('--route', r.color);
      uav.onAutoEnd = () => { setMode('manual'); toast(`Hoàn thành lộ trình “${r.name}”. Bạn đang cầm lái; bấm “Lộ trình bay” để chọn lộ trình khác.`); };
      showRoutes();
    }
    camPos.copy(uav.pos).add(new THREE.Vector3(Math.sin(uav.yaw) * 14, 5, Math.cos(uav.yaw) * 14));
    camera.position.copy(camPos);
  }
  // clicking a mode is the user gesture that lets the browser start audio
  document.querySelectorAll('[data-mode]').forEach((b) => b.addEventListener('click', () => { if (b.dataset.mode !== 'explore') sound.ensure(); setMode(b.dataset.mode); }));
  const soundLabel = () => { $('btn-sound').textContent = sound.enabled ? 'Âm thanh: bật' : 'Âm thanh: tắt'; $('btn-sound').setAttribute('aria-pressed', String(sound.enabled)); };
  $('btn-sound').addEventListener('click', () => { sound.setEnabled(!sound.enabled); soundLabel(); });
  soundLabel();
  canvas.addEventListener('pointerdown', () => canvas.focus({ preventScroll: true }));
  $('focus-hint').addEventListener('click', () => canvas.focus({ preventScroll: true }));
  $('btn-view').addEventListener('click', () => { view = view === 'chase' ? 'fpv' : 'chase'; $('btn-view').textContent = view === 'chase' ? 'Góc nhìn: bám sau' : 'Góc nhìn: buồng lái'; });
  $('btn-reset').addEventListener('click', () => { uav.started = false; uav.crashes = 0; uav.touches = 0; setMode('manual'); });
  $('hud-more').addEventListener('click', () => {
    const open = !$('hud').classList.contains('expanded');
    $('hud').classList.toggle('expanded', open); $('hud-more').setAttribute('aria-expanded', String(open));
    $('hud-more').textContent = open ? 'Thu gọn ▴' : 'Tùy chọn ▾';
  });
  $('rp-stop').addEventListener('click', () => { uav.auto = null; setMode('manual'); toast('Đã dừng lộ trình — bạn đang cầm lái tại chỗ.'); });

  const fmtTime = (sec) => { const m = Math.floor(sec / 60), s = Math.round(sec % 60); return m ? `${m} phút ${s.toString().padStart(2, '0')} giây` : `${s} giây`; };
  for (const r of routes) {
    const card = document.createElement('div'); card.className = 'route-card'; card.dataset.route = r.id; card.style.setProperty('--route', r.color);
    card.innerHTML = `<button type="button" class="rc-main"><span class="rc-name"></span><span class="rc-desc"></span><span class="rc-meta"></span></button><button type="button" class="rc-fly">Bay ▶</button>`;
    card.querySelector('.rc-name').textContent = r.name;
    card.querySelector('.rc-desc').textContent = r.desc;
    card.querySelector('.rc-meta').textContent = `${fmt(r.length / 1000, 1)} km · khoảng ${fmtTime(r.seconds)} · ${r.labels.length} điểm · cao ${Math.round(r.minY)}–${Math.round(r.maxY)} m`;
    card.querySelector('.rc-main').addEventListener('click', () => { current = r; showRoutes(); fitRoute(r); });
    card.querySelector('.rc-fly').addEventListener('click', () => { sound.ensure(); startRoute(r); });
    $('route-list').appendChild(card);
    // waypoint labels, shown while this route is previewed or flown
    for (const l of r.labels) {
      const el = document.createElement('div'); el.className = 'label label-route'; el.style.setProperty('--route', r.color); el.textContent = l.name; labelLayer.appendChild(el);
      labels.push({ el, p: new THREE.Vector3(l.x, l.y + 9, l.z), when: () => (mode === 'routes' || mode === 'auto') && current === r, far: 6000 });
    }
  }

  const YAW_KEY = 'hue3d.yawMax';
  try { const v = parseFloat(window.localStorage.getItem(YAW_KEY)); if (v >= 0.2 && v <= 1.4) uav.yawMax = v; } catch (e) { /* storage blocked */ }
  const yawLabel = () => { $('yaw-sens').value = String(uav.yawMax); $('yaw-val').textContent = `${Math.round(uav.yawMax * 180 / Math.PI)}°/s`; };
  $('yaw-sens').addEventListener('input', (e) => { uav.yawMax = parseFloat(e.target.value); yawLabel(); try { window.localStorage.setItem(YAW_KEY, String(uav.yawMax)); } catch (err) { /* storage blocked */ } });
  yawLabel();
  window.addEventListener('keydown', (e) => {
    if ((e.code === 'KeyC' || e.key === 'c') && isFlying() && !e.repeat) { e.preventDefault(); $('btn-view').click(); }
    if ((e.code === 'KeyM' || e.key === 'm') && isFlying() && !e.repeat) { e.preventDefault(); $('btn-sound').click(); }
    if (isFlying()) sound.ensure();          // a key press is also a gesture that may start audio
    if (e.code === 'Escape' && mode !== 'explore') setMode(mode === 'auto' ? 'routes' : 'explore');
  });

  // places
  const placeBtns = [['ngo_mon', 'Đại Nội', 420, 2.6, 0.5], ['ky_dai', 'Kỳ Đài', 220, 2.2, 0.38], ['truong_tien', 'Cầu Trường Tiền', 380, 0.9, 0.32], ['phu_xuan', 'Cầu Phú Xuân', 360, 2.3, 0.35], ['da_vien', 'Cầu Dã Viên', 420, 1.2, 0.4]];
  for (const [k, text, dist, az, el] of placeBtns) {
    if (!P[k]) continue;
    const b = document.createElement('button'); b.type = 'button'; b.textContent = text;
    b.addEventListener('click', () => flyTo(P[k].x, (P[k].ground || 0) + 4, P[k].z, dist, az, el));
    $('place-list').appendChild(b);
  }
  $('btn-home').addEventListener('click', () => { const p0 = camera.position.clone(), q0 = controls.target.clone(); home(); const p1 = camera.position.clone(), q1 = controls.target.clone(); camera.position.copy(p0); controls.target.copy(q0); fly = { t: 0, dur: 1.6, p0, p1, q0, q1 }; });

  // layers
  document.querySelectorAll('input[name="bcolor"]').forEach((r) => r.addEventListener('change', () => {
    buildings.recolor(r.value);
    $('legend-source').hidden = r.value !== 'source'; $('legend-height').hidden = r.value !== 'height';
  }));
  $('opt-trees').addEventListener('change', (e) => { trees.visible = e.target.checked; });
  $('opt-buildings').addEventListener('change', (e) => { buildings.group.visible = e.target.checked; });
  $('btn-layers').addEventListener('click', () => { const p = $('layers'); p.classList.toggle('open'); $('btn-layers').setAttribute('aria-expanded', String(p.classList.contains('open'))); });

  // ------------------------------------------------------------------ picking
  const ray = new THREE.Raycaster();
  const pickables = [buildings.group, landmarks, bridges.group, walls, terrainMesh, water];
  let downAt = null;
  canvas.addEventListener('pointerdown', (e) => { downAt = [e.clientX, e.clientY]; });
  canvas.addEventListener('pointerup', (e) => {
    if (!downAt || Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 6 || isFlying()) return;
    const r = canvas.getBoundingClientRect();
    ray.setFromCamera(new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1), camera);
    const hits = ray.intersectObjects(pickables, true);
    if (!hits.length) return;
    showInfo(hits[0]);
  });
  $('info-close').addEventListener('click', () => { $('info').hidden = true; });

  function rows(list) { return list.map(([k, v]) => `<div class="kv"><dt>${k}</dt><dd>${v}</dd></div>`).join(''); }
  function areaOf(i) {
    const n = buildingsD.n[i]; let off = 0; for (let k = 0; k < i; k++) off += buildingsD.n[k] * 2;
    let a = 0; for (let k = 0; k < n; k++) { const p = off + k * 2, q = off + ((k + 1) % n) * 2; a += buildingsD.xz[p] * buildingsD.xz[q + 1] - buildingsD.xz[q] * buildingsD.xz[p + 1]; }
    return Math.abs(a) / 200;
  }
  function showInfo(hit) {
    const p = hit.point.clone();
    if (hit.face) p.addScaledVector(hit.face.normal, -0.3);
    let obj = hit.object; while (obj.parent && obj.parent !== scene) obj = obj.parent;
    let title = '', body = '';
    const solid = solids.pick(p.x, p.z);
    if ((obj === buildings.group || obj === landmarks || obj === walls) && solid) {
      const it = solid.info;
      if (it.type === 'building') {
        const i = it.index, name = buildingsD.names[i];
        title = name || 'Công trình';
        body = rows([
          ['Dấu chân', SRC_NAME[buildingsD.src[i]]], ['Chiều cao dựng', `${fmt(buildingsD.h[i] / 10 - 0.3)} m`],
          ['Nguồn chiều cao', HS_NAME[buildingsD.hs[i]]], ['Diện tích nền', `${fmt(areaOf(i), 0)} m²`],
        ]) + '<p class="note">Mái phẳng là giả định. Chiều cao học máy lệch khoảng ±3 m trên mẫu đối chiếu nhỏ.</p>';
      } else if (it.type === 'wall') {
        title = it.kind === 'rampart' ? 'Tường thành Kinh thành' : 'Tường Hoàng thành / tường trong';
        body = rows([['Chiều cao dựng', it.kind === 'rampart' ? '6,6 m' : '4,0 m'], ['Nguồn', 'Tim tường OSM; chiều cao theo số liệu công bố']]) + '<p class="note">Cổng thành được khoét ở nơi có đường đi qua. Kích thước cổng chưa đo.</p>';
      } else if (it.type === 'landmark') {
        title = it.name;
        const extra = { ky_dai: 'Ba tầng đài tổng ~17,5 m, cột cờ 37 m (số liệu công bố, chưa đo kiểm).', ngo_mon: 'Nền đài chữ U cao ~5 m (công bố); lầu Ngũ Phụng phác thảo, tỷ lệ là giả định.', thai_hoa: 'Mái chồng hai tầng phác thảo; chiều cao là giả định.' };
        body = rows([['Dấu chân', 'OpenStreetMap'], ['Hình khối', 'Phác thảo tham số']]) + `<p class="note">${extra[it.key] || ''}</p>`;
      }
    } else if (obj === bridges.group) {
      let best = null, bd = Infinity;
      for (const d of bridges.decks) {
        const dx = d.bx - d.ax, dz = d.bz - d.az, l2 = dx * dx + dz * dz || 1; let t = ((p.x - d.ax) * dx + (p.z - d.az) * dz) / l2; t = Math.max(0, Math.min(1, t));
        const q = Math.hypot(d.ax + dx * t - p.x, d.az + dz * t - p.z); if (q < bd) { bd = q; best = d; }
      }
      title = (best && best.name) || 'Cầu';
      body = rows([['Chiều dài (OSM)', `${fmt(best ? best.len : NaN, 0)} m`], ['Cao độ mặt cầu', 'Mô hình ràng buộc (giả định)']]);
      body += best && best.special === 'truong_tien'
        ? '<p class="note">6 nhịp, 402,6 m theo Wikidata. Vòm thép, trụ và độ cao gầm cầu là phác thảo minh họa. Đường chính của cầu trong OpenStreetMap thiếu thẻ <code>bridge</code>; demo nhận ra cầu bằng kiểm tra hình học.</p>'
        : '<p class="note">Không cầu nào trong dữ liệu mở có cao độ hay tĩnh không đo đạc.</p>';
    } else {
      const wl = T.waterLevel(p.x, p.z);
      title = Number.isNaN(wl) ? 'Mặt đất' : 'Mặt nước';
      body = Number.isNaN(wl)
        ? rows([['Cao độ', `≈ ${fmt(T.height(p.x, p.z))} m`], ['Nguồn', 'Copernicus GLO-30, đã làm mượt']]) + '<p class="note">DEM 30 m là mặt phủ; độ cao ở đây chỉ để đặt mô hình, không phải số đo.</p>'
        : rows([['Mực nước dựng', `${fmt(wl)} m`], ['Nguồn', 'Đa giác nước OSM; mực nước quy ước']]) + '<p class="note">Độ sâu đáy sông là giả định để hiển thị.</p>';
    }
    $('info-title').textContent = title; $('info-body').innerHTML = body; $('info').hidden = false;
  }

  // ------------------------------------------------------------------ touch sticks
  for (const side of ['left', 'right']) {
    const pad = $(`stick-${side}`), knob = pad.querySelector('.knob');
    let id = null;
    const set = (e) => {
      const r = pad.getBoundingClientRect(), R = r.width / 2;
      let x = (e.clientX - r.left - R) / R, y = (e.clientY - r.top - R) / R; const m = Math.hypot(x, y); if (m > 1) { x /= m; y /= m; }
      input[side] = { x, y }; knob.style.transform = `translate(${x * R * 0.6}px, ${y * R * 0.6}px)`;
    };
    pad.addEventListener('pointerdown', (e) => { id = e.pointerId; pad.setPointerCapture(id); set(e); });
    pad.addEventListener('pointermove', (e) => { if (e.pointerId === id) set(e); });
    const end = () => { id = null; input[side] = { x: 0, y: 0 }; knob.style.transform = ''; };
    pad.addEventListener('pointerup', end); pad.addEventListener('pointercancel', end);
  }

  // ------------------------------------------------------------------ toast
  let toastTimer = 0;
  function toast(msg) { const el = $('toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { el.hidden = true; }, 3200); }

  // ------------------------------------------------------------------ resize + loop
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    fx.points.material.uniforms.uScale.value = h * 0.9;
  }
  window.addEventListener('resize', resize); resize();

  const clock = new THREE.Clock();
  const fwd = new THREE.Vector3();
  let hudTimer = 0;
  let simTime = 0;
  // stepDt is only passed by the test/console hook. The animation loop calls frame() below, never tick()
  // directly: setAnimationLoop hands its callback a timestamp in ms, which must not be read as a time step.
  function tick(stepDt, skipRender) {
    // up to 0.25 s per frame (slow devices); the UAV is integrated in sub-steps of <= 1/30 s so it keeps real speed
    const dt = Math.min(typeof stepDt === 'number' ? stepDt : clock.getDelta(), 0.25);
    simTime += dt; const t = simTime;
    water.material.uniforms.uTime.value = t;
    if (landmarks.userData.flag && !reduceMotion) landmarks.userData.flag.rotation.y = Math.sin(t * 1.7) * 0.25;
    sky.position.copy(camera.position);
    if (!isFlying()) {
      if (fly) {
        fly.t = Math.min(1, fly.t + dt / fly.dur); const e = fly.t < 0.5 ? 4 * fly.t ** 3 : 1 - (-2 * fly.t + 2) ** 3 / 2;
        camera.position.lerpVectors(fly.p0, fly.p1, e); controls.target.lerpVectors(fly.q0, fly.q1, e);
        if (fly.t >= 1) fly = null;
      }
      controls.target.x = THREE.MathUtils.clamp(controls.target.x, bounds.xmin, bounds.xmax);
      controls.target.z = THREE.MathUtils.clamp(controls.target.z, bounds.zmin, bounds.zmax);
      controls.update();
      const minY = T.surface(camera.position.x, camera.position.z) + 3; if (camera.position.y < minY) camera.position.y = minY;
    } else {
      const cmd = mode === 'manual' ? input.read() : { forward: 0, strafe: 0, up: 0, yaw: 0 };
      const n = Math.max(1, Math.ceil(dt * 30));
      for (let i = 0; i < n && isFlying(); i++) uav.update(dt / n, cmd, bounds);
      // rotor load for the engine sound: hover ~0.45; climbing, pushing forward and yawing spin the props up
      let loadTarget;
      if (mode === 'manual') loadTarget = 0.45 + 0.35 * Math.max(0, cmd.up) - 0.2 * Math.max(0, -cmd.up) + 0.2 * Math.min(1, Math.hypot(cmd.forward, cmd.strafe)) + 0.08 * Math.abs(cmd.yaw);
      else loadTarget = 0.45 + THREE.MathUtils.clamp(uav.vel.y * 0.06, -0.2, 0.35) + Math.min(1, uav.vel.length() / 40) * 0.2;
      const st = uav.status, wash = st.overWater && st.agl < 3.2 ? Math.min(1, 1 - (st.agl - 0.3) / 2.9) : 0;
      sound.update(dt, { active: true, loadTarget: THREE.MathUtils.clamp(loadTarget, 0, 1), wash, camDist: view === 'fpv' ? 4 : camera.position.distanceTo(uav.pos), touches: uav.touches, crashes: uav.crashes });
      fwd.set(-Math.sin(uav.yaw), 0, -Math.cos(uav.yaw));
      if (view === 'fpv') {
        camera.position.copy(uav.pos).addScaledVector(fwd, 1.3).add(new THREE.Vector3(0, 0.35, 0));
        camLook.copy(camera.position).addScaledVector(fwd, 30); camLook.y += Math.sin(-uav.tilt.pitch) * 8;
      } else {
        camPos.copy(uav.pos).addScaledVector(fwd, -13).add(new THREE.Vector3(0, 4.2, 0));
        const k = 1 - Math.exp(-dt * 4);
        camera.position.lerp(camPos, k);
        const floor = T.surface(camera.position.x, camera.position.z) + 1.2; if (camera.position.y < floor) camera.position.y = floor;
        camLook.copy(uav.pos).addScaledVector(fwd, 7).add(new THREE.Vector3(0, 1.2, 0));
      }
      camera.lookAt(camLook);
      hudTimer -= dt;
      if (hudTimer <= 0) {
        hudTimer = 0.1;
        const s = uav.status;
        $('hud-agl-label').textContent = window.innerWidth <= 720 ? 'Độ cao' : (s.overWater ? 'Trên mặt nước' : 'Trên mặt đất');
        $('hud-agl').parentElement.classList.toggle('water', s.overWater);   // jade = above water, ivory = above ground
        $('hud-agl').textContent = `${fmt(s.agl)} m`;
        $('hud-speed').textContent = `${fmt(s.speed * 3.6, 0)} km/h`;
        $('hud-gap').textContent = Number.isFinite(s.clearanceUp) ? `${fmt(s.clearanceUp)} m` : '—';
        $('hud-gap-row').classList.toggle('active', Number.isFinite(s.clearanceUp));
        $('hud-touch').textContent = uav.touches; $('hud-crash').textContent = uav.crashes;
        $('hud-alert').hidden = uav.flash <= 0; if (uav.flash > 0) $('hud-alert').textContent = `Va chạm: ${uav.lastHit}`;
        if (mode === 'manual') {
          const c = input.read(), moving = c.forward || c.strafe || c.up || c.yaw;
          $('hud-input').textContent = moving ? (input.left.x || input.left.y || input.right.x || input.right.y ? 'Cần điều khiển' : `Phím: ${input.last}`) : (input.lastAt ? `Đang chờ lệnh (phím cuối: ${input.lastKey})` : 'Chưa nhận phím nào');
          $('focus-hint').hidden = document.hasFocus();
        } else {
          $('focus-hint').hidden = true; $('hud-input').textContent = 'Bay tự động';
          if (uav.auto && current) {
            const u = Math.min(1, uav.auto.s / uav.auto.length), left = Math.max(0, uav.auto.length - uav.auto.s);
            const next = current.labels.find((l) => l.u > u + 0.003), prev = [...current.labels].reverse().find((l) => l.u <= u + 0.003);
            $('rp-next').textContent = next ? `Tiếp theo: ${next.name} · còn ${fmt((next.u - u) * uav.auto.length, 0)} m` : 'Sắp kết thúc lộ trình';
            $('rp-prev').textContent = prev ? `Vừa qua: ${prev.name}` : 'Xuất phát';
            $('rp-bar').style.width = `${(u * 100).toFixed(1)}%`;
            $('rp-left').textContent = `${fmt(left / 1000, 2)} km còn lại`;
          }
        }
      }
    }
    if (!isFlying()) sound.update(dt, { active: false, loadTarget: 0.45, wash: 0, camDist: 100, touches: uav.touches, crashes: uav.crashes });
    fx.update(dt);
    if (skipRender === true) return;
    updateLabels();
    renderer.render(scene, camera);
  }
  // a single exception inside a frame would stop three.js's loop for good: report it once and keep running
  let frameErrors = 0;
  const frame = () => {
    try { tick(); } catch (e) {
      frameErrors++;
      if (frameErrors <= 3) console.error('[Huế 3D] lỗi trong khung hình', e);
      if (frameErrors === 1) toast('Có lỗi khi vẽ cảnh — chi tiết trong console (F12).');
    }
  };
  renderer.setAnimationLoop(frame);
  // console/test hook: __hue.tick(dt) advances one frame deterministically when the loop is paused
  window.__hue = { scene, camera, uav, input, sound, routes, startRoute, setMode, T, meta, bridges, renderer, tick, pause: () => renderer.setAnimationLoop(null), resume: () => renderer.setAnimationLoop(frame) };

  // stats in the about panel
  const c = meta.counts;
  $('stat-buildings').textContent = c.buildings.toLocaleString('vi-VN');
  $('stat-roads').textContent = c.roads.toLocaleString('vi-VN');
  $('stat-bridges').textContent = c.bridges.toLocaleString('vi-VN');
  $('stat-trees').textContent = c.trees.toLocaleString('vi-VN');
  $('stat-hml').textContent = `${Math.round(100 * c.height_status.ml_estimate / c.buildings)}%`;
  $('loading').hidden = true;
  document.body.classList.add('ready');
}

main().catch((e) => {
  console.error(e);
  status(e.message || String(e));
  $('loading').classList.add('error');
});
