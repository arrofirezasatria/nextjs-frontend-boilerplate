import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { Box, Typography } from "@mui/material";

import { toggleDarkMode, useThemeContext } from "@modules/ThemeContext";
import AppsContainer from "@layouts/AppsContainer";

export default function Home() {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return <AppsContainer>as</AppsContainer>;
}
