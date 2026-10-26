// Mazo de "Personalidad": pila 3D que se abre en abanico al entrar en pantalla, flotación en reposo y foco de escenario (Three.js).
export function initDeck() {
  const fan = document.getElementById('bm-fan');
  if (!fan) return;
  const cs = [...fan.querySelectorAll('[data-fan]')];
  const inners = cs.map(c => c.querySelector('[data-fan-inner]'));
  const faces = cs.map(c => c.querySelector('[data-face]'));
  const caps = [...fan.querySelectorAll('[data-cap]')];
  const finals = cs.map(c => c.getAttribute('data-final'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = v => Math.max(0, Math.min(1, v));
  const ease = t => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const state = { p: reduce ? 1 : 0 };
  let off = [], hover = -1, raf = 0;

  const measure = () => {
    const mid = (k, s) => cs.reduce((a, c) => a + c[k] + c[s] / 2, 0) / cs.length;
    const cx = mid('offsetLeft', 'offsetWidth'), cy = mid('offsetTop', 'offsetHeight');
    off = cs.map(c => ({ dx: cx - (c.offsetLeft + c.offsetWidth / 2), dy: cy - (c.offsetTop + c.offsetHeight / 2) }));
  };
  const render = () => {
    const p = state.p, e = ease(p), k = 1 - e, arc = Math.sin(Math.PI * e), done = p >= 1;
    fan.classList.toggle('bm-open', done && !reduce);
    cs.forEach((c, i) => {
      const s = i - (cs.length - 1) / 2;
      const flip = 180 * (1 - ease(clamp((e - .3 - i * .08) / .4)));
      c.style.transition = done ? 'transform .55s cubic-bezier(.2,.8,.2,1)' : 'none';
      c.style.zIndex = hover === i && done ? 9 : i + 1;
      c.style.transform = done && hover === i
        ? 'translate3d(0,-10px,80px) rotate(0deg)'
        : 'translate3d(' + (off[i].dx * k) + 'px,' + (off[i].dy * k - i * 5 * k - arc * 30) + 'px,' + (arc * 110 + i * 2 * k) + 'px) rotate(' + (s * 3 * k + s * 16 * arc) + 'deg) ' + finals[i];
      inners[i].style.transform = 'rotateY(' + flip + 'deg)';
      if (caps[i]) {
        const o = clamp((e - .8) / .2);
        caps[i].style.opacity = o;
        caps[i].style.transform = 'translateY(' + ((1 - o) * 14) + 'px)';
      }
    });
  };
  // Se reproduce una sola vez al entrar en pantalla: pausa breve, abanico y volteo de los ases.
  const play = () => {
    const t0 = performance.now() + 150, dur = 1400;
    const step = now => {
      state.p = clamp((now - t0) / dur);
      render();
      if (state.p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  };

  measure();
  render();
  window.addEventListener('resize', () => { measure(); render(); });
  if (!reduce) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); play(); } }, { threshold: 0.6 });
      io.observe(fan);
    } else { state.p = 1; render(); }
  }

  cs.forEach((c, i) => {
    const face = faces[i];
    c.addEventListener('pointerenter', () => { hover = i; render(); });
    c.addEventListener('pointerleave', () => {
      hover = -1;
      face.style.setProperty('--rx', '0deg');
      face.style.setProperty('--ry', '0deg');
      render();
    });
    c.addEventListener('pointermove', ev => {
      if (state.p < 1) return;
      const r = c.getBoundingClientRect();
      const x = clamp((ev.clientX - r.left) / r.width), y = clamp((ev.clientY - r.top) / r.height);
      face.style.setProperty('--rx', ((.5 - y) * 6) + 'deg');
      face.style.setProperty('--ry', ((x - .5) * 8) + 'deg');
    });
  });

  const host = document.getElementById('bm-deck-fx');
  if (host && !reduce) import('three').then(T => spotlight(T, host)).catch(() => {});
}

function canvasTexture(T, w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  draw(cv.getContext('2d'), w, h);
  return new T.CanvasTexture(cv);
}

// Foco de escenario frío detrás del mazo: haz cónico, halo y unas motas de polvo flotando en la luz.
function spotlight(T, host) {
  const renderer = new T.WebGLRenderer({ alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  Object.assign(renderer.domElement.style, { width: '100%', height: '100%', display: 'block' });
  host.appendChild(renderer.domElement);
  const scene = new T.Scene();
  const cam = new T.PerspectiveCamera(50, 1, .1, 100);
  cam.position.z = 10;

  const beamTex = canvasTexture(T, 256, 512, (g, w, h) => {
    g.filter = 'blur(22px)';
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0, 'rgba(150,178,235,.32)');
    gr.addColorStop(.6, 'rgba(120,150,215,.1)');
    gr.addColorStop(1, 'rgba(100,130,200,0)');
    g.fillStyle = gr;
    g.beginPath();
    g.moveTo(w * .44, 0);
    g.lineTo(w * .56, 0);
    g.lineTo(w * .9, h);
    g.lineTo(w * .1, h);
    g.closePath();
    g.fill();
  });
  const glowTex = canvasTexture(T, 128, 128, g => {
    const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(.35, 'rgba(140,165,225,.3)');
    gr.addColorStop(1, 'rgba(100,130,200,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, 128, 128);
  });

  const beam = new T.Mesh(new T.PlaneGeometry(7, 12), new T.MeshBasicMaterial({ map: beamTex, transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
  beam.position.set(0, 2.2, -2);
  scene.add(beam);

  const halo = new T.Sprite(new T.SpriteMaterial({ map: glowTex, color: 0x6f8fd0, transparent: true, depthWrite: false, blending: T.AdditiveBlending }));
  halo.position.set(0, -.4, -1.5);
  scene.add(halo);

  const N = 140;
  const pos = new Float32Array(N * 3), base = new Float32Array(N * 3), spd = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const y = (Math.random() - .5) * 9;
    base[i * 3] = (Math.random() - .5) * (1.2 + (2.5 - y) * .35);
    base[i * 3 + 1] = y;
    base[i * 3 + 2] = (Math.random() - .5) * 2;
    spd[i] = .05 + Math.random() * .12;
  }
  const geo = new T.BufferGeometry();
  geo.setAttribute('position', new T.BufferAttribute(pos, 3));
  const motes = new T.Points(geo, new T.PointsMaterial({ map: glowTex, size: .07, color: 0xb8c8f0, transparent: true, opacity: .22, depthWrite: false, blending: T.AdditiveBlending }));
  scene.add(motes);

  const resize = () => {
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  const t0 = performance.now();
  let id = 0, on = false;
  const tick = now => {
    id = requestAnimationFrame(tick);
    const t = (now - t0) / 1000, breath = 1 + Math.sin(t * .7) * .06;
    beam.material.opacity = .38 * breath;
    halo.material.opacity = .14 * breath;
    halo.scale.set(9 * breath, 6 * breath, 1);
    for (let i = 0; i < N; i++) {
      const y = ((base[i * 3 + 1] + t * spd[i] + 4.5) % 9) - 4.5;
      pos[i * 3] = base[i * 3] + Math.sin(t * .3 + i) * .15;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = base[i * 3 + 2];
    }
    geo.attributes.position.needsUpdate = true;
    renderer.render(scene, cam);
  };
  new IntersectionObserver(es => {
    const v = es[0].isIntersecting;
    if (v && !on) { on = true; resize(); id = requestAnimationFrame(tick); }
    else if (!v && on) { on = false; cancelAnimationFrame(id); }
  }).observe(host);
}
