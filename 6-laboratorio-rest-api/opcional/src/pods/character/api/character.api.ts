import axios from 'axios';
import { Character } from './character.api-model';

const baseURL = import.meta.env.VITE_API_BASE;

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const characterResponse = await axios.get(`${baseURL}/api/character/${id}`);

    return characterResponse.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw new Error('Failed to fetch character');
  }
};

export const saveHotel = async (hotel: Character): Promise<boolean> => {
  return true;
};
