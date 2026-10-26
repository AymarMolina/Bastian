'use client';

import { useEffect, useRef } from 'react';
import initSite from '../lib/site';
import Header from './layout/Header';
import Hero from './sections/Hero';
import Galeria from './sections/Galeria';
import Servicios from './sections/Servicios';
import SobreBastian from './sections/SobreBastian';
import Personalidad from './sections/Personalidad';
import Redes from './sections/Redes';
import Mision from './sections/Mision';
import Contacto from './sections/Contacto';
import Footer from './layout/Footer';
import BookButton from './layout/BookButton';
import Intro from './layout/Intro';

export default function Site() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !ref.current.__bm) {
      ref.current.__bm = true;
      initSite();
    }
  }, []);

  return (
    <div ref={ref} style={{ background: "#000", color: "#f6f5f2", fontFamily: "'Raleway', 'Segoe UI', system-ui, sans-serif", fontSize: "17px", lineHeight: "1.65", overflowX: "hidden" }}>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Galeria />
        <Servicios />
        <SobreBastian />
        <Personalidad />
        <Redes />
        <Mision />
        <Contacto />
      </main>
      <Footer />
      <BookButton />
    </div>
  );
}
