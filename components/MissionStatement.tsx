import React from 'react'

const MissionStatement = () => {
  return (

    <>

      <div ref={refContainer} className={`${s.missionBG} bg-black text-white`}>

        <div className="min-h-screen max-w mx-auto px-10 lg:px-5 py-24 md:py-28 lg:py-36 flex flex-col justify-center text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold">
          <div className='leading-[1.15]'>
            <div className={s.missionText}
              style={{
                opacity: opacityForBlock(progress, 0)
              }}>To Create, Craft and Connect With influencial Entrepreneurs hello</div>
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

        </div>



      </div>

    </>

  )
}

export default MissionStatement