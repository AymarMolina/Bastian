/* eslint-disable @next/next/no-img-element */

export default function SobreBastian() {
  return (
    <>
      <section id="sobre" style={{ padding: "0", minHeight: "100vh", boxSizing: "border-box", display: "flex", alignItems: "stretch", position: "relative", overflow: "hidden" }}>
      <img src="/assets/conejo.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "4%", bottom: "8%", width: "100px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmFloat 8s ease-in-out 0s infinite", "--r": "-6deg" }} />
      <img src="/assets/poker.png" alt="" aria-hidden="true" style={{ position: "absolute", top: "8%", right: "8%", width: "84px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmSpin 10s ease-in-out 0s infinite", "--r": "8deg" }} />
      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <div style={{ position: "absolute", left: "0", top: "0", bottom: "0", pointerEvents: "none" }}>
      <img src="/assets/bastian-baraja.jpg" alt="Sebastian Lazo sostiene una cascada de cartas" style={{ display: "block", height: "100%", width: "auto", maxWidth: "46vw", transform: "scaleX(-1)", WebkitMaskImage: "linear-gradient(to bottom, #000 55%, transparent 98%), linear-gradient(to right, transparent, #000 22%)", WebkitMaskComposite: "source-in", maskImage: "linear-gradient(to bottom, #000 55%, transparent 98%), linear-gradient(to right, transparent, #000 22%)", maskComposite: "intersect" }} />
      </div>
      <div style={{ position: "relative", flex: "0 1 54%", minWidth: "0", boxSizing: "border-box", padding: "48px max(24px, calc((100vw - 1240px) / 2 + 24px)) 48px 24px", display: "flex", flexDirection: "column", gap: "22px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(30px, 4.6vw, 54px)", lineHeight: "1.1", letterSpacing: ".04em", textTransform: "uppercase" }}>Sebastian Lazo le da vida a Bastian</h2>
      <p style={{ margin: "0", fontSize: "24px", lineHeight: "1.4", fontWeight: "500" }}>Actor, comunicador y mago.</p>
      <p style={{ margin: "0", color: "#a7a5a0" }}>Comenzó a desenvolverse en diversos ámbitos artísticos hasta que en 2014 llegó a la magia, al ver un especial de David Blaine y quedar impactado por cómo el mago dejaba a las personas encantadas y felices. Decidió seguir ese camino.</p>
      <div style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,.2)", marginTop: "8px" }}>
      <div style={{ flex: "1 1 200px", padding: "20px 20px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
      <span style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontSize: "40px", lineHeight: "1", letterSpacing: ".06em" }}>+12 años</span>
      <span style={{ fontSize: "14px", color: "#a7a5a0", lineHeight: "1.45" }}>Haciendo magia</span>
      </div>
      <div style={{ flex: "1 1 200px", padding: "20px 20px 0 0", display: "flex", flexDirection: "column", gap: "6px" }}>
      <span style={{ fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontSize: "40px", lineHeight: "1", letterSpacing: ".06em" }}>+11 años</span>
      <span style={{ fontSize: "14px", color: "#a7a5a0", lineHeight: "1.45" }}>Como mago profesional</span>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
