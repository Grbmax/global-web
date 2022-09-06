import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { CompanyBackground, CompanyBottom, CompanyContainer, CompanyTop } from './Company'

const Companies = () => (
<TileWrapper numOfPages={3}>
    <TileBackground>
        <CompanyBackground />
    </TileBackground>
    <TileContent>
    <Tile 
        page={0} renderContent={({progress}) => (
        <CompanyContainer>
            <CompanyTop>Foo {progress}</CompanyTop>

            <CompanyBottom>Foo {progress}</CompanyBottom>
        </CompanyContainer>
        )}
    ></Tile>
    <Tile 
        page={1} renderContent={({progress}) => (
        <CompanyContainer>
            <CompanyTop>Boo {progress}</CompanyTop>

            <CompanyBottom>Boo {progress}</CompanyBottom>
        </CompanyContainer>
        )}
    ></Tile>
    <Tile 
        page={2} renderContent={({progress}) => (
        <CompanyContainer>
            <CompanyTop>Moo {progress}</CompanyTop>

            <CompanyBottom>Moo {progress}</CompanyBottom>
        </CompanyContainer>
        )}
    ></Tile>    
    </TileContent>
</TileWrapper>
)

export default Companies