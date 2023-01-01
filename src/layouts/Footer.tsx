import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{ backgroundColor: "#F5F5F5", borderRadius: "8px" }}
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        sx={{ px: "22px", py: "22px" }}
      >
        <Box>
          <Box
            sx={{
              position: "relative",
              borderRadius: "8px",
              flexWrap: "hidden",
              overflow: "hidden",
              width: "32px",
              height: "32px",
              mt: "2px",
            }}
          >
            <Image
              src="/static/icons/maskable_icon_x48.png"
              alt="NextJS-MUI-boilerplate logo"
              fill
            />
          </Box>
          <Typography variant="h6" sx={{ fontFamily: "", fontSize: "18px" }}>
            {/* Next-MUI-boilerplate */}
          </Typography>
        </Box>
        <Stack
          direction={"row"}
          spacing={5}
          sx={{
            paddingRight: "10px",
            color: "Gray",
          }}
        >
          <Stack spacing={1} sx={{ fontSize: "14px" }}>
            <Typography sx={{ fontSize: "14px" }}>Home</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: "14px" }}>Home</Typography>
            <Typography sx={{ fontSize: "14px" }}>About</Typography>
          </Stack>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: "14px" }}>Home</Typography>
            <Typography sx={{ fontSize: "14px" }}>About</Typography>
            <Typography sx={{ fontSize: "14px" }}>Blog</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
