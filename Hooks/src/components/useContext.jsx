import React, { useState } from 'react'
import FComponent from './FComponent';
import CComponent from './CComponent';
import { CounterContext } from './CounterContext';


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

        <CounterContext.Provider value={counter}>

        <FComponent  />
        <hr></hr>
        <CComponent />

        </CounterContext.Provider>

    </div>
  )
}

export default Context;