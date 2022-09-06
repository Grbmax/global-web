import React from 'react'
import Link from 'next/link'


type Props = {
    children?: React.ReactNode
}

type Right = {
    children?: React.ReactNode,
    progress: number
}

export const CompanyContainer: React.FC<Props> = ({ children }) => (
    <div className='flex w-full min-h-screen'>
        {children}
    </div>
)

export const CompanyTop: React.FC<Props> = ({ children }) => (
    <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-[32px] 
    top-5 absolute  text-white'>
        {children}
    </div>
)

export const CompanyBottom: React.FC<Props> = ({ children }) => (
    <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-2xl 
    bottom-5 absolute text-white'>
        {children}
    </div>
)

export const CompanyRight: React.FC<Right> = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div className='flex flex-col items-start text-xl lg:text-2xl h-screen gap-6'>
            {children}
        </div>
    )
}


export const CompanyBackground: React.FC<Props> = () => (
    <div className='grid grid-cols lg:grid-cols-2 w-full h-screen px-16 py-28 gap-16 
    sticky'>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
    </div>
)