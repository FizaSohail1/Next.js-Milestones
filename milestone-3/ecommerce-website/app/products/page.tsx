import React from "react";
import Image from "next/image";
import Link from "next/link";
import StarRating from "../components/DynamicStars/page";
import AddToCartButton from "../components/addToCart/button";

async function ProductPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const products = await response.json();

  const TshirtsData = products.filter(
    (product: { category: string }) => product.category === "T-shirts"
  );
  const FootwearData = products.filter(
    (product: { category: string }) => product.category === "footwear"
  );
  const Jewelery = products.filter(
    (product: { category: string }) => product.category === "jewellery"
  );

  return (
    <div>
      <div className="mt-20 mx-auto lg:ml-[100px] top-0 px-5 sm:px-8  lg:px-0 ">
        <h2 className="font-medium text-gray-700 text-sm ">Home / Products</h2>
      </div>

      <div className="mx-auto lg:mx-[100px] 2xl:mx-[250px]">
        <h1 className="my-5 lg:my-10 text-3xl md:text-4xl font-bold text-center border-b-2 border-b-[#ebd96b] py-5">
          T-shirts and Hoodies
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg my-10 gap-6 px-4 sm:px-6 md:px-8 lg:px-0  ease-in-out">
          {TshirtsData.map((product : {id:string,image:string, title:string, rating:number, price:number }) => (
            <div className="flex flex-col  group relative" key={product.id}>
              <div className="relative w-full h-[330px] my-4 shadow-lg  border  border-black border-x-2 border-y-2 transition-transform transform hover:scale-105 hover:text-white">
                <Image
                  src={product.image}
                  alt="categories"
                  layout="fill"
                  className="rounded-lg h-full w-full object-contain"
                />
                 { <AddToCartButton product={product}></AddToCartButton>}
              </div>
              <div className=" mt-2">
                <div className="flex items-center justify-between">
                  <Link href={`/products/${product.id}`}>
                    {product.title}
                  </Link>
                  <StarRating rating={product.rating} />
                </div>
                <p className=" text-base font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="my-5 text-3xl font-bold text-center md:text-4xl border-b-2 border-b-[#ebd96b] py-5">
          FootWear
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg my-10 gap-6 px-4 sm:px-6 md:px-8 lg:px-0 ease-in-out">
          {FootwearData.map((product: {id:string,image:string, title:string, rating:number, price:number }) => (
            <div className="flex flex-col group relative" key={product.id}>
              <div className="relative w-full h-[330px] my-4 shadow-lg border  border-black border-x-2 border-y-2 transition-transform transform hover:scale-105 hover:text-white">
                <Image
                  src={product.image}
                  alt="categories"
                  layout="fill"
                  className="rounded-lg h-full w-full object-contain"
                />
                 { <AddToCartButton product={product}></AddToCartButton>}
              </div>
              <div className=" mt-2">
                <div className="flex items-center justify-between">
                  <Link href={`/products/${product.id}`}>
                    {product.title}
                  </Link>
                  <StarRating rating={product.rating} />
                </div>
                <p className=" text-base font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="my-5 text-3xl md:text-4xl font-bold text-center border-b-2 border-b-[#ebd96b] py-5">
          Jewelery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg my-10 gap-6 px-4 sm:px-6 md:px-8 lg:px-0 ease-in-out">
          {Jewelery.map((product : {id:string,image:string, title:string, rating:number, price:number }) => (
            <div className="flex flex-col group relative" key={product.id}>
              <div className="relative w-full h-[330px] my-4 shadow-lg border  border-black border-x-2 border-y-2 transition-transform transform hover:scale-105 hover:text-white">
                <Image
                  src={product.image}
                  alt="categories"
                  layout="fill"
                  className="rounded-lg h-full w-full object-contain"
                />
                 { <AddToCartButton product={product}></AddToCartButton>}
              </div>
              <div className=" mt-2">
                <div className="flex items-center justify-between">
                  <Link href={`/products/${product.id}`}>
                    {" "}
                    {product.title}{" "}
                  </Link>
                  <StarRating rating={product.rating} />
                </div>
                <p className=" text-base font-medium">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
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

export default ProductPage;
