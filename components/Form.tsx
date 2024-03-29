import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();




    const onAppointment = async (values: any) => {
        try {
            const response = await
                axios.post(`${window.location.origin}/api/data/appointment`, values)
            if (response.status == 200) {
                console.log("Success!")
                /*   const notify = () => */
                toast('🌍 Success! We shall get in touch with you soon.', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (response.status == 201) {
                console.log("there")
                toast('🚀 Your appointment is already booked, we should get back in touch soon!', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // console.log(response.data.message)
            }
        } catch (error) {
            console.log("Something went wrong!")
            toast.error('🚀 Error!', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <>
            <div className='flex text-2xl lg:text-3xl font-extrabold justify-center items-center p-5 '>
                Get In Touch
            </div>
            <div className='flex flex-col justify-center items-center p-5 pt-0'>
                <form className='flex flex-col gap-4 mt-0 mx-10 lg:mt-0 w-80' onSubmit={handleSubmit(onAppointment)}>

                    <input
                        type="text"
                        id='Name'
                        placeholder='Name'
                        className="w-full bg-transparent rounded-lg border
                         border-gray-300 focus:border-indigo-500
                         focus:bg-white focus:ring-2 focus:ring-indigo-200 
                           text-base outline-none focus:text-gray-900 py-1 px-3 leading-8 
                           transition-colors duration-200 ease-in-out"
                        {...register("username", {
                            required: { value: true, message: "Name is required." },
                            minLength: {
                                value: 2,
                                message: "Name is too short.",
                            },
                        })} />

                    <input
                        type="email"

                        placeholder='Email'
                        className="w-full bg-transparent rounded-lg border 
                                                border-gray-300 focus:border-indigo-500 
                                                focus:bg-white focus:ring-2 focus:ring-indigo-200 
                                                text-base outline-none focus:text-gray-900 py-1 px-3 
                                                leading-8 transition-colors duration-200 ease-in-out"
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
                        })} />

                    <input
                        type="Contact"
                        placeholder='Contact'
                        className="w-full bg-transparent  rounded-lg border 
                                 border-gray-300 focus:border-indigo-500 
                                focus:bg-white focus:ring-2 focus:ring-indigo-200 
                                text-base outline-none focus:text-gray-900 py-1 px-3 
                                leading-8 transition-colors duration-200 ease-in-out"
                        {...register("contact", {
                            required: { value: true, message: "Contact is required" },
                            pattern: {
                                value: /^(\+91)?\d{10}$/,
                                message: "Mobile number must be valid",
                            },
                        })} />
                    <div className="flex items-center justify-center">

                        <button type='submit' className='text-white bg-transparent 
                                        border-2 py-2 px-8 focus:outline-none hover:bg-white 
                                        hover:text-black rounded-xl text-lg w-52'  >
                            Let&apos;s Talk
                        </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={2500}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover />
                    </div>
                </form >

            </div >
        </>
    )
}

export default Form

