import { Character } from './Character';

export type CharactersApiResponse =
  | Character[]
  | {
      results: Character[];
    }
  | {
      data: Character[];
    }
  | Character;
