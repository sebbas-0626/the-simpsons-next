import EpisodeList from "@/features/episodes/components/EpisodeList";
import { getEpisodes } from "@/features/episodes/services/EpisodeService";
import { rockSalt } from "../layout";

export default async function EpisodesPage() {
  const episodes = await getEpisodes();

  console.log("episodes data", { episodes });

  return (
    <main>
      <h1
        className={`${rockSalt.className} text-white drop-shadow-[0_6px_24px_rgba(250,204,21,0.85)] text-3xl md:text-6xl flex justify-center mt-10`}
      >
        Episodios
      </h1>
      {episodes.map((episode) => (
        <EpisodeList key={episode.id} episode={episode} />
      ))}
    </main>
  );
}
