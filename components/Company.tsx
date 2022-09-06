import React from 'react'
import Link from 'next/link'


type Props = {
    children?: React.ReactNode
}

export const CompanyContainer: React.FC<Props> = ({ children }) => (
    <div className='grid grid-col lg:grid-cols-2 w-full min-h-screen'>
        {children}
    </div>
)

export const CompanyBackground: React.FC<Props> = () => (
    <div className='grid grid-cols lg:grid-cols-2 w-full h-screen px-16 py-28 gap-16 sticky'>
        <div className="bg-red-500"></div>
        <div className="bg-white"></div>
    </div>
  
)