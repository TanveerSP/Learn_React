import React, { useState } from "react";
import ColorSwitcher from "./ColorSwitcher";

const ColorChg = () => {
  const [click, setClick] = useState(0);

  function handleClickOutSide() {
    setClick(click + 1);
  }

  function getRandomLightColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());
    // console.log(r, g, b);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
      <div
        style={{ width: "90%", height: "90%" }}
        onClick={handleClickOutSide}
      >
        <ColorSwitcher handleChangeColor={handleChangeColor} />
        <br />
        <br />
        <h2 className="text-black ">Click on the page: {click}</h2>
      </div>
  );
};

export default ColorChg;
