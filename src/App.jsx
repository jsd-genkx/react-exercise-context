import { CartProvider } from "./context/CartContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen p-4">
        <header className="mb-4">
          <h1 className="text-3xl">Simple Shopping Cart</h1>
        </header>
        <main className="grid grid-cols-2 gap-4">
          <ProductList />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
