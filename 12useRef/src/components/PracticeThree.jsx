import React, { useState, useRef } from "react";

const PracticeThree = () => {
  let timeRef = useRef(null);
  const [timer, setTimer] = useState(0);

  function startTimer() {
    timeRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = (null)
  }

  function reStartTimer() {
    stopTimer()
    setTimer(0)
  }

  return (
    <div>
      <h2> Count Second: {timer}</h2>
      <button onClick={startTimer}>Start Timer</button>
      <br /> <br />
      <button onClick={stopTimer}>Stop Timer</button>
      <br /> <br />
      <button onClick={reStartTimer}>Restart Timer</button>
    </div>
  );
};

export default PracticeThree;
