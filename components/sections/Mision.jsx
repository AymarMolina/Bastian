/* eslint-disable @next/next/no-img-element */

export default function Mision() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", height: "70vh", display: "flex", alignItems: "center", background: "#000" }}>
      <video src="/assets/mejor-truco.mp4" autoPlay loop muted playsInline aria-hidden="true" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", zIndex: "0", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", background: "linear-gradient(to bottom, #000 0%, rgba(0,0,0,.5) 25%, rgba(0,0,0,.5) 75%, #000 100%)", zIndex: "1", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: "2", width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
      <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(24px, 3.2vw, 38px)", lineHeight: "1.1", letterSpacing: ".04em", textTransform: "uppercase" }}>Nuestro mejor truco</h2>
      <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.55", maxWidth: "36ch" }}><span>Acercar el mundo de la magia a más personas y lograr que descubran nuevas formas de entretenimiento a través de nuestras experiencias mágicas.</span> <span>Convertirnos en uno de los servicios de magia más reconocidos en América.</span></p>
      </div>
      </div>
      </section>
    </>
  );
}
