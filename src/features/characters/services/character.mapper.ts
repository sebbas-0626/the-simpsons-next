import { Character } from '../types/Character';
import { CharactersApiResponse } from '../types/CharacterApiResponse';

export const normalizeCharacters = (
  response: CharactersApiResponse
): Character[] => {
  if (Array.isArray(response)) return response;
  if ('results' in response && Array.isArray(response.results))
    return response.results;
  if ('data' in response && Array.isArray(response.data))
    return response.data;
  // Fallback: wrap the single character in an array
  return [response as unknown as Character];
};
