import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ChampionEntity } from "@/common/mock-data";
import { CartContext } from "@/core/providers/cart.provider";
import { ChampionsContext } from "@/core/providers/champions.provider";
import { createCartEntity, toggleChampionSelection } from "@/core/helpers";
import styles from "./champions-gallery.component.styles";

interface Props {
  champion: ChampionEntity;
  index: number;
}

export const ChampionsGalleryItem: React.FC<Props> = ({ champion, index }) => {
  const { cartItems, setCartItems, isShowCart, setIsShowCart } =
    useContext(CartContext);
  const { champions, setChampions } = useContext(ChampionsContext);

  const handleSelect = ({ selected, id }: ChampionEntity) => {
    const updatedChampions = toggleChampionSelection(
      champion,
      !selected,
      champions
    );

    const updatedCart = selected
      ? cartItems.filter((item) => item.id !== id)
      : [...cartItems, createCartEntity(champion, "champion")];

    setChampions(updatedChampions);
    setCartItems(updatedCart);

    if (!selected && !isShowCart) setIsShowCart(true);
  };

  return (
    <motion.div
      css={[
        styles.galleryCardContainer(champion.img, champion.bgPosition),
        champion.selected && styles.cardSelected,
      ]}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.3, delay: index < 4 ? index * 0.07 : 0.1 }}
    >
      <div
        css={[styles.galleryCardInfo, champion.selected && styles.infoSelected]}
        className="info"
      >
        <h2>{champion.name}</h2>
        <h3>{champion.location}</h3>
      </div>
      <button onClick={() => handleSelect(champion)}>
        <div
          css={[
            styles.galleryCardAction,
            champion.selected && styles.actionSelected,
          ]}
          className="action"
        >
          {champion.selected ? "DESELECT" : "SELECT"}
        </div>
      </button>
    </motion.div>
  );
};
