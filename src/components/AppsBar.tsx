import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useThemeContext } from "@modules/components/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";

const link = [
  { title: "about", link: "/about" },
  { title: "blog", link: "/blog" },
];

const CustomLink = (params: { url: string; title: string }) => {
  return <Link href={params.url}>{params.title}</Link>;
};

export default function AppsBar() {
  const { toggleDarkMode, darkMode } = useThemeContext();

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Box component="nav" sx={{ display: "flex", flexGrow: 1, gap: 4 }}>
            <ul>
              {link.map((item, index) => {
                return (
                  <li key={index}>
                    <CustomLink url={item.link} title={item.title} />
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
