import React, { useState, useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

import '../styles/globals.css'
import ScrollObserver from '../utils/scroll-observer'

import type { AppProps } from 'next/app'
import SizeObserver from '../utils/size-observer'
import AniBall from "../components/AniBall";


function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4500);
  }, []);
  return (
    <>


      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <AniBall />
        </div>) :

        <SizeObserver>
          <ScrollObserver>
            <Component {...pageProps} />
          </ScrollObserver>
        </SizeObserver>

      }



    </>
  )
}

export default MyApp
