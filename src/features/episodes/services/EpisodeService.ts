import { api } from '@/lib/axios';
import { Episode } from '../types/Episodes';
import { EpisodesApiResponse } from '../types/EpisodesApiResponse';
import { normalizeEpisodes } from './episode.mapper';

/**
 * Fetches a page of episodes. The API returns an object that contains
 * pagination information (`count`, `pages`, `next`, `prev`) and a `results`
 * array with the episode data.
 */
export const getEpisodes = async (
    page: number = 1
): Promise<{ results: Episode[]; pages: number }> => {
    const { data } = await api.get<EpisodesApiResponse>(`/episodes?page=${page}`);
    const results = normalizeEpisodes(data);
    const pages = data.pages ?? 1;
    return { results, pages };
};

/**
 * Fetches a single episode by its ID.
 */
export const getEpisodeById = async (
    id: string
): Promise<Episode> => {
    const { data } = await api.get(`/episodes/${id}`);
    return data as Episode;
};
