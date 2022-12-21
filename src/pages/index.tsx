import React from "react";
import { Box } from "@mui/material";

import { useThemeContext } from "@modules/components/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { t } = useTranslation("home");
  const title = t("title");

  return (
    <AppsContainer>
      <Box component="main" sx={{ height: "100vh" }}>
        <header>
          <h1>Title</h1>
        </header>
        <section>{title}</section>
        <section>b</section>
      </Box>
    </AppsContainer>
  );
}
