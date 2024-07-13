
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App13 from "./App13"
import App14 from "./App14"
const fun=(n)=>{
return n*n
}
 const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<App flag={true}/>);
root.render(
    <>
    <App13 fn={fun} val={5}/>
    <App14 fn={fun} val={8}/>
    </>

)


 
