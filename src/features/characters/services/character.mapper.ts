import { Character } from '../types/Character';
import { CharactersApiResponse } from '../types/CharacterApiResponse';

export const normalizeCharacters = (
  response: CharactersApiResponse
): Character[] => {
  if (Array.isArray(response)) return response;
  if ('results' in response) return response.results;
  if ('data' in response) return response.data;
  return [response];
};
