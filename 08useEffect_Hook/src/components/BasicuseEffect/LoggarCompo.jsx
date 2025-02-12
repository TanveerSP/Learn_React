import React, { useEffect, useState } from "react";

const LoggarCompo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  console.log("Component re reander and count change", {count});
  });

  return (
    <div className="flex gap-y-4 flex-col items-center justify-center mt-10">
       <h1 className="text-lg font-medium">{count}</h1>
        <button
        className="p-1 text-black border-white font-semibold bg-gray-400 border-2"
        onClick={() => setCount((prev) => prev + 1)}
        >
            Increment 
        </button>
    </div>
  );
};

export default LoggarCompo;
