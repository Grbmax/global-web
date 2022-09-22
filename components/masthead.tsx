import React, { useRef, useContext, useState, useCallback } from "react";
import { ScrollContext } from "../utils/scroll-observer";
import Image from "next/image";



const Masthehad: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const { scrollY } = useContext(ScrollContext)
  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight)
  }


  return (
    <>
      
      <div id="home" ref={refContainer}
        className="min-h-screen -z-40 flex flex-col items-center justify-center sticky top-0 "
        style={{ transform: `translateY(-${progress * 20}vh)` }}>

        <div className="pb-28 lg:pb-10 pt-0 text-center">
          <h1 className=" m-2 pb-5 text-[#dd9654] text-6xl md:text-7xl lg:text-7xl font-bold"> ÆR GLOBAL</h1>
          <p className="text-xl md:text-2xl lg:text-3xl ">We have made a new start</p>
        </div>

        <div>
          <img src="assets/atlas0-1.png" width="300" height="300" alt="atlas"/>
        </div>

      </div>
    </>
  )
}
export default Masthehad