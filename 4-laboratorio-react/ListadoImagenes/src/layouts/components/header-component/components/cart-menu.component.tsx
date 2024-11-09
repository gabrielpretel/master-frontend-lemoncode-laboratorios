import React, { useContext } from "react";
import { css } from "@emotion/react";
import CartIcon from "@/common/icons/cart-icon.svg?react";
import { ChampionsContext } from "@/core/providers/cart.provider";

const cartMenuStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
`;

export const CartMenuComponent: React.FC = () => {
  const { setIsShowCart } = useContext(ChampionsContext);

  return (
    <div css={cartMenuStyle}>
      <button onClick={() => setIsShowCart(true)}>
        <CartIcon />
      </button>
    </div>
  );
};
