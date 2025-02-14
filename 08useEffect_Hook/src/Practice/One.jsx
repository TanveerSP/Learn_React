import React, { use, useEffect } from 'react'

const One = () => {

    useEffect(() => {
        console.log("Component Mounted");

        return () => {
            console.log("Component Unmounted");
        }
    }, [])

  return (
    <div>
        <h1>Console Mount</h1>
    </div>
  )
}

export default One