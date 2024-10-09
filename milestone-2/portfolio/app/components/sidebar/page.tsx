import React from 'react'
import Image from 'next/image'
import MyHome from '/public/gpt img.webp';
import { FaLinkedin, FaGithub} from "react-icons/fa";
import Link from 'next/link';


function Sidebar() {
  return (
    <div className="bg-white p-6 md:p-8 md:w-1/4 shadow-lg mt-2 w-full h-fit rounded-md md:ml-5 ">
    <div className="circle border-x-4 mx-auto md:mx-0 border-y-4 border-yellow-500 rounded-full h-[200px] w-[200px] items-center overflow-hidden">
    <Image src={MyHome}
          alt="abc"
          objectFit="contain"
         objectPosition="center"/>
    </div>
      <h3 className="font-bold text-2xl mt-4 text-center">Fiza Sohail</h3>
      <p className="text-center my-2"><strong>Web-Developer</strong></p>
     <div className="flex justify-center space-x-4">
     <Link href="https://www.linkedin.com/in/fiza-sohail-291a342b9/" className="text-yellow-500 hover:text-blue-800 px-3 py-2 rounded-md font-medium block text-3xl"><FaLinkedin /></Link>
        <Link href="https://github.com/FizaSohail1"
        className="text-yellow-500 hover:text-gray-700 px-3 py-2 rounded-md  font-medium block text-3xl">
        <FaGithub />
        </Link>
     </div>
      <ul className="text-black mx-auto my-6 md:my-8 ">
        <li className='md:mb-2'><strong>Age:</strong> 18</li>
        <li className='md:mb-2'><strong>Availability:</strong> Available</li>
        <li className='md:mb-2'><strong>Address:</strong> Karachi, Pakistan</li>
      </ul>
      <h4 className="text-yellow-500 font-bold text-xl mt-6 mb-3">Skills</h4>
      <ul className="text-black">
      <li className="mb-4">
        <h4 className="text-black font-bold mb-2">HTML</h4>
       <div className="bg-gray-300 rounded-full h-2 w-full">
        <div className="bg-yellow-500 h-2 rounded-full w-[98%]" ></div>
       </div>
      </li>

      <li className="mb-4">
        <h4 className="text-black font-bold mb-2">CSS</h4>
       <div className="bg-gray-300 rounded-full h-2 w-full">
        <div className="bg-yellow-500 h-2 rounded-full w-[88%]"></div>
       </div>
      </li>
      <li className="mb-4">
        <h4 className="text-black font-bold mb-2">JavaScript/TypeScript</h4>
       <div className="bg-gray-300 rounded-full h-2 w-full">
        <div className="bg-yellow-500 h-2 rounded-full w-[75%]"></div>
       </div>
      </li>
      <li className="mb-4">
        <h4 className="text-black font-bold mb-2">Next.js</h4>
       <div className="bg-gray-300 rounded-full h-2 w-full">
        <div className="bg-yellow-500 h-2 rounded-full w-[50%]"></div>
       </div>
      </li>
      <li className="mb-4">
        <h4 className="text-black font-bold mb-2">Tailwind CSS</h4>
       <div className="bg-gray-300 rounded-full h-2 w-full">
        <div className="bg-yellow-500 h-2 rounded-full w-[90%]"></div>
       </div>
      </li>
        </ul>
       <Link href="/about"> <button className="my-12 w-full font-bold bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg animate-bounce">View More </button></Link>
    </div>
  )
}

export default Sidebar
