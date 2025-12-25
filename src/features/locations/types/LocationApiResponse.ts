import { Location } from './Location';

export type LocationsApiResponse =
  | Location[]
  | {
      results: Location[];
    }
  | {
      data: Location[];
    }
  | Location;
