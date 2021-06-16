import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import 'tailwindcss/tailwind.css';
import './global-styles.css';

// import 'normalize.css';
// import 'styles/_base.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Netflix clone website' />
        <title>Tácio de Souza Campos</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
