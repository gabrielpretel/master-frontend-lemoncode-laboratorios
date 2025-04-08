import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import { CartSidebarComponent, FooterComponent, HeaderComponent } from "./components";

const AppLayoutContentStyle = css`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100%;
  background-image: linear-gradient(
      180deg,
      #0a0a0c,
      rgba(0, 0, 0, 0.8),
      #0a0a0c
    ),
    url("src/common/img/latestBg_Wallpaper.png");
  background-size: cover;
  background-position: center;
`;

const AppLayoutContainerStyle = css`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  height: 100%;
  background-color: #0a0a0c;
`;

const appMaxLayout = css`
  width: 1200px;
  padding: 20px;
`;

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div css={AppLayoutContainerStyle}>
      <HeaderComponent />
      <main>
        <div css={AppLayoutContentStyle}>
          <div css={appMaxLayout}>{children}</div>
        </div>
      </main>
      <FooterComponent />
      <CartSidebarComponent />
    </div>
  );
};
