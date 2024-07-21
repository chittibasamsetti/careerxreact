import React from 'react'
import Login from "./Login"
import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
export default function Abouts() {
    const [count,setCount]=useState(0)
    const navigate=useNavigate()
    const login=()=>{
       navigate("/login")
    }
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>click {count}</button>
        <button onClick={login}>login</button>
    </div>
  )
}
