import React from "react"
import { TileBackground, TileContent, TileWrapper } from "./tile"

const Works = () => <TileWrapper numOfPages={3}>
<TileBackground></TileBackground>
<TileContent>Foo</TileContent>
<TileContent>bar</TileContent>
</TileWrapper>

export default Works