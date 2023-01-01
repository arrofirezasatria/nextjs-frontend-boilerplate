import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import { useThemeContext } from "@modules/components/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import { alpha, useTheme } from "@mui/material/styles";

import { yaleBlue } from "@modules/brandingTheme";

const link = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blog" },
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
        borderWidth: "2px",
        borderStyle: "solid",
      }}
    >
      <Container
        maxWidth={"sm"}
        disableGutters
        sx={{
          borderWidth: "2px",
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
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignContent: "flex-end",
            }}
          >
            <IconButton onClick={toggleDarkMode} sx={{ my: "1.5px", mr: 0.5 }}>
              {darkMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
          <Box
            component="nav"
            sx={{
              display: "flex",
              backgroundColor: "#F5F5F5",
              width: "100%",
              overflow: "hidden",
              flexGrow: 1,
              gap: 4,
              "& ul": {},
            }}
          >
            <Stack
              component={"ul"}
              direction="row"
              spacing={0}
              sx={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                px: "10px",
                "& li": {
                  // backgroundColor: "red",
                  py: 1,
                  px: 1.5,
                  my: "4px !important",
                  borderRadius: "8px",
                  "& a": {
                    fontFamily: "",
                    fontSize: "14px",
                    textDecoration: "none",
                    color: "gray",
                    "&:hover": {
                      fontWeight: "bold",
                    },
                  },
                },
              }}
            >
              {link.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
