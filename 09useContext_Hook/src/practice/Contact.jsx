import React, { useContext } from "react";
import { CounterContext, MyThemeContext } from "./Home";

const Contact = () => {
  const myContext = useContext(CounterContext);
  const myTheme = useContext(MyThemeContext);
  const { count, setCount } = useContext(CounterContext);
  const { theme, setTheme } = useContext(MyThemeContext);

  function toggleMode() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <button onClick={toggleMode}>{theme}</button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Click me {count}
      </button>
    </>
  );
};

export default Contact;
