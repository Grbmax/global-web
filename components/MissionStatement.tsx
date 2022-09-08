import Image from 'next/image'
import React, { useRef, useContext } from 'react'
import styles from '../styles/Home.module.css'
import s from '../styles/mission.module.css'
import { ScrollContext } from '../utils/scroll-observer'
import MSText from '../public/assets/MissionStatementText.png'
import MSBG from '../public/assets/missionimg.png'


const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo
  if (progress >= 0 && progress < 1) return 1
  return 0.2
}

const MissionStatement = () => {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 4
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
        <div className={`${s.missionBG}`}>
          <div className='flex flex-col md:flex-col lg:flex-row'>

            <div className="flex w-full py-5 lg:py-10 px-10 justify-center items-center 
          text-2xl md:text-3xl lg:text-4xl font-semibold">

              <div className='leading-[1.15]  '>
                <span className={`{s.missionText} `}
                  style={{
                    opacity: opacityForBlock(progress, 0)
                  }}>To Create, Craft and Connect <br />
                  With influencial Entrepreneurs
                </span><br />

                <span className={`${s.missionText}  inline-block after:content-['_']`}
                  style={{
                    opacity: opacityForBlock(progress, 1)
                  }}> Who are driving change,<br />
                  Transform their businesses</span><br />

                <span className={`${s.missionText}  inline-block `} style={{
                  opacity: opacityForBlock(progress, 2)
                }}> And help make a significant<br />
                  Impact on the world.</span>

              </div>

            </div>
              <div className='flex w-full'>
                <Image
                  src={MSBG}

                />
              </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default MissionStatement