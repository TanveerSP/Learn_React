import React, { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headphones", price: 5000 },
];

const Cart = () => {
  const [cart, setCart] = useState([]);

  // ✅ Fix 1: Correct parameter name
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // ✅ Memoize total price calculation
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Products</h2>

      {/* ✅ Fix 2: Use `return` inside `map` */}
      {products.map((product) => (
        <button
          key={product.id}
          onClick={() => addToCart(product)}
          className="block w-full p-2 mb-2 bg-blue-500 text-white rounded"
        >
          Add {product.name} - ₹{product.price}
        </button>
      ))}

      <h3 className="mt-4 text-lg font-bold">Cart</h3>
      <ul>
        {cart.map((item, ind) => (
          <li key={ind}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>

      {/* ✅ Fix 3: Move Total Price outside `<ul>` */}
      <h3 className="mt-4 text-lg font-bold">Total: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
