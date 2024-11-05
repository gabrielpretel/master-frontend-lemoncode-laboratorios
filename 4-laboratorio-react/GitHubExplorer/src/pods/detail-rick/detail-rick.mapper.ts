import * as am from "./api/api.model";
import * as vm from "./detail-rick.vm";

export const mapDetailRickToVM = (
  data: am.CharacterDetail
): vm.CharacterEntity => {
  return {
    id: data.id.toString(),
    name: data.name,
    species: data.species,
    origin: data.origin,
    location: data.location,
    image: data.image,
  };
};
