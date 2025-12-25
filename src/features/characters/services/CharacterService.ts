import { api } from '@/lib/axios';
import { Character } from '../types/Character';
import { CharactersApiResponse } from '../types/CharacterApiResponse';
import { normalizeCharacters } from './character.mapper';

export const getCharacters = async (
  page: number = 1
): Promise<{ results: Character[]; pages: number }> => {
  const { data } = await api.get<CharactersApiResponse>(
    `/characters?page=${page}`
  );

  const results = normalizeCharacters(data);
  
  
  const pages = 42; 
  
  return { results, pages };
};

export const getCharacterById = async (
  id: string | number
): Promise<Character> => {
  const { data } = await api.get<CharactersApiResponse>(`/characters/${id}`);
  const results = normalizeCharacters(data);
  return results[0];
};
