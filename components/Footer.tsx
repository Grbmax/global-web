import Image from 'next/image'
import React from 'react'
import footerbg from '../public/assets/footer.jpg'

const Footer = () => {
    return (
        <>

            <div className='flex text-2xl font-extrabold justify-center items-center p-5'>
                Got An Idea ?
            </div>
            <div className='flex text-xl font-extrabold justify-center items-center'>
                We’d love to hear all about it.
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    <div className="p-5 w-full">
                        <div className="relative">
                            <label  className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-transparent  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-5 w-full ">
                        <div className="relative">
                            <label  className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-transparent  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-5 w-full ">
                        <div className="relative">
                            <label  className="leading-7 text-sm text-gray-600">Contact</label>
                            <input type="email" id="email" name="email" className="w-full bg-transparent  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer