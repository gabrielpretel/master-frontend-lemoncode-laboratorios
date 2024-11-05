import React from "react";
import { Typography } from "@mui/material";
import classes from "./detail-char-info.module.scss";
import { CharacterEntity } from "@/pods/detail-rick";

interface Props {
  character: CharacterEntity;
}

export const DetailCharInfo: React.FC<Props> = ({ character }) => {
  return (
    <div className={classes.userInfoContainer}>
      <div className={classes.avatarContainer}>
        <img
          className={classes.avatarImage}
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className={classes.userDetailsContainer}>
        <Typography variant="h5" component="h2" className={classes.userName}>
          {character.name}
        </Typography>
        <div className={classes.userDetailsGrid}>
          <div className={classes.detailItem}>
            <Typography component="span" className={classes.detailLabel}>
              Origen
            </Typography>
            <Typography component="span" className={classes.detailValue}>
              {character.origin.name !== "unknown"
                ? character.origin.name
                : "Origen desconocido."}
            </Typography>
          </div>
          <div className={classes.detailItem}>
            <Typography component="span" className={classes.detailLabel}>
              Ciudad
            </Typography>
            <Typography component="span" className={classes.detailValue}>
              {character.location.name !== "unknown"
                ? character.location.name
                : "Sin ciudad."}
            </Typography>
          </div>
          <div className={classes.detailItem}>
            <Typography component="span" className={classes.detailLabel}>
              Especie
            </Typography>
            <Typography component="span" className={classes.detailValue}>
              {character.species ? character.species : "Especie desconocida"}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
