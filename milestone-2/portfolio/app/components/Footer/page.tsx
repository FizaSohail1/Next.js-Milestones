import React from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub} from "react-icons/fa";
function Footer() {
  return (
    <footer className='p-4 bg-white w-full flex justify-between items-center'>
      <p className='text-lg text-gray-900 font-bold'>&copy; Fiza Sohail | All rights reserved.</p>
      <div className='flex mx-4'>
      <Link href="https://www.linkedin.com/in/fiza-sohail-291a342b9/" className="text-yellow-500 hover:text-blue-800 px-3 py-2 rounded-md font-medium block text-3xl"><FaLinkedin /></Link>
        <Link
        href="https://github.com/FizaSohail1"
        className="text-yellow-500 hover:text-gray-700 px-3 py-2 rounded-md  font-medium block text-3xl">
        <FaGithub />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
