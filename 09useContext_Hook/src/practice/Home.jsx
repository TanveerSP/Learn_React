import React, { createContext, useContext, useState } from "react";
import About from "./about";

export const CounterContext = createContext(null);
export const MyThemeContext = createContext(null);

const Home = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <MyThemeContext style value={{ theme, setTheme }}>
      <CounterContext.Provider value={{ count, setCount }}>
        This is Home
        <div
         id="contaner"
         style={{
          backgroundColor: theme === 'light' ? 'beige' : 'black',
          color: theme === "light" ? "black" : "white",
        }}
        >
          <About />
        </div>
      </CounterContext.Provider>
    </MyThemeContext>
  );
};

export default Home;
