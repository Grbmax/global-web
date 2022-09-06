import React, { useRef, useContext, useState, useCallback} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Companies from '../components/companies'
import Footer from '../components/Footer'
import About from '../components/About'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ÆR Global</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About/>
      <Companies />
      <Footer />
    </div>
  )
}

export default Home
