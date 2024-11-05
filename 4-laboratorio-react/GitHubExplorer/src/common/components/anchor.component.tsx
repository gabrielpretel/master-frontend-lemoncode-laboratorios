import React, { PropsWithChildren } from "react";
import styled from "@emotion/styled";
import theme from "../theme/mui.theme";
import { Theme } from "@mui/material";

interface Props {
  url: string;
  targetBlank?: boolean;
}

const StyledAnchor = styled.a<{ theme: Theme }>`
  color: ${(props) => props.theme.palette.text.primary};
  text-decoration: none;
  font-weight: bold;
  margin-left: 4px;

  &:hover {
    filter: drop-shadow(0px 5px 10px #7c7d81);
    transition: filter ease 0.2s;
  }
`;

export const Anchor: React.FC<PropsWithChildren<Props>> = (props) => {
  const { url, targetBlank, children } = props;

  return (
    <StyledAnchor
      href={url}
      target={targetBlank ? "_blank" : undefined}
      theme={theme}
    >
      {children}
    </StyledAnchor>
  );
};
