// usecase of UseRef Hook
// 1. Dom reference 
// 2. useRef for storing previous state
// 3. Hold Mutable value prevent re-render of Component



import React, {useState, useRef, useEffect} from 'react'

function Component() {
    const [name, setName] = useState('');
    const [counter, setCounter] = useState(0);

    const inputE1 = useRef(' ');
    const preCounterRef = useRef(" ");

    useEffect(() => {
      
      preCounterRef.current = counter ;
    }, [counter]);

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

        <hr></hr>


        <button onClick={resetInput}>Reset</button>
        <p>My name is {name} </p>

        {/* useRef for Storing Previous state Value  */}

        <div>
          <h4>Random counter : {counter} </h4>
          { typeof preCounterRef.current !== "undefined" && (
            <h5> previous counter : {preCounterRef.current} </h5>
          )}
          <button onClick={ (e) => setCounter(Math.ceil(Math.random()*100))}>Generate Number </button>
        </div>



    </div>


  )
}

export default Component;