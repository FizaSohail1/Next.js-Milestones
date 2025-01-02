import React from 'react'
import Image from 'next/image';
import StarRating from '@/app/components/DynamicStars/page';
import Link from 'next/link';
import AddToCartButton from '@/app/components/addToCart/button';
import AddToCartForSingleProductPage from '@/app/components/addToCart1/page';

async function SingleProduct({ params }: { params: { id: string } }) {

  const relatedProducts = [
    {
      id: 1,
      title: "Casual Sports Shoes",
      price:"$55.00",
      rating: 5,
      image: "https://m.media-amazon.com/images/I/81MP8ZAtORL._AC_SX500_.jpg",
    },
    {
      id: 2,
      title: "Violet T-Shirt",
      category: "T-shirts",
      rating: 4,
      price: 21.99,
      image: "https://m.media-amazon.com/images/I/81790N8YviL._AC_SX425_.jpg",
  },
  {
    id: 3,
    title: "Crystal Jewelery Collection",
    price:"$120.00",
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71W9Bk416aL._AC_SY625_.jpg",
  },
  {
    id: 4,
    title: "Jeans-Jacket",
    price:"$32.70",
    image: "/arrival5.jpg",
    category: "T-shirts",
    rating: 4,
  },
  ]

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
    const products = await response.json();

    const { id } = await  params;

    const product = products.find((prod: { id: string }) => prod.id === id);

    if (!product) {
      return <div>Product not found</div>;
    }


  return (
    <div >
      <div className="bg-white mx-auto md:mx-10 lg:mx-[100px] 2xl:mx-default-margin shadow-lg my-5 md:my-16 lg:my-32  p-5">
        <div className='flex flex-col lg:flex-row mx-auto items-center '>
           <div className="flex gap-2">
           <div className=" space-y-3 ">
                <div className=" h-[80px] w-full md:h-[150px] md:w-[150px] lg:h-[120px] lg:w-[120px] rounded-[3px]  items-center shadow-md border-[1px] transition-transform transform hover:scale-105 cursor-pointer"> 
                     <Image src={product.image} alt={product.name} height={200} width={200} className={`h-full w-full lg:h-[120px] lg:w-[120px] object-cover mx-auto `}/>
                </div>
                <div className=" h-[80px] w-full md:h-[150px] md:w-[150px] lg:h-[120px]  lg:w-[120px] rounded-[3px]  items-center shadow-md border-[1px]transition-transform transform hover:scale-105 cursor-pointer"> 
                     <Image src={product.image} alt={product.name} height={200} width={200} className={`h-full w-full lg:h-[120px] lg:w-[120px] object-cover mx-auto `}/>
                </div>
                <div className=" h-[80px] w-full md:h-[150px] md:w-[150px] lg:h-[120px] lg:w-[120px] rounded-[3px] items-center shadow-md border-[1px] transition-transform transform hover:scale-105 cursor-pointer"> 
                     <Image src={product.image} alt={product.name} height={200} width={200} className={`h-full w-full lg:h-[120px] lg:w-[120px]  object-cover mx-auto `}/>
                </div>

            </div>
            <Image
            src={product.image} 
            alt='img'
            height={487}
            width ={325} 
            className= {`h-[260px] w-[200px] sm:w-full md:h-[487px] md:w-[375px] lg:h-[400px] rounded-[3px] lg:mx-6 shadow-lg border-[1px]  `}/>
           </div>


           <div className='ml-4 lg:ml-8 mt-4 lg:mt-0 '>
            <h1 className='text-[36px] leading-[42.19px] font-semibold'>{product.title}</h1>
           
            <p className='text-[16px] leading-[29px] text-gray-700 w-full lg:max-w-[549px] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit repellat, tenetur at inventore obcaecati ratione voluptatum. Deserunt, aspernatur minus! Quam quae quos doloribus aperiam ea voluptate. Natus, expedita.</p>
            <p className='flex gap-2 items-center text-[16px] leading-[29px] my-2 text-normal'> <span className="text-[18px] leading-[18.75px] my-2 font-medium">Price:</span> $ {product.price} </p>
            <div className='flex gap-3 items-center mt-3'>
              <StarRating rating={4}/>
               <div className='text-[16px] leading-[29px]'> (22) </div>
            </div>
        
            {<AddToCartForSingleProductPage product={product}/>}

        </div>
        </div>
      </div>

      <div className="mx-auto lg:mx-[100px] mt-5 2xl:mx-[250px]">
      <h2 className="text-2xl md:text-4xl font-bold text-center  mb-10 border-b-2 border-b-[#ebd96b] py-5">
          Related Products
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:my-24 justify-center mx-5 gap-6 ease-in-out'>
       {relatedProducts.map((product) => (
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
          <Link href={`/products/${product.id}`}> {product.title} </Link>
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
  )
}

export default SingleProduct
