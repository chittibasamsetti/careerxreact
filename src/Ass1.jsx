import React from 'react'
import { useState,useEffect } from 'react'
export default function App21() {
    const [student,setStudent]=useState({});
    const [students,setStudents]=useState([]);
    const [totalcart,setTotalcart]=useState(0);
     useEffect(()=>{
        const total=students.reduce((total,currentObj)=>{
           return total+currentObj.price*currentObj.quantity
     },0);
        setTotalcart(total);
    },[students])

    const fun=()=>{
        setStudents((preStudents)=>([...preStudents,student]));
    }
  return (
    <div>
        <p><input type="text" placeholder='Product name' onChange={(e)=>setStudent((preStudent)=>({
            ...preStudent,
            productName: e.target.value
        }))}></input></p>
        <p>
            <input type="text" placeholder="Price" onChange={(e)=>setStudent((preStudent)=>({
                ...preStudent,price: e.target.value
            }))}></input>
        </p>
        <p>
           <input type="number" placeholder='Quantity' onChange={(e)=>setStudent((preStudent)=>({ 
            ...preStudent,quantity:e.target.value
         }))} ></input> 
        </p>
        <p>
        <button onClick={fun}>Add to Cart</button>
        </p>
       

        <div>
            {/* {student.name}-{student.age} */}
        {students.map((value,index)=>( 
            <div key={index}>
           Product Name : {value.productName},
           Price : {value.price},
           Quantity : {value.quantity}
        <p>Total :{value.price*value.quantity}</p>
            </div>
        ))}
        <div>
            <h1>Total Cart Amount : {totalcart}</h1>
        </div>
        
        </div>
    </div>
  )
}
