import React, { useContext } from "react";
import styles from "./regions-gallery.component.styles";
import { RegionsContext } from "@/core/providers";
import { RegionsGalleryItem } from "./regions-gallery-item.component";

export const RegionsGallery: React.FC = () => {
  const { regions } = useContext(RegionsContext);
  return (
    <div css={styles.galleryContainer}>
      {regions.map((region, index) => (
        <RegionsGalleryItem key={region.id} region={region} index={index} />
      ))}
    </div>
  );
};
