import { api } from '@/lib/axios';
import { Episode } from '../types/Episodes';

export const getEpisodes = async (): Promise<Episode[]> => {
    const { data } = await api.get('/episodes');
    return Array.isArray(data) ? data : data.results || [];
};

export const getEpisodeById = async (id: string): Promise<Episode> => {
    const { data } = await api.get(`/episodes/${id}`);
    return data;
};
