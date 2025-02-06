import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = (props) => {
  return (
    <>
      <div className=" relative ">
        <MdOutlineShoppingCart size={50} color="white" />
        <div className="absolute top-[-45%] right-[-30%] font-semibold border-3 border-black text-center p-1 bg-yellow-400 w-10 h-10 rounded-full">
          {props.item}
        </div>
      </div>
      <button
        className="bg-gray-500 p-3 text-lg font-bold rounded-xl text-gray-200"
        onClick={props.hadleAddItem}
      >
        {props.text}
      </button>
    </>
  );
};

export default Cart;
