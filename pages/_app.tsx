import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/global';
import DefaultTheme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
