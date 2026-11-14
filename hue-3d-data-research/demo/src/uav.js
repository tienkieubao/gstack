// Illustrative quadcopter: arcade flight model, keyboard/touch input, scripted fly-through.
// Nothing here models a real aircraft; see the on-screen notice.
import * as THREE from 'three';
import { hitBridges } from './world.js';

export const RADIUS = 0.9;

export function buildUavModel() {
  const g = new THREE.Group();
  const dark = new THREE.MeshLambertMaterial({ color: '#2a2630' }), accent = new THREE.MeshLambertMaterial({ color: '#e9b949' });
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.2, 0.9), dark); g.add(body);
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.14, 0.24), accent); nose.position.set(0, 0, -0.5); g.add(nose);   // -z is forward
  const rotors = [];
  for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 1.0), dark);
    arm.position.set(sx * 0.36, 0, sz * 0.36); arm.rotation.y = Math.atan2(sx, sz); g.add(arm);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.14, 8), dark); hub.position.set(sx * 0.72, 0.08, sz * 0.72); g.add(hub);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.015, 20), new THREE.MeshBasicMaterial({ color: '#d9dde4', transparent: true, opacity: 0.32, depthWrite: false }));
    disc.position.set(sx * 0.72, 0.17, sz * 0.72); g.add(disc);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.012, 0.06), dark); blade.position.copy(disc.position); g.add(blade); rotors.push(blade);
  }
  for (const s of [-1, 1]) { const skid = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.8), dark); skid.position.set(s * 0.25, -0.2, 0); g.add(skid); }
  const tail = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), new THREE.MeshBasicMaterial({ color: '#ff4a3d' })); tail.position.set(0, 0.03, 0.47); g.add(tail);
  g.scale.setScalar(1.5);       // slightly oversized so it stays readable from the chase camera
  g.userData.rotors = rotors;
  return g;
}

export class Input {
  constructor() {
    this.keys = new Set();
    this.left = { x: 0, y: 0 }; this.right = { x: 0, y: 0 };   // virtual sticks, -1..1
    window.addEventListener('keydown', (e) => { if (!e.metaKey && !e.ctrlKey && !/^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) { this.keys.add(e.code); if (/^(Arrow|Space)/.test(e.code)) e.preventDefault(); } });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
  }

  axis(neg, pos) { let v = 0; for (const k of neg) if (this.keys.has(k)) v -= 1; for (const k of pos) if (this.keys.has(k)) v += 1; return v; }

  read() {
    const clamp = (v) => Math.max(-1, Math.min(1, v));
    return {
      forward: clamp(this.axis(['KeyS'], ['KeyW']) - this.right.y),
      strafe: clamp(this.axis(['KeyA'], ['KeyD']) + this.right.x),
      up: clamp(this.axis(['KeyF', 'ArrowDown', 'ShiftLeft', 'ShiftRight'], ['KeyR', 'ArrowUp', 'Space']) - this.left.y),
      yaw: clamp(this.axis(['KeyE', 'ArrowRight'], ['KeyQ', 'ArrowLeft']) - this.left.x),
    };
  }
}

export class Uav {
  constructor(world, fx) {
    this.world = world; this.fx = fx;
    this.model = buildUavModel();
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3(); this.yaw = 0;
    this.tilt = { pitch: 0, roll: 0 };
    this.auto = null;            // {curve, length, s}
    this.touches = 0; this.crashes = 0; this.cooldown = 0; this.flash = 0; this.lastHit = '';
    this.status = { agl: 0, overWater: false, clearanceUp: NaN };
  }

  place(x, y, z, yaw = 0) { this.pos.set(x, y, z); this.vel.set(0, 0, 0); this.yaw = yaw; this.auto = null; this.sync(); }

  sync() {
    this.model.position.copy(this.pos);
    this.model.rotation.set(0, 0, 0);
    this.model.rotateY(this.yaw); this.model.rotateX(this.tilt.pitch); this.model.rotateZ(this.tilt.roll);
  }

