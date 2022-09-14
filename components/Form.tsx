import React from 'react'

const Form: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center p-5 pt-0'>
            <form className='flex flex-col gap-4 mt-0 mx-10 lg:mt-0 w-80'>

                <input
                    type="text"
                    placeholder='Name'
                    className="w-full bg-transparent rounded-lg border
                         border-gray-300 focus:border-indigo-500
                         focus:bg-white focus:ring-2 focus:ring-indigo-200 
                           text-base outline-none focus:text-gray-900 py-1 px-3 leading-8 
                           transition-colors duration-200 ease-in-out" />

                <input
                    type="email"

                    placeholder='Email'
                    className="w-full bg-transparent rounded-lg border 
                                                border-gray-300 focus:border-indigo-500 
                                                focus:bg-white focus:ring-2 focus:ring-indigo-200 
                                                text-base outline-none focus:text-gray-900 py-1 px-3 
                                                leading-8 transition-colors duration-200 ease-in-out" />

                <input
                    type="contact"
                    placeholder='Contact'
                    className="w-full bg-transparent  rounded-lg border 
                                 border-gray-300 focus:border-indigo-500 
                                focus:bg-white focus:ring-2 focus:ring-indigo-200 
                                text-base outline-none focus:text-gray-900 py-1 px-3 
                                leading-8 transition-colors duration-200 ease-in-out" />
                <div className="flex items-center justify-center">

                    <button type='submit' className='text-white bg-transparent 
                                        border-2 py-2 px-8 focus:outline-none hover:bg-white 
                                        hover:text-black rounded-xl text-lg w-52'  >
                        Let's Talk
                    </button>
                </div>
            </form >

        </div >
    )
}

export default Form

