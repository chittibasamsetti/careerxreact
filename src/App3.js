
import React from "react";

export default function App3() {
  const greet = () => {
    alert("Hello World");
  };
  const greet1 = (value) => {
    alert(value);
  };
  const greet2 = (value) => {
    alert(value);
  };
  const greet3 = (value) => {
    const str = "Hello"
    alert(`Hello ${value}`);
  };
  return (
    <div>
      <button onClick={greet}>Greet</button>
      <button onClick={() => greet1("Hi John")}>Greet1</button>
      <input type='text' onChange={(e)=>greet2(e.target.value)}/>
      <input type='text' onChange={(e)=>greet3(e.target.value)}/>
    </div>
  );
}
