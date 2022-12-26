import React from "react";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import { useThemeContext } from "@modules/components/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import { alpha, useTheme } from "@mui/material/styles";

import { yaleBlue } from "@modules/brandingTheme";

const link = [
  { title: "Home", link: "/about" },
  { title: "log", link: "/blog" },
];

export default function AppsBar() {
  const { toggleDarkMode, darkMode } = useThemeContext();

  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Container
        maxWidth={"sm"}
        disableGutters
        sx={{
          backdropFilter: "blur(20px)",
          boxShadow: `inset 0px -1px 1px ${
            theme.palette.mode === "dark"
              ? yaleBlue[400]
              : theme.palette.grey[100]
          }`,
          borderRadius: "8px",
          my: 2,
          overflow: "hidden",
        }}
      >
        <Toolbar
          disableGutters={true}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{}}>
            <IconButton onClick={toggleDarkMode}>
              {darkMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Box
            component="nav"
            sx={{
              display: "flex",
              backgroundColor: "white",
              width: "100%",
              overflow: "hidden",
              flexGrow: 1,
              gap: 4,
              "& ul": {
                listStyleType: "none",
                padding: 0,
                "& li": {
                  float: "left",
                },
              },
            }}
          >
            <ul>
              {link.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
