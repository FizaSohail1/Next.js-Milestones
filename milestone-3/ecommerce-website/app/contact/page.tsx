import React from "react";
import Image from "next/image";

function contact() {
  return (
    <div className="">
      <div className="mt-20 mx-auto lg:ml-[100px] top-0 px-5 sm:px-8  lg:px-0 ">
        <h2 className="font-medium text-gray-700 text-sm ">Home / Contact</h2>
      </div>

      <section className="text-gray-600 body-font">
        <div className=" mx-auto lg:mx-[100px] 2xl:mx-[250px] my-10 lg:my-20 ">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full mx-auto px-5 sm:px-8  lg:px-0 h-[609px] lg:w-[605px]">
              <Image
                className="object-cover  rounded-[4px] w-full h-[450px] lg:w-[605px]"
                alt="hero-2"
                src="/home2.jpg"
                height={100}
                width={500}
              />
            </div>

            <form className="h-[450px] space-y-6 w-full md:w-auto lg:w-[50%] lg:mx-4 shadow-lg rounded-xl p-4 bg-white border border-gray-200">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="my-20 ">
        <section className="bg-gray-50 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center lg:mx-[100px] 2xl:mx-[250px] ">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              What Makes Us Unique
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover why we stand out in the world of fashion. From premium
              quality to eco-friendly practices, we’re committed to excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                <div className="flex items-center justify-center mb-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-2xl font-bold">
                    Q
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Premium Quality
                </h3>
                <p className="text-gray-600">
                  We ensure every product meets the highest standards of
                  durability and style.
                </p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                <div className="flex items-center justify-center mb-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-500 text-2xl font-bold">
                    V
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Wide Variety
                </h3>
                <p className="text-gray-600">
                  From casual wear to elegant outfits, explore collections for
                  every occasion.
                </p>
              </div>

              <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
                <div className="flex items-center justify-center mb-4">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 text-2xl font-bold">
                    S
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We care for the planet by promoting sustainable practices in
                  every step.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#e5c643] h-[400px] w-full mt-20 flex justify-center items-center">
        <div className="sm:px-8  lg:px-0 lg:mx-[100px] 2xl:mx-[250px] text-center">
          <h1 className="text-3xl md:text-4xl text-white font-extrabold">
            Join Shopping Community To Get Monthly Promo
          </h1>
          <p className="text-base font-normal mt-4">
            Become a part of our vibrant shopping community and enjoy exclusive
            monthly promotions, discounts, and special offers!
          </p>

          <div className="flex justify-center items-center gap-2 mt-6">
            <input
              className="py-3 px-4 w-[150px] md:w-[300px] text-black font-normal border border-gray-300 rounded-md"
              placeholder="Add your email"
            />
            <button className="bg-black text-white font-medium px-6 py-3 rounded-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
