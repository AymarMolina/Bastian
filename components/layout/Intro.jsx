'use client';
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from 'react';

// Pantalla de entrada: un sobre cerrado cuyo sello se dibuja solo; al pulsarlo el sello se parte,
// la solapa se abre, asoma la invitación y el sobre se desvanece para mostrar la página.
export default function Intro() {
  const [phase, setPhase] = useState('closed');

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    return () => { root.style.overflow = ''; };
  }, []);

  useEffect(() => {
    if (phase === 'gone') document.documentElement.style.overflow = '';
  }, [phase]);

  const open = () => {
    if (phase !== 'closed') return;
    const fast = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setPhase('open');
    setTimeout(() => setPhase('leaving'), fast ? 300 : 2300);
    setTimeout(() => setPhase('gone'), fast ? 700 : 3300);
  };

  if (phase === 'gone') return null;
  const cls = 'bm-intro' + (phase !== 'closed' ? ' is-open' : '') + (phase === 'leaving' ? ' is-leaving' : '');

  return (
    <div className={cls} role="dialog" aria-modal="true" aria-label="Bienvenida">
      <div className="bm-env">
        <div className="bm-env-back"></div>
        <div className="bm-env-letter">
          <span className="bm-env-small">Una invitación de</span>
          <span className="bm-env-name">Bastian Magic</span>
          <span className="bm-env-rule" aria-hidden="true"></span>
          <span className="bm-env-small">Si lo ves, lo crees</span>
        </div>
        <div className="bm-env-front">
          <svg viewBox="0 0 100 64" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 L50 35 L100 0 M0 64 L41 29 M100 64 L59 29" /></svg>
        </div>
        <div className="bm-env-flap">
          <svg viewBox="0 0 100 38" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0 L50 38 L100 0" /></svg>
        </div>
        <button type="button" className="bm-env-seal" onClick={open} aria-label="Abrir la invitación">
          <span className="bm-seal-art">
            <img className="bm-seal-half bm-seal-l" src="/assets/icono-sello.png" alt="" />
            <img className="bm-seal-half bm-seal-r" src="/assets/icono-sello.png" alt="" />
          </span>
        </button>
      </div>
      <p className="bm-intro-hint">Toca el sello para abrir</p>
    </div>
  );
}
