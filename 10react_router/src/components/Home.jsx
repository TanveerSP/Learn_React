import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {

  const navigate = useNavigate();
  function handleClick() {
    navigate('/about');
  }

  return (
    <div>
     <h1> Home Page</h1>

     <button onClick={handleClick}>
      Move to About page
     </button>
    </div>
  )
}

export default Home