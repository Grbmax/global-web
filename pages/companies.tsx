import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'

const Companies = () => <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
        <Tile 
        page={0} renderContent={({progress}) => (
        <span className='text-9xl'>Foo {progress}</span>
        )}
        ></Tile>
    </TileContent>
    <TileContent>
    <Tile 
    page={1} renderContent={({progress}) => (
        <span className='text-9xl'>Boo {progress}</span>
        )}
        ></Tile>    
    </TileContent>
</TileWrapper>

export default Companies