// Synthesised quadcopter sound (Web Audio API, no audio files).
// Four slightly mismatched rotors (sawtooth voices whose small frequency differences beat against each
// other, like real props), a broadband air/wash layer, a water-spray hiss near the surface, and one-shot
// splash and impact sounds. Pitch and loudness follow rotor load (thrust), not just speed.

const PREF_KEY = 'hue3d.sound';

function loadPref() {
  try { return window.localStorage.getItem(PREF_KEY) !== 'off'; } catch (e) { return true; }
}
function savePref(on) {
  try { window.localStorage.setItem(PREF_KEY, on ? 'on' : 'off'); } catch (e) { /* storage blocked: preference lasts for this visit */ }
}

function noiseBuffer(ctx, seconds = 2) {
  const n = Math.floor(ctx.sampleRate * seconds), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
  let seed = 1234567;
  for (let i = 0; i < n; i++) { seed = (seed * 1103515245 + 12345) & 0x7fffffff; d[i] = (seed / 0x3fffffff) - 1; }
  return buf;
}

/** Builds the synth graph on any BaseAudioContext (live or offline) and returns its controls. */
export function buildRotorGraph(ctx, destination) {
  const out = ctx.createDynamicsCompressor();
  out.threshold.value = -18; out.knee.value = 12; out.ratio.value = 4; out.attack.value = 0.005; out.release.value = 0.2;
  out.connect(destination);
  const master = ctx.createGain(); master.gain.value = 0; master.connect(out);

  // rotors: 4 voices, each spinning at a slightly different rate
  const RATIOS = [1.0, 1.017, 0.986, 1.031];
  const rotorFilter = ctx.createBiquadFilter(); rotorFilter.type = 'lowpass'; rotorFilter.Q.value = 0.9; rotorFilter.frequency.value = 1400;
  const rotorGain = ctx.createGain(); rotorGain.gain.value = 0.16;
  rotorFilter.connect(rotorGain); rotorGain.connect(master);
  const voices = RATIOS.map((r) => {
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 190 * r;
    const g = ctx.createGain(); g.gain.value = 0.25; o.connect(g); g.connect(rotorFilter); o.start();
    return { o, r };
  });
  // second blade-pass harmonic gives the characteristic "whine"
  const whine = ctx.createOscillator(); whine.type = 'triangle'; whine.frequency.value = 380;
  const whineGain = ctx.createGain(); whineGain.gain.value = 0.035; whine.connect(whineGain); whineGain.connect(master); whine.start();

  const noise = noiseBuffer(ctx);
  const loopNoise = () => { const s = ctx.createBufferSource(); s.buffer = noise; s.loop = true; s.start(); return s; };
  // air / prop wash
  const air = loopNoise(), airBand = ctx.createBiquadFilter(); airBand.type = 'bandpass'; airBand.Q.value = 0.55; airBand.frequency.value = 900;
  const airGain = ctx.createGain(); airGain.gain.value = 0.08;
  air.connect(airBand); airBand.connect(airGain); airGain.connect(master);
  // water spray hiss when low over water
  const spray = loopNoise(), sprayHp = ctx.createBiquadFilter(); sprayHp.type = 'highpass'; sprayHp.frequency.value = 1900;
  const sprayGain = ctx.createGain(); sprayGain.gain.value = 0;
  spray.connect(sprayHp); sprayHp.connect(sprayGain); sprayGain.connect(master);

  // street ambience (simulated traffic below the UAV): low engine rumble + tyre noise, and occasional horns.
  // Connected after the master gain so it is heard even when the camera is far from the drone.
  const street = loopNoise(), streetLp = ctx.createBiquadFilter(); streetLp.type = 'lowpass'; streetLp.frequency.value = 520;
  const streetGain = ctx.createGain(); streetGain.gain.value = 0;
  street.connect(streetLp); streetLp.connect(streetGain); streetGain.connect(out);
  const hum = ctx.createOscillator(); hum.type = 'sawtooth'; hum.frequency.value = 62;
  const humLp = ctx.createBiquadFilter(); humLp.type = 'lowpass'; humLp.frequency.value = 240;
  const humGain = ctx.createGain(); humGain.gain.value = 0;
  hum.connect(humLp); humLp.connect(humGain); humGain.connect(out); hum.start();

  const T = 0.06;   // smoothing time constant for parameter changes
  return {
    master,
    /** load 0..1 (hover ~0.45), level 0..~1.3 overall loudness, wash 0..1 spray strength */
    set(load, level, wash, t = ctx.currentTime) {
      const f = 120 + 170 * load;
      for (const v of voices) v.o.frequency.setTargetAtTime(f * v.r, t, T);
      whine.frequency.setTargetAtTime(f * 2.02, t, T);
      rotorFilter.frequency.setTargetAtTime(700 + 2600 * load, t, T);
      rotorGain.gain.setTargetAtTime(0.1 + 0.12 * load, t, T);
      whineGain.gain.setTargetAtTime(0.015 + 0.05 * load, t, T);
      airBand.frequency.setTargetAtTime(600 + 1500 * load, t, T);
      airGain.gain.setTargetAtTime(0.04 + 0.11 * load + 0.08 * wash, t, T);
      sprayGain.gain.setTargetAtTime(0.32 * wash, t, 0.08);
      master.gain.setTargetAtTime(level, t, 0.12);
    },
    street(level, t = ctx.currentTime) {
      streetGain.gain.setTargetAtTime(0.11 * level, t, 0.4);
      humGain.gain.setTargetAtTime(0.025 * level, t, 0.4);
      hum.frequency.setTargetAtTime(55 + 25 * level + 6 * Math.random(), t, 0.5);
    },
    horn(level, t = ctx.currentTime) {   // motorbike/car horn: two detuned square tones, short
      const base = 380 + Math.random() * 260, dur = 0.12 + Math.random() * 0.22, rep = Math.random() < 0.4 ? 2 : 1;
      for (let r = 0; r < rep; r++) {
        const t0 = t + r * (dur + 0.07);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.05 * level, t0 + 0.015); g.gain.setValueAtTime(0.05 * level, t0 + dur); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + 0.05);
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200; lp.connect(g); g.connect(out);
        for (const f of [base, base * 1.26]) { const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(lp); o.start(t0); o.stop(t0 + dur + 0.08); }
      }
    },
    splash(energy = 0.6, t = ctx.currentTime) {
      const s = ctx.createBufferSource(); s.buffer = noise;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(3800, t); lp.frequency.exponentialRampToValueAtTime(500, t + 0.7);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5 + 0.5 * energy, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.85);
      s.connect(lp); lp.connect(g); g.connect(out); s.start(t, Math.random()); s.stop(t + 0.9);
    },
    thud(t = ctx.currentTime) {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(38, t + 0.25);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.4);
      const s = ctx.createBufferSource(); s.buffer = noise;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 700;
      const g2 = ctx.createGain(); g2.gain.setValueAtTime(0.5, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      s.connect(lp); lp.connect(g2); g2.connect(out); s.start(t, Math.random()); s.stop(t + 0.2);
    },
  };
}

