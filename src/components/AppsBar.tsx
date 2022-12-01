import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "@modules/ThemeContext";

export default function AppsBar() {
  const { toggleDarkMode } = useThemeContext();

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography>ad</Typography>
          <Button onClick={toggleDarkMode}>
            <Typography color={"secondary"}>Dark Mode</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
