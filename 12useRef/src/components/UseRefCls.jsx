import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseRefCls = () => {
  const [count, setCount] = useState(0);

  useEffect((0))

  return (
    <div>
      <h3>UseRefCls</h3>
      <button
    //   onClick={() => setCount((prev) => prev + 1)}
      >
        Incresse
      </button>

      <div>
        <h4>
        Count: {count}
        </h4>
      </div>
    </div>
  );
};

export default UseRefCls;
