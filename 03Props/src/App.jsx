import { useState } from "react";
import Box from "./components/Box";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "tanvir",
    age: 21,
  };

  let newArr = [1, 2, 3];

  let [count, setCount] = useState(0)

  function hadleClick() {
    setCount(count + 1);
  }

  function hadleClickDec() {
   if(count > 0){
    setCount(count - 1);
   } else {
    alert("Zero se necha nahi ")
   }
   
  }

  return (
    <div className="h-screen w-[100%] bg-green-700 flex flex-col justify-center gap-4 items-center mr-auto">
      <h1 className="text-4xl font-semibold bg-green-400 p-4 mb-4">Props</h1>
      {/* <Card palcename="Cicago" btnText="click me"/>
      <Card palcename="Tokyo" btnText="visit me"/> */}
      {/* <Card username="tanveer" someObj={myObj} /> */}
      {/* <Card arr={newArr}/> */}

      {/* <Box name="Tanveer">
        <h2> I am Frontend Developer</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nihil, dolorem et explicabo natus, sit amet necessitatibus aliquid consectetur laboriosam harum quos, ipsum cumque praesentium!</p>
      </Box> */}

      {/* <Box>
        <h2> I am Backend Developer</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam nihil, dolorem et explicabo natus, sit amet necessitatibus aliquid consectetur laboriosam harum quos, ipsum cumque praesentium!</p>
      </Box> */}

      <Button hadleClick={hadleClick} hadleClickDec={hadleClickDec} text="Increse me" text2="Decrese me">
        {count}
      </Button>
    </div>
  );
}

export default App;
