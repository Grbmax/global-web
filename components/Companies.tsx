import React from 'react'
import { Tile, TileContent, TileWrapper } from './Tile'
import { CompanyTop, CompanyContainer, CompanyLeft, CompanyRight, CompanyBottom, CompanyLink } from './Company'
import Image from 'next/image'
import MediaTextScroll from './MediaTextScroll'
import RealtorTextScroll from './RealtorTextScroll'
import ConsultancyTextScroll from './ConsultancyTextScroll'


const Companies = () => (
    <TileWrapper numOfPages={3}>

        <TileContent>
            <Tile
                page={0}
                renderContent={({ progress }) => (
                    <CompanyContainer>
                        {/*  <CompanyTop>
                            <span>AER MEDIA AER MEDIA AER MEDIA AER MEDIA AER MEDIA AER MEDIA </span>
                        </CompanyTop> */}
                        <CompanyLeft progress={progress}>
                            <figure className="snip0015">
                                <Image src="/assets/mediahero.png"
                                    layout='responsive'
                                    width={600}
                                    height={600}
                                    alt="Aer Media"
                                    className='rounded-md' />
                                <figcaption>
                                    <h2 className='text-2xl lg:text-3xl lg:p-8'>The &nbsp; <span className='italic font-extrabold'> Creative</span> &nbsp; Mind.</h2>



                                </figcaption>
                            </figure>
                        </CompanyLeft>
                        <CompanyRight progress={progress}>
                            <div className='text-white text-[28px] md:text-[34px] lg:text-[42px] flex justify-center lg:justify-start font-bold'>
                                ÆR
                                <div className='text-[#FF8A00]'>&nbsp; MEDIA</div>
                            </div>
                            <br />
                            <p className='py-2 lg:py-5 text-justify text-base md:text-[22px] lg:text-2xl'>
                                ÆR Media is a combination of creative minds and tech-savy digital
                                stratergists offering a platter of services for Marketing
                                and Tech Requirements of a company. Working with a
                                variety of B2B startups and medium to large businesses,
                                we&apos;ve quickly learned that expanding a business can be quite a
                                challenge.
                            </p><br />
                            <p className='italic font-bold text-[20px] md:text-[22px]  lg:text-2xl flex justify-center lg:justify-start'>That is where we come in!</p>
                            {/* <CompanyLink href=''>
                                <div className='py-10 z-40'>
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
                page={1} renderContent={({ progress }) => (
                    <CompanyContainer>
                        {/*        <CompanyTop>
                            <span>AER REALTORS</span>
                        </CompanyTop> */}
                        <CompanyLeft progress={progress}>
                            <figure className="snip0015">
                                <Image src="/assets/realtorshero.png"
                                    layout='responsive'
                                    width={600}
                                    height={600}
                                    alt="Aer Realtor"
                                    className='rounded-md' />
                                <figcaption>
                                    <h2 className='text-2xl lg:text-3xl lg:p-8'>The &nbsp; <span className='italic font-extrabold'> Crafting</span> &nbsp; Mind.</h2>



                                </figcaption>
                            </figure>
                        </CompanyLeft>
                        <CompanyRight progress={progress}>
                            <div className='text-white text-[28px] md:text-[34px] lg:text-[42px] flex justify-center lg:justify-start font-bold'>ÆR <span className='text-[#b7da46]'> &nbsp; REALTORS</span></div>
                            <p className='py-5 lg:py-5 text-justify md:text-[22px] text-base lg:text-2xl'>
                                ÆR Realtors is a brokerage,leasing and
                                Real estate investment consultancy firm run by a team
                                of experts providing tailor-made solutions for clients for
                                property investments. We have managed to partner with the
                                biggest and most profitable project developers in the
                                region; allowing us to take the urban development of the
                                country in the right direction.</p>
                            <br />
                            <p className='italic font-extrabold text-[20px]  md:text-[22px]  lg:text-2xl flex justify-center lg:justify-start '> Find your piece of Earth!</p>
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
                page={2} renderContent={({ progress }) => (
                    <CompanyContainer>
                        {/*        <CompanyTop>
                            <span>AER CONSULTANCY</span>
                        </CompanyTop> */}
                        <CompanyLeft progress={progress}>
                            <figure className="snip0015">
                                <Image src="/assets/consultancyhero.png"
                                    layout='responsive'
                                    width={600}
                                    height={600}
                                    alt="Aer Consultancy"
                                    className='rounded-md' />
                                <figcaption>
                                    <h2 className='text-2xl lg:text-3xl lg:p-8'>The &nbsp; <span className='italic font-extrabold'>Connecting</span> &nbsp; Mind.</h2>



                                </figcaption>
                            </figure>
                        </CompanyLeft>
                        <CompanyRight progress={progress}>
                            <div className='text-white text-[28px] sm:text-xl md:text-[34px] lg:text-[42px] flex justify-center lg:justify-start font-bold'>
                                ÆR <span className='text-[#9747FF]'>&nbsp; CONSULTANCY </span>
                                 </div>
                            <p className='py-5 lg:py-5 text-justify md:text-[22px] text-base lg:text-2xl'>
                                ÆR consultancy commits to accelerate innovations that have a positive
                                impact on the world. We are the driving force for your innovations
                                through our offering of strategic consulting services,
                                funding consultancy, Audits, Project management and More,
                                which deliver impactful expertise for all business development stages.</p>
                            <br />
                            <p className='flex italic font-bold text-[20px] md:text-[22px] lg:text-2xl justify-center lg:justify-start'>Let us help you succeed!</p>

                            {/*  <div className='py-10 z-40 '>
                                <button className="flex mx-auto text-white bg-transparent 
                                        border-2 py-2 px-8 focus:outline-none hover:bg-white 
                                        hover:text-black rounded-xl text-lg">
                                    Website
                                </button>
                            </div>  */}
                        </CompanyRight>
                        <CompanyBottom>
                            <ConsultancyTextScroll />
                        </CompanyBottom>
                    </CompanyContainer>
                )}
            ></Tile>
        </TileContent >
    </TileWrapper >
)

export default Companies