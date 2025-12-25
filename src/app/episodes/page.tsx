import EpisodeList from '@/features/episodes/components/EpisodeList';
import { getEpisodes } from '@/features/episodes/services/EpisodeService';

export default async function EpisodesPage() {
  const episodes = await getEpisodes();

  console.log("episodes data", {episodes});

  return (
    <main>
      <h1 className='text-yellow-400 text-6xl flex justify-center mt-6'>Episodios</h1>
      {episodes.map((episode) => (
        <EpisodeList key={episode.id} episode={episode} />
      ))}
    </main>
  );
}
