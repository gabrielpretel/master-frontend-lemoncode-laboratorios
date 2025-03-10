import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  origin: {
    name: character.origin.name,
    url: character.origin.url,
  },
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    origin: {
      name: character.origin.name,
      url: character.origin.url,
    },
  } as unknown as apiModel.Character);
