import React from 'react'
import styles from '../styles/Home.module.css'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiMail, FiTwitter, FiSend } from "react-icons/fi";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Link from "next/link";
import Form from './Form';



const Footer = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (values: any) => {
        try {
            const response = await
                axios.post(`${window.location.origin}/api/data/newsletter`, values)
            if (response.status == 200) {
                console.log("Success!")
            } else if (response.status == 201) {
                console.log(response.data.message)
            }
        } catch (error) {
            console.log("Something went wrong!")
        }
    };

    return (
        <>
            <div id="footer" className={styles.footerbgimg}>
                <div className="flex flex-wrap">
                    <div className='contacts w-full md:w-full lg:w-1/2'>
                        <div className='flex text-3xl font-extrabold justify-center items-center p-5 '>
                            Got An Idea ?
                        </div>
                        <div className='flex text-xl font-extrabold justify-center items-center pb-5'>
                            We’d love to hear all about it.
                        </div>
                        <Form />
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
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='flex py-8 '>
                            <input
                                id='emailID'
                                className='bg-transparent hover:bg-transparent border-b-2 w-full outline-none'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Valid Email ID is required",
                                    },
                                    maxLength: {
                                        value: 120,
                                        message: "You exceeded the maximum limit",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Too short to be an Email ID",
                                    },
                                })}
                                placeholder='Enter Email' />


                            <button type='submit' >
                                <FiSend className="text-3xl cursor-pointer hover:text-blue-600" />
                                <span className="py-2 text-sm text-purple-400">
                                    {/*    {errors?.emailID?.message}  */}
                                </span>
                            </button>


                        </form>
                    </div>

                    <div className="social flex flex-col text-center mt-10 items-center 
                    justify-center w-full md:full lg:w-1/2">
                        <span className='text-3xl'>
                            Stay Connected
                        </span>
                        <div className="flex gap-6 pb-5 m-2">
                            <Link href='https://www.instagram.com/aerglobal.io/'>
                                <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
                            </Link>
                            <Link href=''>
                                <FiFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
                            </Link>
                            <a href='mailto:contact@aerglobal.io'>
                                <FiMail className="text-2xl cursor-pointer hover:text-yellow-600" />
                            </a>
                            <Link href=''>
                                <FiTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
            <div className='copyright bg-black w-full h-10 flex justify-center items-center'>
                ©Copyrights ÆR Global

            </div>
        </>
    )
}

export default Footer