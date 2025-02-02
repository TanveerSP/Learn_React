import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  let maxCount = 15;
  let minCount = 0;
  // let counter = 0;

  let addValue = () => {
    // counter = counter + 1;
    // setCounter(counter)

    if (counter < maxCount) {
      setCounter(counter + 1);
      // console.log("clicked,", counter);
    } else {
      alert("You've reached the max limit!");
    }
  };

  let removeValue = () => {
    // counter = counter - 1;
    // setCounter(counter)

    if (counter > minCount) {
      setCounter(counter - 1);
    } else {
      alert("You can't go below the minimum limit!");
    }
  };

  return (
    <>
      <h1> Counter Value App </h1>
      <h2> ================= </h2>
      <div className="buttonDiv">
        <button onClick={removeValue}>-</button>
        <h2>{counter}</h2>
        <button onClick={addValue}>+</button>
      </div>
    </>
  );
}

export default App;
