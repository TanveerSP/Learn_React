import Counter from "./components/Counter";
import Weather from "./components/Weather";
import RandomGIF from "./components/RandomGIF";
import LoggarCompo from './components/BasicuseEffect/LoggarCompo'
import "./App.css";
import TimerCompo from "./components/BasicuseEffect/TimerCompo";

function App() {
  return (
    <div className=" w-full h-full ">
      {/* <Counter /> */}
      {/* <Weather /> */}
      {/* <RandomGIF /> */}

      <LoggarCompo />
      <TimerCompo />
    </div>
  );
}

export default App;
