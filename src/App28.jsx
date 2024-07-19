import React from 'react'
import { useState } from 'react'
import ExpComp from './ExpComp'
export default function App28() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <ExpComp count={1}/>
        <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}