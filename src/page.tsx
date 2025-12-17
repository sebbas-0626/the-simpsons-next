// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h2>Bienvenido a The Simpsons Explorer</h2>
      <p>
        Explora personajes, episodios y locaciones del universo Simpsons.
      </p>

      <div className="actions">
        <Link href="/characters">Ver Personajes</Link>
        <Link href="/episodes">Ver Episodios</Link>
        <Link href="/locations">Ver Locaciones</Link>
      </div>
    </section>
  );
}
