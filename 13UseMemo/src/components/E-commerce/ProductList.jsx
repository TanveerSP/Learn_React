import React, { useState, useMemo } from "react";

// Sample products data (Static, so it doesn't need to be a dependency)
const products = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Grapes" },
  { id: 4, name: "Mango" },
];

const ProductList = () => {
  const [search, setSearch] = useState("");

  // Optimized: Filtered products using useMemo
  const filteredProducts = useMemo(() => {
    console.log("Filtering products..."); // Logs only when `search` changes
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]); // ✅ Only depends on `search`

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      />
      <ul className="list-disc pl-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="p-1">{product.name}</li>
          ))
        ) : (
          <p className="text-gray-500">No products found</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
