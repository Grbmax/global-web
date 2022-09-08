import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="">
        <nav className="py-8 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#home" className="mr-5 hover:text-white">Home</a>
            <Link href="#about" className="mr-5 hover:text-white">About Us</Link>
            <a href="#companies" className="mr-5 hover:text-white">Companies</a>
            <a href="#footer" className="mr-5 hover:text-white">Get In Touch</a>
        </nav>
  </div>
  )
}

export default Navbar