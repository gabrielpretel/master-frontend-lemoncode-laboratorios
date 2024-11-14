import React, { createContext, PropsWithChildren, useState } from "react";
import { CHAMPIONDATA, ChampionEntity } from "@/common/mock-data";

export interface ChampionsContextModel {
  champions: ChampionEntity[];
  setChampions: React.Dispatch<React.SetStateAction<ChampionEntity[]>>;
}

const initialChampionsContext: ChampionsContextModel = {
  champions: [],
  setChampions: () => {},
};

export const ChampionsContext = createContext<ChampionsContextModel>(
  initialChampionsContext
);

export const ChampionsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [champions, setChampions] = useState<ChampionEntity[]>(CHAMPIONDATA);

  const value = {
    champions,
    setChampions,
  };

  return (
    <ChampionsContext.Provider value={value}>
      {children}
    </ChampionsContext.Provider>
  );
};
