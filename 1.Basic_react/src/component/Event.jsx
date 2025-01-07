// In HTML event names are usually written in lowercase, like click, mouseover, etc. In React, event names are written in camelCase.

import { useState } from "react";

//Two-way data binding :- refers to a mechanism where changes in the UI (e.g., user inputs) automatically update the state, and any changes to the state automatically update the UI.


function Event(){

  const [text, setText] = useState("")

  function handleChange(e){
    setText(e.target.value)
  }

  const handleClick = (event) => {
    console.log("Event Target: ", event.target);
    console.log("Event Type: ", event.type);
  };

  return (
  <>

  <input type="text" placeholder="Enter Your Name " value ={text} onChange={handleChange} />
  <br/>
  <p>Your Name is {text}</p>

  <button onClick={handleClick}>Click Me!</button><br />
  <input type='text' placeholder="Enter what you want " onChange={(e) =>console.log(e.target.value)}/>

  </>
  )
  
  }
  
export default Event;