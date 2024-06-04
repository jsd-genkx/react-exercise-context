// src/ProductList.js
import { useCart } from "../context/CartContext.jsx";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded shadow-sm">
          <h2 className="text-xl">{product.name}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
