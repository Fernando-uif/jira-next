import { CssBaseline, ThemeProvider } from "@mui/material";
import { EntriesProvider } from "@/context/entries";
import type { AppProps } from "next/app";
import { darkTheme, lightTheme } from "../../themes/";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </EntriesProvider>
  );
}
