import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import { getDesignTokens } from "@modules/brandingTheme";

const BrandingThemeContext = React.createContext(() => {});

interface Props {
  children?: React.ReactNode;
}

export default function ThemeContext({ children }: Props) {
  const paletteMode = "dark";
  const brandingDesignTokens = getDesignTokens(paletteMode);

  const theme = React.useMemo(() => {
    let nextTheme = createTheme({
      ...brandingDesignTokens,
    });
    return nextTheme;
  }, [paletteMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <BrandingThemeContext.Provider value={() => {}}>
        {children}
      </BrandingThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export const toggleDarkMode = () => {};
