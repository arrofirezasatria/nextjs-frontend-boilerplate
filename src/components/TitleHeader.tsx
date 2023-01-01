import { Box, Typography } from "@mui/material";
import React from "react";

interface TitleHeader {
  title: string;
  desc: string;
}

export default function TitleHeader({ title, desc }: TitleHeader) {
  return (
    <Box component={"header"} sx={{ mt: 1, mb: 4 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "",
          mb: 1.5,
          color: "gray",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: "gray" }}>{desc}</Typography>
    </Box>
  );
}
