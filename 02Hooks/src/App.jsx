import React from "react";
import Counter from "./components/Counter"
import LikeBtn from "./components/LikeBtn";
import DarkLightTheme from './components/DarkLightTheme'
import ShowHide from './components/ShowHide'
import FormHandling from "./components/FormHandling";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-[100vw] h-screen  bg-gray-400 flex flex-col gap-y-10 m-auto justify-center items-center">
      {/* <Counter /> */}
      <LikeBtn />
      <DarkLightTheme />
      <ShowHide />
      <FormHandling />
      <TodoList />
    </div>
  );
}

export default App;
