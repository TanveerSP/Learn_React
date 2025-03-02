import React, { useEffect, useRef, useState } from 'react'

const PracticeTwo = () => {
    const countRef = useRef(0);
    const btnRef = useRef()
    const [count, setCount] = useState(0);
    let val = countRef;


    // counter function
    function handleCount() {
        val.current = val.current + 1;
        console.log("value of val", val.current);
        setCount(count + 1);
    }

    // colour change function 
    function changeColor() {
     btnRef.current.style.backgroundColor = "red"
    }

    // run every re-render
    useEffect(() => {
        console.log("count is ", count);
        console.log("value of ", val.current);
    })

  return (
    <div>
        <h1>{count}</h1>
        <button
        onClick={changeColor}
        >
            Change Color
        </button>
        <br />
        <br />
        <button
        ref={btnRef}
        onClick={handleCount}
        >
         Increse
        </button>
       
    </div>
  )
}

export default PracticeTwo