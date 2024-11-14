import React, { useContext } from "react";
import CloseIcon from "@/common/icons/close-icon.svg?react";
import CartIcon from "@/common/icons/cart-icon.svg?react";
import { CartContext } from "@/core/providers/cart.provider";
import { motion, AnimatePresence } from "framer-motion";
import { CartItem } from "./cart-item.component";
import styles from "./cart-sidebar.component.styles";
import { Link } from "react-router-dom";
import { routes } from "@/routers";

export const CartSidebarComponent: React.FC = () => {
  const { isShowCart, setIsShowCart, cartItems } = useContext(CartContext);

  const isCartEmpty = cartItems.length === 0;

  return (
    <AnimatePresence>
      {isShowCart && (
        <motion.div
          initial={{ width: 0, opacity: 1 }}
          animate={{ width: 350 }}
          exit={{ width: 0, opacity: 0 }}
          css={styles.cartContainer}
        >
          <div css={styles.cartHeader}>
            <div css={{ display: "flex", alignItems: "center" }}>
              <h2 css={{ color: "#c4b998" }}>CART</h2>
            </div>
            <div>
              <button
                css={styles.closeButton}
                onClick={() => setIsShowCart(false)}
              >
                <span>CLOSE</span>
                <CloseIcon />
              </button>
            </div>
          </div>

          <ul css={styles.cartListItems}>
            {isCartEmpty ? (
              <div css={styles.cartEmpty}>
                <CartIcon />
                <p>CART IS EMPTY</p>
                <span>Add images to the cart.</span>
              </div>
            ) : (
              cartItems.map((item) => {
                return <CartItem key={item.id} currentItem={item} />;
              })
            )}
          </ul>
          <button>
            <Link to={routes.checkout}>
              <div css={styles.checkoutButton}>
                <span css={{ color: "#c4b998" }}>CHECKOUT</span>
              </div>
            </Link>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
