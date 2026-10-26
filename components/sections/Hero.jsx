/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <>
      <section id="inicio" style={{ position: "relative", overflow: "hidden", height: "100vh", minHeight: "640px", display: "flex", alignItems: "flex-end", justifyContent: "center", background: "#000" }}>
      <img src="/assets/hero-show.jpg" alt="Bastian en el escenario con los brazos abiertos frente al público" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
      <video src="/assets/humo.mp4" autoPlay loop muted playsInline aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "screen", opacity: ".7", pointerEvents: "none" }}></video>
      <div aria-hidden="true" style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "62%", background: "linear-gradient(to top, #000 8%, rgba(0,0,0,.72) 45%, rgba(0,0,0,0))", pointerEvents: "none" }}></div>
      <div style={{ position: "relative", width: "100%", maxWidth: "1360px", margin: "0 auto", padding: "0 24px 120px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "24px" }}>
      <h1 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(24px, 3.6vw, 56px)", lineHeight: "1.1", letterSpacing: ".05em", textTransform: "uppercase", maxWidth: "100%", textWrap: "balance" }}>Si lo ves, lo crees</h1>
      </div>
      </section>
    </>
  );
}
