import Counter from "./components/Counter";
import Weather from "./components/Weather";
import RandomGIF from "./components/RandomGIF";
import LoggarCompo from "./components/BasicuseEffect/LoggarCompo";
import "./App.css";
import TimerCompo from "./components/BasicuseEffect/TimerCompo";
import DataFatcher from "./components/BasicuseEffect/DataFatcher";
import ResizeComponent from "./components/BasicuseEffect/ResizeComponent";
import MultiEffectComponent from "./components/BasicuseEffect/MultiEffectComponent";
import One from "./Practice/One";
import { useState } from "react";
import Two from "./Practice/Two";
import OnlineStatus from "./Practice/OnlineStatus";

function App() {
  const [show, setShow] = useState(true);
  const [userId, setUserId] = useState(1);

  return (
    <div className="p-20 flex flex-col items-center justify-center m-auto w-full h-full ">
      {/* <Counter /> */}
      {/* <Weather /> */}
      {/* <RandomGIF /> */}

      {/* <LoggarCompo /> */}
      {/* <TimerCompo /> */}
      {/* <DataFatcher /> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent /> */}

      <div>
        <button className="bg-gray-600 p-1" onClick={() => setShow(!show)}>
          Toggle One Component
        </button>
        {show && <One />}
      </div>

      {/* <div>
        <h1 className="bg-gray-500 p-2 mt-4 mb-4">User Information</h1>
         <Two userId={userId} />
        <button
        className="bg-blue-500 p-2 mt-4 rounded-2xl"
        onClick={() => setUserId(userId + 1)}>Next User</button>
      </div> */}

      {/* <Two /> */}

      <div className="flex justify-center items-center h-screen">
        <OnlineStatus />
      </div>
    </div>
  );
}

export default App;
