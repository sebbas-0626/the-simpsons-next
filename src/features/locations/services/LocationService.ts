import { api } from '@/lib/axios';
import { Location } from '../types/Location';
import { LocationsApiResponse } from '../types/LocationApiResponse';
import { normalizeLocations } from './locations.mapper';

/**
 * Obtiene todas las locations.
 */
export const getLocations = async (): Promise<Location[]> => {
  const { data } = await api.get<LocationsApiResponse>('/locations');
  return normalizeLocations(data);
};

/**
 * Obtiene una location por su id.
 */
export const getLocationById = async (
  id: string | number
): Promise<Location> => {
  const locations = await getLocations();
  const location = locations.find(
    (l) => String(l.id) === String(id)
  );
  if (!location) {
    throw new Error('Location not found');
  }
  return location;
};
