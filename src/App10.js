
import React from "react";
import { useState } from "react";
export default function App10() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [result, setResult] = useState();
  const validate = () => {
    if (email === "john@gmail.com" && password === "1234") {
      setResult("Welcome");
    } else {
      setResult("Access Denied");
    }
  };
  return (
    <div>
      <h2>Login form</h2>
      <p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
      </p>
      <p>
        <button onClick={validate}>Login</button>
      </p>
      {result}
    </div>
  );
}
