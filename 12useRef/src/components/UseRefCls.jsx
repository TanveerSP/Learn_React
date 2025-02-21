import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseRefCls = () => {
  const [count, setCount] = useState(0);
  let val = 1;
  
  function handleCount() {
    val = val + 1;
    console.log("Value of val: ", val);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Main frese render hogaya hu");
  });

  return (
    <div>
      <h3>UseRefCls</h3>
      <button
      onClick={handleCount}
      //   onClick={() => setCount((prev) => prev + 1)}
      >
        Incresse
      </button>

      <div>
        <h4>Count: {count}</h4>
      </div>
    </div>
  );
};

export default UseRefCls;
