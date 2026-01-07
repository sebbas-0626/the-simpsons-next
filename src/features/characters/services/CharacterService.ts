import { api } from "@/lib/axios";
import { Character } from "../types/Character";
import { CharactersApiResponse } from "../types/CharacterApiResponse";
import { normalizeCharacters } from "./character.mapper";

// servicio para obtener la lista de personajes con paginacion
export const getCharacters = async (
  page: number = 1
): Promise<{ results: Character[]; pages: number }> => {
  const { data } = await api.get<CharactersApiResponse>(`/characters?page=${page}`);
  const results = normalizeCharacters(data);
  const pages = (data as { pages?: number }).pages ?? 1;
  return { results, pages };
};

// servicio para obtener un personaje por su ID
export const getCharacterById = async (
  id: string | number
): Promise<Character> => {
  const { data } = await api.get<CharactersApiResponse>(`/characters/${id}`);
  const results = normalizeCharacters(data);
  return results[0];
};

// servicio para obtener todos los personajes sin paginacion
export const getAllCharacters = async (): Promise<Character[]> => {
  let allCharacters: Character[] = [];
  let page = 1;
  let totalPages = 1;
  do {
    const { data } = await api.get<CharactersApiResponse>(`/characters?page=${page}`);
    const results = normalizeCharacters(data);
    allCharacters = allCharacters.concat(results);
    totalPages = (data as { pages?: number }).pages ?? 1;
    page++;
  } while (page <= totalPages);
  return allCharacters;
}
