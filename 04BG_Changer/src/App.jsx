import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className=" bg-gray-600 h-screen w-full flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-white mt-10 font-extrabold text-4xl">{color}</h1>
      <div className="fixed bottom-1 bg-white rounded-4xl p-4 mb-4 flex gap-6">
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-amber-50"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-amber-50"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-black"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-amber-50"
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-amber-50"
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-amber-50"
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-amber-50"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>

        <button
          className="outline-none px-4 py-2 shadow-lg rounded-4xl text-amber-50"
          style={{ backgroundColor: "grey" }}
          onClick={() => setColor("grey")}
        >
          Grey
        </button>
      </div>
    </div>
  );
}

export default App;
