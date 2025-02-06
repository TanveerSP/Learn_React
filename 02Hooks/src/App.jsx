import React from "react";
import Counter from "./components/Counter"
import LikeBtn from "./components/LikeBtn";
import DarkLightTheme from './components/DarkLightTheme'

function App() {
  return (
    <div className="w-[100vw] h-screen  bg-gray-400 flex flex-col gap-y-10 m-auto justify-center items-center">
      {/* <Counter /> */}
      <LikeBtn />
      <DarkLightTheme />
    </div>
  );
}

export default App;
