import React from "react";
import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material";
import { useThemeContext } from "@modules/components/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";

const link = [
  { title: "Home", link: "/about" },
  { title: "log", link: "/blog" },
];

export default function AppsBar() {
  const { toggleDarkMode, darkMode } = useThemeContext();

  return (
    <AppBar>
      <Container maxWidth={"sm"} disableGutters>
        <Toolbar disableGutters={true}>
          <Box
            component="nav"
            sx={{
              display: "flex",
              flexGrow: 1,
              gap: 4,
              "& ul": {
                listStyleType: "none",
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
          <IconButton onClick={toggleDarkMode}>
            {darkMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
