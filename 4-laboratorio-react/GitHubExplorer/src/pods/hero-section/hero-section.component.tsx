import React from "react";
import { Typography } from "@mui/material";
import classes from "./hero-section.component.module.scss";

export const HeroSection: React.FC = () => {
  return (
    <div className={classes.heroHome}>
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
          GitHub Explorer
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            filter: "drop-shadow(2px 4px 26px green)",
          }}
        >
          <b>Descubre y explora organizaciones en GitHub</b>. Busca empresas,
          <b>poderosa</b> herramienta para conectar con la comunidad de
          desarrolladores.
        </Typography>
      </div>
    </div>
  );
};
