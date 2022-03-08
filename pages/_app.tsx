import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import { ToastContainer } from "react-toastify";
import { Web3Manager } from "@lib/providers";
import { Head } from "@components/common";
import { Layout } from "@components/ui";
import theme from "../styles/theme";
import "@fontsource/poppins";
import "@fontsource/inter";
import "react-toastify/dist/ReactToastify.min.css";
import "../styles/toastify.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps): JSX.Element => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Web3Manager>
      <CacheProvider value={emotionCache}>
        <Head />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer position="bottom-right" hideProgressBar limit={4} />
        </ThemeProvider>
      </CacheProvider>
    </Web3Manager>
  );
};

export default MyApp;
