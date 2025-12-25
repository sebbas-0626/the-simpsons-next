export interface Episode {
  id: number;
  name: string;
  season: number;
  episode_number: number;
  airdate: string;
  synopsis?: string;
  image_path?: string;
}