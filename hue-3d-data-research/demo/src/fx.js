// Water spray, splashes and ripples. Purely visual; no data behind it.
import * as THREE from 'three';

const MAX = 2600;

export class WaterFx {
  constructor(scene) {
    this.pos = new Float32Array(MAX * 3); this.vel = new Float32Array(MAX * 3);
    this.life = new Float32Array(MAX); this.ttl = new Float32Array(MAX); this.size = new Float32Array(MAX);
    this.alpha = new Float32Array(MAX);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1));
    g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e5);
    this.points = new THREE.Points(g, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: { uScale: { value: 600 } },
      vertexShader: `attribute float aSize, aAlpha; varying float vA; uniform float uScale;
        void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = min(aSize * uScale / max(-mv.z, 0.5), 40.0); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
        gl_FragColor = vec4(0.93, 0.97, 1.0, vA * smoothstep(0.25, 0.02, d)); }`,
    }));
    this.points.frustumCulled = false; this.points.renderOrder = 5;
    scene.add(this.points);

    this.rings = [];
    const rg = new THREE.RingGeometry(0.86, 1.0, 40); rg.rotateX(-Math.PI / 2);
    for (let i = 0; i < 28; i++) {
      const m = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: '#eaf6f7', transparent: true, opacity: 0, depthWrite: false }));
      m.visible = false; m.renderOrder = 4; scene.add(m); this.rings.push({ mesh: m, age: 0, ttl: 0, grow: 0 });
    }
    this.ringIdx = 0; this.ringClock = 0;
  }

  emit(x, y, z, vx, vy, vz, ttl, size) {
    const i = this.next; this.next = (this.next + 1) % MAX;
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.life[i] = ttl; this.ttl[i] = ttl; this.size[i] = size;
  }

  ripple(x, y, z, r0, grow, ttl) {
    const r = this.rings[this.ringIdx]; this.ringIdx = (this.ringIdx + 1) % this.rings.length;
    r.mesh.position.set(x, y + 0.04, z); r.mesh.scale.setScalar(r0); r.mesh.visible = true; r.age = 0; r.ttl = ttl; r.grow = grow;
  }

  /** Rotor wash on the water: fine spray thrown outwards in a ring under the aircraft. */
  wash(x, wl, z, strength, dt, speedX, speedZ) {
    const n = Math.floor(strength * 260 * dt + Math.random());
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2, r = 0.5 + Math.random() * 1.3, out = 2.5 + Math.random() * 4.5 * strength;
      this.emit(x + Math.cos(a) * r, wl + 0.05, z + Math.sin(a) * r, Math.cos(a) * out + speedX * 0.25, 1.2 + Math.random() * 3.2 * strength, Math.sin(a) * out + speedZ * 0.25,
        0.5 + Math.random() * 0.6, 0.16 + Math.random() * 0.2);
    }
    this.ringClock += dt;
    if (this.ringClock > 0.22) { this.ringClock = 0; this.ripple(x, wl, z, 1.2, 5 + 4 * strength, 1.3); }
  }

  /** Impact with the surface: a crown of droplets plus a few expanding rings. */
  splash(x, wl, z, energy) {
    const n = Math.floor(160 + 160 * energy);
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2, out = 1.5 + Math.random() * 6 * (0.5 + energy), up = 4 + Math.random() * 9 * (0.5 + energy);
      this.emit(x + Math.cos(a) * 0.5, wl + 0.1, z + Math.sin(a) * 0.5, Math.cos(a) * out, up, Math.sin(a) * out, 0.8 + Math.random() * 0.9, 0.22 + Math.random() * 0.3);
    }
    for (let k = 0; k < 3; k++) this.ripple(x, wl, z, 0.8 + k * 0.9, 7 + k * 2, 1.6 + k * 0.4);
  }

  update(dt) {
    for (let i = 0; i < MAX; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt;
      this.vel[i * 3 + 1] -= 9.81 * dt;
      const d = Math.exp(-1.4 * dt); this.vel[i * 3] *= d; this.vel[i * 3 + 2] *= d;
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.alpha[i] = Math.max(0, Math.min(1, this.life[i] / this.ttl[i])) * 0.85;
    }
    const g = this.points.geometry;
    g.attributes.position.needsUpdate = true; g.attributes.aAlpha.needsUpdate = true; g.attributes.aSize.needsUpdate = true;
    for (const r of this.rings) {
      if (!r.mesh.visible) continue;
      r.age += dt;
      if (r.age >= r.ttl) { r.mesh.visible = false; continue; }
      r.mesh.scale.setScalar(r.mesh.scale.x + r.grow * dt);
      r.mesh.material.opacity = 0.55 * (1 - r.age / r.ttl);
    }
  }
}
