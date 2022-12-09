import AppsContainer from "@layouts/AppsContainer";
import Header from "@layouts/Header";
import { Box } from "@mui/material";
import { ArticleJsonLd } from "next-seo";
import React from "react";

export default function BlogPost() {
  return (
    <AppsContainer>
      <Box component={"main"}>
        {/* JSON-LD can more than one  */}
        <ArticleJsonLd
          url={""}
          title={""}
          images={[]}
          datePublished={""}
          authorName={undefined}
          description={""}
        />
        <header>
          <h1>Your Title</h1>
          <h2>subtitle</h2>
        </header>
        <article>
          <div>article body</div>
        </article>
      </Box>
    </AppsContainer>
  );
}
