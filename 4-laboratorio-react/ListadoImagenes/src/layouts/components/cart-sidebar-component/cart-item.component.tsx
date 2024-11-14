import React, { useContext } from "react";
import DeleteIcon from "@/common/icons/delete-icon.svg?react";
import { CartEntity, ChampionEntity, RegionEntity } from "@/common/mock-data";
import { CartContext } from "@/core/providers/cart.provider";
import styles from "./cart-item.component.styles";
import { toggleChampionSelection } from "@/core/helpers";
import { ChampionsContext } from "@/core/providers/champions.provider";
import { RegionsContext } from "@/core/providers";

interface Props {
  currentItem: CartEntity;
}

export const CartItem: React.FC<Props> = ({ currentItem }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { champions, setChampions } = useContext(ChampionsContext);
  const { regions, setRegions } = useContext(RegionsContext);

  const handlerClick = () => {
    if (currentItem.entityType === "champion") {
      const newChampions = champions.map((champion: ChampionEntity) =>
        champion.id === currentItem.id
          ? { ...champion, selected: false }
          : champion
      );
      setChampions(newChampions);
    }
    if (currentItem.entityType === "region") {
      const newRegions = regions.map((region: RegionEntity) =>
        region.id === currentItem.id ? { ...region, selected: false } : region
      );
      setRegions(newRegions);
    }

    setCartItems(cartItems.filter((item) => item.id !== currentItem.id));
  };

  return (
    <li css={styles.cartItem(currentItem.img)}>
      <img
        css={{
          backgroundPosition: "50% 50%",
          border: "1px solid #31271e",
        }}
        src={currentItem.img}
        alt="Ashe"
      />
      <div css={styles.cartItemInfo}>
        <p>{currentItem.name}</p>
        <button onClick={handlerClick}>
          <DeleteIcon css={styles.deleteIcon} />
        </button>
      </div>
    </li>
  );
};
