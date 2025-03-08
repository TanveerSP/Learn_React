import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  allClearCounts,
  incrementCount,
  decrementCount,
} from "../features/counterTwo";

const PracticeCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncriment = () => {
    dispatch(incrementCount());
  };
  const handleDecriment = () => {
    dispatch(decrementCount());
  };
  const handleAllReset = () => {
    dispatch(allClearCounts());
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Counter</h2>
        <p className="text-4xl font-semibold text-blue-600 mb-4">{count}</p>

        <div className="flex justify-center gap-4">
          <h2>Count: {count}</h2>
          <button
            onClick={handleIncriment}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            +
          </button>
          <br />
          <br />
          <button
            onClick={handleDecriment}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            -
          </button>
          <br />
          <br />
          <button
            onClick={handleAllReset}
            className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeCounter;
