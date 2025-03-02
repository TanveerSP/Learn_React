import React, { useEffect, useRef, useState } from "react";

const TimerWatch = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
      // console.log("time is", time);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function restartTimer() {
    stopTimer();
    setTime(0);
  }

  useEffect(() => {
    // startTimer()
  });

  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>

      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <br />
      <button onClick={restartTimer}>Re-Start</button>
    </div>
  );
};

export default TimerWatch;
