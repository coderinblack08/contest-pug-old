import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'figbird';
import feathers from '../api/feathers-client';
import useStore from '../store';
import Head from 'next/head';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): any => {
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    const reAuth = async () => {
      try {
        const authenticatedUser = await feathers.reAuthenticate();
        setUser(authenticatedUser.user);
        // eslint-disable-next-line no-empty
      } catch (error) {}
    };
    reAuth();
  }, []);

  return (
    <div className="antialiased box-border">
      <Head>
        <title>Contest Pug</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Contest Pug Official Webpage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Contest Pug, contests, competitions" />
      </Head>
      <Provider feathers={feathers}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Provider>
    </div>
  );
};

export default MyApp;
