import React from "react";

const ColorSwitcher = ({ onChangecolor }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangecolor();
      }}
    >
      change Color
    </button>
  );
};

export default ColorSwitcher;