  startAuto(points, speed) {
    const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal');
    this.auto = { curve, length: curve.getLength(), s: 0, speed };
    this.pos.copy(points[0]); this.vel.set(0, 0, 0);
  }

  collides(x, y, z) {
    const T = this.world.terrain;
    if (y - RADIUS * 0.6 < T.height(x, z)) return 'mặt đất';
    const s = this.world.solids.hit(x, y, z, RADIUS);
    if (s) return s.info.type === 'wall' ? 'tường thành' : (s.info.name || 'công trình');
    const b = hitBridges(this.world.bridgeCol, x, y, z, RADIUS);
    if (b) return b === 'pier' ? 'trụ cầu' : 'mặt cầu';
    return null;
  }

  update(dt, input, bounds) {
    const T = this.world.terrain, prev = this.pos.clone();
    this.cooldown = Math.max(0, this.cooldown - dt); this.flash = Math.max(0, this.flash - dt);
    if (this.auto) {
      const a = this.auto;
      // slow down for the low pass under the deck
      const here = a.curve.getPointAt(Math.min(1, a.s / a.length));
      const wlHere = T.waterLevel(here.x, here.z);
      const low = !Number.isNaN(wlHere) && here.y - wlHere < 6;
      a.s += (low ? a.speed * 0.6 : a.speed) * dt;
      const u = Math.min(1, a.s / a.length);
      const p = a.curve.getPointAt(u), tan = a.curve.getTangentAt(u);
      this.vel.subVectors(p, this.pos).divideScalar(Math.max(dt, 1e-3));
      this.pos.copy(p);
      const targetYaw = Math.atan2(-tan.x, -tan.z);
      let dy = targetYaw - this.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
      this.yaw += dy * Math.min(1, dt * 4);
      this.tilt.roll += (THREE.MathUtils.clamp(-dy * 2.2, -0.5, 0.5) - this.tilt.roll) * Math.min(1, dt * 5);
      this.tilt.pitch += (-0.16 - this.tilt.pitch) * Math.min(1, dt * 4);
      if (u >= 1) { this.auto = null; this.vel.set(0, 0, 0); this.onAutoEnd && this.onAutoEnd(); }
    } else {
      const c = input;
      this.yaw += c.yaw * 1.5 * dt;
      const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
      // forward is -z in the model frame
      const ax = (-sin * c.forward + cos * c.strafe) * 16, az = (-cos * c.forward - sin * c.strafe) * 16;
      this.vel.x += ax * dt; this.vel.z += az * dt; this.vel.y += c.up * 13 * dt;
      const dh = Math.exp(-0.9 * dt), dv = Math.exp(-2.2 * dt);
      this.vel.x *= dh; this.vel.z *= dh; this.vel.y *= dv;
      const hs = Math.hypot(this.vel.x, this.vel.z), vmax = 26;
      if (hs > vmax) { this.vel.x *= vmax / hs; this.vel.z *= vmax / hs; }
      this.pos.addScaledVector(this.vel, dt);
      this.pos.x = THREE.MathUtils.clamp(this.pos.x, bounds.xmin + 20, bounds.xmax - 20);
      this.pos.z = THREE.MathUtils.clamp(this.pos.z, bounds.zmin + 20, bounds.zmax - 20);
      this.pos.y = Math.min(this.pos.y, 450);
      const fwdSpeed = -(this.vel.x * sin + this.vel.z * cos), sideSpeed = this.vel.x * cos - this.vel.z * sin;
      this.tilt.pitch += (THREE.MathUtils.clamp(-fwdSpeed * 0.02, -0.45, 0.45) - this.tilt.pitch) * Math.min(1, dt * 6);
      this.tilt.roll += (THREE.MathUtils.clamp(-sideSpeed * 0.02, -0.45, 0.45) - this.tilt.roll) * Math.min(1, dt * 6);
      const hit = this.collides(this.pos.x, this.pos.y, this.pos.z);
      if (hit) {
        this.pos.copy(prev); this.vel.multiplyScalar(-0.25);
        if (this.collides(this.pos.x, this.pos.y, this.pos.z)) this.pos.y += 1.5;   // never stay stuck inside geometry
        if (this.cooldown <= 0) { this.crashes++; this.cooldown = 0.6; }
        this.flash = 0.7; this.lastHit = hit;
      }
    }
    // water interaction
    const wl = T.waterLevel(this.pos.x, this.pos.z), ground = T.height(this.pos.x, this.pos.z);
    const over = !Number.isNaN(wl);
    const surface = over ? wl : ground;
    const agl = this.pos.y - surface;
    if (over) {
      if (agl < 3.2) this.fx.wash(this.pos.x, wl, this.pos.z, 1 - Math.max(0, agl - 0.3) / 2.9, dt, this.vel.x, this.vel.z);
      if (agl < 0.45) {
        if (this.cooldown <= 0 || this.vel.y < -1) {
          this.fx.splash(this.pos.x, wl, this.pos.z, Math.min(1, Math.abs(this.vel.y) / 8 + Math.hypot(this.vel.x, this.vel.z) / 30));
          if (this.cooldown <= 0) { this.touches++; this.cooldown = 0.7; }
        }
        if (!this.auto) { this.pos.y = wl + 0.45; this.vel.y = Math.max(2.2, -this.vel.y * 0.5); }
      }
    }
    // free height up to the nearest bridge underside directly above (for the HUD)
    let up = NaN;
    for (const d of this.world.bridgeCol.decks) {
      if (d.yBot < this.pos.y) continue;
      const dx = d.bx - d.ax, dz = d.bz - d.az, l2 = dx * dx + dz * dz;
      let t = ((this.pos.x - d.ax) * dx + (this.pos.z - d.az) * dz) / l2; if (t < 0 || t > 1) continue;
      const px = d.ax + dx * t - this.pos.x, pz = d.az + dz * t - this.pos.z;
      if (px * px + pz * pz < d.halfW * d.halfW && (Number.isNaN(up) || d.yBot - this.pos.y < up)) up = d.yBot - this.pos.y;
    }
    this.status = { agl, overWater: over, clearanceUp: up, speed: this.vel.length() };
    for (const r of this.model.userData.rotors) r.rotation.y += dt * 55;
    this.sync();
  }
}

