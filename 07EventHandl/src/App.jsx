import { useState } from 'react'
import Button from './Components/Button'
import ColorChg from './Components/ColorChg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' w-full h-screen  text-white flex items-center justify-center '>
      {/* <Button /> */}
      <ColorChg />
    </div>
  )
}

export default App
