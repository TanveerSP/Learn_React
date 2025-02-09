import React from "react";

const ColorSwitcher = ({ handleChangeColor }) => {
  return (
    <button
    className="bg-gray-200 p-2 border-[1px] border-black text-black"
      onClick={e => {
        e.stopPropagation();
        handleChangeColor();
      }}
    >
      change Color
    </button>
  );
};

export default ColorSwitcher;
