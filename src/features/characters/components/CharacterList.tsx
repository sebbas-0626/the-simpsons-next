"use client";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Character } from "@/features/characters/types/Character";
import {
  getCharacters,
  getAllCharacters,
} from "@/features/characters/services/CharacterService";
import CharacterCard from "./CharacterCard";
import Pagination from "@/components/Pagination";

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  /**
   * 📄 CARGA NORMAL (PAGINADA)
   */
  useEffect(() => {
    if (isSearching) return; // ⛔ no cargar páginas si estamos buscando

    const load = async () => {
      setLoading(true);
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
  }, [currentPage, isSearching]);

  /**
   * 🔍 ACTIVAR BÚSQUEDA GLOBAL
   */
  useEffect(() => {
    if (!filter.trim()) {
      setIsSearching(false);
      return;
    }

    if (allCharacters.length === 0) {
      setIsSearching(true);
      getAllCharacters().then(setAllCharacters);
    } else {
      setIsSearching(true);
    }
  }, [filter, allCharacters.length]);

  /**
   * 🧠 FILTRADO INTELIGENTE
   */
  const filteredCharacters = useMemo(() => {
    const source = isSearching ? allCharacters : characters;

    if (!filter.trim()) return source;

    const lower = filter.trim().toLowerCase();
    return source.filter((c) => c.name.toLowerCase().startsWith(lower));
  }, [characters, allCharacters, filter, isSearching]);

  if (loading) return <p className="ml-8">Cargando personajes…</p>;

  return (
    <div className="px-8">
      {/*INPUT */}
      <input
        type="text"
        placeholder="Buscar por nombre (ej: H, Ho, Hom)"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-600 bg-black text-white p-2 mb-6 w-full max-w-sm rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      {/*CONTADOR */}
      <p className="text-gray-400 mb-4">
        Mostrando {filteredCharacters.length} personajes
        {filter && <span> que empiezan con &ldquo;{filter}&rdquo;</span>}
      </p>

      {/*GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/*SIN RESULTADOS */}
      {filteredCharacters.length === 0 && filter && (
        <p className="text-center text-gray-400 mt-8">
          No se encontraron personajes
        </p>
      )}

      {/*PAGINACIÓN */}
      {!isSearching && <Pagination page={currentPage} pages={pages} />}
    </div>
  );
};