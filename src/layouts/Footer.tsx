import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{ backgroundColor: "#F5F5F5", borderRadius: "8px" }}
    >
      <Box sx={{ px: "22px", py: "12px", height: "100px" }}>
        <Box>
          <Box
            sx={{
              position: "relative",
              borderRadius: "8px",
              flexWrap: "hidden",
              overflow: "hidden",
              width: "32px",
              height: "32px",
            }}
          >
            <Image
              src="/static/icons/maskable_icon_x48.png"
              alt="NextJS-MUI-boilerplate logo"
              fill
            />
          </Box>
          <Typography variant="h6" sx={{ fontFamily: "", fontSize: "18px" }}>
            Next-MUI-boilerplate
          </Typography>
        </Box>
        <Box>
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Blog</Typography>
        </Box>
      </Box>
    </Box>
  );
}
