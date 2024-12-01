// UseState Hook :- Used to add state to a functional component.

import React from 'react'
import { useState } from 'react';

function State() {
  const [count, setCount]= useState(0);

  const changeCount = ()=>{
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
}
  return (
    <div>
      <h1> Count is {count}</h1>
      <button style={{backgroundColor:'lightblue'}} onClick={changeCount}>Increment</button>
      
    </div>
  )
}

export default State;


