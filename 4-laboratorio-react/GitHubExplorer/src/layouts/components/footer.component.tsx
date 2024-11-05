import React from "react";
import Typography from "@mui/material/Typography";
import { Anchor } from "@/common/components/";
import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";
import theme from "@/common/theme/mui.theme";

const StyledFooter = styled.div<{ theme: Theme }>`
  color: "text.primary";
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  width: 940px;
  align-self: center;
  border-radius: 20px;
  margin: 20px 0px;
  text-align: center;
  background: radial-gradient(
      at 80% -50%,
      #4effca40 0%,
      #4effca10 60%,
      transparent
    ),
    #181818;
`;

const actualYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const fontStyle = {
    fontWeight: "200",
    fontSize: "0.85rem",
    color: "#f2f2f2",
  };

  return (
    <StyledFooter theme={theme}>
      <div>
        <Typography component="span" sx={fontStyle}>
          Diseño y desarrollo por
          <Anchor url="https://github.com/gabrielpretel/" targetBlank={true}>
            Gabriel Pretel
          </Anchor>
          .
        </Typography>
      </div>
      <div>
        <Typography component="span" sx={fontStyle}>
          <b>Lemoncode</b>, {actualYear}.
        </Typography>
      </div>
    </StyledFooter>
  );
};
