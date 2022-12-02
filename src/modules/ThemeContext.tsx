import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { getDesignTokens } from "@modules/brandingTheme";

export const ThemeContext = React.createContext({
  darkMode: {},
  toggleDarkMode: () => console.log("You forgot to wrap with ThemeContext"),
});

export const useThemeContext = () => {
  return React.useContext(ThemeContext);
};

interface Props {
  children?: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const [darkMode, setDarkMode] = React.useState<string | null>(null);

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  React.useEffect(() => {
    let initialMode = "light";
    try {
      initialMode = localStorage.getItem("dark-mode") || initialMode;
    } catch (error) {
      // do nothing
    }
    setDarkMode(initialMode);
  }, []);

  const brandingDesignTokens = getDesignTokens(darkMode);

  const theme = React.useMemo(() => {
    let nextTheme = createTheme({
      ...brandingDesignTokens,
    });
    return nextTheme;
  }, [brandingDesignTokens]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
