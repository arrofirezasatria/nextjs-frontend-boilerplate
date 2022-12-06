import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { getDesignTokens } from "@modules/brandingTheme";
import { useMediaQuery } from "@mui/material";

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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const preferredMode = prefersDarkMode ? "dark" : "light";
  const [darkMode, setDarkMode] = React.useState<"light" | "dark">(
    localStorage.getItem("mui-dark-mode") === null ? preferredMode : "dark"
  );

  React.useEffect(() => {
    let tempMode: string | null = "light";
    if (typeof window !== "undefined") {
      tempMode = localStorage.getItem("mui-dark-mode");
    }

    if (tempMode === ("light" || "dark")) {
      console.log(tempMode + "inside useEffect");
      setDarkMode(tempMode);
      localStorage.setItem("mui-dark-mode", darkMode);
    }
  }, []);

  const toggleDarkMode = (): void => {
    setDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("mui-dark-mode", darkMode);
  };

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
