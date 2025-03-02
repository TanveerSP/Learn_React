import React, { useEffect, useRef, useState } from "react";

const PracticeOne = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  let val = countRef;

  function handleCount() {
    val.current = val.current + 1;
    console.log("Value of val:", val.current);
    setCount(count + 1);
  }

  function handleCountVal() {
    val.current = val.current -1;
    console.log("Value of val", val.current);
    setCount((prev) => prev > 0 ?prev - 1 : 0)
  }

  //   it runs on every render
  useEffect(() => {
    console.log("count is ", count);
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Increes Value</button>
      <br />
      <br />
      {/* <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}> */}
      <button onClick={handleCountVal}>
        Increes Value
      </button>
    </div>
  );
};

export default PracticeOne;
