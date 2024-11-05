import React from "react";
import Typography from "@mui/material/Typography";
import { generatePath, Link } from "react-router-dom";
import classes from "./char-row.component.module.scss";
import { CharacterEntity } from "@/core/providers/characters/characters.vm";

interface Props {
  character: CharacterEntity;
}

export const CharRow: React.FC<Props> = ({ character }) => {
  return (
    <Link to={generatePath("/apprick/detail-rick/:id", { id: character.id })}>
      <div className={classes.listContainerItem}>
        <img
          className={classes.avatarListImage}
          src={character.image}
          alt={`Foto de ${character.name}`}
        />
        <Typography
          component="span"
          sx={{
            fontWeight: "700",
            color: "#f2f2f2",
          }}
        >
          {character.name}
        </Typography>
      </div>
    </Link>
  );
};
