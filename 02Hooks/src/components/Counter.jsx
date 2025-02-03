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
    <div className=" flex flex-col ">
      <h1>Counter App Component</h1>

      <div className=" py-10  flex justify-center items-center gap-5  ">
        <button onClick={addValue} className="font-bold text-2xl bg-gray-600 p-3 text-white rounded-xl ">
          Add
        </button>
        <h2 className="font-bold text-2xl">{counter}</h2>
        <button onClick={removeValue} className="font-bold text-2xl bg-gray-600 p-3 text-white rounded-xl">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;
