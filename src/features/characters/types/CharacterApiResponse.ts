import { Character } from './Character';

export type CharactersApiResponse =
  | Character[]
  | {
      results: Character[];
    }
  | {
      data: Character[];
    }
  | Character
  | {
      /**
       * The API usually returns an `info` object that contains pagination
       * details such as the total number of pages. It is optional because
       * some endpoints might not expose it.
       * la api suele devolver un objeto `info` que contiene detalles de paginación como el número total de páginas. Es opcional porque algunos endpoints podrían no exponerlo.
       */
      info?: {
        /** Total number of pages available */
        pages: number;
        /** Total number of items */
        count: number;
        /** URL of the next page, if any */
        next: string | null;
        /** URL of the previous page, if any */
        prev: string | null;
      };
      /**
       * The actual list of characters. Some endpoints return the array
       * directly, others wrap it in a `results` field.
       */
      results?: Character[];
      /**
       * Alternative field name used by some API versions.
       */
      data?: Character[];
    };
