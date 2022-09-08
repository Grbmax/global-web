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
                        <form>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 ml-10 mr-10 md:ml-5 md:mr-5 lg:ml-0 lg:mr-0 w-full">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder='Name'
                                                className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>

                                    </div>
                                    <div className="p-2 ml-10 mr-10 md:ml-5 md:mr-5 lg:ml-0 lg:mr-0 w-full ">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder='Email'
                                                className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 ml-10 mr-10 md:ml-5 md:mr-5 lg:ml-0 lg:mr-0 w-full ">
                                        <div className="relative">
                                            <input
                                                type="contact"
                                                id="contact"
                                                placeholder='Contact'
                                                className="w-full bg-transparent  rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 pb-10 w-full">
                                        <button type='submit' 
                                        className="flex mx-auto text-white
                                         bg-transparent border-2 py-2 px-8
                                         focus:outline-none hover:bg-white
                                          hover:text-black rounded text-lg">
                                            Let's Talk
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="address w-full md:w-full lg:w-1/2 p-5  ">
                        <div className='text-3xl flex flex-col items-center justify-center '>
                            <div className='font-extrabold' >
                                ÆR Global
                            </div>
                        </div>
                        <p className="p-5 flex flex-col justify-center items-center" >
                            <span className='flex-auto text-xl '>
                                contact@aerglobal.io
                            </span><br />
                            <span className='text-xl'>
                                Contact: 8888341111
                            </span><br />
                            <span className='flex-auto text-xl'>
                                Address:
                            </span><br />
                            <span className='flex-auto text-xl'>
                                905, Dalamal Tower, Nariman Point
                            </span><br />
                            <span className='flex-auto text-xl'>
                                Mumbai
                            </span>
                        </p>

                    </div>

                </div>
                <div className="subscribe px-5 mt-10 flex flex-wrap ">
                    <div className='w-full md:full lg:w-1/2'>
                        <span className='text-3xl'>
                            Subscribe
                        </span><br />
                        <div className='flex py-8'>
                            <input className='bg-transparent focus:outline-none border-b-2 w-full' placeholder='Enter Email' />
                            <button type="submit">
                                <FiSend className="text-3xl cursor-pointer hover:text-blue-600" />
                            </button>
                        </div>
                    </div>

                    <div className="social flex flex-col text-center mt-10 items-center justify-center w-full md:full lg:w-1/2">
                        <span className='text-3xl'>
                            Stay Connected
                        </span>
                        <div className="flex gap-6 pb-5 m-2">
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