import Link from 'next/link'
import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const Office = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-1'>
            <span className='opacity-40 lg:opacity-100 text-[16px] lg:text-[18px]'> Our Offices</span>
            <div className="flex flex-row items-center justify-center gap-5 pt-2">
                <div className="flex flex-row items-center justify-center gap-1">
                    <span className='hover-underline-animation text-[16px]'>Mumbai</span>
                    <Link href={'https://goo.gl/maps/MB2K36W7PcdscXSXA'} >
                        <a target="_blank">
                            <BsArrowUpRight className='cursor-pointer' />
                        </a>
                    </Link>
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                    <span className='hover-underline-animation text-[16px]'>Pune</span>
                    <Link href={'https://goo.gl/maps/TyUTMCt87gpTu2rW8'}>
                        <a target="_blank">
                            <BsArrowUpRight className='cursor-pointer' />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Office