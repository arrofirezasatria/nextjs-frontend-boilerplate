import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useThemeContext } from "@modules/components/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { t } = useTranslation("home");
  const title = t("title");

  return (
    <AppsContainer>
      <Box component="main" sx={{ height: "100vh" }}>
        <header>{/* <h1>Title</h1> */}</header>
        {/* <section>{title}</section> */}
        <section>
          <Box width={"100%"} height="300px" sx={{ position: "relative" }}>
            <Image
              src="/static/images/dummyImage_1600x900.png"
              fill
              alt={""}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography textAlign={"center"}>Tech</Typography>
          <Stack
            direction={"row"}
            sx={{ width: "100%", mt: 2 }}
            justifyContent="space-between"
          >
            <Box>a</Box>
            <Box>b</Box>
            <Box>c</Box>
          </Stack>
        </section>
      </Box>
    </AppsContainer>
  );
}
