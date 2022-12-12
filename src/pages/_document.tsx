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
        {/* Dark Theme Color  */}
        <meta
          name="theme-color"
          content={"black"}
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/static/icons/maskable_icon_x192.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
