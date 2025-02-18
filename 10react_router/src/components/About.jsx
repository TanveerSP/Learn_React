import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {

  const navigate = useNavigate();
  function handleNavigate() {
    navigate('/student/abc123')
  }

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleNavigate}>
        Go To my Profile
      </button>
    </div>
  )
}

export default About