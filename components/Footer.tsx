import React from 'react'
import styles from '../styles/Home.module.css'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiMail, FiTwitter, FiSend } from "react-icons/fi";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Link from "next/link";

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

    const onAppointment =async (values: any) => {
        try {
            const response = await
                axios.post(`${window.location.origin}/api/data/appointment`, values)
            if (response.status == 200) {
                console.log("Success!")
            } else if (response.status == 201) {
                console.log(response.data.message)
            }
        } catch (error) {
            console.log("Something went wrong!")
        }
    }

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
                        <form onSubmit={handleSubmit(onAppointment)}>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 ml-10 mr-10 md:ml-5 md:mr-5 lg:ml-0 
                                    lg:mr-0 w-full">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder='Name'
                                                className="w-full bg-transparent rounded-lg border
                                                 border-gray-300 focus:border-indigo-500
                                                  focus:bg-white focus:ring-2 focus:ring-indigo-200 
                                                  text-base outline-none text-gray-300 py-1 px-3 leading-8 
                                                  transition-colors duration-200 ease-in-out"
                                                  {...register("username", {
                                                    required: { value: true, message: "Name is required." },
                                                    minLength: {
                                                        value: 2, 
                                                        message: "Name is too short.",
                                                    },                                                
                                                })}
                                                  />
                                        </div>
                                    </div>
                                    <div className="p-2 ml-10 mr-10 md:ml-5 md:mr-5 lg:ml-0 
                                    lg:mr-0 w-full ">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="AEmail"
                                                placeholder='Email'
                                                className="w-full bg-transparent rounded-lg border 
                                                border-gray-300 focus:border-indigo-500 
                                                focus:bg-white focus:ring-2 focus:ring-indigo-200 
                                                text-base outline-none text-gray-300 py-1 px-3 
                                                leading-8 transition-colors duration-200 ease-in-out" 
                                                {...register("AEmail", {
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
                                                    pattern: {
                                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                        message: "Email id must be valid",
                                                    },
                                                })}
                                                />
                                        </div>
                                    </div>
                                    <div className="p-2 ml-10 mr-10 md:ml-5 md:mr-5 lg:ml-0 lg:mr-0
                                     w-full ">
                                        <div className="relative">
                                            <input
                                                type="contact"
                                                id="contact"
                                                placeholder='Contact'
                                                className="w-full bg-transparent  rounded-lg border 
                                                border-gray-300 focus:border-indigo-500 
                                                focus:bg-white focus:ring-2 focus:ring-indigo-200 
                                                text-base outline-none text-gray-300 py-1 px-3 
                                                leading-8 
                                                transition-colors duration-200 ease-in-out"
                                                {...register("contact" , {
                                                    required: { value: true, message:"Contact is required"},
                                                    pattern: {
                                                        value: /^(\+91)?\d{10}$/,
                                                        message: "Mobile number must be valid",
                                                    },
                                                })}
                                                />
                                        </div>
                                    </div>
                                    <div className="p-2 pb-10 w-full">
                                        <button className="flex mx-auto text-white bg-transparent 
                                        border-2 py-2 px-8 focus:outline-none hover:bg-white 
                                        hover:text-black rounded-xl text-lg" type="submit"  >
                                            Let's Talk
                                        </button>
                                        <span></span>
                                        {/*  <input type='submit' name='lets talk' /> */}
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
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Email id must be valid",
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
                ©Copyrights ÆR Media

            </div>
        </>
    )
}

export default Footer