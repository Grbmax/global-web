import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <span className='opacity-40 lg:opacity-100 text-[16px] lg:text-[18px]'> Contact </span>
            <div className="flex flex-row items-center justify-center gap-4">
                <span className='numtext text-[20px] lg:text-[24px]'>+(91)8888341111</span>
                <Link href={'https://wa.me/+918888341111'}>
                    <a target={'_blank'}>
                        <BsWhatsapp className='text-xl cursor-pointer hover:text-green-400' />
                    </a>
                </Link>
            </div>
            {/* <div className="flex flex-row items-center justify-center gap-4">
                <span className='numtext font text-[20px] lg:text-[24px]'>+(91)8007035533</span>
                <Link href={'https://wa.me/+918007035533'}>
                    <a target={'_blank'}>
                        <BsWhatsapp className='text-xl cursor-pointer hover:text-green-400' />
                    </a>
                </Link>
            </div> */}
        </div>
    )
}

export default Contact