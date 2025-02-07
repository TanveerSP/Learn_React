import { useState } from "react";
import Home from "./Home";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";

function App() {
  const username = "tanveer";

  const [isLoggedIn, setLoggedIn] = useState(false);

  // if(isLoggedIn){
  //   return (
  //     <LogoutBtn />
  //   )
  // } else {
  //   <LoginBtn />
  // }

  if(!isLoggedIn){
    return (
      <LoginBtn />
    )
  }

  return (
  <div>
    {/* {isLoggedIn ? <LogoutBtn /> : <LoginBtn />} */}

    <h1>Welcome to web dev course</h1>
    <div>
      {isLoggedIn && <LogoutBtn /> }
    </div>
  </div>
  );
}

export default App;
