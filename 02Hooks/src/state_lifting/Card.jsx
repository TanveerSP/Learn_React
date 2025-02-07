import React from "react";

const Card = (props) => {
  return (
    <div className="bg-blue-400 w-full max-w-md p-4 h-[200px]">
        <input
        className="border-black px-2 border-2 my-5 bg-white"
         type="text"
         placeholder="text"
         onChange={(e) => props.setName(e.target.value)}
        />
        <p className=" text-lg font-medium">
          Name state variable ki value inside card : 
          {props.name}
        </p>
    </div>
  );
};

export default Card;
