/* eslint-disable @next/next/no-img-element */

export default function Header() {
  return (
    <>
      <header style={{ position: "absolute", top: "0", left: "0", right: "0", zIndex: "30", background: "transparent" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "14px 24px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "16px 24px", minHeight: "84px" }}>
      <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-start", gap: "10px 32px" }}>
      <a className="nav-a" href="#shows" style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "15px", letterSpacing: ".16em" }}>Shows</a>
      <a className="nav-a" href="#sobre" style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "15px", letterSpacing: ".16em" }}>Sobre Bastian</a>
      <a className="nav-a" href="#redes" style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "15px", letterSpacing: ".16em" }}>Videos</a>
      </nav>
      <a href="#inicio" aria-label="Bastian Magia, inicio" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", textDecoration: "none", color: "#f6f5f2" }}>
      <img src="/assets/icono-sello.png" alt="" style={{ width: "110px", height: "100px", objectFit: "contain" }} />
      </a>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: "12px 20px" }}>
      <div id="bm-lang" role="group" aria-label="Idioma / Language" style={{ display: "flex", alignItems: "center", gap: "8px" }}><button type="button" data-lang="es" aria-label="Español" style={{ font: "400 15px/1 'Trajan Pro', 'Trajan', 'Cinzel', serif", letterSpacing: ".08em", width: "38px", height: "54px", border: "1.5px solid #f6f5f2", borderRadius: "6px", cursor: "pointer", background: "transparent", color: "#f6f5f2", padding: "0", transform: "rotate(-8deg)", transition: "transform .25s ease, background .25s ease, color .25s ease" }} data-rot="-8">ES</button><button type="button" data-lang="en" aria-label="English" style={{ font: "400 15px/1 'Trajan Pro', 'Trajan', 'Cinzel', serif", letterSpacing: ".08em", width: "38px", height: "54px", border: "1.5px solid #f6f5f2", borderRadius: "6px", cursor: "pointer", background: "transparent", color: "#f6f5f2", padding: "0", transform: "rotate(8deg)", transition: "transform .25s ease, background .25s ease, color .25s ease" }} data-rot="8">EN</button></div>
      <a className="btn-s" href="#contacto" style={{ minHeight: "46px", padding: "10px 24px 10px 18px", gap: "10px", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "14px", letterSpacing: ".16em" }}><img src="/assets/palo-corazon.png" alt="" style={{ width: "16px", height: "16px", objectFit: "contain" }} />Contacto</a>
      </div>
      </div>
      </header>
    </>
  );
}
