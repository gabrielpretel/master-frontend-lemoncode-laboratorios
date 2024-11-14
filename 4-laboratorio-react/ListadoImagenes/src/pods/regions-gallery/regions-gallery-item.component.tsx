import { useContext } from "react";
import { RegionEntity } from "@/common/mock-data/regions-data";
import { motion } from "framer-motion";
import styles from "./regions-gallery.component.styles";
import { CartContext, RegionsContext } from "@/core/providers";
import { createCartEntity, toggleRegionSelection } from "@/core/helpers";

interface Props {
  region: RegionEntity;
  index: number;
}

export const RegionsGalleryItem: React.FC<Props> = ({ region, index }) => {
  const { cartItems, setCartItems, isShowCart, setIsShowCart } =
    useContext(CartContext);
  const { regions, setRegions } = useContext(RegionsContext);

  const handleSelect = ({ selected, id }: RegionEntity) => {
    const updatedRegions = toggleRegionSelection(region, !selected, regions);

    const updatedCart = selected
      ? cartItems.filter((item) => item.id !== id)
      : [...cartItems, createCartEntity(region, "region")];

    setRegions(updatedRegions);
    setCartItems(updatedCart);

    if (!selected && !isShowCart) setIsShowCart(true);
  };
  return (
    <motion.div
      css={[
        styles.galleryCardContainer(region.img, region.selected),
        region.selected && styles.cardSelected,
      ]}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 0.3, delay: index < 4 ? index * 0.07 : 0.1 }}
      className="light"
    >
      <img src={region.iconImg} alt="" />
      <div
        css={[styles.galleryCardInfo, region.selected && styles.infoSelected]}
        className="info"
      >
        <h2>{region.name}</h2>
      </div>
      <button onClick={() => handleSelect(region)}>
        <div
          css={[
            styles.galleryCardAction,
            region.selected && styles.actionSelected,
          ]}
          className="action"
        >
          {region.selected ? "DESELECT" : "SELECT"}
        </div>
      </button>
    </motion.div>
  );
};
