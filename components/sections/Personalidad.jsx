/* eslint-disable @next/next/no-img-element */

const CARDS = [
  { suit: "corazon", alt: "As de corazones", title: "Creativo", text: "La creatividad es la inteligencia divirtiéndose" },
  { suit: "diamante", alt: "As de diamantes", title: "Versátil", text: "Tu imaginación es el límite" },
  { suit: "picas", alt: "As de picas", title: "Misterioso", text: "Mientras más cerca mires, menos vas a ver" },
  { suit: "treboles", alt: "As de tréboles", title: "Entretenido", text: "El mundo es mi escenario y tú formas parte de él" },
];

export default function Personalidad() {
  return (
    <>
      <section style={{ padding: "0", minHeight: "100vh", boxSizing: "border-box", display: "flex", alignItems: "stretch", position: "relative", overflow: "hidden", background: "#000" }}>
      <img src="/assets/conejo.png" alt="" aria-hidden="true" style={{ position: "absolute", top: "8%", left: "46%", width: "90px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmFloat 7s ease-in-out -2s infinite", "--r": "0deg" }} />
      <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
      <div style={{ position: "relative", flex: "0 1 60%", minWidth: "0", boxSizing: "border-box", padding: "48px 24px 48px max(24px, calc((100vw - 1240px) / 2 + 24px))" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "56px" }}>
      <h2 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "clamp(30px, 4.6vw, 54px)", lineHeight: "1.1", letterSpacing: ".04em", textTransform: "uppercase" }}>Cuatro cartas, un mago</h2>
      </div>
      <div id="bm-fan" className="bm-aces" style={{ position: "relative", perspective: "1400px" }}>
      <div id="bm-deck-fx" aria-hidden="true" style={{ position: "absolute", inset: "-80px", zIndex: "0", pointerEvents: "none" }}></div>
      {CARDS.map((c, i) => (
      <div key={c.title} className="bm-ace">
      <div data-fan="1" data-final="rotate(0deg)" style={{ position: "relative", zIndex: i + 1, perspective: "1100px" }}>
      <div data-fan-inner="1" style={{ position: "relative", aspectRatio: "2 / 3", transformStyle: "preserve-3d" }}>
      <img data-face="1" className="bm-ace-face" src={`/assets/as-${c.suit}.webp`} alt={c.alt} />
      <div aria-hidden="true" className="bm-mcard bm-mcard-back" style={{ transform: "rotateY(180deg)" }}><img src="/assets/icono-sello.png" alt="" /></div>
      </div>
      </div>
      <div data-cap="1" className="bm-ace-cap">
      <h3>{c.title}</h3>
      <p>{c.text}</p>
      </div>
      </div>
      ))}
      </div>
      </div>
      <div style={{ position: "absolute", right: "0", top: "0", bottom: "0", pointerEvents: "none" }}>
      <img src="/assets/bastian-abanico.jpg" alt="Bastian cubre medio rostro con un abanico de cartas" style={{ display: "block", height: "100%", width: "auto", maxWidth: "38vw" }} />
      <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "28%", background: "linear-gradient(to top, #000 8%, rgba(0,0,0,0))", pointerEvents: "none" }}></div>
      </div>
      </div>
      </section>
    </>
  );
}
