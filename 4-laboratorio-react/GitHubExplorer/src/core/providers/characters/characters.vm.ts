export interface CharacterEntity {
  id: string;
  name: string;
  species: string;
  origin: { name: string };
  location: { name: string };
  image: string;
}

export interface CharactersContextModel {
  characters: CharacterEntity[];
  error: boolean;
  setFilterChar: React.Dispatch<React.SetStateAction<string>>;
  totalPages: number;
  handlePaginationChange: (e: React.ChangeEvent<unknown>, page: number) => void;
  currentPage: number;
  filterChar: string;
}

export const initialCharactersState: CharactersContextModel = {
  characters: [],
  error: false,
  setFilterChar: () => {},
  totalPages: 1,
  handlePaginationChange: () => {},
  currentPage: 1,
  filterChar: "",
};
