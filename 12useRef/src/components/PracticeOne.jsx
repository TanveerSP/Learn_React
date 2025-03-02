import React, { useRef, useState } from "react";

const PracticeOne = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increes Value
    </button>
      <br />
      <br />
      <button onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
        Increes Value
      </button>
    </div>
  );
};

export default PracticeOne;
