// Need of State Management :- Local Variable do not persist between renders.
//Local Variable won't trigger render changes.

// State represents data that may change over time.
//Hooks are a powerful feature introduced in React 16.8 that allow you to use state and other React features in functional components.
// useState :-  Adds state to functional components.

//In useState hook is responsible for change internal state not const.

//State batching is React's optimization to group multiple state updates into a single re-render, improving performance.

import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <>
    <p>Count : {count} </p>
    <button onClick={()=> setCount(count=>count+1)}>Increment </button>
    <button onClick={()=> setCount(count-1)}>Decrement </button>
    </>
  )
}

export default Counter;
