import React, { useState } from 'react'
import ColorSwitcher from './ColorSwitcher'

const ColorChg = () => {

    const [click, setClick] = useState(0);

    function handleClickOutSide() {
        setClick( c => c + 1)
    }

    function getRandomLightColor() {
        let r = 150 + Math.round(100*Math.random())
        let g = 150 + Math.round(100*Math.random())
        let b = 150 + Math.round(100*Math.random())
        return `rgb{${r}, ${g}, ${b}}`
    }

    function handleChangeColor() {
        let bodyStyle = document.body.style;
        bodyStyle.backgroundColor = getRandomLightColor();
    }

  return (
    <div className='w-100% h-100%'
    onClick={handleClickOutSide}
    >
        <ColorSwitcher onChangecolor={handleChangeColor} />
        <br />
        <br />
        <h2>Click on the page: {click}</h2>
    </div>
  )
}

export default ColorChg