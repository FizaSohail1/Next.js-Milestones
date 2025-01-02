import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="bg-black h-auto lg:h-[300px] 2xl:h-[479px] w-full py-4">
        <div className="mx-4 sm:px-8  lg:px-0 lg:mx-[100px] 2xl:mx-[250px] flex flex-col md:flex-row items-center lg:items-start justify-between gap-10 lg:mt-7">
          <div className=" text-center md:text-left">
            <h1 className="font-medium text-[28px] leading-[44px] text-white mb-4">
              Fashion
            </h1>
            <p className="max-w-[400px] md:max-w-[300px] lg:max-w-[400px] font normal text-sm text-[#c2c7f3] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi
              excepturi voluptates omnis minus iure nisi! Earum incidunt odio
              aperiam quasi hic! Error iste aperiam ut labore, quam fugiat
              molestias.
            </p>
            <div className="flex gap-4 mt-4 justify-center md:justify-start ">
              <FaFacebook className="bg-[#ebd96b] text-black text-[30px]  rounded-lg p-1" />
              <FaInstagram className="bg-[#ebd96b] text-black text-[30px]  rounded-lg p-1" />
              <FaTwitter className=" bg-[#ebd96b] text-black text-[30px]  rounded-lg p-1" />
            </div>
          </div>

          <div className="lg:w-[25%] flex md:gap-10 lg:gap-0  justify-between  ">
            <div>
              <h2 className="text-white text-lg 2xl:text-[22px] 2xl:leading-[25.78px] mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none">
                <li>
                  <a className="text-sm text-[#c2c7f3]">
                    Hoodiese & Sweatshirts
                  </a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">Jeans & Jackets</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">T-shirts & Pants</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">Sneakera & Shoes</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">Jewellery</a>
                </li>
              </nav>
            </div>

            <div>
              <h2 className="text-white text-lg 2xl:text-[22px] 2xl:leading-[25.78px] mb-3">
                PAGES
              </h2>
              <nav className="list-none">
                <li>
                  <a className="text-sm text-[#c2c7f3]">T-shirts</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">Hoodiese</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">Footware</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">Jewellery</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">About us</a>
                </li>
                <li>
                  <a className="text-sm text-[#c2c7f3]">Contact us</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-black border-t-[#ebd96b] border-t-[1px]">
        <div className=" mx-4 lg:mx-[200px] 2xl:mx-default-margin  py-4 px-5 flex  justify-center">
          <p className="text-[#c2c7f3] text-sm text-center sm:text-left">
            © All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
