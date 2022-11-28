import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { getDesignTokens } from "@modules/brandingTheme";

export const ThemeContext = React.createContext({
  darkMode: "dark",
  handleToggleDarkMode: () =>
    console.log("You forgot to wrap with ThemeContext"),
});

export const useThemeContext = () => {
  return React.useContext(ThemeContext);
};

interface Props {
  children?: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = React.useState<"dark" | "light">("dark");

  const brandingDesignTokens = getDesignTokens(darkMode);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = React.useMemo(() => {
    console.log("render theme");
    let nextTheme = createTheme({
      ...brandingDesignTokens,
    });
    return nextTheme;
  }, [brandingDesignTokens]);

  return (
    <ThemeContext.Provider value={{ darkMode, handleToggleDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export const toggleDarkMode = () => {};