/** Waypoints for the scripted pass under two spans of Cầu Trường Tiền (built from the bridge axis). */
export function truongTienPath(tt, terrain) {
  const { ax, az, ux, uz, vx, vz, S, water } = tt;
  const c = (k, along, across, h) => new THREE.Vector3(ax + ux * (S * (k - 0.5) + along) + vx * across, water + h, az + uz * (S * (k - 0.5) + along) + vz * across);
  // approach from the side with more open water
  const probe = (sgn) => { let n = 0; for (let d = 60; d <= 420; d += 30) { const p = c(3, 0, sgn * d, 0); if (!Number.isNaN(terrain.waterLevel(p.x, p.z))) n++; } return n; };
  const s = probe(1) >= probe(-1) ? 1 : -1;
  return [
    c(3, -10, s * 330, 42), c(3, -6, s * 230, 20), c(3, -2, s * 150, 5.5), c(3, 0, s * 95, 1.1), c(3, 0, s * 62, 0.3), c(3, 0, s * 40, 1.3), c(3, 0, s * 28, 2.2),
    c(3, 0, 0, 2.6), c(3, 0, -s * 30, 2.4), c(3, 14, -s * 75, 3.2), c(3.5, 20, -s * 115, 5.0), c(4, 10, -s * 95, 3.4), c(4, 0, -s * 45, 2.4),
    c(4, 0, 0, 2.5), c(4, 0, s * 40, 2.3), c(4, 6, s * 95, 1.2), c(4, 16, s * 150, 6), c(4.3, 40, s * 230, 24), c(4.5, 70, s * 300, 46),
  ];
}
