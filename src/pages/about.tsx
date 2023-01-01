import React from "react";
import AppsContainer from "@layouts/AppsContainer";
import TitleHeader from "@components/TitleHeader";
import { Typography } from "@mui/material";

export default function about() {
  return (
    <AppsContainer>
      <TitleHeader
        title={"About"}
        desc={
          "Officia cillum exercitation amet irure quis deserunt officia. Aute adipisicing in ex irure excepteur sit. Aliquip voluptate sint consequat laborum quis. Esse ipsum laborum dolor do in reprehenderit mollit cillum ex aliqua minim"
        }
      />
      <Typography sx={{ fontFamily: "", mb: 4, color: "gray" }}>
        Ea dolore sint in ad nulla aliquip minim voluptate. Laborum velit quis
        qui exercitation laboris aliquip magna ullamco excepteur. Reprehenderit
        excepteur culpa cillum sit. Et cillum ea qui aliqua adipisicing
        adipisicing esse. Lorem nisi deserunt dolore ipsum nulla occaecat nulla
        ex sint excepteur veniam in voluptate sunt. Labore Lorem aliquip
        incididunt amet esse ut consequat.
      </Typography>
    </AppsContainer>
  );
}
