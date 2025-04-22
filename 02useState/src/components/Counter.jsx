import React, { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  let addValue = () => {
    if (counter < 15) {
      setCounter(counter + 1);
    } else {
      alert("You's reached limit");
    }
  };

  let removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("You's reached limit");
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold">Counter App Component</h1>

      <div className=" py-10  flex justify-center items-center gap-5  ">
        <button onClick={removeValue} className="font-bold text-2xl bg-gray-600 py-2 px-4 text-white rounded-xl ">
          -
        </button>
        <h2 className="font-bold text-2xl">{counter}</h2>
        <button onClick={addValue} className="font-bold text-2xl bg-gray-600 py-2 px-4 text-white rounded-xl">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
