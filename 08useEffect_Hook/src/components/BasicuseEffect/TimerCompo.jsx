import React, { useEffect, useState } from 'react'

const TimerCompo = () => {
    
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond(prevSeconds => prevSeconds + 1);
            console.log("setInterval executed");
        }, 1000);

        return ()  => {
            console.log("Time to stop");
            clearInterval(intervalId);
        }
    }, [])
    // it will run only on first render

  return (
    <div className='flex items-center justify-center mx-auto mt-20'>
        <h1 className='text-2xl font-bold'>Seconds: {second}</h1>
    </div>
  )
}

export default TimerCompo