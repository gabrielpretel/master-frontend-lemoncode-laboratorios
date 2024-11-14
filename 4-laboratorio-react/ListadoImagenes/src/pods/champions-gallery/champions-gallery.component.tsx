import React, { useContext } from "react";
import styles from "./champions-gallery.component.styles";
import { ChampionsGalleryItem } from "./champions-gallery-item.component";
import { ChampionsContext } from "@/core/providers/champions.provider";

export const ChampionsGallery: React.FC = () => {
  const { champions } = useContext(ChampionsContext);

  return (
    <div css={styles.galleryContainer}>
      {champions.map((champion, index) => (
        <ChampionsGalleryItem
          key={champion.id}
          champion={champion}
          index={index}
        />
      ))}
    </div>
  );
};
