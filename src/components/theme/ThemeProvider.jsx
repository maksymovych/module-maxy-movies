import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./themStyles";

function MyThemeProvider({ children }) {
  const { isLightMode } = useSelector((state) => state.theme);
  const toggleTheme = createTheme(isLightMode ? lightTheme : darkTheme);
  return (
    <ThemeProvider theme={toggleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MyThemeProvider;
