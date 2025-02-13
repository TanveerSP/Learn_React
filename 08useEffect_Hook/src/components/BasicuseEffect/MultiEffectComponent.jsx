import React, { use, useEffect, useState } from 'react'

const MultiEffectComponent = () => {

    const [count, setCount] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        console.log("Count changed", count);
    }, [count]);
    // side-effect logic will run when count is changed

    useEffect(() => {
      const intervalid = setInterval(() => {
        setSecond(prevSeconds => prevSeconds + 1);
        console.log("setInterval started");
      }, 1000);

      return () => {
        clearInterval(intervalid);
        console.log("Time to stope");
      }
    }, [])
    // it will run only on first render
  return (
    <div>
        <h1 className='text-2xl'>count: {count}</h1>
        <button 
        className='bg-gray-400 p-1'
        onClick={() => setCount(count + 1)}>
            Increment Count
        </button>
        <h2 className='text-xl'>second: {second}</h2>

    </div>
  )
}

export default MultiEffectComponent