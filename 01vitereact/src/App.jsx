import { useState } from "react";
import Home from "./Home";


function App() {

  const username = 'tanveer'
  return (
    <>
     <Home />
     <h1>my name {username}</h1>
     <p>test par</p>
    </>
  );
}

export default App;
