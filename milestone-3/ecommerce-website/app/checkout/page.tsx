"use client";
import { useCart } from "../context/page";
import { useState } from "react";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

 

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!name || !email || !address) {
      alert("Please fill in all the fields, including the payment method.");
      return;
    }

    else{
    clearCart();
    setIsDialogOpen(true);
    }
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen py-10 mx-auto lg:mx-[100px] 2xl:mx-[250px] px-4 sm:px-6 md:px-8 lg:px-0">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty!</p>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Order Summary
          </h2>
          <div className="flex flex-col justify-between items-center lg:flex-row">
            <div>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-md rounded-lg p-4 flex justify-between"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={80}
                      width={100}
                      className="object-contain shadow-md rounded-lg px-4"
                    />
                    <div className="my-4">
                      <div className="flex-1 px-4">
                        <p className="font-medium text-gray-800 text-lg">
                          {item.title}
                        </p>
                        <p className="text-base text-gray-600 my-3">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold text-gray-800 px-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold">
                  Total:{" "}
                  <span className="text-green-500">${totalAmount}</span>
                </h2>
              </div>
            </div>

            <form
              onSubmit={handlePlaceOrder}
              className="space-y-6 w-full lg:w-[50%] bg-white shadow-lg rounded-lg p-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-lg p-3 text-gray-800"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg p-3 text-gray-800"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block font-medium text-gray-700"
                >
                  Address:
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded-lg p-3 text-gray-800"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Payment Method:
                </label>
                <div className="space-y-2">
                  <div>
                    <input
                      type="radio"
                      id="creditCard"
                      value="Credit Card"
                      className="mr-2"
                    />
                    <label htmlFor="creditCard" className="text-gray-700">
                      Credit Card
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="paypal"
                      value="PayPal"
                      className="mr-2"
                    />
                    <label htmlFor="paypal" className="text-gray-700">
                      PayPal
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      value="Cash on Delivery"
                      className="mr-2"
                    />
                    <label htmlFor="cashOnDelivery" className="text-gray-700">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                type="button"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-medium"
              >
                Place Order
              </button>
            </form>
          </div>
        </>
      )}

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Order placed successfully! Thank you for your purchase.
            </AlertDialogTitle>
            <AlertDialogDescription>
              Your order has been placed successfully. What's next?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Link href="/products">
              <AlertDialogAction>Continue Shopping</AlertDialogAction>
            </Link>
            <Link href="/">
              <AlertDialogAction>Back to Home</AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CheckoutPage;

