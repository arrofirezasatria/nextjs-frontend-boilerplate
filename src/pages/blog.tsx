import AppsContainer from "@layouts/AppsContainer";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

import TitleHeader from "@components/TitleHeader";
import Link from "next/link";
import UseTranslation from "next-translate/useTranslation";

const blogList = [1, 2, 3, 4, 5];

export default function blog() {
  const { t } = UseTranslation("blog");
  const desc = t("desc");

  return (
    <AppsContainer>
      <Box sx={{ maxHeight: "640px" }}>
        <>
          <TitleHeader title={"Blog"} desc={desc} />
          <Divider sx={{ mt: 2 }} />
          <Stack gap={1.6} sx={{ mb: 4, mt: 3.7 }}>
            {blogList.map((item, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    borderRadius: "8px",
                    borderColor: "lightGray",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    px: "22px",
                    py: "8px",
                    "&:hover": {
                      "&  a": {
                        fontWeight: "bold",
                      },
                    },
                    "& a": {
                      textDecoration: "none",
                    },
                  }}
                >
                  <Link href={`/blog/${index}`} passHref>
                    <Typography sx={{ fontFamily: "", color: "gray" }}>
                      Dolore anim cupidatat dolor aliqua dolore.
                    </Typography>
                  </Link>
                </Box>
              );
            })}
          </Stack>
        </>
      </Box>
    </AppsContainer>
  );
}
