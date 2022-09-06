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
        renderContent={({progress}) => (
        <CompanyContainer>
            <CompanyTop>
                <span>AER MEDIA</span>
            </CompanyTop>
            <CompanyLeft progress={progress}>
                    <Image src="/assets/mediahero.png" 
                    layout='responsive' 
                    width={600}
                    height={600}
                    alt="Aer Media" />
                </CompanyLeft>
                <CompanyRight progress={progress}>
            <div className='text-white'>AER MEDIA</div>
            </CompanyRight>
            <CompanyBottom>
                <span>AER MEDIA</span>
            </CompanyBottom>
        </CompanyContainer>
        )}
    ></Tile>
    <Tile 
        page={1} renderContent={({progress}) => (
            <CompanyContainer>
                <CompanyTop>
                    <span>AER REALTORS</span>
                </CompanyTop>
                <CompanyLeft progress={progress}>
                <Image src="/assets/realtorshero.png" 
                    layout='responsive' 
                    width={600}
                    height={600}
                    alt="Aer Media" />
                </CompanyLeft>
                    <CompanyRight progress={progress}>
                <div className='text-white'>AER REALTORS</div>
                </CompanyRight>
                <CompanyBottom>
                    <span>AER REALTORS</span>
                </CompanyBottom>
            </CompanyContainer>
        )}
    ></Tile>
    <Tile 
        page={2} renderContent={({progress}) => (
            <CompanyContainer>
                <CompanyTop>
                    <span>AER CONSULTANCY</span>
                </CompanyTop>
                <CompanyLeft progress={progress}>
                <Image src="/assets/consultancyhero.png" 
                    layout='responsive' 
                    width={600}
                    height={600}
                    alt="Aer Media" />
                </CompanyLeft>
                    <CompanyRight progress={progress}>
                <div className='text-white'>AER CONSULTANCY</div>
                </CompanyRight>
                <CompanyBottom>
                    <span>AER CONSULTANCY</span>
                </CompanyBottom>
            </CompanyContainer>
        )}
    ></Tile>    
    </TileContent>
</TileWrapper>
)

export default Companies