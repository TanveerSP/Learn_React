import React, { useContext } from "react";

import {UseContext, ThemeContext } from "../App"; // import context

const ChildC = () => {
  const user = useContext(UseContext); //  context usage
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="section">
      I am Child B
      <br />
      Name: {user.name} Access user object properly
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default ChildC;
