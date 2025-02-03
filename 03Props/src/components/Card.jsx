import React from "react";

const Card = ({username , btnText="visite me"}) => {
  // console.log("props", props);
  console.log(username);
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/19577082/pexels-photo-19577082/free-photo-of-city-skyline-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Card"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {username}
        </h2>
        <p className="text-gray-600 mb-4">
          This is a simple card component made with Tailwind CSS in React.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-200">
          {btnText || "Visit me"}
        </button>
      </div>
    </div>
  );
};

export default Card;
