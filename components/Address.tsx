import React from 'react'

const Address = () => {
    return (
        <>
            <div>
                <div className='text-2xl lg:text-3xl flex flex-col items-center justify-center '>
                    <div className='font-extrabold' >
                        ÆR GLOBAL
                    </div>
                </div>
                <ul className="p-5 flex flex-col ml-10 lg:ml-40 text-left gap-4" >
                    <li className='flex-auto text-xl '>
                    <span className='font-bold'>Email:</span> contact@aerglobal.io
                    </li>
                    <li className='text-xl'>
                       <span className='font-bold'>Contact:</span> +91 8888341111
                    </li>
                    <li className='flex-auto text-xl font-bold'>
                        Address :
                    </li>
                    <li className='flex-auto text-xl'>
                        905, Dalamal Tower,
                    </li>
                    <li className='flex-auto text-xl'>
                        Nariman Point Mumbai
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Address

/* import React from 'react'

const Address = () => {
    return (
        <div>
            <div className='text-3xl flex flex-col items-center justify-center '>
                <div className='font-extrabold' >
                    ÆR Global
                </div>
            </div>
            <table className="p-5 table-fixed flex flex-col items-center text-xl mg:text-2xl lg:text-2xl">
                <tbody>
                    <tr>
                        <td> Email : </td>
                        <td> contact@aerglobal.io </td>
                    </tr>
                    <tr>
                        <td> Contact : </td>
                        <td> 8888341111 </td>
                    </tr>
                    <tr>
                        <td> Address : </td>
                        <td> 905, Dalamal Tower, Nariman Point Mumbai </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Address */