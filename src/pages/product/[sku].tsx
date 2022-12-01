import AppsContainer from "@layouts/AppsContainer";
import Header from "@layouts/Header";
import { Box } from "@mui/material";
import { ProductJsonLd } from "next-seo";
import React from "react";

export default function Product() {
  return (
    <AppsContainer>
      <Box component={"main"}>
        {/* JSON-LD can more than one  */}
        <ProductJsonLd productName="" />
        <Box>
          <header>
            <h1>Product Title</h1>
          </header>
          <Box>Product body</Box>
        </Box>
      </Box>
    </AppsContainer>
  );
}
