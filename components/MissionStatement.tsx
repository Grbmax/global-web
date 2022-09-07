import React, { useRef, useContext } from 'react'
import styles from '../styles/Home.module.css'
import s from '../styles/mission.module.css'
import { ScrollContext } from '../utils/scroll-observer'

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

      <div ref={refContainer} className={`${s.missionBG} bg-black text-white`}>

        <div className="min-h-screen max-w mx-auto px-10 lg:px-5 py-24 md:py-28 lg:py-36 flex flex-col justify-center text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold">
          <div className='leading-[1.15]'>
            <div className={s.missionText}
              style={{
                opacity: opacityForBlock(progress, 0)
              }}>To Create, Craft and Connect With influencial Entrepreneurs</div>
            <span className={`${s.missionText} inline-block after:content-['_']`}
              style={{
                opacity: opacityForBlock(progress, 1)
              }}> Who are driving change,</span><br />
            <span className={`${s.missionText} inline-block `}
              style={{
                opacity: opacityForBlock(progress, 2)
              }}> Transform their businesses</span><br />
            <span className={`${s.missionText} inline-block `} style={{
                opacity: opacityForBlock(progress, 3)
              }}> And help make a significant Impact on the world.</span>

          </div>

          {/* <p className='leading-tight max-w-5xl mx-auto text-4xl  tracking-tight'>
            <strong>To Create, Craft and Connect With influencial Entrepreneurs Who are driving change, Transform their businesses And help make a significant Impact on the world.</strong>
          
          </p> */}
        </div>



      </div>

    </>
  )
}

export default MissionStatement