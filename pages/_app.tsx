import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import type { AppProps } from "next/app";
import SizeObserver from "../utils/size-observer";
import AniBall from "../components/AniBall";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Explore a variety of services for real estate, franchise model, marketing and business development solutions with ÆR"
        />

        <link rel="icon" href="/global.jpeg" />
        <title>ÆR Global &nbsp; &nbsp; &nbsp;</title>
      </Head>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <AniBall />
        </div>
      ) : (
        <SizeObserver>
          <ScrollObserver>
            <Component {...pageProps} />
          </ScrollObserver>
        </SizeObserver>
      )}
    </>
  );
}

export default MyApp;
