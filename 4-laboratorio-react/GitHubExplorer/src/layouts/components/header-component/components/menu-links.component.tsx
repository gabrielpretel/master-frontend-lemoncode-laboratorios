import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { css, keyframes } from "@emotion/react";

const menuLinksStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const linkStyle = css`
  text-decoration: none;
  &:hover {
    filter: drop-shadow(0px 5px 10px #7c7d81);
    transition: filter ease 0.2s;
  }
`;

const bouncing = keyframes`
  from, 20%, 53%, 80%, to {
    filter: drop-shadow(0px 5px 15px #ffffff20);
  }

  40%, 43% {
    filter: drop-shadow(0px 5px 15px #ffffff50);
  }

  70% {
    filter: drop-shadow(0px 5px 15px #ffffff80);
  }

  90% {
    filter: drop-shadow(0px 5px 15px #ffffff);
  }
`;

const activeLinkStyle = css`
  animation: ${bouncing} 2s ease infinite;
`;

interface MenuLinksProps {
  currentPath: string;
}

const menuLinks = [
  { to: "/app/list", text: "GitHub Explorer" },
  { to: "/apprick/list", text: "Rick Explorer" },
];

export const MenuLinks: React.FC<MenuLinksProps> = ({ currentPath }) => (
  <div css={menuLinksStyle}>
    {menuLinks.map(({ to, text }) => (
      <Link
        key={to}
        to={to}
        css={[linkStyle, currentPath === to ? activeLinkStyle : null]}
      >
        <Typography
          sx={{
            color: "#f2f2f2",
            alignSelf: "center",
            textAlign: "right",
          }}
        >
          {text}
        </Typography>
      </Link>
    ))}
  </div>
);
