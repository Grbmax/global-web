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
                <source src="/assets/masthehad-bg.webm" type="video/webm; codecs=vp9" />
            </video>
        </div>
    )
}
export default Masthehad