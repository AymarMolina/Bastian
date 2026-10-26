/* eslint-disable @next/next/no-img-element */

export default function Galeria() {
  return (
    <>
      <section id="galeria" style={{ position: "relative", overflow: "hidden", padding: "96px 0" }}>
      <div id="bm-gal2" style={{ position: "relative", maxWidth: "1360px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
      <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.15", letterSpacing: ".04em", textTransform: "uppercase" }}>¿Cómo lo hizo?</h2>
      <div id="bm-car" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div id="bm-car-track" style={{ display: "flex", gap: "16px", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", paddingBottom: "4px" }}>
      <div style={{ flex: "0 0 clamp(200px, 24vw, 300px)", aspectRatio: "4 / 5", scrollSnapAlign: "start", position: "relative", overflow: "hidden", background: "#111" }}><img src="/assets/galeria-1.png" alt="Bastian haciendo magia en una mesa durante un evento" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      <div style={{ flex: "0 0 clamp(200px, 24vw, 300px)", aspectRatio: "4 / 5", scrollSnapAlign: "start", position: "relative", overflow: "hidden", background: "#111" }}><video src="/assets/galeria-video.mp4" autoPlay loop muted playsInline style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}></video></div>
      <div style={{ flex: "0 0 clamp(200px, 24vw, 300px)", aspectRatio: "4 / 5", scrollSnapAlign: "start", position: "relative", overflow: "hidden", background: "#111" }}><img src="/assets/galeria-2.png" alt="Bastian con una baraja frente a un grupo" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      <div style={{ flex: "0 0 clamp(200px, 24vw, 300px)", aspectRatio: "4 / 5", scrollSnapAlign: "start", position: "relative", overflow: "hidden", background: "#111" }}><img src="/assets/galeria-3.png" alt="Bastian con los ojos vendados en el escenario" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} /></div>
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
      <button id="bm-car-prev" type="button" aria-label="Anterior" style={{ width: "56px", height: "64px", border: "0", background: "transparent", cursor: "pointer", padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: "38px", height: "54px", border: "1.5px solid #f6f5f2", borderRadius: "6px", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-14deg)", transition: "transform .25s ease" }} onMouseOver={(e) => { e.currentTarget.style.transform='rotate(-22.400000000000002deg) translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.transform='rotate(-14deg)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6f5f2" strokeWidth="2.4" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg></span></button>
      <button id="bm-car-next" type="button" aria-label="Siguiente" style={{ width: "56px", height: "64px", border: "0", background: "transparent", cursor: "pointer", padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: "38px", height: "54px", border: "1.5px solid #f6f5f2", borderRadius: "6px", background: "#000", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(14deg)", transition: "transform .25s ease" }} onMouseOver={(e) => { e.currentTarget.style.transform='rotate(22.400000000000002deg) translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.transform='rotate(14deg)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f6f5f2" strokeWidth="2.4" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg></span></button>
      </div>
      </div>
      </div>
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div id="bm-kfan" className="bm-kfan" role="img" aria-label="Una carta se voltea y revela el rey de diamantes" style={{ willChange: "transform" }}>
      <div className="bm-kfan-spin">
      <div className="bm-kfan-ring">
      {["as-picas", "carta-bm-j", "as-corazon", "carta-bm-n", "as-treboles", "carta-bm-d", "as-diamante", "carta-bm-s"].map((c, i) => (
        <div key={c} className="bm-kfan-card" style={{ "--a": (i + 1) * 40 + "deg", "--i": i }}><img src={"/assets/" + c + ".webp"} alt="" /></div>
      ))}
      </div>
      <div className="bm-kfan-king"><div className="bm-kfan-inner">
      <div className="bm-mcard bm-mcard-back"><img src="/assets/icono-sello.png" alt="" /></div>
      <div className="bm-kfan-front"><img src="/assets/carta-bm-k.webp" alt="" /></div>
      </div></div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
