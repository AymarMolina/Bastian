import './globals.css';

export const metadata = {
  title: 'Bastian Magic | Magia e ilusionismo',
  description: 'Shows en vivo, clases de magia y videollamadas con Bastian.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700;800&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
