import React, { createContext, useContext, useState } from "react";
import About from "./about";

export const CounterContext = createContext(null);

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      This is Home
      <CounterContext.Provider
      value={{count, setCount}}
      >
        <About />
      </CounterContext.Provider>
    </div>
  );
};

export default Home;