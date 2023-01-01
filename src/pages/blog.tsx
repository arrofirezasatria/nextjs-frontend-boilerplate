import AppsContainer from "@layouts/AppsContainer";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

import TitleHeader from "@components/TitleHeader";
import Link from "next/link";

const blogList = [1, 2, 3, 4, 5];

export default function blog() {
  return (
    <AppsContainer>
      <main>
        <>
          <TitleHeader
            title={"Blog"}
            desc={
              "Tempor tempor veniam eu sit aliquip laborum tempor qui commodo sint. Aliqua ipsum cillum adipisicing eiusmod laboris nostrud ut nostrud. Ut reprehenderit culpa labore labore minim officia esse do cillum in ea qui."
            }
          />
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
      </main>
    </AppsContainer>
  );
}
