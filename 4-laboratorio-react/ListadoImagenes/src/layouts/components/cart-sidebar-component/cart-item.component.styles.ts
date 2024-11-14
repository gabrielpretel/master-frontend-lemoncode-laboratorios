import { css } from "@emotion/react";

const deleteIcon = css`
  height: 24px;
  transition: 0.4s;

  &:hover {
    scale: 1.2;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.9));
  }
`;

const cartItemInfo = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const cartItem = (img: string) => css`
  border-bottom: 1px solid #31271e;
  padding: 20px;
  color: #c4b998;
  font-size: 20px;
  transition: 0.3s;

  background: radial-gradient(
      at 70% 300%,
      #c4b99840 15%,
      #c4b99810 60%,
      transparent
    ),
    url(${img});

  & img {
    box-shadow: 0 0 16px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default {
  deleteIcon,
  cartItemInfo,
  cartItem,
};
