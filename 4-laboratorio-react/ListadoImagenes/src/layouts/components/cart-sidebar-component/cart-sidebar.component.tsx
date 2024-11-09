import React, { useContext } from "react";
import { css } from "@emotion/react";
import CloseIcon from "@/common/icons/close-icon.svg?react";
import CartIcon from "@/common/icons/cart-icon.svg?react";
import { ChampionsContext } from "@/core/providers/cart.provider";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem } from "./cart-item.component";

const cartContainer = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  width: 350px;
  min-height: 99dvh;
  background-color: #111111;
  border: 1px solid #31271e;
  margin: 5px;
  margin-bottom: 0px;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    background: rgba(147, 115, 65, 0.4);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
`;

const cartHeader = css`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 1px solid #31271e;

  & h2 {
    font-weight: 400;
  }
`;

const closeButton = css`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #c4b998;
`;

const cartListItems = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
`;

const cartEmpty = css`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  color: #c4b998;

  & p {
    font-size: 20px;
  }
  & span {
    font-weight: 300;
  }
`;

export const CartSidebarComponent: React.FC = () => {
  const { isShowCart, setIsShowCart, cartItems } = useContext(ChampionsContext);

  return (
    <AnimatePresence>
      {isShowCart && (
        <motion.div
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: 350 }}
          exit={{ width: 0, opacity: 0 }}
          css={cartContainer}
        >
          <div css={cartHeader}>
            <div css={{ display: "flex", alignItems: "center" }}>
              <h2 css={{ color: "#c4b998" }}>CART</h2>
            </div>
            <div>
              <button css={closeButton} onClick={() => setIsShowCart(false)}>
                <span>CLOSE</span>
                <CloseIcon />
              </button>
            </div>
          </div>

          <ul css={cartListItems}>
            {cartItems.length === 0 ? (
              <div css={cartEmpty}>
                <CartIcon />
                <p>CART IS EMPTY</p>
                <span>Add images to the cart.</span>
              </div>
            ) : (
              cartItems.map((char) => {
                return <CartItem key={char.id} char={char} />;
              })
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
