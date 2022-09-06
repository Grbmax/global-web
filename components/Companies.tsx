import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { CompanyBackground, CompanyContainer } from './Company'

const Companies = () => (
<TileWrapper numOfPages={3}>
    <TileBackground>
        <CompanyBackground />
    </TileBackground>
    <TileContent>
    <Tile 
        page={0} renderContent={({progress}) => (
        <CompanyContainer>
            <span className='text-9xl'>Foo {progress} </span>
        </CompanyContainer>
        )}
    ></Tile>
    <Tile 
        page={1} renderContent={({progress}) => (
        <span className='text-9xl'>Boo {progress} </span>
        )}
    ></Tile>
    <Tile 
        page={2} renderContent={({progress}) => (
        <span className='text-9xl'>Moo {progress} </span>
        )}
    ></Tile>    
    </TileContent>
</TileWrapper>
)

export default Companies