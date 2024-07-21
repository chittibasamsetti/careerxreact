import React from 'react'
import "./Ass2.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Ass2() {
  const [email,regEmail]=useState()
  const [password,regPassword]=useState()

  const navigate=useNavigate()
    const create=()=>{
      navigate("/ass2create")
    }
    
  return (
    <div style={{borderRadius:'5px',width:'400px',height:'250px',marginLeft:'550px',marginTop:'100px', backgroundColor:'pink',paddingTop:'20px', boxShadow:'0px 0px 10px black'}}>
     <p><input type="email" placeholder='Enter Email' className='email' onChange={(e)=>regEmail(e.target.value)}></input></p>
     <p><input type="password" placeholder='Enter Password' className='email' onChange={(e)=>regPassword(e.target.value)}></input></p>
     <p><button className='login'>Login</button></p>
     <hr></hr>
     <button className='create' onClick={create}>Create New Account</button>
     
    </div>
  )
}
