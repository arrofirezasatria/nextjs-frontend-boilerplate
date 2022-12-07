import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { getDesignTokens } from "@modules/brandingTheme";
import { useMediaQuery } from "@mui/material";

export const ThemeContext = React.createContext({
  darkMode: "light",
  toggleDarkMode: () => console.log("You forgot to wrap with ThemeContext"),
});

export const useThemeContext = () => {
  return React.useContext(ThemeContext);
};

interface Props {
  children?: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState<"light" | "dark">(
    prefersDarkMode === true ? "dark" : "light"
  );

  const toggleDarkMode = () => {
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = React.useMemo(() => {
    const brandingDesignTokens = getDesignTokens(darkMode);
    let nextTheme = createTheme({
      ...brandingDesignTokens,
    });
    return nextTheme;
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
