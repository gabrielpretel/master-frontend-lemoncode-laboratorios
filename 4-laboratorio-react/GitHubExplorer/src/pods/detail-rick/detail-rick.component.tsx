import React from "react";
import classes from "./detail-rick.component.module.scss";
import { DetailRickHeader } from "./components";
import { DetailCharInfo } from "./components/detail-char-info";
import { CharacterEntity } from "./detail-rick.vm";

interface Props {
  character: CharacterEntity;
}

export const DetailRickComponent: React.FC<Props> = ({ character }) => {
  return (
    <>
      <div className={classes.detailContainer}>
        <DetailRickHeader />
        <DetailCharInfo character={character} />
      </div>
    </>
  );
};
