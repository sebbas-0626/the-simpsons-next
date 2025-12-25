import '@/globals.css';
import Header from '@/components/Header';
import { Comic_Neue, Rock_Salt } from 'next/font/google';

// Configuración de la fuente Comic Neue
export const comic = Comic_Neue({
  subsets: ['latin'],
  weight: ['700'],    
  style: ['italic'],      
});

// Configuración de la fuente Rock Salt
export const rockSalt = Rock_Salt({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
          <body className={`${comic.className}`}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
