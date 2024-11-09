import { CHAMPIONDATA, championEntity } from "@/common/mock-data";
import React, { createContext, PropsWithChildren, useState } from "react";

export interface ChampionsContextModel {
  champions: championEntity[];
  isShowCart: boolean;
  cartItems: championEntity[];
  setChampions: React.Dispatch<React.SetStateAction<championEntity[]>>;
  setCartItems: React.Dispatch<React.SetStateAction<championEntity[]>>;
  setIsShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialIsShowCartState = {
  isShowCart: false,
  setIsShowCart: () => {},
  cartItems: [],
  champions: [],
  setCartItems: () => {},
  setChampions: () => {},
};

export const ChampionsContext = createContext<ChampionsContextModel>(
  initialIsShowCartState
);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [champions, setChampions] = useState<championEntity[]>(CHAMPIONDATA);
  const [cartItems, setCartItems] = useState<championEntity[]>([]);
  const [isShowCart, setIsShowCart] = useState(false);

  const value = {
    isShowCart,
    setIsShowCart,
    cartItems,
    setCartItems,
    champions,
    setChampions,
  };

  return (
    <ChampionsContext.Provider value={value}>
      {children}
    </ChampionsContext.Provider>
  );
};
