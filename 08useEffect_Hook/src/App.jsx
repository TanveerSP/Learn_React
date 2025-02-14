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

function App() {
  return (
    <div className=" flex flex-col items-center justify-center m-auto w-full h-full ">
      {/* <Counter /> */}
      {/* <Weather /> */}
      {/* <RandomGIF /> */}

      {/* <LoggarCompo /> */}
      {/* <TimerCompo /> */}
      {/* <DataFatcher /> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffectComponent /> */}
      <One />
    </div>
  );
}

export default App;
