import React from "react";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import classes from "./header.component.module.scss";
import { MenuLinks, ReturnLink } from "./components";

const appNameStyle = {
  color: "#f2f2f2",
  fontWeight: "700",
  fontSize: "1.2rem",
  lineHeight: "1rem",
  alignSelf: "center",
};

export const Header: React.FC = () => {
  const { pathname: currentPath } = useLocation();
  const isDetailPage =
    currentPath.startsWith("/app/detail") ||
    currentPath.startsWith("/apprick/detail-rick");

  return (
    <div className={classes.layoutAppHeader}>
      {isDetailPage ? (
        <>
          <ReturnLink currentPath={currentPath} />
          <div />
        </>
      ) : (
        <>
          <Typography sx={appNameStyle}>Laboratorio React</Typography>
          <MenuLinks currentPath={currentPath} />
        </>
      )}
      <Typography
        sx={{ color: "#f2f2f2", alignSelf: "center", textAlign: "right" }}
      >
        Hola, <b>username</b>
      </Typography>
    </div>
  );
};
