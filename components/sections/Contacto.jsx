/* eslint-disable @next/next/no-img-element */

export default function Contacto() {
  return (
    <>
      <section id="contacto" style={{ position: "relative", overflow: "hidden", background: "radial-gradient(42% 34% at 50% 55%, rgba(16,50,112,.45), rgba(16,50,112,0) 100%), #000" }}>
      <img src="/assets/poker.png" alt="" aria-hidden="true" style={{ position: "absolute", right: "8%", bottom: "12%", width: "84px", height: "auto", opacity: "0.09", filter: "invert(1)", pointerEvents: "none", animation: "bmSpin 9s ease-in-out 0s infinite", "--r": "0deg" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "96px 24px 88px", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px" }}>
      <form id="bm-form" style={{ position: "relative", width: "100%", maxWidth: "760px", marginTop: "0", padding: "40px", boxSizing: "border-box", border: "1px solid rgba(255,255,255,.1)", borderRadius: "16px", background: "rgba(255,255,255,.05)", WebkitBackdropFilter: "blur(14px)", backdropFilter: "blur(14px)", boxShadow: "0 30px 60px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.08)", display: "flex", flexDirection: "column", gap: "22px", textAlign: "left" }}>
      <h3 style={{ margin: "0", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "26px", letterSpacing: ".06em", textTransform: "uppercase" }}>Escríbele a Bastian</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "22px" }}>
      <label style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", fontSize: "11px", fontWeight: "700", letterSpacing: ".3em", textTransform: "uppercase", color: "#a7a5a0" }}><span>Nombre</span><input name="nombre" type="text" required autoComplete="name" placeholder="Tu nombre" style={{ display: "block", width: "100%", boxSizing: "border-box", background: "rgba(0,0,0,.35)", border: "1px solid rgba(255,255,255,.12)", color: "#f6f5f2", padding: "14px 16px", font: "500 16px/1.4 Raleway, sans-serif", borderRadius: "8px" }} /></label>
      <label style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", fontSize: "11px", fontWeight: "700", letterSpacing: ".3em", textTransform: "uppercase", color: "#a7a5a0" }}><span>Correo</span><input name="correo" type="email" required autoComplete="email" placeholder="tu@correo.com" style={{ display: "block", width: "100%", boxSizing: "border-box", background: "rgba(0,0,0,.35)", border: "1px solid rgba(255,255,255,.12)", color: "#f6f5f2", padding: "14px 16px", font: "500 16px/1.4 Raleway, sans-serif", borderRadius: "8px" }} /></label>
      </div>
      <label style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", fontSize: "11px", fontWeight: "700", letterSpacing: ".3em", textTransform: "uppercase", color: "#a7a5a0" }}><span>Tipo de evento</span><select name="evento" required style={{ display: "block", width: "100%", boxSizing: "border-box", background: "rgba(0,0,0,.35)", border: "1px solid rgba(255,255,255,.12)", color: "#f6f5f2", padding: "14px 16px", font: "500 16px/1.4 Raleway, sans-serif", borderRadius: "8px" }}>
      <option value="" style={{ background: "#000" }}>Selecciona una opción</option>
      <option value="Show en vivo" style={{ background: "#000" }}>Show en vivo</option>
      <option value="Clase de magia" style={{ background: "#000" }}>Clase de magia</option>
      <option value="Videollamada" style={{ background: "#000" }}>Videollamada</option>
      <option value="Evento corporativo" style={{ background: "#000" }}>Evento corporativo</option>
      <option value="Otro" style={{ background: "#000" }}>Otro</option>
      </select></label>
      <label style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "left", fontSize: "11px", fontWeight: "700", letterSpacing: ".3em", textTransform: "uppercase", color: "#a7a5a0" }}><span>Mensaje</span><textarea name="mensaje" rows="5" required placeholder="Cuéntanos fecha, lugar y qué quieres celebrar" style={{ display: "block", width: "100%", boxSizing: "border-box", background: "rgba(0,0,0,.35)", border: "1px solid rgba(255,255,255,.12)", color: "#f6f5f2", padding: "14px 16px", font: "500 16px/1.4 Raleway, sans-serif", borderRadius: "8px", resize: "vertical" }}></textarea></label>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}><button type="submit" className="btn-s" style={{ minHeight: "46px", padding: "10px 24px 10px 18px", gap: "10px", fontFamily: "'Trajan Pro', 'Trajan', 'Cinzel', serif", fontWeight: "400", fontSize: "14px", letterSpacing: ".16em" }}><img src="/assets/palo-corazon.png" alt="" style={{ width: "16px", height: "16px", objectFit: "contain" }} />Enviar</button><span id="bm-form-note" style={{ fontSize: "14px", color: "#a7a5a0" }}></span></div>
      </form>
      </div>
      </section>
    </>
  );
}
