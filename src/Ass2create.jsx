import React from 'react'
import "./Ass2.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Ass2create() {
    const [user,setUser]=useState({})
    const [users,setUsers]=useState([])
    const navigate=useNavigate()
    const register=()=>{
       setUsers((prevUsers)=>[...prevUsers,user])
       console.log(users)
    }
    const loginbtn=()=>{
     navigate("/ass2")
    }
  return (
    
    <div style={{borderRadius:'5px',width:'400px',height:'300px',marginLeft:'560px',marginTop:'100px', backgroundColor:'skyblue',paddingTop:'20px', boxShadow:'0px 0px 10px black'}}>
       <p><input type="text" placeholder="Enter Name" className="email" 
       onChange={(e)=>setUser((prevUser)=>(
        {...prevUser,name:e.target.value}))}></input></p>
       <p><input type="email" placeholder='Enter Email' className='email' onChange={(e)=>setUser((prevUser)=>(
        {...prevUser,email:e.target.value}))}></input></p>

       <p><input type="password" placeholder='Enter Password' className='email' onChange={(e)=>setUser((prevUser)=>(
        {...prevUser,password:e.target.value}))}></input></p>

       <p><button className='login' onClick={register}>Register</button></p>
       {/* {users.map((value)=>(
        <div>
            {value.name}-{value.email}-{value.password}
        </div> 
       ))}*/}
       <hr></hr>
       <button className='create' onClick={loginbtn}>Login</button>
    </div>
    
  )
}
