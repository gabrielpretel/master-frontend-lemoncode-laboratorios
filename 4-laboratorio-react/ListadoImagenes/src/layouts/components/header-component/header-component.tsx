import React from "react";
import LogoIcon from "@/common/icons/logo-icon.svg?react";
import { css } from "@emotion/react";
import {
  NavBarComponent,
  CartMenuComponent,
} from "./components";

const headerComponentStyle = css`
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 80px;
  background-color: #111111;
  color: white;
`;

export const HeaderComponent: React.FC = () => {
  return (
    <div css={headerComponentStyle}>
      <LogoIcon css={{ marginTop: "1.625rem" }} />
      <NavBarComponent />
      <CartMenuComponent />
    </div>
  );
};
