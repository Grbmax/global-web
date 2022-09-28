import React from 'react'
import type { NextPage } from 'next'

import Companies from '../components/Companies'
import About from '../components/About'
import MissionStatement from '../components/MissionStatement'
import Footer from '../components/Footer'
import Masthehad from '../components/masthead'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
   
      <Navbar />
      <Masthehad />
      <About />
      <Companies />
      <MissionStatement />
      <Footer />


    </div>
  )
}

export default Home
