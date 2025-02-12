import Counter from "./components/Counter";
import Weather from "./components/Weather";
import RandomGIF from "./components/RandomGIF";
import "./App.css";

function App() {
  return (
    <div className="w-full h-full ">
      <Counter />
      <Weather />
      <RandomGIF />
    </div>
  );
}

export default App;
