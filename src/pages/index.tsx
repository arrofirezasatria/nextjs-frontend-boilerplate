import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { useThemeContext } from "@modules/components/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import IconBoilerplate from "@components/icon/IconBoilerplate";
import { textAlign } from "@mui/system";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const { t } = useTranslation("home");
  const title = t("title");

  return (
    <AppsContainer>
      <Box component="main" sx={{ minHeight: "640px" }}>
        <header>{/* <h1>Title</h1> */}</header>
        <section>
          <Box
            sx={{ display: "flex", justifyContent: "center", height: "120px" }}
          >
            <Box
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                width: "72px",
                height: "72px",
              }}
            >
              <Image
                src={"/static/icons/maskable_icon_x384.png"}
                fill
                alt={""}
              />
            </Box>
          </Box>
          <Typography
            textAlign={"center"}
            sx={{ fontSize: "26px", fontWeight: "bold", fontFamily: "", my: 3 }}
          >
            NEXTJS MUI BOILERPLATE - Template One
          </Typography>
          <Typography
            textAlign={"center"}
            sx={{ fontSize: "18px", fontWeight: "bold", fontFamily: "", my: 3 }}
          >
            Complete structured production ready NextJs Boilerplate with styling
            powered by MUI
          </Typography>
          <Typography
            gutterBottom
            sx={{ textAlign: "center", paddingBottom: "20px" }}
          >
            Nostrud consequat reprehenderit nulla cupidatat duis aliquip in
            adipisicing. Mollit id ea commodo ea sint aliquip amet nostrud minim
            non esse dolore eiusmod. Ad nisi eu esse duis minim velit dolore ex.
            Do consectetur eiusmod duis laborum minim sit cupidatat eu irure
            aliquip reprehenderit ea ad pariatur. Tempor ullamco qui ea labore
            magna eu. Lorem dolore elit in laboris sunt.
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            Nostrud consequat reprehenderit nulla cupidatat duis aliquip in
            adipisicing. Mollit id ea commodo ea sint aliquip amet nostrud minim
            non esse dolore eiusmod. Ad nisi eu esse duis minim velit dolore ex.
            Do consectetur eiusmod duis laborum minim sit cupidatat eu irure
            aliquip reprehenderit ea ad pariatur. Tempor ullamco qui ea labore
            magna eu. Lorem dolore elit in laboris sunt.
          </Typography>
        </section>
      </Box>
    </AppsContainer>
  );
}
