import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiMail, FiTwitter, } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import Link from "next/link";
const Socal = () => {
    return (
        <div>
            <div className="social flex flex-col text-center mt-10 md:mt-0 lg:mt-0 items-center 
    justify-center w-full  lg:w-1/2">
                <span className='text-[16px] lg:text-[18px] opacity-40 lg:opacity-100 pb-3 '>
                Connect with us
                </span>
                <div className="flex gap-6 pb-5 m-2">
                    <Link href='https://www.instagram.com/aerglobal.io/'>
                        <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-pink-600 ">
                            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600 " />
                        </div>
                    </Link>
                    <Link href=''>
                        <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-blue-500">
                            <GrLinkedinOption className="text-2xl cursor-pointer hover:text-blue-500" />
                        </div>
                    </Link>
                    <a href='mailto:contact@aerglobal.io'>
                        <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-yellow-600">
                            <FiMail className="text-2xl cursor-pointer hover:text-yellow-600" />
                        </div>
                    </a>
                    <Link href='https://twitter.com/GlobalAera'>
                        <div className=" outline outline-offset-4 outline-2 rounded-full hover:outline-blue-300">
                            <FiTwitter className="text-2xl cursor-pointer hover:text-blue-300" />
                        </div>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Socal