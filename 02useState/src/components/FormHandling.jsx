import React, { useState } from "react";

const FormHandling = () => {

  let [name, setName] = useState("");
  let [email, setEmail] = useState("")

  return (
    <div className="w-full max-w-md p-4 bg-gray-300">
      <h2> Simple Form</h2>

      <input
        type="text"
        placeholder="Name"
        className="border p-2 mr-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 mr-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="mt-4">
        <h3>Entered Data:</h3>
        <p>Name:{name}</p>
        <p>Email :{email}</p>
      </div>
    </div>
  );
};

export default FormHandling;


// 2. Form Input Handling
// Create a simple form with fields for name and email.
// Use useState to handle form input values and display
//  the entered data below the form in real time.