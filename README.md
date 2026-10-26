# Bastian Magic (Next.js)

```
npm install
npm run dev
```

Abre http://localhost:3000. Producción: `npm run build && npm start`.

## Estructura

```
app/
  layout.jsx        fuentes y metadatos
  page.jsx          monta <Site />
  globals.css       @font-face, botones, citas, keyframes
components/
  Site.jsx          contenedor; inicia la lógica al montar
  layout/Header.jsx, Footer.jsx
  sections/Hero, Lema, Galeria, Servicios, SobreBastian,
           Personalidad, Redes, Mision, Contacto
lib/
  site.js           videos, idioma, formulario
  i18n.js           aplica ES/EN
  translations.js   diccionario ES → EN
  animations.js     carrusel, sombrero, cartas, sobre
public/assets, public/fonts
```

Para agregar un texto traducible, añádelo a `lib/translations.js` con el texto en español exacto como clave.
