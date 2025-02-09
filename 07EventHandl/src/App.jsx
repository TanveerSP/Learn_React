import { useState } from "react";
import Button from "./Components/Button";
import ColorChg from "./Components/ColorChg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" w-full h-screen  text-white flex items-center justify-center ">
      {/* <Button /> */}
      <div className="max-w-md h-[200px] p-4 border-[1px] border-black">
        <ColorChg />
      </div>
    </div>
  );
}

export default App;
