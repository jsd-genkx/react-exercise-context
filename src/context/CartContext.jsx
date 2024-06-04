/* eslint-disable react/prop-types */
// src/CartContext.js
import { createContext, useContext, useState } from "react";

// const CartContext = ;

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== item.id));
  };

  return (
    // code here:
 
  );
};
