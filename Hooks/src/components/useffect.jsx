import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [names, setNames] = useState('Ravikumar');

    useEffect(()=> {
        setTimeout(()=>{
            setCount(count => count+1);

        }, 2000)
    },[names])

  function changeName() {
    return setNames("AnujKumar"); 
  }

  return (
    <div>

        <h2>useffect Hooks</h2>
        <p>The number of time Page render is:  {count}</p>
        <p> My name is {names} </p>;
        <button onClick={changeName} >Click Me</button>
       </div>
       
  )
}

export default Counter; 