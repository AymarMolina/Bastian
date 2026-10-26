/* eslint-disable @next/next/no-img-element */

const SUITS = ["palo-picas", "palo-corazon", "palo-treboles", "palo-diamante"];

export default function Footer() {
  return (
    <>
      <footer style={{ position: "relative", overflow: "hidden", background: "radial-gradient(46% 70% at 50% 0%, rgba(16,50,112,.28), rgba(16,50,112,0) 100%), #000" }}>
      <img src="/assets/conejo.png" alt="" aria-hidden="true" style={{ position: "absolute", left: "5%", bottom: "22%", width: "90px", height: "auto", opacity: "0.07", filter: "invert(1)", pointerEvents: "none", animation: "bmFloat 8s ease-in-out 0s infinite", "--r": "-6deg" }} />
      <img src="/assets/poker.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "6%", top: "26%", width: "80px", height: "auto", opacity: "0.07", filter: "invert(1)", pointerEvents: "none", animation: "bmSpin 9s ease-in-out 0s infinite", "--r": "8deg" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
      <div aria-hidden="true" style={{ display: "flex", alignItems: "center", gap: "18px" }}>
      <span style={{ flex: "1", height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,.22))" }}></span>
      {SUITS.map((s) => <img key={s} src={"/assets/" + s + ".png"} alt="" style={{ width: "14px", height: "14px", objectFit: "contain", opacity: s === "palo-corazon" || s === "palo-diamante" ? ".9" : ".55" }} />)}
      <span style={{ flex: "1", height: "1px", background: "linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,.22))" }}></span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "22px", padding: "56px 0 44px" }}>
      <a href="#inicio" className="bm-foot-seal" aria-label="Bastian Magic, volver al inicio"><img src="/assets/icono-sello.png" alt="" style={{ width: "128px", height: "auto", display: "block" }} /></a>
      <p style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(18px, 2vw, 24px)", letterSpacing: ".12em", textTransform: "uppercase" }}>Si lo ves, lo crees</p>
      <nav aria-label="Pie de página" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 36px", marginTop: "6px" }}>
      <a className="nav-a" href="#shows" style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "14px", letterSpacing: ".16em" }}>Shows</a>
      <a className="nav-a" href="#sobre" style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "14px", letterSpacing: ".16em" }}>Sobre Bastian</a>
      <a className="nav-a" href="#redes" style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "14px", letterSpacing: ".16em" }}>Videos</a>
      <a className="nav-a" href="#contacto" style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "14px", letterSpacing: ".16em" }}>Contacto</a>
      </nav>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 28px", fontSize: "14px", color: "#a7a5a0" }}>
      <a className="bm-foot-link" href="https://www.instagram.com/bastian.magic" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg>@bastian.magic</a>
      <a className="bm-foot-link" href="mailto:bastianmagic95@gmail.com"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>bastianmagic95@gmail.com</a>
      </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "22px 0 28px", textAlign: "center" }}>
      <p style={{ margin: "0", fontSize: "13px", color: "#7d7b76" }}>© 2026 Bastian Magic · Sebastian Lazo, mago profesional</p>
      </div>
      </div>
      </footer>
    </>
  );
}
