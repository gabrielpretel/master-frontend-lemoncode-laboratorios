import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.get<{ results: CharacterEntityApi[] }>(
    'https://rickandmortyapi.com/api/character'
  );
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
};
