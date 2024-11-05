import { createRoot } from "react-dom/client";
import { App } from "@/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./common/theme/mui.theme";

import "./style.scss";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/700.css";
import "@fontsource/mulish/900.css";

const rootElement = document.getElementById("root");

if (rootElement && rootElement instanceof HTMLDivElement) {
  const root = createRoot(rootElement);
  root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
} else {
  throw new Error("Root element not found");
}
