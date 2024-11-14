import React from "react";
import { ChampionsGallery } from "@/pods/champions-gallery";
import { PageTitle } from "@/core/components";

export const ChampionsScene: React.FC = () => {
  return (
    <>
      <PageTitle>Champions</PageTitle>
      <ChampionsGallery />
    </>
  );
};
