import * as React from 'react';

import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { CacheProvider, EmotionCache } from '@emotion/react';

import theme from '../theme';
import createEmotionCache from '../utils/createEmotionCache';

import '../styles/index.scss';
import { useRouter } from 'next/router';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const canonicalURL = process.env.NEXT_PUBLIC_DOMAIN + useRouter().asPath;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Gonzalo Flores | Portfolio</title>
        <meta name="theme-color" content={theme.palette.secondary.main} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="description"
          content="Portfolio de Gonzalo Flores, un desarrollador Full Stack Javascript"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, Angular, NodeJS, Next, Nest, MySQL, MongoDB"
        />

        {/* CANONICAL */}
        <link rel="canonical" href={canonicalURL} />

        {/* FAVICON */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
