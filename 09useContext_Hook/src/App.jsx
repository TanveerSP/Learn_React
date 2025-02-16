import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./components/ChildA";


// Step 1: Create Context and Export it
export const UseContext = createContext(null);

// Step1: Create Context and Export it
export const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Tanveer" });
  const [theme, setTheme] = useState("light");
  return (
    <>
      <h1> Hello React JS</h1>
      {/* How can use useContext */}
      {/* Step 2 & 3: Wrap child components with Provider */}
      <UseContext.Provider value={user}>
        {/* Theme */}
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div
            id="contaner"
            style={{
              backgroundColor: theme === "light" ? "beige" : "black",
              color: theme === "light" ? "black" : "white",
            }}
          >
            <ChildA />
          </div>
        </ThemeContext.Provider>
      </UseContext.Provider>
    </>
  );
}

export default App;
