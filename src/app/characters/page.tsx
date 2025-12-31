import CharacterCard from "@/features/characters/components/CharacterCard";
import { CharacterList } from "@/features/characters/components/CharacterList";
import { getCharacters } from "@/features/characters/services/CharacterService";
import { rockSalt } from "../layout";
import Pagination from "@/components/Pagination";

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
      {/* Renderizamos el componente con filtro */}
      <CharacterList />
    </div>
  );
}
