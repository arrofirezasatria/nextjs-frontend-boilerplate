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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
