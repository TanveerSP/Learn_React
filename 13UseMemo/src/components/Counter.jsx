import React from "react";
import { useState, useMemo } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expansiveTask(num) {
    console.log("Inside expensive task");
    for (let i = 0; i <= 100000000000000; i++) {
      return num * 2;
    }
  }

  //   let doubleValue = expansiveTask(input);
  let doubleValue = useMemo(() => expansiveTask(input), [input]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <input
        type="number"
        placeholder="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Double: {doubleValue}</div>
    </div>
  );
};

export default Counter;
