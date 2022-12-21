import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <Box component={"footer"}>
      <Box
        sx={{
          position: "relative",
          borderRadius: "8px",
          flexWrap: "hidden",
          overflow: "hidden",
          width: "36px",
          height: "36px",
        }}
      >
        <Image
          src="/static/icons/maskable_icon_x48.png"
          alt="NextJS-MUI-boilerplate logo"
          fill
        />
      </Box>
      <Typography variant="h6">Next-MUI-boilerplate</Typography>
    </Box>
  );
}
