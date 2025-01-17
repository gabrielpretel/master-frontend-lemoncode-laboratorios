interface CharacterOrigin {
  name: string;
  url: string;
}
interface CharacterLocation {
  name: string;
  url: string;
}

export interface CharacterDetail {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
