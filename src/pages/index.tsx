import React from "react";
import { Box } from "@mui/material";

import { useThemeContext } from "@modules/components/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <AppsContainer>
      <Box component="main">
        <header>
          <h1>Title</h1>
        </header>
        <section>a</section>
        <section>b</section>
      </Box>
    </AppsContainer>
  );
}
