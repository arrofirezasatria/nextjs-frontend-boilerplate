import { Rubik } from "next/font/google";
import { Poppins } from "next/font/google";

export const cultured = {
  // 50: "#F0F7FF",
  // 100: "#C2E0FF",
  // 200: "#99CCF3",
  // 300: "#66B2FF",
  // 400: "#3399FF",
  main: "#F0F0F2",
  // 500: "#007FFF",
  // 600: "#0072E5", // vs blueDark 900: WCAG 4.6 AAA (large), APCA 36 Not for reading text
  // 700: "#0059B2",
  // 800: "#004C99",
  // 900: "#003A75",
};

export const yaleBlue = {
  // 50: "#E2EDF8",
  // 100: "#CEE0F3",
  // 200: "#91B9E3",
  // 300: "#5090D3",
  main: "#30506E",
  400: "#265D97",
  // 500: "#1E4976",
  // 600: "#173A5E",
  // 700: "#132F4C", // contrast 13.64:1
  // 800: "#001E3C",
  // 900: "#0A1929",
};

export const silverMetalic = {
  // 50: "#E2EDF8",
  // 100: "#CEE0F3",
  // 200: "#91B9E3",
  // 300: "#5090D3",
  main: "#B2B1B5",
  // 400: "#265D97",
  // 500: "#1E4976",
  // 600: "#173A5E",
  // 700: "#132F4C", // contrast 13.64:1
  // 800: "#001E3C",
  // 900: "#0A1929",
};

const rubik = Rubik({
  variable: "--rubik-font",
  subsets: ["latin"],
  weight: ["600"],
});

const systemFont = [
  "--rubik-font",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const getDesignTokens = (mode: string | null) => {
  return {
    palette: {
      primary: {
        ...yaleBlue,
        ...(mode === "dark" && {
          main: yaleBlue[400],
        }),
      },
      // secondary: {
      //   ...blueDark,
      //   ...(mode === "dark" && {
      //     main: blueDark[400],
      //   }),
      // },
    },
    typography: {
      fontFamily: [...systemFont].join(","),
    },
    components: {},
  };
};
