import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./components/HelloComponent/";
import "./globalStyles.scss";

const root = createRoot(document.getElementById("root"));

root.render(<HelloComponent />);
