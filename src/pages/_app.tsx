import type { AppProps } from "next/app";
import ThemeProvider from "@modules/components/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      {/* <NextIntlProvider messages={pageProps.mesasges}> */}
      <Component {...pageProps} />
      {/* </NextIntlProvider> */}
    </ThemeProvider>
  );
}
