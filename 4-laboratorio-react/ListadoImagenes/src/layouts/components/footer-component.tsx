import React from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const footerComponentStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #111111;
  color: white;

  & p > a {
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const actualYear = new Date().getFullYear();

export const FooterComponent: React.FC = () => {
  return (
    <div css={footerComponentStyle}>
      <p>
        Diseño y desarrollo por{" "}
        <Link to="https://www.linkedin.com/in/gabriel-pretel/" target="_blank">
          Gabriel Pretel
        </Link>
        . Lemoncode {actualYear}.
      </p>
    </div>
  );
};
