import Link from 'next/link'
import React from 'react'

const Email = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-1'>
            <span className='opacity-40 lg:opacity-100 text-[16px] md:text-[18px] lg:text-[18px]'>Give your ideas a kickstart</span>
            <Link href={'mailto:contact@aerglobal.io'}>
                <span className='hover-underline-animation font-semibold text-[20px] md:text-[32px] lg:text-[32px] cursor-pointer'>contact@aerglobal.io</span>
            </Link>
        </div>
    )
}

export default Email