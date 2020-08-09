import type { AppProps } from 'next/app';
import { Provider } from 'figbird';
import client from '../api/feathers-client';
import Head from 'next/head';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): any => {
  return (
    <div className="antialiased box-border">
      <Head>
        <title>Contest Pug</title>
      </Head>
      <Provider feathers={client}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
};

export default MyApp;
