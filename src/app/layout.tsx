// src/app/layout.tsx
import type { Metadata } from 'next';
import '@/globals.css';
import Header from '@/components/Header';
import { Comic_Neue } from 'next/font/google';

export const metadata: Metadata = {
  title: 'The Simpsons Explorer',
  description: 'Explora personajes, episodios y locaciones de Los Simpsons',
};
// Configuración de la fuente Comic Neue
export const comic = Comic_Neue({
  subsets: ['latin'],
  weight: ['700'],    
  style: ['italic'],      
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={comic.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
