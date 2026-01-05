"use client";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Character } from "@/features/characters/types/Character";
import { getCharacters, getAllCharacters  } from "@/features/characters/services/CharacterService";
import CharacterCard from "./CharacterCard";
import Pagination from "@/components/Pagination";

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get('page')) || 1;

  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getCharacters(currentPage);
        setCharacters(data.results);
        setPages(data.pages);
      } catch (e) {
        console.error("Error al cargar personajes", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [currentPage]);

  const filteredCharacters = useMemo(() => {
    if (!filter.trim()) return characters;

    const lower = filter.trim().toLowerCase();
    return characters.filter((c) =>
      c.name.toLowerCase().startsWith(lower)
    );
  }, [characters, filter]);

  // Reset to page 1 when filtering
  useEffect(() => {
    if (filter && currentPage !== 1) {
      router.push('/characters');
    }
  }, [filter, currentPage, router]);

  if (loading) return <p className="ml-8">Cargando personajes…</p>;

  return (
    <div className="px-8">
      {/* Input */}
      <input
        type="text"
        placeholder="Buscar por nombre (ej: H, Ho, Hom)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-600 bg-black text-white p-2 mb-6 w-full max-w-sm rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      
      {/* Results count */}
      <p className="text-gray-400 mb-4">
        Mostrando {filteredCharacters.length} personajes
    {filter && (
      <span>{' '}que empiezan con &ldquo;{filter}&rdquo;</span>
    )}
      </p>
      {/* Character grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-0 md:px-0">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      
      {/* No results message */}
      {filteredCharacters.length === 0 && filter && (
        <div className="text-center text-gray-400 mt-8">
          <p>No se encontraron personajes que empiecen con &ldquo;{filter}&rdquo;</p>
        </div>
      )}
      
      {/* Pagination - only show when not filtering */}
      {!filter && (
        <Pagination page={currentPage} pages={pages} />
      )}
    </div>
  );
};
