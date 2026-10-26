/* eslint-disable @next/next/no-img-element */

export default function Servicios() {
  return (
    <>
      <section id="shows" style={{ position: "relative", overflow: "hidden", padding: "140px 0 160px" }}>
      <img src="/assets/conejo.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "5%", bottom: "6%", width: "100px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmFloat 9s ease-in-out -3s infinite", "--r": "6deg" }} />
      <img src="/assets/poker.png" alt="" aria-hidden="true" style={{ position: "absolute", top: "10%", right: "10%", width: "84px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmSpin 11s ease-in-out 0s infinite", "--r": "0deg" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "760px", marginBottom: "96px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(30px, 4.6vw, 54px)", lineHeight: "1.1", letterSpacing: ".04em", textTransform: "uppercase" }}>Una experiencia completa de magia</h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "56px 64px" }}>
      <article style={{ position: "relative", flex: "1 1 260px", minWidth: "0", padding: "0", display: "flex", flexDirection: "column", gap: "20px", paddingRight: "0" }}>
      <img src="/assets/icono-sombrero.png" alt="" aria-hidden="true" style={{ display: "block", width: "60px", height: "60px", objectFit: "contain", pointerEvents: "none" }} />
      <h3 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.1", letterSpacing: ".06em", textTransform: "uppercase" }}>Shows en vivo</h3>
      <p style={{ margin: "0", color: "#a7a5a0" }}>Magia con cartas y mucho más, para que el público sea parte de la función. El mundo es su escenario.</p>
      </article>
      <article style={{ position: "relative", flex: "1 1 260px", minWidth: "0", padding: "0", display: "flex", flexDirection: "column", gap: "20px", paddingRight: "0" }}>
      <img src="/assets/icono-cartas.png" alt="" aria-hidden="true" style={{ display: "block", width: "60px", height: "60px", objectFit: "contain", pointerEvents: "none" }} />
      <h3 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.1", letterSpacing: ".06em", textTransform: "uppercase" }}>Clases de magia</h3>
      <p style={{ margin: "0", color: "#a7a5a0" }}>Clases dictadas por un mago profesional. Tu imaginación es el límite.</p>
      </article>
      <article style={{ position: "relative", flex: "1 1 260px", minWidth: "0", padding: "0", display: "flex", flexDirection: "column", gap: "20px", paddingRight: "0" }}>
      <img src="/assets/icono-sello.png" alt="" aria-hidden="true" style={{ display: "block", width: "60px", height: "60px", objectFit: "contain", pointerEvents: "none" }} />
      <h3 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "24px", lineHeight: "1.1", letterSpacing: ".06em", textTransform: "uppercase" }}>Videollamadas</h3>
      <p style={{ margin: "0", color: "#a7a5a0" }}>Un momento de magia para personas especiales, sin importar dónde estén.</p>
      </article>
      </div>
      <div style={{ marginTop: "160px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", textAlign: "center" }}>
      <h2 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(30px, 4.6vw, 54px)", lineHeight: "1.1", letterSpacing: ".04em", textTransform: "uppercase" }}>Momentos de sus shows</h2>
      </div>
      <div id="bm-gal-wrap" style={{ position: "relative", width: "100%", height: "700px", marginTop: "8px", overflow: "hidden" }}>
      <div id="bm-gal" style={{ position: "absolute", left: "50%", top: "0", width: "1200px", height: "700px", marginLeft: "-600px", transformOrigin: "50% 0", perspective: "1400px" }}>
      <div data-card="0" style={{ position: "absolute", left: "50%", bottom: "190px", width: "190px", height: "285px", marginLeft: "-95px", transformOrigin: "50% 100%", transform: "translateY(150px) scale(.3)", opacity: "0", zIndex: "1", cursor: "pointer", transition: "transform 1s cubic-bezier(.2,.9,.25,1.08), opacity .4s ease", perspective: "900px" }}>
      <div data-inner="" style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform .9s cubic-bezier(.3,.8,.3,1)" }}>
      <div className="bm-mcard bm-mcard-back">
      <img src="/assets/icono-sello.png" alt="" />
      </div>
      <div className="bm-mcard bm-mcard-front">
      <img src="/assets/evento-2.png" alt="Bastian saluda a una niña en un show al aire libre" />
      </div>
      </div>
      </div>
      <div data-card="1" style={{ position: "absolute", left: "50%", bottom: "190px", width: "190px", height: "285px", marginLeft: "-95px", transformOrigin: "50% 100%", transform: "translateY(150px) scale(.3)", opacity: "0", zIndex: "1", cursor: "pointer", transition: "transform 1s cubic-bezier(.2,.9,.25,1.08), opacity .4s ease", perspective: "900px" }}>
      <div data-inner="" style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform .9s cubic-bezier(.3,.8,.3,1)" }}>
      <div className="bm-mcard bm-mcard-back">
      <img src="/assets/icono-sello.png" alt="" />
      </div>
      <div className="bm-mcard bm-mcard-front">
      <img src="/assets/evento-2.png" alt="Bastian saluda a una niña en un show al aire libre" />
      </div>
      </div>
      </div>
      <div data-card="2" style={{ position: "absolute", left: "50%", bottom: "190px", width: "190px", height: "285px", marginLeft: "-95px", transformOrigin: "50% 100%", transform: "translateY(150px) scale(.3)", opacity: "0", zIndex: "1", cursor: "pointer", transition: "transform 1s cubic-bezier(.2,.9,.25,1.08), opacity .4s ease", perspective: "900px" }}>
      <div data-inner="" style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform .9s cubic-bezier(.3,.8,.3,1)" }}>
      <div className="bm-mcard bm-mcard-back">
      <img src="/assets/icono-sello.png" alt="" />
      </div>
      <div className="bm-mcard bm-mcard-front">
      <img src="/assets/evento-3.png" alt="Bastian con un invitado en una feria" />
      </div>
      </div>
      </div>
      <div data-card="3" style={{ position: "absolute", left: "50%", bottom: "190px", width: "190px", height: "285px", marginLeft: "-95px", transformOrigin: "50% 100%", transform: "translateY(150px) scale(.3)", opacity: "0", zIndex: "1", cursor: "pointer", transition: "transform 1s cubic-bezier(.2,.9,.25,1.08), opacity .4s ease", perspective: "900px" }}>
      <div data-inner="" style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform .9s cubic-bezier(.3,.8,.3,1)" }}>
      <div className="bm-mcard bm-mcard-back">
      <img src="/assets/icono-sello.png" alt="" />
      </div>
      <div className="bm-mcard bm-mcard-front">
      <img src="/assets/evento-4.png" alt="Bastian con sombrero equilibra una baraja en el dedo" />
      </div>
      </div>
      </div>
      <div data-card="4" style={{ position: "absolute", left: "50%", bottom: "190px", width: "190px", height: "285px", marginLeft: "-95px", transformOrigin: "50% 100%", transform: "translateY(150px) scale(.3)", opacity: "0", zIndex: "1", cursor: "pointer", transition: "transform 1s cubic-bezier(.2,.9,.25,1.08), opacity .4s ease", perspective: "900px" }}>
      <div data-inner="" style={{ position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d", transition: "transform .9s cubic-bezier(.3,.8,.3,1)" }}>
      <div className="bm-mcard bm-mcard-back">
      <img src="/assets/icono-sello.png" alt="" />
      </div>
      <div className="bm-mcard bm-mcard-front">
      <img src="/assets/evento-5.png" alt="Bastian muestra un abanico de cartas en un escenario" />
      </div>
      </div>
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "50%", bottom: "40px", width: "900px", height: "620px", marginLeft: "-450px", background: "radial-gradient(50% 50% at 50% 55%, rgba(30,80,180,.55), rgba(16,50,112,.28) 45%, transparent 72%)", pointerEvents: "none", zIndex: "0" }}></div>
      <img src="/assets/sombrero.png" alt="Sombrero de mago" style={{ position: "absolute", left: "50%", bottom: "-50px", width: "380px", height: "auto", marginLeft: "-190px", zIndex: "3", pointerEvents: "none", filter: "drop-shadow(0 20px 30px rgba(0,0,0,.8))" }} />
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
