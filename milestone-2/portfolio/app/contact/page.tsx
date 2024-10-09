'use client';
import React from 'react';
import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import Img from '/public/contactImage.jpg';
import Link from 'next/link';



function Page() {
  const [state, handleSubmit] = useForm("mgvewder");

  if (state.succeeded) {
    return (
       <div className='p-6 mx-auto bg-white md:w-1/3 my-[13%] rounded-lg shadow-md items-center'>
        <h1 className='text-gray-900 text-3xl text-center'>Thanks for contacting me!</h1>
        <Link href="/" className="bg-gray-900 hover:bg-gray-700 text-white text-md font-bold py-3 px-8 rounded-full transition-all duration-300 inline-block mx-10 mt-5">Go Back</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className='text-center text-4xl font-bold text-white my-5'>Get In<span className='text-yellow-500'>Touch!</span></h1>

      <div className="bg-white shadow-md rounded-lg flex flex-col lg:flex-row items-center justify-between lg:w-[80%] w-full mx-auto p-6 mb-10">
        <div className="lg:w-[50%] w-full mb-10 lg:mb-0 flex justify-center mx-auto md:mr-10">
          <div className="h-[300px] lg:h-[500px] w-full max-w-[500px]">
            <Image
              src={Img}
              alt="Contact Image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:w-[40%] w-full flex items-center justify-center mx-auto md:mr-10">
          <div className="bg-gray-900 shadow-lg border border-yellow-500 p-8 rounded-lg w-full">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-100 text-sm my-2" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label className="block text-gray-100 text-sm my-2" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label className="block text-gray-100 text-sm my-2" htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500" rows={5} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit"
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300 mt-3" disabled={state.submitting}>
                Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
