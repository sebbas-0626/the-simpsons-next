// src/app/layout.tsx
import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/src/sections/components/Header';

export const metadata: Metadata = {
  title: 'The Simpsons Explorer',
  description: 'Explora personajes, episodios y locaciones de Los Simpsons',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
