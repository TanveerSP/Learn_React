import React from "react";
import Counter from "./components/Counter"
import LikeBtn from "./components/LikeBtn";

function App() {
  return (
    <div className="w-[100vw] h-screen  bg-gray-400 flex m-auto justify-center items-center">
      {/* <Counter /> */}
      <LikeBtn />
    </div>
  );
}

export default App;
