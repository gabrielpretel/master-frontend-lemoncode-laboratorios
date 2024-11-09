import React, { useContext } from "react";
import lineLeft from "@/common/img/line-left.png";
import styles from "./home-gallery.styles";
import { ChampGalleryItem } from "./champ-gallery-item.component";
import {
  ChampionsContext,
  ChampionsContextModel,
} from "@/core/providers/cart.provider";

export const HomeGallery: React.FC = () => {
  const { champions, setChampions } =
    useContext<ChampionsContextModel>(ChampionsContext);

  return (
    <div css={styles.HomeGalleryStyle}>
      <div css={styles.titleSection}>
        <img css={[styles.lineStyle, styles.lineLeftStyle]} src={lineLeft} />
        <h1>CHAMPIONS</h1>
        <img css={styles.lineStyle} src={lineLeft} />
      </div>
      <div css={styles.galleryContainer}>
        {champions.map((champ, index) => {
          return (
            <ChampGalleryItem
              key={champ.id}
              champ={champ}
              index={index}
              champions={champions}
              setChampions={setChampions}
            />
          );
        })}
      </div>
    </div>
  );
};
