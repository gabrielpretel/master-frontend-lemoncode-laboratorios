import React from "react";
import classes from "./cta.component.module.scss";
import { Typography } from "@mui/material";
import { ButtonPrimary } from "@/common/components";

export const CTA: React.FC = () => {
  return (
    <>
      <div className={classes.ctaContainer}>
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
        <ButtonPrimary url="/apprick/list" icon={"Default"}>
          Visitar
        </ButtonPrimary>
      </div>
    </>
  );
};
