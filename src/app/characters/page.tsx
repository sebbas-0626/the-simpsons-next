"use client";

import { useEffect, useState } from "react";
import CharacterCard from "@/sections/characters/components/CharacterCard";
import { Character } from "@/sections/characters/types/Character";
import { getCharacters } from "@/sections/characters/services/CharacterService";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getCharacters();

        // 👇 ESTE console.log es el que necesitas
        console.log("Fetched characters from API:", data);

        // getCharacters now guarantees an array
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Cargando personajes...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1
        className="
    mb-6 text-3xl md:text-6xl font-bold text-center
    text-white
    drop-shadow-[0_4px_10px_rgba(250,204,21,0.6)]
  "
      >
        Personajes
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(Array.isArray(characters) ? characters : []).map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
