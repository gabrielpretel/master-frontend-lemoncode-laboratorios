import { ChampionEntity, EntityType } from "@/common/mock-data";
import { RegionEntity } from "@/common/mock-data/regions-data";

export const createCartEntity = (
  entity: ChampionEntity | RegionEntity,
  entityType: EntityType
) => ({
  id: entity.id,
  name: entity.name,
  img: entity.img,
  entityType: entityType,
});
