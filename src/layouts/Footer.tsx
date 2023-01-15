import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  const [language, setLanguage] = useState(true);
  const router = useRouter();
  const path = router.asPath;

  return (
    <Box
      component={"footer"}
      sx={{ backgroundColor: "#F5F5F5", borderRadius: "8px" }}
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ p: 2 }}
      >
        <Box>
          <ButtonBase
            disableTouchRipple
            onClick={() => {
              setLanguage((prev) => !prev);
              router.push(`${path}`, `${path}`, {
                locale: language ? "id" : "en",
              });
            }}
            sx={{
              fontSize: "14px !important",
              py: 0.5,
              px: 0.5,
              borderRadius: "8px",
            }}
          >
            <Stack direction={"row"} spacing={0.5}>
              <LanguageIcon fontSize="small" sx={{ color: "gray" }} />
              <Typography
                fontSize={"14px"}
                sx={{
                  fontWeight: "bold",
                  color: "gray",
                  lineHeight: 1,
                  textDecoration: "underline",
                  textUnderlineOffset: "4.5px",
                }}
              >
                {language ? "Indonesia" : "English"}
              </Typography>
            </Stack>
          </ButtonBase>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            px: 2,
            py: 1,
            borderRadius: "8px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            Deployed on ▲ Vercel
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
