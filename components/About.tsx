import React from 'react'
import { BsCamera } from 'react-icons/bs';
import { BsBuilding } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';


const About = () => {
  return (
    <>

      <div id="about" className='bg-black '>

        <div className='text-center py-14 mt-10'>
          <h1 className=' who font-light text-xl lg:text-2xl text-gray-400'>Who We Are</h1>
          <h1 className='font-bold text-4xl'>ÆR is about your business!</h1>
        </div>

        <div className='py-2 gap-6 mx-10 lg:mx-32 lg:pr-10 lg:pl-10 '>
          <div className='text-justify'>
            <p className='text-xl md:text-2xl lg:text-[28px] lg-py-10 text-justify'>
            We made a new start. A start that will build beautiful relationships, shape millions of ideas: 
            Enable a new way to live, learn, work and earn. 
            At ÆR, we build product and services of the future to make your business dreams a reality.
            </p>
          </div>
          <div className='text-justify'>
            <p className='text-xl md:text-2xl lg:text-[28px] py-10 w-full  text-justify'>
            ÆR is a conglomerate branched out to enterprises of tech, 
            real estate, marketing, media, finances and consultancy. 
            We serve pan India and internationally your one stop solution for 
            all your business needs.
            </p>
          </div>
        </div>


        <div className='flex space-x-10 lg:space-x-20 justify-center py-12'>
          <span className='text-3xl lg:text-5xl'><BsCamera /></span>
          <span className='text-3xl lg:text-5xl'><BsBuilding /></span>
          <span className='text-[36px] lg:text-[50px]'><GiMoneyStack /></span>
        </div>




      </div>

    </>
  )
}

export default About