"use client";

import Image from "next/image";
import type { Character } from "@/features/characters/types/Character";
import { getSimpsonsImage } from "@/lib/image";
import Link from "next/link";

interface Props {
  character: Character;
  featured?: boolean;
}

export default function CharacterCard({ character, featured }: Props) {
  const imageUrl = getSimpsonsImage(character.portrait_path, 500);

  return (
    <div
      className={`
    group relative w-72 ml-8 rounded-2xl border-2 p-6 text-center
    bg-white
    transition-all duration-500 ease-out
    hover:scale-105 hover:border-yellow-400 hover:bg-yellow-50
    hover:drop-shadow-[0_12px_25px_rgba(250,204,21,0.45)]
    ${featured ? "border-yellow-400 bg-red-50" : "border-gray-200"}
  `}
    >
      {/* id */}
      <div className="">
        <span className="rounded-full border px-3 py-1 text-sm font-medium text-black">
          #{character.id}
        </span>
      </div>
      {/* Imagen */}
<Link href={`/characters/${character.id}`}>
  <div
    className="
      mx-auto mb-4 mt-3
      flex items-center justify-center
      h-28 w-28 sm:h-32 sm:w-32
      rounded-xl bg-white

      transition-all duration-500 ease-out
      transform

      group-hover:bg-yellow-100
      group-hover:rotate-6
      group-hover:scale-105
      group-hover:shadow-lg
      group-hover:shadow-yellow-400/50
    "
  >
    <Image
      src={imageUrl}
      alt={character.name}
      width={120}
      height={120}
      className="object-contain transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />
  </div>
</Link>


      <h3 className="text-lg font-semibold text-gray-900">{character.name}</h3>

      {character.occupation && (
        <p className="mt-1 text-sm text-gray-500">{character.occupation}</p>
      )}

      <div className="mt-4 flex justify-center gap-3">
        {character.age && (
          <span className="rounded-full border px-3 py-1 text-sm font-medium text-black">
            Age: {character.age}
          </span>
        )}

        {character.status && (
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              character.status === "Alive"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {character.status}
          </span>
        )}
      </div>
      {/* birthdate */}
      {character.birthdate && (
        <p className="mt-1 text-sm text-gray-500">{character.birthdate}</p>
      )}
    </div>
  );
}
