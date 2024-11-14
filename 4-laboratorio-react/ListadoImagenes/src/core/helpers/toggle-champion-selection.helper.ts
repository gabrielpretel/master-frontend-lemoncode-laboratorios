import { ChampionEntity } from "@/common/mock-data";

export const toggleChampionSelection = (
  champ: ChampionEntity,
  selected: boolean,
  champions: ChampionEntity[]
) =>
  champions.map((champion: ChampionEntity) =>
    champion.id === champ.id ? { ...champion, selected } : champion
  );
