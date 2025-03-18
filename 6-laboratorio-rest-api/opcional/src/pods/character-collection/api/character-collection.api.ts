import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const baseURL = import.meta.env.VITE_API_BASE;

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  try {
    const { data } = await axios.get<{ results: CharacterEntityApi[] }>(
      `${baseURL}/api/character`
    );
    return data.results;
  } catch (error) {
    console.error('Error fetching character collection:', error);
    throw new Error('Failed to fetch character collection');
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
};
