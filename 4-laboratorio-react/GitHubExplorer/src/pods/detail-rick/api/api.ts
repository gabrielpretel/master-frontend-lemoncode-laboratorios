import { CharacterDetail } from "./api.model";

export const getCharacterDetail = async (
  id: string
): Promise<CharacterDetail> =>
  await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(
    (response) => response.json()
  );
