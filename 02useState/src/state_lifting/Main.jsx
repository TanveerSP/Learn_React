import React, { useState } from "react";
import Card from "./Card";

const Main = () => {
  // Create state
  // manage state
  // change state
  //sabhi child me state ko sync karwasunga

  const [name, setName] = useState("");
  return (
    <div className="p-5">
      <Card title="card1" name={name} setName={setName} />
      <Card title= "card2" name={name} setName={setName} />
      {/* <p>I am inside Parent component and value of name is {name}</p> */}
    </div>
  );
};

export default Main;