export class RotorSound {
  constructor() {
    this.enabled = loadPref();
    this.ctx = null; this.graph = null;
    this.load = 0.45; this.active = false;
    this.lastTouches = 0; this.lastCrashes = 0;
    this.idleTimer = 0;
    document.addEventListener('visibilitychange', () => {
      if (!this.ctx) return;
      if (document.hidden) this.ctx.suspend(); else if (this.active && this.enabled) this.ctx.resume();
    });
  }

  /** Call from inside a user gesture (click/key): browsers only allow audio to start there. */
  ensure() {
    if (!this.enabled) return;
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.graph = buildRotorGraph(this.ctx, this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  setEnabled(on) {
    this.enabled = on; savePref(on);
    if (on) this.ensure();
    else if (this.graph) { this.graph.master.gain.setTargetAtTime(0, this.ctx.currentTime, 0.05); setTimeout(() => { if (!this.enabled && this.ctx) this.ctx.suspend(); }, 300); }
  }

  /**
   * active: UAV on screen; loadTarget 0..1; wash 0..1; camDist metres from camera to UAV;
   * touches/crashes: running counters from the simulation (one-shot sounds fire when they increase).
   */
  update(dt, { active, loadTarget, wash, camDist, touches, crashes, street = 0 }) {
    this.active = active;
    this.load += (loadTarget - this.load) * Math.min(1, dt * 6);
    if (!this.ctx || !this.enabled) { this.lastTouches = touches; this.lastCrashes = crashes; return; }
    if (active && this.ctx.state === 'suspended' && !document.hidden) this.ctx.resume();
    const level = active ? Math.max(0.05, Math.min(1.25, 14 / Math.max(camDist, 1))) : 0;
    this.graph.set(this.load, level, wash);
    this.graph.street(active ? street : 0);
    if (active && street > 0.05 && Math.random() < dt * 0.9 * street) this.graph.horn(Math.min(1, street * 1.4));
    if (active && touches > this.lastTouches) this.graph.splash(0.7);
    if (active && crashes > this.lastCrashes) this.graph.thud();
    this.lastTouches = touches; this.lastCrashes = crashes;
    // save CPU while nobody is flying: suspend after the fade-out
    if (!active && this.ctx.state === 'running') { this.idleTimer += dt; if (this.idleTimer > 1.2) this.ctx.suspend(); } else this.idleTimer = 0;
  }
}
