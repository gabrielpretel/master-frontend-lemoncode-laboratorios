import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: character.id,
  name: character.name,
  origin: {
    name: character.origin.name,
    url: character.origin.url,
  },
  image: character.image,
});
