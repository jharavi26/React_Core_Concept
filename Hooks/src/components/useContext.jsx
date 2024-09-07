import React, { useState } from 'react'
import FComponent from './FComponent';
import CComponent from './CComponent';


function Context() {
    const [counter, setCounter] = useState(0);
    const increment = ()=>{
        setCounter(counter+1);
    };

    const decrement = ()=>{
        setCounter(counter-1);
    };

  return (
    <div>
        <h1>UseContext Hook used</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Addition</button>
        <button onClick={decrement}>Deletion</button>

        <hr></hr>

        <FComponent counter= {counter} />
        <hr></hr>
        <CComponent counter = {counter} />

    </div>
  )
}

export default Context;