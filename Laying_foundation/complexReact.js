import React from "react"
import ReactDOM from "react-dom/client"
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"baby"},"Hi from nepal"),
    React.createElement("h2",{id:"mm"},"h2tage")
]));

const jsxParent=(<h1 id="parent">Hi jsx</h1>);
//both jsx and  parent return the same object 
//browsers don't understand jsx but how is it understanding the jsx code?
//parcel is responsible for browser to understand the jsx code.
//when the code goes to js engine the code is transpiled before it goes to the js engine 
//and then js engine receives the code which browsers can understand
// and parcel is responsible for it but its like manager and give this responsibility of transpilation  to Babel
const Title=()=>(
      <h1 id="parent">Hi Title</h1>
)
const Heading=()=> (//jsx starts from here 
  <div>
    <Title/> 
    <Title></Title>
    {Title()}
     <h1 id="parent">Hi component</h1>
    </div>
//ends here 
)
console.log(jsxParent);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);// way to render functional compoenht in react.

