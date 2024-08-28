// usecase of UseRef Hook
// 1. Dom reference 
// 2. useRef for storing previous state
// 3. Hold Mutable value prevent re-render of Component



import React, {useState, useRef} from 'react'

function Component() {
    const [name, setName] = useState('');
    

    const inputE1 = useRef(' ');

    const resetInput = () =>{
        setName(" ");
        inputE1.current.focus();
    };


  return (
    <div>
        <h3>useRef Hook </h3> 
        <input name="name"
        ref = {inputE1}
        type="text"
        autoComplete='off'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <button onClick={resetInput}>Reset</button>
        <p>My name is {name} </p>



    </div>
  )
}

export default Component;