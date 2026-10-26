/* eslint-disable @next/next/no-img-element */

export default function Redes() {
  return (
    <>
      <section id="redes" style={{ position: "relative", overflow: "hidden", padding: "96px 0" }}>
      <img src="/assets/poker.png" alt="" aria-hidden="true" style={{ position: "absolute", top: "10%", right: "5%", width: "96px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmSpin 9s ease-in-out 0s infinite", "--r": "10deg" }} />
      <img src="/assets/conejo.png" alt="" aria-hidden="true" style={{ position: "absolute", left: "4%", bottom: "8%", width: "100px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmFloat 8s ease-in-out 0s infinite", "--r": "0deg" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px" }}>
      <div style={{ flex: "1.05 1 380px", minWidth: "0" }}>
      <div id="bm-cards" style={{ position: "relative", width: "100%", aspectRatio: "1080 / 800", perspective: "1400px" }}>
      <img data-bmc="1" src="/assets/carta-bm-j.webp" alt="Jota de diamantes" style={{ position: "absolute", left: "13%", top: "16%", width: "26%", height: "auto", rotate: "-26deg", transformOrigin: "50% 115%", borderRadius: "4%", filter: "drop-shadow(0 0 1px rgba(220,226,240,.6)) drop-shadow(0 22px 30px rgba(0,0,0,.85)) drop-shadow(0 6px 10px rgba(0,0,0,.6))" }} />
      <img data-bmc="1" src="/assets/carta-bm-n.webp" alt="Nueve de picas" style={{ position: "absolute", left: "25%", top: "11%", width: "26%", height: "auto", rotate: "-13deg", transformOrigin: "50% 115%", borderRadius: "4%", filter: "drop-shadow(0 0 1px rgba(220,226,240,.6)) drop-shadow(0 22px 30px rgba(0,0,0,.85)) drop-shadow(0 6px 10px rgba(0,0,0,.6))" }} />
      <img data-bmc="1" src="/assets/carta-bm-k.webp" alt="Rey de diamantes" style={{ position: "absolute", left: "37%", top: "9%", width: "26%", height: "auto", rotate: "0deg", transformOrigin: "50% 115%", borderRadius: "4%", filter: "drop-shadow(0 0 1px rgba(220,226,240,.6)) drop-shadow(0 22px 30px rgba(0,0,0,.85)) drop-shadow(0 6px 10px rgba(0,0,0,.6))" }} />
      <img data-bmc="1" src="/assets/carta-bm-d.webp" alt="Nueve de diamantes" style={{ position: "absolute", left: "49%", top: "11%", width: "26%", height: "auto", rotate: "13deg", transformOrigin: "50% 115%", borderRadius: "4%", filter: "drop-shadow(0 0 1px rgba(220,226,240,.6)) drop-shadow(0 22px 30px rgba(0,0,0,.85)) drop-shadow(0 6px 10px rgba(0,0,0,.6))" }} />
      <img data-bmc="1" src="/assets/carta-bm-s.webp" alt="Siete de picas" style={{ position: "absolute", left: "61%", top: "16%", width: "26%", height: "auto", rotate: "26deg", transformOrigin: "50% 115%", borderRadius: "4%", filter: "drop-shadow(0 0 1px rgba(220,226,240,.6)) drop-shadow(0 22px 30px rgba(0,0,0,.85)) drop-shadow(0 6px 10px rgba(0,0,0,.6))" }} />
      </div>
      </div>
      <div style={{ flex: "0.95 1 380px", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "22px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(30px, 4.6vw, 54px)", lineHeight: "1.1", letterSpacing: ".04em", textTransform: "uppercase" }}>Los trucos, en Instagram</h2>
      <p style={{ margin: "0", color: "#a7a5a0", maxWidth: "48ch" }}>Las redes son el escenario principal de Bastian: videos de trucos, videollamadas con personas especiales y novedades de sus shows.</p>
      <div style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontSize: "clamp(26px, 3.4vw, 42px)", letterSpacing: ".08em" }}>@bastian.magic</div>
      <a className="btn-o" href="https://www.instagram.com/bastian.magic" target="_blank" rel="noopener">Abrir Instagram</a>
      </div>
      </div>
      </section>
    </>
  );
}
