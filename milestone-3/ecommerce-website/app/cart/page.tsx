"use client";
import Link from "next/link";
import { useCart } from "../context/page";
import Image from "next/image";

const CartPage = () => {
  const { cart, removeItem, getTotalPrice, clearCart, updateQuantity } =
    useCart();
  const totalAmount = getTotalPrice();

  return (
    <div className="min-h-screen py-10 mx-auto lg:mx-[100px] 2xl:mx-[250px] px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-3 md:p-6">
            <div>
              <div className="space-y-4 md:hidden">
                {cart.map((item, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-4 flex flex-col space-y-2"
                  >
                    <Image
                      src={item.image}
                      alt="img"
                      height={80}
                      width={100}
                      className="h-[80px] w-[100px] object-contain"
                    />
                    <div className="text-lg font-bold">{item.title}</div>
                    <div>Price: ${item.price}</div>
                    <div className="">
                      Quantity:
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 text-center border rounded"
                      />
                    </div>
                    <div>
                      Total: ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto hidden md:block">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-lg">Product</th>
                      <th className="py-2 text-lg">Product Name</th>
                      <th className="py-2 text-lg">Price</th>
                      <th className="py-2 text-lg">Quantity</th>
                      <th className="py-2 text-lg">Total</th>
                      <th className="py-2">Remove Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, i) => (
                      <tr key={i} className="border-b">
                        <td className="py-3">
                          <Image
                            src={item.image}
                            alt="img"
                            height={100}
                            width={300}
                            className="h-[80px] w-[100px] object-contain"
                          />
                        </td>
                        <td className="py-3">{item.title}</td>
                        <td className="py-3">${item.price}</td>
                        <td className="py-3">
                          <input
                            type="number"
                            min="1"
                            value={item.quantity || 1}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="w-16 text-center border rounded"
                          />
                        </td>
                        <td className="py-3">
                          ${(item.price * (item.quantity || 1)).toFixed(2)}
                        </td>
                        <td className="py-3">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <h2 className="text-xl font-bold">
                Total: <span className="text-green-500">${totalAmount}</span>
              </h2>
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={clearCart}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Clear Cart
                </button>
                <Link href={"/checkout"}>
                  <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
