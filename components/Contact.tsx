import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <span className='opacity-40 lg:opacity-100 text-[16px] lg:text-[18px]'> Contact </span>
            <div className="flex flex-row items-center justify-center gap-4">
                <span className='numtext text-[20px] lg:text-[24px]'>+(91)8888341111</span>
                <BsWhatsapp className='text-xl'/>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
                <span className='numtext font text-[20px] lg:text-[24px]'>+(91)8007035533</span>
                <BsWhatsapp className='text-xl'/>
            </div>
        </div>
    )
}

export default Contact