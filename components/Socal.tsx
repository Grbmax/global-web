import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiMail, FiTwitter } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";

const Socal = () => {
    return (
        <div>
            <div className="social flex flex-col text-center mt-10 md:mt-0 lg:mt-0 lg:ml-16 items-center justify-center w-full  lg:w-1/2">
                <span className='text-[16px] lg:text-[18px] opacity-40 lg:opacity-100 pb-3 '>
                    Connect with us
                </span>
                <div className="flex gap-6 pb-5 m-2">
                    <Link href='https://www.instagram.com/aerglobal.io/'>
                        <a target="_blank">
                            <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-pink-600 ">
                                <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600 " />
                            </div>
                        </a>
                    </Link>
                    <Link href=''>
                        <a target="_blank">
                            <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-blue-500">
                                <GrLinkedinOption className="text-2xl cursor-pointer hover:text-blue-500" />
                            </div>
                        </a>
                    </Link>
                    <Link href='mailto:contact@aerglobal.io'>
                        <a target="_blank">
                            <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-yellow-600">
                                <FiMail className="text-2xl cursor-pointer hover:text-yellow-600" />
                            </div>
                        </a>
                    </Link>
                    <Link href='https://twitter.com/GlobalAera'>
                        <a target="_blank">
                            <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-blue-300">
                                <FiTwitter className="text-2xl cursor-pointer hover:text-blue-300" />
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Socal