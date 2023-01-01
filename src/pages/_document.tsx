import { Box } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* for manifest PWA */}
        <link rel="manifest" href="/static/manifest.json" />
        {/* PWA primary color */}
        <meta
          name="theme-color"
          content={"white"}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content={"black"}
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/icons/180x180.png"
        />
      </Head>
      <Box component="body" sx={{ display: "block", margin: 0, padding: 0 }}>
        <Main />
        <NextScript />
      </Box>
    </Html>
  );
}
