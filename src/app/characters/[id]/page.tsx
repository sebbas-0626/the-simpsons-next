import Image from "next/image";
import { getSimpsonsImage } from "@/lib/image";
import { notFound } from "next/navigation";
import { getCharacterById } from "@/features/characters/services/CharacterService";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CharacterDetailPage({ params }: Props) {
  const { id } = await params; // ✅ AQUÍ ESTÁ LA CLAVE

  let character;

  try {
    character = await getCharacterById(id);
  } catch {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-8 md:py-10">
      {/* Info */}
      <div className="pb-6 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 justify-center text-center text-white">
          {character.name}
        </h1>
        {/* Listado como botones horizontales */}
        <ul className="flex flex-wrap justify-center gap-3 text-sm sm:text-base md:text-base text-white">
          {character.age && (
            <li className="bg-gray-900 px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition-colors">
              <strong className="text-yellow-400">Edad:</strong> {character.age}
            </li>
          )}

          {character.gender && (
            <li className="bg-gray-900 px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition-colors">
              <strong className="text-yellow-400">Género:</strong>{" "}
              {character.gender}
            </li>
          )}

          {character.occupation && (
            <li className="bg-gray-900 px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition-colors">
              <strong className="text-yellow-400">Ocupación:</strong>{" "}
              {character.occupation}
            </li>
          )}

          {character.status && (
            <li className="bg-gray-900 px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition-colors">
              <strong className="text-yellow-400">Estado:</strong>{" "}
              {character.status}
            </li>
          )}
        </ul>
      </div>
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 sm:ml-0 md:ml-32">
        {/* Imagen */}
        <div className="flex justify-center bg-white p-4 rounded-xl shadow-yellow-400 w-full sm:w-auto">
          <Image
            src={getSimpsonsImage(character.portrait_path, 500)}
            alt={character.name}
            width={400}
            height={400}
            className="rounded-xl object-contain w-full h-auto"
            priority
            unoptimized
          />
        </div>
        {/* frases */}
        <div className="md:col-span-2 sm:col-span-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-yellow-400">Frases</h2>
          <ul className="space-y-2">
            {character.phrases?.map((phrase, index) => (
              <li key={index} className="italic">
                &ldquo;{phrase}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
