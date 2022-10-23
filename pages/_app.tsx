import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import type { AppProps } from "next/app";
import SizeObserver from "../utils/size-observer";
import AniBall from "../components/AniBall";
import Head from "next/head";
import Script from "next/script";
import { GA_TRACKING_ID } from "../utils/gtag";

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
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
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
