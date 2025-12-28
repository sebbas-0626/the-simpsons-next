import { Episode } from './Episodes';

/**
 * The API returns an object that contains pagination data and a `results`
 * array with the episodes.
 */
export type EpisodesApiResponse = {
  count: number;
  next: string | null;
  prev: string | null;
  pages: number;
  results: Episode[];
};
