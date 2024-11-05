import { HeroRickSection } from "@/pods/hero-section-rick";
import { ListRickContainer } from "@/pods/list-rick";
import { SearchChar } from "@/pods/search-char/search-char.component";
import { css } from "@emotion/react";
import React from "react";

const listSceneContainerStyle = css`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  height: 100%;
`;

export const AppRickListScene: React.FC = () => {
  return (
    <div css={listSceneContainerStyle}>
      <HeroRickSection />
      <SearchChar />
      <ListRickContainer />
    </div>
  );
};
