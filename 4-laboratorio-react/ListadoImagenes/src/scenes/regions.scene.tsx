import { PageTitle } from "@/core/components";
import { RegionsGallery } from "@/pods/regions-gallery";
import React from "react";

export const RegionsScene: React.FC = () => {
  return (
    <>
      <PageTitle>Regions</PageTitle>
      <RegionsGallery />
    </>
  );
};
