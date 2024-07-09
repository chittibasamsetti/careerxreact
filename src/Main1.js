import React from "react";
import Login from "./Login"
import Home from "./Home"
export default function Main1(props) {
  const flag = props.flag;
  return <>{flag ? <Login /> : <Home />}</>;
}