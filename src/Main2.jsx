import React from 'react'
import { useState } from 'react';
import Component1 from "./Component1"
import Component2 from "./Component2"
export default function Main2() {
    const [comp,setComp]=useState();
    const fun1=()=>{
        setComp( <Component1/>)
    }
    const fun2=()=>{
        setComp( <Component2/>)
    }
  return (
    <div>
        <button onClick={fun1}>component1</button>
        <button onClick={fun2}>component2</button>
        {comp}
    </div>
  )
}
