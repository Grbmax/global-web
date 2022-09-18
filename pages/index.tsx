import React, { useRef, useContext, useState, useCallback } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Companies from '../components/Companies'
import About from '../components/About'
import MissionStatement from '../components/MissionStatement'
import Footer from '../components/Footer'
import Masthehad from '../components/masthead'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="ÆR Global" />
        <link rel="icon" href="/globe.png" />
        <title>ÆR Global</title>
      </Head>
      
      <Masthehad />
      <About />
      <Companies />
      <MissionStatement />
      <Footer />
    </div>
  )
}

export default Home
