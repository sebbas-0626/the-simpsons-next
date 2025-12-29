export interface Character {
  id: number;
  name: string;
  portrait_path: string;
  age?: number | null;
  occupation?: string | null;
  gender?: string;
  description?: string | null;
  status?: 'Alive' | 'Deceased';
  phrases?: string[];
  birthdate?: string | null;
  first_appearance_ep?: {
    id: number;
    name: string;
    season: number;
    episode_number: number;
    image_path: string;
    synopsis: string;
    airdate: string;
  } | null;
}