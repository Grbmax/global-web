import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FiSend } from "react-icons/fi";

const Subscribe = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = async (values: any) => {
        try {
            const response = await
                axios.post(`${window.location.origin}/api/data/newsletter`, values)
            if (response.status == 200) {
                console.log("Success!")
                toast('🌍 Sucess! Welcome to the ÆR Family.', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (response.status == 201) {
                console.log(response.data.message)
                toast('🚀 You are already subscribed to our newsletters.', {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
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
    };
    return (
        <div><div className='w-full md:w-1/2 lg:w-1/2 flex flex-col ustify-center items-center'>
            <span className='text-2xl lg:text-3xl font-bold'>
                Subscribe To Our Newsletter
            </span><br />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex py-8 '>
                <input
                    id='emailID'
                    className='bg-transparent hover:bg-transparent border-b-2 w-80 outline-none'
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
                       
                    </span>
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
                    pauseOnHover

                />

            </form>
        </div>
        </div>
    )
}

export default Subscribe