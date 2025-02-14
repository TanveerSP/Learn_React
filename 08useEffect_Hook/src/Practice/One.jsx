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
        <h1 className='text-red-500 text-center p-1'>
            Console Mount
        </h1>
    </div>
  )
}

export default One