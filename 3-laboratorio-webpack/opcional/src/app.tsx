import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "@/components";
import "./globalStyles.scss";

const root = createRoot(document.querySelector("#root"));

root.render(<HelloComponent />);
