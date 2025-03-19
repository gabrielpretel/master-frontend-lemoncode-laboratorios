import { Character } from './character.api-model';
import { graphql } from '#core/api/graphql.client';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = `
    query {
  character(id: "${id}") {
    id
    name
    location{
      name
    }
    origin{
      name
    }
  }
}`;

  const { character } = await graphql<GetCharacterResponse>({
    query,
  });

  return character;
};

export const saveHotel = async (hotel: Character): Promise<boolean> => {
  return true;
};
