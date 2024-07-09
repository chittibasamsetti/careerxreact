
import React from "react";
import App11 from "./App11";
import { useState } from "react";
export default function Main() {
  const [flag, setFlag] = useState();
  return (
    <div>
      <button onClick={() => setFlag(true)}>Component1</button>
      <button onClick={() => setFlag(false)}>Component2</button>
      <App11 flag={flag} />
    </div>
  );
}
