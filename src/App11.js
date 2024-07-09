
import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default function App11(props) {
  if (props.flag === true) {
    return <Component1 />;
  } else if (props.flag === false) {
    return <Component2 />;
  }
}
