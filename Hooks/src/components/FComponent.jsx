import React, { useContext } from 'react'
import { CounterContext } from './CounterContext';

function FComponent({counter}) {
    const value = useContext(CounterContext);
  return (
    <div>
        <h1>Function Component</h1>
       
        <h3>{value}</h3>
        <hr></hr>
        <Fchild />
    </div>
  );
}

const Fchild = ({counter}) =>{
    const value = useContext(CounterContext);
    return(
        <div>
            <h1>Function child Component</h1>
           
            <h3>{value}</h3>
        </div>
    );
};

export default FComponent