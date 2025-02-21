import React from "react";
import { useRef } from "react";
import { useState } from "react";

const StopWatch = () => {

  const [count ,setCount] = useState(0)
  let timerRef = useRef(null)

  function startTime() {
    timerRef.current = setInterval(() => {
        setCount(count => count + 1)
    }, 1000)
    console.log("start Clicked");
  }

  function stopTime() {
    console.log("Stop Time");
    clearInterval(timerRef.current);
    timerRef.current = null
  }

  function reStartTime() {
    console.log("Restart");
    stopTime();
    setCount(0);
  }

  return (
    <>
      <h2>
        Timer Clock <span>{count}</span>
      </h2>
      <div className="time-com">
        <button onClick={startTime}>Start</button>
        <button onClick={stopTime}>Stop</button>
        <button onClick={reStartTime}>Re-Start</button>
      </div>
    </>
  );
};

export default StopWatch;
