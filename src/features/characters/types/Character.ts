export interface Character {
  id: number;
  name: string;
  portrait_path: string;
  age?: number | null;
  occupation?: string | null;
  gender?: string;
  status?: 'Alive' | 'Deceased';
  phrases?: string[];
  birthdate?: string | null;
}

