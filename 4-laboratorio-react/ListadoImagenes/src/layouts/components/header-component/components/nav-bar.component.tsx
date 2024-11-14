import React from "react";
import { css } from "@emotion/react";
import { routes } from "@/routers/routes";

import { Link, useLocation, useNavigate } from "react-router-dom";

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

const activeLink = css`
  filter: drop-shadow(0px 5px 15px #ffffff90) !important;
`;

const menuLinks = [
  { to: routes.champions, text: "Champions" },
  { to: routes.regions, text: "Regions" },
];

export const NavBarComponent: React.FC = () => {
  const { pathname: currentPath } = useLocation();
  return (
    <nav css={navStyle}>
      <ul>
        {menuLinks.map(({ to, text }) => {
          return (
            <li key={to}>
              <Link to={to} css={to === currentPath ? activeLink : null}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
