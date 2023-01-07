import React from "react";
import AppsContainer from "@layouts/AppsContainer";
import TitleHeader from "@components/TitleHeader";
import { Typography } from "@mui/material";

import UseTranslation from "next-translate/useTranslation";
import { title } from "process";

export default function about() {
  const { t } = UseTranslation("about");
  const descT = t("desc");
  const aboutT = t("title");

  return (
    <AppsContainer>
      <TitleHeader title={aboutT} desc={descT} />
      <Typography sx={{ fontFamily: "", mb: 4, color: "gray" }}>
        adadadasds
      </Typography>
    </AppsContainer>
  );
}
