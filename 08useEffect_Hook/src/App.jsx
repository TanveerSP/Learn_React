import Counter from "./components/Counter";
import Weather from "./components/Weather";
import RandomGIF from "./components/RandomGIF";
import LoggarCompo from './components/BasicuseEffect/LoggarCompo'
import "./App.css";
import TimerCompo from "./components/BasicuseEffect/TimerCompo";
import DataFatcher from "./components/BasicuseEffect/DataFatcher";
import ResizeComponent from "./components/BasicuseEffect/ResizeComponent";
import MultiEffectComponent from "./components/BasicuseEffect/MultiEffectComponent";
import One from "./Practice/One";
import { useState } from "react";

function App() {

  const [show,setShow] = useState(true);

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
        <button
        className="bg-gray-600 p-1"
        onClick={() => setShow(!show)}
        >Toggle One Component</button>
        {show && <One />}
      </div>
    </div>
  );
}

export default App;
