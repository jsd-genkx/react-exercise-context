// src/ProductList.js
import { useCart } from "../context/CartContext.jsx";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return <div className="grid grid-cols-1 gap-4">{/* code here: */}</div>;
};

export default ProductList;
