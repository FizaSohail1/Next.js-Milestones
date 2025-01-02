import Image from "next/image";
import { FaTruckFast } from "react-icons/fa6";
import { TbHeadset } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import Link from "next/link";
import StarRating from "./components/DynamicStars/page";
import AddToCartButton from "./components/addToCart/button";



export default async function Home() {
 
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const products = await response.json();

  const data = products.filter(
    (product: { category: string }) => product.category === "New-arrival"
  );

  const categoriese = [
    {
      id: 1,
      title: "Clothing ",
      image: "/home2.jpg",
      link: "",
    },
    {
      id: 2,
      title: "FootWear ",
      image: "/shoes.jpg",
      link: "",
    },
    {
      id: 3,
      title: "Jewellery ",
      image: "/jewellery.jpg",
      link: "",
    },
  ];

  return (
    <div className="">
      <main className="mx-auto lg:mx-[100px] mt-5 2xl:mx-[250px] bg-[#f4f6f5] rounded-2xl h-[500px]  ">
        <div className="mx-10 p-3">
          <div className="flex flex-col md:flex-row justify-between items-center md:my-5">
            <div className="lg:w-[40%]">
              <h1 className="text-2xl md:text-[48px] md:leading-[70px] font-bold">
                Elevate Your Style
                <span className="bg-[#ebd96b] p-1">Discover</span> the Latest
                Trends
              </h1>
              <p className="text-base font-medium my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="text-base items-center px-3 font-normal rounded-lg py-2  text-white bg-black transition-all duration-300">
                Shop Now
              </button>
            </div>

            <div className="h-auto w-full md:w-[700px] bg-transparent rounded-lg mt-[20px]">
              <Image
                src={"/main.png"}
                alt=""
                height={400}
                width={700}
                className="object-cover h-[250px] w-full md:h-[350px] lg:mx-16 lg:h-auto md:w-[700px] lg:w-[500px]  "
              />
            </div>
          </div>
        </div>
      </main>

      <div className="bg-[#ebd96b] w-full h-16 lg:h-[100px] lg:my-20 my-10 p-2 flex justify-center items-center ">
        <div className="">
          <Image
            src={"/logo.png"}
            alt="logos"
            height={150}
            width={800}
            className=" w-full lg:h-14"
          />
        </div>
      </div>

      <div className="mx-auto lg:mx-[100px] mt-5 2xl:mx-[250px] px-4 sm:px-6 md:px-8 lg:px-0 ">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-4 rounded-[4px] bg-yellow-500"></div>
          <h2 className="text-[20px] leading-5 font-semibold text-black">
            Today's
          </h2>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="gap-[87px] flex items-center ">
            <h1 className="font-semibold text-2xl lg:text-4xl ">
              Flash Sale
            </h1>
          </div>

          <div className=" items-center justify-center space-x-1 lg:space-x-6 text-center hidden md:flex">
            <div>
              <p className="text-[12px] leading-[18px] font-medium">Days</p>
              <p className="text-lg lg:text-[32px] leading-[30px] font-bold text-black">
                03
              </p>
            </div>

            <div className="text-4xl font-bold text-yellow-500">:</div>

            <div>
              <p className="text-[12px] leading-[18px] font-medium">Hours</p>
              <p className="text-lg lg:text-[32px] font-bold text-black">
                23
              </p>
            </div>

            <div className="text-4xl font-bold text-yellow-500">:</div>
            <div>
              <p className="text-[12px] leading-[18px] font-medium">Minutes</p>
              <p className="text-lg lg:text-[32px] font-bold text-black">
                19
              </p>
            </div>

            <div className="text-4xl font-bold text-yellow-500">:</div>
            <div>
              <p className="text-[12px] leading-[18px] font-medium">Secounds</p>
              <p className="text-lg lg:text-[32px] font-bold text-black">
                56
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-lg my-10 gap-6 ease-in-out">
             {data.map((item : {id:string,image:string, title:string, rating:number, price:number }, i:number) => (
            <div key={i} className="flex flex-col group relative">
              <div className="relative w-full h-[330px] my-4 shadow-lg border  border-black border-x-2 border-y-2 transition-transform transform hover:scale-105 hover:text-white">
                <Image
                  src={item.image}
                  alt="categories"
                  layout="fill"
                  className="rounded-lg h-full w-full object-contain"
                />
              
               { <AddToCartButton product={item}></AddToCartButton>}
              
              </div>
              <div className=" mt-2">
              <div className="flex items-center justify-between">
          <Link href={`/products/${item.id}`}> {item.title} </Link>
          <StarRating rating={item.rating} />
        

          </div>
          <p className=" text-base font-medium">${item.price}</p>
              </div>
            </div>
          ))}
      </div>

      </div>

      <div className="bg-[#f5d754] h-[300px] lg:h-[500px] w-full my-20">
        <div className="mx-auto lg:mx-[100px] 2xl:mx-[250px]  ">
          <div className="flex justify-center lg:justify-between 2xl:justify-center gap-4 item-center">
            <div className="hidden md:block">
              <Image
                src={"/hero-2.png"}
                alt="hero"
                height={100}
                width={300}
                className="h-[300px] lg:h-[500px] object-contain w-full"
              />
            </div>
            <div className="lg:w-[40%] my-5 px-4 sm:px-6 md:px-8 lg:px-0">
              <h1 className="text-2xl lg:text-[48px] lg:leading-[70px] font-bold">
                Elevate Your Style
                <span className="bg-white p-1">Discover</span> the Latest Trends
              </h1>
              <p className="text-base font-medium my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex space-x-2 lg:space-x-4 text-center">
                <div className="bg-white rounded-full items-center flex flex-col justify-center text-black h-[45px] w-[50px] lg:h-[65px] lg:w-[72px]">
                  <p className=" text-base lg:text-xl font-bold">05</p>
                  <p className="text-sm font-normal">Days</p>
                </div>
                <div className="bg-white rounded-full items-center flex flex-col justify-center text-black h-[45px] w-[50px] lg:h-[65px] lg:w-[72px]">
                  <p className="text-base lg:text-xl font-bold">23</p>
                  <p className="text-sm font-normal">Hours</p>
                </div>

                <div className="bg-white rounded-full items-center flex flex-col justify-center text-black  h-[45px] w-[50px] lg:h-[65px] lg:w-[72px]">
                  <p className="text-base lg:text-xl font-bold">59</p>
                  <p className="text-sm font-normal">Minutes</p>
                </div>
                <div className="bg-white rounded-full items-center flex flex-col justify-center text-black  h-[45px] w-[50px] lg:h-[65px] lg:w-[72px]">
                  <p className="text-base lg:text-xl font-bold">35</p>
                  <p className="text-sm font-normal">Seconds</p>
                </div>
              </div>
              <button className="text-base items-center px-3 font-normal rounded-lg py-2  text-white bg-black transition-all duration-300 my-3">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:my-20 my-10  mx-auto lg:mx-[100px] 2xl:mx-[250px] px-4 sm:px-6 md:px-8 lg:px-0 ">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-4 rounded-[4px] bg-yellow-500"></div>
          <h2 className="text-[20px] leading-5 font-semibold text-black">
            Categoriese
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ease-in-out my-10 lg:my-20">
          {categoriese.map((item, i) => (
            <div key={i} className="bg-transparent rounded-2xl">
              <div className=" w-full h-[240px] my-4  transition-transform transform hover:scale-105 ">
                <Image
                  src={item.image}
                  alt="categories"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  className=" h-full w-full object-cover"
                />
              </div>

              <h3 className="text-black text-center font-semibold text-lg ">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:my-20 my-10  mx-auto lg:mx-[100px] 2xl:mx-[250px] px-4 sm:px-6 md:px-8 lg:px-0 ">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-4 rounded-[4px] bg-yellow-500"></div>
          <h2 className="text-[20px] leading-5 font-semibold text-black">
            Featured
          </h2>
         </div>

         <div className="mt-8 flex items-center justify-between">
          <div className="gap-[87px] flex items-center ">
            <h1 className="font-semibold text-4xl leading-[48px]">
              New Arrival
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between 2xl:justify-center gap-[30px] 2xl:gap-[60px] mt-10 ">
          <div className=" h-[300px] w-full lg:h-[600px] lg:w-[570px] 2xl:w-[750px] relative">
            <Image
              src={"/home1.jpg"}
              alt="featured-1"
              height={100}
              width={500}
              className=" h-full w-full lg:h-[600px] lg:w-[570px] 2xl:w-[750px] object-cover "
            />
            <div className="lg:mx-[32px] text-black absolute mx-2 top-44 lg:top-[454px] left-0">
              <h1 className="font-semibold text-[24px] leading-[24px] font-inter">
                Women's Casual Wear
              </h1>
              <p className="font-normal text-[14px] leading-[21px] w-[242px] my-2">
                Blue and White combo comin out on sale.
              </p>
              <h2 className="text-base font-medium my-2 underline decoration-none decoration-black cursor-pointer">
                Shop Now
              </h2>
            </div>
          </div>

          <div className="">
            <div className=" h-[300px] w-full lg:h-[284px] lg:w-[570px] 2xl:w-[650px] mb-10 relative">
              <Image
                src={"/clothes.jpg"}
                alt="featured-2"
                height={100}
                width={300}
                className=" h-full w-full lg:h-[284px] lg:w-[570px] 2xl:w-[650px]  object-cover "
              />
              <div className="lg:mx-[32px] mx-2  text-[#FAFAFA] absolute top-32 lg:top-[150px] left-0">
                <h1 className=" font-semibold text-[24px] leading-[24px] font-inter">
                  Women's Collection
                </h1>
                <p className="font-normal text-[14px] leading-[21px] w-[242px] my-2">
                  Featured woman collections that give you another vibe.
                </p>

                <h2 className="text-base font-medium my-2 underline decoration-none decoration-[#FAFAFA] cursor-pointer ">
                  Shop Now
                </h2>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-[30px] items-center">
              <div className="h-[284px] w-full lg:w-[270px]  justify-center relative">
                <Image
                  src={"/home3.jpg"}
                  alt="featured-3"
                  height={100}
                  width={500}
                  className=" h-full w-full lg:h-[286px] lg:w-[432px] 2xl:w-[550px]  object-cover"
                />
                <div className="lg:mx-[32px] mx-2  text-black absolute top-[170px] left-0">
                  <h1 className=" font-semibold text-[24px] leading-[24px] font-inter">
                    Casual Wear
                  </h1>
                  <p className="font-normal text-[14px] leading-[21px] w-[242px] my-2">
                   Womens Comfortable jeans-shirt
                  </p>

                  <h2 className="text-base font-medium my-2 underline decoration-none decoration-black cursor-pointer">
                    Shop Now
                  </h2>
                </div>
              </div>

              <div className="h-[300px] w-full lg:h-[284px] lg:w-[270px] 2xl:w-[550px] justify-center relative">
                <Image
                  src={"/home4.png"}
                  alt="featured-4"
                  height={100}
                  width={400}
                  className=" h-full w-full lg:h-[284px] lg:w-[270px] 2xl:w-[550px]  object-cover "
                />
                <div className="lg:mx-[32px] mx-2 text-black absolute top-[170px] left-0">
                  <h1 className=" font-semibold text-[24px] leading-[24px] font-inter">
                    Youngs Favourite
                  </h1>
                  <p className="font-normal text-[14px] leading-[21px] w-[242px] my-2">
                    The Casual Wear
                  </p>

                  <h2 className="text-base font-medium my-2 underline decoration-none decoration-black cursor-pointer">
                    Shop Now
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:my-20 py-5 my-10  mx-auto lg:mx-[100px] 2xl:mx-[250px] px-4 sm:px-6 md:px-8 lg:px-0 ">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-4 rounded-[4px] bg-yellow-500"></div>
          <h2 className="text-[20px] leading-5 font-semibold text-black">
            Services
          </h2>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="gap-[87px] flex items-center ">
            <h1 className="font-semibold text-4xl leading-[48px]">
              Our Services
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-5 my-20">
          <div className="bg-[#f4f5f6] h-[240px] w-full mx-auto  p-4 ">
            <div className="bg-[#ebd96b] h-20 w-20 rounded-full flex justify-center items-center mx-auto shadow-md">
              <div className="bg-black h-[58px] w-[58px] m-[11px] rounded-full flex justify-center items-center">
                <FaTruckFast className="text-[#FAFAFA] text-2xl text-center" />
              </div>
            </div>

            <div className="block mt-5 text-black text-center">
              <h1 className="font-semibold text-xl ">FREE AND FAST DELIVERY</h1>
              <p className="font-normal text-[14px] leading-[21px] text-center">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>

          <div className="bg-[#f4f5f6] h-[240px] w-full mx-auto  p-4 ">
            <div className=" bg-[#ebd96b] h-20 w-20 rounded-full flex justify-center items-center mx-auto">
              <div className="bg-black h-[58px] w-[58px] m-[11px] rounded-full flex justify-center items-center">
                <TbHeadset className="text-[#FAFAFA] text-2xl text-center" />
              </div>
            </div>

            <div className="block mt-5 text-black text-center">
              <h1 className="font-semibold text-xl ">24/7 Customer Services</h1>
              <p className="font-normal text-[14px] leading-[21px] text-center">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>

          <div className="bg-[#f4f5f6] h-[240px] w-full mx-auto  p-4 ">
            <div className="bg-[#ebd96b] h-20 w-20 rounded-full flex justify-center items-center mx-auto">
              <div className="bg-black h-[58px] w-[58px] m-[11px] rounded-full flex justify-center items-center">
                <AiOutlineSafety className="text-[#FAFAFA] text-2xl text-center" />
              </div>
            </div>

            <div className="block mt-5 text-black text-center">
              <h1 className="font-semibold text-xl ">Money Back Guarantee</h1>
              <p className="font-normal text-[14px] leading-[21px] text-center">
                We reurn money within 30 days
              </p>
            </div>
          </div>
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
