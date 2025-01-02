import React from "react";
import Image from "next/image";


function AboutPage() {
  return (
    <div className="">
      <div className="mt-20 mx-auto lg:ml-[100px] top-0 px-5 sm:px-8  lg:px-0 ">
        <h2 className="font-medium text-gray-700 text-sm ">Home / About</h2>
      </div>

      <section className="text-gray-600 body-font">
        <div className=" mx-auto lg:ml-[100px] 2xl:mx-[250px]  my-10 lg:my-20 flex flex-col lg:flex-row ">
          <div className="w-full lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col  md:items-start text-left px-5 sm:px-8 lg:px-0 ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Story
            </h1>
            <p className="mb-8 leading-relaxed text-base ">
              Welcome to <b> Fashion </b>, your go-to destination for stylish
              and trendy women's clothing, jewelry, and footwear. Our mission is
              to bring you the best in fashion with premium quality and designs
              that match your unique style.
              <br /> <br />
              At <b>Fashion</b>, we believe that fashion is a form of
              self-expression. That's why we carefully curate our collection to
              ensure that every piece reflects elegance and individuality.
              Whether you're looking for everyday essentials or statement
              pieces, we've got you covered.
              <br /> <br /> We are committed to providing an exceptional
              shopping experience. From seamless browsing to secure checkout, we
              prioritize your satisfaction. Join us on this fashionable journey
              and redefine your wardrobe with the latest trends.
            </p>
          </div>
          <div className="w-full mx-auto px-5 sm:px-8  lg:px-0 h-[609px] lg:w-[705px]">
            <Image
              className="object-cover  rounded-[4px] w-full h-[450px] lg:w-[705px]"
              alt="hero-2"
              src="/home2.jpg"
              height={100}
              width={500}
            />
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

export default AboutPage;
