import {
  AppBar,
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

const link = [{ title: "", link: "/ad" }, { title: "/asd" }];

export default function AppsBar() {
  const { toggleDarkMode, darkMode } = useThemeContext();

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography>ad</Typography>
          <IconButton onClick={toggleDarkMode}>
            {darkMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
