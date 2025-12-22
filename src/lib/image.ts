export type ImageSize = 200 | 500 | 1280;

// Construye la URL completa de la imagen de Los Simpson
export const getSimpsonsImage = (
  path: string,
  size: ImageSize = 500
) => {
  if (!path) return '';
  return `https://cdn.thesimpsonsapi.com/${size}${path}`;
};
