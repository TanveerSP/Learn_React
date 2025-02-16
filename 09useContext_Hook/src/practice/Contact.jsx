import React, { useContext } from 'react'
import {CounterContext} from './Home'

const Contact = () => {

  const myContext = useContext(CounterContext);
  const {count , setCount} = useContext(CounterContext)

  return (
    <button
    
    >
    Click me {count}    
    </button>
  )
}

export default Contact