import { DICT, PLACEHOLDERS } from './translations';

export function applyLang(site) {
  const en = site.lang === 'en';
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) {
    const p = n.parentNode && n.parentNode.nodeName;
    if (p === 'SCRIPT' || p === 'STYLE') continue;
    const key = (n._es || n.nodeValue.replace(/\s+/g, ' ').trim());
    if (!DICT[key]) continue;
    if (en) { if (!n._es) { n._es = key; n._raw = n.nodeValue; } n.nodeValue = DICT[key]; }
    else if (n._es) { n.nodeValue = n._raw; n._es = null; }
  }
  document.querySelectorAll('[placeholder]').forEach(el => {
    if (!el._ph) el._ph = el.getAttribute('placeholder');
    el.setAttribute('placeholder', en ? (PLACEHOLDERS[el._ph] || el._ph) : el._ph);
  });
  document.querySelectorAll('[data-lang]').forEach(b => {
    const on = b.getAttribute('data-lang') === site.lang;
    const rot = +b.getAttribute('data-rot') || 0;
    b.style.background = on ? '#f6f5f2' : 'transparent';
    b.style.color = on ? '#000' : '#f6f5f2';
    b.style.transform = 'rotate(' + rot + 'deg)' + (on ? ' translateY(-4px)' : '');
  });
  document.documentElement.lang = en ? 'en' : 'es';
}
