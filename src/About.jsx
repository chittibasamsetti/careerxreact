
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
  const [count, setCount] = useState(0);
  const Navigate = useNavigate();
  const increment = () => {
    setCount(count + 1);
    console.log("About component updated");
  };
  const goToLogin = () => {
    Navigate("/login");
  };
  useEffect(() => {
    console.log("About component mounted");
    return () => {
      console.log("About Component unmounted");
    };
  }, []);
  return (
    <div>
      <button onClick={increment}>Click {count}</button>
      <p>
        <button onClick={goToLogin}>Login</button>
      </p>
    </div>
  );
}
