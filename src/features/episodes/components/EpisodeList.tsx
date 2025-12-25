import Image from "next/image";
import { Episode } from "../types/Episodes";
import { getSimpsonsImage } from "@/lib/image";


interface Props {
  episode: Episode;
}

export default function EpisodeList({ episode }: Props) {
  if (!episode) {
    return <div>Loading...</div>;
  }
  const imageUrl = getSimpsonsImage(episode.image_path || '', 500)

  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-2">
        {episode.name}
      </h1>

      {/* Info básica */}
      <p className="text-sm text-gray-500 mb-4">
        Temporada {episode.season} · Episodio {episode.episode_number} · {episode.airdate}
      </p>

      {/* Imagen */}
      <div className="relative w-full h-[400px] mb-6">
        <Image
          src={imageUrl}
          alt={episode.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Sinopsis */}
      <p className="text-base leading-relaxed">
        {episode.synopsis}
      </p>
    </main>
  )
}
