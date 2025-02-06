import React from "react";

const Button = (props) => {
  return (
    <div className="flex bg-white gap-x-4 items-center justify-between p-3 rounded-xl">
      <button
        className="bg-amber-500 text-center font-semibold text-white px-2 py-4 rounded-lg"
        onClick={props.hadleClickDec}
      >
        {props.text2}
      </button>
      <h1 className="font-bold text-xl"> {props.children}</h1>
      <button
        className="bg-amber-500 text-center font-semibold text-white px-2 py-4 rounded-lg"
        onClick={props.hadleClick}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
