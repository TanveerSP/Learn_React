import React, { useMemo, useState } from "react";

const ExpensiveCal = () => {
  const [count, setCount] = useState(0);
  const [countOne, setCountOne] = useState(0);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++; 
    console.log("I am calling");
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
      <br />
      <br />
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <button onClick={() => setCountOne(countOne + 1)}>
        Counter One {countOne}
      </button>
    </div>
  );
};

export default ExpensiveCal;
