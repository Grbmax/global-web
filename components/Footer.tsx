import React from 'react'
import styles from '../styles/Home.module.css'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiMail, FiTwitter, FiSend } from "react-icons/fi";

import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={styles.footerbgimg}>
                <div className="flex flex-wrap">

                    <div className='contacts w-full md:w-full lg:w-1/2'>
                        <div className='flex text-3xl font-extrabold justify-center items-center p-5 '>

                            Got An Idea ?
                        </div>
                        <div className='flex text-xl font-extrabold justify-center items-center pb-5'>
                            We’d love to hear all about it.
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 ml-10 mr-10 w-full">
                                    <div className="relative">
                                        <input 
                                        type="text" 
                                        id="name" 
                                        placeholder='Name' 
                                        className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>

                                </div>
                                <div className="p-2 ml-10 mr-10 w-full ">
                                    <div className="relative">
                                        <input 
                                        type="email" 
                                        id="email" 
                                        placeholder='Email' 
                                        className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 ml-10 mr-10 w-full ">
                                    <div className="relative">
                                        <input 
                                        type="email" 
                                        id="email" 
                                        placeholder='Contact' 
                                        className="w-full bg-transparent  rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button className="flex mx-auto text-white bg-transparent border-2 py-2 px-8 focus:outline-none hover:bg-white hover:text-black rounded text-lg">
                                        Let's Talk
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="address md:w-1/2 lg:w-1/2  ">
                        <p className='text-2xl flex flex-col font-extrabold items-center justify-center p-5'>
                            ÆR Global
                        </p>
                        <p className="p-5 flex flex-col justify-center" >
                            <span className='flex-auto text-xl'>
                                contact@aerglobal.io
                            </span><br />
                            <span className='text-xl '>
                                Contact: 8888341111
                            </span><br />
                            <span className='flex-auto text-xl '>
                                Address:
                            </span><br />
                            <span className='flex-auto text-xl '>
                                905, Dalamal Tower, Nariman Point
                            </span>
                        </p>

                    </div>

                </div>
                <div className="subscribe p-16 flex flex-wrap ">
                    <div className='w-full md:w-1/2 lg:w-1/2'>
                        <span className='text-3xl'>
                            Subscribe
                        </span><br />
                        <div className='flex'>

                            <input className='p-1 bg-transparent border-b-2 w-full' placeholder='Email' />
                            <FiSend className="text-2xl cursor-pointer hover:text-blue-600" />

                        </div>
                    </div>

                    <div className="social flex flex-col p-5 justify-center items-center">
                        <span className='text-3xl'>
                            Stay Connected
                        </span>
                        <div className="flex flex-row gap-6 pb-5 m-2">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
                            <Link href=''>
                                <FiFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                            </Link>
                            <FiMail className="text-2xl cursor-pointer hover:text-yellow-600" />
                            <FiTwitter className="text-2xl cursor-pointer hover:text-blue-600" />

                        </div>

                    </div>

                </div>
            </div>
            <div className='copyright bg-black w-full h-10 flex justify-center items-center'>
                ©Copyrights ÆR Media

            </div>
        </>
    )
}

export default Footer