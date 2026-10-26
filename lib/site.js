import { applyLang } from './i18n';
import { initAnimations } from './animations';

// Videos, selector de idioma y formulario.
export default function initSite() {
  const site = { lang: 'es' };
  document.querySelectorAll('video').forEach(v => { v.muted = true; v.loop = true; v.playsInline = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); });
  site.lang = 'es';
  try { site.lang = localStorage.getItem('bm-lang') || 'es'; } catch (e) {}
  const en = () => site.lang === 'en';
  document.querySelectorAll('[data-copy]').forEach(b => b.addEventListener('click', () => {
    try { navigator.clipboard.writeText(b.getAttribute('data-copy')); } catch (e) {}
    b.textContent = en() ? 'Copied' : 'Copiado';
    setTimeout(() => { b.textContent = 'Copiar'; applyLang(site); }, 1600);
  }));
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
    site.lang = b.getAttribute('data-lang');
    try { localStorage.setItem('bm-lang', site.lang); } catch (e) {}
    applyLang(site);
  }));
  const f = document.getElementById('bm-form');
  if (f) f.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(f);
    const subj = (en() ? 'Inquiry: ' : 'Consulta: ') + d.get('evento');
    const body = (en() ? 'Name: ' : 'Nombre: ') + d.get('nombre') + '\n' + (en() ? 'Email: ' : 'Correo: ') + d.get('correo') + '\n' + (en() ? 'Event type: ' : 'Tipo de evento: ') + d.get('evento') + '\n\n' + d.get('mensaje');
    window.location.href = 'mailto:bastianmagic95@gmail.com?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    const n = document.getElementById('bm-form-note');
    if (n) { n.textContent = ''; n._es = 'Se abrirá tu aplicación de correo para enviar el mensaje.'; n.textContent = en() ? 'Your email app will open to send the message.' : n._es; }
  });
  const fab = document.getElementById('bm-fab'), ct = document.getElementById('contacto');
  if (fab && ct && 'IntersectionObserver' in window) {
    new IntersectionObserver(es => { fab.classList.toggle('is-hidden', es[0].isIntersecting); }, { threshold: 0.15 }).observe(ct);
  }
  applyLang(site);
  initAnimations();
}
