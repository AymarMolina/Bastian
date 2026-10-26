/* eslint-disable @next/next/no-img-element */

export default function Lema() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", padding: "32px 0" }}>
      <img src="/assets/conejo.png" alt="" aria-hidden="true" style={{ position: "absolute", top: "12%", left: "3%", width: "110px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmFloat 8s ease-in-out 0s infinite", "--r": "-8deg" }} />
      <img src="/assets/poker.png" alt="" aria-hidden="true" style={{ position: "absolute", top: "14%", right: "6%", width: "90px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmSpin 10s ease-in-out 0s infinite", "--r": "-10deg" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "0 24px", boxSizing: "border-box", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px" }}>
      <div style={{ flex: "1 1 300px", minWidth: "0" }}>
      <div className="quote">
      <span className="qo" aria-hidden="true"><img src="/assets/palo-picas.png" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} /></span>
      <p style={{ margin: "0", fontWeight: "800", fontSize: "clamp(18px, 1.9vw, 24px)", lineHeight: "1.25" }}>Un poco de magia te puede llevar muy lejos</p>
      <span className="qc" aria-hidden="true"><img src="/assets/palo-picas.png" alt="" style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} /></span>
      </div>
      </div>
      <div style={{ flex: "2 1 520px", minWidth: "0" }}>
      <img src="/assets/mago.png" alt="Bastian de traje negro saludando con el sombrero" style={{ width: "100%", maxWidth: "880px", height: "auto", display: "block", margin: "0 auto", WebkitMaskImage: "linear-gradient(to bottom, #000 72%, transparent)", maskImage: "linear-gradient(to bottom, #000 72%, transparent)" }} />
      </div>
      </div>
      </section>
    </>
  );
}
