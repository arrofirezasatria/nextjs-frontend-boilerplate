import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import brandingTheme from "@modules/brandingTheme";

interface Props {
  children?: React.ReactNode;
}

export default function ThemeContext({ children }: Props) {
  const paletteMode = true;

  const theme = React.useMemo(() => {
    let nextTheme = createTheme({
      palette: {},
    });
    return nextTheme;
  }, [paletteMode]);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
