// State represents data that may change over time.
//Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features in functional components.
// useState :-  Adds state to functional components.

import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <>
    <p>Count : {count} </p>
    <button onClick={()=> setCount(count+1)}>Increment </button>
    <button onClick={()=> setCount(count-1)}>Decrement </button>
    </>
  )
}

export default Counter;
