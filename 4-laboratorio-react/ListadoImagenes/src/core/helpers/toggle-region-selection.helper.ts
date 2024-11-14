import { RegionEntity } from "@/common/mock-data";

export const toggleRegionSelection = (
  region: RegionEntity,
  selected: boolean,
  regions: RegionEntity[]
) =>
  regions.map((reg: RegionEntity) =>
    reg.id === region.id ? { ...reg, selected } : reg
  );
