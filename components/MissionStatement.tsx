import Image from 'next/image'
import React, { useRef, useContext } from 'react'
import s from '../styles/mission.module.css'
import { ScrollContext } from '../utils/scroll-observer'
import MSBG from '../public/assets/missionimg.png'
import VisionText from './VisionText'


const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const MissionStatement = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 3
  let progress = 0

  const { current: elContainer } = refContainer
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2
    const percentY = Math.min(clientHeight + halfH,
      Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }
  return (
    <>

      <div ref={refContainer} className="">

        <div className="bg-black pt-10" >

          <div className='flex flex-col lg:flex-row pt-16 md:pt-8 lg:pt-10 '>

            <div className="flex w-full pl-5 text-[30px] md:text-5xl lg:text-6xl  ">

              <div className=' '>
                <span className={`${s.missionText} `}
                  style={{
                    opacity: opacityForBlock(progress, 0)
                  }}>To Create, Craft &amp; Connect <br />
                  with Influencial Entrepreneurs
                </span><br />

                <span className={`${s.missionText}  inline-block after:content-['_']`}
                  style={{
                    opacity: opacityForBlock(progress, 1)
                  }}> Who drive change, help<br />
                  transform their businesses</span><br />

                <span className={`${s.missionText}  inline-block `} style={{
                  opacity: opacityForBlock(progress, 2)
                }}> And make a significant<br />
                  impact on the world.</span>


              </div>

            </div>

            <div className=' w-full'>
              <div className="h-20 w-32 md:h-28 md:w-36 lg:h-32 lg:w-48 justify-end">
                <VisionText />
              </div>
              <Image
                src={MSBG}
                layout='responsive'
                alt='backgrond'
                className='opacity-[35%] z-10'
              />

            </div>

          </div>

        </div>

      </div>


    </>
  )
}

export default MissionStatement