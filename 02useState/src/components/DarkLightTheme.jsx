import React, { useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkLightTheme = () => {

    let [them, setThem] = useState('light')

    function changeBg () {
        setThem((prev) => prev === "light" ? "dark" : "light")
    }

  return (
    <div className={`w-full ${them === "light" ? "bg-white text-black" : "bg-black text-white"} }
     flex gap-x-2 items-center justify-center max-w-md h-52`}>
        <button onClick={changeBg}>
            {them === "light"?<MdOutlineLightMode size={40}/> : <MdLightMode size={40} />}
        </button>
        <p className='text-lg font-medium'> 
            {them === "light" ? "Light" : "Dark"}
        </p>
    </div>
  )
}

export default DarkLightTheme