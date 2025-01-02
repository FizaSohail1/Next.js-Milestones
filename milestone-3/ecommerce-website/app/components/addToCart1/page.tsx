"use client"
import React from 'react';
import { useCart } from "@/app/context/cartContext";
import  { FiHeart} from 'react-icons/fi'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

function AddToCartForSingleProductPage({ product }: { product: any }) {

    const { addItem } = useCart();

    const handleAddToCart = () => {
      addItem(product);
    };

  return (
    <div>
       <AlertDialog>
      <AlertDialogTrigger asChild>
      <button onClick={handleAddToCart} className=' text-[18px] font-medium leading-[29px] flex gap-2 justify-center items-center bg-green-400 p-3 w-full lg:w-[35%] rounded-2xl my-4 cursor-pointer '>Add To cart <span>< FiHeart /></span></button> 
      </AlertDialogTrigger >
      <AlertDialogContent className="px-5">
        <AlertDialogHeader>
          <AlertDialogTitle>Item Added to Cart!</AlertDialogTitle>
          <AlertDialogDescription>
            Your item has been successfully added to the cart. Continue shopping or proceed to checkout!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Continue Shopping</AlertDialogCancel>
          <Link href="/cart">
            <AlertDialogAction>View Cart</AlertDialogAction>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  )
}

export default AddToCartForSingleProductPage
