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

export const saveCharacter = async (character: Character): Promise<Boolean> => {
  try {
    await axios.put(`${baseURL}/api/character/${character.id}`, character);
    return true;
  } catch (error) {
    console.error('Error saving character:', error);
    throw new Error('Failed to save character');
  }
};
