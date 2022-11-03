import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile";
import {
  CompanyContainer,
  CompanyLeft,
  CompanyRight,
  CompanyBottom,
  CompanyLink,
  CompanyBackground
} from "./Company";
import Image from "next/image";
import MediaTextScroll from "./MediaTextScroll";
import RealtorTextScroll from "./RealtorTextScroll";
import ConsultancyTextScroll from "./ConsultancyTextScroll";
import mediaPoster from "../public/assets/mediahero.png"
import RealtorPoster from "../public/assets/realtorshero.png"
import conPoster from "../public/assets/consultancyhero.png"


const Companies = () => (
  <TileWrapper numOfPages={3}>
{/* <TileBackground><CompanyBackground /></TileBackground> */}
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <CompanyContainer>
            <CompanyLeft progress={progress}>

              <figure className="snip0015">
                <Image
                  src={mediaPoster}
                  alt="Aer Media"
                  className="rounded-md"
                />
                <figcaption>
                  <h2 className="text-2xl lg:text-3xl lg:p-8">
                    The &nbsp;
                    <span className="italic font-extrabold"> Creative</span>
                    &nbsp; Mind.
                  </h2>
                </figcaption>
              </figure>

            </CompanyLeft>
            <CompanyRight progress={progress}>
              <div className="text-white text-[24px] md:text-[34px] lg:text-[42px] flex justify-center lg:justify-start font-bold">
                ÆR<div className="text-[#FF8A00]">&nbsp; MEDIA</div>
              </div>
              <br />
              <p className=" lg:py-5 text-justify text-[16px] md:text-[22px] lg:text-2xl">
                ÆR Media offers a platter of services from branding to creative
                software development, we are a combination of creative minds and
                tech-savvy digital strategists who map out best ways to market
                your brand. While working with various B2B, B2C, D2C businesses
                we&apos;ve learned the importance of showcasing the company well
                and a need for functional strategy to stay ahead
              </p>
              
              <div className=" py-3 flex italic font-bold text-[18px] md:text-[22px] lg:text-2xl justify-center lg:justify-start">
                That is where we come in!
              </div>
              {/* <CompanyLink href=''>
                                <div className=  sdf 'py-10 z-40'>
                                    <button className="flex mx-auto text-white bg-transparent 
                                        border-2 py-2 px-8 focus:outline-none hover:bg-white 
                                        hover:text-black rounded-xl text-lg">
                                        Website
                                    </button>
                                </div>
                            </CompanyLink> */}
            </CompanyRight>
            <CompanyBottom>
              <MediaTextScroll />
            </CompanyBottom>
          </CompanyContainer>
        )}
      ></Tile>

      <Tile
        page={1}
        renderContent={({ progress }) => (
          <CompanyContainer>
            <CompanyLeft progress={progress}>
              <figure className="snip0015">
                <Image
                  src={RealtorPoster}
                  alt="Aer Realtor"
                  className="rounded-md"
                />
                <figcaption>
                  <h2 className="text-2xl lg:text-3xl lg:p-8">
                    The &nbsp;
                    <span className="italic font-extrabold"> Crafting</span>
                    &nbsp; Mind.
                  </h2>
                </figcaption>
              </figure>
            </CompanyLeft>
            <CompanyRight progress={progress}>
              <div className="text-white text-[24px] md:text-[34px] lg:text-[42px] flex justify-center lg:justify-start font-bold">
                ÆR <span className="text-[#b7da46]"> &nbsp; REALTORS</span>
              </div>
              <p className="py-2 lg:py-5 text-justify text-[16px] md:text-[22px] lg:text-2xl">
                ÆR Realtors is leasing, development, and investment firm run by
                a team of experts providing tailor-made solutions for placing
                your brand in the perfect commercial locations for high ROI and
                maximum footfall compared to your competitors. With our
                franchise model customers receive the benefits of optimized
                service delivery through widely spread property shop process
                knowledge.
              </p>
              
              <p className="py-3 flex italic font-bold text-[18px] md:text-[22px] lg:text-2xl justify-center lg:justify-start">
                Your door to a new opportunity!
              </p>
              {/*   <div className='py-10 z-40 '>
                                <button className="flex mx-auto text-white bg-transparent 
                                        border-2 py-2 px-8 focus:outline-none hover:bg-white 
                                        hover:text-black rounded-xl text-lg">
                                    Website
                                </button>
                            </div> */}
            </CompanyRight>
            <CompanyBottom>
              <RealtorTextScroll />
            </CompanyBottom>
          </CompanyContainer>
        )}
      ></Tile>

      <Tile
        page={2}
        renderContent={({ progress }) => (
          <CompanyContainer>
            <CompanyLeft progress={progress}>
              <figure className="snip0015">
                <Image
                  src={conPoster}
                  alt="Aer Consultancy"
                  className="rounded-md"
                />
                <figcaption>
                  <h2 className="text-2xl lg:text-3xl lg:p-8">
                    The &nbsp;
                    <span className="italic font-extrabold">Connecting</span>
                    &nbsp; Mind.
                  </h2>
                </figcaption>
              </figure>
            </CompanyLeft>
            <CompanyRight progress={progress}>
              <div className="text-white text-[24px] md:text-[34px] lg:text-[42px] flex justify-center lg:justify-start font-bold">
                ÆR <span className="text-[#9747FF]">&nbsp; CONSULTANCY </span>
              </div>
              <p className="py-2 lg:py-5 text-justify text-[16px] md:text-[22px]  lg:text-2xl">
                ÆR Consultancy commits to driving your innovations to success
                through our offering of strategic planning for finance, business
                consulting, Project management, and More, to deliver impactful
                expertise for all development stages from starting to expanding
                a business.
              </p>
              
              <p className="py-3 flex italic font-bold text-[18px] md:text-[22px] lg:text-2xl justify-center lg:justify-start">
                Let us help you succeed!
              </p>

              {/*    <div className='py-10 z-40 '>
                                <button className="flex mx-auto text-white bg-transparent 
                                        border-2 py-2 px-8 focus:outline-none hover:bg-white 
                                        hover:text-black rounded-xl text-lg">
                                    Website
                                </button>
                            </div>   */}
            </CompanyRight>
            <CompanyBottom>
              <ConsultancyTextScroll />
            </CompanyBottom>
          </CompanyContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Companies;

