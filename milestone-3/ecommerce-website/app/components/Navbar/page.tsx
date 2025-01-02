"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { FaBars, FaShoppingCart, FaHeart } from "react-icons/fa";



function Navbar() {
    const [isClick, setIsClick] = useState(false);

    const togleNavbar = () => {
      setIsClick(!isClick)
    }
  return (
    <div>
      <nav className="" >
        <div className="mx-4 sm:mx-8 lg:mx-[100px] 2xl:mx-[250px]">
          <div className="flex items-center justify-between h-20">

            <div className="flex-shrink-0">
              <a href="/" className="text-black text-3xl font-bold">Fashion</a>
            </div>

            <div className="hidden md:flex justify-center flex-grow">
              <ul className="flex ">
                <li className="flex gap-5">
                   <Link href="/" className="text-gray-700 font-normal ">Home</Link>                 
                  <Link href="/products" className="text-gray-700 font-normal ">Products</Link>                  
                  <Link href="/about" className="text-gray-700 font-normal ">About</Link>
                  <Link href="/contact" className="text-gray-700 font-normal ">Contact</Link>
                 
                </li>
              </ul>
            </div>
           
            <div className="flex judstify-between items-center gap-3">

            <div className="cart right-0 lgtop-4 ">
              <Link href="/cart" className="text-black text-lg md:text-2xl hover:text-black  transform transition-transform translate-x-full duration-150">
                <FaShoppingCart/>
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={togleNavbar}
                className="inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-inset"
              >
                <FaBars />
              </button>
            </div>
            </div>
          </div>

        </div>

        {isClick && (
      <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 justify-center">
       <Link href="/"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium ">Home</li></Link>
       <Link href="/products"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium ">Products</li></Link>
       <Link href="/about"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium ">About</li></Link>
       <Link href="/contact"><li  className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium ">Contact</li></Link>
      </div>
    )}
      </nav>
    </div>
  )
}

export default Navbar
