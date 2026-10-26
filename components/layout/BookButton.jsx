/* eslint-disable @next/next/no-img-element */

export default function BookButton() {
  return (
    <>
      <a id="bm-fab" className="bm-fab" href="#contacto">
      <span className="bm-fab-tip">Reserva tu show</span>
      <span className="bm-fab-hat" aria-hidden="true">
      <img src="/assets/icono-sombrero.png" alt="" />
      <span className="bm-fab-letter">R</span>
      </span>
      </a>
    </>
  );
}
