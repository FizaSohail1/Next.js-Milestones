'use client';
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import Link from 'next/link'
const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <nav className="bg-white mb-5">
    <div className="max-w-7xl mx-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="">
            <div className="text-3xl font-bold text-yellow-500 ml-5">Portfolio</div>
          </div>
        </div>
        <div className="hidden md:flex  ">
          <div className="flex space-x-4 md:text-md md:space-x-8">
          <ul className="md:flex hidden space-x-6 text-gray-900 font-medium mr-5 text-lg">
              <Link href="/"><li className="text-gray-900 hover:text-yellow-500 ">Home</li></Link>
              <Link href="/about"><li className="text-gray-900 hover:text-yellow-500">About</li></Link>
              <Link href="/portfolio"><li className="text-gray-900 hover:text-yellow-500 ">Portfolio</li></Link>
              <Link href="/contact"><li className="text-gray-900 hover:text-yellow-500">Contact</li></Link>  
            </ul> 
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset" onClick={toggleNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>

    {isClick && (
      <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 justify-center">
       <Link href="/"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">Home</li></Link>
       <Link href="/about"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">About</li></Link>
       <Link href="/portfolio"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">Portfolio</li></Link>
       <Link href="/contact"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium hover:text-yellow-500">Contact</li></Link>
      </div>
    )}
  </nav>
  )
}

export default Navbar
