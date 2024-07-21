import React from 'react'
import { useState } from 'react'
import Practice1 from './Practice1'
import Practice2 from './Practice2'
export default function Practice() {
  const [email,setEmail]=useState("chitti@gmail.com")
  return (
    <div>
      practice in {email}
      <Practice1 email={email}/>
      <Practice2 email={email}/>
    </div>
  )
}
