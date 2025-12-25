import Link from "next/link";

export default function HomePage() {
  return (
    <section
      className="
        min-h-[80vh]
        flex flex-col items-center justify-center
        px-6 text-center
      "
    >
      {/* Título */}
      <h2
        className="
          text-4xl md:text-6xl font-extrabold
          text-white mb-4
          drop-shadow-[0_4px_12px_rgba(250,204,21,0.6)]
        "
      >
        The Simpsons Explorer
      </h2>

      {/* Descripción */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10">
        Explora personajes, episodios y locaciones del universo Simpsons
        de una forma visual y divertida.
      </p>

      {/* Acciones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/characters"
          className="
            px-6 py-3 rounded-xl font-semibold
            bg-yellow-400 text-black
            shadow-md
            hover:bg-yellow-300 hover:scale-105
            transition-all duration-300
          "
        >
          Ver Personajes
        </Link>

        <Link
          href="/episodes"
          className="
            px-6 py-3 rounded-xl font-semibold
            bg-white text-gray-900 border
            shadow-sm
            hover:bg-gray-50 hover:scale-105
            transition-all duration-300
          "
        >
          Ver Episodios
        </Link>

        <Link
          href="/locations"
          className="
            px-6 py-3 rounded-xl font-semibold
            bg-white text-gray-900 border
            shadow-sm
            hover:bg-gray-50 hover:scale-105
            transition-all duration-300
          "
        >
          Ver Locaciones
        </Link>
      </div>
    </section>
  );
}
