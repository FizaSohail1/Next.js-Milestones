"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  getTotalPrice: () => string | number;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export function CartProvider({ children }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item: CartItem) => {
    let existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart((items) =>
        items.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((items) => [...items, { ...item, quantity: 1 }]);
    }

    // Update localStorage after cart change
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + (item.price || 0) * (item.quantity || 1),
      0
    ).toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([])); 
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, getTotalPrice, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
