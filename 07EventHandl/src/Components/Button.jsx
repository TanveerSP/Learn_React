import React from "react";

const Button = () => {
  function handleClick() {
    alert("I am clicked 1");
  }

  function handleMouseOver() {
    alert("para ke uper mouse lekar aaye ho")
  }

  return (
    <div className="flex flex-col gap-4">

     <p onMouseOver={handleMouseOver} style={{border: "1px solid white"}}>
        I am a Para
    </p>     

      <button
        onClick={handleClick}
        className="text-lg font-bold border-[1px] p-2 rounded-lg"
      >
        Click Button 1
      </button>

        {/* This type is very bulke or not redable not recomanded */}
      {/* <button
        onClick={(e) => alert("second button clicked 2")}
        className="text-lg font-bold border-[1px] p-2 rounded-lg"
      >
        Click Button 2
      </button> */}
    </div>
  );
};

export default Button;
