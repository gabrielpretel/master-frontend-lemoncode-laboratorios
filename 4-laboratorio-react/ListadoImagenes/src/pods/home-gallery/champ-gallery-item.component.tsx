import React, { useContext } from "react";
import { championEntity } from "@/common/mock-data";
import styles from "./home-gallery.styles";
import { motion } from "framer-motion";
import {
  ChampionsContext,
  ChampionsContextModel,
} from "@/core/providers/cart.provider";
import { css } from "@emotion/react";

interface Props {
  champ: championEntity;
  index: number;
  setChampions: React.Dispatch<React.SetStateAction<championEntity[]>>;
  champions: championEntity[];
}

export const ChampGalleryItem: React.FC<Props> = ({ champ, index }) => {
  const {
    cartItems,
    setCartItems,
    setChampions,
    champions,
    isShowCart,
    setIsShowCart,
  } = useContext<ChampionsContextModel>(ChampionsContext);

  const handleSelect = (champ: championEntity) => {
    if (!champ.selected) {
      setCartItems([...cartItems, { ...champ, selected: true }]);

      const updatedChampions = champions.map((character) =>
        character.id === champ.id ? { ...character, selected: true } : character
      );

      setChampions(updatedChampions);

      isShowCart !== true && setIsShowCart(true);
    }
  };

  const isChained = index < 4;



  return (
    <motion.div
      css={[
        styles.galleryCardContainer(champ.img, champ.bgPosition),
        champ.selected && styles.cardSelected,
      ]}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 0.3,
        delay: isChained ? index * 0.07 : 0.1,
      }}
    >
      <div
        css={[styles.galleryCardInfo, champ.selected && styles.infoSelected]}
        className="info"
      >
        <h2>{champ.name}</h2>
        <h3>{champ.location}</h3>
      </div>
      <button onClick={() => handleSelect(champ)}>
        <div
          css={[
            styles.galleryCardAction,
            champ.selected && styles.actionSelected,
          ]}
          className="action"
        >
          {champ.selected ? "SELECTED" : "SELECT"}
        </div>
      </button>
    </motion.div>
  );
};
