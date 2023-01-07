import AppsContainer from "@layouts/AppsContainer";
import Header from "@layouts/Header";
import { Box, Typography } from "@mui/material";
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
          <Typography
            variant="h4"
            component={"h1"}
            sx={{
              color: "gray",
              fontFamily: "",
              fontWeight: "bold",
              mt: 2,
              mb: 3,
            }}
          >
            Occaecat sunt proident labore veniam ea cillum culpa aute enim.
          </Typography>
        </header>
        <article>
          <Typography sx={{ color: "gray", fontFamily: "", my: 2 }}>
            Ad tempor ex minim fugiat in cupidatat voluptate deserunt pariatur
            non nulla excepteur. Laboris aute quis amet consectetur nulla. Magna
            nulla irure commodo consequat magna magna occaecat. Deserunt
            excepteur eiusmod do ea ut duis do. Commodo nostrud est commodo eu
            commodo quis et ea.
          </Typography>
          <Typography sx={{ color: "gray", fontFamily: "", mt: 2, mb: 4 }}>
            Et sunt incididunt veniam adipisicing in sunt duis cillum cupidatat.
            Sunt quis eiusmod exercitation laborum. Do consectetur sint nisi
            consectetur cupidatat adipisicing. Ullamco proident incididunt
            pariatur nostrud Lorem esse mollit eu. Magna et culpa nostrud culpa
            excepteur esse officia ullamco culpa sit. Dolor enim sit laboris
            excepteur duis quis culpa.
          </Typography>
        </article>
      </Box>
    </AppsContainer>
  );
}

import { GetServerSideProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  return {};
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
