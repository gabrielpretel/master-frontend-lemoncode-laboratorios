import React from "react";
import * as classes from "./HelloComponent.module.scss";

export const HelloComponent: React.FC = () => {
  return (
    <div className={classes.helloContainer}>
      <h1>Hello world from React</h1>
    </div>
  );
};
