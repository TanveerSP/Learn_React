import { useState } from "react";
import Home from "./Home";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";


function App() {

  const username = 'tanveer'

  const[isLoggedIn, setLoggedIn] = useState(false);

  if(isLoggedIn){
    return (
      <LogoutBtn />
    )
  } else {
    <LoginBtn />
  }

  return (
    <div>
    
    </div>
  );
}

export default App;
