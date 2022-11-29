import { Container } from "@mui/material";
import { NextSeo } from "next-seo";
import React from "react";
import Footer from "@layouts/Footer";
import { NextSeoProps } from "next-seo/lib/types";
import Header from "@layouts/Header";

interface props {
  children: React.ReactNode;
  basicSeo?: NextSeoProps;
}

export default function AppsContainer(perops: props) {
  const { children, basicSeo, ...rest } = perops;
  return (
    <Container {...rest}>
      <NextSeo {...basicSeo} />
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
