import EpisodeList from "@/features/episodes/components/EpisodeList";
import { getEpisodes } from "@/features/episodes/services/EpisodeService";
import { rockSalt } from "../layout";

export default async function EpisodesPage({ searchParams }: { searchParams: { page?: string } }) {
  // Obtener el número de página de los parámetros de búsqueda
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const { results: episodes, pages } = await getEpisodes(page);

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
      {/* Paginación */}
      <div className="flex justify-center gap-4 mt-8">
        {page > 1 && (
          <a
            href={`?page=${page - 1}`}
            className="px-3 py-1 bg-gray-700 rounded text-white"
          >
            Anterior
          </a>
        )}
        {page < pages && (
          <a
            href={`?page=${page + 1}`}
            className="px-3 py-1 bg-yellow-500 rounded text-black"
          >
            Siguiente
          </a>
        )}
      </div>
    </main>
  );
}
