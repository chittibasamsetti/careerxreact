import React from "react";
import { useState,useMemo } from "react";
export default function App29() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(10);
  const f1 = () => {
    let i;
    for (i = 0; i <= flag ** 2; i++) {}
    console.log("result function called");
    return i;
  };
  const result = useMemo(()=>f1(),[flag])
//   const result = f1();
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setFlag(flag + 1)}>{flag}</button>
      <p>{result}</p>
    </div>
  );
}