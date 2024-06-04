import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>
              {item.name} - ${item.price}
            </span>
            <button
              onClick={() => removeFromCart(item)}
              className="px-2 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
