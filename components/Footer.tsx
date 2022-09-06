import React from 'react'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.footerbgimg}>
                <div className="flex flex-wrap">
                    <div className='contact md:w-1/2 lg:w-1/2'>
                        <div className='flex text-2xl font-extrabold justify-center items-center p-5'>
                            Got An Idea ?
                        </div>
                        <div className='flex text-xl font-extrabold justify-center items-center'>
                            We’d love to hear all about it.
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 ml-10 mr-10 w-full">
                                    <div className="relative">
                                        
                                        <input type="text" id="name" value={"name"} className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>

                                </div>
                                <div className="p-2 ml-10 mr-10 w-full ">
                                    <div className="relative">
                                        <input type="email" id="email" value={"Email"} className="w-full bg-transparent rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 ml-10 mr-10 w-full ">
                                    <div className="relative">
                                        
                                        <input type="email" id="email" value={"Contact"} className="w-full bg-transparent  rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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

                    <div className=" list-none md:w-1/2 lg:w-1/2 p-5 items-center justify-center ">
                        <li className='text-2xl font-extrabold '>
                            ÆR Global
                        </li>
                        <div className="  p-5">
                            <li className=' flex-auto text-xl justify-left p-2'>
                                contact@aerglobal.io
                            </li>
                            <li className='flex-auto text-xl justify-left p-3'>
                                Contact: 8888341111
                            </li>
                            <li className='flex-auto text-xl justify-left p-3'>
                                Address:
                            </li>
                            <li className='flex-auto text-xl justify-left '>
                                905, Dalamal Tower, Nariman Point
                            </li>
                        </div>

                    </div>

                </div>
                <div className="subscribe p-16">
                    <span className='text-3xl'>
                        Subscribe
                    </span>
                    <div>

                    
                    <input className='p-1 bg-transparent border-b-2 w-1/2' value={'email'} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer