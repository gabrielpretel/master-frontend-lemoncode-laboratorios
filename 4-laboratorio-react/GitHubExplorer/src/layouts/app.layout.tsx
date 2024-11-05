import React, { PropsWithChildren } from "react";
import { Header, Footer } from "./components";
import classes from "./app.layout.module.scss";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={classes.layoutAppContainer}>
      <Header />
      <div className={classes.layoutAppContent}>
        <div className={classes.layoutAppContentContainer}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
