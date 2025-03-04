import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, restart } from "../features/counter/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispach = useDispatch();

  function handleIncrementFun() {
    dispach(increment());
  }
  function handleDcrementFun() {
    dispach(decrement());
  }
  function handleRestartFun() {
    dispach(restart());
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrementFun}>Increment</button>
      <br />
      <br />
      <button onClick={handleDcrementFun}>Decrement</button>
      <br />
      <br />
      <button onClick={handleRestartFun}>Restart</button>
    </div>
  );
}

export default Counter;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   reset,
// } from "../features/counter/counterSlice";

// const Counter = () => {
//   const [amount, setAmount] = useState(0);
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   function handleIncrement() {
//     dispatch(increment());
//   }

//   function handleDecrement() {
//     dispatch(decrement());
//   }

//   function resetValue() {
//     dispatch(reset());
//   }

//   function addAmount() {
//     dispatch(incrementByAmount(amount));
//   }

//   return (
//     <div>
//       <button onClick={handleIncrement}>Add Item +</button>
//       <br />
//       <h2>{count}</h2>
//       <br />
//       <button onClick={handleDecrement}>Remove Item -</button>
//       <br />
//       <br />
//       <button onClick={resetValue}>Remove All Item</button>
//       <br />
//       <br />
//       <input
//         type="number"
//         value={amount}
//         placeholder="Enter Amount"
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button onClick={addAmount}>Add Item By Amount</button>
//     </div>
//   );
// };

// export default Counter;
