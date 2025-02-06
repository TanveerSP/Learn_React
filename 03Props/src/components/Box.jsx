import React from 'react'

const Box = (props) => {
  return (
    <div className='bg-amber-200 max-w-md gap-y-4 p-5 flex flex-col items-center justify-center'>
       {props.children}
    </div>
  )
}

export default Box