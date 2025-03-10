import axios from 'axios';
import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  const characterResponse = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return characterResponse.data;
};

export const saveHotel = async (hotel: Character): Promise<boolean> => {
  return true;
};
