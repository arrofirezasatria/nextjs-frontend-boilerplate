import React from "react";
import AppsContainer from "@layouts/AppsContainer";
import TitleHeader from "@components/TitleHeader";

import UseTranslation from "next-translate/useTranslation";

export default function about() {
  const { t } = UseTranslation("about");
  const descT = t("desc");
  const aboutT = t("title");

  return (
    <AppsContainer>
      <TitleHeader title={aboutT} desc={descT} />
    </AppsContainer>
  );
}
