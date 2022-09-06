import React from 'react'
import Link from 'next/link'


type Props = {
    top?: React.ReactNode
    children?: React.ReactNode
    bottom?: React.ReactNode
}

type Right = {
    children?: React.ReactNode,
    progress: number
}

type Left = {
    children?: React.ReactNode,
    progress: number
}

export const CompanyContainer: React.FC<Props> = ({ top, children, bottom }) => (
    <div>
        <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-[32px] 
        top-5 absolute text-white'>
            {top}
         </div>
        <div className='grid grid-cols lg:grid-cols-2 w-full h-screen px-16 py-28 gap-16'>
        {children}
        </div>
        <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-[32px] 
        bottom-5 absolute text-white'>
            {bottom}
        </div>
    </div>
)

export const CompanyTop: React.FC<Props> = ({ children }) => (
    <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-[32px] 
    top-5 absolute  text-white'>
        {children}
    </div>
)

export const CompanyBottom: React.FC<Props> = ({ children }) => (
    <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-[32px] 
    bottom-5 absolute text-white'>
        {children}
    </div>
)

export const CompanyRight: React.FC<Right> = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div>
            <div className='flex flex-col items-start text-xl lg:text-2xl h-screen gap-6' 
        style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div>
            {children}
            </div>
        </div>
        </div>
        
    )
}

export const CompanyLeft: React.FC<Left> = ({ children, progress }) => {
    let translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
        <div className='flex flex-1 lg:items-center justify-center' 
        style={{
            transform: `translateY(${translateY}px)`
        }}>
            <div className='w-full max-w-md pt-0 lg:pt-0 px-10 md:px-0'>
                {children}
            </div>
        </div>
    )
}
