import React from "react";
import { ListContainer } from "@/pods/list";
import { HeroSection } from "@/pods/hero-section";
import { CTA } from "@/pods/cta";
import { SearchOrgs } from "@/layouts/components";
import { css } from "@emotion/react";

const listSceneContainerStyle = css`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
`;

export const ListScene: React.FC = () => {
  return (
    <div css={listSceneContainerStyle}>
      <HeroSection />
      <SearchOrgs />
      <ListContainer />
      <CTA />
    </div>
  );
};
