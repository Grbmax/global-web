import React from 'react'
import { CgCamera } from 'react-icons/cg';
import { GiCrane } from 'react-icons/gi';
import { FcMoneyTransfer } from 'react-icons/fc';

const About = () => {
  return (
    <>

      <div id="about" className='mx-24 my-8 z-50'>

        <div className='text-center py-6'>
          <h1 className=' who font-light text-base text-gray-400'>Who We Are</h1>
          <h1 className='font-bold text-4xl'>ÆR is about your business!</h1>
        </div>

        <div className='py-2 gap-6 '>
          <div className='text-justify '>
            <p className='text-xl py-10  text-left'>
              We made a new start. A start that will build beautiful
              relationships,shape millions of ideas: Enable a new way
              to live, learn, work and earn. At AER, we build products
              and services of the future to make your business dreams a reality.
            </p>
          </div>
          <div className='text-justify'>
            <p className='text-xl py-10 w-full text-right'>
              We made a new start. A start that will build beautiful
              relationships,shape millions of ideas: Enable a new way
              to live, learn, work and earn. At AER, we build products
              and services of the future to make your business dreams a
              reality.
            </p>
          </div>
        </div>


        <div className='flex space-x-20 justify-center py-12'>
          <span className='text-5xl'><CgCamera /></span>
          <span className='text-5xl'><GiCrane /></span>
          <span className='text-5xl'><FcMoneyTransfer /></span>
        </div>

        <span className="GiCrane"></span>


      </div>
    </>
  )
}

export default About