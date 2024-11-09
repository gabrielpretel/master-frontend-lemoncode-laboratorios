import React from "react";
import { css } from "@emotion/react";
import { HomeGallery } from "@/pods/home-gallery";

const homeSceneStyle = css`
  width: 1200px;
  padding: 20px;
`;

export const HomeScene: React.FC = () => {
  return (
    <div css={homeSceneStyle}>
      <HomeGallery />
    </div>
  );
};
