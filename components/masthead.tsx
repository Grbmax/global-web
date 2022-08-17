import React from "react";
import Image from "next/image";

const Masthehad: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className='absolute w-full h-full object-cover'
            >
            <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" />
            </video>
            <div className="p-12 font-bold z-10 drop-shadow-xl text-center flex-1 flex items-center justify-center flex-col">
                <h1 className="mb-6 text-6xl text-white xl:text-9xl">ÆR</h1>
                <h1 className="mb-2 text-4xl text-yellow-300 xl:text-6xl ">Global</h1>
            </div>
        </div>
    )
}

export default Masthehad