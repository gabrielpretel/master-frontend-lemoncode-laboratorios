import React from "react";
import { Typography } from "@mui/material";
import classes from "./hero-section-rick.component.module.scss";

export const HeroRickSection: React.FC = () => {
  return (
    <div className={classes.hero}>
      <div>
        <Typography
          component="h1"
          sx={{
            color: "text.primary",
            fontSize: "2rem",
            fontWeight: "700",
            filter: "drop-shadow(2px 4px 26px green)",
          }}
        >
          Rick & Morty Explorer
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            filter: "drop-shadow(2px 4px 26px green)",
            maxWidth: "60ch",
          }}
        >
          <b>Descubre y explora personajes de Rick y Morty</b>. Busca
          protagonistas, alienígenas y versiones alternativas. Una{" "}
          <b>poderosa</b> herramienta para sumergirte en el multiverso de Rick y
          Morty.
        </Typography>
      </div>
    </div>
  );
};
