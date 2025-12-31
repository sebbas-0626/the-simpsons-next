"use client";
import { useEffect, useState, useMemo } from "react";
import { Character } from "@/features/characters/types/Character";
import { getCharacters } from "@/features/characters/services/CharacterService";
import CharacterCard from "./CharacterCard";

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { results } = await getCharacters();
        setCharacters(results);
      } catch (e) {
        console.error("Error al cargar personajes", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredCharacters = useMemo(() => {
    if (!filter.trim()) return characters;

    const lower = filter.trim().toLowerCase();
    return characters.filter((c) =>
      c.name.toLowerCase().startsWith(lower)
    );
  }, [characters, filter]);

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

      {/* Resultados */}
      {/* {filteredCharacters.length === 0 ? (
        <p className="text-gray-400 italic">
          No se encontraron personajes
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )} */}
    </div>
  );
};
