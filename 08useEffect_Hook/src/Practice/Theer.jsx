import React, { useEffect, useState } from "react";
import Navbar from "./navbar";

const Theer = () => {
  const [count, setCount] = useState(0);
  const [first, setFirst] = useState(0);

  // Case 1: Run on every render
//   useEffect(() => {
//     alert("Hey welocme to my page");
//   });

  // Case 2: Run only on first render
  useEffect(() => {
    alert("Hey welocme to my page");
  }, []);

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Count was changed");
  }, [count]);

  useEffect(() => {
    alert("First was changed");
  }, [first]);

 
  

  return (
    <div className="flex flex-col w-full">
      <Navbar color={"blue" + "navy"} />
      <div className="flex flex-col gap-y-10 ">
        <h1 className="text-xl font-semibold ">Hello React.js</h1>

        <button
          className="bg-gray-500 p-1 border-2 flex items-center justify-center gap-x-2"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click me:
          <p className="font-bold">{count}</p>
        </button>

        <button
          className="bg-gray-500 p-1 border-2 flex items-center justify-center gap-x-2"
          onClick={() => setFirst((prev) => prev + 1)}
        >
          Click me first:
          <p className="font-bold">{first}</p>
        </button>
      </div>
    </div>
  );
};

export default Theer;
