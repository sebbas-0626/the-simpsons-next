import { Episode } from '../types/Episodes';
import { EpisodesApiResponse } from '../types/EpisodesApiResponse';

/**
 * Normalizes the API response for episodes. The API can return either an
 * array of episodes or an object that contains a `results` array.
 */
export const normalizeEpisodes = (
  response: EpisodesApiResponse
): Episode[] => {
  if (Array.isArray(response)) return response;
  if ('results' in response && Array.isArray(response.results))
    return response.results;
  return [];
};
