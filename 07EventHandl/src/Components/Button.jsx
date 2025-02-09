import React from "react";

const Button = () => {
  function handleClick() {
    alert("I am clicked 1");
  }

  function handleMouseOver() {
    alert("para ke uper mouse lekar aaye ho")
  }

  function handleInputChange(e) {
    // console.log("Inpute value change");
    let value = []
    console.log("Value till now: ", e.target.value);
    value.push(e.target.value)
   
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // I am writing my custom behavior
    alert("From submit kardu kya")
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

      <form
      className="flex gap-5"
      onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Type text"
        className="border-[1px] border-white p-2 "
        // onChange={handleInputChange}
        onChange={handleInputChange}
        />
        <button 
        className="bg-gray-200 text-black px-2 rounded-md"
        type="submit">
            Submit
        </button>
      </form>
    </div>
  );
};

export default Button;
