import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="antialiased box-border">
      <Head>
        <title>Contest Pug</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
