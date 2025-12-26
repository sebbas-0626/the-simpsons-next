import CharacterCard from "@/features/characters/components/CharacterCard";
import { getCharacters } from "@/features/characters/services/CharacterService";
import { rockSalt } from "../layout";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function CharactersPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const data = await getCharacters(page);
  console.log("characters data", { data });

  return (
    <div className="container mx-auto py-8">
      <h1
        className={`${rockSalt.className}
          mb-6 text-3xl md:text-6xl font-bold text-center mt-4
          text-white
        drop-shadow-[0_6px_24px_rgba(250,204,21,0.85)]
        `}
      >
        Personajes
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* PAGINACIÓN */}
      <div className="flex justify-center gap-4 mt-10">
        {page > 1 && (
          <a
            href={`?page=${page - 1}`}
            className="px-4 py-2 bg-gray-700 rounded"
          >
            Anterior
          </a>
        )}

        {page < data.pages && (
          <a
            href={`?page=${page + 1}`}
            className="px-4 py-2 bg-yellow-500 text-black rounded"
          >
            Siguiente
          </a>
        )}
      </div>
    </div>
  );
}
