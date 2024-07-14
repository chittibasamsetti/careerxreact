
import React from "react";

export default function App14(props) {
  let sum = props.marks.reduce((total, value) => {
    return total + value;
  });
  return <div>Sum of Marks is {sum}</div>;
}
