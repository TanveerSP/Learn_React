import React from 'react'

const Navbar = ({color}) => {
  return (
    <div className='h-14 w-full '>
        <h1 className='text-xl font-semibold'>
            Navbar {color} is color
        </h1>
    </div>
  )
}

export default Navbar