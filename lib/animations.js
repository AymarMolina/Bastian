import { initDeck } from './deck';

// Carrusel, carta del rey, cartas, mazo y galería de cartas.
export function initAnimations() {
  const tr = document.getElementById('bm-car-track');
  if (tr) {
    const step = d => tr.scrollBy({ left: d * tr.clientWidth * 0.8, behavior: 'smooth' });
    let paused = false;
    const auto = () => {
      if (paused) return;
      if (tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 4) tr.scrollTo({ left: 0, behavior: 'smooth' });
      else step(1);
    };
    let timer = setInterval(auto, 3200);
    const reset = () => { clearInterval(timer); timer = setInterval(auto, 3200); };
    document.getElementById('bm-car-prev').addEventListener('click', () => { step(-1); reset(); });
    document.getElementById('bm-car-next').addEventListener('click', () => { step(1); reset(); });
    tr.addEventListener('mouseenter', () => { paused = true; });
    tr.addEventListener('mouseleave', () => { paused = false; });
    tr.addEventListener('touchstart', () => { paused = true; }, { passive: true });
    tr.addEventListener('touchend', () => { paused = false; reset(); }, { passive: true });
  }
  // Carta boca abajo que cruza hacia la derecha; al llegar se voltea mostrando el rey y abre un abanico circular.
  const hat = document.getElementById('bm-kfan');
  const car = document.getElementById('bm-car');
  if (hat && car) {
    const place = () => {
      const g = document.getElementById('bm-gal2').getBoundingClientRect();
      const h = hat.getBoundingClientRect();
      const dx = (g.left + 24) - h.left + 0;
      hat.style.transition = 'none';
      hat.style.transform = 'translateX(' + (-(h.left - (g.left + 24))) + 'px)';
      car.style.transition = 'none';
      car.style.opacity = '0';
      car.style.transform = 'translateX(-40px)';
      void hat.offsetWidth;
    };
    place();
    const go = () => {
      hat.style.transition = 'transform 2.6s cubic-bezier(.45,.05,.2,1)';
      hat.style.transform = 'none';
      car.style.transition = 'opacity 1s ease 1.4s, transform 1s ease 1.4s';
      car.style.opacity = '1';
      car.style.transform = 'none';
      setTimeout(() => {
        hat.classList.add('is-flipped');
        setTimeout(() => hat.classList.add('is-fanned'), 900);
      }, 2600);
    };
    if ('IntersectionObserver' in window) {
      const io5 = new IntersectionObserver(es => { if (es[0].isIntersecting) { io5.disconnect(); go(); } }, { threshold: 0.35 });
      io5.observe(document.getElementById('bm-gal2'));
    } else go();
  }
  const cw = document.getElementById('bm-cards');
  if (cw) {
    const cs = [...cw.querySelectorAll('[data-bmc]')];
    const R = cw.getBoundingClientRect();
    cs.forEach((c, i) => {
      const r = c.getBoundingClientRect();
      const dx = R.left + R.width * 0.5 - (r.left + r.width / 2);
      const dy = R.top + R.height * 0.78 - (r.top + r.height / 2);
      c.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(.2) rotate(' + (i % 2 ? 40 : -40) + 'deg)';
      c.style.opacity = '0';
    });
    let ready = false;
    const fly = () => {
      cs.forEach((c, i) => {
        c.style.transition = 'transform 1.2s cubic-bezier(.2,1.25,.35,1) ' + (i * 0.14) + 's, opacity .35s ease ' + (i * 0.14) + 's';
        c.style.transform = 'none';
        c.style.opacity = '1';
      });
      setTimeout(() => {
        ready = true;
        cw.classList.add('bm-cards-open');
        cs.forEach(c => { c.style.transition = 'transform 1.1s cubic-bezier(.2,.8,.2,1), rotate 1.1s cubic-bezier(.2,.8,.2,1), filter .9s ease'; });
      }, 1900);
    };
    // Hover como el de los ases: la carta se endereza, se acerca a la cámara y se inclina con el cursor.
    cs.forEach(c => {
      const rot = c.style.rotate;
      const lift = (rx, ry) => 'translate3d(0,-18px,80px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      c.addEventListener('mouseenter', () => { if (!ready) return; c.style.zIndex = 9; c.style.rotate = '0deg'; c.style.transform = lift(0, 0); });
      c.addEventListener('mouseleave', () => { if (!ready) return; c.style.zIndex = ''; c.style.rotate = rot; c.style.transform = 'none'; });
      c.addEventListener('pointermove', ev => {
        if (!ready) return;
        const r = c.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)), y = Math.max(0, Math.min(1, (ev.clientY - r.top) / r.height));
        c.style.transform = lift((.5 - y) * 6, (x - .5) * 8);
      });
    });
    if ('IntersectionObserver' in window) {
      const io4 = new IntersectionObserver(es => { if (es[0].isIntersecting) { io4.disconnect(); fly(); } }, { threshold: 0.4 });
      io4.observe(cw);
    } else fly();
  }
  initDeck();
  const dv = document.getElementById('bm-dove');
  if (dv) {
    if ('IntersectionObserver' in window) {
      const io2 = new IntersectionObserver(es => { if (es[0].isIntersecting) { io2.disconnect(); dv.style.animationPlayState = 'running'; } }, { threshold: 0.4 });
      io2.observe(dv.parentNode);
    } else dv.style.animationPlayState = 'running';
  }
  const wrap = document.getElementById('bm-gal-wrap'), gal = document.getElementById('bm-gal');
  if (!wrap || !gal) return;
  const fit = () => { const k = Math.min(1, wrap.clientWidth / 1200); gal.style.transform = 'scale(' + k + ')'; wrap.style.height = (700 * k) + 'px'; };
  fit(); window.addEventListener('resize', fit);
  const X = [-420, -210, 0, 210, 420], Y = [40, 130, 190, 130, 40], R = [-16, -8, 0, 8, 16];
  const cards = [...gal.querySelectorAll('[data-card]')];
  const tf = (i, lift) => 'translate(' + X[i] + 'px,' + (-(Y[i] + (lift ? 20 : 0))) + 'px) translateZ(' + (lift ? 80 : 0) + 'px) rotate(' + (lift ? 0 : R[i]) + 'deg)';
  let opened = false;
  cards.forEach((c, i) => {
    const inner = c.querySelector('[data-inner]'); let flipped = false;
    const flip = v => { flipped = v; inner.style.transform = v ? 'rotateY(180deg)' : 'none'; };
    c._flip = flip;
    c.addEventListener('click', () => flip(!flipped));
    c.addEventListener('mouseenter', () => { if (!opened) return; c.style.zIndex = 2; c.style.transitionDelay = '0s'; c.style.transform = tf(i, true); });
    c.addEventListener('mouseleave', () => { if (!opened) return; c.style.zIndex = 1; c.style.transform = tf(i, false); c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
    c.addEventListener('pointermove', ev => {
      if (!opened) return;
      const r = c.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (ev.clientX - r.left) / r.width)), y = Math.max(0, Math.min(1, (ev.clientY - r.top) / r.height));
      c.style.setProperty('--rx', ((.5 - y) * 6) + 'deg');
      c.style.setProperty('--ry', ((x - .5) * 8) + 'deg');
    });
  });
  const open = () => {
    cards.forEach((c, i) => { c.style.transitionDelay = (i * .14) + 's'; c.style.opacity = 1; c.style.transform = tf(i, false); });
    setTimeout(() => {
      opened = true;
      gal.classList.add('bm-gal-open');
      cards.forEach(c => { c.style.transitionDelay = '0s'; c.style.transition = 'transform .55s cubic-bezier(.2,.8,.2,1), opacity .4s ease'; });
    }, 2200);
    cards.forEach((c, i) => setTimeout(() => c._flip(true), 1700 + i * 260));
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => { if (es[0].isIntersecting) { io.disconnect(); open(); } }, { threshold: 0.35 });
    io.observe(wrap);
  } else open();
}
