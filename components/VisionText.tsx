import React from 'react'

const VisionText = () => {
  return (
    <div><div id="container" className=''>
      <div id="circle">
        <svg version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
          xmlSpace="preserve">
          <defs>
            <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
          </defs>
          <circle cx="150" cy="100" r="75" fill="none" />
          <g>
            <use xlinkHref="#circlePath" fill="none" />
            <text fill="#fff">
              <textPath xlinkHref="#circlePath">. Vision .  Vision . Vision . Vision .Vision .Vision .</textPath>
            </text>
          </g>
        </svg>
      </div>
    </div>
    </div>
  )
}

export default VisionText