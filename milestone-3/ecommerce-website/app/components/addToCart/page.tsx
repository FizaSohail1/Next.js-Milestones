"use client";
import { useCart } from "@/app/context/page";
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

const AddToCartButton = ({ product }: { product: any } ) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 p-2 text-center bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Add to Cart
        </button>
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
  );
};

export default AddToCartButton;
