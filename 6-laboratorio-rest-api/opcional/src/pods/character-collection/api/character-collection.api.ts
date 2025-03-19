import { CharacterEntityApi } from './character-collection.api-model';
import { graphql } from '#core/api/graphql.client';

interface GetCharacterCollectionResponse {
  characters: {
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = `
    query {
  characters {
    results{
    id
    image  
    name
      origin{
        name
      }
    }
  }
}`;

  const { characters } = await graphql<GetCharacterCollectionResponse>({
    query,
  });

  return characters.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  return true;
};
