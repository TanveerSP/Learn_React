import { useState } from 'react'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full h-screen bg-[#393939] text-white flex items-center justify-center '>
      <Button />
    </div>
  )
}

export default App
