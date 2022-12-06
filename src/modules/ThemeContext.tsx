import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { getDesignTokens } from "@modules/brandingTheme";
import { useMediaQuery } from "@mui/material";
// import useLocalStorage from "./hooks/useLocalStorage";

import useLocalStorage from "beautiful-react-hooks/useLocalStorage";

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
  const [darkMode, setDarkMode] = React.useState(
    prefersDarkMode === true ? "dark" : "light"
  );

  React.useEffect(() => {
    // console.log("useeffect");
    if (typeof window !== "undefined") {
      let initialMode = localStorage.getItem("mui-dark-mode");
      if (initialMode !== null) {
        console.log(darkMode);
        setDarkMode(darkMode);
        localStorage.setItem("mui-dark-mode", darkMode);
        // console.log(initialMode);
        // console.log(darkMode);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev: string) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("mui-dark-mode", darkMode);
  };

  const theme = React.useMemo(() => {
    console.log(darkMode);
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
