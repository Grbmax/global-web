import React from 'react'
import { CgCamera } from 'react-icons/cg';
import { GiCrane } from 'react-icons/gi';
import { FcMoneyTransfer } from 'react-icons/fc';

const About = () => {
  return (
    <>
    
      <div className='mx-24 my-8'>

        <div className='text-center py-6'>
          <h1 className=' who font-light text-base text-gray-400'>Who We Are</h1>
          <h1 className='font-bold text-4xl'>ÆR is about your business!</h1>
        </div>

        <div className='py-2'>
          <p className='text-xl py-2 text-left'>We made a new start. A start that will build beautiful<br />relationships,shape millions of ideas: Enable a new way<br />to live, learn, work and earn.<br />At AER, we build products and services of the future to<br />make your business dreams a reality.
          </p>
          <p className='text-xl py-2 text-right'>We made a new start. A start that will build beautiful<br />relationships,shape millions of ideas: Enable a new way<br />to live, learn, work and earn.<br />At AER, we build products and services of the future to<br />make your business dreams a reality.
          </p>
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