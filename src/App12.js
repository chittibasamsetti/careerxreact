
import React from "react";

export default function App12() {
  const arr = ["Rice", "Wheat", "Sugar"];
  return (
    <ul>
      {arr.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
