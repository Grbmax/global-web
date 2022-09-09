import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const Masthehad: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)
  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }


  return (
    <div id="home" ref={refContainer}
      className="min-h-screen -z-40 flex flex-col items-center justify-center sticky top-0 "
      style={{ transform: `translateY(-${progress * 20}vh)` }}>

      <div className="pb-10 text-center">
        <h1 className="pb-4 text-[#aa6c39] text-6xl font-bold">ÆR Global</h1>
        <p className="text-xl">We have made a new start.</p>
      </div>

      <div>
        <img src="assets/atlas.png" width="300" height="300" />
      </div>

    </div>
  )
}
export default Masthehad