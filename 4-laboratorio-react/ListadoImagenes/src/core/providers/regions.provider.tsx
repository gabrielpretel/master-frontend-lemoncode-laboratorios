import { RegionEntity, REGIONSDATA } from "@/common/mock-data/regions-data";
import React, { createContext, PropsWithChildren, useState } from "react";

interface RegionsContextModel {
  regions: RegionEntity[];
  setRegions: React.Dispatch<React.SetStateAction<RegionEntity[]>>;
}

const initialRegionContext = {
  regions: [],
  setRegions: () => {},
};

export const RegionsContext =
  createContext<RegionsContextModel>(initialRegionContext);

export const RegionsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [regions, setRegions] = useState<RegionEntity[]>(REGIONSDATA);

  const value = {
    regions,
    setRegions,
  };

  return (
    <RegionsContext.Provider value={value}>{children}</RegionsContext.Provider>
  );
};
