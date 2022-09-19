import Image from 'next/image'
import React, { useRef, useContext } from 'react'
import s from '../styles/mission.module.css'
import { ScrollContext } from '../utils/scroll-observer'
import MSBG from '../public/assets/missionimg.png'




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
        <div className={`${s.missionBG} bg-black`}>

          <div className='flex flex-col lg:flex-row gap-8 md:gap-0 lg:gap-0 pt-28 md:pt-0 lg:pt-28 '>

            <div className="flex w-full py-5 lg:py-14 px-5 pl-10 pr-20 lg:px-5 lg:pt-52
             text-[30px] md:text-5xl lg:text-5xl">

              <div className='leading-[1.15] '>
                <span className={`${s.missionText} `}
                  style={{
                    opacity: opacityForBlock(progress, 0)
                  }}>To Create, Craft & Connect <br />
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

            <div className=' w-full  pl-0 pr-14 pb-0 pt-12 md:pt-0 lg:p-14 lg:pt-32 lg:pb-0'>

              <Image
                src={MSBG}
                
            className=''
              />

            </div>

          </div>

        </div>

      </div>


    </>
  )
}

export default MissionStatement