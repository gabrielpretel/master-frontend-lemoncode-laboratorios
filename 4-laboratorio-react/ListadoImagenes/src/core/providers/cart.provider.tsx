import { CartEntity } from "@/common/mock-data";
import React, { createContext, PropsWithChildren, useState } from "react";

export interface CartContextModel {
  isShowCart: boolean;
  cartItems: CartEntity[];
  setCartItems: React.Dispatch<React.SetStateAction<CartEntity[]>>;
  setIsShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialIsShowCartState = {
  isShowCart: false,
  setIsShowCart: () => {},
  cartItems: [],
  setCartItems: () => {},
};

export const CartContext = createContext<CartContextModel>(
  initialIsShowCartState
);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartEntity[]>([]);
  const [isShowCart, setIsShowCart] = useState(false);

  const value = {
    isShowCart,
    setIsShowCart,
    cartItems,
    setCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
