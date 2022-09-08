import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile'
import { CompanyBottom, CompanyContainer, CompanyLeft, CompanyRight, CompanyTop } from './Company'
import Image from 'next/image'

const Companies = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground>
        </TileBackground>
        <TileContent>
            <Tile
                page={0}
                renderContent={({ progress }) => (
                    <CompanyContainer>
                        <CompanyLeft progress={progress}>
                        
                            <Image src="/assets/mediahero.png"
                                layout='responsive'
                                width={600}
                                height={600}
                                alt="Aer Media"
                            />
                        </CompanyLeft>
                        <CompanyRight progress={progress}>
                            <div className='text-white text-4xl'>ÆR MEDIA</div><br />
                            <p className=' text-2xl text-justify'>
                                ÆR Media is a combination of creative minds and tech-savy digital
                                stratergists offering a platter of services for Marketing and Tech
                                Requirements of a company.Working with a variety of B2B startups
                                and medium to large businesses, we’ve quickly learned that expanding
                                a business can be quite a challenge.
                            </p>
                            <p className='italic'>That is where we come in!</p>
                        </CompanyRight>
                       {/*  <CompanyBottom>
                            ÆR MEDIAÆR MEDIAÆR MEDIAÆR MEDIAÆR MEDIAÆR MEDIAÆR MEDIA
                        </CompanyBottom> */}
                    </CompanyContainer>
                )}
            ></Tile>
            <Tile
                page={1} renderContent={({ progress }) => (
                    <CompanyContainer>
                        {/*  <CompanyTop>
                            <span>AER REALTORS</span>
                        </CompanyTop> */}
                        <CompanyLeft progress={progress}>
                            <Image src="/assets/realtorshero.png"
                                layout='responsive'
                                width={600}
                                height={600}
                                alt="Aer Media" />
                        </CompanyLeft>
                        <CompanyRight progress={progress}>
                            <div className='text-white text-4xl'>ÆR REALTORS</div>
                            <p className='py-3 text-2xl text-justify'>
                                ÆR Realtors is a brokerage,leasing and Real estate investment consultancy
                                firm run by a team of experts providing tailor-made solutions
                                for clients for property investments. We have managed to partner with the biggest and most
                                profitable project developers in the region; allowing us to take the urban development of the
                                country in the right direction.
                            </p>
                            <p className='italic'> Find your piece of Earth!</p>
                        </CompanyRight>
                        {/* <CompanyBottom>
                            ÆR REALTORSÆR REALTORSÆR REALTORSÆR REALTORSÆR REALTORSÆR REALTORS
                        </CompanyBottom> */}
                    </CompanyContainer>
                )}
            ></Tile>
            <Tile
                page={2} renderContent={({ progress }) => (
                    <CompanyContainer>
                        {/*  <CompanyTop>
                            <span>AER CONSULTANCY</span>
                        </CompanyTop> */}
                        <CompanyLeft progress={progress}>
                            <Image src="/assets/consultancyhero.png"
                                layout='responsive'
                                width={600}
                                height={600}
                                alt="Aer Media" />
                        </CompanyLeft>
                        <CompanyRight progress={progress}>
                            <div className='text-white text-4xl'>ÆR CONSULTANCY</div>
                            <p className='py-3 text-2xl text-justify'>
                                ÆR consultancy commits to accelerate innovations that
                                have a positive impact on the world. We are the driving force
                                for your innovations through our offering of strategic consulting
                                services, funding consultancy, Audits, Project management and More,
                                which deliver impactful expertise for all development stages.
                            </p>
                            <p className='italic'>Let us help you succeed!</p>
                        </CompanyRight>
                        {/* <CompanyBottom>
                            ÆR CONSULTANCYÆR CONSULTANCYÆR CONSULTANCYÆR CONSULTANCYÆR CONSULTANCY
                        </CompanyBottom> */}
                    </CompanyContainer>
                )}
            ></Tile>
        </TileContent>
    </TileWrapper>
)

export default Companies