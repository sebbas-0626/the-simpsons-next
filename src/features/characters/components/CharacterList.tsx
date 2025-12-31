"use client";
import { useEffect, useState, useMemo } from "react";
import { Character } from "@/features/characters/types/Character";
import { getCharacters } from "@/features/characters/services/CharacterService";

/**
 * Lista de personajes con filtro de búsqueda.
 * Utiliza los hooks `useState`, `useEffect` y `useMemo` para manejar el estado,
 * cargar datos y filtrar la lista de forma eficiente.
 */
export const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Cargar datos al montar el componente
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

  // Filtrar la lista de personajes (memorizado)
  const filtered = useMemo(() => {
    return characters.filter((c) =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [characters, filter]);

  if (loading) return <p>Cargando personajes…</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar…"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filtered.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
};
