import React from "react";
import { css } from "@emotion/react";
import { routes } from "@/routers/routes";

import { Link } from "react-router-dom";

const navStyle = css`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      text-decoration: none;

      a {
        color: white;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
`;

const menuLinks = [
  { to: routes.home, text: "Home" },
  { to: routes.champions, text: "Champions" },
  { to: routes.regions, text: "Regions" },
];

export const NavBarComponent: React.FC = () => {
  return (
    <nav css={navStyle}>
      <ul>
        {menuLinks.map(({ to, text }) => {
          return (
            <li key={to}>
              <Link to={to}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
