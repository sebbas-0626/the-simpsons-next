import { Location } from "../types/Location";
import { LocationsApiResponse } from "../types/LocationApiResponse";

/**
 * Normaliza la respuesta de la API de locations.
 * La API puede devolver un array directamente, o un objeto con la propiedad
 * `results` o `data`. En caso de recibir un único objeto, lo envuelve en un array.
 */
export const normalizeLocations = (
  response: LocationsApiResponse
): Location[] => {
  if (Array.isArray(response)) return response;
  if ('results' in response) return response.results;
  if ('data' in response) return response.data;
  return [response as Location];
};