import { useState } from 'react'

function MobileNav({ open, setOpen }) {
    return (
        <div className={`fixed z-50  top-0 left-0 h-screen w-full bg-black text-white bg-opacity-95 transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>

            <div className="flex flex-col justify-center items-center mt-28">
                <a className="text-2xl lg:text-3xl font-bold hover:text-[#cd8d59] hover:underline my-4" href="#home" onClick={() => {
                        setOpen(!open), scrollTo(top)
                    }}>
                    Home
                </a>
                <a className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline " href="#about" onClick={() => {
                        setOpen(!open)
                    }}>
                    About Us
                </a>
                <a className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline " href="#companies" onClick={() => {
                        setOpen(!open)
                    }}>
                    Companies
                </a>
                <a className="text-2xl lg:text-3xl font-bold my-4 hover:text-[#cd8d59] hover:underline " href="#footer" onClick={() => {
                        setOpen(!open)
                    }}>
                    Get In Touch
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className=' '>
            <MobileNav open={open} setOpen={setOpen} />
     


                <div className="w-full flex p-5 pl-10 pt-6 justify-end  text-left fixed z-50  ">
                    <div className="group z-40 relative w-6 h-5 cursor-pointer flex-col justify-between text-3xl flex" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                    </div>
                </div>
          
        </nav>
    )
}
/* import Link from "next/link";
//import { AiFillCloseCircle, AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineShoppingCart } from "react-icons/ai";


const Navbar = () => {

    return (
        <>
            <nav className=" top-0 space-between flex items-center h-28 z-50 text-sm px-4 md:px-5 lg:px-10">
                                      
                <div className="dropdown float-left ">
                    <button className="bg-transparent text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>


                    <ul className="link-container dropdown-menu hidden mr-2 md:mr-5 lg:mr-10">
                        <Link href="#home"><a className="rounded-t navbar-link border border-gray-700">Home</a></Link>
                        <Link href="#about"><a className="navbar-link border border-gray-700 border-t-0">About</a></Link>
                        <Link href="#companies"><a className="navbar-link border border-gray-700 border-t-0">Companies</a></Link>
                        <Link href="#footer"><a className="rounded-b navbar-link border border-gray-700 border-t-0">Contact Us</a></Link>
                    </ul>
                </div>

            </nav>
        </>
    );
}
export default Navbar;   */