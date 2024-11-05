import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/routers";
import { css } from "@emotion/react";

const returnLinkStyle = css`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 5px;

  &:hover {
    filter: drop-shadow(0px 5px 10px #7c7d81);
    transition: filter ease 0.2s;
  }
`;

interface Props {
  currentPath: string;
}

export const ReturnLink: React.FC<Props> = ({ currentPath }) => {
  const isRickDetail = currentPath.includes("rick");

  return (
    <div css={returnLinkStyle}>
      <ArrowBackIosNewOutlinedIcon
        sx={{
          fill: "#f2f2f2",
          fontSize: "1rem",
          alignSelf: "center",
          display: "grid",
        }}
      />
      <Link
        to={isRickDetail ? switchRoutes.fullListRick : switchRoutes.fullList}
      >
        <Typography sx={{ color: "#f2f2f2", fontWeight: "700" }}>
          Volver a lista
        </Typography>
      </Link>
    </div>
  );
};
