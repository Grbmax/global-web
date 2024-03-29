import React from "react";
import { GiVideoCamera } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { TbDrone } from "react-icons/tb";

const About = () => {
  return (
    <>
      <div id="about" className="bg-black ">
        <div className="text-center py-14 mt-10">
          <div className=" who font-light text-xl lg:text-[28px] text-gray-400">
            Who We Are
          </div>
          <div className="font-bold text-4xl ">ÆR is about your business!</div>
        </div>

        <div className="py-2 gap-6 mx-10 lg:mx-32 lg:pr-10 lg:pl-10 ">
          <div className="">
            <p className="text-xl md:text-2xl lg:text-[28px] lg-py-10 text-justify">
              We made a new start. A start that will build beautiful
              relationships, and shape millions of ideas: <br />
              Enable a new way to live, learn, work and earn. At ÆR we provide
              services of the future to make your business dreams a reality.
            </p>
          </div>
          <div className="">
            <p className="text-xl md:text-2xl lg:text-[28px] py-10 w-full  text-justify">
              We as a conglomerate have branched out to various enterprises of
              tech, real estate, marketing, and consultancy to help save
              customers time, money, risk, and trouble related to business. ÆR
              is one stop solution to all your business needs.
            </p>
          </div>
        </div>

        <div className="flex space-x-10 lg:space-x-20 justify-center items-center py-12">
          <span className="text-5xl lg:text-7xl text-[#dd9654] ">
            <GiVideoCamera />
          </span>
          <span className="text-3xl lg:text-5xl text-[#dd9654] ">
            <BsBuilding />
          </span>
          <span className="text-[40px] lg:text-[56px] text-[#dd9654] ">
            <GiMoneyStack />
          </span>
          <span className="text-[36px] lg:text-[50px] text-[#dd9654] ">
            <TbDrone />
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
