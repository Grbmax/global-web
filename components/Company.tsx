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
    <div id="companies">
        <div className="">{top}</div>
        <div className='grid grid-cols lg:grid-cols-2 w-full h-screen py-14 lg:py-28 sm:gap-0 md:gap-2 lg:gap-5'>
            {children}
        </div>
        <div className="">{bottom}</div>
    </div>
)

export const CompanyTop: React.FC<Props> = ({ children }) => (
    <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-[32px] top-1 absolute text-white'>
        {children}
    </div>
)

export const CompanyBottom: React.FC<Props> = ({ children }) => (
    <div className='flex flex-row items-center w-full py-2 md:text-xl lg:text-[32px] -bottom-2 absolute text-white'>
        {children}
    </div>
)

export const CompanyRight: React.FC<Right> = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div>
            <div className='flex flex-col px-8 lg:px-16 justify-center items-center h-half-screen'
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
        <div className='flex lg:items-center justify-center'
            style={{
                transform: `translateY(${translateY}px)`
            }}>
            <div className='w-full max-w-md px-5 md:px-0'>
                {children}
            </div>
        </div>
    )
}


interface LinkProps {
    href: string
    children?: React.ReactNode,
}

export const CompanyLink: React.FC<LinkProps> = ({ href, children }) => (
    <Link href={href}>
        <a
            target="_blank"
            rel="noreferrer"
            className='underline '>
            {children}
        </a>
    </Link>
)
