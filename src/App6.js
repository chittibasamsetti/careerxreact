
import React from 'react'
import "./App6.css"
export default function App6() {
    const myStyle = {
        backgroundColor : "pink"
    }
  return (
    <div>
        <h1 style={{backgroundColor:'yellow'}}>Hello World</h1>
        <h1 style={myStyle}>Good Morning</h1>
        <h1 className="myStyle1">Good Evening</h1>
    </div>
  )
}
