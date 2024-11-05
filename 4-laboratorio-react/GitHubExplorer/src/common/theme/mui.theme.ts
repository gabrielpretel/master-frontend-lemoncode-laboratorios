import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Mulish", sans-serif',
  },
  palette: {
    primary: {
      main: "#4effca",
    },
    background: {
      default: "#121314",
    },
    text: {
      primary: "#f2f2f2",
      secondary: "#212327"
    },
  },
});

export default theme;
