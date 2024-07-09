
import React from "react";
import "./App2.css"
export default function App2(props) {
 
  let city = 'Delhi'

  let a = 10
  let b = 20

  return (
    <div className='App2'>
      <h3>Hello {props.name} Welcome to Mystore!</h3>
      <p className='txtStyle'>
        Age:{props.age},{city}<br></br>
        Sum:{a+b}<br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quam
        illo modi recusandae eius ab. Quidem iste pariatur itaque mollitia,
        error magnam soluta, cupiditate maxime ratione molestiae nobis nisi
        laudantium?
      </p>
    </div>
  );
}
